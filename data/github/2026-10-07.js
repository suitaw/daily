DAILY_DATA["github/2026-10-07"] = {
  "date": "2026-10-07",
  "highlight": "今天最值得先装的是 `i-have-adhd`——一句话让 Claude Code 别绕弯子直接给答案，零成本、随时能卸载，手机电脑都能用；画图需求多的话再加装 `diagram-design`。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "ayghri/i-have-adhd",
      "title": "一个技能包，让 Claude Code 别绕弯子直接给答案",
      "lang": "Python",
      "stars": "54,402",
      "today": "326",
      "body": "这是一个装进 Claude Code / Codex 的 Agent Skill，装上后它会强制 AI 的回答风格变成「先做事，再解释」：步骤编号、直接给结论，少说「让我先解释一下背景」这种铺垫。",
      "explain": "标题里的「ADHD」是借用注意力不集中的说法，意思是让 AI 的回答更适合「不想看长篇大论、只想要答案」的人，不是真的医学工具。Agent Skill 就是给 AI 编程工具额外装的一项「技能包」，装上就多会一项本事。",
      "opinion": "如果你也嫌 Claude Code 有时候解释太多、绕到正题要等半天，这个装上试试，几乎零成本，不满意随时卸载。它改的是 AI 说话风格，不是功能，不会影响你现有项目。📱 手机上：能装，整个过程就是跟 Claude Code 说一句话让它自己装，不涉及编译和额外依赖。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（通用）",
          "steps": [
            { "text": "在 Claude Code 里直接说：", "code": "Install the i-have-adhd skill/plugin from https://github.com/ayghri/i-have-adhd", "after": "用英文原句效果更稳，Claude Code 会自己去抓仓库内容并安装" },
            { "text": "不生效的话可以改用插件市场方式：", "code": "/plugin marketplace add ayghri/i-have-adhd\n/plugin install i-have-adhd@i-have-adhd", "after": "仓库主页的 INSTALL.md 有更详细步骤，两种方法选一种就行" }
          ],
          "done": "下次让 Claude Code 做事时，回答明显变得直接、不绕弯子，就是生效了。"
        }
      ],
      "url": "https://github.com/ayghri/i-have-adhd"
    },
    {
      "emoji": "🤖",
      "repo": "cathrynlavery/diagram-design",
      "title": "给 Claude Code 装的画图技能，架构图流程图随口就出",
      "lang": "HTML",
      "stars": "44,027",
      "today": "228",
      "body": "这是一个 Agent Skill，装进 Claude Code、Codex 等 AI 编程工具后，直接用自然语言说「帮我画个架构图」，它就能生成流程图、架构图、时序图、ER 图等 42 种图，还会自动抓你项目网站的配色和字体，让图和项目风格统一。整个技能是自包含的 HTML+SVG，不用额外装运行时。",
      "explain": "SVG 是一种矢量图格式，放大也不会糊，浏览器能直接打开，不用专门的看图软件。",
      "opinion": "你平时写单文件 HTML 小工具，做之前想先理清模块关系、画个流程图，或者给工具配张说明图，这个正好省了自己去画图的功夫，直接在 Claude Code 里一句话要图。装的时候用的是 Claude Code 自带的 `/plugin` 命令，不用额外环境。📱 手机上：能装，在 Termux 里跑的 Claude Code 里敲命令不涉及编译，没问题；只有导出 PNG 才需要另装 Python 的 playwright，那一步手机上不保证能成，用不到可以不管。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（通用）",
          "intro": "在你已经打开的 Claude Code 里直接敲命令，手机电脑操作一样。",
          "steps": [
            { "text": "添加技能市场：", "code": "/plugin marketplace add cathrynlavery/diagram-design" },
            { "text": "安装技能：", "code": "/plugin install diagram-design@diagram-design" },
            { "text": "试一下：", "code": "帮我画一个这个项目的架构图", "after": "这是跟 Claude Code 说的中文话，不是命令行命令" }
          ],
          "done": "Claude Code 回复里给出图表文件并提示可以导出，就是装成功了。"
        }
      ],
      "url": "https://github.com/cathrynlavery/diagram-design"
    },
    {
      "emoji": "🤖",
      "repo": "mvschwarz/openrig",
      "title": "用 Claude Code、Codex 搭一个多 Agent 协作团队",
      "lang": "TypeScript",
      "stars": "5,517",
      "week": "3,327",
      "body": "OpenRig 把你本地开着的多个 Claude Code / Codex 会话组织成一个「团队」：每个 Agent 固定角色、能互相看到上下文、知道各自该干哪部分活，而不是各开一个终端互相不知道对方在干嘛。",
      "explain": "多 Agent 协作说的是让好几个 AI 同时干活、分工配合，比如一个写代码一个写测试，跟真实团队分角色差不多。tmux 是终端里开多个窗口/面板的小工具，这里用来同时管理这几个 Agent 的会话。",
      "opinion": "如果你在做的 Agent 项目变复杂了，一个 Claude Code 会话跟不过来，这个可以拿来试试分工；平时一个人一个会话就能做完的活，暂时用不上，不用急着装。📱 手机上：能装，Termux 里装 tmux 和这个 CLI 都是现成包不用编译；官方没测过 Windows 原生运行，电脑上得用 WSL2，不保证。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "intro": "需要先装好 tmux。",
          "steps": [
            { "text": "装 tmux：", "code": "pkg install tmux" },
            { "text": "装 OpenRig：", "code": "npm install -g @openrig/cli" },
            { "text": "空跑一次检查环境：", "code": "rig setup --dry-run" },
            { "text": "进到你要用的项目目录，启动团队：", "code": "cd 你的项目目录\nrig up starter --cwd ." },
            { "text": "查看状态：", "code": "rig ps --nodes --rig starter" }
          ],
          "done": "`rig ps` 能看到几个 Agent 的座位都是就绪状态，或者 `rig tui` 能打开拓扑图，就是装成功了。"
        }
      ],
      "url": "https://github.com/mvschwarz/openrig"
    },
    {
      "emoji": "🤖",
      "repo": "VectifyAI/PageIndex",
      "title": "不用向量库的 RAG 引擎，靠推理一步步翻文档找答案",
      "lang": "Python",
      "stars": "38,793",
      "week": "2,079",
      "body": "PageIndex 是给长文档做检索增强生成（RAG）的工具，走的不是「向量相似度」那条路，而是先把文档按目录结构建成树，再让大模型像人翻书一样一层层找到相关章节再回答，官方说这样处理财报、法律合同这类长文档更准。",
      "explain": "RAG 就是让大模型先去翻你的资料再回答，而不是凭记忆编；向量检索是常见做法，把文字变成一堆数字去算「像不像」，但「像」不代表「答案就在这」，这是 PageIndex 要解决的问题。",
      "opinion": "你做 Agent 工具时如果要处理长文档（比如让 AI 读合同、读说明书再回答问题），这个可以替代常见的向量库方案去试效果；但它要连 OpenAI 的 API（填 `OPENAI_API_KEY`），不是免费本地跑。📱 手机上：装不上，`pip install pageindex` 会带着装 openai 的 Python SDK，openai 依赖的 `jiter` 是要编译的原生扩展，Termux 里编不过，这个只能放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows/Mac/Linux）",
          "steps": [
            { "text": "装包：", "code": "pip install -U pageindex" },
            { "text": "去 platform.openai.com 申请 key，设置环境变量：", "code": "OPENAI_API_KEY=你的key" },
            { "text": "跑一下官方示例（存成 .py 文件用 python 跑）：", "code": "from pageindex import PageIndexClient\nclient = PageIndexClient(index=\"gpt-5.6-luna\", chat=\"gpt-5.6-sol\")\ndoc_id = client.submit_document(\"report.pdf\")[\"doc_id\"]\nanswer = client.chat(\"问题\", doc_id=doc_id)", "after": "report.pdf 换成你自己的文件" }
          ],
          "done": "`answer` 打印出跟文档内容相关的回答，就是跑通了；报 API Key 错误就去检查环境变量有没有设对。"
        }
      ],
      "url": "https://github.com/VectifyAI/PageIndex"
    },
    {
      "emoji": "🛠",
      "repo": "heygen-com/hyperframes",
      "title": "写 HTML 自动渲染成 MP4 视频，专门给 AI Agent 用",
      "lang": "TypeScript",
      "stars": "57,948",
      "week": "3,614",
      "body": "HyperFrames 让你用 HTML/CSS 写视频里的每一帧内容，它负责把这些网页渲染、合成成一个 MP4 文件，官方的说法是「专门为 Agent 设计」——也就是 AI 能直接写 HTML 代码来「拍」视频，不用你会剪辑软件。",
      "explain": "可以理解成把你熟悉的网页布局能力直接拿来做视频素材：原来是在浏览器里显示的一帧页面，这里是把很多帧连起来渲成一段视频。",
      "opinion": "你平时做的是单文件 HTML 小工具，这正好是同一套技能（HTML/CSS）用在新地方——给工具做个演示视频、做个动态封面，不用学剪辑软件，还能让 Claude Code 直接帮你写。值得花半小时看看官方 Showcase 再决定要不要深入。📱 手机上：能装，Node 和 ffmpeg 在 Termux 都有现成包不用编译；渲染视频比较吃 CPU，手机上可能会慢，小片段没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（通用）",
          "intro": "需要先装好 ffmpeg。",
          "steps": [
            { "text": "装 ffmpeg（Termux）：", "code": "pkg install ffmpeg", "after": "Windows 电脑装 ffmpeg 可以去官网下载加到 PATH，或者用 winget install ffmpeg" },
            { "text": "建一个新项目：", "code": "npx hyperframes init my-video" },
            { "text": "进项目目录，浏览器实时预览：", "code": "cd my-video\nnpx hyperframes preview" },
            { "text": "满意了渲染成视频：", "code": "npx hyperframes render" }
          ],
          "done": "命令执行完在项目目录下能看到新生成的 .mp4 文件，就是成功了。"
        }
      ],
      "url": "https://github.com/heygen-com/hyperframes"
    },
    {
      "emoji": "🛠",
      "repo": "vastsa/FileCodeBox",
      "title": "自己搭一个取件码文件分享站，不用注册",
      "lang": "Python",
      "stars": "8,591",
      "today": "3",
      "body": "FileCodeBox 是个自托管的文件/文本分享工具：上传后生成一个取件码，对方输入码就能取文件，不用双方注册账号，有点像寄快递。可以设置取件码的有效期、能取几次。",
      "explain": "「自托管」就是你自己找台机器把这个程序跑起来，数据在自己手里，不是放在别人的服务器上。",
      "opinion": "给朋友同事传个文件又不想用微信压缩画质，或者不方便加好友，搭一个这个比在群里发大文件方便；一个人用场景不大，更适合练手「自己部署一个服务」。📱 手机上：装不了，官方只给了 Docker 部署方法，Termux 没有 Docker；电脑上装了 Docker Desktop 的 Windows 可以跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要 Docker Desktop）",
          "intro": "先去 docker.com 装好 Docker Desktop 并打开。",
          "steps": [
            { "text": "拉取并启动容器：", "code": "docker run -d --restart unless-stopped -p 12345:12345 -v ./data:/app/data -e APP_ENV=production -e LOG_LEVEL=warning lanol/filecodebox:2.7.1" },
            { "text": "打开浏览器访问：", "code": "http://localhost:12345", "after": "第一次打开会引导你做初始化设置，照着页面填就行" }
          ],
          "done": "浏览器能打开取件/发件页面，就是跑起来了。"
        }
      ],
      "url": "https://github.com/vastsa/FileCodeBox"
    },
    {
      "emoji": "💰",
      "repo": "securo-finance/securo",
      "title": "自己部署一个记账理财管家，数据不放别人服务器",
      "stars": "3.9k",
      "body": "Securo 是一个自托管的个人记账/预算工具：能分账户记交易、自动给支出分类、跟踪预算和储蓄目标，还能连银行账号自动同步流水（通过第三方同步服务）。不涉及自动交易，纯粹是记账理财管理。",
      "explain": "「自托管」意思是软件装在你自己的电脑/服务器上，数据不经过别人的云端，比用一些 App 记账更让人放心一点，代价是得自己花点功夫装。",
      "opinion": "这是正经记账学习工具，不是帮你赚钱的东西，拿来练手「自己理清每月钱花哪了」挺合适，比用表格记更省事，还带预算和储蓄目标功能。📱 手机上：装不了，官方安装脚本靠 Docker（没装会自动帮你装），Termux 里没有 Docker；电脑上装好 Docker Desktop 就能跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要 Docker Desktop）",
          "steps": [
            { "text": "先装好 Docker Desktop 并打开。" },
            { "text": "克隆仓库：", "code": "git clone https://github.com/securo-finance/securo\ncd securo" },
            { "text": "启动服务：", "code": "docker compose up --build", "after": "第一次构建会比较慢，等它跑完" },
            { "text": "打开浏览器访问：", "code": "http://localhost:3000", "after": "首次进去会让你创建账号，自己设密码" }
          ],
          "done": "浏览器能打开注册/登录页面，注册完能看到记账主界面，就是装成功了。"
        }
      ],
      "url": "https://github.com/securo-finance/securo"
    },
    {
      "emoji": "🛠",
      "repo": "pbakaus/impeccable",
      "title": "给 AI 写的网页做设计体检，避免「一眼假」的 AI 风格",
      "lang": "JavaScript",
      "stars": "77,688",
      "today": "616",
      "body": "Impeccable 是给 Claude Code 这类 AI 编程工具用的设计规范包，装上后 AI 写页面时会按统一的设计词汇来，还附带 60 条自动检测规则，专门挑「配色重复」「滥用卡片」这类 AI 做网页常犯的毛病。",
      "explain": "这里说的是网页视觉设计的「审查清单」，类似写代码有 lint 工具挑代码问题，这个是挑「界面好不好看、规不规范」的问题，所以叫设计体检。",
      "opinion": "你自己写的单文件 HTML 小工具如果想让界面更顺眼一点又不想花时间学设计，装上让 AI 按它的规则走，能少踩一些常见的丑设计坑。📱 手机上：不保证，核心引擎是预编译的 Rust 二进制，Termux 用的是 Android 自己的 C 库（不是标准 Linux 的 glibc），这类预编译二进制经常在 Termux 里跑不起来，装完报「无法执行」或者直接卡住就是这个原因，放电脑上用更稳。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows/Mac/Linux）",
          "steps": [
            { "text": "在项目目录下安装：", "code": "npx impeccable install" },
            { "text": "在 Claude Code 里体检一下当前页面：", "code": "/impeccable audit" },
            { "text": "让它帮你优化：", "code": "/impeccable polish" }
          ],
          "done": "`/impeccable audit` 能输出一份检测结果列表，就是装成功了。"
        }
      ],
      "url": "https://github.com/pbakaus/impeccable"
    }
  ]
};
