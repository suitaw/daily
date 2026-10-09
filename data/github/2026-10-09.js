DAILY_DATA["github/2026-10-09"] = {
  "date": "2026-10-09",
  "highlight": "今天最值得先装的是 `mattpocock/skills`——知名 TypeScript 讲师开源的一套工程师技能库，装一两个就能让 Claude Code 写代码、做审查更按流程来；记账起步的话可以看看 `ezbookkeeping`，数据存自己手里，还带小票 AI 识别。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "mattpocock/skills",
      "title": "给 Claude Code 装一整套工程师技能",
      "lang": "Shell",
      "stars": "281,069",
      "today": "1,774",
      "body": "作者 Matt Pocock 是知名 TypeScript 讲师，把自己日常写代码时沉淀下来的一套 Skill 打包开源，覆盖需求梳理、方案规划、写代码、测试、代码审查全流程。同时支持 Claude Code、Codex、GitHub Copilot、Gemini CLI 等多种 AI 编程工具，按你用的工具选对应安装方式。装好后相关场景会自动触发对应 Skill，也可以用斜杠命令手动调用，只装其中一两个也没问题，不用全装。",
      "explain": "Skill 就是写给 AI 编程工具的一份「操作手册」，用文字说明某件事该按什么流程做，比如代码审查该先看哪里、再看哪里。AI 工具遇到类似场景时会自动照着这份手册来，而不是每次随性发挥。",
      "opinion": "你平时就用 Claude Code 写代码，装上这套技能包相当于免费给它升级工作习惯，尤其是代码审查和测试那几项，容易帮你揪出写单文件 HTML+JS 小工具时漏掉的问题。先挑一两个装着试试效果就行，没必要一次装全。📱 手机上：Termux 装了 Node.js，装插件走的是 `claude` 自带命令，不涉及编译，大概率能装上；添加插件市场那一步要连 GitHub，记得给命令加代理。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "intro": "前提是已经在 Termux 里装好 Claude Code 命令行。",
          "steps": [
            { "text": "确认命令行能跑通：", "code": "claude --version" },
            { "text": "添加插件市场（会连 GitHub，这条命令前面要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 claude plugin marketplace add mattpocock/skills" },
            { "text": "安装技能包：", "code": "claude plugin install mattpocock-skills@claude-plugins-official" },
            { "text": "进到项目目录，在 Claude Code 对话里跑一次初始化（不是终端命令，是对话里输入的指令）：", "code": "/setup-matt-pocock-skills", "after": "跳过也不影响基本使用，只是少配置了问题跟踪、标签这些细节" }
          ],
          "done": "装完后让 Claude Code 做一次代码审查或写个测试，回复变得更按步骤走、更规范，就说明生效了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "命令和手机一样，去掉代理前缀；下载慢或失败就先开代理软件再试。",
          "steps": [
            { "text": "在 PowerShell 里添加插件市场：", "code": "claude plugin marketplace add mattpocock/skills" },
            { "text": "安装技能包：", "code": "claude plugin install mattpocock-skills@claude-plugins-official" },
            { "text": "进到项目目录，在 Claude Code 对话里跑一次初始化：", "code": "/setup-matt-pocock-skills" }
          ],
          "done": "同上，让 Claude Code 做点事看看回复有没有变规范。"
        }
      ],
      "url": "https://github.com/mattpocock/skills"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "title": "图解数据结构与算法，入门教程",
      "stars": "130,461",
      "today": "30",
      "body": "一本用动画图解数据结构与算法的开源教程，偏新手向，涵盖数组、链表、栈队列、树、图、排序、动态规划等经典主题。每个概念配动画演示和可直接运行的示例代码，代码同时提供 Python、Java、C++、Go、JavaScript 等多种语言版本。有在线网页版，也能在 Releases 页面下载 PDF/EPUB 离线看。",
      "explain": "动态规划、图这类名词听起来吓人，其实都是解决某一类问题的固定套路，这本书把每一步拆成动画，照着走一遍比单看文字公式好懂很多。",
      "opinion": "你刚开始学 Python，光学语法容易学完就忘，配合这种结构化的算法教程练一练，能顺带补上「数据怎么存、怎么查」这块基础，以后看懂别人代码、给自己的小工具做优化都有帮助。不用赶进度，挑用得上的几章看就行。📱 手机上：这是本在线书，手机浏览器直接打开网页看就行，不用装东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开在线网页版阅读：", "after": "[hello-algo.com](https://www.hello-algo.com)" },
            { "text": "想要离线版（PDF/EPUB），去 Releases 页面下载：", "after": "[github.com/krahets/hello-algo/releases](https://github.com/krahets/hello-algo/releases)" }
          ],
          "done": "打开网页能看到带动画演示的章节列表，就是找对地方了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "📚",
      "repo": "ryanhanwu/How-To-Ask-Questions-The-Smart-Way",
      "title": "经典文章：怎么提问才有人愿意答",
      "stars": "35,857",
      "today": "11",
      "body": "这是 Eric S. Raymond 那篇经典英文技术文章《How To Ask Questions The Smart Way》的中文翻译，教你提技术问题时怎么把背景、已经试过什么、具体报错说清楚，别人才愿意花时间帮你。仓库里直接是翻译后的 Markdown 全文，打开就能读，也有简体中文单独的版本链接。",
      "explain": "这篇文章讲的不是技术知识，而是「怎么问问题」这件事本身——怎么描述清楚环境、你已经做过的排查、具体报错，而不是甩一句「不能用，求助」。",
      "opinion": "你平时自学 Python、电工、理财这几门杂学科，少不了在论坛、群里、甚至问 AI 时描述问题，把这篇文章的套路学会，能让别人（包括 AI）更快给到有用的答案，少走几轮「反复追问细节」的回合。花十几分钟看一遍就够，遇到卡壳的时候翻出来对一下清单。📱 手机上：纯文字仓库，手机浏览器直接打开 README 看就行，不用装东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接在 GitHub 上看简体中文版：", "after": "[README-zh_CN.md](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)" }
          ],
          "done": "打开能看到整篇中文翻译，就是看对了。"
        }
      ],
      "url": "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
    },
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "title": "免费离线OCR，截图转文字",
      "lang": "Python",
      "stars": "47,690",
      "today": "43",
      "body": "一款完全离线运行的免费 OCR（文字识别）软件，支持截图识别、批量图片识别、PDF 文档识别、二维码识别和生成。识别过程不联网、不用 API Key，数据不会传到任何服务器。目前支持 Windows 7 及以上和 Linux，官方还没做 Mac 版。",
      "explain": "OCR 就是把图片里的文字识别出来变成可以复制的文本，比如拍一张发票照片，它能把上面的金额、日期直接抠出来，不用自己敲。",
      "opinion": "记账、整理电工资料笔记，经常需要把纸质票据或截图里的文字抠出来，这个工具离线就能用，不用担心照片传到别人服务器，识别完直接复制粘贴进记账软件或笔记里，比手动打字快。📱 手机上：官方只支持 Windows 和 Linux，没有安卓版也没有命令行版，Termux 装不了，得放你那台 Windows 电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "手机 Termux 装不了（见上面说明），这里只写电脑步骤，不用编译，解压就能用。",
          "steps": [
            { "text": "去 Releases 页面下载压缩包（国内下载慢可以用仓库 README 里给的蓝奏云镜像）：", "after": "[github.com/hiroi-sora/Umi-OCR/releases/latest](https://github.com/hiroi-sora/Umi-OCR/releases/latest)" },
            { "text": "下载到的是 .7z 格式压缩包，用压缩软件（比如 7-Zip、Bandizip）解压到一个文件夹，不用安装" },
            { "text": "打开解压出来的文件夹，双击运行：", "code": "Umi-OCR.exe" }
          ],
          "done": "打开后界面出现截图识别、批量识别等标签页，截一张带文字的图能自动识别出文本，就是装成功了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "💰",
      "repo": "mayswind/ezbookkeeping",
      "title": "自建记账App，带AI识别小票",
      "stars": "5.7k",
      "body": "一款开源、可自托管的记账 App，支持记流水、分类统计、图表分析、多币种，还带几个 AI 相关功能：拍小票自动识别金额和项目、用自然语言生成自定义图表、支持 MCP（可以接到 AI 工具里查账本）。支持 Docker 一键跑，也有官方编译好的二进制直接运行，数据存在自己的机器上。",
      "explain": "自托管意思是这个 App 不是装在别人公司的服务器上，而是你自己找一台机器（比如电脑或便宜的云服务器）把它跑起来，账本数据全在自己手里，不用担心哪天记账 App 跑路或者被看账单数据。MCP 是让 AI 工具连接外部数据/服务的一种通用接口，这里指可以让 AI 助手直接读你的账本来回答问题。",
      "opinion": "你正在学理财入门，记账是最基础的一步，这个比随手找个国内记账 App 多了「数据自己存」和「小票拍照识别」这两个实用点，适合长期记录。AI 小票识别、自然语言生成图表这些功能具体要不要填第三方 API Key，官方 README 没写清楚，装完进设置页看看有没有相关选项，没有的话就先用基础记账功能，不影响正常用。📱 手机上：它是要跑在服务器上的网页应用，不是装在手机本地的 App；Termux 没有 Docker、编译工具也不全，不建议拿手机自建，装在电脑上，记账时用手机浏览器打开网页用就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，用官方编译好的二进制）",
          "intro": "手机 Termux 不建议自建（见上面说明），装在电脑上就行。",
          "steps": [
            { "text": "去 Releases 页面下载 Windows 版压缩包：", "after": "[github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)" },
            { "text": "解压后，在该文件夹里打开 PowerShell，运行：", "code": ".\\ezbookkeeping.exe server run" },
            { "text": "打开浏览器访问：", "code": "http://localhost:8080", "after": "没有默认账号密码，第一次打开照页面提示创建一个账号；不保证页面提示和这里描述完全一致，找不到创建入口就查官方文档 [ezbookkeeping.mayswind.net](https://ezbookkeeping.mayswind.net/)" }
          ],
          "done": "能打开记账首页，创建账号登录进去，就是跑起来了。"
        }
      ],
      "url": "https://github.com/mayswind/ezbookkeeping"
    }
  ]
};
