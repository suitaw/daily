DAILY_DATA["github/2026-11-07"] = {
  "date": "2026-11-07",
  "highlight": "今日看点：给 Claude Code 装一个「审美把关」技能 hallmark，写单文件 HTML 小工具时能自动帮你挑出一眼就能看出是「AI 做的」设计痕迹，装的成本很低（只要 Node.js），今天最值得先试。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "Nutlope/hallmark",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装的「审美把关」设计技能",
      "lang": "CSS",
      "stars": "49,626",
      "week": "6,900",
      "body": "Hallmark 是 Together AI 做的一个设计技能（skill），给 Claude Code、Cursor、Codex、OpenCode 这几个编程工具用，目标是让 AI 生成的网页不要一眼就能看出是「AI 做的」。它内置了大约 50 种设计风格主题可以挑，还能用浏览器工具自动检查页面里常见的 AI 式设计痕迹（比如滥用紫色渐变、千篇一律的卡片布局）。本周在 GitHub 趋势榜新增了 6,900 颗星，总星数 49,626。",
      "explain": "AI 做网页容易有种一眼能看出来的「AI 味」，比如滥用紫色渐变、千篇一律的卡片布局。Hallmark 相当于给 AI 一本设计参考手册和一套自查清单：写页面之前先定个风格，写完还能自动扫一遍，挑出像 AI 做的痕迹。",
      "opinion": "自己做的单文件 HTML 小工具页面好不好看全靠自己盯着，这个技能能在 Claude Code 生成页面前后多一道审美把关，不用从头学设计理论；装好后在提示词里直接说「用 hallmark」或让它自动触发就行，花的时间很少，值得先试。📱 手机上：能装——只需要 Node.js，Termux 里跑 Claude Code 一样能用；只是浏览器截图检查那部分还要装 Chrome，手机上大概率用不了，不影响基本功能。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "确认已装 Node.js 18 及以上版本（没装就用：）", "code": "pkg install nodejs" },
            { "text": "安装 hallmark 技能到所有项目：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add nutlope/hallmark -g", "after": "也可以在后面加 `--agent claude-code` 只装给 Claude Code 用。" },
            { "text": "在 Claude Code 里直接说「用 hallmark 做一个……的页面」来触发" }
          ],
          "done": "Claude Code 回复里出现设计风格建议、或者让你先选一种「材质」主题，就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "确认已装 Node.js 18 及以上版本（没装去 nodejs.org 下载）" },
            { "text": "安装 hallmark 技能到所有项目：", "code": "npx skills add nutlope/hallmark -g", "after": "下载慢或失败就先开代理再试。" },
            { "text": "在 Claude Code / Cursor / Codex 里输入 `/hallmark 你的需求`，或直接说「use hallmark」" }
          ],
          "done": "回复里出现设计风格建议、或者让你先选一种「材质」主题，就是装好了。"
        }
      ],
      "url": "https://github.com/Nutlope/hallmark"
    },
    {
      "emoji": "🤖",
      "repo": "langbot-app/LangBot",
      "deploy": ["pc", "cloud"],
      "title": "接入国内大模型做聊天机器人的开源平台",
      "lang": "Python",
      "stars": "18,769",
      "today": "27",
      "body": "LangBot 是一个开源的 AI 聊天机器人搭建平台，能把 DeepSeek、Moonshot（Kimi）、智谱 AI、硅基流动等多家大模型接入微信、QQ、Discord、Telegram 等聊天工具，支持多轮对话、工具调用、知识库检索和插件扩展。最简单的部署方式是装好 uv 后运行一条命令就能起服务，也支持 Docker、宝塔面板、Kubernetes 等更正式的部署方式。今天在 GitHub 趋势榜新增 27 颗星，总星数 18,769。",
      "explain": "「工具调用」是让 AI 不只会聊天，还能去调用查天气、算数字这类具体功能；「知识库检索（RAG）」是让 AI 先查你准备好的文档资料再回答，而不是凭记忆瞎编。",
      "opinion": "如果想练手做一个属于自己的聊天机器人、接到微信或 QQ 上用，这个平台把接模型、管对话、挂插件这些基础活都包好了，比自己从零写省不少事；它明确支持 DeepSeek 等国内模型服务商，具体是否支持豆包官方页面没直接写清楚，用之前自己确认一下。📱 手机上：不保证——它依赖的模型调用 SDK 大概率会踩到 Termux 装不上原生编译扩展的坑，建议先放电脑或云服务器上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器",
          "intro": "官方最简单的方式是用 uv 一行启动。",
          "steps": [
            { "text": "装 uv（Python 包管理器），macOS/Linux 用：", "code": "curl -LsSf https://astral.sh/uv/install.sh | sh" },
            { "text": "Windows 用 PowerShell：", "code": "powershell -c \"irm https://astral.sh/uv/install.ps1 | iex\"" },
            { "text": "启动 LangBot（会自动下载安装）：", "code": "uvx langbot" },
            { "text": "浏览器打开 http://localhost:5300（云服务器就换成服务器的 IP，记得在防火墙/安全组放开 5300 端口），跟着初始化向导配置模型 key" }
          ],
          "done": "能打开 LangBot 的管理后台首页、看到配置向导，就是装好了。"
        }
      ],
      "url": "https://github.com/langbot-app/LangBot"
    },
    {
      "emoji": "📚",
      "repo": "astral-sh/ruff",
      "deploy": ["pc"],
      "title": "极快的 Python 代码检查+格式化工具",
      "lang": "Rust",
      "stars": "50,700+",
      "body": "Ruff 是 Astral 公司用 Rust 写的 Python 代码检查（linter）和格式化（formatter）工具，官方说可以替代 Flake8、Black、isort 等好几个常用工具，而且速度很快。装好之后一条命令就能扫出代码里的错误和风格问题，另一条命令能自动把代码格式统一。目前总星数约 50,700。",
      "explain": "Linter（代码检查工具）会在代码还没运行之前，先扫一遍文件，挑出变量没用、缩进错了这类小毛病；formatter（格式化工具）则是自动帮你把代码排版统一，不用自己纠结该空几格。Ruff 把这两件事一起干了。",
      "opinion": "入门 Python 阶段用这个能当场发现写错的地方，比自己肉眼找省事很多，也能顺便养成规范代码风格的习惯，对以后读别人代码有帮助；不用学额外配置，装完直接用两条命令就够。📱 手机上：大概率装不上——它是 Rust 编译的工具，Termux 上没有对应的预编译安装包，而装 Rust 工具链编译又属于不建议在这台设备上装的重型工具，建议放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "已经装了 Python 的话，用 pip 装最省事：", "code": "pip install ruff" },
            { "text": "检查某个 Python 文件：", "code": "ruff check 你的脚本.py" },
            { "text": "自动统一代码格式：", "code": "ruff format 你的脚本.py" }
          ],
          "done": "命令跑起来后输出「All checks passed!」，或者列出具体哪一行有问题，就是装好了。"
        }
      ],
      "url": "https://github.com/astral-sh/ruff"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "deploy": ["pc", "cloud"],
      "title": "本地优先的开源记账预算 App",
      "stars": "30,000+",
      "body": "Actual 是一个本地优先（local-first）的开源个人记账预算 App，基于 NodeJS 开发，完全免费，MIT 协议开源。官方提供 Windows/Mac/Linux 桌面版，数据默认存在本地；也可以用 Docker 自托管，或花每月一两美元订阅 PikaPods、Fly.io 托管版做多设备同步。目前总星数约 30,000。",
      "explain": "「本地优先（local-first）」意思是数据首先存在你自己的设备上，不是必须先传到别人的服务器才能用；「同步」只是想在多个设备之间共享数据时才用，不是必须开的功能。",
      "opinion": "比普通记账 App 更接近正规预算软件，能分类目、定预算、看报表，适合理财入门阶段练手怎么做预算；本地单设备用免费，不强制联网也不强制注册账号，先上手试试成本很低。📱 手机上：用不了——官方只提供 Windows/Mac/Linux 桌面版和付费云托管，没有安卓版，想用得放电脑上。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（桌面版）",
          "steps": [
            { "text": "打开 [Actual 官网下载页](https://actualbudget.org/download) 下载对应系统的安装包" },
            { "text": "安装完打开，选「使用本地文件」就能离线记账，不用联网、不用注册账号" },
            { "text": "（可选）如果想多设备同步数据，官方文档里有 Docker 自托管和 PikaPods / Fly.io 托管两种方案，地址在 https://actualbudget.org/docs/install/" }
          ],
          "done": "能看到账户列表，添加一笔支出后余额跟着变化，就是装好了。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "🤖",
      "repo": "max-sixty/worktrunk",
      "deploy": ["pc"],
      "title": "让多个 AI agent 并行改代码的 Git worktree 管理工具",
      "lang": "Rust",
      "stars": "11,802",
      "week": "2,184",
      "body": "Worktrunk 是一个命令行工具，把 Git 自带的 worktree（可以同时开出几个独立工作目录，各自对应不同分支）用起来变得更顺手：核心命令是切换、列出、删除 worktree，原生做同样的事要敲好几条命令还要手动拼路径。作者把它定位为给「并行跑多个 AI agent 各自改代码」的工作流用。本周在 GitHub 趋势榜新增 2,184 颗星，总星数 11,802。",
      "explain": "「Git worktree」是 Git 自带的一个功能，能让同一个仓库同时开出几个独立的工作目录，分别切到不同分支互不干扰，适合同时开几个 AI agent 各自改代码不打架。Worktrunk 就是把这个功能包装得更好用，不用每次手动拼长命令。",
      "opinion": "如果会同时开好几个 Claude Code 或别的 agent 一起改同一个项目，这个工具能省掉手动管理多个工作目录的麻烦；如果平时只开一个任务顺序做，用不用都行，不算刚需，先了解一下够不够用再决定要不要装。📱 手机上：装不上——它是 Rust 编译的命令行工具，Termux 上没有现成安装包，从源码编译又需要完整的 Rust 工具链，这台设备上不建议装，建议放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用 winget 装：", "code": "winget install max-sixty.worktrunk", "after": "装完命令名是 `git-wt`（避免和 Windows Terminal 自带的 `wt` 冲突）。" },
            { "text": "开一个新终端窗口，运行初始化（切换目录需要这步）：", "code": "git-wt config shell install" },
            { "text": "在一个 git 仓库目录下新建/切换 worktree 试试：", "code": "git-wt switch -b 测试分支" }
          ],
          "done": "能看到自动跳到了新建出来的 worktree 目录，就是装好了。"
        }
      ],
      "url": "https://github.com/max-sixty/worktrunk"
    }
  ]
};
