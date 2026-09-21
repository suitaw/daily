DAILY_DATA["github/2026-09-21"] = {
  "date": "2026-09-21",
  "highlight": "今天最值得动手试的是 `XIU2/CloudflareSpeedTest`——命令行跑一下就能测出访问Cloudflare最快的IP，直接帮你现在开代理访问GitHub提速，手机电脑都能装，零风险。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "AstrBotDevs/AstrBot",
      "title": "一站式AI Agent聊天机器人平台，一次接好多个IM和LLM",
      "lang": "Python",
      "stars": "40,739",
      "today": "36",
      "body": "AstrBot是个开源的Agent聊天机器人框架，能把LLM（国内的豆包、DeepSeek这类兼容OpenAI接口的模型也能接）接到QQ、微信、Telegram、Slack等好几个即时通讯平台上，还支持装插件扩展能力，比如联网搜索、画图、执行代码。配置全在Web管理面板里操作，不用自己写对接代码。",
      "explain": "这里的「Agent」不只是被动回答问题，还能自己判断该调用哪个工具（比如查天气、搜网页）去完成任务，你平时写的小工具其实是这个思路的简化版。这个项目相当于把「接LLM API + 管理插件 + 对接各个聊天软件」这套麻烦活都打包好了，用配置就能搞定。",
      "opinion": "想快速搭一个能在微信、QQ里用的AI机器人，这个能省掉自己从零写对接代码的功夫，配置里大概率能填DeepSeek、豆包这类兼容OpenAI接口的模型地址和key。它是个完整框架，跟你平时写单文件HTML小工具的路子不太一样，更适合当「看现成项目怎么组织Agent代码」的参考，或者真想跑一个机器人再装。📱手机上：装不上，它依赖openai、anthropic这两个SDK，而这两个包依赖的jiter需要编译Rust扩展，Termux里编译不过，得放到电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装好 uv）",
          "intro": "官方也提供了Docker部署方式，更熟悉Docker可以用那个，这里写的是更省事的uv一键方式。",
          "steps": [
            { "text": "确认电脑上已经装好 uv 工具", "after": "没装的话参考 [uv官方安装文档](https://docs.astral.sh/uv/getting-started/installation/)，按你的系统选安装方式" },
            { "text": "用 uv 安装 AstrBot：", "code": "uv tool install astrbot --python 3.12" },
            { "text": "初始化配置：", "code": "astrbot init" },
            { "text": "启动：", "code": "astrbot run" }
          ],
          "done": "终端提示服务启动后，浏览器打开终端里给出的管理面板地址，能看到AstrBot的Web控制台就是装好了，接下来在面板里配置模型API Key和要对接的聊天平台。"
        }
      ],
      "url": "https://github.com/AstrBotDevs/AstrBot"
    },
    {
      "emoji": "🛠",
      "repo": "XIU2/CloudflareSpeedTest",
      "title": "测出访问Cloudflare最快的IP，给你现在的代理提速",
      "lang": "Go",
      "stars": "29,102",
      "today": "14",
      "body": "这是个命令行小工具，专测你当前网络访问Cloudflare CDN各个IP的延迟和下载速度，跑完给出一份最快IP排行。工具内置了Cloudflare官方公布的IP段，自动逐个测速，不用自己去猜哪个IP快。提供Windows、Linux（含手机上的ARM64）等多平台现成可执行文件，不用装编译环境。",
      "explain": "Cloudflare是很多网站、代理服务在用的全球加速网络（CDN），同一个域名背后其实对应着分布在各地的很多台服务器（IP）。哪台离你线路更通畅、访问更快，普通情况下是系统随机分配，不一定是最快那台，这个工具就是帮你把「当下最快的那台」测出来。",
      "opinion": "你现在访问GitHub要走 `127.0.0.1:7890` 的代理，如果代理走的是Cloudflare中转，测出更快的IP换到hosts或代理配置里，装npm包、clone大仓库时能省不少等待时间。它只是测速换IP，不改变你原来的访问逻辑，风险很低，跑一次试试成本不高。📱手机上：能跑，Release里直接有 `cfst_linux_arm64.tar.gz`，解压加执行权限就能用，不用编译。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "下载Linux ARM64版本压缩包：", "code": "https_proxy=http://127.0.0.1:7890 wget https://github.com/XIU2/CloudflareSpeedTest/releases/latest/download/cfst_linux_arm64.tar.gz" },
            { "text": "解压并给执行权限：", "code": "tar -zxf cfst_linux_arm64.tar.gz\nchmod +x cfst" },
            { "text": "运行测速，默认参数就行：", "code": "./cfst" }
          ],
          "done": "当前目录会生成一份 `result.csv`，第一行就是延迟低、速度快的推荐IP。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases页面](https://github.com/XIU2/CloudflareSpeedTest/releases/latest) 下载Windows版压缩包", "after": "在Assets里找 `cfst_windows_amd64.zip`（下载慢或失败就先开代理）" },
            { "text": "解压后双击 `cfst.exe` 运行，不用装任何东西" }
          ],
          "done": "运行完命令行窗口里能看到测速结果，同目录下生成 `result.csv`，第一行就是推荐IP。"
        }
      ],
      "url": "https://github.com/XIU2/CloudflareSpeedTest"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "title": "网页资源嗅探扩展，自动扒出页面里的视频图片直链",
      "lang": "JavaScript",
      "stars": "21,958",
      "today": "19",
      "body": "猫抓是个浏览器扩展，装上后浏览网页会自动扫描页面加载的资源（视频、音频、图片、m3u8分片流等），列成清单，点一下就能复制直链或直接下载，不用再对着网页翻开发者工具找链接。支持Chrome、Edge、Firefox，安卓版Edge也能装。",
      "explain": "「资源嗅探」是扩展在后台盯着浏览器加载了哪些文件，把符合视频/音频/图片格式的链接挑出来，本质是读网络请求记录，不涉及破解或绕过限制。m3u8是流媒体常见的分段视频格式，很多在线视频网站在用，直接右键存不下来，得靠这类工具识别。",
      "opinion": "算个顺手的效率工具，遇到想保存的网页视频、图片又找不到下载按钮时能用上，跟AI开发关系不大，但装一个不麻烦。README里也提醒了，只能用来下载你本来就有权限看的内容，别拿去扒付费或受版权保护的内容。📱手机上：能装，Edge安卓版支持这个扩展。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（Edge安卓版）",
          "steps": [
            { "text": "手机应用商店搜「Microsoft Edge」装好浏览器" },
            { "text": "打开Edge，进入右下角菜单 → 扩展，搜索「cat catch」安装", "after": "搜不到的话去 [官方文档站](https://cat-catch.94cat.com/) 看图文教程" }
          ],
          "done": "打开一个有视频的网页，Edge工具栏能看到猫抓图标，点开能列出识别到的资源链接就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Chrome / Edge / Firefox 任选）",
          "steps": [
            { "text": "Chrome用户打开 [应用商店页面](https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb) 安装" },
            { "text": "Edge用户打开 [加载项页面](https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci) 安装" },
            { "text": "Firefox用户打开 [附加组件页面](https://addons.mozilla.org/addon/cat-catch/) 安装" },
            { "text": "商店打不开就去 [Releases页面](https://github.com/xifangczy/cat-catch/releases) 下载对应浏览器的压缩包", "after": "解压后在浏览器扩展管理页打开「开发者模式」，选「加载已解压的扩展程序」" }
          ],
          "done": "浏览器工具栏出现猫抓图标，点击能看到当前网页识别出的资源列表就是装好了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "💰",
      "repo": "Open-Dev-Society/OpenStock",
      "title": "开源股票行情看板，自选股加价格提醒，不碰真钱",
      "lang": "TypeScript",
      "stars": "16,818",
      "today": "755",
      "body": "OpenStock是个开源的股票行情追踪网站，能看全球30多个交易所（纽交所、伦敦交易所等）的实时价格，自己建自选股列表，价格到设定的点就提醒。项目本身不是券商，不接真实交易，纯粹看行情、做提醒用。官方提供了能直接打开用的在线演示站。",
      "explain": "「交易所」就是股票买卖的市场（纽交所、伦敦交易所都是），不同公司在不同交易所挂牌交易。这个项目不涉及真的买卖操作，更像一个「自选股+闹钟」工具——把关心的股票加进列表，价格到设定的线就提醒一下，跟炒股软件里的自选股功能类似，但开源、免费、没有下单功能。",
      "opinion": "对刚入门个人理财、想顺便了解点投资市场信息的你来说，这类工具比直接开证券账户风险小得多——它就是个行情看板，不碰真钱、不下单，适合拿来练「设定目标价格」「跟踪几只感兴趣的股票」这类基础习惯。官方有现成的在线演示，不用自己搭MongoDB和申请API Key就能先用起来。📱手机上：能用，打开网页就行，手机电脑体验一样。",
      "install": [
        {
          "title": "使用方法 · 📱 手机 / 💻 电脑都行（用官方在线演示）",
          "intro": "自己搭服务器要装Node.js 20+、申请MongoDB和Finnhub行情API Key，步骤比较多，这里先用官方现成的在线版体验，想深入研究再去看仓库README里的自托管步骤。",
          "steps": [
            { "text": "浏览器打开 [OpenStock在线演示站](https://openstock-ods.vercel.app)" },
            { "text": "按提示注册/登录一个账号" },
            { "text": "搜索想关注的股票代码，加进自选并设置价格提醒" }
          ],
          "done": "登录后能看到自选股列表，添加一只股票并设置提醒成功，就是能正常用了。"
        }
      ],
      "url": "https://github.com/Open-Dev-Society/OpenStock"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "title": "信封预算法记账App，数据存本地不用上传",
      "lang": "JavaScript",
      "stars": "29,000+",
      "body": "Actual Budget是个开源的个人记账App，用「信封预算法」管理钱：先把每月收入分配到吃饭、房租、娱乐这些预算类别里，花一笔钱就从对应类别扣，超支了一眼就能看出来。提供Windows/Mac/Linux独立桌面版，数据存在本地，也可以自己搭服务器多设备同步。",
      "explain": "「信封预算法」的比喻是：发工资先把钱分装进不同信封（吃饭、房租……），花钱只能从对应信封里拿，拿完这个月这项就不能再花了，是很经典的个人理财方法，比单纯记流水更能管住乱花钱。",
      "opinion": "你正在学个人理财基础，这类工具比看理论文章更直观——边用边就理解了「预算分类」「收支平衡」这些概念是怎么落地的。数据存本地不用交给别人，桌面版下载下来直接用，不用注册账号，上手成本低，值得装来试着记一两周看看。📱手机上：装不了，官方没提供Android App，自托管网页版要Docker或Node服务，Termux没Docker，折腾起来不划算，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases页面](https://github.com/actualbudget/actual/releases/latest) 下载Windows安装包", "after": "在Assets里找 `Actual-windows-x64.exe`（普通64位电脑用这个，下载慢或失败就先开代理）" },
            { "text": "双击运行安装包，装完打开就能用" }
          ],
          "done": "打开软件能看到新建预算文件的界面就是装好了，跟着提示建一个预算，把这个月收入和几个开销类别填进去就能开始记账。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    }
  ]
};
