/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base public path (with trailing slash). */
  readonly VITE_BASE_URL?: string
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
