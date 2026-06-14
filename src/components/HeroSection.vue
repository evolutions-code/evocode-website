<template>
  <section class="hero">
    <div class="orbs" aria-hidden="true">
      <span class="orb orb-1" />
      <span class="orb orb-2" />
      <span class="orb orb-3" />
    </div>
    <div class="grid-bg" aria-hidden="true" />

    <div class="hero-inner container">
      <div class="pill reveal" ref="reveal1">
        <span class="pulse" />
        <span>{{ t('hero.pill') }}</span>
        <ArrowRightOutlined class="pill-arrow" />
      </div>

      <h1 class="display reveal" ref="reveal2">
        <span class="line">{{ t('hero.line1') }}</span>
        <span class="line gradient-text">{{ t('hero.line2') }}</span>
      </h1>

      <p class="lede reveal" ref="reveal3">
        {{ t('hero.lede') }}
      </p>

      <div class="cta reveal" ref="reveal4">
        <a href="https://github.com/evolutions-code/evocode-tauri/releases" target="_blank" rel="noopener" class="btn btn-primary">
          <span>{{ t('hero.ctaDownload') }}</span>
          <ArrowRightOutlined />
        </a>
        <a href="https://github.com/evolutions-code/evocode" target="_blank" rel="noopener" class="btn btn-ghost">
          <GithubOutlined />
          <span>{{ t('hero.ctaGithub') }}</span>
        </a>
      </div>
    </div>

    <!-- Real app preview -->
    <div class="preview-wrap reveal" ref="reveal5">
      <div class="preview">
        <!-- Window chrome -->
        <div class="preview-bar">
          <span class="dot red" />
          <span class="dot yellow" />
          <span class="dot green" />
          <span class="preview-title mono">evocode — local bridge</span>
          <span class="preview-status">
            <span class="status-dot" />
            <span class="mono">{{ t('hero.previewStatus') }}</span>
          </span>
        </div>

        <!-- Real app body: [sidebar] [content] -->
        <div class="preview-body">
          <aside class="preview-sider">
            <div class="brand-row">
              <span class="brand-text">evocode</span>
            </div>
            <nav class="sider-menu">
              <a class="sider-item active">
                <span class="mi-dot" />
                <span>Dashboard</span>
              </a>
              <a class="sider-item">
                <span class="mi-dot" />
                <span>Configuration</span>
              </a>
              <a class="sider-item">
                <span class="mi-dot" />
                <span>Logs</span>
              </a>
              <a class="sider-item">
                <span class="mi-dot" />
                <span>About</span>
              </a>
            </nav>
            <div class="sider-foot">
              <span class="version-pill">
                <span class="dot ok" />
                <span class="mono">v0.1.25</span>
              </span>
            </div>
          </aside>

          <main class="preview-content">
            <div class="crumbs-bar">
              <span class="crumb">Home</span>
              <span class="crumb-sep">/</span>
              <span class="crumb current">Dashboard</span>
            </div>

            <!-- BridgeStatus card (the real one) -->
            <div class="bridge-card">
              <div class="ring running">
                <span class="core" />
                <span class="pulse" />
              </div>
              <div class="bridge-meta">
                <div class="bridge-label">Online</div>
                <div class="bridge-sub">Serving on 127.0.0.1:17761</div>
                <div class="bridge-provider">
                  <span class="dot running" />
                  <span>running</span>
                  <span class="sep" />
                  <span class="mono">openai_chat</span>
                </div>
              </div>
              <div class="bridge-url">
                <span class="url-label">URL</span>
                <code class="mono">http://127.0.0.1:17761</code>
              </div>
              <div class="bridge-actions">
                <button class="b-btn b-btn-ghost">
                  <PauseCircleFilled />
                  <span>Stop</span>
                </button>
                <button class="b-btn b-btn-default">
                  <CodeOutlined />
                  <span>Logs</span>
                </button>
              </div>
            </div>

            <!-- Sessions header -->
            <div class="sessions-head">
              <span class="bar" />
              <span class="title">Sessions</span>
              <span class="count">8 total</span>
            </div>

            <!-- Sessions grid: real ContextGrid cards -->
            <div class="sessions-grid">
              <div class="session-card" v-for="(s, i) in sessions" :key="i">
                <div class="card-head">
                  <div class="session-info">
                    <div class="session-name">{{ s.name }}</div>
                    <div class="session-model mono">{{ s.model }}</div>
                  </div>
                  <div class="session-stats">
                    <span class="pct">{{ s.pct }}%</span>
                  </div>
                </div>
                <div class="grid" :style="{ gridTemplateColumns: `repeat(${s.cols}, 1fr)` }">
                  <div
                    v-for="(c, j) in s.cells"
                    :key="j"
                    class="cell"
                    :class="c.cls"
                    :style="{ '--d': `${(j * 0.02).toFixed(3)}s` }"
                  />
                </div>
                <div class="card-foot">
                  <span class="foot-tokens mono">{{ s.used }} / {{ s.total }} tokens</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ArrowRightOutlined, GithubOutlined, CodeOutlined, PauseCircleFilled } from '@ant-design/icons-vue'
import { useLocale } from '@/composables/useLocale'

const { t } = useLocale()

const reveal1 = ref<HTMLElement | null>(null)
const reveal2 = ref<HTMLElement | null>(null)
const reveal3 = ref<HTMLElement | null>(null)
const reveal4 = ref<HTMLElement | null>(null)
const reveal5 = ref<HTMLElement | null>(null)

onMounted(() => {
  const refs = [reveal1, reveal2, reveal3, reveal4, reveal5]
  refs.forEach((r, i) => {
    setTimeout(() => r.value?.classList.add('in-view'), 80 + i * 140)
  })
})

// Synthetic session data that mirrors the ContextGrid component
const makeSession = (name: string, model: string, total: number, used: number, cols: number) => {
  const cells = []
  for (let i = 0; i < total; i++) {
    const isFilled = i < used
    const seed = ((Math.floor(i / cols) * 7 + (i % cols) * 13) % 5)
    const level = isFilled ? Math.max(1, Math.min(4, seed)) : 0
    cells.push({ cls: isFilled ? `l${level}` : '' })
  }
  return {
    name,
    model,
    pct: Math.min(100, Math.round((used / total) * 100)),
    cols,
    cells,
    used: formatTokens(used * 10000),
    total: formatTokens(total * 10000),
  }
}

const formatTokens = (n: number) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return String(n)
}

const sessions = [
  makeSession('Refactor auth flow', 'gpt-4.1', 100, 62, 10),
  makeSession('Add tests for /api', 'claude-3.7-sonnet', 100, 84, 10),
  makeSession('Migrate to TS strict', 'gpt-4.1', 50, 18, 10),
  makeSession('Optimize build pipeline', 'claude-3.5-haiku', 50, 41, 10),
  makeSession('Refactor DB schema', 'gpt-4.1', 100, 23, 10),
  makeSession('Write docs for CLI', 'claude-3.7', 50, 50, 10),
  makeSession('Fix flaky e2e tests', 'gpt-4.1-mini', 50, 7, 10),
  makeSession('Design tokens audit', 'claude-3.7-sonnet', 50, 34, 10),
]
</script>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--nav-h) + 80px) 0 60px;
  overflow: hidden;
}
.orbs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  animation: orb 12s ease-in-out infinite;
}
.orb-1 {
  width: 540px;
  height: 540px;
  background: radial-gradient(circle, rgba(77, 125, 255, 0.55), transparent 60%);
  top: -180px;
  left: -120px;
}
.orb-2 {
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.45), transparent 60%);
  top: -60px;
  right: -120px;
  animation-delay: -4s;
}
.orb-3 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.4), transparent 60%);
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: -8s;
}
.grid-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 80%);
}
.hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-strong);
  font-size: 12.5px;
  color: var(--text-2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease;
}
.pill:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-1px);
}
.pill .pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--brand-400);
  box-shadow: 0 0 10px var(--brand-400);
  animation: glow 1.6s ease-in-out infinite;
}
.pill-arrow {
  color: var(--text-3);
  font-size: 11px;
}
.display {
  font-size: clamp(40px, 7.4vw, 88px);
  font-weight: 800;
  line-height: 1.04;
  letter-spacing: -0.035em;
  margin: 0;
  max-width: 18ch;
  text-wrap: balance;
}
.display .line {
  display: block;
}
.lede {
  font-size: clamp(15px, 1.3vw, 19px);
  color: var(--text-2);
  line-height: 1.6;
  max-width: 56ch;
  margin: 0;
}
.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
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
  background: rgba(255, 255, 255, 0.04);
  border-color: var(--border-strong);
  color: var(--text-1);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

/* ============================================================
   Real app preview
   ============================================================ */
.preview-wrap {
  position: relative;
  z-index: 2;
  margin: 64px auto 0;
  max-width: 1140px;
  padding: 0 28px;
}
.preview {
  border-radius: var(--r-2xl);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: linear-gradient(180deg, #11141c, #0a0c12);
  box-shadow: var(--shadow-lg), 0 0 0 1px rgba(77, 125, 255, 0.18);
  backdrop-filter: blur(8px);
}
.preview-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
}
.preview-bar .dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.red {
  background: #ff5f57;
}
.dot.yellow {
  background: #febc2e;
}
.dot.green {
  background: #28c840;
}
.preview-title {
  margin-left: 8px;
  color: var(--text-3);
  font-size: 12px;
}
.preview-status {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--ok);
}
.preview-status .status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 8px var(--ok);
  animation: glow 1.6s ease-in-out infinite;
}

.preview-body {
  display: grid;
  grid-template-columns: 200px 1fr;
  min-height: 540px;
  background: #0b0d12;
}

/* Sider */
.preview-sider {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border);
  background: var(--bg-elev-1);
  padding: 16px 10px;
}
.brand-row {
  padding: 6px 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.brand-text {
  font-size: 16px;
  font-weight: 700;
  background: linear-gradient(120deg, #8eb4ff 0%, #b591ff 50%, #67e8f9 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.3px;
}
.sider-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}
.sider-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  font-size: 12.5px;
  color: var(--text-3);
  border: 1px solid transparent;
}
.sider-item .mi-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--text-4);
  transition: background 0.2s ease;
}
.sider-item.active {
  background: linear-gradient(135deg, rgba(77, 125, 255, 0.18), rgba(139, 92, 246, 0.12));
  border-color: rgba(77, 125, 255, 0.35);
  color: var(--text-1);
  box-shadow: inset 0 0 0 1px rgba(77, 125, 255, 0.05);
}
.sider-item.active .mi-dot {
  background: var(--brand-300);
  box-shadow: 0 0 6px var(--brand-400);
}
.sider-foot {
  border-top: 1px solid var(--border);
  padding: 10px 4px 0;
  display: flex;
  justify-content: center;
}
.version-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 9px;
  border-radius: 999px;
  background: var(--bg-elev-3);
  color: var(--text-3);
  font-size: 10.5px;
}
.version-pill .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 6px var(--ok);
}

/* Content */
.preview-content {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: radial-gradient(900px 400px at 0% 0%, rgba(77, 125, 255, 0.06), transparent 60%);
}
.crumbs-bar {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--text-3);
}
.crumb.current {
  color: var(--text-1);
}
.crumb-sep {
  color: var(--text-4);
}

/* BridgeStatus card */
.bridge-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'ring meta url'
    'actions actions actions';
  align-items: center;
  gap: 14px 18px;
  padding: 18px 20px;
  border-radius: var(--r-lg);
  background: rgba(24, 28, 37, 0.65);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border: 1px solid var(--border);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
}
.ring {
  grid-area: ring;
  position: relative;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.35);
}
.ring.running {
  background: rgba(52, 211, 153, 0.12);
  border-color: rgba(52, 211, 153, 0.35);
}
.ring .core {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 12px var(--ok);
}
.ring .pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--ok);
  opacity: 0.5;
  animation: pulse 2s ease-out infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
.bridge-meta {
  grid-area: meta;
  min-width: 0;
}
.bridge-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-1);
}
.bridge-sub {
  font-size: 11.5px;
  color: var(--text-3);
  margin-top: 2px;
}
.bridge-provider {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 11.5px;
  color: var(--text-3);
}
.bridge-provider .dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  display: inline-block;
}
.bridge-provider .dot.running {
  background: var(--ok);
}
.bridge-provider .sep {
  width: 1px;
  height: 11px;
  background: var(--border);
  display: inline-block;
}
.bridge-provider .mono {
  color: var(--text-2);
}
.bridge-url {
  grid-area: url;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 9px;
  border-radius: 999px;
  background: var(--bg-elev-3);
  color: var(--text-2);
  font-size: 11.5px;
  white-space: nowrap;
}
.bridge-url .url-label {
  color: var(--text-3);
  font-size: 9.5px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
}
.bridge-url code {
  color: var(--brand-300);
}
.bridge-actions {
  grid-area: actions;
  display: flex;
  gap: 8px;
}
.b-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  flex: 1;
  justify-content: center;
}
.b-btn .anticon {
  font-size: 13px;
}
.b-btn-ghost {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
  color: var(--text-1);
}
.b-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
}
.b-btn-default {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--border);
  color: var(--text-2);
  flex: 0 0 auto;
}
.b-btn-default:hover {
  background: var(--bg-elev-3);
  color: var(--text-1);
}

/* Sessions */
.sessions-head {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0 0;
}
.sessions-head .bar {
  width: 3px;
  height: 14px;
  border-radius: 2px;
  background: linear-gradient(180deg, #22d3ee, #4d7dff);
}
.sessions-head .title {
  font-weight: 600;
  font-size: 13px;
  color: var(--text-1);
}
.sessions-head .count {
  font-size: 10.5px;
  color: var(--text-4);
  font-family: 'JetBrains Mono', 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
  background: var(--bg-elev-3);
  padding: 1px 8px;
  border-radius: 999px;
}
.sessions-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.session-card {
  width: 184px;
  flex-shrink: 0;
  padding: 10px 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: var(--r-md);
  background: rgba(24, 28, 37, 0.55);
  border: 1px solid var(--border);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.session-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.35), 0 8px 24px rgba(77, 125, 255, 0.18);
}
.card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}
.session-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}
.session-name {
  font-weight: 600;
  font-size: 11px;
  color: var(--text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.session-model {
  font-size: 9.5px;
  color: var(--text-4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.session-stats {
  flex-shrink: 0;
}
.session-stats .pct {
  font-weight: 700;
  font-size: 12px;
  color: var(--text-1);
}
.grid {
  display: grid;
  gap: 1.5px;
}
.cell {
  aspect-ratio: 1;
  border-radius: 1px;
  background: var(--bg-elev-2);
  border: 1px solid var(--border);
  animation: cellIn 0.3s ease both;
  animation-delay: var(--d);
}
.cell.l1 {
  background: rgba(77, 125, 255, 0.25);
  border-color: rgba(77, 125, 255, 0.15);
}
.cell.l2 {
  background: rgba(77, 125, 255, 0.45);
  border-color: rgba(77, 125, 255, 0.25);
}
.cell.l3 {
  background: rgba(34, 211, 238, 0.45);
  border-color: rgba(34, 211, 238, 0.25);
}
.cell.l4 {
  background: rgba(34, 211, 238, 0.7);
  border-color: rgba(34, 211, 238, 0.4);
}
@keyframes cellIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.card-foot {
  display: flex;
  justify-content: flex-end;
}
.foot-tokens {
  font-size: 9.5px;
  color: var(--text-4);
}

@media (max-width: 900px) {
  .preview-body {
    grid-template-columns: 1fr;
  }
  .preview-sider {
    display: none;
  }
}
</style>
