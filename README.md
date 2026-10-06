# Yunaplena portfolio

Static Astro portfolio recreated from the public Cargo site.

## Run locally

```powershell
npm install
npm run dev
```

Astro prints the local preview address when it starts. Create the deployable static site with:

```powershell
npm run build
```

The generated site is in `dist/`. Photos and artwork are in `src/assets/media/` and are converted at build time to AVIF/WebP in several sizes (see `src/components/Photo.astro`); fonts are self-hosted in `public/fonts/`; `media-manifest.json` records their Cargo source URLs and `scripts/download-media.mjs` can fetch them again.

The Yunaplena presentation remains an embedded Vimeo player. Instrument Serif is loaded from Google Fonts; DM Sans is used as a close replacement for Cargo's Diatype body font.
