DAILY_DATA["github/2026-09-11"] = {
  "date": "2026-09-11",
  "highlight": "AstrBot 能把「调 API 做工具」升级成挂在 QQ、微信、Telegram 上的聊天机器人，和你的方向最贴近，今天最值得在电脑上装一个试试。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "AstrBotDevs/AstrBot",
      "title": "把大模型接到 QQ、微信、Telegram 上做聊天机器人的框架",
      "lang": "Python",
      "stars": "40,348",
      "today": "61",
      "body": "这是一个开源的 AI Agent 开发框架，专门用来把大语言模型接进各种即时通讯平台（QQ、微信、Telegram、Discord 这类聊天软件），再配上插件系统扩展功能。不用从零写连接代码，配置好大模型的 API Key，就能跑起一个能聊天、能调用插件的机器人。",
      "explain": "「即时通讯平台」就是 QQ、微信、Telegram 这类聊天软件，它们大多开放了接口，让第三方程序接进去收发消息。「Agent 开发框架」可以理解成一套现成的脚手架：「收到消息 → 调用大模型 → 回复」这套流程已经帮你搭好，你只要在上面加自己的逻辑或插件。",
      "opinion": "你平时是自己手写单文件 HTML + JS 调 API，这个项目把「调大模型做工具」做成了完整的产品：收消息、调模型、回复、插件，一整套都有。值得装起来玩一玩，再翻翻它的插件接口是怎么设计的，对你写自己的 Agent 小工具有启发。📱 手机上：很可能装不上。它依赖 openai、anthropic、pydantic、faiss-cpu 等一批要编译 Rust/C++ 代码的库，你之前在 Termux 上装 jiter（openai 这个库要用到）就失败过，建议直接在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            {
              "text": "装 uv（一个 Python 包管理工具，AstrBot 官方推荐用它来装）。打开 PowerShell，运行：",
              "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"",
              "after": "装完关掉 PowerShell，再重新打开一个。如果电脑上已经有 Python，也可以改用 `pip install uv`。"
            },
            {
              "text": "安装 AstrBot（它要 Python 3.12，电脑上没有的话 uv 会自动下载）：",
              "code": "uv tool install astrbot --python 3.12"
            },
            {
              "text": "初始化，然后启动：",
              "code": "astrbot init\nastrbot run"
            },
            {
              "text": "浏览器打开 `http://localhost:6185`，用户名 `astrbot`。密码是第一次启动时随机生成的，在第 ③ 步窗口的日志里找。登录后先改密码。"
            }
          ],
          "done": "能登录管理面板。接 QQ、微信和配置大模型的方法看[官方文档](https://docs.astrbot.app/)。下载慢或失败，就先开代理再装。"
        }
      ],
      "url": "https://github.com/AstrBotDevs/AstrBot"
    },
    {
      "emoji": "🤖",
      "repo": "vercel-labs/skills",
      "title": "一条 npx 命令给 AI 编程助手装「技能包」",
      "lang": "TypeScript",
      "stars": "31,211",
      "today": "122",
      "body": "Vercel 出的命令行工具，用来管理「Agent Skills」：给 AI 编程助手（Claude Code、Codex 等，官方说支持 75 种以上）用的现成技能说明文件。用 `npx skills add 仓库地址` 就能把别人写好的技能包装进来，不用自己写。",
      "explain": "「npx」是 Node.js 自带的小工具，作用是「临时下载并运行一个别人写好的命令行程序，不用先手动安装」，用完即走，很适合试用小工具。「Skill（技能）」指的是一份教 AI 助手怎么完成某类任务的说明文档，装上之后 AI 助手就多会一项本事。",
      "opinion": "你现在就在用 Claude Code 写项目，这个工具可以直接给它装现成的技能（比如前端设计规范这类），也能照着别人写好的技能，学怎么给自己的项目写说明文件。工具很轻，试一下成本很低。📱 手机上：可以。你的 Termux 已经装了 Node.js（v26.4.0），不用再装别的。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            {
              "text": "先看看一个技能包里有哪些技能（以 Vercel 官方的技能包为例）：",
              "code": "https_proxy=http://127.0.0.1:7890 npx skills add vercel-labs/agent-skills --list"
            },
            {
              "text": "挑一个装给 Claude Code，比如 frontend-design（前端设计）：",
              "code": "https_proxy=http://127.0.0.1:7890 npx skills add vercel-labs/agent-skills --skill frontend-design -a claude-code",
              "after": "安装时会问你装在当前项目（`.claude/skills/`）还是全局（`~/.claude/skills/`）。"
            },
            {
              "text": "查看已经装了哪些；不想要了就删掉：",
              "code": "https_proxy=http://127.0.0.1:7890 npx skills list\nhttps_proxy=http://127.0.0.1:7890 npx skills remove frontend-design"
            }
          ],
          "intro": "不用安装，`npx` 会临时下载运行。技能包放在 GitHub 上，所以命令前面临时加上代理（只对这一条命令生效）。",
          "done": "`npx skills list` 里能看到它。重开 Claude Code 后生效。"
        }
      ],
      "url": "https://github.com/vercel-labs/skills"
    },
    {
      "emoji": "🛠",
      "repo": "immersive-translate/immersive-translate",
      "title": "网页中英对照翻译",
      "stars": "18,840",
      "today": "19",
      "body": "一个翻译工具，能把英文网页、PDF、字幕文件翻译成中英对照显示，还支持输入框翻译和鼠标悬停翻译。\n🔗 [官方安装说明](https://immersivetranslate.com/docs/installation/)",
      "explain": "「浏览器扩展」是装在 Edge、Chrome 这类浏览器里的小插件，能在你浏览网页时自动加功能，这里加的就是「把英文页面翻译成中英对照」。这个 GitHub 仓库主要放说明和问题反馈，扩展本身从各浏览器的扩展商店或官网下载。",
      "opinion": "你看 GitHub 项目说明、技术文档经常遇到英文，装一个能省下不少查词的时间，中英对照还能顺便学英文，是实打实的日常工具。免费版能用到什么程度、哪些功能要付费，官方文档没写清楚，以装好后看到的为准。📱 手机上：可以，官方有安卓 App（本身就是一个浏览器）。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（安卓）",
          "steps": [
            {
              "text": "手机浏览器打开官方安卓下载页，下载 App：[immersivetranslate.com/android](https://immersivetranslate.com/android/)"
            },
            {
              "text": "点开下载好的安装包。手机会提示「允许安装未知来源应用」，点允许。"
            },
            {
              "text": "打开这个 App，在里面访问英文网页，就能中英对照翻译。"
            }
          ]
        },
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "用 Edge 浏览器的，打开扩展商店页面点「获取」：[Edge 扩展商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)（国内一般能直接打开）。"
            },
            {
              "text": "用 Chrome 的：[Chrome 应用商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)要开代理才能打开。打不开就下载[离线安装包](https://download.immersivetranslate.com/latest/chrome-immersive-translate.zip)，解压后在地址栏打开 `chrome://extensions`，打开右上角的「开发者模式」，点「加载已解压的扩展程序」，选刚才解压出来的文件夹。"
            }
          ],
          "done": "浏览器右上角出现沉浸式翻译的图标，打开英文网页点一下，就会出现中英对照。"
        }
      ],
      "url": "https://github.com/immersive-translate/immersive-translate"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "title": "每月一期的「新手友好开源项目」推荐合集",
      "lang": "Python",
      "stars": "175,911",
      "today": "199",
      "body": "一个长期更新的开源项目，专门收集「有趣、入门难度低」的开源项目，用大白话介绍，每月 28 号出一期，本身就是给新手看的项目导览。",
      "explain": "这个项目不是一个能运行的程序，而是一份持续更新的「推荐清单」，性质有点像这个日报在做的事：把值得看的开源项目挑出来，用通俗的话讲一遍。",
      "opinion": "你走的是自学路线，找项目练手、找灵感是常事，这个可以当成长期的选题库，每月翻一期，比自己漫无目的地刷热门榜效率高。📱 手机上：不用装，手机浏览器直接看。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "手机浏览器打开官网：[hellogithub.com](https://hellogithub.com/)，可以按分类或按期数翻。"
            },
            {
              "text": "也可以在微信里搜公众号「HelloGitHub」。"
            },
            {
              "text": "想看原文的话，GitHub 仓库的 `content` 文件夹里是历期内容，比如[第 125 期](https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub125.md)。"
            }
          ],
          "done": "每月 28 号更新，可以设个每月提醒去翻一期。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "title": "数据存在自己设备上的开源记账、预算软件",
      "lang": "JavaScript/TypeScript",
      "stars": "28,700",
      "body": "一个开源的个人记账、做预算的软件，定位是 Mint、YNAB（美国两款知名的付费记账软件）的开源替代品，主打「本地优先」，数据存在你自己的设备上。",
      "explain": "「本地优先」的意思是，你的账单、余额这些数据默认存在你自己的电脑或手机里，而不是必须先传到某家公司的服务器上才能用。隐私更让人放心，也不怕哪天对方公司倒闭、你的账本跟着没了。",
      "opinion": "你在学理财入门，目标是管好自己的钱，这类只记账、做预算、不碰投资的工具很合适，风险很低，坚持用一两个月就能看清钱都花在哪儿了。建议先在电脑版上把账记起来，用习惯了再考虑同步到手机。📱 手机上：没有独立的手机 App。想在手机上用，得先在电脑或服务器上跑它的服务端，再用手机浏览器访问，比较折腾，暂时先别弄。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（最省事）",
          "steps": [
            {
              "text": "打开发布页：[github.com/actualbudget/actual/releases](https://github.com/actualbudget/actual/releases)"
            },
            {
              "text": "在最新版本下面的 Assets 里，下载带 windows 字样的安装文件。"
            },
            {
              "text": "双击安装，打开后按提示新建一个预算文件，就能开始记账。桌面版的数据只存在这台电脑上。"
            }
          ],
          "done": "能打开软件、新建预算、记下第一笔账。其他装法（Docker、付费托管）见[官方安装文档](https://actualbudget.org/docs/install/)。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "🎨",
      "repo": "bilawalsidhu/gods-eye-view",
      "title": "用真实数据的「间谍卫星」3D 地球模拟器",
      "lang": "JavaScript",
      "stars": "24,645",
      "today": "1,762",
      "body": "一个跑在浏览器里的 3D 地球可视化项目，模拟卫星视角看地球，用的是真实的公开地理数据。**目前没有在线版**（作者说托管版还在准备中），要自己下载到本地运行。不填任何 API key 也能启动；想要更高清的 3D 地图等功能，可以在软件里的「POWER UP」面板填各家服务的 key。",
      "explain": "项目里说的「开源空间情报」，说白了就是把卫星图像、地图这类公开地理数据整理、可视化出来给人看，跟真的间谍卫星没关系。Node.js 是让 JavaScript 脱离浏览器、直接在电脑上运行的环境，这个项目靠它在本机启动一个网页。",
      "opinion": "拿来看个乐子、涨涨见识。它证明了光靠前端 JavaScript 就能做出这种级别的 3D 效果，和你写单文件 HTML 是同一条技术路线，有空可以翻翻源码。不过它是个完整的工程项目（要装一堆依赖），比你平时的单文件复杂得多。📱 手机上：不保证能跑。你的 Termux 已有 Node.js v26.4.0，满足它要求的版本，可以试；但依赖里如果有要编译的原生模块就会装失败，而且 3D 地球在手机上会很吃性能。电脑上最稳。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "下载代码。没装过 git 的，Termux 里先运行 `pkg install git`。GitHub 要走代理；电脑上把命令前面的 `https_proxy=…` 那段去掉，需要代理就在代理软件里开系统代理。",
              "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/bilawalsidhu/gods-eye-view.git\ncd gods-eye-view"
            },
            {
              "text": "安装依赖：",
              "code": "https_proxy=http://127.0.0.1:7890 npm ci"
            },
            {
              "text": "让它自检一下环境，缺什么会告诉你：",
              "code": "npm run doctor"
            },
            {
              "text": "启动：",
              "code": "npm run dev"
            },
            {
              "text": "浏览器打开 `http://localhost:4173`"
            }
          ],
          "done": "浏览器里出现 3D 地球。如果手机上第 ② 步报一堆编译错误，说明手机装不了，换电脑。"
        }
      ],
      "url": "https://github.com/bilawalsidhu/gods-eye-view"
    }
  ]
};
