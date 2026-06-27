export default {
  nav: {
    features: 'Features',
    sessions: 'Sessions',
    prompts: 'Prompts',
    workflow: 'Workflow',
    technology: 'Technology',
    github: 'GitHub',
    download: 'Download',
  },
  hero: {
    pill: 'v0.1.40 — Desktop app with bridge control, prompts & session management',
    line1: 'Your AI code assistant,',
    line2: 'running entirely on your machine.',
    lede:
      'evocode is a local bridge with a full desktop app that wires OpenAI, Anthropic and any compatible provider into your favourite editor — with zero lock-in, millisecond latency, and built-in session history, prompts management, and live logs.',
    ctaDownload: 'Download for desktop',
    ctaGithub: 'View on GitHub',
    previewStatus: 'running · 17761',
  },
  features: {
    eyebrow: 'Capabilities',
    title1: 'A complete toolkit for',
    title2: 'AI-native development.',
    sub:
      'Everything you need to ship production code with AI — minus the lock-in, the latency, and the privacy trade-offs.',
    cards: {
      dashboard: {
        title: 'Desktop Dashboard',
        body:
          'Start, stop and monitor your bridge from a native desktop app. See real-time status, connected provider, active sessions, and server URL at a glance.',
      },
      sessions: {
        title: 'Session History & Search',
        body:
          'Browse every Codex CLI session with search and pagination. Inspect detailed entries — user messages, assistant replies, reasoning blocks, tool calls, patch diffs, and turn boundaries — all in a rich tree view.',
      },
      prompts: {
        title: 'Prompt Management',
        body:
          'Create, edit, save, and apply prompt presets directly to Codex CLI. Full Markdown editor with live character count and one-click sync to AGENTS.md.',
      },
      config: {
        title: 'Multi-Provider Configuration',
        body:
          'Manage unlimited AI providers with a visual UI. Configure wire protocol, API keys, models with context windows, auto-compact limits, and fetch model lists — all without editing JSON by hand.',
      },
      logs: {
        title: 'Live Bridge Logs',
        body:
          'Monitor bridge activity in real time with auto-scrolling logs. Inspect request/response flow, and troubleshoot provider connectivity issues instantly.',
      },
      sync: {
        title: 'One-Click Codex Sync',
        body:
          'Sync any provider, model, or prompt preset to Codex CLI with a single click. No manual config.toml editing — the bridge handles wire format translation automatically.',
      },
      compat: {
        title: 'OpenAI-compatible protocol',
        body:
          'Speak the same wire format as the OpenAI API. Swap models, providers and endpoints without touching your editor or your code.',
      },
      multi: {
        title: 'Multi-provider',
        body:
          'Switch between Anthropic Messages, OpenAI Chat Completions and OpenAI Responses — or wire up any custom upstream that speaks one of those wire formats.',
      },
      speed: {
        title: 'Sub-100ms hops',
        body:
          'The bridge runs on your machine. No proxy, no egress — requests land on the provider in a single hop.',
        unit: 'ms p50',
      },
      privacy: {
        title: 'Privacy by default',
        body:
          'Your code never leaves the machine unencrypted. TLS is terminated locally; secrets live in your OS keychain.',
        checks: ['Local-only HTTP bridge', 'Encrypted at rest', 'Zero telemetry', 'Open source'],
      },
      stack: {
        title: 'Speaks your stack',
        body:
          'Drop the bridge into VS Code, JetBrains, Zed, Neovim or your own tool. Anything that talks HTTP works out of the box.',
      },
      tools: {
        title: 'Tool calls & agents',
        body:
          'Streaming tool calls, function schemas, and full agent loops — all proxied through the same familiar HTTP API.',
      },
    },
  },
  workflow: {
    eyebrow: 'How it works',
    title1: 'One local bridge.',
    title2: 'Every protocol. Zero friction.',
    sub:
      'Codex CLI, your editor and your favourite providers — wired together in five steps, fully on your machine.',
    steps: [
      {
        tag: '01 Setup',
        title: 'Start the bridge',
        body: 'Launch the evocode desktop app and click Start. The bridge serves a local HTTP endpoint on 127.0.0.1:17761 — no public exposure, no cloud dependency.',
      },
      {
        tag: '02 Configure',
        title: 'Add your providers',
        body: 'Use the built-in Configuration panel to add AI providers (Anthropic, OpenAI, or any Chat Completions-compatible endpoint). Set up wire protocol, API key, model list, and context window limits — all from a clean visual UI.',
      },
      {
        tag: '03 Connect',
        title: 'Point Codex at it',
        body: 'Set Codex CLI\'s base URL to the local bridge. Codex speaks Responses — the bridge transparently translates to Chat Completions, Anthropic Messages, or any custom wire format.',
      },
      {
        tag: '04 Manage',
        title: 'Manage prompts & sessions',
        body: 'Create reusable prompt presets and apply them to Codex with one click. Browse session history with search and pagination, and inspect every turn, tool call, and patch diff.',
      },
      {
        tag: '05 Monitor',
        title: 'Monitor with live logs',
        body: 'Keep an eye on bridge activity with the built-in live log viewer. Auto-scrolling output, request/response inspection, and instant troubleshooting for provider connectivity.',
      },
    ],
  },
  reliability: {
    eyebrow: 'Session reliability',
    title1: 'Codex sessions that',
    title2: "don't quit mid-task.",
    sub:
      'A common failure when bridging non-Responses protocols to Codex CLI is premature end_turn. evocode ships three layered safeguards to keep the agent running until the job is genuinely done.',
    items: [
      {
        title: 'end_turn signal mapping',
        body:
          'When bridging Chat or Anthropic into Responses, the bridge forces end_turn=false if the model returned pending tool calls, hit max_tokens, or emitted reasoning-only output.',
      },
      {
        title: 'Reasoning-only compensation',
        body:
          'Some upstream models produce thinking blocks with no visible text. evocode mirrors the reasoning into a synthetic message so Codex has something to render, and forces another turn.',
      },
      {
        title: 'Session-aware validation',
        body:
          'A lightweight tracker inspects conversation structure: if tool results sit after the last assistant message and the model completed without new tools, end_turn is overridden to false — preventing premature task_complete without ever inspecting response text.',
      },
    ],
  },
  tech: {
    eyebrow: 'Under the hood',
    title1: 'Built on',
    title2: 'a modern stack.',
    sub:
      'A full Tauri 2 desktop shell, Rust-powered bridge core with SQLite persistence, and a Vue 3 + Ant Design Vue front end. Designed to feel native on every desktop OS.',
    specs: [
      { label: 'Frontend', value: 'Vue 3 + Vite + Ant Design Vue' },
      { label: 'Shell', value: 'Tauri 2 (Rust)' },
      { label: 'Database', value: 'SQLite (via sqlx)' },
      { label: 'Protocol', value: 'OpenAI Responses / Chat / Anthropic' },
      { label: 'Prompts', value: 'Markdown editor + AGENTS.md sync' },
      { label: 'Sessions', value: 'Browse, search & detail inspection' },
      { label: 'Logs', value: 'Real-time auto-scrolling viewer' },
      { label: 'Bridge port', value: '127.0.0.1:17761' },
      { label: 'Config UI', value: 'Visual multi-provider editor' },
      { label: 'Codex sync', value: 'One-click provider & model sync' },
      { label: 'Streaming', value: 'SSE with split-frame buffering' },
      { label: 'Update', value: 'Built-in update checker' },
      { label: 'Platforms', value: 'macOS · Windows · Linux' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'Get the desktop app.',
    sub:
      'Free, open source, and ready in under a minute. The full desktop experience — bridge, config, prompts, logs and session history — on every major desktop OS.',
    download: 'Download for desktop',
    github: 'Star on GitHub',
  },
  footer: {
    tagline: 'An open-source local bridge that turns every editor into an AI-native IDE.',
    product: 'Product',
    resources: 'Resources',
    community: 'Community',
    contact: 'Get in touch',
    links: {
      features: 'Features',
      discord: 'Join Discord',
      sessions: 'Sessions',
      prompts: 'Prompts',
      workflow: 'Workflow',
      technology: 'Technology',
      download: 'Download',
      releases: 'Releases',
      issues: 'Issues',
      org: 'GitHub Org',
      readme: 'README',
    },
    copyright: 'All rights reserved.',
    status: 'All systems operational',
  },
  download: {
    title: 'Download evocode',
    sub: 'Pick your platform and start bridging in under a minute.',
    macos: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    arch: 'Apple Silicon / Intel',
    format: '.dmg',
    winFormat: '.exe / .msi',
    latest: 'Latest version',
    linuxFormat: '.AppImage / .deb',
    notes: 'System requirements',
    reqMac: 'macOS 11 Big Sur or later',
    reqWin: 'Windows 10 64-bit or later',
    reqLinux: 'glibc 2.31+ (Ubuntu 20.04, Fedora 32)',
  },
  common: {
    switchLang: '中文',
  },
}
