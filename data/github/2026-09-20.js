DAILY_DATA["github/2026-09-20"] = {
  "date": "2026-09-20",
  "highlight": "今天最值得动手试的是 `Panniantong/agent-reach`——一句话丢给Claude Code就能自动装好，装完你的Agent就能自己上网读推特、YouTube、B站甚至小红书的内容，做资讯类小工具会顺手不少。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Panniantong/agent-reach",
      "title": "让Claude Code这类AI Agent能读推特、B站、Reddit等全网内容",
      "lang": "Python",
      "stars": "83,458",
      "week": "3,914",
      "body": "AI Agent遇到需要「上网查资料」的任务时，经常要么没这个能力，要么得自己接一堆收费的搜索API。Agent Reach是一套命令行工具，让Claude Code、Cursor这些AI编程工具能直接读网页正文、搜推特、看YouTube字幕、刷Reddit、B站、小红书的内容，作者说全部工具开源、调用的接口免费，安装也是丢一句话给AI自己搞定。",
      "explain": "「CLI工具」就是命令行工具，在终端里敲命令用，没有图形界面。这类工具相当于给AI开了一个「上网权限」的开关——原本AI只能干巴巴地根据你告诉它的信息回答，装上这个之后，遇到需要查资料的问题，它能自己动手去网上抓内容回来看。",
      "opinion": "你平时写的都是调LLM API的小工具/Agent，这个可以直接当成给Agent顺手加的一项「上网」能力，比如做一个自动整理推特热点或者B站视频摘要的小工具，省去自己一个个平台写抓取代码的功夫。官方说不用额外付费API，但各家平台的抓取方式说变就变，能不能一直稳定好用不好说，值得先花几分钟试试效果。📱手机上：是命令行工具，用官方那句「复制给Agent自动装」的方式最省事，在Termux里跑Claude Code应该就能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用（用 Claude Code 自动装）",
          "steps": [
            { "text": "打开 Claude Code，把下面这句话发给它，让它自己按官方说明安装：", "code": "帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md", "after": "Claude Code 会自己去读这份安装文档并执行对应命令，不用你手动一步步敲。" },
            { "text": "装完后让 Claude Code 用 Agent Reach 抓一个网页链接或搜一条推特试试，看能不能正常返回内容。" }
          ],
          "done": "让 Claude Code 用 Agent Reach 读一个网页链接，能正常返回正文内容，就是装成功了。"
        }
      ],
      "url": "https://github.com/Panniantong/agent-reach"
    },
    {
      "emoji": "🤖",
      "repo": "microsoft/markitdown",
      "title": "把PDF、Word、PPT等文件一键转成干净的Markdown文本",
      "lang": "Python",
      "stars": "185,656",
      "week": "2,767",
      "body": "很多时候想让AI帮忙读一份PDF、Word或PPT，直接把文件丢进去效果常常很差，格式一乱AI理解也跟着乱。MarkItDown是微软出的一个小工具，能把PDF、Word、Excel、PPT、图片、音频、网页、压缩包甚至YouTube链接的内容统一转换成干净的Markdown纯文本。转换完的文字结构清楚，直接喂给AI当上下文效果好很多，命令行一行搞定，也能当Python库导入自己的脚本里用。",
      "explain": "Markdown是一种只用几个简单符号（比如 `**加粗**`、`# 标题`）表示格式的纯文本，AI处理起来比又是表格又是图片的原始文件干净得多。「命令行工具」就是在终端里敲一行命令就能用的软件，不用打开什么应用界面。",
      "opinion": "你平时做AI小工具，经常需要处理用户扔过来的各种文件格式，与其自己一个个写PDF解析、Word解析代码，不如直接调这个转成Markdown再喂给豆包或DeepSeek，能省不少事。基础功能是纯Python实现的，不依赖openai、anthropic这些SDK，装起来门槛低。📱手机上：能装，Termux里装这种纯Python库一般没问题，如果个别格式（比如某些图片、音频格式）的依赖装不上报错，去掉 `[all]` 单独装用得到的格式支持就行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）通用",
          "steps": [
            { "text": "安装 MarkItDown（带上所有格式支持）：", "code": "pip install 'markitdown[all]'" },
            { "text": "转换一个文件试试（换成你自己的文件路径）：", "code": "markitdown 文件.pdf -o 输出.md", "after": "如果某个格式装不上报错，提示里会说缺哪个依赖，可以先 `pip install markitdown`（不带 `[all]`）装基础版，再按需单独装。" }
          ],
          "done": "当前目录下多出一个 `输出.md` 文件，打开能看到整理好的文字内容，就是转换成功了。"
        }
      ],
      "url": "https://github.com/microsoft/markitdown"
    },
    {
      "emoji": "🛠",
      "repo": "alibaba/open-code-review",
      "title": "本地一行命令，让AI帮你审查代码里的bug和安全问题",
      "lang": "Go",
      "stars": "37,551",
      "week": "15,028",
      "body": "这是阿里内部代码审查系统开源出来的版本，服务过内部数万开发者。它读取你的git改动，交给LLM按行分析，找出潜在的空指针、线程安全、XSS、SQL注入这类问题，直接生成精确到具体行号的评论，跟人工review的批注方式差不多。整个工具是本地命令行程序，不用装Docker、不用搭后端。",
      "explain": "「LLM Agent」这里可以简单理解成让AI自己判断代码哪里有问题，而不是死板的关键词匹配规则检查。「精确到行级」是说它会告诉你「第38行有个XSS风险」，而不是笼统地说「这个文件有问题」，跟人工code review时的批注方式很像。",
      "opinion": "自己写的小工具、Agent项目提交代码前，可以先跑一遍这个再push，能挡掉一部分低级bug和明显的安全问题。它支持「OpenAI兼容」和「Anthropic兼容」接口，配置的时候大概率能填豆包、DeepSeek这类兼容OpenAI协议的接口地址和key，不用非得开一个OpenAI账号，具体填法要在配置向导里试。值得在自己的项目里跑一次看效果。📱手机上：是纯npm全局包，不涉及编译原生模块，Termux里`npm install -g`应该能装，前提是Node.js已经装好（已经有了）。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）通用",
          "steps": [
            { "text": "全局安装命令行工具：", "code": "npm install -g @alibaba-group/open-code-review" },
            { "text": "进入你的项目目录，配置用哪个模型（会交互式问你接口地址、模型名、API key，可以填豆包/DeepSeek这类OpenAI兼容接口的信息）：", "code": "ocr config provider\nocr config model" },
            { "text": "对当前的代码改动跑一次审查：", "code": "ocr review" }
          ],
          "done": "跑完 `ocr review` 后终端里能看到按行号列出的评论，说明AI已经在读你的代码、配置成功了。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "🛠",
      "repo": "asciimoo/hister",
      "title": "给自己搭一个只搜浏览记录和本地文件的私人搜索引擎",
      "lang": "Go",
      "stars": "5,225",
      "today": "420",
      "body": "Hister会把你访问过的网页和本地文件的内容整理成可以全文搜索的索引，支持比较复杂的查询语法，还有可选的语义搜索。它本地跑一个小服务，网页界面、终端、命令行、甚至给AI用的MCP接口都能接上用。整个项目主打隐私，不联网上报数据。",
      "explain": "前面提过「MCP」是让AI连接外部工具的通用接口，这里意思是Claude Code这类AI能通过MCP直接问Hister「我之前看过哪篇文章讲xxx」，不用你自己翻浏览器历史去找。「语义搜索」是说搜「密码找不回来」也能搜到写着「账号无法登录」的相关内容，不用逐字匹配。",
      "opinion": "如果你经常上网查资料、看过一堆页面又想不起来存哪了，这个能把浏览记录和本地文件都变成能搜的东西；支持MCP这点对写Agent的你比较有想象空间，以后自己的小工具理论上能直接问它要历史记录当上下文用。不过它要Go语言环境，装起来比一般App麻烦一点，建议先在电脑上试。📱手机上：官方说Termux理论可行，但要自己配Go开发环境，过程比较麻烦，不算「装了就能用」，先跳过，在电脑上试就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases页面](https://github.com/asciimoo/hister/releases)，下载 Windows 版本的可执行文件（下载慢或失败就先开代理）。" },
            { "text": "解压后在该文件夹里打开 PowerShell，启动服务：", "code": ".\\hister.exe listen" },
            { "text": "浏览器访问 http://127.0.0.1:4433 ，就能看到搜索页面。" }
          ],
          "done": "浏览器打开 http://127.0.0.1:4433 能看到 Hister 的搜索界面，且能搜到你电脑上的文件，就是装成功了。"
        }
      ],
      "url": "https://github.com/asciimoo/hister"
    },
    {
      "emoji": "🎨",
      "repo": "bilawalsidhu/gods-eye-view",
      "title": "打开浏览器看实时卫星、飞机、船只的3D地球模拟器",
      "lang": "JavaScript",
      "stars": "38,624",
      "week": "10,207",
      "body": "这是个用真实公开数据源做的网页可视化项目——把飞机航班、船只、卫星轨道、地震、路况、公共摄像头这些实时数据画在一个可以缩放旋转的3D地球上，效果像间谍卫星画面。基础功能（飞机、卫星、地震）不用API key就能看，想开Google 3D地图或语音控制才需要额外配置。本地用Node跑起来，在浏览器里看。",
      "explain": "项目是用Vite（一个前端开发常用的构建/预览工具）搭起来的网页应用，跑 `npm run dev` 是把这个网页在你自己电脑上临时启动起来预览，跟你平时写的单文件HTML不太一样，但看它怎么组织代码、怎么把好几个免费的实时数据接口拼到一起，对写自己的网页小工具会有启发。",
      "opinion": "这个更多是拿来玩和涨见识的——看别人怎么白嫖好几个公开实时数据接口拼出炫酷效果，对你平时写的单文件网页工具没有直接能抄的代码，但界面思路值得看看。不确定是不是每天都好玩，看个新鲜就行，别抱着「学到很多」的预期。📱手机上：这是要跑本地Node开发服务器的网页项目，在Termux上装依赖、跑Vite折腾意义不大，建议直接在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "需要电脑上装好 Node.js 24 或 26 版本（用 `node -v` 查看），版本太低可能装依赖失败。",
          "steps": [
            { "text": "克隆项目代码（下载慢或失败就先开代理）：", "code": "git clone https://github.com/bilawalsidhu/gods-eye-view.git\ncd gods-eye-view" },
            { "text": "安装依赖并做环境检查：", "code": "npm ci\nnpm run doctor" },
            { "text": "启动本地服务：", "code": "npm run dev", "after": "启动后终端会提示具体的访问地址。" }
          ],
          "done": "浏览器打开 http://localhost:4173 （或终端提示的地址），能看到3D地球画面转起来，就是成功了。"
        }
      ],
      "url": "https://github.com/bilawalsidhu/gods-eye-view"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "title": "本地记账App，数据存手机本地，不联网也能用",
      "lang": "Dart",
      "stars": "2,400+",
      "body": "BeeCount是一款支持安卓、iOS、网页的记账软件，主打「离线优先、隐私可控」——数据默认存在你手机本地，不用联网也能正常记账。想多设备同步的话可以选iCloud、自建服务器等云同步方式，但不接也完全不影响日常使用。基础功能免费、开源，不用注册账号也不用API key。",
      "explain": "「离线优先」意思是不联网也能正常记账，不像很多记账App非得先登录联网才能用。等以后想换手机或者想多设备同步账本，再选一种云同步方式接上就行，现在不接也不影响你先用起来。",
      "opinion": "想开始记账又不太想把自己的消费数据交给不知道会怎么处理数据的商业App，这个是个不错的起点——应用商店下载装上就能用，免费、离线、开源。学理财第一步通常就是先搞清楚钱花哪儿了，从这种简单的记账App开始最实际，别一上来就想搞复杂的资产管理。📱手机上：这本来就是给手机做的App，应用商店搜「BeeCount」或者直接下APK装，不用命令行也不用Termux。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（Android）",
          "steps": [
            { "text": "国内能打开 Google Play 的话，直接搜「BeeCount」安装；打不开就去 [GitHub Releases](https://github.com/TNT-Likely/BeeCount/releases/latest) 页面下载最新的 APK 文件。" },
            { "text": "手机上安装下载好的 APK（如果提示「未知来源」需要手动允许安装）。" },
            { "text": "打开App，直接开始记第一笔账，不需要注册登录。" }
          ],
          "done": "App打开后能记一笔账并在首页看到记录，就是装好了。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    }
  ]
};
