DAILY_DATA["github/2026-10-19"] = {
  "date": "2026-10-19",
  "highlight": "今天最值得动手试的是 context-mode——给 Claude Code 装一个「省上下文+记会话记忆」的插件，一分钟装完，写代码写久了被强制 `/compact` 的毛病能直接缓解。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "mksglu/context-mode",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 省上下文、记会话记忆的插件",
      "stars": "30,755",
      "week": "4,138",
      "body": "它给 Claude Code 之类的编程 AI 助手加一层「上下文管理」：工具调用的结果先在旁路处理一下，只把有用的摘要塞进对话里，官方说能把原本要占掉上下文的内容砍掉 98%。对话被强制 `/compact` 压缩、甚至清空重开之后，它还能用本地存的记录把你之前在改哪个文件、做到哪一步找回来。现在支持 Claude Code、Codex、Cursor 等十几种编码 Agent 工具，接入方式是 MCP 加 hooks。",
      "explain": "MCP 是让 AI 工具和外部数据、外部功能对接的通用协议；hooks（钩子）相当于在 Claude Code 执行一个动作的前后，插一段自己的逻辑进去。上下文窗口就是 AI 一次能记住的对话长度，用满了就会被强制 `/compact`，细节丢了对话就容易变傻。",
      "opinion": "如果你经常用 Claude Code 连续写好几个小时，老是被迫 `/compact` 或者对话莫名其妙忘了刚才在改哪个文件，这个能直接缓解。装上花不到一分钟，不喜欢卸掉也不影响原来的用法，值得先试。📱 手机上：装得上，Termux 里的 Node v26 够新，会走内置的 `node:sqlite`，不用编译原生模块。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "直接在 Claude Code 里装，手机和电脑操作完全一样。",
          "steps": [
            { "text": "在 Claude Code 对话里加插件市场：", "code": "/plugin marketplace add mksglu/context-mode" },
            { "text": "装插件：", "code": "/plugin install context-mode@context-mode", "after": "如果提示要编译 `better-sqlite3`，说明 Node 版本太老，升级到 22.5 以上就不会走编译这一步了。" },
            { "text": "装完在对话里跑一下体检命令（直接打字，不是终端命令）：", "code": "/context-mode:ctx-doctor" }
          ],
          "done": "跑 `/context-mode:ctx-stats` 能看到省了多少 token，就是装成功了。"
        }
      ],
      "url": "https://github.com/mksglu/context-mode"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "deploy": ["phone", "pc"],
      "title": "嗅探网页里的视频/音频资源，一键下载",
      "stars": "22,355",
      "today": "18",
      "body": "浏览器扩展，打开任何网页后会自动扫一遍这个页面加载过的媒体资源（视频、音频、图片等），列成清单，点一下就能下载或复制直链。数据都存在本地，不用登录、不用联网核对身份。作者写明是给下载「自己有权下载的视频」用的。",
      "explain": "浏览器扩展就是给浏览器加的一个小插件，装完会在地址栏旁边多一个图标。它不是去破解视频加密，只是把浏览器本来就已经下载到本地缓存里的那些媒体文件列出来，方便你再存一份到自己的文件夹。",
      "opinion": "整理素材、想把网页上的视频音频存下来做二次处理的时候，这个比到处找在线下载网站靠谱，数据不出本地也比较放心；比专门装一套命令行下载工具也轻。📱 手机上：能用，但只有 Edge 浏览器支持装扩展，用 Chrome 或系统自带浏览器装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 Chrome/Edge/Firefox · 📱 手机 Edge",
          "steps": [
            { "text": "电脑用 Chrome 的，打开商店装：[Cat Catch - Chrome 网上应用店](https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb)" },
            { "text": "电脑用 Edge 的，打开：[Cat Catch - Edge 加载项](https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci)" },
            { "text": "手机上只有 Edge 支持装扩展，打开 Edge 扫这张官方二维码：[安装二维码图片](https://raw.githubusercontent.com/xifangczy/cat-catch/master/README/edgeqrcode.png)" },
            { "text": "用 Firefox 的在[Mozilla 扩展商店](https://addons.mozilla.org/addon/cat-catch/)装", "after": "作者原话是「需非国区IP访问」，打不开就先挂代理。" },
            { "text": "商店都打不开的话，去[Releases 发布页](https://github.com/xifangczy/cat-catch/releases)下 CRX 文件，电脑浏览器扩展管理页开「开发者模式」，把 CRX 文件拖进去装。" }
          ],
          "done": "装完点开扩展图标，播放一个视频页面能看到资源清单刷出来，就是装对了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "📚",
      "repo": "mlabonne/llm-course",
      "deploy": ["read"],
      "title": "系统学 LLM 和 Agent 原理的免费课程",
      "stars": "84,028",
      "today": "81",
      "body": "整理好的免费学习路线，教大语言模型本身怎么跑起来、怎么做检索增强（RAG）、怎么做 Agent、怎么把模型部署上线。大部分是在线笔记本和文章链接，不用下载任何东西。前半部分数学和训练模型相关的内容比较硬核，可以跳过直接看 LLM Engineer 那部分，讲的是实际怎么用、怎么部署模型。",
      "explain": "RAG 的意思是让 AI 回答前先去外部资料库（比如你自己整理的文档）里查一下再回答，这样它就不会瞎编没见过的内容；教程里的 Colab 笔记本是 Google 提供的免费在线 Python 运行环境，打开链接在浏览器里就能跑，不用在自己设备上装任何东西。",
      "opinion": "你平时是在用现成的 API 调模型做工具，这份课程能补的是模型本身怎么跑起来、怎么接外部知识、怎么部署这类你还没碰过的底层概念，当参考书翻就行，不用从头到尾啃。数学和训练那几节看不懂就先跳过，不影响看后面 LLM Engineer 的部分。📱 手机上：能看，纯网页阅读加偶尔点开 Colab 笔记本，手机浏览器就够。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开仓库主页，按目录点开想看的章节：[mlabonne/llm-course](https://github.com/mlabonne/llm-course)" },
            { "text": "想跑代码的章节，点里面的 Colab 链接，会在浏览器里开一个免费的在线笔记本，不用注册付费账号，有 Google 账号登录一下就能跑。" }
          ],
          "done": "能在网页上看到目录和文章链接，点开 Colab 链接能正常打开笔记本，就算看成了。"
        }
      ],
      "url": "https://github.com/mlabonne/llm-course"
    },
    {
      "emoji": "💰",
      "repo": "afadil/wealthfolio",
      "deploy": ["pc"],
      "title": "本地记账+投资记录软件，不用联网也能用",
      "stars": "9,200+",
      "body": "装在电脑上的桌面软件，能记收支、算净资产变化，如果你有股票基金之类的投资还能自动画收益曲线。数据全存在自己电脑本地的文件里，核心功能不用注册账号、不用联网同步，官方说法是永远免费；有个付费的云同步功能是可选的，不装也完全能用。",
      "explain": "净资产就是你名下所有钱和资产加起来，再减掉欠的钱，是看自己整体财务状况最基本的一个数字。这个软件相当于一个本地记账本加投资看板的合体，跟手机银行 App 那种自动读账单的理财 App不是一回事，它不会自动连你的真实银行/券商账户，收支和持仓都要自己手动填或导入。",
      "opinion": "如果你已经在自己做理财记账的小工具，这个可以当参考看它的净资产、支出统计是怎么设计的；如果还没养成记账习惯，装一个练手也行，数据存本地，卸载也不留痕迹。它不会帮你自动连账户，全靠自己维护数据，偷懒不填就没用。📱 手机上：装不了，这是用 Tauri 打包的电脑桌面软件，Termux 跑不了图形界面，只能在 Windows 电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开发布页面，找 Windows 的安装包下载：[Releases 发布页](https://github.com/afadil/wealthfolio/releases/latest)", "after": "文件名里带 setup 或 x64 的就是桌面安装包；打不开页面或下载慢就先开代理。" },
            { "text": "下载完双击安装包，跟着向导装完直接打开，不用注册账号。" }
          ],
          "done": "打开后能看到资产、净资产的仪表盘界面，就是装好了。"
        }
      ],
      "url": "https://github.com/afadil/wealthfolio"
    },
    {
      "emoji": "🛠",
      "repo": "qjfoidnh/BaiduPCS-Go",
      "deploy": ["phone", "pc"],
      "title": "命令行版百度网盘，下载不用开网页版",
      "lang": "Go",
      "stars": "5,800+",
      "body": "命令行工具，装好后像在 Linux 终端里操作百度网盘一样：登录、列目录、下载、上传都是打命令，支持分享链接直接转存。不是百度官方做的，是社区维护的 fork，作者在 Releases 里给了编译好的各平台压缩包，不用自己装编译环境。",
      "explain": "分享链接转存是网盘的一个特性：别人分享给你一个文件，网盘能直接在云端帮你复制一份到自己账号里，不用先下载到本地再重新上传一遍；这个工具能直接用命令操作这个功能。",
      "opinion": "如果你平时经常要从百度网盘下资料（很多教程、素材包都挂在网盘上），命令行下载比网页版经常卡住的下载器靠谱，速度也一般比网页版快。登录要用网页版的 Cookie，不是用户名密码，第一次设置稍微麻烦一点，设置好之后就是一条命令的事。📱 手机上：能装，Releases 发布页直接有编译好的 `linux-arm64` 版本，不用自己在手机上编译。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "两边都是下个压缩包解压就能用，不用额外装运行环境。",
          "steps": [
            { "text": "打开发布页面，手机 Termux 下文件名带 `linux-arm64` 的 zip，电脑 Windows 下带 `windows-amd64` 的 zip：[Releases 发布页](https://github.com/qjfoidnh/BaiduPCS-Go/releases)", "after": "打不开或下载慢就先开代理，具体文件名以页面上实际显示的版本号为准。" },
            { "text": "手机上，zip 一般下到 /sdcard/Download，先让 Termux 能访问手机存储（只用做一次）：", "code": "termux-setup-storage" },
            { "text": "手机上解压并给执行权限：", "code": "cd ~/storage/downloads && unzip BaiduPCS-Go-*-linux-arm64.zip -d ~/BaiduPCS-Go && chmod +x ~/BaiduPCS-Go/BaiduPCS-Go" },
            { "text": "电脑上直接解压，在这个文件夹里打开终端或 PowerShell 用。" },
            { "text": "登录要用 Cookie，不是账号密码：先在浏览器里登录百度网盘网页版，用浏览器开发者工具里的网络面板复制 Cookie，然后跑（电脑上把 ./BaiduPCS-Go 换成 BaiduPCS-Go.exe）：", "code": "./BaiduPCS-Go login -cookies='你复制的Cookie'" },
            { "text": "下载示例，把路径换成你网盘里实际的文件路径：", "code": "./BaiduPCS-Go d /我的资源/文件.mp4" }
          ],
          "done": "跑 `./BaiduPCS-Go` 能看到交互式命令提示符，登录后能列出网盘文件，就是装成功了。"
        }
      ],
      "url": "https://github.com/qjfoidnh/BaiduPCS-Go"
    }
  ]
};
