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

## Features

- Apple-inspired hero with massive gradient display, animated orbs and a
  floating product preview
- Bento-grid feature section with 6 cards
- Three-step workflow section + a dedicated **session reliability** highlight
  panel that explains the Codex-compat safeguards (end_turn mapping, D-compromise,
  session-aware validation)
- Tech / specs section with a terminal-style visual
- Download CTA + per-platform download page
- Documentation and Changelog pages
- Sticky glass navigation that condenses on scroll
- Footer with brand block and three columns of links
- Full **Chinese / English** toggle (auto-detected from `navigator.language`)

## Project structure

```
src/
├── App.vue                 # ant-design-vue config + nav/footer slots
├── main.ts                 # bootstrap
├── router/index.ts         # routes + scroll behaviour
├── styles/global.css       # design tokens, base styles, animations
├── composables/
│   ├── useLocale.ts        # reactive i18n (en/zh) with localStorage
│   └── useReveal.ts        # IntersectionObserver helper
├── locales/
│   ├── en.ts               # English copy
│   └── zh.ts               # Chinese copy
├── components/
│   ├── AppNav.vue          # sticky glass nav + language switch
│   ├── AppFooter.vue       # brand + 3 link columns
│   ├── HeroSection.vue     # hero + floating preview
│   ├── FeaturesBento.vue   # 6-card bento grid
│   ├── WorkflowSection.vue # 3-step + reliability panel
│   ├── TechSpecsSection.vue# specs + terminal visual
│   └── DownloadCTA.vue     # bottom CTA
└── views/
    ├── HomeView.vue
    ├── DownloadView.vue
    ├── DocsView.vue
    └── ChangelogView.vue
```

## Develop

```sh
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# type-check + production build
npm run build

# preview production build
npm run preview
```

## Design notes

- **Colour tokens** live in `src/styles/global.css` and are aligned with the
  desktop app (`--brand-500: #4d7dff`, `--bg-app: #05060a`, etc.).
- **Scroll reveal** uses a single `.reveal` class plus an
  `IntersectionObserver` to add `.in-view` once a section enters the viewport.
- **Animations** (orbs, float, glow, shimmer) are pure CSS keyframes for
  maximum performance and zero JS overhead.
