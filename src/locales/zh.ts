export default {
  nav: {
    features: '功能特性',
    sessions: '会话历史',
    prompts: '提示词',
    workflow: '工作流',
    technology: '技术架构',
    github: 'GitHub',
    download: '下载',
  },
  hero: {
    pill: '桌面应用：桥接控制、提示词与会话管理',
    line1: 'AI 协议转换桥',
    line2: '完全运行在你的电脑上。',
    lede: 'evocode 是一个带有完整桌面应用的本地桥接服务，把 OpenAI、Anthropic 以及任何兼容协议的LLM大模型接入你常用的编辑器 —— 没有锁定，毫秒级延迟，内置会话历史、提示词管理和实时日志。',
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
      dashboard: {
        title: '桌面仪表盘',
        body: '通过原生桌面应用启动、停止和监控桥接服务。实时查看状态、已连接的 Provider、活跃会话和服务地址，一目了然。',
      },
      sessions: {
        title: '会话历史与搜索',
        body: '浏览每一次 Codex CLI 会话，支持搜索和分页。查看详细的会话条目 —— 用户消息、助手回复、推理过程、工具调用、补丁差异和回合边界 —— 所有内容尽在丰富的树形视图中。',
      },
      prompts: {
        title: '提示词管理',
        body: '创建、编辑、保存提示词预设，一键应用到 Codex CLI。内置完整 Markdown 编辑器，支持实时字符计数，快速同步到 AGENTS.md。',
      },
      config: {
        title: '多 Provider 配置',
        body: '通过可视化界面管理无限数量的 AI Provider。配置 wire 协议、API 密钥、模型的上下文窗口、自动压缩限制，并拉取模型列表 —— 无需手动编辑 JSON。',
      },
      logs: {
        title: '实时桥接日志',
        body: '通过自动滚动的实时日志查看器监控桥接活动。检查请求/响应流程，快速排查 Provider 连接问题。',
      },
      sync: {
        title: '一键同步 Codex',
        body: '单击即可将任意 Provider、模型或提示词预设同步到 Codex CLI。无需手动编辑 config.toml —— 桥接自动处理协议格式转换。',
      },
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
    sub: 'Codex CLI、你的编辑器以及你喜欢的模型提供方 —— 五步完成对接，全程在你的机器上运行。',
    steps: [
      {
        tag: '01 启动',
        title: '启动桥接',
        body: '打开 evocode 桌面应用，点击启动按钮。桥接服务会在 127.0.0.1:17761 提供本地 HTTP 端点 —— 不暴露公网，不依赖云端。',
      },
      {
        tag: '02 配置',
        title: '添加 Provider',
        body: '使用内置配置面板添加 AI Provider（Anthropic、OpenAI 或任何兼容 Chat Completions 的端点）。配置 wire 协议、API 密钥、模型列表和上下文窗口限制 —— 全部通过可视化界面完成。',
      },
      {
        tag: '03 连接',
        title: '让 Codex 指向它',
        body: '把 Codex CLI 的 base URL 指向本地桥接。Codex 讲 Responses —— 桥接透明地将它翻译为 Chat Completions、Anthropic Messages 或任何你配置的 wire 格式。',
      },
      {
        tag: '04 管理',
        title: '管理提示词与会话',
        body: '创建可复用的提示词预设，一键应用到 Codex。通过搜索和分页浏览会话历史，在详情视图中查看每一轮对话、工具调用和补丁差异。',
      },
      {
        tag: '05 监控',
        title: '实时日志监控',
        body: '使用内置实时日志查看器监控桥接活动。自动滚动输出，检查请求/响应流程，快速排查 Provider 连接问题。',
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
    sub: '完整的 Tauri 2 桌面外壳、Rust 驱动的桥接核心配合 SQLite 持久化，以及 Vue 3 + Ant Design Vue 前端。在每一个桌面 OS 上都像原生应用。',
    specs: [
      { label: '前端', value: 'Vue 3 + Vite + Ant Design Vue' },
      { label: '外壳', value: 'Tauri 2 (Rust)' },
      { label: '数据库', value: 'SQLite (via sqlx)' },
      { label: '协议', value: 'OpenAI Responses / Chat / Anthropic' },
      { label: '提示词', value: 'Markdown 编辑器 + AGENTS.md 同步' },
      { label: '会话', value: '浏览、搜索与详情审查' },
      { label: '日志', value: '实时自动滚动查看器' },
      { label: '桥接端口', value: '127.0.0.1:17761' },
      { label: '配置 UI', value: '可视化多 Provider 编辑器' },
      { label: 'Codex 同步', value: '一键同步 Provider 和模型' },
      { label: '流式', value: 'SSE + 拆帧缓冲' },
      { label: '更新', value: '内置更新检查' },
      { label: '支持平台', value: 'macOS · Windows · Linux' },
    ],
  },
  cta: {
    eyebrow: '开始使用',
    title: '获取桌面应用。',
    sub: '免费、开源，一分钟内即可就绪。完整的桌面体验 —— 桥接、配置、提示词、日志和会话历史 —— 覆盖所有主流桌面操作系统。',
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
      sessions: '会话历史',
      prompts: '提示词',
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
