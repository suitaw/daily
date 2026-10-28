DAILY_DATA["github/2026-10-28"] = {
  "date": "2026-10-28",
  "highlight": "今天最值得试的是 `superpowers`——给 AI 编程工具装一整套从「先说方案」到「测试驱动」再到「审查收尾」的完整开发流程，专治「AI 一上来就甩一堆用不上的代码」的老毛病，装起来只是一条插件命令，成本很低。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "deploy": ["phone", "pc"],
      "title": "给 AI 编程工具装一套完整开发方法论",
      "lang": "Shell",
      "stars": "306,438",
      "today": "617",
      "body": "跟前几天推过的「一条规矩」不一样，这是一整套可组合的技能包：动手写新功能前先问你想做什么、给你看设计方案，等确认了再列实现计划，然后用测试驱动的方式一步步写，中间还有专门的审查环节，最后帮你收尾分支。支持 Claude Code、Codex、Cursor 等十几种 AI 编程工具。这几天在热门榜上涨得很猛，总星数已经 30 万+。",
      "explain": "「测试驱动开发」是先写一个肯定会失败的测试（红），再写刚好够用的代码让它通过（绿），最后再收拾代码（重构），是个老牌的保证质量的写法。「子代理」是 AI 编程工具临时开出来的一个新对话窗口，专门干一件小事，干完把结果交回主线，省得主对话被塞满细节。",
      "opinion": "这套流程比单条规矩重得多——从设计讨论走到测试到审查，整套用上得花时间适应，但目标正好是解决代码写得又多又用不上的问题，值得拿一个新功能试一遍，看流程顺不顺手，不顺手砍掉也不心疼。装的时候只是让 Claude Code 跑一条插件命令，不装任何代码包。📱 手机上：能装，就是在 Claude Code 里跑一条 `/plugin` 命令，不涉及任何包管理器或代码运行，Termux 里没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令通用）",
          "steps": [
            { "text": "在 Claude Code 对话框里加一下官方插件市场（已经加过执行这条也没影响）", "code": "/plugin marketplace add anthropics/claude-plugins-official" },
            { "text": "装上这套开发方法论", "code": "/plugin install superpowers@claude-plugins-official" }
          ],
          "done": "装完后开始写一个新功能，它会先问你想做什么、给你看设计方案，确认了才动手写代码，而不是直接甩一堆实现上来。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "📚",
      "repo": "HKUDS/DeepTutor",
      "deploy": ["pc", "cloud"],
      "title": "专属 AI 学习工作台：答疑+出题+画图一起来",
      "lang": "Python",
      "stars": "45,889",
      "today": "1,598",
      "body": "一个开源的「AI 学习工作台」，集成了答疑辅导、出题测验、资料整理、画示意图等功能，主打「长期记忆」——学习过程中的要点会存成一份可检查、可编辑的记录，下次换个话题问它还能接上上次讲到哪。自己配大模型 API key 使用，支持 OpenAI 兼容接口和 Anthropic 格式。装好后本地起一个网页，浏览器打开就能用。",
      "explain": "「长期记忆」在这里不是比喻：它真把问过的问题、学过的内容存成文件，下次接着问不用重新交代背景，这和一般聊天机器人问完就忘不一样。",
      "opinion": "学 Python、电工、理财这类需要反复追问、刷题自测的内容，用它追问卡住的点、让它出几道题，比在普通聊天框里从零问省心一些，记忆功能也省得自己整理笔记。装起来稍微折腾（要配 Python、Node，前端还要构建一次），先用 Docker 版本试一下值不值得长期用。📱 手机上：不保证——它要跑 Python 后端加 Node 前端构建，流程偏重，建议先装在电脑或云服务器上，手机用浏览器打开网页用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker，最省事）",
          "intro": "先用这个看看效果，不用自己折腾 Python 环境。",
          "steps": [
            { "text": "拉取镜像并启动（数据存在本地卷里，换机器不丢）", "code": "docker run --rm --name deeptutor \\\n  -p 127.0.0.1:3782:3782 \\\n  -v deeptutor-data:/app/data \\\n  ghcr.io/hkuds/deeptutor:latest", "after": "放云服务器上要把 127.0.0.1 换成 0.0.0.0 才能从外面打开，记得加个密码保护或只在内网用，别裸奔在公网上。" },
            { "text": "浏览器打开 `http://127.0.0.1:3782`（云服务器换成它的 IP），在「设置→Providers」里填自己的大模型 API key" }
          ],
          "done": "能看到辅导/聊天界面，问它一个想学的知识点能正常回答，就算装成功。"
        },
        {
          "title": "安装步骤 · 💻 电脑（源码方式，想长期用、不依赖 Docker）",
          "intro": "需要先装好 Python 3.11+ 和 Node.js 20+。",
          "steps": [
            { "text": "拉代码", "code": "git clone https://github.com/HKUDS/DeepTutor.git\ncd DeepTutor", "after": "下载慢或失败就先开代理再试。" },
            { "text": "建虚拟环境装 Python 依赖", "code": "python3 -m venv .venv && source .venv/bin/activate\npython -m pip install --upgrade pip\npython -m pip install -e ." },
            { "text": "装前端依赖并打包", "code": "cd web && npm ci --legacy-peer-deps && cd ..", "after": "同样，下载慢或失败就先开代理再试。" },
            { "text": "初始化并启动", "code": "deeptutor init\ndeeptutor start" }
          ],
          "done": "终端提示服务跑在 `http://127.0.0.1:3782`，浏览器打开能看到界面就算成功；中途报错大多是 Python/Node 版本不对，对一下版本号。"
        }
      ],
      "url": "https://github.com/HKUDS/DeepTutor"
    },
    {
      "emoji": "🛠",
      "repo": "ScottSloan/Bili23-Downloader",
      "deploy": ["pc"],
      "title": "下B站视频带弹幕字幕，还能让 AI 远程操控",
      "lang": "Python",
      "stars": "8,659",
      "today": "48",
      "body": "一个开源的哔哩哔哩视频下载器，图形界面，支持多线程下载、断点续传、音视频分离、弹幕和字幕导出、封面和元数据保存，还能批量解析链接、按规则自动分类命名。今天新上榜，涨得挺快。额外带一个默认关闭的 MCP 服务，开启后能让 Claude Code 之类的 AI 编程工具直接发指令创建下载任务。",
      "explain": "「MCP」是让 AI 编程工具去操作其他软件的通用协议，打开这个功能相当于给下载器开了个「AI 遥控口」，不开也完全不影响正常下载。「断点续传」就是下到一半断网了，重连能接着下，不用从头来。",
      "opinion": "想把网上的教学视频、讲座存到本地反复看，这个工具比手动一个个存方便，弹幕字幕一起导出也省事；MCP 那个功能可以不管，核心下载功能装完就能用。它只做个人非商业用途，不破解付费内容。📱 手机上：装不上——是桌面图形界面程序，官方只给 Windows/Linux/macOS 的安装包，没有手机版或命令行版。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "没有 pip 或源码构建命令，直接下现成安装包最省事。",
          "steps": [
            { "text": "打开仓库的 Releases 页面 `https://github.com/ScottSloan/Bili23-Downloader/releases`，下载自己系统对应的安装包（Windows/Linux/macOS 都有）", "after": "国内下 GitHub Releases 慢的话，README 里另外给了一个官网下载链接，可以从那边下。" },
            { "text": "解压或运行安装包，打开软件" }
          ],
          "done": "打开软件能看到任务列表界面，粘贴一个 B 站视频链接能正常解析出清晰度选项，就算装成功。"
        }
      ],
      "url": "https://github.com/ScottSloan/Bili23-Downloader"
    },
    {
      "emoji": "💰",
      "repo": "mayswind/ezbookkeeping",
      "deploy": ["pc", "cloud"],
      "title": "自己存数据的记账 App，网页/手机浏览器都能用",
      "lang": "Go",
      "body": "一个开源、自托管的记账应用，支持录入收支、导入账单、按分类看图表、设预算。装起来是个单独的程序或 Docker 容器，数据全部存在自己这边，不用交给第三方记账 App。界面做了手机浏览器适配，能当 PWA 添加到手机主屏幕用。",
      "explain": "「PWA」是网页伪装成 App 的样子，添加到手机主屏幕后点图标直接打开，原理还是打开一个网页，不用上应用商店下载。「自托管」是说这程序是自己找台电脑或云服务器跑起来的，账单数据存在那台机器上，不会传到开发者的服务器。",
      "opinion": "比起把账单数据交给一个来路不明的记账 App，这个数据放在自己手里，拿来练手「管好自己的钱」这个目标挺合适，先在电脑上跑一两周看顺不顺手。它带的 AI 自动分类、生成图表之类的功能要自己配大模型 API key，不配也不影响核心记账功能。📱 手机上：不保证直接装在手机上——它是 Go 写的后端程序，官方没给现成的手机（Termux/aarch64）版本；建议装在电脑或花小钱租个云服务器上跑起来，手机浏览器打开用，体验跟 App 差不多。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker，最省事）",
          "steps": [
            { "text": "拉取镜像并启动", "code": "docker run -p8080:8080 mayswind/ezbookkeeping", "after": "放云服务器上记得给这个端口加个访问限制（防火墙或反向代理加密码），别让别人也能打开你的账本。" },
            { "text": "浏览器打开 `http://127.0.0.1:8080`（云服务器换成它的 IP），按提示注册一个本地账号" }
          ],
          "done": "能看到记账首页，新增一笔支出能正常显示在列表和图表里，就算装成功。"
        },
        {
          "title": "安装步骤 · 💻 电脑（不用 Docker，下载现成程序）",
          "steps": [
            { "text": "打开 Releases 页面下载自己系统对应的程序包，解压后在程序目录里运行", "code": "./ezbookkeeping server run" },
            { "text": "Windows 上对应的命令是", "code": ".\\ezbookkeeping.exe server run" }
          ],
          "done": "同样浏览器打开 `http://127.0.0.1:8080` 能看到记账界面，就算装成功。"
        }
      ],
      "url": "https://github.com/mayswind/ezbookkeeping"
    },
    {
      "emoji": "💰",
      "repo": "TauricResearch/TradingAgents",
      "deploy": ["pc"],
      "title": "多个 AI 角色开会做交易决策的模拟实验",
      "lang": "Python",
      "stars": "117,324",
      "week": "4,882",
      "body": "一个开源的多 Agent 框架，用好几个大模型分别扮演分析师、研究员、交易员、风控、基金经理等角色，互相辩论后给出一个买卖决策，在模拟交易所里下单，也能对历史数据做回测。作者明确写了这是研究用途，不是真实的投资建议。本周在热门榜上涨得很快。",
      "explain": "「回测」是拿历史价格数据重新跑一遍策略，看过去这么操作能赚还是会亏，用来验证思路，不代表未来也会这样。「模拟交易所」是假的交易环境，下单不花真钱。「多 Agent 辩论」是这个框架的核心玩法——让几个 AI 角色各自发表意见再互相反驳，比单个 AI 直接给答案更接近真实决策过程。",
      "opinion": "更适合当「多 Agent 怎么分工协作」的编程学习材料来看——角色怎么分工、怎么让他们互相审核意见，这些思路能用到别的 Agent 项目上；顺带也能看看分析一只股票大概要看哪些角度。**千万不要用来接真实交易账户或填真实券商的 API Key/密钥——这类框架没经过审计，策略也不保证有效，接真钱可能直接亏光本金，出问题没人赔。**当学习材料看就好，别指望靠它赚钱。📱 手机上：装不上——它调用大模型的库在 Termux 里编译不过，只能放电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "跑起来要自己配至少一个大模型的 API key（OpenAI/Anthropic 等），全程只是模拟交易，不涉及任何真实账户。",
          "steps": [
            { "text": "拉代码", "code": "git clone https://github.com/TauricResearch/TradingAgents.git\ncd TradingAgents", "after": "下载慢或失败就先开代理再试。" },
            { "text": "复制一份配置文件，按里面的说明填入自己的大模型 API key", "code": "cp .env.example .env" },
            { "text": "用 Docker 直接跑一次模拟交易决策", "code": "docker compose run --rm tradingagents" }
          ],
          "done": "终端会打印出几个 AI 角色轮流发言讨论、最后给出一个模拟的买卖决策，全程没有连接任何真实交易账户或花一分钱，这就算跑成功了。"
        }
      ],
      "url": "https://github.com/TauricResearch/TradingAgents"
    }
  ]
};
