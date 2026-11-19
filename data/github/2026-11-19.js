DAILY_DATA["github/2026-11-19"] = {
  "date": "2026-11-19",
  "highlight": "今天最值得先装的是 `astral-sh/uv`——一个 Python 包管理工具，能顶 pip/venv/poetry 好几个工具的活，Termux 和电脑上都是一条命令装完，正在学 Python 用这个从头建立习惯比后面东拼西凑省心。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "astral-sh/uv",
      "deploy": ["phone", "pc"],
      "title": "更快的 Python 包管理工具",
      "lang": "Rust",
      "stars": "92,230",
      "today": "258",
      "body": "这是用 Rust 写的 Python 包管理工具，一个程序能顶 pip、pipx、venv、poetry、pyenv 好几个工具的活：装 Python 版本、建虚拟环境、管理项目依赖、直接跑带依赖声明的单文件脚本都行。官方自己给了编译好的程序，不用自己装 Rust 编译器。这几天登上热榜应该是出了新版本，更新速度一直很快。",
      "explain": "`pip`/`venv` 是 Python 自带的装包、建独立环境工具，`uv` 把这几件事合到一个程序里，用法更接近，也快很多；虽然 uv 本身是用 Rust 写的，但官方发布的是编译好的二进制文件，装的时候不用自己装 Rust 编译器，Termux 直接走包管理器装的也是现成的。",
      "opinion": "正在学 Python，迟早要用到装包、建虚拟环境这些操作，用 uv 从一开始就学会用一个工具搞定，比后面东换一个西换一个省心；而且它跑单文件脚本能自动按脚本顶部声明的依赖临时建环境，正好配单文件小工具的习惯。📱 手机上：Termux 自带的软件源里直接有现成的 uv 包，一条 `pkg install uv` 就能装，不用编译任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "直接用 Termux 自带源安装：", "code": "pkg install uv" },
            { "text": "确认装好：", "code": "uv --version" }
          ],
          "done": "能打印出版本号，就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows PowerShell）",
          "steps": [
            { "text": "打开 PowerShell，运行官方安装脚本：", "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"", "after": "下载慢或失败就先开代理。" },
            { "text": "确认装好：", "code": "uv --version" }
          ],
          "done": "能打印出版本号，就是装好了。"
        }
      ],
      "url": "https://github.com/astral-sh/uv"
    },
    {
      "emoji": "📚",
      "repo": "punkpeye/awesome-mcp-servers",
      "deploy": ["read"],
      "title": "汇总各种 MCP 服务器的清单",
      "stars": "98,022",
      "today": "53",
      "body": "这是一份社区维护的 MCP 服务器大全，按功能分了文件系统、数据库、浏览器自动化、云平台、金融、安全等大概 50 个类别，每个类别下面列了现成能用的 MCP 服务器项目，还标了是哪种语言写的、官方出的还是社区做的、支持哪些系统。想找某类功能有没有现成的 MCP 服务器，翻这份清单比自己满世界搜靠谱。",
      "explain": "MCP 是一套让 AI 能连接各种外部工具和数据的通用接口标准，装一个符合这个标准的「服务器」，AI 就能直接用它提供的能力（比如操作浏览器、查数据库），不用每次都单独写对接代码；清单里的 🐍🦀📇 这些图标是在标这个服务器是用 Python / Rust / TypeScript 写的，☁️🏠 是标它是跑在云上还是本地。",
      "opinion": "平时做 AI 工具和 Agent 要是正好需要某个外部能力（比如操作浏览器、连某个数据库），先来这份清单翻一下有没有现成的 MCP 服务器能直接用，比自己从头写省不少事；缺点是这种大杂烩清单质量参差不齐，具体用哪个还是得点进项目自己看一眼活跃度和文档全不全。📱 手机上：这就是一份网页文档，手机浏览器直接打开看就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库主页：[punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)，用网页自带的搜索（电脑 Ctrl+F / 手机浏览器的页内搜索）找关键词，或者顺着目录翻到想要的分类，比如「Browser Automation」「File Systems」。" },
            { "text": "想找中文版可以翻 README 顶部的语言切换链接。" }
          ],
          "done": "能打开页面、按分类看到一串项目链接，就是能正常用。"
        }
      ],
      "url": "https://github.com/punkpeye/awesome-mcp-servers"
    },
    {
      "emoji": "🛠",
      "repo": "wanglin2/mind-map",
      "deploy": ["phone", "pc"],
      "title": "开源免费的思维导图工具",
      "lang": "JavaScript",
      "stars": "13,000+",
      "body": "这是一个开源免费的思维导图工具，有网页在线版可以直接用，也能自己把代码拉下来自己搭一份，另外官方还单独做了一个桌面客户端（这部分代码不开源，但官方免费提供下载），支持 Windows/Mac/Linux。它底层的核心库不依赖任何前端框架，也有 Obsidian、uTools 这些软件的插件版本。",
      "explain": "思维导图就是那种从一个中心主题往外一层层发散的树状笔记，适合拆解一个大主题或者理一条学习路线；`Obsidian` 是一款常见的笔记软件，`uTools` 是一个桌面效率启动器，提到它们是因为这个项目给这两个软件各做了一个插件，不用也完全不影响用网页版或桌面版。",
      "opinion": "学 Python、电工、理财这种一章一节往下学的内容，拿思维导图理一下知识点之间的关系、列个复习路线会比纯文字笔记直观；在线版打开就能用，不用折腾账号和安装，想要数据存在自己手里也可以下载桌面版。📱 手机上：网页版是纯前端工具，手机浏览器打开就能用，不用装任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（网页版，不用装任何东西）",
          "steps": [
            { "text": "手机或电脑浏览器直接打开在线版：[web.sxmind.cn](https://web.sxmind.cn/)，就能直接开始画。" }
          ],
          "done": "打开网页能看到空白的思维导图画布，就是能正常用。"
        },
        {
          "title": "安装步骤 · 💻 电脑（可选，官方桌面客户端）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/wanglin2/mind-map/releases) 找 Windows 对应的安装包下载。", "after": "桌面客户端这部分代码不开源，是作者单独做的，但官方免费提供下载。" }
          ],
          "done": "装完打开能看到软件界面，就是装好了。"
        }
      ],
      "url": "https://github.com/wanglin2/mind-map"
    },
    {
      "emoji": "🎨",
      "repo": "maotoumao/MusicFree",
      "deploy": ["phone"],
      "title": "插件化、无广告的安卓音乐播放器",
      "lang": "TypeScript",
      "stars": "28,679",
      "today": "38",
      "body": "这是一个安卓（以及 HarmonyOS）上的音乐播放器，本身不内置任何音源，功能全靠装「插件」实现：装哪个插件就能搜哪个平台的歌、放哪个平台的歌，换源、换皮肤都靠插件和主题包，整个 App 不带广告。作者特别说明了应用商店里那些收费版、破解版跟官方项目没关系。",
      "explain": "这里的「插件」是指别人做好、单独发布的一个小配置文件，添加进 App 里就能多出一个音源或者一套皮肤，不是要单独去应用商店装别的软件；具体能搜到什么歌，取决于装了哪个音源插件，插件来源良莠不齐，自己判断要不要用。",
      "opinion": "纯粹是个放松用的娱乐工具，跟做 AI 工具、学 Python/电工/理财都没关系，想换一个干净没广告的播放器可以试试；提醒一句，音源插件抓来的歌曲版权来源说不清楚，别拿来做商用或者大量分享。📱 手机上：有官方编译好的 APK，Android 上直接下载安装就行，不用 Termux 也不用电脑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Android（APK）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/maotoumao/MusicFree/releases) 找最新版本，展开 Assets 下载文件名以 `.apk` 结尾的安装包。", "after": "安装时系统可能提示「未知来源」，手动允许一下就行。" },
            { "text": "打开 App，去「插件」页面添加一个音源插件（订阅链接），装完插件才能搜到歌，App 本身不带任何音源。" }
          ],
          "done": "装完插件后搜索能出歌、能正常播放，就是装好了。"
        }
      ],
      "url": "https://github.com/maotoumao/MusicFree"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "deploy": ["phone", "pc"],
      "title": "本地优先的预算记账工具",
      "stars": "30,300+",
      "body": "这是一个本地优先的个人预算记账工具，走的是「信封预算法」——先把每笔收入提前分配到不同用途的格子里，花钱时对着格子记账，比单纯事后统计更帮着控制花销。免费开源，对标的是国外一款同类付费软件；有纯浏览器版、Windows/Mac/Linux 桌面版，也能自己搭服务器做多设备同步，不连接银行、不做任何自动交易。",
      "explain": "「本地优先」是说数据先存在自己的设备或浏览器里，不是一上来就传到别人的服务器，想同步到别的设备再自己选择要不要搭一个同步服务器；「信封预算法」说白了就是先把钱分好类再花，而不是花完了才看花哪儿去了。",
      "opinion": "学理财入门，比起直接上手复杂的复式记账工具，从这种按用途先分钱再花的记账方式练起更容易建立习惯；纯粹是记账和预算工具，不涉及任何投资建议或自动交易，数据存在本地也不用担心账户安全问题。📱 手机上：有纯浏览器版，手机浏览器打开就能用，不过数据只存在当前这个浏览器里，换手机、清缓存都会丢，适合先体验，长期用建议装电脑版。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（浏览器版，不用装，但数据只存本机浏览器里）",
          "steps": [
            { "text": "手机浏览器打开 [app.actualbudget.org](https://app.actualbudget.org/)，跟着提示新建一个预算文件。" }
          ],
          "done": "能看到预算面板，就是能正常用；想多设备同步要自己搭同步服务器，不是必须。"
        },
        {
          "title": "安装步骤 · 💻 电脑（桌面版，长期用推荐这个）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/actualbudget/actual/releases) 或官网 [actualbudget.org](https://actualbudget.org)，下载 Windows 对应的安装包。" },
            { "text": "装完打开软件，跟着提示新建一个预算文件。" }
          ],
          "done": "能看到预算面板、可以添加账户和交易，就是装好了。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "🤖",
      "repo": "appwrite/appwrite",
      "deploy": ["cloud"],
      "title": "不用自己搭的后端服务平台",
      "lang": "TypeScript",
      "stars": "58,236",
      "today": "232",
      "body": "这是一个开源的后端服务平台，把登录注册、数据库、文件存储、云函数这些常见的后端功能都打包好了，自己有免费的云托管版本可以直接用，也能自己用 Docker 搭一份自托管。官方这次把自己重新定位成「给 agent 和 MCP 用的平台」，专门留了 MCP 接口，方便 AI agent 直接调用这些后端能力。",
      "explain": "写的单文件 HTML 小工具调 AI API 可以直接从浏览器发请求，但要是想加「登录」「记住每个用户自己的数据」这类功能，就得有个地方存数据、认身份，这部分通常叫「后端」，得自己写服务器代码或者租一个现成的；Appwrite 提供的就是这部分现成能力，不用自己从零写服务器。",
      "opinion": "以后要是哪个单文件小工具想加登录、存用户数据这类功能，不用自己写服务器和数据库，直接注册 Appwrite 云端免费版，在 HTML 里加一行 script 引入它的 SDK 就能调用，正好配不用框架、不用构建工具这个写法习惯；免费版有用量限制，个人小工具一般用不到付费档。📱 手机上：整个过程只是在网页上注册、HTML 里加一行 script，手机和电脑都一样，没有「安装」这一步。",
      "install": [
        {
          "title": "安装步骤 · ☁️ 用 Appwrite Cloud 免费版（不用自己搭服务器）",
          "steps": [
            { "text": "打开 [cloud.appwrite.io](https://cloud.appwrite.io) 用邮箱注册一个免费账号。" },
            { "text": "注册后新建一个 Project，记下左侧的 Project ID 和右上角显示的 API Endpoint（形如 https://xxx.cloud.appwrite.io/v1）。" },
            { "text": "在自己的 HTML 文件里用 CDN 引入 SDK：", "code": "<script src=\"https://cdn.jsdelivr.net/npm/appwrite@29.3.1\"></script>" },
            { "text": "初始化客户端：", "code": "const { Client, Account } = Appwrite;\nconst client = new Client().setEndpoint('你的 Endpoint').setProject('你的 Project ID');", "after": "后面要用登录、数据库这些功能，再翻官方文档 appwrite.io/docs 对照 SDK 方法调。" }
          ],
          "done": "Project 后台能看到自己建的项目，浏览器控制台调用 SDK 没报错，就是接通了。"
        }
      ],
      "url": "https://github.com/appwrite/appwrite"
    }
  ]
};
