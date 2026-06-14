<template>
  <section id="tech" class="tech">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">
          <span class="bar" />
          <span>{{ t('tech.eyebrow') }}</span>
        </span>
        <h2 class="section-title">
          {{ t('tech.title1') }}
          <span class="gradient-text">{{ t('tech.title2') }}</span>
        </h2>
        <p class="section-sub">{{ t('tech.sub') }}</p>
      </div>

      <div class="tech-card reveal">
        <div class="tech-grid">
          <div
            v-for="(item, i) in tc('tech.specs')"
            :key="i"
            class="tech-item"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <span class="tech-label">{{ item.label }}</span>
            <span class="tech-value mono">{{ item.value }}</span>
          </div>
        </div>

        <div class="tech-visual">
          <div class="visual-glow" />
          <div class="visual-frame">
            <div class="visual-line">
              <span class="muted-3">$</span>
              <span class="cmd">evocode</span>
              <span class="muted-2">codex</span>
            </div>
            <div class="visual-line">
              <span class="muted-3">→</span>
              <span class="ok">bridge listening on</span>
              <span class="hl mono">127.0.0.1:17761</span>
            </div>
            <div class="visual-line">
              <span class="muted-3">→</span>
              <span class="muted-2">provider:</span>
              <span class="hl">openai_chat</span>
              <span class="muted-3">/</span>
              <span class="hl">anthropic</span>
              <span class="muted-3">/</span>
              <span class="hl">custom</span>
            </div>
            <div class="visual-line">
              <span class="muted-3">→</span>
              <span class="muted-2">session safeguards:</span>
              <span class="ok mono">end_turn · D-compromise · validation</span>
            </div>
            <div class="visual-line">
              <span class="muted-3">→</span>
              <span class="muted-2">ready.</span>
              <span class="cursor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLocale } from '@/composables/useLocale'

const { t, tc } = useLocale()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )
  document.querySelectorAll('.tech .reveal, .tech .tech-item').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.tech {
  padding: 120px 0 80px;
  position: relative;
}
.section-head {
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
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
.section-title {
  font-size: clamp(34px, 4.6vw, 60px);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.03em;
  margin: 0;
  max-width: 22ch;
  text-wrap: balance;
}
.section-sub {
  font-size: clamp(14px, 1.2vw, 17px);
  color: var(--text-3);
  max-width: 56ch;
  margin: 0;
  line-height: 1.65;
}

.tech-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border-radius: var(--r-3xl);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0));
  box-shadow: var(--shadow-lg);
}
.tech-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--border);
}
.tech-item {
  background: rgba(11, 13, 18, 0.6);
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.tech-label {
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.tech-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-1);
}

.tech-visual {
  position: relative;
  padding: 32px;
  background:
    radial-gradient(600px 300px at 100% 0%, rgba(139, 92, 246, 0.18), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
}
.visual-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(280px 200px at 30% 70%, rgba(34, 211, 238, 0.16), transparent 70%);
  pointer-events: none;
}
.visual-frame {
  position: relative;
  z-index: 1;
  width: 100%;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 13px;
  line-height: 1.85;
  color: var(--text-2);
}
.visual-line {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: baseline;
}
.visual-line .muted-2 {
  color: var(--text-3);
}
.visual-line .muted-3 {
  color: var(--text-4);
}
.visual-line .hl {
  color: var(--brand-300);
}
.visual-line .cmd {
  color: #c084fc;
  font-weight: 600;
}
.visual-line .ok {
  color: var(--ok);
}
.visual-line .cursor {
  display: inline-block;
  width: 8px;
  height: 14px;
  background: var(--brand-300);
  animation: glow 1.1s ease-in-out infinite;
}

@media (max-width: 960px) {
  .tech-card {
    grid-template-columns: 1fr;
  }
  .tech-visual {
    border-top: 1px solid var(--border);
  }
}
@media (max-width: 560px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>
