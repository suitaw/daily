DAILY_DATA["github/2026-10-16"] = {
  "date": "2026-10-16",
  "highlight": "今天最值得试的是 `cathrynlavery/diagram-design`——一句话就能让 Claude Code 画出能直接打开看的 HTML 图表，刚好配你写单文件网页的路子，零成本、不用改习惯。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "cathrynlavery/diagram-design",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装个画图技能，自动生成单文件 HTML+SVG 图表",
      "lang": "HTML",
      "stars": "55,915",
      "week": "10,237",
      "body": "这是一个 Claude Code 技能（skill），装上后让 AI 用自然语言就能画架构图、流程图等 44 种图表，产物是一个自包含的 HTML 文件，双击就能在浏览器里打开，不用额外搭建任何东西。也支持 Codex、Cursor 等其他编程 AI 工具。",
      "explain": "「skill」可以理解成给 AI 装的一个「技能包」，让它学会一种新本事（这里是画图）；「自包含 HTML」就是所有图表内容（包括图形）都写死在一个 `.html` 文件里，不依赖别的文件也不用联网，跟你自己做的那些单文件网页是一个思路。",
      "opinion": "你自己的项目都是单文件 HTML，这个技能产出的东西天生就能直接用——比如让 Claude Code 给某个项目画一张架构图或流程图存成说明文档，比自己手搭图表省事很多。装上之后不用改工作习惯，直接用一句话描述需求就行。📱 手机上：装的是技能文件本身，不编译任何东西，Termux 跑 Claude Code 应该能直接装；只有导出 PNG 那一步需要额外装 Playwright 和浏览器内核，手机上大概率装不上，用不到就不用管。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "命令在手机 Termux 和电脑上一样，用 Claude Code 自带的插件系统装。",
          "steps": [
            { "text": "打开 Claude Code，装这个插件：", "code": "/plugin marketplace add cathrynlavery/diagram-design\n/plugin install diagram-design@diagram-design", "after": "这一步要连 GitHub，卡住或报错大概率是网络问题，确认代理开着再试一次" },
            { "text": "直接用一句话提需求，比如：", "code": "帮我画一张架构图：前端、后端、数据库、Redis 缓存", "after": "AI 会生成一个 .html 文件，自动打开就能在浏览器里看到图" },
            { "text": "（可选，仅电脑）要导出 PNG 图片才需要这一步：", "code": "pip install playwright && playwright install chromium" }
          ],
          "done": "问 Claude Code「你有画图技能吗」，它答上来、并且真的画出一个能打开看图的 .html 文件，就算装好了"
        }
      ],
      "url": "https://github.com/cathrynlavery/diagram-design"
    },
    {
      "emoji": "🤖",
      "repo": "JuliusBrussee/caveman",
      "deploy": ["phone", "pc"],
      "title": "省 token 的编程 AI 中间层，让 Claude Code 说话更精简",
      "lang": "Go",
      "stars": "112,536",
      "today": "433",
      "body": "这是个装在编程 AI（Claude Code、Codex、Gemini CLI 等）前面的小工具，让 AI 的回复更精简、读取文件时先压缩内容，官方说法是能省下六成多的 token，但实际效果看任务类型，别全信宣传数字。核心本地功能免费、开源（MIT 协议），不强制注册账号。",
      "explain": "「token」是 AI 按它来计费和计算用量的最小单位，大致对应几个字/字符；精简回复、压缩读取的内容，本质就是少让 AI「说废话」「读废话」，从而少花 token、回得更快。",
      "opinion": "如果你平时觉得 Claude Code 额度紧或者回复/读文件啰嗦，可以装上试试，省不省看自己实际感受，别把「省 65%」当成保证。命令里有 `caveman login`、`caveman trial` 这类，看起来是给可选的云端功能用的，核心省 token 功能不用登录就能跑，用不到就别管那些命令。📱 手机上：是 Node 脚本加命令行工具，不涉及要编译的原生库，Termux 装好的 Node 版本够新，大概率能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Claude Code 插件方式）",
          "steps": [
            { "text": "在 Claude Code 里装插件：", "code": "/plugin marketplace add JuliusBrussee/caveman\n/plugin install caveman@caveman", "after": "这步要连 GitHub，卡住先确认代理开着" },
            { "text": "装好后在对话里直接喊：", "code": "/caveman" },
            { "text": "想看省了多少可以跑：", "code": "caveman stats" }
          ],
          "done": "`/caveman` 有反应、`caveman stats` 能跑出数据，就算装好了"
        }
      ],
      "url": "https://github.com/JuliusBrussee/caveman"
    },
    {
      "emoji": "🛠",
      "repo": "anthropics/claude-plugins-official",
      "deploy": ["phone", "pc"],
      "title": "Anthropic 官方出的 Claude Code 插件目录，装插件先来这挑",
      "lang": "Python",
      "stars": "39,086",
      "today": "307",
      "body": "这是 Anthropic 自己维护的 Claude Code 插件清单，分「官方自己做的」和「审核过的第三方」两部分，比到处搜社区插件靠谱。README 也提醒，装任何插件前都该自己确认靠不靠谱，Anthropic 不负责插件里 MCP 服务器之类的具体内容。",
      "explain": "「插件市场（marketplace）」就是一堆别人写好的 Claude Code 功能包的清单，装上某个插件，Claude Code 就多一个本事；这个仓库本身不是插件，是「哪些插件值得看看」的目录。",
      "opinion": "你已经自己装了几个 Claude Code 插件，这个官方目录可以当成一个安全一点的「插件商店」，没事翻一翻，说不定能挑到比手上这些更顺手的，按实际需要装、别为了装而装。📱 手机上：只是看目录、用 Claude Code 自带命令装插件，不涉及编译，Termux 能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "steps": [
            { "text": "在 Claude Code 里打开插件面板看目录：", "code": "/plugin" },
            { "text": "进 Discover 标签翻一翻，看中哪个插件（比如叫 some-plugin）就装：", "code": "/plugin install some-plugin@claude-plugins-official" }
          ],
          "done": "装完用 `/plugin` 能在已装列表里看到它，就算装好了"
        }
      ],
      "url": "https://github.com/anthropics/claude-plugins-official"
    },
    {
      "emoji": "🛠",
      "repo": "NationalSecurityAgency/ghidra",
      "deploy": ["pc"],
      "title": "NSA 开源的免费逆向分析工具，看懂别人编译后的代码",
      "lang": "Java",
      "stars": "88,741",
      "week": "6,614",
      "body": "Ghidra 是美国 NSA 开发并开源的逆向工程框架，能把编译后的程序反汇编、反编译成接近源码的样子，还能画调用关系图、写脚本自动分析。是这个领域用了十几年的老牌工具，不是什么新项目。",
      "explain": "「逆向工程」就是拿到一个已经编译好的程序（没有源代码），反过来分析它到底干了什么；「反编译」就是把机器能懂的二进制代码还原成人能大致看懂的伪代码。",
      "opinion": "跟 AI 自动分析类工具不是一回事——那类是让 AI 帮你读，Ghidra 是你自己上手在界面里一点点看，专业逆向的人基本都用它，上手门槛比 AI 工具高不少，但遇到 AI 分析不出来、或者想验证 AI 说的对不对，这个能帮你自己看个究竟，值不值得学要看你愿不愿意花时间。📱 手机上：是个很重的 Java 桌面 GUI 程序，Termux 没有图形界面环境，装不了，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装 JDK 25（64 位），去 Eclipse Temurin 官网下对应 Windows 安装包装上" },
            { "text": "去 Ghidra 的 GitHub Releases 页面下载压缩包（文件名类似 ghidra_11.x_PUBLIC_日期.zip）：", "code": "https://github.com/NationalSecurityAgency/ghidra/releases", "after": "下载慢或失败就先开代理" },
            { "text": "解压到一个干净的目录（别覆盖旧版本）" },
            { "text": "双击运行启动：", "code": "ghidraRun.bat" }
          ],
          "done": "弹出 Ghidra 的项目管理器窗口，就算装好了"
        }
      ],
      "url": "https://github.com/NationalSecurityAgency/ghidra"
    },
    {
      "emoji": "💰",
      "repo": "ellite/Wallos",
      "deploy": ["pc", "cloud"],
      "title": "自己搭一个订阅/周期扣费追踪器，管好容易忘的自动扣款",
      "lang": "PHP",
      "stars": "8.7k",
      "body": "Wallos 是个开源的自托管订阅管理工具，用来记每个月、每年要被自动扣费的各种订阅（视频网站、云盘、软件会员之类），能看总共花了多少钱，支持多币种，到期前还能发邮件提醒。",
      "explain": "「自托管」就是这东西不是谁帮你开好的网站，而是自己找台机器把它跑起来，数据存在自己手里；用 Docker 装会省心很多，Docker 相当于把程序和它需要的环境打包成一个现成的箱子，一条命令就能跑起来，不用自己一个个装环境。",
      "opinion": "正在学理财的入门阶段，先搞清楚每月被自动扣了多少订阅费是个很具体又用得上的小目标，比记流水账更容易上手。这是个要一直开着的小网页服务，适合放云服务器，或者用电脑装 Docker 常驻跑，图方便也可以就在电脑上跑着用。📱 手机上：Termux 没有 Docker，手动装 PHP+网页服务器+定时任务那一套步骤多也容易出错，不建议在手机上折腾。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker）",
          "intro": "需要先装好 Docker（Windows 上装 Docker Desktop）。",
          "steps": [
            { "text": "把命令里的路径改成自己机器上的实际目录再跑（Windows PowerShell 不支持续行符，要把它改写成一整行）：", "code": "docker run -d --name wallos -v /path/to/config/wallos/db:/var/www/html/db -v /path/to/config/wallos/logos:/var/www/html/images/uploads/logos -e TZ=Asia/Shanghai -p 8282:80 --restart unless-stopped bellamy/wallos:latest", "after": "下载镜像慢或失败就先开代理" },
            { "text": "浏览器打开，注册一个账号：", "code": "http://localhost:8282" }
          ],
          "done": "能注册登录、看到空的订阅列表，就算装好了，之后把自己的订阅一个个加进去"
        }
      ],
      "url": "https://github.com/ellite/Wallos"
    },
    {
      "emoji": "🎨",
      "repo": "heygen-com/hyperframes",
      "deploy": ["phone", "pc"],
      "title": "写一段 HTML 直接渲染成 MP4 视频，专给 AI/agent 用的视频生成工具",
      "lang": "TypeScript",
      "stars": "64,556",
      "week": "5,318",
      "body": "HyperFrames 能把 HTML、CSS 和动画按时间轴渲染成一个确定的 MP4 视频文件，官方说法是「写 HTML，出视频，为 agent 而生」。本地渲染是开源免费的，不按次收费；官方另外还提供云端渲染服务，这部分的条件和费用 README 没细说。",
      "explain": "平时录屏是把屏幕上发生的东西「录下来」，这个是反过来——用代码指定好每一帧、每个时间点该显示什么，程序直接把它算成一段视频，不用真的操作一遍再录。",
      "opinion": "可以拿来给自己做的小工具、游戏录一段效果演示视频，不用开录屏软件对着屏幕操作，直接用代码控制时间轴更精确；也适合纯娱乐，做点动画小视频玩玩。📱 手机上：靠 Node 和 FFmpeg 跑，都是现成能装的包，不用编译原生库，Termux 大概率能跑起来。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "steps": [
            { "text": "（手机）先装渲染要用的 FFmpeg：", "code": "pkg install ffmpeg" },
            { "text": "初始化一个项目：", "code": "npx hyperframes init my-video" },
            { "text": "进项目目录，本地预览：", "code": "cd my-video\nnpx hyperframes preview" },
            { "text": "渲染成 MP4：", "code": "npx hyperframes render" }
          ],
          "done": "my-video 目录下出现一个 .mp4 文件，能打开播放，就算成功了"
        }
      ],
      "url": "https://github.com/heygen-com/hyperframes"
    }
  ]
};
