<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card reveal">
        <div class="cta-orb cta-orb-1" />
        <div class="cta-orb cta-orb-2" />

        <div class="cta-content">
          <span class="eyebrow">
            <span class="bar" />
            <span>{{ t('cta.eyebrow') }}</span>
          </span>
          <h2 class="cta-title">
            {{ t('cta.title') }}
          </h2>
          <p class="cta-sub">{{ t('cta.sub') }}</p>
          <div class="cta-actions">
            <a href="https://github.com/evolutions-code/evocode-tauri/releases" target="_blank" rel="noopener" class="btn btn-primary">
              <DownloadOutlined />
              <span>{{ t('cta.download') }}</span>
            </a>
            <a
              href="https://github.com/evolutions-code/evocode"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost"
            >
              <StarFilled />
              <span>{{ t('cta.github') }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DownloadOutlined, StarFilled } from '@ant-design/icons-vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()
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
.cta-actions {
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
.btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-strong);
  color: var(--text-1);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 560px) {
  .cta-card {
    padding: 48px 24px;
  }
}
</style>
