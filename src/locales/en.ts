export default {
  nav: {
    features: 'Features',
    workflow: 'Workflow',
    technology: 'Technology',
    github: 'GitHub',
    download: 'Download',
  },
  hero: {
    pill: 'v0.1.25 — now with streaming tool calls',
    line1: 'Your AI code assistant,',
    line2: 'running entirely on your machine.',
    lede:
      'evocode is a local bridge that wires OpenAI, Anthropic and any compatible provider into your favourite editor — with zero lock-in and millisecond latency.',
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
      'Codex CLI, your editor and your favourite providers — wired together in three steps, fully on your machine.',
    steps: [
      {
        tag: '01',
        title: 'Start the bridge',
        body: 'Launch evocode and it serves a local HTTP endpoint on 127.0.0.1:17761 with no public exposure.',
      },
      {
        tag: '02',
        title: 'Point Codex at it',
        body: 'Set Codex’s base URL to the local bridge. Codex speaks Responses, the bridge translates to Chat, Anthropic or your custom wire.',
      },
      {
        tag: '03',
        title: 'Sessions stay alive',
        body:
          'Structural session validation forces end_turn=false when tools haven’t been consumed yet — so Codex never ends the turn mid-task.',
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
      'Tauri 2 on the shell, Rust on the bridge core, and a Vue 3 front end. Designed to feel native on every desktop OS.',
    specs: [
      { label: 'Frontend', value: 'Vue 3 + Vite + Ant Design Vue' },
      { label: 'Shell', value: 'Tauri 2 (Rust)' },
      { label: 'Protocol', value: 'OpenAI Responses / Chat / Anthropic' },
      { label: 'Bridge port', value: '127.0.0.1:17761' },
      { label: 'Streaming', value: 'SSE with split-frame buffering' },
      { label: 'Platforms', value: 'macOS · Windows · Linux' },
    ],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'Bring the bridge home.',
    sub:
      'Free, open source, and ready in under a minute. Available on every major desktop OS.',
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
