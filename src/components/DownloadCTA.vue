<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card reveal">
        <div class="cta-orb cta-orb-1" />
        <div class="cta-orb cta-orb-2" />

        <div class="cta-content">
          <span class="eyebrow">
            <span class="bar" />
            <span>{{ t("cta.eyebrow") }}</span>
          </span>
          <h2 class="cta-title">
            {{ t("cta.title") }}
          </h2>
          <p class="cta-sub">{{ t("cta.sub") }}</p>

          <!-- Platform download buttons — always visible -->
          <div class="platform-btns">
            <!-- macOS -->
            <a
              :href="macHref"
              :target="macTarget"
              :rel="macRel"
              class="btn btn-primary"
            >
              <!-- Apple logo SVG -->
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span>{{ t("download.macos") }}</span>
            </a>
            <!-- Windows -->
            <a
              :href="winHref"
              :target="winTarget"
              :rel="winRel"
              class="btn btn-primary"
            >
              <!-- Windows logo SVG -->
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M3 5.09l7.35-.99v7.07H3V5.09zm7.35 14.81l-7.35-1V12.1h7.35v7.8zM12.7 4l8.3-1.18v8.19h-8.3V4zm8.3 17.18L12.7 20v-7.08h8.3v8.26z"/>
              </svg>
              <span>{{ t("download.windows") }}</span>
            </a>
            <!-- Linux -->
            <a
              :href="linuxHref"
              :target="linuxTarget"
              :rel="linuxRel"
              class="btn btn-primary"
            >
              <!-- Linux penguin logo SVG -->
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12 2C10.34 2 9 3.34 9 5c0 .34.05.67.14 1H7.5C6.67 6 6 6.67 6 7.5S6.67 9 7.5 9h.31c-.18.27-.31.58-.31.93 0 .88.62 1.61 1.44 1.79C9.16 13.27 10.47 14 12 14c1.53 0 2.84-.73 3.06-2.28.82-.18 1.44-.91 1.44-1.79 0-.35-.13-.66-.31-.93h.31c.83 0 1.5-.67 1.5-1.5S17.33 7 16.5 7h-1.64c.09-.33.14-.66.14-1 0-1.66-1.34-3-3-3zm-1.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 16c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm10 0c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm-5.5.5v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1z"/>
              </svg>
              <span>{{ t("download.linux") }}</span>
            </a>
          </div>

          <!-- Version note (only once loaded) -->
          <p class="version-note" v-if="urls.tag">
            {{ t("download.latest") }}
            <a
              :href="`https://github.com/evolutions-code/evocode-tauri/releases/tag/${urls.tag}`"
              target="_blank"
              rel="noopener"
            >{{ urls.tag }}</a>
          </p>

          <div class="cta-actions">
            <a
              href="https://github.com/evolutions-code/evocode"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost"
            >
              <StarFilled />
              <span>{{ t("cta.github") }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { StarFilled } from "@ant-design/icons-vue"
import { useLocale } from "@/composables/useLocale"
import { useDownload } from "@/composables/useDownload"

const { t } = useLocale()
const { urls } = useDownload()

const GITHUB_RELEASES = "https://github.com/evolutions-code/evocode-tauri/releases"

/** macOS: direct download when available, otherwise GitHub releases */
const macHref = computed(() => urls.value.macDmg || GITHUB_RELEASES)
const macTarget = computed(() => urls.value.macDmg ? "_self" : "_blank")
const macRel = computed(() => urls.value.macDmg ? "" : "noopener")

/** Windows: direct download when available, otherwise GitHub releases */
const winHref = computed(() => urls.value.winMsi || urls.value.winExe || GITHUB_RELEASES)
const winTarget = computed(() => (urls.value.winMsi || urls.value.winExe) ? "_self" : "_blank")
const winRel = computed(() => (urls.value.winMsi || urls.value.winExe) ? "" : "noopener")

/** Linux: direct download when available, otherwise GitHub releases */
const linuxHref = computed(() => urls.value.linuxAppImage || urls.value.linuxDeb || GITHUB_RELEASES)
const linuxTarget = computed(() => (urls.value.linuxAppImage || urls.value.linuxDeb) ? "_self" : "_blank")
const linuxRel = computed(() => (urls.value.linuxAppImage || urls.value.linuxDeb) ? "" : "noopener")
</script>

<style scoped>
.cta-section {
  padding: 80px 0 0;
}
.cta-card {
  position: relative;
  border-radius: var(--r-3xl);
  padding: 72px 48px;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background:
    radial-gradient(800px 400px at 10% 0%, rgba(77, 125, 255, 0.25), transparent 60%),
    radial-gradient(700px 400px at 100% 100%, rgba(139, 92, 246, 0.25), transparent 60%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.4));
  box-shadow: var(--shadow-lg);
  text-align: center;
}
.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}
.cta-orb-1 {
  width: 280px;
  height: 280px;
  background: rgba(77, 125, 255, 0.45);
  top: -80px;
  left: -60px;
  animation: orb 10s ease-in-out infinite;
}
.cta-orb-2 {
  width: 260px;
  height: 260px;
  background: rgba(139, 92, 246, 0.4);
  bottom: -100px;
  right: -60px;
  animation: orb 12s ease-in-out infinite;
  animation-delay: -4s;
}
.cta-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 999px;
  background: var(--bg-elev-3);
  border: 1px solid var(--border);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-3);
}
.eyebrow .bar {
  width: 22px;
  height: 2px;
  background: linear-gradient(90deg, #4d7dff, #8b5cf6);
  border-radius: 2px;
}
.cta-title {
  margin: 0;
  font-size: clamp(36px, 5.2vw, 64px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  max-width: 18ch;
  text-wrap: balance;
}
.cta-sub {
  margin: 0;
  color: var(--text-3);
  font-size: clamp(14px, 1.2vw, 17px);
  max-width: 56ch;
  line-height: 1.65;
}

/* Platform buttons — always rendered */
.platform-btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.005em;
  border: 1px solid transparent;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  text-decoration: none;
}
.btn-primary {
  background: linear-gradient(135deg, #4d7dff, #8b5cf6);
  color: #fff;
  box-shadow: 0 8px 32px rgba(77, 125, 255, 0.4);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 44px rgba(77, 125, 255, 0.55);
  color: #fff;
}
.btn-primary svg {
  flex-shrink: 0;
}
.btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-strong);
  color: var(--text-1);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.version-note {
  margin: 0;
  font-size: 12px;
  color: var(--text-4);
}
.version-note a {
  color: var(--brand-300);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.version-note a:hover {
  color: var(--brand-400);
}

.cta-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

@keyframes orb {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(18px, -14px); }
  66% { transform: translate(-12px, 18px); }
}

@media (max-width: 560px) {
  .cta-card {
    padding: 48px 24px;
  }
  .platform-btns {
    flex-direction: column;
    align-items: center;
  }
}
</style>