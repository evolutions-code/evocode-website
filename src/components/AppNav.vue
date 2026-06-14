<template>
  <header class="app-nav" :class="{ scrolled }">
    <div class="nav-inner">
      <router-link to="/" class="brand" @click="closeMenu">
        <span class="logo">
          <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
            <defs>
              <linearGradient id="navlogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4d7dff" />
                <stop offset="60%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#22d3ee" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#navlogo)" />
            <path d="M11 13 L11 11 L21 11 L21 13 M11 16 L21 16 M11 19 L21 19 M11 22 L21 22" stroke="#fff" stroke-width="1.6" stroke-linecap="round" fill="none" />
            <circle cx="9" cy="11" r="1.2" fill="#fff" />
            <circle cx="9" cy="16" r="1.2" fill="#fff" />
            <circle cx="9" cy="19" r="1.2" fill="#fff" />
            <circle cx="9" cy="22" r="1.2" fill="#fff" />
          </svg>
        </span>
        <span class="brand-text">evocode</span>
      </router-link>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#features" @click="closeMenu">{{ t('nav.features') }}</a>
        <a href="#workflow" @click="closeMenu">{{ t('nav.workflow') }}</a>
        <a href="#tech" @click="closeMenu">{{ t('nav.technology') }}</a>
      </nav>

      <div class="nav-actions">
        <button
          class="lang-toggle"
          :title="t('common.switchLang')"
          @click="toggle"
        >
          <GlobalOutlined />
          <span class="lang-text">{{ t('common.switchLang') }}</span>
        </button>
        <a
          href="https://github.com/evolutions-code/evocode"
          target="_blank"
          rel="noopener"
          class="ghost-btn"
        >
          <GithubOutlined />
          <span>{{ t('nav.github') }}</span>
        </a>
        <a href="https://github.com/evolutions-code/evocode-tauri/releases" target="_blank" rel="noopener" class="primary-btn">
          <span>{{ t('nav.download') }}</span>
          <ArrowRightOutlined />
        </a>
        <button
          class="menu-toggle"
          :class="{ open: menuOpen }"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { GithubOutlined, ArrowRightOutlined, GlobalOutlined } from '@ant-design/icons-vue'
import { useLocale } from '@/composables/useLocale'

const { t, toggle } = useLocale()
const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 16
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.app-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  background: rgba(5, 6, 10, 0);
  border-bottom: 1px solid transparent;
  transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
}
.app-nav.scrolled {
  background: rgba(5, 6, 10, 0.7);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text-1);
}
.logo {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, #4d7dff, #8b5cf6);
  box-shadow: var(--shadow-glow);
  filter: drop-shadow(0 0 8px rgba(77, 125, 255, 0.45));
}
.brand-text {
  font-size: 17px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 13.5px;
  color: var(--text-3);
}
.nav-links a {
  position: relative;
  transition: color 0.2s ease;
  padding: 6px 2px;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-1);
}
.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, #4d7dff, #8b5cf6);
  transition: right 0.25s ease;
}
.nav-links a:hover::after {
  right: 0;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.lang-toggle,
.ghost-btn,
.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.005em;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  border: 1px solid var(--border-strong);
}
.lang-toggle {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-2);
}
.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-1);
}
.lang-toggle .lang-text {
  font-weight: 600;
  font-size: 12.5px;
}
.ghost-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-2);
}
.ghost-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-1);
}
.primary-btn {
  background: linear-gradient(135deg, #4d7dff, #8b5cf6);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 6px 22px rgba(77, 125, 255, 0.35);
}
.primary-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 32px rgba(77, 125, 255, 0.5);
  color: #fff;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 0;
  width: 32px;
  height: 32px;
  position: relative;
  cursor: pointer;
  color: var(--text-1);
}
.menu-toggle span {
  position: absolute;
  left: 6px;
  right: 6px;
  height: 2px;
  background: var(--text-1);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease, top 0.25s ease;
}
.menu-toggle span:nth-child(1) {
  top: 11px;
}
.menu-toggle span:nth-child(2) {
  top: 15px;
}
.menu-toggle span:nth-child(3) {
  top: 19px;
}
.menu-toggle.open span:nth-child(1) {
  top: 15px;
  transform: rotate(45deg);
}
.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}
.menu-toggle.open span:nth-child(3) {
  top: 15px;
  transform: rotate(-45deg);
}

@media (max-width: 980px) {
  .nav-links {
    position: fixed;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 12px 18px 18px;
    background: rgba(11, 13, 18, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav-links a {
    padding: 14px 4px;
    border-bottom: 1px solid var(--border);
  }
  .nav-links a:last-child {
    border-bottom: 0;
  }
  .ghost-btn span {
    display: none;
  }
  .menu-toggle {
    display: inline-block;
  }
}
</style>
