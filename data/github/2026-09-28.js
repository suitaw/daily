DAILY_DATA["github/2026-09-28"] = {
  "date": "2026-09-28",
  "highlight": "今天最想让你去试的是 Hindsight——给 AI Agent 装长期记忆的开源项目，注册个云端账号就能用，不用折腾本地环境。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "vectorize-io/hindsight",
      "title": "给 Agent 装上会越用越聪明的记忆",
      "lang": "Python",
      "stars": "37,285",
      "today": "4,520",
      "body": "Hindsight 是一个给 AI Agent 用的长期记忆系统，今天同时冲上日榜和周榜，周涨星数排到前列。官方说法是它不只是把历史对话存起来给 Agent 检索（这是 RAG 常见做法），而是让 Agent 像人一样从过去的经历里总结出经验，官方测试在长期记忆类任务上跑分超过了普通 RAG 和知识图谱方案。项目提供托管的云端版本，也支持自己用 Docker 或 Python 包本地跑，二十多种主流大模型接口都能接。",
      "explain": "普通的 Agent 记忆大多是「RAG」：把之前聊过的内容存进一个数据库，下次提问时翻出相关的几条塞给模型当参考，本质是`翻笔记`。Hindsight 想做的是`总结笔记`——从大量历史交互里提炼出结论和规律，再喂给 Agent，理论上会更贴近「越用越懂你」的效果。",
      "opinion": "如果在做自己的 AI 小工具或 Agent，想让它记住之前的对话又不想每次都传一大段历史文本，这类项目值得看看思路，哪怕不接入正式产品，读一读它怎么设计「记忆」这块也有参考价值。最省事的用法是直接注册它的云端版本，不用自己搭服务、不用管 Docker；真要自己本地跑得装 Docker 或者 Python 环境去调 OpenAI/Anthropic 的 SDK。📱 手机上：本地跑大概率不行——装不了 Docker，Python 那条路又依赖 `openai`/`anthropic` 这类库背后要编译的 `jiter`，Termux 里装不上；但云端网页版可以直接用手机浏览器打开注册使用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（用云端版，不用本地装）",
          "intro": "这条路径不用装 Docker 也不用配环境，手机电脑通用。",
          "steps": [
            { "text": "打开注册页面，用邮箱或 Google 账号注册", "code": "https://ui.hindsight.vectorize.io/signup" },
            { "text": "登录后进入 Dashboard，找到自己的 API Key 复制下来" },
            { "text": "在自己的 Agent 项目里装一下客户端库（从 npm 官方仓库装，不用开代理）", "code": "npm install @vectorize-io/hindsight-client" },
            { "text": "在代码里用刚才复制的 Key，把接口地址指向云端服务，就能存/取记忆了", "code": "https://api.hindsight.vectorize.io", "after": "官方文档里有更完整的调用示例，具体参数以文档为准" }
          ],
          "done": "Dashboard 里能看到自己的账号和空的 Memory 列表，就说明注册成功了；用客户端写入一条记忆后能在网页上看到，就算跑通了。"
        }
      ],
      "url": "https://github.com/vectorize-io/hindsight"
    },
    {
      "emoji": "🛠",
      "repo": "alibaba/open-code-review",
      "title": "一条命令，让 AI 帮你审查代码",
      "lang": "Go",
      "stars": "41,925",
      "week": "3,727",
      "body": "阿里开源的代码审查 CLI 工具，卖点是把确定性的规则引擎和 LLM Agent 混在一起用——先用固定规则抓 XSS、SQL 注入、空指针这类常见问题，再让大模型去理解上下文、给出精准到行的评论，官方说这样比单纯丢给通用 Agent 审查省下差不多九成的 token。既可以配好自己的模型 Key 独立跑，也可以用「委托模式」直接借用本机已经登录的 Claude Code 之类编码 Agent 来执行审查。",
      "explain": "「确定性引擎」就是写死的规则，像正则匹配那种，跑得快也不会瞎编；「LLM Agent」是让大模型自己去看代码、自己判断，更灵活但也更费 token。这个项目把两者拼一起，先用规则筛一遍再让模型精看，省 token 又不容易漏。「OpenAI 兼容接口」是说很多模型（包括 DeepSeek、豆包）都提供和 OpenAI 格式一样的调用方式，填进去就能用，不用换代码。",
      "opinion": "拿来审查自己写的单文件 HTML/JS 小工具挺合适——不用接入什么 CI 流水线，在项目目录里跑一下 `ocr review` 就能看当前改动有没有明显问题。「委托模式」最省事，直接借用已经登录好的 Claude Code 去审查，不用再单独填一次 API Key；标准模式下要自己配 Key，可以填 DeepSeek 或豆包的接口（选 OpenAI 兼容模式）。这工具原本是给团队接 CI 用的，个人单独用属于杀鸡用牛刀，但作为一个能立刻上手试的小工具没问题。📱 手机上：是纯 Node.js 命令行工具，原则上 Termux 能装，但背后可能要拉取对应系统架构的可执行文件，手机（aarch64）不一定有现成的包，装不上就直接放弃、改用电脑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / 📱 手机 Termux（命令基本一样）",
          "steps": [
            { "text": "电脑上直接装（Windows 下载慢或失败就先开代理）", "code": "npm install -g @alibaba-group/open-code-review" },
            { "text": "手机 Termux 里装（这条要连 GitHub 拉文件，前面加代理）", "code": "https_proxy=http://127.0.0.1:7890 npm install -g @alibaba-group/open-code-review", "after": "不保证：如果装到一半报错或者卡住不动，大概率是找不到手机对应架构的可执行文件，直接放弃手机端，改用电脑装" },
            { "text": "跑配置向导，按提示选模型来源", "code": "ocr config provider" },
            { "text": "没有现成 Key 也可以选「委托模式」，直接用本机已登录的 Claude Code 来跑审查，不用再单独填 API Key" },
            { "text": "在自己项目目录下试跑一次", "code": "ocr review" }
          ],
          "done": "终端里能看到一份按行号列出的审查报告（哪怕说「没发现问题」），就说明装好了、跑通了。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "title": "轻量记账 App，AI 帮你自动分类",
      "lang": "Dart",
      "stars": "2,400",
      "body": "本地优先的记账 App，数据默认存在自己手机里，不强制上传到别人的服务器；支持对话、拍照 OCR、语音、截图几种方式让 AI 帮忙把一笔开销自动填进对应分类，省去自己一个个敲数字选类别的功夫。iOS、Android、Web 都有客户端，个人使用完全免费，代码也是公开的。",
      "explain": "「本地优先」意思是这个 App 默认把数据存在你自己手机上，不用联网也能用，想同步到别的设备再自己另外配置一个云存储，不配也不影响日常使用。「OCR 识别账单」就是拍一张购物小票或者转账截图，AI 自动认出金额和商品，省得自己手动一条条输入。",
      "opinion": "记账是理财入门里最基础的一步——先知道钱花哪儿了，才谈得上做预算。这个 App 装了直接能用，不用碰代码也不用配置什么，比自己拿 Excel 记省心；月度预算和「还能花多少」这种统计功能是现成的，适合刚开始想养成记账习惯的人。想多设备同步要自己另外接 iCloud/WebDAV，不接也完全不影响单机使用。📱 手机上：能用，是现成的 App，应用商店直接下载安装，不用碰 Termux、不用写代码。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（现成 App）",
          "steps": [
            { "text": "iOS 用户打开 App Store 页面下载", "code": "https://apps.apple.com/app/id6754611670" },
            { "text": "Android 用户可以在 Google Play 商店搜索「BeeCount」，或者直接去 GitHub Releases 下载 APK", "code": "https://github.com/TNT-Likely/BeeCount/releases" }
          ],
          "done": "打开 App 能看到记账首页，添加一笔收支能保存下来，就算装好了。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    },
    {
      "emoji": "🎨",
      "repo": "debpalash/VoiceStudio",
      "title": "本地语音克隆，配音朗读不用联网",
      "lang": "Python",
      "stars": "40,127",
      "today": "3,086",
      "body": "开源的本地语音处理软件，官方叫它「本地版 ElevenLabs」，能做语音克隆、语音设计、给视频配音、听写转录、做有声书，号称支持 646 种语言。所有计算都在自己电脑上跑，不用联网、不用填任何 API Key，代码是 AGPL-3.0 协议完全开源。",
      "explain": "「语音克隆」是拿一小段你（或别人，注意别侵权）的录音喂给模型，让它学会用这个声音念任何文字；「本地跑」意味着录音和生成的内容都留在自己电脑上，不会传到别人的服务器。没有独立显卡也能跑，只是纯 CPU 模式速度会明显慢很多。",
      "opinion": "属于好玩向的工具，可以拿来给自己录的视频配音，或者把一篇文章转成语音自己当有声书听，跟做 AI 小工具、学 Python、理财这些主线关系不大，纯粹是个能白嫖的本地玩具。免费、不用 API Key，装之前留够大概 10GB 硬盘空间给它下模型；没独显也能用，就是速度会慢不少。📱 手机上：不行，这是 Windows/macOS/Linux 的桌面软件（Electron/Tauri 打包），没有安卓版，Termux 装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，安装包）",
          "intro": "需要 Windows 10 21H2 及以上、64 位系统，提前留出约 10GB 硬盘空间。",
          "steps": [
            { "text": "打开 Releases 页面，下载安装包（选 Current_User 这个版本更省心，不用管理员权限）", "code": "https://github.com/debpalash/VoiceStudio/releases/latest", "after": "下载慢或失败就先开代理" },
            { "text": "双击下载好的 .msi 文件，跟着安装向导走完" },
            { "text": "从开始菜单打开 VoiceStudio，首次启动会自动下载模型，视网络情况可能要等一会" }
          ],
          "done": "打开软件能看到「语音克隆」等工作区，上传一段参考录音、输入文字能生成语音，就算装成功了。"
        }
      ],
      "url": "https://github.com/debpalash/VoiceStudio"
    },
    {
      "emoji": "📚",
      "repo": "OI-wiki/OI-wiki",
      "title": "免费算法百科，当编程知识字典查",
      "lang": "TypeScript",
      "stars": "26,752",
      "today": "9",
      "body": "面向信息学奥赛（OI）和大学生编程竞赛（ICPC）的免费在线百科，系统整理了数据结构、算法、数学等竞赛常考的知识点，中文写成，长期维护更新，任何人都能免费看。",
      "explain": "OI 和 ICPC 都是编程竞赛，考的核心是数据结构和算法这些「编程内功」，跟写业务代码关系不大，但很多概念（比如「动态规划」「图论」）是计算机科学的通用基础。",
      "opinion": "不建议从头通读，更适合学完 Python 基础语法之后，遇到「链表」「动态规划」「二分查找」这类听过没搞懂的词时，来这里当字典查一下具体是怎么回事——比很多零散的博客讲得系统，而且免费。内容偏硬核竞赛向，不是手把手的教程，零基础直接从头看容易看不懂，按需查阅比较合适。📱 手机上：能看，就是个普通网页，手机浏览器直接打开就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开官网", "code": "https://oi-wiki.org" },
            { "text": "用右上角搜索框查具体的算法或数据结构名字" }
          ],
          "done": "能打开首页、搜到你想查的词条，就行了。"
        }
      ],
      "url": "https://github.com/OI-wiki/OI-wiki"
    }
  ]
};
