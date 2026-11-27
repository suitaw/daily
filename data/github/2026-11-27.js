DAILY_DATA["github/2026-11-27"] = {
  "date": "2026-11-27",
  "highlight": "今天最值得先动手试的是 **obra/superpowers**——一条 `/plugin` 命令就能给 Claude Code 装一套完整的开发方法论，今天单日涨了 854 颗星，装上不用改用法，写代码时技能会自己触发。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装一套完整开发方法论",
      "lang": "Shell",
      "stars": "327,486",
      "today": "854",
      "body": "obra/superpowers 是一套面向编码智能体的技能框架，把「先理清需求→拆任务→写代码→测试→代码审查→收尾」这整套开发流程打包成一堆可以自动触发的技能，支持 Claude Code、Codex、Cursor 等多种工具。装好之后不用手动调用，写代码遇到对应场景时技能会自己跳出来起作用。今天是 GitHub 日榜涨星第二多的项目。",
      "explain": "这里的「技能(skill)」在 Claude Code 里是一组写好的指令文件，碰到对应场景（比如要先写计划、要做代码审查）时会被自动读取并照着执行，相当于给 AI 的开发流程定了一套说明书，不用你每次自己提醒它该怎么做。",
      "opinion": "他现在写代码主要靠 Claude Code，这套技能包相当于把「靠谱的开发流程」直接打包塞给它，省得每次都要自己提醒 AI「先问清楚需求」「写完要测试」。装上后正常聊天写代码就行，技能会按场景自动触发，觉得不合适随时卸掉插件就行，试错成本很低。📱 手机上：`/plugin` 是 Claude Code 自带命令，原生就能跑；安装过程要连 GitHub，理论上能装，没实测过，不保证一次成功。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "这几条都是打在 Claude Code 对话框里的指令，不是终端命令，所以不用加代理前缀；如果网络请求失败，先给启动 Claude Code 的这个终端设 `export https_proxy=http://127.0.0.1:7890` 再重开试试。",
          "steps": [
            { "text": "打开 Claude Code，添加 superpowers 的技能市场：", "code": "/plugin marketplace add obra/superpowers-marketplace" },
            { "text": "装 superpowers 插件：", "code": "/plugin install superpowers@superpowers-marketplace" },
            { "text": "重启一下 Claude Code 让技能生效" }
          ],
          "done": "随便让 Claude Code 写个新功能，如果它主动先问需求细节、写完还提醒你测试，就说明技能已经在起作用。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🛠",
      "repo": "davila7/claude-code-templates",
      "deploy": ["phone", "pc"],
      "title": "一条命令浏览安装 Claude Code 全套组件",
      "lang": "JavaScript",
      "stars": "34,229",
      "week": "237",
      "body": "davila7/claude-code-templates 做了一个在线目录，收录了上千个能直接装进 Claude Code 的 agents、commands、skills、`MCP` 等组件，用一条命令就能搜索、预览、安装，不用自己满世界翻 README。还带一个本地网页面板，能看自己 Claude Code 的用量统计。本周新增 237 颗星。",
      "explain": "`MCP` 是让 AI 连上外部工具（比如数据库、GitHub）的通用接口，装一个 MCP 组件相当于给 AI 开一个新技能。`npx` 是 Node.js 自带的命令，会临时下载一个工具跑一次用完就扔，不用提前装到本地，也不占地方。",
      "opinion": "相当于一个「Claude Code 应用商店」，以后想给 Claude Code 加功能，先用它的 `--search` 搜一下有没有现成的，不用自己到处找插件。本地网页面板能看用了多少 token、哪些技能触发最多，想调优工作流时有点用，不用也不影响正常使用。📱 手机上：跑的是纯 JS，Termux 的 Node.js 能直接跑，大概率没问题；面板只监听本机地址，手机上开自己的浏览器访问就行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "不用提前安装，npx 会临时下载最新版直接跑。",
          "steps": [
            { "text": "打开交互式目录，浏览并选装组件（手机上这条要连 GitHub/aitmpl.com，前面加代理；电脑不用加）：", "code": "https_proxy=http://127.0.0.1:7890 npx claude-code-templates@latest", "after": "电脑上去掉前面的 https_proxy 那段直接跑；卡住或报错大概率是网络问题，下载慢或失败先开代理再试，不保证一次成功。" },
            { "text": "想直奔某个功能找组件，比如找代码审查相关的：", "code": "npx claude-code-templates@latest --search \"code review\"" },
            { "text": "（可选）想看本机的使用统计面板：", "code": "npx claude-code-templates@latest --analytics", "after": "跑起来后打开 http://localhost:3333 查看，只在本机能访问。" }
          ],
          "done": "交互式命令跑完，能在列表里选中并成功装上一个组件（比如装一个 skill），就说明装好了。"
        }
      ],
      "url": "https://github.com/davila7/claude-code-templates"
    },
    {
      "emoji": "🤖",
      "repo": "openai/codex-plugin-cc",
      "deploy": ["pc"],
      "title": "在 Claude Code 里直接喊 Codex 审查代码",
      "stars": "35.5k",
      "body": "openai/codex-plugin-cc 是 OpenAI 官方出的 Claude Code 插件，装上后能在 Claude Code 对话里直接喊 Codex 来审查代码改动，或者把一个任务整个甩给 Codex 在后台跑，跑完回来看结果。适合手上同时装了 Claude Code 和 Codex 的人，把两边连起来用，不用来回切换终端。",
      "explain": "这里的「委派任务」是指让 Codex 在后台单独跑一个调查/修复任务，Claude Code 这边不用干等，随时能用命令查进度。README 里提醒装了自动审查（每次回复后都触发一次）容易形成循环，很快把用量跑没，建议只在盯着看的时候手动开。",
      "opinion": "他 Claude Code 和 Codex 都有，这个插件省了手动复制代码去 Codex 里问一遍的步骤，写完一段代码直接在 Claude Code 里喊它来审查，算是低成本的「换个模型挑毛病」。别开自动循环审查，按需手动跑就行。📱 手机上：插件本身靠 Claude Code 跑没问题，但它要调用本机的 Codex CLI，官方只发了 Linux musl 版二进制，Termux 是 Android 的 bionic 系统，大概率装不上或跑不起来，这个建议留在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "需要电脑上先能跑 Node.js 18.18 及以上版本；下面几条都是打在 Claude Code 对话框里的指令。",
          "steps": [
            { "text": "添加插件市场并安装：", "code": "/plugin marketplace add openai/codex-plugin-cc\n/plugin install codex@openai-codex" },
            { "text": "重新加载插件：", "code": "/reload-plugins" },
            { "text": "跑一次初始化检查，没装 Codex CLI 的话它会帮你装：", "code": "/codex:setup" },
            { "text": "如果 Codex 装好了但没登录，先登录：", "code": "!codex login", "after": "用 ChatGPT 账号（含免费版）登录，或者配置 OpenAI API key 都行。" },
            { "text": "试着后台审查一下当前改动：", "code": "/codex:review --background" }
          ],
          "done": "跑 `/codex:status` 能看到任务跑完，`/codex:result` 能拿到审查结果，就是装成功了。"
        }
      ],
      "url": "https://github.com/openai/codex-plugin-cc"
    },
    {
      "emoji": "🛠",
      "repo": "microsoft/markitdown",
      "deploy": ["pc"],
      "title": "把 PDF/Word/PPT 一键转成 Markdown 喂给 AI",
      "lang": "Python",
      "stars": "198,616",
      "today": "164",
      "body": "markitdown 是微软开源的小工具，能把 PDF、Word、PPT、Excel、图片、音频、网页甚至 YouTube 链接转成干净的 Markdown 文本。常见用法是转完之后直接丢给 AI 当上下文，比直接丢原始文件省 token，AI 也更容易读懂结构。基础的本地转换不用联网、不用 key。",
      "explain": "把文档转成 Markdown 是因为 AI 模型本来就是靠读文字训练出来的，PDF 里的排版、字体这些对它没用反而占地方；转成干净的文字和标题层级后，AI 读起来更准，自己复制粘贴也更省事。",
      "opinion": "他做 AI 小工具时常要把参考资料喂给模型当上下文，用这个代替手动复制粘贴 PDF 内容，排版乱、漏字的问题基本没了，一条命令转完直接贴进 prompt 里。图片描述、语音转录这些要联网的功能用不上也没关系，基础转换本地就能跑完。📱 手机上：它依赖的 magika（用来识别文件类型）要装 onnxruntime，这个在 Termux 上大概率装不上，这个工具建议留在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "需要先装好 Python 3.10 及以上版本。",
          "steps": [
            { "text": "装完整版（支持所有格式）：", "code": "pip install \"markitdown[all]\"", "after": "只想要某几种格式可以换成比如 `pip install \"markitdown[pdf,docx,pptx]\"`，装得更快。" },
            { "text": "转换一个文件试试：", "code": "markitdown 文件路径.pdf -o 输出.md" }
          ],
          "done": "生成的 .md 文件打开能看到排版整齐的文字和标题，内容跟原文件对得上，就是装好了。"
        }
      ],
      "url": "https://github.com/microsoft/markitdown"
    },
    {
      "emoji": "📚",
      "repo": "SWE-agent/mini-swe-agent",
      "deploy": ["pc"],
      "title": "读100行代码看懂AI编程Agent怎么写的",
      "lang": "Python",
      "stars": "10,123",
      "today": "43",
      "body": "mini-swe-agent 是普林斯顿和斯坦福团队做的一个极简示例，核心 agent 类只有约 100 行 Python，就能自己改代码、跑命令、解决 GitHub issue。它不用 AI 模型自带的「工具调用」接口，每一步就是老老实实执行一条 shell 命令，再把结果接着塞进对话历史里，逻辑直给不绕弯，官方说在 SWE-bench 测试上能做对 74% 以上的题。",
      "explain": "这里说的「工具调用（tool-calling）」是模型厂商给的一种固定格式，让 AI 能按格式喊出「我要执行xx操作」。mini-swe-agent 刻意不用这个，改成每一步直接丢一条 bash 命令去执行，原理上更接近「自己手写一个简单的循环」，看代码更容易懂。",
      "opinion": "他在学 Python，也在做 AI Agent 方向的小工具，这个项目代码量小、没有花里胡哨的框架包装，拿来读一遍能看懂一个能干活的 agent 到底是怎么搭起来的：发消息给模型→解析回复→跑命令→把结果接着喂回去，比看大框架的源码省心很多。装好后要接一个 LLM 才能跑，不保证国内 API 能直接兼容它的接口格式。📱 手机上：它依赖 `openai` 这个库，`openai` 需要 `jiter`，Termux 上编译不过装不上，这个只能留在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "需要先装好 Python 3.10 及以上版本。",
          "steps": [
            { "text": "用 uv 直接跑，不用提前装到本地：", "code": "pip install uv && uvx mini-swe-agent" },
            { "text": "或者装到当前环境里，然后跑命令行界面：", "code": "pip install mini-swe-agent\nmini" },
            { "text": "想读源码的话克隆仓库，看 `src/minisweagent` 目录：", "code": "git clone https://github.com/SWE-agent/mini-swe-agent.git", "after": "下载慢或失败就先开代理。" }
          ],
          "done": "命令行界面能跑起来，输入任务后它会自己执行 bash 命令并给出结果，就说明装成功了；只读代码的话打开 src/minisweagent 目录能看懂文件结构就够了。"
        }
      ],
      "url": "https://github.com/SWE-agent/mini-swe-agent"
    }
  ]
};
