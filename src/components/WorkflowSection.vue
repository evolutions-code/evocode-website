<template>
  <section id="workflow" class="workflow">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">
          <span class="bar" />
          <span>{{ t('workflow.eyebrow') }}</span>
        </span>
        <h2 class="section-title">
          {{ t('workflow.title1') }}
          <span class="gradient-text">{{ t('workflow.title2') }}</span>
        </h2>
        <p class="section-sub">{{ t('workflow.sub') }}</p>
      </div>

      <div class="steps">
        <div
          v-for="(step, i) in tc('workflow.steps')"
          :key="i"
          class="step reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="step-rail">
            <span class="step-tag mono">{{ step.tag }}</span>
            <span v-if="i < tc('workflow.steps').length - 1" class="step-line" />
          </div>
          <div class="step-body">
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </div>
        </div>
      </div>

      <!-- Session reliability highlight panel -->
      <div class="reliability reveal">
        <div class="reliability-head">
          <span class="reliability-eyebrow">
            <SafetyCertificateFilled />
            <span>{{ t('reliability.eyebrow') }}</span>
          </span>
          <h3>
            {{ t('reliability.title1') }}
            <span class="gradient-text">{{ t('reliability.title2') }}</span>
          </h3>
          <p class="reliability-sub">{{ t('reliability.sub') }}</p>
        </div>

        <div class="reliability-grid">
          <div
            v-for="(item, i) in tc('reliability.items')"
            :key="i"
            class="reliability-card"
            :style="{ transitionDelay: `${i * 100}ms` }"
          >
            <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { SafetyCertificateFilled } from '@ant-design/icons-vue'
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
  document.querySelectorAll('.workflow .reveal, .workflow .step, .workflow .reliability-card').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.workflow {
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

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 880px;
  margin: 0 auto;
}
.step {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 28px;
  align-items: stretch;
  padding: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0));
  border: 1px solid var(--border);
  border-radius: var(--r-2xl);
  transition: transform 0.35s ease, border-color 0.35s ease;
}
.step:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 255, 255, 0.18);
}
.step-rail {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.step-tag {
  display: inline-grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(77, 125, 255, 0.18), rgba(139, 92, 246, 0.12));
  border: 1px solid rgba(77, 125, 255, 0.35);
  color: var(--brand-300);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: var(--shadow-glow);
}
.step-line {
  flex: 1;
  width: 1px;
  background: linear-gradient(180deg, rgba(77, 125, 255, 0.4), transparent);
  margin-top: 8px;
}
.step-body h3 {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.015em;
  color: var(--text-1);
}
.step-body p {
  margin: 0;
  color: var(--text-3);
  font-size: 14.5px;
  line-height: 1.65;
}

/* Reliability highlight */
.reliability {
  margin-top: 64px;
  padding: 40px;
  border-radius: var(--r-3xl);
  background:
    radial-gradient(800px 400px at 0% 0%, rgba(77, 125, 255, 0.18), transparent 60%),
    radial-gradient(700px 400px at 100% 100%, rgba(139, 92, 246, 0.18), transparent 60%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0));
  border: 1px solid var(--border-strong);
}
.reliability-head {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
  max-width: 64ch;
}
.reliability-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(52, 211, 153, 0.1);
  border: 1px solid rgba(52, 211, 153, 0.3);
  color: var(--ok);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  width: max-content;
}
.reliability-head h3 {
  margin: 0;
  font-size: clamp(24px, 2.6vw, 32px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-1);
}
.reliability-sub {
  margin: 0;
  color: var(--text-3);
  font-size: 14.5px;
  line-height: 1.65;
}
.reliability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.reliability-card {
  padding: 22px;
  border-radius: var(--r-xl);
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.35s ease, border-color 0.35s ease;
}
.reliability-card:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.18);
}
.reliability-card .num {
  font-size: 12px;
  color: var(--brand-300);
  font-weight: 700;
}
.reliability-card h4 {
  margin: 4px 0 6px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-1);
}
.reliability-card p {
  margin: 0;
  color: var(--text-3);
  font-size: 13.5px;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .reliability-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .step {
    grid-template-columns: 1fr;
  }
  .step-rail {
    flex-direction: row;
    align-items: center;
  }
  .step-line {
    width: auto;
    height: 1px;
    margin-top: 0;
    margin-left: 8px;
  }
  .reliability {
    padding: 24px;
  }
}
</style>
