DAILY_DATA["github/2026-11-28"] = {
  "date": "2026-11-28",
  "highlight": "今天最值得先装的是 **cathrynlavery/diagram-design**——给 Claude Code 装上这个技能，说清楚结构就能自动画出架构图、流程图，生成的还是单个 HTML 文件，跟他平时项目的风格完全对上，今天单日涨了 725 颗星。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "cathrynlavery/diagram-design",
      "deploy": ["phone", "pc"],
      "title": "让AI编程工具自动画架构图",
      "lang": "HTML",
      "stars": "74,462",
      "today": "725",
      "body": "diagram-design 是一个 Agent Skill（智能体技能包），装进 Claude Code、Cursor 等 AI 编程工具后，能让它们用自然语言生成架构图、流程图、时序图等共 52 种图表，每种图都配浅色、深色两种样式。生成结果是一个单独的 `.html` 文件，里面是内嵌 SVG 矢量图，双击就能在浏览器打开，不用额外装软件。它还能读懂 draw.io、Mermaid、Excalidraw 等格式的旧图，照搬内容重新画一遍。今天单日新增 725 颗星，是日榜涨星最多的项目之一。",
      "explain": "**Agent Skill** 是一套写好的操作说明文件，AI 编程工具读到后就学会了一项新技能，这里学会的是「怎么画规范的图」，不用你自己去学画图软件。**SVG** 是一种用代码描述图形的格式，图缩放到多大都不会变模糊，和手机截图不是一回事。它能读的 draw.io、Mermaid、Excalidraw 都是别的画图工具/格式，这个技能相当于一个「图纸翻译官」，拿别人画的图过来重画成自己的风格。",
      "opinion": "他平时项目都是单文件 HTML，这个技能生成的东西恰好也是单文件 HTML，风格上很搭；写文档、做项目说明时想配一张架构图，直接跟 Claude Code 说清楚结构，几句话就能出图，不用再去学一个画图软件。缺点是同一句话每次生成的布局可能不太一样，也不是能用文字 diff 的源文件，经常要改的图还是建议用 Mermaid 这种纯文字格式。装上免费、不用就卸，试错成本很低。📱 手机上：装的是跑在 Claude Code 里的技能文件，本质是 `npx` 跑一段 JS，Termux 的 Node.js 能直接跑，基础画图功能不需要额外装浏览器，大概率没问题；只有导出 PNG 才要装 Playwright，手机上不建议折腾这个，用 SVG 就够看。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "下面几条是打在 Claude Code 对话框里的指令，不是终端命令，不用加代理前缀。",
          "steps": [
            { "text": "添加技能市场：", "code": "/plugin marketplace add cathrynlavery/diagram-design" },
            { "text": "安装技能：", "code": "/plugin install diagram-design@diagram-design" },
            { "text": "跟 Claude Code 说清楚要画的内容，比如：", "code": "帮我画一个包含前端、后端、数据库的架构图", "after": "这句是说给 Claude Code 的话，不是命令。" }
          ],
          "done": "生成出一个 .html 文件，双击能在浏览器里看到图，就是装成功了。"
        }
      ],
      "url": "https://github.com/cathrynlavery/diagram-design"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "deploy": ["read"],
      "title": "图解算法教程，入门Python可直接看",
      "lang": "Python",
      "stars": "132,785",
      "body": "hello-algo 是一本开源的数据结构与算法教程，用大量配图和动画把排序、查找、树、图这些概念讲清楚，每个算法都配了 Python、Java、C++ 等十多种语言的可运行代码。内容免费在线阅读，也能下载 PDF，GitHub 上已经有 13 万多颗星，是这个方向认可度很高的教程之一。",
      "explain": "**数据结构**是组织和存放数据的几种标准方式（比如数组、链表），**算法**是处理这些数据的具体步骤（比如排序、查找），两者是编程的基础知识，入门阶段迟早会碰到。教程里的动画是把每一步数据怎么移动画出来，比干看文字好懂很多。",
      "opinion": "他现在在学 Python，这本书用 Python 代码实现了每一个算法，边看图解边照着敲代码，比直接看抽象的文字描述容易理解得多，也能顺便练手 Python。内容是免费电子书性质，不用装软件，想看哪章跳着看就行，不用从头通读。📱 手机上：就是打开网页看书，手机浏览器直接能看，不受限制。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开在线教程网站：[hello-algo.com](https://www.hello-algo.com)" },
            { "text": "想看某种语言的代码，在每章代码块上方切换语言标签（比如切到 Python）" }
          ],
          "done": "网页能正常打开、代码块能跟着切换语言，就说明能看了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "🛠",
      "repo": "zhouxiaoka/autoclip",
      "deploy": ["pc"],
      "title": "本地AI剪视频，长视频自动剪成短视频",
      "lang": "Python",
      "stars": "17,588",
      "today": "718",
      "body": "autoclip 是一个开源的本地优先 AI 视频剪辑工具，定位成收费工具 OpusClip 的平替，能把播客、访谈、直播回放这类长视频自动剪出几个高光短视频，顺带配好字幕、封面图和发布文案。它打包了 Windows / macOS 桌面应用，装好就能点开自带的示例试用；也支持完全离线跑，用本地的 Ollama / LM Studio 搭配 Whisper 做语音转文字，不一定要联网或掏 API key。",
      "explain": "**OpusClip** 是一款收费的海外剪长视频工具，这里说的「平替」是开源、能自己掌控的替代品。**Whisper** 是一种能把语音转成文字的模型，剪视频前先转成文字才能找到哪段话精彩、该剪在哪里；自己的电脑跑这个模型不用联网也不用交钱。",
      "opinion": "如果以后要把直播回放、播客之类的长录像剪成适合发布的短视频，这个工具能省掉手动找片段、配字幕的大半功夫，桌面版装好直接用自带示例试一下就知道好不好用。不想花 API 钱也可以完全离线跑，缺点是本地转写速度会比云端慢一些，电脑配置弱的话要多等一会。📱 手机上：它打包了 FFmpeg 和本地语音模型，这类处理对算力和存储要求都不低，Termux 装不了对应的桌面环境，这个工具建议留在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "装桌面应用最省事，里面已经打包好 Python 和 FFmpeg，不用自己另外装。",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/zhouxiaoka/autoclip/releases)，下载对应系统的安装包（Apple Silicon macOS 或 Windows 10/11 x64）", "after": "下载慢或打不开就先开代理。" },
            { "text": "装好打开后，先点一下内置的示例（Try the built-in example）看看效果" },
            { "text": "（可选）想完全离线跑，照仓库 README 里的说明接上本地的 Ollama / LM Studio 和 Whisper" }
          ],
          "done": "打开示例能看到自动剪出来的短视频片段、配好字幕，就是装成功了。"
        }
      ],
      "url": "https://github.com/zhouxiaoka/autoclip"
    },
    {
      "emoji": "🤖",
      "repo": "firecrawl/firecrawl",
      "deploy": ["phone", "pc"],
      "title": "一条命令给AI编程工具加网页抓取",
      "lang": "TypeScript",
      "stars": "211,681",
      "today": "822",
      "body": "firecrawl 是一个专门给 AI Agent 用的网页抓取/搜索服务，能把任意网页转成干净的 Markdown，或者按关键词搜网页当作上下文喂给模型。官方提供 Firecrawl Cloud，也可以完全不注册、不用 API key，靠「Keyless」免费额度直接用（每月 1,000 次），一条命令就能接进 Claude Code、Cursor 等 AI 编程工具，变成一个新的 MCP 工具。今天单日新增 822 颗星。",
      "explain": "**MCP** 是让 AI 连上外部工具（这里是「抓网页」这个能力）的通用接口，装好后 AI 写代码或聊天时能自己决定要不要去抓一个网页来看。这里说的「Keyless」就是不用注册账号、不用自己填密钥，直接免费用一点额度。",
      "opinion": "他做 AI 小工具时经常要给模型喂外部资料，这个工具装好后相当于给 Claude Code 多了一个「自己上网查资料」的能力，不用再手动复制粘贴网页内容。免费额度每月 1,000 次，个人平时用基本够，用超了才需要自己注册拿 API key。📱 手机上：装的是 Node.js 脚本，Termux 的 Node 能直接跑，不涉及编译，大概率没问题；完整自托管版需要装 Rust 编译一个本地服务，那个手机上大概率装不上，不用管它，用免费的 Keyless 额度就行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "steps": [
            { "text": "一条命令自动检测并接进你用的 AI 编程工具（手机上这条要连 GitHub，前面加代理；电脑不用加）：", "code": "https_proxy=http://127.0.0.1:7890 npx -y firecrawl-cli@latest init --all --browser", "after": "电脑上去掉前面的 https_proxy 那段直接跑；装完重启一下 Claude Code（或你用的工具）让它生效，不保证一次成功，失败多试一次或检查代理。" }
          ],
          "done": "跟 Claude Code 说一句「帮我抓一下某个网页的内容」，它能正常返回网页内容，就是装成功了。"
        }
      ],
      "url": "https://github.com/firecrawl/firecrawl"
    },
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "deploy": ["pc", "cloud"],
      "title": "一键搭个人AI助手机器人，支持国产模型",
      "lang": "Python",
      "stars": "48,116",
      "today": "24",
      "body": "CowAgent（原名 chatgpt-on-wechat）是一个开源的个人 AI 助手框架，支持任务规划、调用工具/技能、长期记忆和 MCP 集成。模型这块不是只能接 OpenAI，豆包、DeepSeek、Qwen、GLM、Kimi 等国产模型都在支持列表里，装好后能接成网页聊天面板，也能接到 Telegram、微信、飞书、QQ 等多个聊天渠道上当机器人用。",
      "explain": "这里的「渠道」就是机器人能接到哪些聊天软件上，比如接到微信就能在微信里跟它对话，接到 Telegram 就能在 Telegram 里用，一个助手可以同时接好几个渠道。",
      "opinion": "他平时主要调豆包、DeepSeek 这类国产模型做小工具，这个框架正好把模型接入、多渠道机器人这块的脏活都打包好了，装起来直接在网页控制台里填上自己的 API key 就能用，不用自己从零写一套 Agent 服务；拿来看它怎么做任务规划和长期记忆，对自己写 Agent 也有参考价值。放在云服务器上可以当个 7x24 在线的助手机器人用。📱 手机上：官方没提到 Termux 部署方式，只有单独的手机 App，跟 Termux 装服务不是一回事，这个建议放在电脑或云服务器上跑，手机上装服务不保证能成。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器",
          "intro": "推荐用 Docker，省心也方便以后放到云服务器上长期跑；需要先装好 Docker。",
          "steps": [
            { "text": "克隆仓库（这条要连 GitHub，国内机器前面加代理，国外云服务器一般不用加）：", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/zhayujie/CowAgent.git", "after": "具体要不要加代理以自己机器的网络情况为准。" },
            { "text": "进入目录，用 Docker 启动：", "code": "cd CowAgent\ndocker compose up -d" },
            { "text": "打开网页控制台 `http://部署机器的IP:9899`，在里面填模型的 API key（比如豆包、DeepSeek 的 key），不用手动改配置文件" },
            { "text": "要给公网访问，照仓库 README 把配置里的 web_host 改成 0.0.0.0、设好 web_password，并在防火墙开放 9899 端口；本机自用可以跳过这步" }
          ],
          "done": "网页控制台能打开，填好 key 后发一句话机器人能正常回复，就是装成功了。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🤖",
      "repo": "n8n-io/nod",
      "deploy": ["pc"],
      "title": "能自己上网办事的个人智能体，仍是预览版",
      "lang": "TypeScript",
      "stars": "4,318",
      "week": "1,424",
      "body": "nod 是 n8n 团队开源的个人 AI 智能体，和 n8n 本身的 AI Assistant 是两个不同的东西。它有自己的「电脑」和浏览器，能连 Gmail、日历、Slack、Notion 和普通网页，比如每天整理会议简报、定时盯一个网页价格有没有变、甚至在真实网站上帮你取消一个试用订阅；执行有实际影响的操作前会先问你同意。官方把它标成「研究预览版」，说明它可能会犯错。目前只有桌面安装包，没有托管版本。",
      "explain": "这种能自己点网页、自己操作浏览器完成任务的 AI，业内一般叫**计算机使用型智能体（computer-use agent）**，跟只会聊天回话的 AI 不是一个级别，它是真的在模拟一个人点鼠标、填表单。",
      "opinion": "这是目前这类「自主智能体」能做到什么程度的一个很直观的参考样本，值得装来看看它具体怎么跟你确认、怎么处理失败，对自己以后做类似的 Agent 工具有参考价值。但它是研究预览版，会去操作真实账号（邮箱、Slack 这些），执行关键操作前虽然会问你，还是要盯着点，别让它连上特别重要的账号；模型费用要自己掏（用自己的 API key，或登录 ChatGPT Plus/Pro 账号）。📱 手机上：只有 macOS、Windows、Linux 桌面安装包，没有手机版，这个只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "装桌面安装包最简单，官方说整个流程大概十分钟。",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/n8n-io/nod/releases)，下载对应系统的安装包（macOS 14 及以上、Windows 11 预览版或 Linux x64 预览版）" },
            { "text": "装好打开后，按引导接上模型：填自己的 API key，或登录 ChatGPT Plus/Pro 账号" },
            { "text": "按需要连上 Gmail、日历、Slack、Notion 等账号，想用哪个连哪个，不连也能用基础功能" },
            { "text": "在 App、Telegram 或 WhatsApp 里给它发个任务指令试试" }
          ],
          "done": "发出一个任务后它能给出执行步骤、在关键操作前弹出确认，就是装成功了；计划任务只在这台电脑开着的时候才会执行。"
        }
      ],
      "url": "https://github.com/n8n-io/nod"
    }
  ]
};
