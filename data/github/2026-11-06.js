DAILY_DATA["github/2026-11-06"] = {
  "date": "2026-11-06",
  "highlight": "今日看点：Umi-OCR 这类离线免费 OCR 能把扫描版 PDF 直接转成能复制、能搜索的文字版，不用联网、不用 API key，手上有扫描版资料的话最值得先试这个。",
  "items": [
    {
      "emoji": "📚",
      "repo": "hiroi-sora/Umi-OCR",
      "deploy": ["pc"],
      "title": "免费离线 OCR，扫描版 PDF 也能转文字",
      "stars": "48,500+",
      "body": "Umi-OCR 是一款免费开源的离线文字识别软件，不用联网、不用 API key，截图或导入图片/PDF 就能把里面的文字识别出来，还能直接把扫描版 PDF 转成能复制、能搜索的双层 PDF。支持批量识别、忽略水印/页眉页脚区域，还能识别二维码和条形码。目前官方只提供 Windows 和 Linux 电脑版。",
      "explain": "「扫描版 PDF」本质上是一张张图片拼起来的，不是打出来的文字，所以没法直接复制里面的字，要靠 OCR 认出字来才能复制、搜索。「双层 PDF」就是原图不变，背后偷偷加一层识别出来的文字，看起来还是原来的样子，但能复制能搜索了。",
      "opinion": "如果手上有扫描版的教材或资料想摘抄、做笔记，这个能直接把整本 PDF 转成能复制文字的版本，而且全程离线免费，不用担心隐私和联网限制。装好后先拿一两页试试识别准确率，中文印刷体一般没问题，手写字和排版复杂的页面可能需要手动校对。📱 手机上：用不了——官方只出了 Windows 和 Linux 电脑版，扫描件建议传到电脑上处理。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [GitHub Releases 页面](https://github.com/hiroi-sora/Umi-OCR/releases/latest) 下载对应的 `.7z` 或 `.7z.exe` 压缩包（国内下载慢可以用 [蓝奏云](https://hiroi-sora.lanzoul.com/s/umi-ocr) 链接）" },
            { "text": "解压后直接运行里面的 `Umi-OCR.exe`，不用额外安装" },
            { "text": "首次打开选好识别语言（简体中文/英文等），把要识别的图片或 PDF 拖进窗口，或点「批量」导入整份 PDF" }
          ],
          "done": "识别完成后窗口里能看到提取出的文字，导出双层 PDF 后用电脑自带的 PDF 阅读器打开框选试试，能选中文字就是成功了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "deploy": ["phone"],
      "title": "开源记账 App，AI 对话/拍照/语音都能记一笔",
      "lang": "Dart",
      "stars": "2,700+",
      "body": "蜜蜂记账是一款开源记账 App，支持多账本多账户、预算、周期记账、图表统计，还能用 AI 对话、拍照识别支付宝/微信截图、语音记一笔。数据默认存在手机本地，不强制注册账号；想在多设备同步可以选 iCloud、WebDAV（比如群晖、Nextcloud）或 S3 协议的自建存储。",
      "explain": "「WebDAV/S3 协议」都是存文件用的通用协议，很多网盘、自建服务器都支持，这里相当于给了一个「数据自己保管」的同步选项，而不是必须交给某家公司的云。",
      "opinion": "入门学理财最花时间的往往是坚持记账，这个 App 的拍照/语音记账能省掉手动输入的麻烦，而且不用注册账号就能用全部本地功能，隐私上比较放心。AI 记账部分官方说免费，但没写清楚是不是永久免费，用一段时间观察一下就好。📱 手机上：能装——官方直接提供 Android APK，下载安装包点开就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Android",
          "steps": [
            { "text": "打开 [GitHub Releases 最新版本页面](https://github.com/TNT-Likely/BeeCount/releases/latest)，下载 APK 文件" },
            { "text": "打开下载好的 APK 安装，如果提示「未知来源」，在弹窗里允许安装即可" },
            { "text": "也可以在 Google Play 搜「蜜蜂记账」或用包名 `com.tntlikely.beecount` 查找" }
          ],
          "done": "打开 App 看到记账首页、点右下角能新增一笔账，就是装好了，不用注册账号。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    },
    {
      "emoji": "🤖",
      "repo": "garrytan/gstack",
      "deploy": ["pc"],
      "title": "给 Claude Code 装一支虚拟工程团队的技能包",
      "lang": "TypeScript",
      "stars": "139,900+",
      "today": "612",
      "body": "gstack 是一组给 Claude Code 装的技能（斜杠命令），把编码流程拆成需求梳理、设计评审、架构评审、代码审查、QA、发布等阶段，用不同「角色」视角审查你的方案和代码。装好后在 Claude Code 里用 `/office-hours`、`/review`、`/qa`、`/ship` 等命令触发对应角色。今天在 GitHub 趋势榜新增 600 多颗星。",
      "explain": "「斜杠命令」就是在 Claude Code 里打 `/` 加名字就能触发的一套固定流程。这里说的「换角色审查」意思是让 Claude 分别扮演产品经理、测试、发布经理等不同岗位挑你方案的毛病，而不是自己一个人既当产品又当测试。",
      "opinion": "对单人开发者来说，用 `/review` 和 `/qa` 这类命令能在提交前多一道审查，减少上线后才发现的问题；建议先只用这两个命令试试效果，其他角色命令用得上再慢慢加。📱 手机上：不保证——gstack 要求 Bun 运行环境，Termux 上有没有能跑的 Bun 版本不确定，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装 Bun（gstack 要求 1.4.2 及以上版本），在 PowerShell 里执行：", "code": "powershell -c \"irm bun.sh/install.ps1|iex\"" },
            { "text": "克隆 gstack 到 Claude Code 的技能目录并运行安装脚本：", "code": "git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack\ncd ~/.claude/skills/gstack\n./setup", "after": "下载慢或失败就先开代理再试。README 也提到可以把这段命令直接粘贴给 Claude Code，让它代为执行安装。" }
          ],
          "done": "在 Claude Code 里输入 `/office-hours`，如果弹出这个命令的提示而不是「未知命令」，就是装好了。"
        }
      ],
      "url": "https://github.com/garrytan/gstack"
    },
    {
      "emoji": "🤖",
      "repo": "D4Vinci/Scrapling",
      "deploy": ["pc"],
      "title": "一个把爬虫一步做全的 Python 抓取框架",
      "lang": "Python",
      "stars": "98,000+",
      "today": "1,655",
      "body": "Scrapling 是一个 Python 网页抓取库，把发请求、伪装成真实浏览器、从网页里挑数据这几件事都包好了，还自带命令行工具和 MCP 接口方便 AI agent 直接调用。基础版只要 `pip install scrapling` 就能跑最简单的抓取，要用浏览器抓取时再单独装浏览器组件。今天在 GitHub 趋势榜新增 1,655 颗星。",
      "explain": "「MCP」是让 AI 连接外部工具的通用接口，这里相当于给 AI agent 一个「帮我去网页上抄数据」的现成工具。「伪装成真实浏览器抓取」是因为有些网站会检测是不是机器人在访问，这类抓取器会把请求伪装得像人在用浏览器点开页面一样。",
      "opinion": "适合给自己做的 AI 小工具或 Agent 加一个「去网上查/抄数据」的能力，比自己手写请求代码省事；入门先用最基础的 Fetcher 抓纯文字页面就够，浏览器抓取和 MCP 这些进阶功能等用到了再看文档。📱 手机上：不保证——基础库本身是纯 Python，但要用浏览器抓取功能就得装浏览器组件，手机 Termux 上大概率装不上，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "装 Scrapling：", "code": "pip install scrapling" },
            { "text": "（可选，要抓需要真实浏览器才能打开的网页时再装）装浏览器抓取组件：", "code": "pip install \"scrapling[fetchers]\"\nscrapling install", "after": "这一步会下载浏览器，体积较大，下载慢可以先开代理再试。" }
          ],
          "done": "在 Python 里运行 `from scrapling.fetchers import Fetcher; print(Fetcher.get('https://httpbin.org/get').status)`，输出 200 就是装好了。"
        }
      ],
      "url": "https://github.com/D4Vinci/Scrapling"
    },
    {
      "emoji": "🛠",
      "repo": "Usagi-org/ai-goofish-monitor",
      "deploy": ["pc", "cloud"],
      "title": "用 AI 看图自动筛闲鱼商品的监控工具",
      "stars": "17,500+",
      "today": "240",
      "body": "这是一个闲鱼多商品实时监控系统，用 Playwright 控制浏览器盯着搜索结果，发现新商品后交给一个能看图的 AI 模型自动判断是否符合你设的条件，还带网页管理界面，可以管理监控任务、看结果、查日志。支持 Docker 一键部署，默认网页端口是 8000。今天在 GitHub 趋势榜新增 240 颗星。",
      "explain": "这里说的「能看图的 AI 模型」不仅能读文字，还能「看懂」图片，用来帮你判断商品图片是不是你要找的东西。配置里要求的是「OpenAI 兼容接口」——现在不少服务商也支持跟 OpenAI 一样格式的调用方式，理论上能换着接，但没有一一验证过。",
      "opinion": "如果平时会蹲闲鱼捡漏（比如盯某个型号的二手设备），这个能帮你自动盯盘，不用自己天天刷。AI 部分要求一个支持看图的模型并用 OpenAI 兼容接口配置，国内服务商如果提供这种接口、又有看图模型，理论上能接但官方没验证过，需要自己试。📱 手机上：装不了——跑这个需要 Playwright 控制浏览器，还推荐用 Docker，手机 Termux 没有 Docker、也装不了浏览器内核，只能放电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker）",
          "steps": [
            { "text": "克隆仓库并进入目录：", "code": "git clone https://github.com/Usagi-org/ai-goofish-monitor && cd ai-goofish-monitor" },
            { "text": "复制配置文件，然后打开 `.env` 填好你的 AI 服务商 key（需要支持看图的模型）：", "code": "cp .env.example .env" },
            { "text": "用 Docker 启动：", "code": "docker compose up -d" },
            { "text": "看日志确认跑起来了：", "code": "docker compose logs -f app" }
          ],
          "done": "浏览器打开 http://127.0.0.1:8000，能看到登录页（默认账号 admin，密码 admin123，记得改密码）就是装好了。"
        }
      ],
      "url": "https://github.com/Usagi-org/ai-goofish-monitor"
    },
    {
      "emoji": "🛠",
      "repo": "immersive-translate/immersive-translate",
      "deploy": ["phone", "pc"],
      "title": "网页双语对照翻译浏览器扩展",
      "stars": "19,600+",
      "today": "16",
      "body": "沉浸式翻译是一款浏览器扩展，看网页、PDF、字幕、图片里的外语内容时，能在原文旁边直接显示中文翻译，保留原文方便对照着读。支持 Chrome、Edge、Firefox，可以切换不同翻译引擎，也能接入自己的翻译 API。",
      "explain": "「翻译引擎」就是不同公司做的翻译服务，效果和收费不一样，可以在设置里换着试，找到翻译质量合适的那个。",
      "opinion": "平时看英文文档、资料时装一个很省事，不用来回复制粘贴到翻译软件；默认翻译引擎免费就能用，想要更准的效果再去设置里接自己的 API。读技术文档、学英语资料都用得上。📱 手机上：能用——Chrome/Edge 手机版不支持装扩展，但安卓上装 Firefox 浏览器后能通过油猴脚本装上。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Chrome/Edge/Firefox）",
          "steps": [
            { "text": "按你用的浏览器打开对应商店页面安装：[Chrome 网上应用店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)、[Edge 加载项商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)、[Firefox 附加组件商店](https://addons.mozilla.org/firefox/addon/immersive-translate/)", "after": "商店打不开就下载 [zip 安装包](https://download.immersivetranslate.com/latest/chrome-immersive-translate.zip)，解压后在地址栏输入 chrome://extensions，开启「开发者模式」，点「加载已解压的扩展程序」选中解压的文件夹。" }
          ],
          "done": "浏览器右上角出现沉浸式翻译的图标，打开一个外语网页能看到译文出现在原文下方，就是装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机（安卓 Firefox）",
          "steps": [
            { "text": "手机上装 [Firefox for Android](https://www.mozilla.org/firefox/browsers/mobile/android/)" },
            { "text": "在 Firefox 的附加组件推荐里搜索并安装 Tampermonkey（油猴）" },
            { "text": "用 Firefox 打开[脚本安装链接](https://download.immersivetranslate.com/immersive-translate.user.js)，按页面提示安装脚本" }
          ],
          "done": "打开任意网页，页面右侧出现悬浮的沉浸式翻译图标，就是装好了。"
        }
      ],
      "url": "https://github.com/immersive-translate/immersive-translate"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "deploy": ["read"],
      "title": "阮一峰的科技爱好者周刊，每周五更新",
      "stars": "108,000+",
      "today": "83",
      "body": "这是阮一峰维护很多年的技术周刊仓库，每周五整理一期值得读的科技资讯、工具和文章，涵盖编程、AI、硬件、职场观察等话题，纯文字，不用装任何东西，直接在网页上看。",
      "explain": "「周刊」就是固定周期更新的资讯合集，像杂志一样一期一期看，不用天天刷新闻也能跟上科技圈的动态。",
      "opinion": "想了解科技圈动态又不想天天刷碎片资讯，这种一周一期的汇总形式挺省时间，顺手还能学到不少编程相关的小知识点。内容偏泛，不是专门讲 Python 或理财，但作为每周固定的学习/资讯习惯值得养成。📱 手机上：能看——就是网页文字，手机浏览器直接打开链接看就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开最新一期：[issue-418](https://github.com/ruanyf/weekly/blob/master/docs/issue-418.md)，以后每周五出新一期，去仓库首页能找到最新链接" }
          ],
          "done": "能看到当期的文章列表和简介，就说明打开对了。"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    }
  ]
};
