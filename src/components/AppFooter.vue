<template>
  <footer class="app-footer">
    <div class="footer-inner container">
      <div class="footer-top">
        <div class="brand-block">
          <div class="brand-row">
            <span class="logo">
              <img src="/logo.png" alt="evocode" width="22" height="22" />
            </span>
            <span class="brand-name">evocode</span>
          </div>
          <p class="tagline">{{ t('footer.tagline') }}</p>
          <div class="cta-row">
            <a
              v-if="downloadUrl"
              :href="downloadUrl"
              class="cta-btn primary"
            >
              <DownloadOutlined />
              <span>{{ t('nav.download') }}</span>
            </a>
            <a
              v-else
              href="https://github.com/evolutions-code/evocode-tauri/releases"
              target="_blank"
              rel="noopener"
              class="cta-btn primary"
            >
              <DownloadOutlined />
              <span>{{ t('nav.download') }}</span>
            </a>
            <a
              href="https://github.com/evolutions-code/evocode"
              target="_blank"
              rel="noopener"
              class="cta-btn"
            >
              <StarFilled />
              <span>{{ t('cta.github') }}</span>
            </a>
          </div>
        </div>

        <div class="link-cols">
          <div class="link-col">
            <h5>{{ t('footer.product') }}</h5>
            <a href="#features">{{ t('footer.links.features') }}</a>
            <a href="#features">{{ t('footer.links.sessions') }}</a>
            <a href="#features">{{ t('footer.links.prompts') }}</a>
            <a href="#workflow">{{ t('footer.links.workflow') }}</a>
            <a href="#tech">{{ t('footer.links.technology') }}</a>
            <a
              v-if="downloadUrl"
              :href="downloadUrl"
            >{{ t('footer.links.download') }}</a>
            <a
              v-else
              href="https://github.com/evolutions-code/evocode-tauri/releases"
              target="_blank"
              rel="noopener"
            >{{ t('footer.links.download') }}</a>
          </div>
          <div class="link-col">
            <h5>{{ t('footer.resources') }}</h5>
            <a href="https://github.com/evolutions-code/evocode-tauri/releases" target="_blank" rel="noopener">{{ t('footer.links.releases') }}</a>
            <a href="https://github.com/evolutions-code/evocode-tauri/issues" target="_blank" rel="noopener">{{ t('footer.links.issues') }}</a>
            <a href="https://github.com/evolutions-code/evocode-tauri/blob/main/README.md" target="_blank" rel="noopener">{{ t('footer.links.readme') }}</a>
          </div>
          <div class="link-col contact-col">
            <h5>{{ t('footer.contact') }}</h5>
            <a href="mailto:zhuxiujia@qq.com" class="email-link">
              <MailOutlined />
              <span class="mono">zhuxiujia@qq.com</span>
            </a>
            <a href="https://github.com/evolutions-code" target="_blank" rel="noopener" class="gh-link">
              <GithubOutlined />
              <span>{{ t('footer.links.org') }}</span>
            </a>
            <a href="https://discord.gg/33eh74ScXv" target="_blank" rel="noopener" class="gh-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.054C1.482 8.33.726 12.2.906 16.007a.08.08 0 0 0 .031.061 19.958 19.958 0 0 0 6.003 3.026.076.076 0 0 0 .082-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.087 13.087 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.69 12.69 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.936 19.936 0 0 0 6.002-3.026.077.077 0 0 0 .032-.06c.223-4.31-.693-8.157-2.87-11.584a.061.061 0 0 0-.031-.054zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/></svg>
              <span>{{ t('footer.links.discord') }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="copy">© 2025–{{ year }} evolutions-code. {{ t('footer.copyright') }}</span>
        <div class="meta">
          <span class="status-dot" />
          <span>{{ t('footer.status') }}</span>
          <span class="sep">·</span>
          <span>{{ versionDisplay }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { DownloadOutlined, StarFilled, MailOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { useLocale } from '@/composables/useLocale'
import { useDownload, detectOS } from '@/composables/useDownload'

const { t } = useLocale()
const year = computed(() => new Date().getFullYear())

const os = ref(detectOS())
const { urls } = useDownload()

const downloadUrl = computed(() => {
  if (os.value === 'mac' && urls.value.macDmg) return urls.value.macDmg
  if (os.value === 'windows') {
    if (urls.value.winMsi) return urls.value.winMsi
    if (urls.value.winExe) return urls.value.winExe
  }
  if (urls.value.macDmg) return urls.value.macDmg
  if (urls.value.winMsi) return urls.value.winMsi
  if (urls.value.winExe) return urls.value.winExe
  return ''
})

const versionDisplay = computed(() => {
  return urls.value.tag || 'v0.1.25'
})
</script>

<style scoped>
.app-footer {
  margin-top: 120px;
  padding: 72px 0 32px;
  position: relative;
  border-top: 1px solid var(--border);
  background: linear-gradient(180deg, transparent 0%, rgba(77, 125, 255, 0.04) 100%);
}
.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
}
.brand-row {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.logo {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: linear-gradient(135deg, #4d7dff, #8b5cf6);
  box-shadow: var(--shadow-glow);
}
.brand-name {
  font-size: 18px;
  font-weight: 700;
}
.tagline {
  color: var(--text-3);
  font-size: 14px;
  line-height: 1.65;
  max-width: 38ch;
  margin: 0 0 22px;
}
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-1);
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.2s ease, background 0.2s ease;
}
.cta-btn:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.08);
}
.cta-btn.primary {
  background: linear-gradient(135deg, #4d7dff, #8b5cf6);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 6px 22px rgba(77, 125, 255, 0.35);
}
.cta-btn.primary:hover {
  box-shadow: 0 10px 32px rgba(77, 125, 255, 0.5);
  color: #fff;
}

.link-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.link-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.link-col h5 {
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
}
.link-col a {
  font-size: 13.5px;
  color: var(--text-2);
  transition: color 0.2s ease;
}
.link-col a:hover {
  color: var(--text-1);
}

.contact-col {
  gap: 10px;
}
.email-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(77, 125, 255, 0.12), rgba(139, 92, 246, 0.08));
  border: 1px solid rgba(77, 125, 255, 0.28);
  color: var(--text-1) !important;
  font-size: 13px;
  font-weight: 500;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  width: max-content;
  max-width: 100%;
}
.email-link:hover {
  transform: translateY(-1px);
  border-color: rgba(77, 125, 255, 0.5);
  background: linear-gradient(135deg, rgba(77, 125, 255, 0.18), rgba(139, 92, 246, 0.12));
  color: var(--text-1) !important;
}
.email-link .anticon {
  color: var(--brand-300);
  font-size: 14px;
}
.email-link .mono {
  font-size: 13px;
  color: var(--text-1);
  word-break: break-all;
}
.gh-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-2);
  padding: 4px 0;
}
.gh-link .anticon {
  color: var(--text-3);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  color: var(--text-4);
  font-size: 12.5px;
}
.meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 8px var(--ok);
  animation: glow 2s ease-in-out infinite;
}
.sep {
  color: var(--text-4);
}
@media (max-width: 860px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .link-cols {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
</style>

