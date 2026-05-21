# Bilingual CV Landing

Static CV landing page for a professional, dynamic, bilingual personal profile. The page is built with plain HTML, CSS, and JavaScript, so it can be opened directly in a browser or hosted on any static site service.

## Features

- Responsive CV landing layout with profile, experience, skills, about, and contact sections.
- Separate static pages for US English (`/`) and Spanish (`/es/`).
- Language switcher links between the static language pages.
- Language-specific WebP profile portraits through files in `assets/`.
- Lightweight interaction styles with reduced-motion support.
- No framework, package manager, or build step required.

## Project Structure

```text
.
├── AGENTS.md
├── README.md
├── assets/
│   ├── profile-es.webp
│   └── profile-us.webp
├── es/
│   └── index.html
├── CNAME
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

Then visit `http://localhost:8000`.

## Customization

- Edit English copy in `index.html` and Spanish copy in `es/index.html`.
- Replace placeholder links in both HTML files, especially email, LinkedIn, and GitHub.
- Replace the WebP portraits in `assets/` with real photos or generated images. Keep the same file names, or update the image paths in both HTML files.
- If the portrait dimensions change, update the matching `width` and `height` values in both HTML files so the browser does not upscale small images.
- Adjust the visual theme per language with the CSS custom properties for each `body[data-locale]`.

## Deployment

This project is static. Deploy the folder to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting provider.

For GitHub Pages with the custom domain `pablogarciaortega.com`, keep the root-level `CNAME` file committed. The canonical public URLs are:

- `https://pablogarciaortega.com/` for the US English version.
- `https://pablogarciaortega.com/es/` for the Spanish version.

After publishing, submit `https://pablogarciaortega.com/sitemap.xml` in Google Search Console.
