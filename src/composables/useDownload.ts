import { ref, onMounted, readonly } from 'vue'

export interface DownloadUrls {
  tag: string
  macDmg: string
  macArm64Dmg: string
  winExe: string
  winMsi: string
  linuxAppImage: string
  linuxDeb: string
}

const GITHUB_API = 'https://api.github.com/repos/evolutions-code/evocode-tauri/releases/latest'

function stripV(tag: string): string {
  return tag.startsWith('v') ? tag.slice(1) : tag
}

let cachedUrls: DownloadUrls | null = null
let fetchPromise: Promise<DownloadUrls> | null = null

async function fetchLatest(): Promise<DownloadUrls> {
  const res = await fetch(GITHUB_API)
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const data = await res.json()
  const tag: string = data.tag_name
  const assets: Array<{ name: string; browser_download_url: string }> = data.assets

  function find(pattern: string): string {
    const asset = assets.find(a => a.name.includes(pattern))
    return asset ? asset.browser_download_url : ''
  }

  return {
    tag,
    macDmg: find('aarch64.dmg'),
    macArm64Dmg: find('aarch64.dmg'),
    winExe: find('x64-setup.exe'),
    winMsi: find('x64_en-US.msi'),
    linuxAppImage: find('.AppImage'),
    linuxDeb: find('.deb'),
  }
}

function getLatest(): Promise<DownloadUrls> {
  if (cachedUrls) return Promise.resolve(cachedUrls)
  if (!fetchPromise) {
    fetchPromise = fetchLatest().then(urls => {
      cachedUrls = urls
      return urls
    })
  }
  return fetchPromise
}

export function detectOS(): 'mac' | 'windows' | 'linux' | 'other' {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  if (/Mac/i.test(ua)) return 'mac'
  if (/Win/i.test(ua)) return 'windows'
  if (/Linux/i.test(ua)) return 'linux'
  return 'other'
}

export function useDownload() {
  const urls = ref<DownloadUrls>({ tag: '', macDmg: '', macArm64Dmg: '', winExe: '', winMsi: '' })
  const loading = ref(true)
  const error = ref<string | null>(null)
  const os = ref(detectOS())

  onMounted(async () => {
    try {
      urls.value = await getLatest()
    } catch (e: any) {
      error.value = e?.message ?? 'Failed to fetch latest release'
    } finally {
      loading.value = false
    }
  })

  return {
    urls: readonly(urls),
    loading: readonly(loading),
    error: readonly(error),
    os: readonly(os),
  }
}
