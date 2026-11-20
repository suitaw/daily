DAILY_DATA["github/2026-11-20"] = {
  "date": "2026-11-20",
  "highlight": "今天最值得先装的是 `cathrynlavery/diagram-design`——给 Claude Code 装上这个技能，直接用中文说一句话就能生成单文件 HTML 架构图/流程图，跟你现在写工具的路子（无框架、单文件）完全对得上，装起来也就一条命令。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "cathrynlavery/diagram-design",
      "deploy": ["phone", "pc"],
      "title": "让 AI 直接画出单文件 HTML 架构图",
      "lang": "HTML",
      "stars": "68,628",
      "today": "271",
      "body": "给 Claude Code 等 AI 编程助手装的一个「画图技能」，今天在 GitHub 全站当日涨星榜排第 9。装上之后直接用中文说要画什么图（架构图、流程图、思维导图这类），它就生成一个单文件 HTML+SVG，不用额外的图片或脚本，双击就能打开看，还支持浅色/深色两套配色。",
      "explain": "Agent Skill 可以理解成给 AI 编程助手装的一个「专业技能插件」，装上之后它就多会一门手艺——这里是「画图」。SVG 是用代码描述出来的矢量图，缩放不会糊，跟写网页用的 HTML、JS 是同一路的东西，这也是为什么生成的图能做成单文件直接打开。",
      "opinion": "你现在做的工具都是单文件 HTML，这个技能生成的东西刚好是同一路数，不用额外搭网页也不用装图片工具；写文档、画个项目架构图或者理思路的流程图，直接跟 Claude Code 说一句话就行，比自己手搭图省事很多。📱 手机上：能装，Termux 里的 Claude Code 装法跟电脑一样，就是手机屏幕小，看复杂的图不如电脑舒服。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "给 Claude Code 装上这个画图技能（这条要连 GitHub，记得加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add cathrynlavery/diagram-design" },
            { "text": "装完之后直接在 Claude Code 里用中文说要画什么图（比如「帮我画一个这个项目的架构图」），它会生成一个单文件 HTML+SVG，用浏览器打开就能看。" }
          ],
          "done": "能生成出 HTML 图表文件，浏览器打开能看到图，就是装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在 Claude Code 所在的终端运行：", "code": "npx skills add cathrynlavery/diagram-design", "after": "下载慢或失败就先开代理再试。" },
            { "text": "同手机，直接跟 Claude Code 说要画什么图就行。" }
          ],
          "done": "能生成出 HTML 图表文件，浏览器打开能看到图，就是装成功了。"
        }
      ],
      "url": "https://github.com/cathrynlavery/diagram-design"
    },
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "deploy": ["pc", "cloud"],
      "title": "能接微信、支持国产大模型的开源AI助手",
      "lang": "Python",
      "stars": "48,011",
      "today": "24",
      "body": "一个能 24 小时挂在后台的开源个人 AI 助手框架，前身是老牌项目 chatgpt-on-wechat。支持微信、Telegram、Discord、Slack、飞书、钉钉等多个聊天渠道接入，自带网页控制台；模型这块直接支持 DeepSeek、豆包、Qwen、GLM 等国产模型，也支持 OpenAI、Claude，还能接自定义 API 地址。",
      "explain": "多渠道接入的意思是同一个助手可以同时挂在微信、Telegram 这些不同聊天工具上，想在哪个 App 里找它都行，不用各写一套对接代码；网页控制台就是打开浏览器填配置、看对话记录的那个管理页面，不用改配置文件。",
      "opinion": "直接支持豆包、DeepSeek，省了自己从零搭 Agent 框架接国产模型的功夫，适合拿来当「能用的半成品」改成自己的小助手，比如挂在微信上做个提醒/问答机器人。装在电脑或云服务器上，装好就能长期挂着，不用自己再搭一套对话循环和渠道接入代码。📱 手机上：不建议，官方脚本会装一堆依赖包（比如 numpy），Termux 上大概率装不全，建议放电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 PowerShell，运行官方一键安装脚本：", "code": "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex", "after": "脚本会自动装好环境并启动服务，不保证一次成功；报错的话看它打印的提示处理，常见是端口被占用。" },
            { "text": "装完打开浏览器访问 http://localhost:9899 ，进到网页控制台，在模型设置里填入豆包/DeepSeek 等的 API Key。" }
          ],
          "done": "能打开网页控制台就是装好了；配好 API Key 后能在控制台或接入的 IM（微信、Telegram 等）里跟它对话。"
        },
        {
          "title": "安装步骤 · ☁️ 云服务器 / 电脑（Linux，命令相同）",
          "steps": [
            { "text": "SSH 进服务器（或打开电脑终端），运行官方一键安装脚本：", "code": "bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)", "after": "脚本会自动装好环境并启动服务，不保证一次成功，报错看提示处理。" },
            { "text": "装完打开浏览器访问 http://服务器IP:9899（本机就是 http://localhost:9899），在网页控制台里填入豆包/DeepSeek 等的 API Key。" }
          ],
          "done": "能打开网页控制台就是装好了；配好 API Key 后能在控制台或接入的 IM 里跟它对话。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🛠",
      "repo": "XIU2/CloudflareSpeedTest",
      "deploy": ["phone", "pc"],
      "title": "测出访问最快的 Cloudflare 节点 IP",
      "lang": "Go",
      "stars": "30,079",
      "today": "34",
      "body": "一个命令行小工具，测试一批 Cloudflare 的 IP 延迟和下载速度，把最快的几个挑出来存成表格，支持 IPv4 和 IPv6，也能测别的走多 IP 的网站。是个单文件程序，下载下来直接能跑，不用装额外环境。",
      "explain": "Cloudflare 是很多网站用的全球加速服务（CDN），同一个网站在不同地区可能对应不同的服务器 IP，有的快有的慢，这个工具就是帮你从里面挑出离你最近/最快的那个。",
      "opinion": "如果你自己搭的网站或用的某个服务是走 Cloudflare 的，这个能帮你挑个更快的 IP；要是你的网络问题已经靠代理解决得差不多了，这个工具用处有限，可以先不装。它就是个单文件程序，命令简单，几乎没门槛。📱 手机上：能装，GitHub Releases 里直接有 Termux 能跑的 arm64 版本，解压加个执行权限就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "建一个文件夹并进入：", "code": "mkdir cfst && cd cfst" },
            { "text": "下载 Termux 用的 arm64 版本（这条要连 GitHub，记得加代理）：", "code": "https_proxy=http://127.0.0.1:7890 wget -N https://github.com/XIU2/CloudflareSpeedTest/releases/latest/download/cfst_linux_arm64.tar.gz" },
            { "text": "解压并给执行权限：", "code": "tar -zxf cfst_linux_arm64.tar.gz && chmod +x cfst" },
            { "text": "运行测速（只留延迟 200ms 以内的，下载测试取最快的 20 个）：", "code": "./cfst -tl 200 -dn 20" }
          ],
          "done": "跑完会在当前目录生成 result.csv，列出延迟和速度最快的几个 IP，这就是测好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/XIU2/CloudflareSpeedTest/releases/latest)，下载 `cfst_windows_amd64.zip`。", "after": "下载慢或失败就先开代理。" },
            { "text": "解压后双击 `cfst.exe` 跑一次默认测速；想加参数就在命令行里运行，比如 `cfst.exe -tl 200 -dn 20`。" }
          ],
          "done": "跑完会在同目录生成 result.csv，列出最快的几个 IP。"
        }
      ],
      "url": "https://github.com/XIU2/CloudflareSpeedTest"
    },
    {
      "emoji": "🤖",
      "repo": "firecrawl/firecrawl",
      "deploy": ["pc"],
      "title": "把网页抓成干净文本喂给 AI 用",
      "lang": "TypeScript",
      "stars": "204,217",
      "today": "825",
      "body": "一个专门给 AI 用的网页抓取工具：把网页转成干净的 markdown 文本、爬一整个网站的页面，甚至能当搜索引擎用，一个接口全搞定。有自己的云端服务，也能自己在本地跑一个轻量版本（Firecrawl Local），不用数据库也不用 Docker。",
      "explain": "爬网站/抓网页说白了就是自动把一堆网页下载下来整理成干净的文字，省得手动复制粘贴；这对需要拿「最新网页内容」当素材喂给大模型回答问题的工具特别有用，比如自己做的小工具想读一篇文章再帮忙总结。",
      "opinion": "做 Agent、做能查资料的小工具时，经常要把网页内容塞进提示词里，这个工具专门干这件事，比自己写爬虫省心；云端版免费额度每月 1000 次调用不用注册就能用，本地版 Firecrawl Local 不用数据库和 Docker，只是得先装 Rust 工具链。不是每个项目都用得上，但要做「能联网查资料」的 Agent 时很值得备一个。📱 手机上：装不了，本地版要用 Rust 编译工具链，Termux 里编不了，建议放电脑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "没装过 Rust 的话，先去 [rustup.rs](https://rustup.rs) 下载安装器，跟着默认选项装好 Rust 工具链。" },
            { "text": "用 cargo 装 Firecrawl Local：", "code": "cargo install firecrawl-local" },
            { "text": "试着把一个网页抓成 markdown：", "code": "firecrawl-local scrape https://example.com --markdown" },
            { "text": "要当成本地服务一直跑、给自己的脚本调用：", "code": "firecrawl-local serve", "after": "默认跑在 3002 端口，自己脚本里请求 http://localhost:3002 就行，这一步不用 API Key。" }
          ],
          "done": "scrape 命令能输出网页内容的 markdown 文本，就是装成功了。"
        }
      ],
      "url": "https://github.com/firecrawl/firecrawl"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "deploy": ["read"],
      "title": "动画图解的数据结构与算法免费教程",
      "stars": "132,471",
      "today": "38",
      "body": "一本开源免费的数据结构与算法教程，配动画图解，代码覆盖 Python、Java、C++ 等十几种语言，每个知识点都能直接跑代码看效果，有在线网页版，也能去 Releases 页面下 PDF/EPUB 离线看。",
      "explain": "数据结构和算法是编程里比较基础但抽象的部分——比如「怎么把一堆数据排好序」「怎么快速找到想要的东西」，这本书用动画把这些抽象过程画出来，比单看文字代码好懂。",
      "opinion": "入门 Python 到一定阶段，迟早会碰到排序、查找这类基础内容，这本书用 Python 版代码讲得很直观，可以当课外补充材料跳着看，不用从头啃到尾；完全免费，不用装任何东西。📱 手机上：能看，就是个网页，手机浏览器直接打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开 [hello-algo.com](https://www.hello-algo.com) 看，左侧目录挑章节，每节代码默认支持多语言切换，选 Python 版看就行。" },
            { "text": "想离线看可以去 [Releases 页面](https://github.com/krahets/hello-algo/releases) 下 PDF 或 EPUB。" }
          ],
          "done": "打开网页能看到带动画图解的章节目录，就能开始看了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "🎨",
      "repo": "zhouxiaoka/autoclip",
      "deploy": ["pc"],
      "title": "AI 自动把长视频剪成带字幕短视频",
      "lang": "Python",
      "stars": "11,214",
      "today": "126",
      "body": "一个开源的视频剪辑工具，输入一段长视频（播客、讲座、采访之类），自动挑出适合做短视频的片段，配上字幕、封面图和发布文案，支持抖音、小红书、B站、YouTube Shorts 等平台格式。Windows 有现成的安装包，里面已经打包了 Python 和 FFmpeg，不用自己额外装。",
      "explain": "FFmpeg 是处理视频剪辑、转格式最常用的一个底层工具，很多视频软件背后都在用它，这里已经打包进安装包，不用额外装。",
      "opinion": "如果你平时有录自己讲解、复盘之类的长视频想剪成短视频发出去，这个能省掉手动找片段、加字幕的功夫；内容分析这步可以填 DeepSeek/豆包这类 OpenAI 兼容的 API Key（填 Base URL）用云端分析，不填也能用本地模型，但本地模型在普通电脑上可能比较慢。📱 手机上：装不了，只有 Windows 桌面安装包，Termux 跑不了这种带界面的程序。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/zhouxiaoka/autoclip/releases)，下载 Windows 安装包（文件名类似 `...-setup.exe`）。", "after": "下载慢或失败就先开代理。" },
            { "text": "双击安装；如果 Windows 弹出安全提示，点「更多信息」→「仍要运行」。" },
            { "text": "打开软件导入视频，内容分析这步可以填 DeepSeek/豆包这类 OpenAI 兼容的 API Key 用云端分析，不填也能用本地模型。" }
          ],
          "done": "软件界面能正常打开、导入视频后能开始分析，就是装好了。"
        }
      ],
      "url": "https://github.com/zhouxiaoka/autoclip"
    }
  ]
};
