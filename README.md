# Bilingual CV Landing

Static CV landing page for a professional, dynamic, bilingual personal profile. The page is built with plain HTML, CSS, and JavaScript, so it can be opened directly in a browser or hosted on any static site service.

## Features

- Responsive CV landing layout with profile, experience, skills, about, and contact sections.
- Separate static pages for US English (`/`) and Spanish (`/es/`).
- Language switcher links between the static language pages.
- Language-specific WebP profile portraits through files in `assets/`.
- Favicon (SVG, ICO, PNG and Apple touch icon) and a 1200×630 share image per language for link previews.
- Lightweight interaction styles with reduced-motion support.
- No framework, package manager, or build step required.

## Project Structure

```text
.
├── AGENTS.md
├── README.md
├── assets/
│   ├── apple-touch-icon.png
│   ├── favicon-96.png
│   ├── favicon.svg
│   ├── profile-es.webp
│   ├── profile-us.webp
│   ├── share-es.jpg
│   └── share-us.jpg
├── es/
│   └── index.html
├── CNAME
├── favicon.ico
├── index.css
├── index.html
├── index.js
├── robots.txt
└── sitemap.xml
```

## Run Locally

Open `index.html` in a browser.

Optional local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` (English) and `http://localhost:8000/es/` (Spanish).

There are no tests, linters or CI. The manual checks before opening a pull request are in `AGENTS.md`.

## Customization

- Edit English copy in `index.html` and Spanish copy in `es/index.html`.
- The contact email is set once in `index.js` (`contactEmailAddress`); links with `data-email-link` are filled in at load time.
- Keep both pages in sync: the same section `id`s, `hreflang` links and JSON-LD `Person`. See `AGENTS.md`.
- Replace the WebP portraits in `assets/` with real photos or generated images. Keep the same file names, or update the image paths in both HTML files.
- The share images (`assets/share-*.jpg`) include the portrait and some CV copy: regenerate them when either changes. See `AGENTS.md`.
- If the portrait dimensions change, update the matching `width` and `height` values in both HTML files so the browser does not upscale small images.
- Adjust the visual theme per language with the CSS custom properties for each `body[data-locale]`.

## Deployment

This project is static and can be hosted on any static hosting provider. It is published with GitHub Pages from the `main` branch (root folder, no workflows): every merge to `main` is deployed. `main` is protected, so all changes go through a pull request.

For GitHub Pages with the custom domain `pablogarciaortega.com`, keep the root-level `CNAME` file committed. The canonical public URLs are:

- `https://pablogarciaortega.com/` for the US English version.
- `https://pablogarciaortega.com/es/` for the Spanish version.

`sitemap.xml` is maintained by hand: update its `lastmod` dates when the content changes. It is submitted in Google Search Console.
