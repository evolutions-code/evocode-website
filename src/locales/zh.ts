export default {
  nav: {
    features: '功能特性',
    workflow: '工作流',
    technology: '技术架构',
    github: 'GitHub',
    download: '下载',
  },
  hero: {
    pill: 'v0.1.25 — 现已支持流式工具调用',
    line1: 'AI 协议转换桥',
    line2: '完全运行在你的电脑上。',
    lede: 'evocode 是一个本地桥接服务，把 OpenAI、Anthropic 以及任何兼容协议的LLM大模型接入你常用的编辑器 —— 没有锁定，毫秒级延迟。',
    ctaDownload: '下载桌面端',
    ctaGithub: '前往 GitHub',
    previewStatus: '运行中 · 17761',
  },
  features: {
    eyebrow: '核心能力',
    title1: '为 AI 原生开发',
    title2: '打造的全套工具。',
    sub: '高效交付生产级 AI 代码所需的一切 —— 没有锁定、没有高延迟、没有隐私妥协。',
    cards: {
      compat: {
        title: 'OpenAI 兼容协议',
        body: '采用与 OpenAI 完全一致的线协议。可以随时替换模型、提供方与端点，无需改动编辑器或业务代码。',
      },
      multi: {
        title: '多提供方',
        body: '在 Anthropic Messages、OpenAI Chat Completions 与 OpenAI Responses 之间无缝切换，也可以接入任何兼容这三种协议的自定义上游。',
      },
      speed: {
        title: '亚百毫秒转发',
        body: '桥接服务运行在本地，无代理、无外网 —— 请求一跳直达模型。',
        unit: 'ms p50',
      },
      privacy: {
        title: '默认隐私优先',
        body: '你的代码从未以明文离开本机。TLS 在本地终止，密钥保存在系统钥匙串。',
        checks: ['仅本地 HTTP 桥接', '静态加密', '零遥测', '完全开源'],
      },
      stack: {
        title: '兼容你的工具链',
        body: '支持 VS Code、JetBrains、Zed、Neovim 以及任何会发 HTTP 的自定义工具，开箱即用。',
      },
      tools: {
        title: '工具调用与 Agent',
        body: '流式 tool_calls、函数 schema、完整 agent 循环 —— 都通过同一套熟悉的 HTTP API 转发。',
      },
    },
  },
  workflow: {
    eyebrow: '工作原理',
    title1: '一个本地桥接。',
    title2: '所有协议。零摩擦。',
    sub: 'Codex CLI、你的编辑器以及你喜欢的模型提供方 —— 三步完成对接，全程在你的机器上运行。',
    steps: [
      {
        tag: '01',
        title: '启动桥接',
        body: '运行 evocode，它会在 127.0.0.1:17761 提供本地 HTTP 端点，对外完全不可见。',
      },
      {
        tag: '02',
        title: '让 Codex 指向它',
        body: '把 Codex 的 base URL 指向本地桥接。Codex 讲 Responses，桥接翻译为 Chat、Anthropic 或你自定义的协议。',
      },
      {
        tag: '03',
        title: '会话保持在线',
        body: '基于结构的会话校验会强制 end_turn=false，确保工具结果未被消费时 Codex 不会中途结束回合。',
      },
    ],
  },
  reliability: {
    eyebrow: '会话可靠性',
    title1: 'Codex 会话，',
    title2: '从不在中途掉线。',
    sub:
      '在把非 Responses 协议桥接到 Codex CLI 时，premature end_turn 是最常见的失败模式。evocode 内置三层防护，确保 agent 真正完成任务才退出。',
    items: [
      {
        title: 'end_turn 信号映射',
        body:
          '把 Chat / Anthropic 翻译成 Responses 时，若模型返回了未执行的工具调用、触发 max_tokens、或只输出 reasoning 而无可见内容，桥接会强制把 end_turn 置为 false。',
      },
      {
        title: 'Reasoning-only 补偿',
        body:
          '部分上游模型只产出 thinking 块而没有可见文本。evocode 会把 reasoning 镜像成一条合成 message，让 Codex 有内容可渲染，并强制继续下一轮。',
      },
      {
        title: '会话级校验',
        body:
          '一个轻量级追踪器检查对话结构：若 tool_result 出现在最后一个 assistant 之后，且模型在没有新工具的情况下结束，就把 end_turn 覆盖为 false —— 避免 task_complete 过早触发，同时完全无需解析响应文本。',
      },
    ],
  },
  tech: {
    eyebrow: '底层架构',
    title1: '构建于',
    title2: '现代技术栈之上。',
    sub: '外壳是 Tauri 2，桥接核心是 Rust，前端是 Vue 3。在每一个桌面 OS 上都像原生应用。',
    specs: [
      { label: '前端', value: 'Vue 3 + Vite + Ant Design Vue' },
      { label: '外壳', value: 'Tauri 2 (Rust)' },
      { label: '协议', value: 'OpenAI Responses / Chat / Anthropic' },
      { label: '桥接端口', value: '127.0.0.1:17761' },
      { label: '流式', value: 'SSE + 拆帧缓冲' },
      { label: '支持平台', value: 'macOS · Windows · Linux' },
    ],
  },
  cta: {
    eyebrow: '开始使用',
    title: '把桥接带回家。',
    sub: '免费、开源，一分钟内即可就绪。覆盖所有主流桌面操作系统。',
    download: '下载桌面端',
    github: '在 GitHub 上加星',
  },
  footer: {
    tagline: '一个开源的本地桥接服务，把任意编辑器升级为 AI 原生 IDE。',
    product: '产品',
    resources: '资源',
    community: '社区',
    contact: '联系方式',
    links: {
      features: '功能特性',
      workflow: '工作流',
      technology: '技术架构',
      download: '下载',
      releases: '发行版',
      issues: '问题反馈',
      org: 'GitHub 组织',
      readme: 'README',
    },
    copyright: '保留所有权利。',
    status: '所有服务运行正常',
  },
  download: {
    title: '下载 evocode',
    sub: '选择你的平台，一分钟内即可开始桥接。',
    macos: 'macOS',
    windows: 'Windows',
    linux: 'Linux',
    arch: 'Apple Silicon / Intel',
    format: '.dmg',
    winFormat: '.exe / .msi',
    latest: '最新版本',
    linuxFormat: '.AppImage / .deb',
    notes: '系统要求',
    reqMac: 'macOS 11 Big Sur 或更高版本',
    reqWin: 'Windows 10 64-bit 或更高版本',
    reqLinux: 'glibc 2.31+ (Ubuntu 20.04, Fedora 32)',
  },
  common: {
    switchLang: 'EN',
  },
}
