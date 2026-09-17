DAILY_DATA["github/2026-09-17"] = {
  "date": "2026-09-17",
  "highlight": "今天最值得先装的是 `agent-skills`——纯 Markdown 文件，一条命令就能给 Claude Code 装上「写需求→写测试→代码审查→安全检查」一整套流程，不用装任何运行环境，手机电脑都能用。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "addyosmani/agent-skills",
      "title": "一键给 Claude Code 装一整套「资深工程师工作流」",
      "lang": "JavaScript",
      "stars": "95,445",
      "today": "658",
      "body": "这是一套给 AI 编程代理用的技能包，一共 25 个「Skill」，覆盖写需求、写测试、代码审查、安全加固、性能优化、Git 提交规范等软件开发全流程，还带 9 个对应的斜杠命令（比如 `/spec`、`/plan`、`/review`、`/ship`）和 4 个专门角色的审查员。全是纯 Markdown 文件写的说明书，不用额外装运行环境，Claude Code、Cursor、Codex、Windsurf 等主流 AI 编程工具都能直接用。今天新增了 658 颗星，本周涨了 2,119 颗。",
      "explain": "「Skill」可以理解成给 AI 编程助手预装的一套「操作手册」——让它按固定步骤先写需求、再写测试、再写代码、最后走一遍安全检查，不用你每次都一句句嘱咐它该做什么。「斜杠命令」就是在 Claude Code 里打 `/加名字` 直接触发这一整套流程，类似快捷键。",
      "opinion": "你平时用 Claude Code 从头写一个单文件小工具，很容易漏掉「写测试」「安全检查」「代码审查」这些环节，这套 Skill 相当于把容易被跳过的步骤都补上了，装好后打 `/review` 或 `/ship` 就能走一遍流程。成本很低（不装额外环境，纯文本文件），值得先装上试用几天看顺不顺手。📱 手机上：全是 Markdown 文件加一个纯 JS 的安装脚本，不用编译任何东西，Termux 自带的 Node.js 就能装，能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "在项目目录下安装全部 25 个 Skill（要连 GitHub，命令前面加了本机代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add addyosmani/agent-skills" }
          ],
          "done": "命令跑完没报错，项目目录下多出一个存放 Skill 的文件夹；在 Claude Code 里输入 `/ship` 之类的命令有反应，就是装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "在项目目录下打开 PowerShell，安装全部 Skill（下载慢或失败就先开代理）：", "code": "npx skills add addyosmani/agent-skills" }
          ],
          "done": "命令跑完没报错，在 Claude Code 里输入 `/ship` 之类的命令有反应，就是装成功了。"
        }
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "emoji": "🤖",
      "repo": "langbot-app/LangBot",
      "title": "网页配置一下，就能把 DeepSeek/豆包接进群聊当机器人",
      "lang": "Python",
      "stars": "17,864",
      "today": "33",
      "body": "LangBot 是一个开源的「大模型机器人」搭建平台，网页上配置好 API Key 和人设，就能把 DeepSeek、豆包（通过火山方舟接入）、智谱 GLM、Kimi 等国产大模型，或者 OpenAI、Claude 接到 QQ、微信、企业微信、飞书、钉钉、Discord、Telegram、Slack 等十几个平台的群聊或私聊里当机器人用，还支持插件和知识库扩展。今天在 GitHub 中文热门榜新增了 33 颗星。",
      "explain": "这里的「机器人」不是实体机器人，是接在聊天软件里、能自动回消息的 AI 账号。项目里说的「网关」（比如火山方舟、硅基流动）可以理解成一个统一中转站，帮你用同一套接口调不同厂商的大模型，不用给每家单独写对接代码。",
      "opinion": "如果你想做一个「群里能聊天、能查资料的 AI 助手」，用这个平台比自己从零写消息收发、多轮对话管理省事很多，网页配置好基本不用写代码；缺点是功能偏「全家桶」，配置项不少，第一次上手要花点时间摸索。📱 手机上：它依赖 openai、anthropic 这两个 SDK 来调用大模型接口，这两个包在 Termux 上因为缺 jiter 装不上，手机基本装不了；只能在电脑上跑，跑起来之后照样能用手机上的聊天软件跟机器人对话，不影响使用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，手机 Termux 装不了）",
          "steps": [
            { "text": "先装 uv（Python 包管理器，PowerShell 里执行，下载慢或失败就先开代理）：", "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"" },
            { "text": "一条命令启动 LangBot（会自动下载安装）：", "code": "uvx langbot" },
            { "text": "浏览器打开 http://localhost:5300，按提示新建管理员账号，再去「模型」里填入 DeepSeek 或豆包（火山方舟）的 API Key" }
          ],
          "done": "网页能打开、账号建好后，再配置一个消息平台（比如先试 Telegram）绑定成功，机器人在群里能回消息，就算装好了。"
        }
      ],
      "url": "https://github.com/langbot-app/LangBot"
    },
    {
      "emoji": "🛠",
      "repo": "github/spec-kit",
      "title": "让 AI 编程代理先写清楚需求再动手写代码",
      "lang": "Python",
      "stars": "137,385",
      "week": "3,019",
      "body": "Spec Kit 是 GitHub 官方出的工具，思路是「先把需求、技术方案写清楚，AI 编程代理再照着写代码」，而不是一上来就让 AI 直接开写。装好后会在 Claude Code、Copilot 等工具里多出 `/speckit-specify`、`/speckit-plan`、`/speckit-implement` 等一串斜杠命令，分别对应「写需求」「定方案」「拆任务」「动手实现」几个阶段，每步都会落地成一份文档，方便回头检查 AI 是不是理解错了需求。本周新增了 3,019 颗星。",
      "explain": "「规范驱动开发」的意思是把「要做什么、为什么这么做」先写成一份清晰的文档（也就是「Spec」），再让 AI 照着实现，能减少「AI 自己脑补需求、做出来的东西不是你要的」这种情况。",
      "opinion": "你平时做的单文件小工具需求一般不复杂，简单功能不一定用得上这么正式的流程；但如果之后想做一个步骤多一点的 Agent，先用它整理一遍需求和方案，能减少来回返工，尤其是自己也没完全想清楚要做成什么样的时候，逼自己写一遍 Spec 挺有用。📱 手机上：是纯 Python 命令行工具，用 Termux 自带的 uv 装，不依赖 openai/anthropic 这类装不上的库，能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "装命令行工具（要连 GitHub 下载依赖，命令前面加了本机代理）：", "code": "https_proxy=http://127.0.0.1:7890 uv tool install specify-cli" },
            { "text": "初始化一个新项目，指定用 Claude Code：", "code": "specify init my-project --ai claude" },
            { "text": "进入项目目录：", "code": "cd my-project" }
          ],
          "done": "目录下多出 `.claude` 之类的配置文件夹；在 Claude Code 里打 `/speckit-specify` 有反应，就是装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装命令行工具（下载慢或失败就先开代理）：", "code": "uv tool install specify-cli" },
            { "text": "初始化一个新项目，指定用 Claude Code：", "code": "specify init my-project --ai claude" },
            { "text": "进入项目目录：", "code": "cd my-project" }
          ],
          "done": "目录下多出 `.claude` 之类的配置文件夹；在 Claude Code 里打 `/speckit-specify` 有反应，就是装成功了。"
        }
      ],
      "url": "https://github.com/github/spec-kit"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "title": "动画图解的数据结构与算法教程，Python 版免费在线看",
      "stars": "130,168",
      "today": "35",
      "body": "《Hello 算法》是一本开源的数据结构与算法教程，最大特色是用动画图解代替干巴巴的文字，配套代码在 Python、Java、C++、JavaScript、Go 等 13 种语言下都能跑，可以直接在网页上边看动画边跑代码。支持简体中文、繁体中文、英文、日文、俄文。今天新增了 35 颗星，是个长期稳定涨人气的老牌学习资源。",
      "explain": "「数据结构与算法」是编程的基本功，比如「怎么高效查找一个数据」「怎么给一堆数据排序」，这些概念不挂钩具体语言，学会了之后不管用 Python 还是其他语言写代码，思路都是通的。",
      "opinion": "你正在入门 Python，这本书的动画图解方式比单看文字或者干看代码要好理解得多，选 Python 版对着敲一遍例子，顺便还能巩固刚学的语法。不用装任何软件，网页打开就能看，是这次推荐里最不费事的一个，建议先看这个。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "intro": "纯网页教程，手机电脑浏览器都能直接看。",
          "steps": [
            { "text": "打开官网 [www.hello-algo.com](https://www.hello-algo.com)，语言选简体中文" },
            { "text": "在顶部或侧边栏把代码语言切换成 Python，跟着章节顺序看动画、读代码" }
          ],
          "done": "打开网站能正常看到章节目录和动画演示，就可以直接开始看了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "🎨",
      "repo": "JoeanAmier/TikTokDownloader",
      "title": "无水印下载抖音/TikTok 视频的小工具",
      "stars": "16,100",
      "today": "123",
      "body": "一个专门下载抖音、TikTok 视频和图片的工具，输入分享链接就能拿到无水印的原始文件，也支持批量采集主页作品、直播录制等进阶功能。官方提供了 Windows/Mac/Linux 的现成可执行文件，不用装 Python 环境也能直接用；批量采集、读取个人收藏这类功能需要提供浏览器 Cookie，单条视频下载不需要登录。今天新增了 123 颗星。",
      "explain": "「Cookie」是浏览器登录网站后保存的一小段身份信息，程序拿着它就能像你本人登录了一样去读你能看到的内容（比如你自己收藏的作品列表）；只下载别人分享给你的单条公开视频链接不需要这个。",
      "opinion": "纯粹是个顺手好玩的小工具，跟你做 AI 小工具、学 Python 关系不大，但想保存喜欢的视频不带水印时挺实用，用现成的可执行文件几分钟就能装好。不建议花时间研究它的源码或用来大批量采集别人的内容。📱 手机上：它的部分依赖库（curl_cffi、lxml 等）需要针对系统编译原生组件，在 Termux 上大概率装不上，建议直接放弃手机版，用电脑装现成的可执行文件更省心。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，手机 Termux 不建议装）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/JoeanAmier/TikTokDownloader/releases)（打不开就先开代理），下载最新版本里 Windows 对应的可执行文件压缩包" },
            { "text": "解压后双击其中的 exe 文件运行，跟着命令行菜单提示操作即可" },
            { "text": "选「批量下载/采集」之类的功能时，按提示粘贴分享链接或 Cookie；只下载单条公开视频不用填 Cookie" }
          ],
          "done": "程序运行起来能看到中文菜单，粘贴一个分享链接后在同目录生成了下载好的视频文件，就是装成功了。"
        }
      ],
      "url": "https://github.com/JoeanAmier/TikTokDownloader"
    },
    {
      "emoji": "💰",
      "repo": "TauricResearch/TradingAgents",
      "title": "多个 AI 角色分工协作模拟炒股决策的研究框架",
      "lang": "Python",
      "stars": "107,016",
      "week": "3,350",
      "body": "TradingAgents 是一个用多个大模型「角色」模拟真实交易团队协作的研究框架：基本面分析师、情绪分析师、技术分析师、交易员、风控几个角色各自分析后一起给出一个交易建议，跑在项目自带的「模拟交易所」里，默认不接真实券商账户，也不会真的下单买卖。支持接入 DeepSeek、OpenAI、Claude、通义千问、智谱 GLM 等多种大模型。项目本周新增了 3,350 颗星，官方明确说明这只是研究和学习用途，不构成投资建议。",
      "explain": "「多智能体（Multi-Agent）」是让好几个各自负责一部分工作的 AI 分工配合完成一件事，这里就是模拟一个小型交易团队里不同岗位的人怎么分头分析、最后汇总意见。「模拟交易所」是指所有的买卖都只是程序内部记账，不涉及真实的钱和真实的股票账户。",
      "opinion": "这个项目更适合当成「学习多智能体怎么协作分析问题」的例子来看代码、跑一跑感受结构，而不是真拿它去指导实际投资——它对市场的判断不一定准，代码也没经过金融监管或专业审计。**请务必注意：** 涉及自动交易的程序即使写得再像样，也可能因为代码 bug、数据错误或者市场极端情况亏光本金；千万不要把它接到真实券商账户、也不要在任何配置里填入真实的交易密钥或私钥，只当学习材料研究着玩即可。📱 手机上：它依赖 openai、anthropic 等 SDK，在 Termux 上会因为 jiter 装不上而跑不起来，只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，仅供学习研究，手机装不了）",
          "steps": [
            { "text": "先装好 Python 3.12 和 conda（比如用 Miniconda）" },
            { "text": "拉取代码（下载慢或失败就先开代理）：", "code": "git clone https://github.com/TauricResearch/TradingAgents.git" },
            { "text": "进入目录、新建虚拟环境：", "code": "cd TradingAgents\nconda create -n tradingagents python=3.12\nconda activate tradingagents" },
            { "text": "安装依赖：", "code": "pip install ." },
            { "text": "配置至少一个大模型的 API Key（比如 DeepSeek），在 PowerShell 里执行：", "code": "$env:DEEPSEEK_API_KEY=\"你的key\"" }
          ],
          "done": "按官方文档跑一次示例分析脚本，命令行里能看到几个分析师角色依次输出分析意见、最后汇总出一个模拟建议，就算跑通了；全程不会有真实交易发生。"
        }
      ],
      "url": "https://github.com/TauricResearch/TradingAgents"
    }
  ]
};
