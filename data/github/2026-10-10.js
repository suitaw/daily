DAILY_DATA["github/2026-10-10"] = {
  "date": "2026-10-10",
  "highlight": "今天最值得先试的是 `alibaba/open-code-review`——接入 Claude Code 当插件，改完代码跑一下就能帮你挑毛病，比自己盯着代码看划算；`BerriAI/litellm` 则是给豆包、DeepSeek 这类多模型调用找个统一入口，电脑上搭一个本地网关就能用，手机 Termux 装不上。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "alibaba/open-code-review",
      "title": "AI 自动审查代码，能接进 Claude Code 当插件",
      "lang": "Go",
      "stars": "45,208",
      "today": "326",
      "body": "阿里开源的命令行代码审查工具，读取 Git diff，调用大模型分析这次改动，直接标出具体哪一行可能有问题（比如空指针、线程安全、SQL 注入这类常见坑），内置多语言规则。除了看改动，`ocr scan` 还能把一整个文件或目录过一遍，适合审查不熟悉的别人代码。它也能作为插件接进 Claude Code、Cursor 等编码工具里，审查时自动触发。",
      "explain": "`diff` 就是这次改动相比上一个版本具体改了哪些行，git 会自动帮你算出来。这个工具做的事，相当于找一个经验丰富的同事，每次改完代码帮你把这份改动单扫一遍，挑出可能有问题的地方。",
      "opinion": "你写单文件 HTML+JS 小工具，平时没有同事帮你审查代码，这类工具可以当一个「免费同事」，改完代码跑一下，能帮你揪出一些自己没留意的坑。它支持配置自定义大模型，国产模型只要提供 OpenAI 兼容的接口地址理论上能接，但官方文档没有点名支持豆包、DeepSeek，具体怎么填需要自己试，填错了会报连不上或认证失败。📱 手机上：Termux 已经装了 Node.js，`npm install` 本身能跑，但安装时会按系统架构下载一个预编译好的二进制程序，Termux 是安卓系统不是标准 Linux，这个二进制不保证能跑起来——如果装完运行 `ocr` 提示「cannot execute binary file」之类的错误，就说明这条路在手机上走不通，换电脑装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证能跑，见上面说明）",
          "intro": "先确认 Termux 已经装好 git（没装就跑 `pkg install git`）。",
          "steps": [
            { "text": "全局安装（会从 GitHub Release 下载二进制，这条命令要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npm install -g @alibaba-group/open-code-review" },
            { "text": "装完验证命令能跑：", "code": "ocr --version" }
          ],
          "done": "能打印出版本号，说明装成功了；如果报错说二进制跑不起来，就是上面说的兼容性问题，换电脑装。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "命令和手机一样去掉代理前缀，下载慢或失败就先开代理软件再试。",
          "steps": [
            { "text": "确认电脑装了 Node.js 14 及以上版本：", "code": "node --version" },
            { "text": "全局安装：", "code": "npm install -g @alibaba-group/open-code-review" },
            { "text": "配置要用的大模型，跟着命令行提示选内置提供商或填自定义的（填豆包、DeepSeek 的 API 地址和 Key 时照各自文档填）：", "code": "ocr config provider" },
            { "text": "选好对应模型：", "code": "ocr config model" },
            { "text": "在你的项目目录里跑一次审查试试：", "code": "ocr review" }
          ],
          "done": "审查完会在命令行按文件、按行列出问题清单（没问题会提示未发现问题），能跑到这一步就是装成功了。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "🤖",
      "repo": "BerriAI/litellm",
      "title": "一个本地网关，统一调用上百种大模型",
      "lang": "Python",
      "stars": "60,659",
      "today": "95",
      "body": "开源 AI 网关，把 OpenAI、Anthropic、Gemini 等上百家大模型的调用方式统一成同一种 OpenAI 格式接口，本来要给每家写一套不同的请求代码，装上它以后统一改成请求本地这一个地址就行。既能当 Python 库直接在代码里用，也能单独跑成一个本地网关服务，还带调用花费统计、限流、多模型负载均衡这些功能。",
      "explain": "`AI 网关` 可以理解成一个「翻译中间人」：你的程序只跟它说话，它再按不同模型各自的格式去转述。`OpenAI 格式` 现在是行业里的事实标准，很多国产大模型（包括豆包、DeepSeek）也兼容这套接口，理论上能通过它们各自提供的兼容地址接进来。",
      "opinion": "你现在写 AI 小工具是在 HTML+JS 里直接调豆包、DeepSeek 的接口，以后想换模型或者同时对比两家效果，每次改前端代码挺麻烦。把 LiteLLM 当网关跑在电脑本地，网页 JS 固定请求本地地址就行，想换哪家模型改网关配置就行，不用动前端代码；但具体怎么填出豆包、DeepSeek 对应的模型名和认证方式，官方文档没有现成的国产模型示例，需要自己照着文档试。📱 手机上：它依赖 `openai` 这个 Python 包，`openai` 又依赖需要编译的 `jiter`，Termux 编译不过，装不上，只能放电脑上跑网关，手机端当普通客户端访问。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "这是跑一个本地网关服务，不是手机能装的东西（原因见上面说明）。",
          "steps": [
            { "text": "确认电脑装了 Python（建议 3.9 及以上）：", "code": "python --version" },
            { "text": "安装带网关功能的版本：", "code": "pip install \"litellm[proxy]\"" },
            { "text": "设置你要用的模型对应的 API Key（下面用 OpenAI 的变量名举例，换成你实际用的豆包、DeepSeek 的 Key 和对应变量名，去对应厂商文档查）：", "code": "$env:OPENAI_API_KEY = \"你的key\"" },
            { "text": "启动网关（下面用 gpt-4o 举例，换成你要用的模型名）：", "code": "litellm --model gpt-4o", "after": "默认跑在 http://localhost:4000，启动后保持这个窗口不要关" },
            { "text": "把你的 HTML+JS 工具里的请求地址换成本地网关地址", "after": "怎么配出豆包、DeepSeek 对应的模型名，官方文档没有现成示例，需要照着 docs.litellm.ai 的配置说明自己试" }
          ],
          "done": "命令行打印出网关启动、监听 4000 端口的提示，浏览器打开 http://localhost:4000 能看到页面，就是跑起来了。"
        }
      ],
      "url": "https://github.com/BerriAI/litellm"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "title": "浏览器扩展，揪出网页里的视频音频资源",
      "lang": "JavaScript",
      "stars": "22,218",
      "today": "18",
      "body": "开源的浏览器资源嗅探扩展，装上后能把当前网页加载的媒体资源列出来，常用来抓网页里的视频、音频直接下载，还带 m3u8、mpd 这类流媒体清单的解析功能。数据都存在本地，不上传到任何服务器，支持 Chrome、Edge（含安卓版）、Firefox。",
      "explain": "`m3u8`、`mpd` 是网页放视频时常用的分片播放列表格式，一个视频会被切成很多小段，普通右键另存经常存不下来，这个扩展能把这些分片列表解析出来，方便整段下载。",
      "opinion": "你平时做 AI 小工具收素材，或者想保存自己有权限用的教学视频、资料视频时，这个比到处搜「网页视频下载」工具靠谱——开源、本地跑、没有广告和跟踪。项目也提醒了，只能用来下载你自己拥有版权或已经获得授权的内容，别拿去下别人的付费内容。📱 手机上：Edge 安卓版支持装这个扩展（扫 README 里的二维码装），其他安卓浏览器不支持装 Chrome 扩展，想在手机上用就用 Edge。",
      "install": [
        {
          "title": "安装步骤 · 浏览器扩展（📱 手机 Edge / 💻 电脑 Chrome、Edge、Firefox）",
          "intro": "按你用的浏览器选一种装法，商店打不开就用离线安装。",
          "steps": [
            { "text": "电脑 Chrome，去 Chrome 应用商店搜索「cat-catch」或「猫抓」安装" },
            { "text": "电脑 Edge，去 Edge 加载项商店搜索安装" },
            { "text": "电脑 Firefox，去 Firefox 附加组件商店安装", "after": "官方说明这个商店页面需要非中国大陆 IP 才能访问" },
            { "text": "手机用 Edge 安卓版，在仓库 README 里扫二维码安装" },
            { "text": "商店都打不开的话，去仓库 Releases 页面下载 crx 文件：", "after": "[github.com/xifangczy/cat-catch/releases](https://github.com/xifangczy/cat-catch/releases)" },
            { "text": "离线安装：浏览器扩展管理页开启「开发者模式」，把下载的 crx 文件直接拖进扩展管理页面" }
          ],
          "done": "浏览器右上角出现猫爪图标，打开一个有视频的网页点一下图标，能看到识别出来的资源列表，就是装成功了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "title": "本地优先的记账软件，数据存自己手里",
      "stars": "29.4k",
      "body": "开源免费的个人理财记账软件，走本地优先的路子——数据先存在自己设备上，官方也提供同步功能，能在多台设备间同步账本。用的是`信封预算法`的思路，记账和预算管理一起做。除了自己用 Docker 自建同步服务，官方也直接提供 Windows、Mac、Linux 的桌面安装包，不自建也能用。",
      "explain": "`本地优先`意思是数据首先存在你自己的设备上，不是必须先传到别人服务器才能用。`信封预算法`是一种经典记账思路：把每月收入提前分到「吃饭」「交通」这类几个虚拟信封里，花一笔就从对应信封里扣，花超了一眼就能看出来。",
      "opinion": "你正在学理财入门，记账是基础的第一步，这个比随手下一个国内记账 App 多了「数据不强制传云端」这个优点，适合想摸一摸预算管理方法的人。官方也有收费的托管同步版本（一个月一两美元），自己记账量不大的话用免费桌面版就够。📱 手机上：官方给的是 Windows/Mac/Linux 桌面安装包，不是安卓 App；网上有第三方资料提到有安卓客户端，但没能在官方资料里确认，不确定能不能用，建议先在电脑上用，手机端先别指望。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "装的是桌面版，不用自己搭服务器，本地记账就能用。",
          "steps": [
            { "text": "去 Microsoft Store 搜索「Actual Budget」安装，或直接打开商店链接：", "after": "[apps.microsoft.com](https://apps.microsoft.com/detail/9p2hmlhsdbrm)" },
            { "text": "安装完打开应用，选择创建一个新的本地账本（不用注册账号、不用联网）" }
          ],
          "done": "打开后能看到账户、预算这些页面，建好一个账本就是装成功了。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "title": "科技爱好者周刊，每周五更新",
      "stars": "105,575",
      "today": "143",
      "body": "阮一峰维护的中文科技周刊，每周五发布一期，汇总当周值得一看的科技新闻、工具、文章、教程。已经出到第 414 期，从 2018 年至今没断更，每期内容就是一份 Markdown 文件，点开就能看，也能在 GitHub 上翻历史期数。",
      "explain": "`周刊`这种形式，就是每周筛一遍该领域值得看的东西打包给你，比自己满世界刷信息省时间，内容涵盖开发工具、好文章、小众网站等，不只是严肃新闻。",
      "opinion": "你自学 Python、电工、理财这些杂学科，经常需要知道外面有什么新工具新资源，这份周刊每期都会夹带一些效率工具、学习资源、冷门网站推荐，扫一眼目录挑感兴趣的点开看就行，不用每期全看。📱 手机上：纯文字内容，手机浏览器直接打开就能读，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接在 GitHub 上看最新一期：", "after": "[docs/issue-414.md](https://github.com/ruanyf/weekly/blob/master/docs/issue-414.md)" },
            { "text": "想翻历史期数，去仓库首页的期刊列表找：", "after": "[github.com/ruanyf/weekly](https://github.com/ruanyf/weekly)" }
          ],
          "done": "打开能看到当期的新闻、工具、文章列表，就是找对地方了。"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "title": "每月一期，推荐适合新手的开源项目",
      "lang": "Python",
      "stars": "180,911",
      "today": "283",
      "body": "中文开源项目推荐月刊，每月 28 号更新，专门挑有趣、入门级的开源项目来介绍，也会收一些开源书籍、实战项目。已经出到第 126 期，内容就是仓库里的 Markdown 文件，也有官网和微信公众号两种阅读渠道。",
      "explain": "这类月刊的作用，是帮你在海量开源项目里先筛一遍「新手友好」的那部分，省得自己瞎找踩坑。",
      "opinion": "你现在在学 Python，也在自己做些小工具，这份月刊里经常会夹带入门级的 Python 项目和实战小项目，顺手翻一翻能发现一些以前没听过的东西，练手素材不缺。不用每期都看，挑自己感兴趣的分类扫一眼就行。📱 手机上：纯文字内容，手机浏览器打开官网或 GitHub 就能看，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "在 GitHub 上看最新一期：", "after": "[content/HelloGitHub126.md](https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub126.md)" },
            { "text": "阅读体验更好的话，去官网看：", "after": "[hellogithub.com](https://hellogithub.com)" }
          ],
          "done": "打开能看到分类列出的项目介绍列表，就是找对地方了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    }
  ]
};
