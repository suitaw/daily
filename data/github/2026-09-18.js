DAILY_DATA["github/2026-09-18"] = {
  "date": "2026-09-18",
  "highlight": "今天最值得先试的是 `LibreChat`——用 Railway 一键部署到云端，手机电脑打开网页就能在同一个界面里切换 DeepSeek 等好几个大模型聊天，不用在自己设备上装任何东西。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Tencent/BrowserSkill",
      "title": "让 AI 代理直接操作你电脑上已登录的浏览器",
      "lang": "TypeScript",
      "stars": "4,114",
      "today": "1,302",
      "body": "BrowserSkill 是一个连接 AI 编程代理（Claude Code、Cursor 等）和浏览器的桥接工具，由命令行工具和浏览器扩展两部分组成。装好之后，AI 代理能打开一个独立的代理窗口操作你电脑上已经登录的 Chrome/Edge，比如帮你查一个需要登录才能看的网页、把表格数据导出来，同时不会打断你自己正在用的浏览器窗口。核心用 Rust 写，扩展部分是 TypeScript。今天在 GitHub 热门榜上一天涨了 1,302 颗星，是刚火起来的新项目。",
      "explain": "这里说的「AI 代理操作浏览器」是让 AI 像人一样点鼠标、填表单、读网页内容，而不是走网站官方接口；「已登录浏览器」意思是它直接借用你电脑上 Chrome 里已经登录的账号状态（cookie），不用你把账号密码告诉 AI 或者脚本。",
      "opinion": "你平时做 AI 小工具经常要处理一些没有公开接口、得登录才能看的网页（比如查个人账单、后台数据），这个工具能让 Claude Code 直接借用你电脑上已登录的浏览器去操作，不用自己写登录逻辑。不过它是刚火起来的新项目，让 AI 直接控制你已登录账号的窗口这件事本身有风险，建议先拿不涉及资金、不重要的网页练手，别用它去操作银行、支付这类页面。📱 手机上：命令行工具官方装机脚本支持 Linux ARM64，理论上 Termux 能装，但配套的浏览器扩展只能装在电脑版 Chrome/Edge 里，手机版 Chrome 不支持装这种扩展，所以整个工具实际上还是得在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "安装 BrowserSkill 命令行工具（PowerShell 里执行）：", "code": "irm https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.ps1 | iex" },
            { "text": "打开 [Chrome 网上应用店](https://chromewebstore.google.com/detail/hhcmgoofomhgciiibhipgmgkgnoenaoi) 装浏览器扩展（用 Edge 就去 [Edge 加载项商店](https://microsoftedge.microsoft.com/addons/detail/browserskill/emacgiaaaiojkkpkddmmdfhmokgmnikg)）" },
            { "text": "给 Claude Code 装上 BrowserSkill 技能，按提示按空格选中 Claude Code、回车确认：", "code": "bsk install-skill" },
            { "text": "检查连接是否正常：", "code": "bsk doctor" }
          ],
          "done": "`bsk doctor` 没有报错，浏览器工具栏里的 BrowserSkill 图标显示已连接；在 Claude Code 里问它能不能看到浏览器技能，回答「能」就是装成功了。"
        }
      ],
      "url": "https://github.com/Tencent/BrowserSkill"
    },
    {
      "emoji": "🤖",
      "repo": "cline/cline",
      "title": "VS Code 里的自主编程 AI，能接 DeepSeek 省钱",
      "lang": "TypeScript",
      "stars": "68,551",
      "today": "380",
      "body": "Cline 是一个开源的自主编程 AI 代理，装成 VS Code 插件后能跨文件改代码、执行终端命令、自己规划任务步骤，用法和 Claude Code 类似。它支持 Anthropic Claude、OpenAI、Google Gemini 等官方模型，也能接任意「OpenAI 兼容」的自定义接口，包括 DeepSeek 这类国产模型。除了 VS Code 插件，还提供命令行版本和 JetBrains 插件。",
      "explain": "「OpenAI 兼容接口」意思是这家服务商提供的调用方式跟 OpenAI 官方长得一样（同样的请求格式），所以支持 OpenAI 的工具只要改个网址（Base URL）和 API Key，就能接上别家模型，DeepSeek 官方就提供这种接口。",
      "opinion": "平时用 Claude Code 写单文件小工具，如果想换成便宜很多的 DeepSeek 试试效果或者省钱，Cline 是个现成选择——同样是自主改代码、跑命令，只是换到 VS Code 里，配置里把供应商改成「OpenAI Compatible」、填上 DeepSeek 的网址和 Key 就行，不用重新学一套用法。适合拿来对比一下 DeepSeek 和 Claude 在同一个任务上的实际效果和花费差多少。📱 手机上：VS Code 插件版本手机用不了；它也提供命令行版（`npm i -g cline`），理论上 Termux 装了 Node 就能装，但没验证过在 Termux 上是否完整可用，不保证。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 VS Code，在左侧扩展面板搜索并安装扩展（发布者 saoudrizwan，扩展名 Cline）：", "code": "saoudrizwan.claude-dev" },
            { "text": "点击 VS Code 左侧新出现的 Cline 图标打开面板，再点右上角的齿轮图标进设置" },
            { "text": "「API Provider」选 `OpenAI Compatible`，依次填入：", "code": "Base URL: https://api.deepseek.com\nAPI Key: 你的 DeepSeek API Key\nModel ID: deepseek-chat", "after": "Base URL 后面不要加 /v1 或其他路径，加了会报 404" }
          ],
          "done": "设置保存后，在 Cline 输入框里随便发一句话（比如「帮我在当前项目建一个 test.txt」），它能正常回复并开始执行任务，就是配置成功了。"
        }
      ],
      "url": "https://github.com/cline/cline"
    },
    {
      "emoji": "🛠",
      "repo": "danny-avila/LibreChat",
      "title": "一个网页整合 DeepSeek、豆包等大模型对话",
      "lang": "TypeScript",
      "stars": "44,235",
      "week": "1,421",
      "body": "LibreChat 是一个开源、可以自己部署的网页版 AI 聊天界面，效果类似 ChatGPT 网页版，但能在同一个界面里同时接 OpenAI、Claude、Gemini，以及任何「OpenAI 兼容」的自定义接口——包括 DeepSeek 这类国产模型。自带多用户登录、对话搜索、文件上传、代码解释器等功能，支持用 Railway、Zeabur 等平台一键云端部署，不用自己维护服务器。",
      "explain": "「一键云端部署」是指点一个按钮，把这个项目整个搭到别人的云服务器上跑起来，你不用自己买服务器、装环境，代价是要在对应平台（比如 Railway）注册账号，免费额度用完之后可能要付费。",
      "opinion": "如果你想要一个「网页版 ChatGPT」，能随时切换 DeepSeek、豆包（只要它提供 OpenAI 兼容接口）等好几个模型对比效果，又不想给每个平台单独开一个网站，这个能把它们放进同一个聊天界面，手机电脑用浏览器打开就行，不用装 App。用 Railway 一键部署最省事，但要注意 Railway 是国外平台，可能需要绑卡，免费额度有限，长期用大概率要花钱；对话内容存在你自己这个部署实例里，不会被共享。📱 手机上：部署这一步在云端做，手机不用装任何东西，部署好之后手机浏览器直接打开网址就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑通用（云端一键部署，不用装环境）",
          "intro": "用 Railway 一键部署，手机电脑都能操作，跟着做就行。",
          "steps": [
            { "text": "打开 [LibreChat 官方 Railway 部署页](https://railway.com/deploy/librechat-official?referralCode=HI9hWz)，用 GitHub 账号登录 Railway，按提示确认部署", "after": "Railway 可能要求绑定信用卡或消耗免费额度，不保证一直免费，超额会提示付费" },
            { "text": "部署完成后，进入 Railway 项目的 Variables（环境变量）页面，添加接入 DeepSeek 需要的变量：", "code": "OPENAI_API_KEY=你的DeepSeek API Key\nOPENAI_REVERSE_PROXY=https://api.deepseek.com/v1\nOPENAI_MODELS=deepseek-chat", "after": "保存后 Railway 会自动重新部署一次" },
            { "text": "打开 Railway 分配的网址，点「注册」用邮箱创建一个账号" },
            { "text": "自己注册好账号后，回 Variables 页面把注册功能关掉，别人拿到网址也进不来：", "code": "ALLOW_REGISTRATION=false" }
          ],
          "done": "网页能打开，注册登录后在模型列表里能看到 DeepSeek，发一句话能正常回复，就算装好了。"
        }
      ],
      "url": "https://github.com/danny-avila/LibreChat"
    },
    {
      "emoji": "🛠",
      "repo": "decolua/9router",
      "title": "帮 AI 编程工具省 token，还能白嫖免费模型",
      "lang": "JavaScript",
      "stars": "29,173",
      "today": "871",
      "body": "9Router 是一个跑在你自己电脑上的「AI 模型路由器」，能把 Claude Code、Cursor、Cline 这些编程工具统一接到 40 多家模型供应商，通过精简请求内容帮你省 20%~40% 的 token 消耗，还能按「订阅优先→便宜模型→免费模型」的顺序自动降级，尽量不中断使用。支持接 DeepSeek 等供应商，也能连一些免费额度（比如 Kiro AI）。今天在 GitHub 热门榜上一天涨了 871 颗星。",
      "explain": "「Token」是大模型按用量收费的计价单位，聊得越多、发的文件越大，消耗的 token 越多；这个工具会在转发你的请求前先做一些精简（比如去掉重复的上下文），从而少花钱。「路由器」在这里不是网络硬件，是指它站在你和各家大模型 API 中间，按规则决定把请求转发给哪一家。",
      "opinion": "如果你在用 Claude Code 或 Cline 写东西时会担心一个月 token 花费，这个工具能自动切到便宜甚至免费的模型撑过大部分场景，只在真需要的时候才用贵模型，理论上能省下一部分钱。它本身是本地跑的一个小服务，配置要花点时间（得去 Dashboard 里挨个加供应商的 Key），值得先跑起来试试到底省了多少。📱 手机上：它是 Node.js 写的 npm 包，Termux 装的 Node v26 自带 SQLite，官方说依赖会优先用这个内置版本，理论上能装；但如果环境判断走了 better-sqlite3 这个需要编译的库，就可能装不上，不保证，装不上就换电脑跑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用",
          "steps": [
            { "text": "全局安装（走 npm 官方源，不用加代理）：", "code": "npm install -g 9router" },
            { "text": "启动，会自动打开浏览器面板：", "code": "9router", "after": "没自动打开就手动访问 http://localhost:20128" },
            { "text": "用默认密码登录（登录后记得在设置里改掉）：", "code": "123456" },
            { "text": "在 Providers 里加一个供应商，比如选 DeepSeek，填入你的 API Key" },
            { "text": "把 Claude Code 接过来，编辑 `~/.claude/config.json`：", "code": "{\n  \"anthropic_api_base\": \"http://localhost:20128/v1\",\n  \"anthropic_api_key\": \"面板里生成的 9router Key\"\n}" }
          ],
          "done": "浏览器面板能打开、供应商显示已连接；改完 Claude Code 配置后正常发消息有回复，就是接通了。"
        }
      ],
      "url": "https://github.com/decolua/9router"
    },
    {
      "emoji": "📚",
      "repo": "datawhalechina/thorough-pytorch",
      "title": "中文 PyTorch 教程，能衔接你正在学的 Python",
      "stars": "3.8k",
      "body": "这是 Datawhale 团队出的中文 PyTorch 教程，从环境搭建、张量运算讲到怎么搭模型、怎么训练，一共十章，配套 B 站视频。教程本身是 Markdown 文档，托管成了可以直接在浏览器里翻页阅读的网站，不用装 Python 环境也能看。",
      "explain": "PyTorch 是目前最主流的深度学习框架之一（一个 Python 库），很多 AI 项目的底层代码都是拿它写的；如果你以后想从「调 API」再往「自己训练/微调模型」走一步，迟早会碰到它。",
      "opinion": "你现在 Python 还在入门阶段，这套教程不用今天就啃，先收藏，等 Python 基础稳一点、想搞懂大模型底层怎么跑起来的时候回来看，中文写的，比啃官方英文文档友好不少。纯看教程不涉及配环境，想跟着敲代码练习才需要自己装 Python 和 PyTorch。📱 手机上：教程是网页，手机浏览器直接能看，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "手机或电脑浏览器直接打开在线阅读地址：[thorough-pytorch 在线阅读](https://datawhalechina.github.io/thorough-pytorch/)" }
          ],
          "done": "网页能正常翻到目录和正文，就能看了。"
        }
      ],
      "url": "https://github.com/datawhalechina/thorough-pytorch"
    },
    {
      "emoji": "🎨",
      "repo": "jamiepine/voicebox",
      "title": "语音输入到任意软件的听写神器，还能克隆声音",
      "lang": "TypeScript",
      "stars": "54,843",
      "today": "667",
      "body": "Voicebox 是一个开源的本地语音工具箱，核心功能是「全局热键听写」——在电脑上按住一个快捷键说话、松开，语音就自动转成文字打进你当前正在用的任何输入框（聊天软件、Word、浏览器都行），不用打字。另外还带声音克隆、文字转语音、7 种 TTS 引擎和 Whisper 语音识别，完全本地跑，不用联网 API Key。",
      "explain": "「听写」就是说话直接变文字，类似手机输入法的语音输入，但这个是电脑全局都能用，不挑软件；「本地跑」意思是识别和生成都在你自己电脑上算，不用把声音传到网上的服务器。",
      "opinion": "如果你打字慢或者想省点打字时间，这个「按键说话、松开自动打字」的听写功能日常能派上用场，装好基本不用配置就能用；声音克隆更偏好玩，拿来给自己的小工具配个语音提示音也行。没有显卡也能跑，只是比有显卡慢一些。📱 手机上：只有电脑版（Windows/macOS 提供安装包，Linux 要自己编译），没有手机版，装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "去 [Voicebox Releases](https://github.com/jamiepine/voicebox/releases) 页面下载最新的 Windows 安装包（约 517MB，文件名类似 `Voicebox_x64-setup.exe`）" },
            { "text": "双击下载好的 .exe 按提示安装" },
            { "text": "首次打开可能要下载语音模型，具体多大、多久看软件里的提示，不保证很快" }
          ],
          "done": "打开软件后，按住默认快捷键（右 Ctrl + 右 Shift）说一句话再松开，光标所在的输入框里出现刚才说的文字，就是装成功了。"
        }
      ],
      "url": "https://github.com/jamiepine/voicebox"
    }
  ]
};
