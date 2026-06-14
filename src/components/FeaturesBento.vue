<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">
          <span class="bar" />
          <span>{{ t('features.eyebrow') }}</span>
        </span>
        <h2 class="section-title">
          {{ t('features.title1') }}
          <span class="gradient-text">{{ t('features.title2') }}</span>
        </h2>
        <p class="section-sub">{{ t('features.sub') }}</p>
      </div>

      <div class="bento">
        <article class="bento-card c-wide reveal">
          <div class="card-glow g-blue"></div>
          <div class="card-body">
            <span class="card-icon"><ApiOutlined /></span>
            <h3>{{ t('features.cards.compat.title') }}</h3>
            <p>{{ t('features.cards.compat.body') }}</p>
            <div class="protocol-row">
              <code class="proto mono">POST /v1/chat/completions</code>
              <code class="proto mono">POST /v1/responses</code>
              <code class="proto mono">POST /v1/messages</code>
              <code class="proto mono">GET /v1/models</code>
            </div>
          </div>
        </article>

        <article class="bento-card reveal">
          <div class="card-glow g-purple"></div>
          <div class="card-body">
            <span class="card-icon"><ClusterOutlined /></span>
            <h3>{{ t('features.cards.multi.title') }}</h3>
            <p>{{ t('features.cards.multi.body') }}</p>
            <div class="provider-grid">
              <span class="prov">anthropic</span>
              <span class="prov">openai_chat</span>
              <span class="prov">openai_responses</span>
              <span class="prov muted">+ custom</span>
            </div>
          </div>
        </article>

        <article class="bento-card reveal">
          <div class="card-glow g-cyan"></div>
          <div class="card-body">
            <span class="card-icon"><ThunderboltFilled /></span>
            <h3>{{ t('features.cards.speed.title') }}</h3>
            <p>{{ t('features.cards.speed.body') }}</p>
            <div class="metric">
              <span class="metric-num gradient-text">&lt;100</span>
              <span class="metric-unit">{{ t('features.cards.speed.unit') }}</span>
            </div>
          </div>
        </article>

        <article class="bento-card c-tall reveal">
          <div class="card-glow g-magenta"></div>
          <div class="card-body">
            <span class="card-icon"><LockFilled /></span>
            <h3>{{ t('features.cards.privacy.title') }}</h3>
            <p>{{ t('features.cards.privacy.body') }}</p>
            <ul class="check-list">
              <li v-for="c in tc('features.cards.privacy.checks')" :key="c">
                <CheckCircleFilled />{{ c }}
              </li>
            </ul>
          </div>
        </article>

        <article class="bento-card c-wide reveal">
          <div class="card-glow g-violet"></div>
          <div class="card-body">
            <span class="card-icon"><CodeOutlined /></span>
            <h3>{{ t('features.cards.stack.title') }}</h3>
            <p>{{ t('features.cards.stack.body') }}</p>
            <div class="stack-row">
              <span class="stack">VS Code</span>
              <span class="stack">JetBrains</span>
              <span class="stack">Zed</span>
              <span class="stack">Neovim</span>
              <span class="stack">Sublime</span>
              <span class="stack">Helix</span>
            </div>
          </div>
        </article>

        <article class="bento-card reveal">
          <div class="card-glow g-amber"></div>
          <div class="card-body">
            <span class="card-icon"><ExperimentOutlined /></span>
            <h3>{{ t('features.cards.tools.title') }}</h3>
            <p>{{ t('features.cards.tools.body') }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  ApiOutlined,
  ClusterOutlined,
  ThunderboltFilled,
  LockFilled,
  CheckCircleFilled,
  CodeOutlined,
  ExperimentOutlined,
} from '@ant-design/icons-vue'
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
  document.querySelectorAll('.features .reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.features {
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

.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: minmax(220px, auto);
  gap: 16px;
}
.bento-card {
  position: relative;
  grid-column: span 2;
  border-radius: var(--r-2xl);
  padding: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease;
}
.bento-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.18);
}
.bento-card.c-wide {
  grid-column: span 3;
}
.bento-card.c-tall {
  grid-row: span 2;
}
.card-glow {
  position: absolute;
  inset: -1px;
  pointer-events: none;
  opacity: 0.7;
  border-radius: inherit;
  background: radial-gradient(420px 280px at 20% 0%, var(--g), transparent 70%);
  z-index: 0;
}
.g-blue {
  --g: rgba(77, 125, 255, 0.3);
}
.g-purple {
  --g: rgba(139, 92, 246, 0.32);
}
.g-cyan {
  --g: rgba(34, 211, 238, 0.3);
}
.g-magenta {
  --g: rgba(236, 72, 153, 0.25);
}
.g-violet {
  --g: rgba(124, 58, 237, 0.28);
}
.g-amber {
  --g: rgba(251, 191, 36, 0.25);
}
.card-body {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
}
.card-icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(77, 125, 255, 0.14);
  border: 1px solid rgba(77, 125, 255, 0.3);
  color: var(--brand-300);
  font-size: 18px;
}
.bento-card h3 {
  margin: 4px 0 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--text-1);
}
.bento-card p {
  margin: 0;
  color: var(--text-3);
  font-size: 14px;
  line-height: 1.6;
}

.protocol-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.proto {
  font-size: 11.5px;
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--brand-300);
}

.provider-grid,
.stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.prov,
.stack {
  font-size: 11.5px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  color: var(--text-2);
}

.metric {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 12px;
}
.metric-num {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
}
.metric-unit {
  font-size: 12px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.check-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.check-list li {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: var(--text-2);
}
.check-list li .anticon {
  color: var(--ok);
  font-size: 14px;
}

@media (max-width: 960px) {
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-card,
  .bento-card.c-wide {
    grid-column: span 2;
  }
  .bento-card.c-tall {
    grid-row: auto;
  }
}
@media (max-width: 560px) {
  .bento {
    grid-template-columns: 1fr;
  }
  .bento-card,
  .bento-card.c-wide {
    grid-column: span 1;
  }
}
</style>
