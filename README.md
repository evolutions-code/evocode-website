# evocode-website

The official website for **evocode** — a local AI code assistant bridge.

Built with **Vue 3 + Vite + Ant Design Vue**, styled as an Apple-style dark site
with cool gradients, glass morphism and scroll-reveal animations. The colour
tokens and overall look & feel are kept consistent with the
[`evocode-tauri`](https://github.com/evolutions-code/evocode-tauri) desktop app.

## Tech stack

- **Framework**: Vue 3 (`<script setup>`) + Vite 6
- **UI Kit**: Ant Design Vue 4 (dark algorithm)
- **Routing**: vue-router 4
- **Icons**: @ant-design/icons-vue
- **i18n**: lightweight reactive composable (`en` / `zh`)
- **Styling**: hand-rolled CSS with design tokens (no Tailwind)
- **Deployment**: GitHub Pages via GitHub Actions

## Develop

```sh
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# type-check + production build → dist/
npm run build

# preview production build
npm run preview
```

## Deploy to GitHub Pages

The repo ships with `.github/workflows/deploy.yml`. It:

1. Sets up Node 20
2. Runs `npm ci` and `npm run build` (with `VITE_BASE_URL=/<repo>/`)
3. Uploads `./dist` as the Pages artifact
4. Deploys to GitHub Pages

To enable it:

1. Push the repo to GitHub under `<user>/<repo>`
2. In repo **Settings → Pages**, set **Source** to **GitHub Actions**
3. Push to `main` (or trigger from the Actions tab) — the site will be served at
   `https://<user>.github.io/<repo>/`

The `public/.nojekyll` file bypasses Jekyll so hashed asset filenames aren't
stripped by Pages.

If you publish under a **custom domain** instead, set `VITE_BASE_URL=/` (or
simply leave it unset — the default is `/`) when building:

```sh
VITE_BASE_URL=/ npm run build
```

## Project structure

```
src/
├── App.vue                       ant-design-vue dark theme + nav/footer slots
├── main.ts                       bootstrap
├── router/index.ts               routes + base URL (auto from Vite)
├── styles/global.css             design tokens, base styles, animations
├── composables/
│   ├── useLocale.ts              reactive i18n (en/zh) with localStorage
│   └── useReveal.ts              IntersectionObserver helper
├── locales/
│   ├── en.ts                     English copy
│   └── zh.ts                     Chinese copy
├── components/
│   ├── AppNav.vue                sticky glass nav + language switch
│   ├── AppFooter.vue             brand + 3 link columns + contact email
│   ├── HeroSection.vue           hero + faithful Dashboard preview
│   ├── FeaturesBento.vue         6-card bento grid
│   ├── WorkflowSection.vue       3-step + reliability panel
│   ├── TechSpecsSection.vue      specs + terminal visual
│   └── DownloadCTA.vue           bottom CTA
└── views/
    └── HomeView.vue
.github/
└── workflows/
    └── deploy.yml                GitHub Pages deploy workflow
public/
├── .nojekyll                     disables Jekyll on Pages
└── favicon.svg
```

## Design notes

- **Colour tokens** live in `src/styles/global.css` and are aligned with the
  desktop app (`--brand-500: #4d7dff`, `--bg-app: #05060a`, etc.).
- **Hero preview** faithfully replicates the real `evocode-tauri` Dashboard:
  sidebar + breadcrumb + `BridgeStatus` card + `ContextGrid` session cards.
- **Scroll reveal** uses a single `.reveal` class plus an
  `IntersectionObserver` to add `.in-view` once a section enters the viewport.
- **Animations** (orbs, float, glow, shimmer, pulse) are pure CSS keyframes for
  maximum performance and zero JS overhead.
