DAILY_DATA["github/2026-10-29"] = {
  "date": "2026-10-29",
  "highlight": "今天最值得先摸一把的是 `cindy`——跨平台的开源 AI 智能体，Android 有现成 APK，不用编译，能直接接你已经在用的 Claude Code/Codex，或者接自己的 API key，当个随手能用的任务助手。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "makecindy/cindy",
      "deploy": ["phone", "pc"],
      "title": "跨平台的开源 AI 智能体，能接 Claude Code/Codex 干活",
      "lang": "TypeScript",
      "stars": "8,098",
      "today": "728",
      "body": "Cindy 是一个开箱即用的开源 AI 智能体，可以在手机、电脑上处理文件、浏览器和应用里的实际任务，支持设定自动化定时任务，也能通过 Slack、Telegram 等渠道接收任务。它可以接入 `Claude Code`、`Codex`、`Pi` 等不同的编码/智能体引擎，还支持 Skills、插件和 MCP 扩展工具。",
      "explain": "MCP 是让 AI 连上外部工具的通用接口，比如让 AI 能直接操作文件、浏览器；Skills 是提前写好的一套「该怎么做事」的说明书，AI 照着来，不用每次现教。它的桌面版用 Electron（拿网页技术做桌面软件的框架）做的，手机端是单独的 App，两边界面长得差不多。",
      "opinion": "如果你平时已经在用 `Claude Code`、`Codex` 这类工具写代码，这个相当于把它们包进一个能装在手机和电脑上的壳子，变成随时能交任务、还能定时自动跑的助手，比如定时整理文件、把某个消息渠道的任务转发过来处理。免费能跳过登录用本地模式试，花十分钟装个版本摸一下再决定要不要深入绑定账号。📱 手机上：官方直接给 Android 安装包，不用编译，能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（官方安装包，不用编译）",
          "intro": "官方直接提供安装包，不用自己编译源码。",
          "steps": [
            { "text": "手机（Android）：打开 [cindy.app/download](https://cindy.app/download)，选 Android 版下载 APK；如果系统提示「未知来源」拦截，去设置里允许这次安装。" },
            { "text": "电脑（Windows）：打开同一个网址，选 Windows 版下载安装包，双击安装。" },
            { "text": "打开后点「Skip Sign-In」可以先用本地智能体模式试用，不用注册账号；要接 `Claude Code`、`Codex` 或自己的模型 API key，在设置里填。" }
          ],
          "done": "能打开主界面、新建一个任务对话，就算装好了。"
        }
      ],
      "url": "https://github.com/makecindy/cindy"
    },
    {
      "emoji": "🛠",
      "repo": "JoeanAmier/TikTokDownloader",
      "deploy": ["pc"],
      "title": "批量下载抖音/TikTok 视频、合集和直播，顺带采集数据",
      "lang": "Python",
      "stars": "17,200",
      "body": "这是一个抖音和 TikTok 的作品下载与数据采集工具，能下载视频、图集、直播流，支持账号主页、合集、多账号批量下载，并能把评论、账号信息、热榜数据存成 CSV、Excel 或数据库。它还支持断点续传、多线程下载和监听剪贴板链接自动下载。",
      "explain": "这个项目不只是下载工具，连抖音/TikTok 账号发了什么、点赞收藏多少这些数据也能一起抓下来存成表格。直播下载靠的是 `ffmpeg`（一个处理音视频的通用工具）；抖音/TikTok 更新加密方式后，作者说不再维护破解算法，所以某天突然抓不到数据是有可能的。",
      "opinion": "如果你平时有下载抖音/TikTok 视频、合集或直播的需求，这个比零散的网页工具靠谱，还能批量存评论和账号数据方便整理。缺点是要手动把登录后的 Cookie 粘进配置文件，平台更新后偶尔会失效，得等作者或自己补加密参数。📱 手机上：大概率装不上——它依赖的 `curl_cffi` 库靠的是预编译好的网络库，官方目前只给 Mac 和 Windows 打包了现成程序，手机上装源码版很容易卡在编译这一步，建议老老实实用电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，用预编译版最省事）",
          "intro": "手机 Termux 大概率装不上（见上面「📱 手机上」），这里只给电脑装法。",
          "steps": [
            { "text": "打开仓库的 Releases 页面：https://github.com/JoeanAmier/TikTokDownloader/releases ，下载最新 Windows 版压缩包，解压后直接运行里面的程序：", "code": "main.exe" },
            { "text": "程序是中文终端菜单，启动后按提示选「下载」还是「采集数据」。" },
            { "text": "要下载私密或登录才能看的内容，把浏览器登录抖音/TikTok 后的 Cookie 粘进配置文件，程序里有提示怎么填。" },
            { "text": "想跑源码而不是用现成程序：先装好 Python 3.12 及以上，再执行：", "code": "pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt\npython main.py", "after": "这一步在电脑上风险比手机小很多，但也不保证一次成功，报错多半是某个依赖没装上，对照报错信息单独装那个包。" }
          ],
          "done": "程序启动后能看到中文菜单、选项能跳转，就算装好了。"
        }
      ],
      "url": "https://github.com/JoeanAmier/TikTokDownloader"
    },
    {
      "emoji": "🛠",
      "repo": "hmjz100/LinkSwift",
      "deploy": ["pc"],
      "title": "一键解析网盘分享链接，拿到直接下载地址",
      "lang": "JavaScript",
      "stars": "34,646",
      "today": "1,616",
      "body": "LinkSwift 是一个浏览器脚本，能从百度网盘、阿里云盘、夸克网盘、迅雷云盘等主流网盘的分享页面里解析出直接下载地址，绕开网盘客户端的限速。装好脚本管理器后打开分享页面即可用，不需要额外注册账号。",
      "explain": "Tampermonkey（篡改猴）这类脚本管理器是给浏览器装小插件用的工具，装好之后可以往网页里加功能；这个项目加的功能就是在网盘分享页面上直接解析出下载直链。",
      "opinion": "整理资料、下载别人分享的网盘文件时能省不少事，装一次后基本不用管。百度网盘、阿里云盘这些常见网盘都覆盖了，但网盘经常改接口，脚本失效了要去仓库看有没有更新版本。📱 手机上：不保证——默认的手机浏览器不支持装这类脚本管理器，只有少数特殊浏览器能装，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（浏览器脚本管理器）",
          "intro": "这是个浏览器里跑的脚本，不是独立程序，先装脚本管理器再装脚本。",
          "steps": [
            { "text": "先给浏览器装脚本管理器：Chrome/Edge 应用商店搜「Tampermonkey」（篡改猴）安装；商店打不开就搜「篡改猴 离线安装」找 crx 包手动装。" },
            { "text": "打开仓库主页：https://github.com/hmjz100/LinkSwift ，点 README 里的安装链接，Tampermonkey 会自动弹出安装确认，点确认。" },
            { "text": "打开支持的网盘分享链接页面，页面上会出现脚本加的直链下载按钮。" }
          ],
          "done": "网盘分享页面上出现脚本添加的下载按钮，就说明装成功了。"
        }
      ],
      "url": "https://github.com/hmjz100/LinkSwift"
    },
    {
      "emoji": "🛠",
      "repo": "JetBrains/thinkrail",
      "deploy": ["pc"],
      "title": "给 AI 编码智能体做的多任务 IDE",
      "lang": "TypeScript",
      "stars": "5,045",
      "today": "1,068",
      "body": "ThinkRail 是围绕 `pi` 编码智能体做的 IDE，提供多个独立的 git 工作区、代码编辑器、终端、用文档管理需求的 Specs，以及 Skills 和工作流，还能直接操作 GitHub PR。桌面版支持 macOS、Windows 和 Linux。",
      "explain": "`git worktree` 能让你在电脑上同时开着同一个项目的几个独立副本，分别干不同的活儿、互不干扰；Spec 是先写一份文档说清楚「这次要做成什么样」，再让 AI 照着这份文档干活，减少跑偏。它背后跑的 `pi` 是另一个项目做的「AI 写代码引擎」，ThinkRail 相当于给它套了一层看得见、点得动的界面。",
      "opinion": "如果你已经习惯用 AI 写代码，这个工具的价值是让你能同时开几个独立任务、各自有自己的文档和进度，不用在一个对话里来回切换上下文。核心能力还是取决于你接的模型，界面只是让管理多任务更顺手，值得在电脑上装一个感受下是不是比纯命令行舒服。📱 手机上：装不了，它是桌面图形程序，要装 GTK、WebKitGTK 这些图形库，手机 Termux 没有桌面环境，跑不起来。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 PowerShell，执行安装命令：", "code": "powershell -c \"irm https://raw.githubusercontent.com/JetBrains/thinkrail/main/install.ps1 | iex\"", "after": "下载慢或失败就先开代理。" },
            { "text": "装完后打开命令行，运行：", "code": "thinkrail" },
            { "text": "也可以直接指定要打开的代码仓库路径：", "code": "thinkrail C:/path/to/your-repo" },
            { "text": "第一次用要连模型：可以用 JetBrains AI 账号登录，也可以在设置里接自己的 API key。" }
          ],
          "done": "命令跑完会自动在浏览器打开编辑器和终端界面，就算装好了。"
        }
      ],
      "url": "https://github.com/JetBrains/thinkrail"
    },
    {
      "emoji": "📚",
      "repo": "xiaolai/the-craft-of-selfteaching",
      "deploy": ["read"],
      "title": "用学 Python 练「怎么自学」这件事",
      "lang": "Jupyter Notebook",
      "stars": "18,497",
      "today": "148",
      "body": "《自学是门手艺》用 Python 入门当载体，教怎么拆解难题、怎么用刻意练习代替死记硬背，内容以可以直接运行的 Jupyter 笔记本形式组织。书里从变量、流程控制讲到函数、类和正则表达式，同时穿插讲自学方法和注意力管理。",
      "explain": "这本书不是 Python 语法手册，更像是「怎么学会学习」的方法论，顺带把 Python 入门过一遍，比如怎么拆解一个看起来很难的问题、怎么用刻意练习代替死记硬背。",
      "opinion": "对正在自己摸索学东西的人来说，这本书讲的拆解问题、刻意练习这些方法是通用的，不只对编程有用，换成学别的技能也能套。缺点是写法偏说理，不是速查手册，得有耐心慢慢看。📱 手机上：能看，直接在 GitHub 网页上翻 Markdown 正文就行，不用装任何东西，但代码练习部分在手机上跑不方便，适合电脑配合。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接在仓库首页翻目录和 Markdown 版正文：https://github.com/xiaolai/the-craft-of-selfteaching ；想边读边跑 Python 代码，就把仓库下载到电脑，用 Jupyter 打开里面的 `.ipynb` 笔记本（仓库 README 附录里有装 JupyterLab 的方法）。" }
          ],
          "done": "能打开目录、点进第一章看到正文，就算能看了。"
        }
      ],
      "url": "https://github.com/xiaolai/the-craft-of-selfteaching"
    },
    {
      "emoji": "🎨",
      "repo": "Anduin2017/HowToCook",
      "deploy": ["read"],
      "title": "程序员写的家常菜谱仓库，照步骤做饭",
      "stars": "103,323",
      "today": "73",
      "body": "HowToCook 把常见家常菜整理成仓库形式的「菜谱代码」，按菜系和难度分类，每道菜写清楚用料、火候和步骤顺序。内容持续有人提交新菜谱，覆盖家常菜、早餐、减脂餐等多个方向。",
      "explain": "没什么要解释的技术名词，就是一份写成仓库形式的家常菜谱，按步骤讲清楚火候、用料和顺序。",
      "opinion": "纯粹换脑子用，自己做饭比点外卖省钱，跟着步骤走门槛很低，挑几个简单的菜试试就行，别指望多专业。📱 手机上：能看，直接用手机浏览器打开 GitHub 页面翻就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接在仓库首页按菜系/难度翻目录：https://github.com/Anduin2017/HowToCook ，点进去就是图文菜谱。" }
          ],
          "done": "能打开目录、点进一篇菜谱看到步骤，就算能看了。"
        }
      ],
      "url": "https://github.com/Anduin2017/HowToCook"
    }
  ]
};
