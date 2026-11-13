DAILY_DATA["github/2026-11-13"] = {
  "date": "2026-11-13",
  "highlight": "今天最值得动手试的是 `AstrBot`——把对接微信/QQ/Telegram 这些平台的脏活全写好了，自己只用在网页后台填个大模型 key，就能搭出一个能聊天、能插功能的 AI 机器人。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "AstrBotDevs/AstrBot",
      "deploy": ["pc", "cloud"],
      "title": "一个人就能搭的 AI 聊天机器人平台",
      "lang": "Python",
      "stars": "46,786",
      "today": "82",
      "body": "这是一个开源的『一体化』Agent 聊天机器人平台，能接入 QQ、微信公众号、企业微信、Telegram、Discord、飞书、钉钉等十几个即时通讯平台，背后换上 OpenAI、Anthropic、Gemini、DeepSeek 等任意一家大模型都行。装好后有网页管理后台，插件、人设、要接哪个平台全在网页上点着配置，不用改配置文件。",
      "explain": "「Agent 聊天机器人」是说它不只会聊天，还能按配置调用插件、执行任务；它本身不自带哪个大模型，豆包、DeepSeek、OpenAI 这些都只是外部接入的选项，换哪个全看自己配置。`WebUI` 就是打开浏览器就能用的管理后台，不用改配置文件，鼠标点点就能设置。",
      "opinion": "如果你想做一个能直接拉进群里聊天、还能插各种功能的 AI 机器人，这个项目把对接各平台的脏活都写好了，自己只用在后台填上大模型 key 就能跑起来，比从头写消息收发逻辑省事很多，适合拿来练手搭个真正有人用的 Agent。它底层依赖的 Python 库需要编译原生模块，建议先在电脑上装，稳定了再搬到云服务器上 24 小时跑。📱 手机上：大概率装不上，背后用了 `openai`、`anthropic` 这两个 Python 库，它们都要装一个叫 jiter 的原生扩展，Termux 编译不过。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（用 uv）",
          "intro": "这条路线不用 Docker，装好 uv 之后三条命令就能跑起来。",
          "steps": [
            { "text": "如果还没装 uv，先在 PowerShell 里装：", "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"" },
            { "text": "安装并初始化 AstrBot（这条命令会装好程序本体）：", "code": "uv tool install astrbot --python 3.12\nastrbot init", "after": "`astrbot init` 只用在第一次执行，用来生成配置和数据目录。" },
            { "text": "启动：", "code": "astrbot run", "after": "装依赖这步可能要等几分钟，中途别关窗口。" }
          ],
          "done": "终端里打印出管理面板的网址（形如 http://localhost:6185），浏览器打开能看到登录页，就算装好了；用户名通常是 astrbot，密码看启动日志里打印的随机密码，登进去就能在网页上配置要接哪个平台、哪个大模型的 key。"
        },
        {
          "title": "安装步骤 · ☁️ 云服务器（Docker）",
          "intro": "有云服务器的话，用 Docker 跑它更省心，可以挂着 24 小时当机器人用。",
          "steps": [
            { "text": "装好 Docker 后，拉取并启动容器：", "code": "sudo docker run -itd -p 6185:6185 -p 6199:6199 -v $PWD/data:/AstrBot/data -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --name astrbot soulter/astrbot:latest", "after": "国内服务器拉不动镜像的话，把命令里的 `soulter/astrbot:latest` 换成 `m.daocloud.io/docker.io/soulter/astrbot:latest` 再跑一次。" },
            { "text": "浏览器打开 `http://你的服务器IP:6185`，用户名 astrbot，密码看容器日志：", "code": "docker logs astrbot" }
          ],
          "done": "能打开登录页，用日志里的随机密码登进去，就算装好了；之后在网页里配置聊天平台和大模型 key。"
        }
      ],
      "url": "https://github.com/AstrBotDevs/AstrBot"
    },
    {
      "emoji": "🤖",
      "repo": "QwenLM/qwen-code",
      "deploy": ["phone", "pc"],
      "title": "开源终端 AI 编程助手，可以拿来对比 Claude Code",
      "lang": "TypeScript",
      "stars": "29,808",
      "today": "151",
      "body": "这是阿里通义团队做的终端 AI 编程代理，在项目文件夹里敲一个命令进去，就能让它帮你读代码、改代码、跑命令，交互方式和 Claude Code 很像。默认可以用官方 Qwen 套餐账号登录，也能换成别的大模型服务商的 API key，运行时随时切换。",
      "explain": "「终端 AI 编程代理」就是一个在命令行里跑的 AI 助手，能直接读写你项目里的文件、帮你跑测试命令，Claude Code 做的就是这件事。它是开源的，意思是代码全公开，别人能看、能改、能照着抄思路自己做一个类似的工具。",
      "opinion": "拿它跟你平时用的 Claude Code 对比着玩一玩，能看看不同团队对「AI 编程代理」这件事的设计思路有什么不一样；能不能直接填豆包、DeepSeek 的接口，首页没写清楚具体字段名，得进去跟着它的认证文档走一遍才知道。不是非换不可，花十分钟装上试试就行。📱 手机上：能装，它是纯 Node.js 命令行工具，没有要编译的原生依赖，Termux 上装 Node 包这条路本来就走得通。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "全局安装（需要 Node.js 22 以上版本，先用 node -v 确认一下）：", "code": "npm install -g @qwen-code/qwen-code@latest" },
            { "text": "进入你想让它帮你写代码的项目文件夹，输入命令进入交互界面：", "code": "cd 你的项目目录\nqwen", "after": "第一次进去后在里面输入 `/auth`，照提示选登录方式：用官方 Qwen 套餐账号登录，或者换成别的大模型服务商的 API key。能不能直接填豆包/DeepSeek 的接口地址，这步官方文档里有具体说明，首页没写全，建议跟着提示走一遍。" }
          ],
          "done": "能正常跟它对话、让它读写项目里的文件，就算装好了。"
        }
      ],
      "url": "https://github.com/QwenLM/qwen-code"
    },
    {
      "emoji": "🛠",
      "repo": "GoogleChrome/modern-web-guidance-src",
      "deploy": ["phone", "pc"],
      "title": "让 AI 编程助手少写过时的网页代码",
      "lang": "TypeScript",
      "stars": "2,922",
      "today": "739",
      "body": "这是 Google Chrome 团队出的一套给 AI 编程助手用的「技能」，装上之后，Claude Code 这类工具写 HTML/CSS/JS 时会优先用浏览器已经支持的新写法，而不是老掉牙的老方案，覆盖排版、表单、无障碍、性能、安全等 250 多个网页技术点。",
      "explain": "这里的「技能」就是给 AI 编程助手塞一本写代码的参考手册，让它查着写，不用你自己盯着它别用过时写法。比如原生就有的 `<dialog>` 弹窗标签能直接用，就不用再让 AI 自己写一套弹窗组件。",
      "opinion": "他的项目基本全是纯 HTML + 原生 JS，这个技能包正好能让 Claude Code 按最新网页标准写代码，少踩点过时写法的坑，装上基本没什么成本，值得试一下。📱 手机上：能装，就是跑一条 `npx` 命令，没有要编译的原生依赖，Termux 上能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "在项目文件夹里跑安装向导：", "code": "npx modern-web-guidance@latest install", "after": "会弹出一个交互式向导，照着问题选就行，具体支持哪些 AI 编程工具官方页面没写全，跟着向导走一遍就知道。" },
            { "text": "不想先装的话，也可以直接查一个问题试试效果：", "code": "npx modern-web-guidance@latest search \"animate a dialog modal backdrop\"" }
          ],
          "done": "装完之后在 Claude Code 里问网页相关的问题，回答里会引用这套最新的网页写法，而不是老写法，就算生效了。"
        }
      ],
      "url": "https://github.com/GoogleChrome/modern-web-guidance-src"
    },
    {
      "emoji": "🛠",
      "repo": "JoeanAmier/TikTokDownloader",
      "deploy": ["pc"],
      "title": "下载抖音/TikTok 作品的命令行工具",
      "stars": "17,465",
      "today": "10",
      "body": "这是一个能批量下载抖音、TikTok 视频、图集、直播流地址的工具，也能抓评论、搜索结果这类数据。Windows/Mac 用户可以直接下载作者编译好的程序，不用自己装 Python 环境。作者在 README 里说清楚了：当前反爬加密算法已经没人维护，平台更新后部分下载功能可能会失效。",
      "explain": "「加密参数」是抖音为了防止被随便爬取下载，给请求加的一层只有官方 App 才知道怎么算的验证码，下载工具要自己算出这个验证码才能正常拿到视频。README 说这部分没人维护了，就是说以后平台一改规则，这工具可能就会跟着失灵。",
      "opinion": "想保存自己喜欢的抖音/TikTok 视频、图集时能用，但加密算法这块没人维护是明说的，能不能正常工作得自己先试一下，别抱太大期望。先用编译好的程序下一条普通视频看看能不能成，能成再往后用。📱 手机上：不保证，它依赖的几个网络请求库在 Termux 上不一定能装成功，电脑上直接用编译好的程序更省心。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，用编译好的程序）",
          "steps": [
            { "text": "打开 https://github.com/JoeanAmier/TikTokDownloader/releases ，下载最新版里适用 Windows 10 及以上的压缩包", "after": "打不开就先开代理。" },
            { "text": "解压后双击里面的 `main` 程序运行" },
            { "text": "照程序提示把 Cookie 粘进去：在浏览器登录抖音网页版后，从浏览器开发者工具的网络请求里复制 Cookie；只有 Cookie 失效了才需要重新弄一次，不是每次都要" },
            { "text": "在程序菜单里选下载单个视频试一下" }
          ],
          "done": "能正常下载出一个视频文件，没报错或卡死，就算用起来了；如果一直提示加密参数错误、下载不了，大概率是前面说的『算法没人维护』踩了坑，等作者更新或者换别的下载工具。"
        }
      ],
      "url": "https://github.com/JoeanAmier/TikTokDownloader"
    },
    {
      "emoji": "💰",
      "repo": "wealthfolio/wealthfolio",
      "deploy": ["phone", "pc"],
      "title": "本地记账、不用联网同步的理财记录软件",
      "stars": "9.4k",
      "body": "这是一个开源的个人理财记账软件：手动记交易、算净资产、做预算、模拟不同投资配置下的结果，数据都存在自己设备本地，不用注册账号、不用联网同步。电脑端有 Windows/Mac/Linux 安装包，手机上有 iOS App Store 和 Android Google Play 的正式 App。",
      "explain": "「净资产」就是把你名下所有东西（存款、投资）加起来，再减掉欠的钱（贷款），剩下的数。「本地优先」是说数据存在你自己的手机或电脑里，不是存在别人的服务器上，不用担心账号被盯着，也不怕服务商哪天倒闭数据就没了。",
      "opinion": "适合刚开始学理财、想养成记账习惯的人用：核心的手动记账和预算功能完全免费，不用绑券商账号，数据也不用交给别人，比在备忘录里瞎记要系统不少。它还有自动同步券商账户的付费功能，不碰那部分完全没问题，先用免费的手动记账练手就够。📱 手机上：能装，Android 在 Google Play 就有官方 App，直接在应用商店搜装，不用走 Termux。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（应用商店直装）",
          "steps": [
            { "text": "Android 打开 Google Play 商店链接安装：https://play.google.com/store/apps/details?id=com.teymz.wealthfolio" },
            { "text": "iPhone 打开 App Store 商店链接安装：https://apps.apple.com/us/app/wealthfolio-private-finance/id6732888445" }
          ],
          "done": "打开 App 看到记账/资产的主界面，不需要注册账号，就算装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 https://github.com/wealthfolio/wealthfolio/releases 下载 Windows 安装包", "after": "打不开就先开代理。" },
            { "text": "双击安装包装好，打开软件" }
          ],
          "done": "打开软件看到记账/资产的主界面，不需要注册账号登录，就算装好了。"
        }
      ],
      "url": "https://github.com/wealthfolio/wealthfolio"
    },
    {
      "emoji": "📚",
      "repo": "1c7/chinese-independent-developer",
      "deploy": ["read"],
      "title": "看看中国独立开发者都在做什么项目",
      "stars": "62,082",
      "today": "19",
      "body": "这是一个清单仓库，收集了一批中国独立开发者在做的项目，大家互相分享自己在搞什么、怎么从一个点子做到有人用。",
      "explain": "「独立开发者」大白话就是一个人（或很小的团队）自己做产品、不靠公司养着的意思；清单里常能看到有人同时在做好几个小项目，靠广告、打赏或者订阅费维持。",
      "opinion": "自己在做好几个单人小项目的话，刷一遍这个清单能看看别人是怎么选题、怎么做推广、怎么把一个点子做成有人用的东西，比自己瞎琢磨多点参照。不用装任何东西，闲着的时候翻一翻就行，遇到眼熟的方向点进去看看别人具体怎么做的更有用。📱 手机上：不用装，网页直接看，手机浏览器打开一样能读。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开仓库页面看 README 里的项目列表：https://github.com/1c7/chinese-independent-developer" }
          ],
          "done": "能打开页面看到一条条项目介绍，就算能看了（其实不用装）。"
        }
      ],
      "url": "https://github.com/1c7/chinese-independent-developer"
    }
  ]
};
