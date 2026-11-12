# AGENTS.md

Instrucciones para los agentes que trabajan en este repo: el CV bilingüe de
https://pablogarciaortega.com (inglés en `/`, español en `/es/`).

## Qué hay y qué no

- HTML, CSS y JavaScript planos. Sin framework, sin gestor de paquetes, sin
  dependencias, sin build y sin terceros (ni cookies, ni analítica, ni fuentes
  externas).
- `index.html` (inglés, `/`), `es/index.html` (español, `/es/`), `index.css` e
  `index.js` compartidos, retratos en `assets/`, `sitemap.xml`, `robots.txt` y
  `CNAME`.
- `404.html`: la página de error, en los dos idiomas a la vez, que GitHub Pages
  sirve en cualquier ruta que no existe (ver *Página 404*).
- **No hay tests ni lint.** No existe `npm test`, ni linter, ni formateador, ni
  CI. Las comprobaciones de este archivo son lo único que hay.
- No añadas dependencias, `package.json`, archivos de configuración de
  herramientas, workflows ni pasos de build. Si de verdad hace falta uno,
  proponlo antes en la tarea.
- No cambies textos del CV salvo que la tarea lo pida. Ningún texto se publica
  sin el visto bueno de Pablo.

## Servir en local

Desde la raíz del repo (o del worktree), solo hace falta Python 3:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

- Inglés: http://127.0.0.1:8000/ · Español: http://127.0.0.1:8000/es/
- Si el puerto 8000 está ocupado, usa otro y cámbialo también en los comandos
  de abajo.
- Para dejarlo en segundo plano y pararlo al terminar:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!
# … comprobaciones …
kill "$SERVER_PID"
```

Abrir `index.html` directamente en el navegador también funciona, pero las
rutas de `/es/` se comprueban mejor con el servidor.

## Comprobar los cambios

Antes de terminar, con el servidor en marcha, ejecuta los cuatro pasos. Los
tres primeros deben salir con código 0.

### 1. Todo responde 200

```sh
fail=0
for p in / /es/ /index.css /index.js /assets/profile-us.webp /assets/profile-es.webp \
         /favicon.ico /assets/favicon.svg /assets/favicon-96.png /assets/apple-touch-icon.png \
         /assets/share-us.jpg /assets/share-es.jpg /sitemap.xml /robots.txt /CNAME \
         /404.html /assets/vincent-404.mp4 /assets/vincent-404.webm /assets/vincent-404-poster.webp; do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:8000$p")
  echo "$code $p"; [ "$code" = 200 ] || fail=1
done
[ "$fail" = 0 ] && echo "OK: todas las rutas dan 200" || { echo "FALLO: alguna ruta no da 200"; false; }
```

Si añades un archivo que se sirve (una imagen, otra página), añádelo a la lista.

### 2. Coherencia entre `/`, `/es/` y el sitemap

Solo usa la biblioteca estándar de Python. Comprueba lo que debe quedar igual
(ver *Editar el contenido*): `lang`, `data-locale`, `canonical`, `og:url`,
`hreflang`, JSON-LD válido y apuntando a la misma persona, mismos `id` en el
mismo orden en las dos páginas, que existen los archivos locales enlazados y
que el sitemap tiene las dos URLs con los mismos `hreflang`.

```sh
python3 -I - <<'EOF'
import json, os, re, sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

SITE = "https://pablogarciaortega.com"
PAGES = {"index.html": ("en-US", "us", SITE + "/"), "es/index.html": ("es", "es", SITE + "/es/")}
ALTS = {"en": SITE + "/", "es": SITE + "/es/", "x-default": SITE + "/"}
errors = []

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.alts, self.ld, self.meta = [], [], {}, [], {}
        self.lang, self.body, self.in_ld = None, {}, False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a: self.ids.append(a["id"])
        if tag == "html": self.lang = a.get("lang")
        if tag == "body": self.body = a
        if tag == "link" and a.get("rel") == "canonical": self.meta["canonical"] = a["href"]
        if tag == "link" and a.get("rel") == "alternate": self.alts[a["hreflang"]] = a["href"]
        if tag == "meta" and a.get("property") == "og:url": self.meta["og:url"] = a["content"]
        if tag == "script" and a.get("type") == "application/ld+json": self.in_ld = True
        for k in ("href", "src"):
            v = a.get(k)
            if v and not re.match(r"(https?:|mailto:|#)", v): self.refs.append(v)
    def handle_endtag(self, tag):
        if tag == "script": self.in_ld = False
    def handle_data(self, data):
        if self.in_ld: self.ld.append(data)

pages = {}
for path, (lang, locale, url) in PAGES.items():
    p = Page(); p.feed(open(path, encoding="utf-8").read()); pages[path] = p
    if p.lang != lang: errors.append(f"{path}: lang={p.lang}, se esperaba {lang}")
    if p.body.get("data-locale") != locale: errors.append(f"{path}: data-locale={p.body.get('data-locale')}, se esperaba {locale}")
    for k in ("canonical", "og:url"):
        if p.meta.get(k) != url: errors.append(f"{path}: {k}={p.meta.get(k)}, se esperaba {url}")
    if p.alts != ALTS: errors.append(f"{path}: hreflang {p.alts}")
    if len(set(p.ids)) != len(p.ids): errors.append(f"{path}: hay id repetidos")
    try:
        ld = json.loads("".join(p.ld))
        if (ld.get("@type"), ld.get("url"), ld.get("inLanguage")) != ("ProfilePage", url, lang):
            errors.append(f"{path}: JSON-LD @type={ld.get('@type')} url={ld.get('url')} inLanguage={ld.get('inLanguage')}")
        person = ld.get("mainEntity") or {}
        if (person.get("@type"), person.get("@id"), person.get("url")) != ("Person", SITE + "/#person", SITE + "/"):
            errors.append(f"{path}: JSON-LD mainEntity @type={person.get('@type')} @id={person.get('@id')} url={person.get('url')}")
    except ValueError as e:
        errors.append(f"{path}: JSON-LD no válido: {e}")
    for r in p.refs:
        target = os.path.normpath(os.path.join(os.path.dirname(path), r.split("#")[0]))
        if os.path.isdir(target): target = os.path.join(target, "index.html")
        if not os.path.exists(target): errors.append(f"{path}: no existe {r}")

if pages["index.html"].ids != pages["es/index.html"].ids:
    errors.append("los id no son los mismos (o no van en el mismo orden) en / y /es/")

ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
urls = ET.parse("sitemap.xml").getroot().findall("s:url", ns)
locs = sorted(u.find("s:loc", ns).text for u in urls)
if locs != sorted(v[2] for v in PAGES.values()): errors.append(f"sitemap: URLs {locs}")
for u in urls:
    alts = {l.get("hreflang"): l.get("href") for l in u.findall("x:link", ns)}
    if alts != ALTS: errors.append(f"sitemap: hreflang de {u.find('s:loc', ns).text}: {alts}")

print("\n".join(errors) or f"OK: {len(pages['index.html'].ids)} id iguales en / y /es/; lang, canonical, og:url, hreflang, JSON-LD, rutas locales y sitemap coherentes")
sys.exit(1 if errors else 0)
EOF
```

### 3. El JavaScript funciona en un navegador

Hay un Chrome sin interfaz fuera del repo, en `/srv/repos/.tools/`. No lo
instales en el repo.

```sh
T=/srv/repos/.tools
CHROME=$T/chrome-headless-shell-156.0.8078.80/chrome-headless-shell/linux-156.0.8078.80/chrome-headless-shell-linux64/chrome-headless-shell
export LD_LIBRARY_PATH=$T/chrome-libs-deb13/root/usr/lib/x86_64-linux-gnu FONTCONFIG_FILE=$T/chrome-libs-deb13/fonts.conf
for p in / /es/; do
  echo "== $p"
  "$CHROME" --no-sandbox --disable-gpu --dump-dom "http://127.0.0.1:8000$p" 2>/dev/null \
    | grep -o 'href="mailto:[^"]*"\|data-language="[a-z]*"[^>]*>'
done
```

Debe salir, en cada página, un `href="mailto:…"` (lo rellena `index.js`) y
los dos enlaces de idioma, con `aria-label` en el idioma de la página y
`aria-current="page"` solo en el de la página: `us` en `/` y `es` en `/es/`.
Ninguno lleva `aria-pressed` (es un atributo de botones, y son enlaces).

### 4. Mirar cómo queda

Capturas de escritorio y de móvil de las dos páginas, **fuera del repo** (no se
suben):

```sh
T=/srv/repos/.tools
CHROME=$T/chrome-headless-shell-156.0.8078.80/chrome-headless-shell/linux-156.0.8078.80/chrome-headless-shell-linux64/chrome-headless-shell
export LD_LIBRARY_PATH=$T/chrome-libs-deb13/root/usr/lib/x86_64-linux-gnu FONTCONFIG_FILE=$T/chrome-libs-deb13/fonts.conf
OUT=$(mktemp -d)
for p in / /es/; do
  n=$( [ "$p" = / ] && echo en || echo es )
  "$CHROME" --no-sandbox --disable-gpu --hide-scrollbars --window-size=1280,2400 --screenshot="$OUT/$n-escritorio.png" "http://127.0.0.1:8000$p" 2>/dev/null
  "$CHROME" --no-sandbox --disable-gpu --hide-scrollbars --window-size=390,2400  --screenshot="$OUT/$n-movil.png"      "http://127.0.0.1:8000$p" 2>/dev/null
done
ls -l "$OUT"
```

Las fuentes son Liberation/DejaVu (la web no carga fuentes externas): sirven
para comparar antes y después, no como réplica exacta de un navegador real.
Compara las capturas con las de `main` si cambias CSS o maquetación.

### Al final

```sh
git status --short   # solo lo que has cambiado a propósito
git diff --check     # sin espacios sobrantes ni conflictos
```

## Editar el contenido en los dos idiomas

Hay dos páginas independientes con la misma estructura; no hay traducciones en
JavaScript. Todo cambio de texto se hace **en las dos**:

| Idioma | Archivo | URL | `lang` | `data-locale` | Retrato | Recursos |
| --- | --- | --- | --- | --- | --- | --- |
| Inglés | `index.html` | `/` | `en-US` | `us` | `assets/profile-us.webp` | `./index.css`, `./index.js` |
| Español | `es/index.html` | `/es/` | `es` | `es` | `assets/profile-es.webp` | `../index.css`, `../index.js` |

- **Textos:** se cambian en el `<body>` y también en el `<head>`, que repite la
  descripción en `title`, `description`, Open Graph, Twitter Card y JSON-LD.
- **Correo de contacto:** está en `index.js` (`contactEmailAddress`), no en el
  HTML. Los enlaces con `data-email-link` se rellenan solos.
- **Retratos:** sustituye el WebP con el mismo nombre o cambia la ruta en el
  `<img>` y en el JSON-LD `image` de esa página. Si cambian las dimensiones,
  actualiza `width` y `height` del `<img>`. La imagen para compartir lleva el
  retrato dentro: si cambia, rehazla (siguiente punto).
- **Imagen para compartir:** `assets/share-us.jpg` y `assets/share-es.jpg`,
  JPG de 1200×630 y menos de 300 KB, en `og:image` y `twitter:image` de cada
  página, con `og:image:width`, `og:image:height`, `og:image:alt` y
  `twitter:image:alt` en el idioma de la página. Repiten textos del CV (puesto,
  nombre, lema y dominio): si cambian, hay que rehacerlas y cambiar el `alt`.
  Se generan fuera del repo con el Chrome sin interfaz (captura en JPEG de un
  HTML de 1200×630); no se añade ningún paso de build.
- **Iconos:** `assets/favicon.svg` (la marca "P" de la cabecera) es el
  original; `favicon.ico` (16, 32 y 48 px, en la raíz), `assets/favicon-96.png`
  y `assets/apple-touch-icon.png` (180×180, sin transparencia) se generan a
  partir de él con el mismo Chrome. Los cuatro se declaran en el `<head>` de
  las dos páginas.
- **Colores:** propiedades CSS de `:root` en `index.css`; el español las
  sobrescribe en `body[data-locale="es"]`.

### Página 404

- `404.html` va en la raíz y GitHub Pages la sirve, con código 404, en
  cualquier ruta que no existe (también dentro de `/es/`). Por eso todas sus
  rutas son absolutas (`/index.css`, `/assets/…`).
- Lleva el texto en inglés y en español en la misma página, enlaces a `/` y a
  `/es/` y `<meta name="robots" content="noindex">`. No va en el sitemap ni
  lleva `canonical` ni `hreflang`. Sus estilos son el bloque `.not-found` de
  `index.css`.
- El vídeo de Vincent (`assets/vincent-404.webm`, `.mp4` y el póster
  `vincent-404-poster.webp`, 480×270) es decorativo (`aria-hidden`). Con
  `prefers-reduced-motion: reduce` no se reproduce y solo se ve el póster.
  Salieron del GIF original (fuera del repo) con ffmpeg, que no es una
  dependencia del sitio:

```sh
F=/srv/repos/.tools/ffmpeg-7.0.2/ffmpeg   # ffmpeg estático, fuera del repo
G=vincent-404.gif                          # el GIF original
$F -i $G -an -c:v libx264 -preset veryslow -crf 26 -pix_fmt yuv420p -profile:v high -movflags +faststart -map_metadata -1 assets/vincent-404.mp4
$F -i $G -an -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 -deadline good -cpu-used 1 -pix_fmt yuv420p -map_metadata -1 assets/vincent-404.webm
$F -i $G -frames:v 1 -c:v libwebp -quality 80 -map_metadata -1 assets/vincent-404-poster.webp
```

- `python3 -m http.server` no sirve `404.html` en las rutas que no existen
  (da su propio 404). Para probarla como en Pages, sirve el repo en otro
  puerto con este servidor, que solo cambia eso, y abre una ruta que no existe:

```sh
python3 -I - 8001 <<'PY' 2>/dev/null &
import http.server, sys
class H(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code != 404: return super().send_error(code, message, explain)
        body = open("404.html", "rb").read()
        self.send_response(404); self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body))); self.end_headers()
        if self.command != "HEAD": self.wfile.write(body)
http.server.ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1])), H).serve_forever()
PY
SERVER404_PID=$!; sleep 1
curl -s -w '\n%{http_code}\n' http://127.0.0.1:8001/es/noexiste | grep -c 'not-found\|^404$'   # 2 o más
kill "$SERVER404_PID"
```

### Qué debe quedar igual entre `/`, `/es/` y el sitemap

El paso 2 de *Comprobar los cambios* verifica casi todo esto:

- Las mismas secciones con los mismos `id` y en el mismo orden (`profile`,
  `experience`, `skills`, `about`, `contact`…): el selector de idioma conserva
  el `#ancla` al cambiar de página.
- Los mismos `hreflang` en las dos páginas y en el sitemap: `en` → `/`,
  `es` → `/es/`, `x-default` → `/`.
- `canonical` y `og:url` de cada página apuntan a su propia URL.
- JSON-LD: un `ProfilePage` por página, con la `url` y el `inLanguage` de esa
  página (`en-US` o `es`), cuyo `mainEntity` es un solo `Person` con el mismo
  `@id` (`/#person`) y la misma `url` (`/`) en las dos páginas. Cambian el
  `name` del `ProfilePage` (el `<title>`), el idioma de `jobTitle` y
  `description` y la `image` (el retrato de cada idioma).
- Los mismos datos en las dos (nombre, `givenName` y `familyName`, `worksFor`,
  `knowsLanguage`, enlaces de `sameAs`, ubicación), aunque
  el texto esté traducido.
- Si añades una página nueva, va en el `sitemap.xml` con sus `hreflang`, y
  enlazada desde las páginas existentes.
- Si cambia el contenido, actualiza a mano el `<lastmod>` de las URLs afectadas
  en `sitemap.xml` (formato `AAAA-MM-DD`) en la misma PR: nada lo hace solo.

## Despliegue

- GitHub Pages publica la rama `main` desde la raíz (*Deploy from a branch*),
  sin workflows ni Actions. Cada merge a `main` se publica en unos minutos.
- `main` está protegida por un ruleset: nadie sube directamente, todo entra por
  PR. Trabaja en tu rama (`agente/<id-tarea>`), haz push de ella y no hagas
  merge: las PR las revisa y fusiona Pablo.
- No toques `CNAME` (dominio `pablogarciaortega.com`, sin `www`) ni
  `robots.txt` salvo que la tarea lo pida.
- `robots.txt` permite todo salvo los `.md` (`Disallow: /*.md`): Pages publica
  `README.md` y `AGENTS.md`, pero no son parte del CV y no deben rastrearse.
- No hay `.nojekyll`: Pages pasa el sitio por Jekyll. No crees archivos ni
  carpetas que empiecen por `_` sin añadir antes un `.nojekyll` (y proponlo en
  la tarea).
- Después del merge se puede comprobar lo publicado con
  `curl -sI https://pablogarciaortega.com/` (y `/es/`, `/sitemap.xml`).

## Commits

En español y en imperativo, con un prefijo de tipo: `core:` (código,
configuración), `content:` (textos e imágenes del CV), `ci:` (despliegue),
`docs:` (documentación del repo) o `fix:` (corrección de un error).
