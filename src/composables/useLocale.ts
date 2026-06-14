import { computed, ref, watch } from 'vue'
import en from '@/locales/en'
import zh from '@/locales/zh'

export type Locale = 'en' | 'zh'

const STORAGE_KEY = 'evocode.website.locale'

function readInitial(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'zh') return stored
  const navLang = window.navigator.language.toLowerCase()
  return navLang.startsWith('zh') ? 'zh' : 'en'
}

const dict: Record<Locale, any> = { en, zh }
const locale = ref<Locale>(readInitial())

watch(locale, (v) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', v === 'zh' ? 'zh-CN' : 'en')
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, v)
  }
})

function get(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => (acc != null ? acc[key] : undefined), obj)
}

export function useLocale() {
  const t = (key: string): string => {
    const value = get(dict[locale.value], key)
    return typeof value === 'string' ? value : key
  }

  const tc = (path: string): any => get(dict[locale.value], path)

  const toggle = () => {
    locale.value = locale.value === 'en' ? 'zh' : 'en'
  }

  const set = (next: Locale) => {
    locale.value = next
  }

  return {
    locale: computed(() => locale.value),
    t,
    tc,
    toggle,
    set,
  }
}
