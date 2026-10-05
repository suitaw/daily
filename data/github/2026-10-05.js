DAILY_DATA["github/2026-10-05"] = {
  "date": "2026-10-05",
  "highlight": "今天最值得试的是 `Agent-Reach`——给 Claude Code、Cursor 这类 Agent 装上刷推特、搜 Reddit、看 YouTube 字幕的能力，默认零 Key 零费用，适合经常要用 Agent 查资料的你。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Panniantong/Agent-Reach",
      "title": "让AI Agent直接刷推特、看YouTube、搜小红书",
      "lang": "Python",
      "stars": "90,878",
      "today": "980",
      "body": "`Agent-Reach`给Claude Code、Cursor这类AI Agent装上了「上网」的能力，能读推特、搜Reddit、刷B站和小红书、看YouTube字幕，一共支持15个以上平台。默认路径不用任何API Key，零费用就能用。安装方式比较特别：把一条安装提示贴给你的AI助手，让它自己跑命令、自己检测环境。",
      "explain": "Claude Code这类工具本身打不开网页看内容，`Agent-Reach`相当于给它装了一副「望远镜」，让它能直接读到网上的公开信息再拿去干活，比如帮你整理某个话题最近的讨论。它靠的是`yt-dlp`、RSS这些成熟的命令行小工具，不是自己重新发明轮子。",
      "opinion": "如果你平时在Claude Code里写Agent，想让它顺手查点网上的东西（比如看某个开源项目最近的评价、扒一段视频字幕），这个工具能省掉自己接各家API的麻烦，而且默认免费。但它依赖gh CLI、Node.js这些完整工具链，部分功能还要开浏览器自动化，装起来比普通npm包麻烦一点。📱 手机上：基础的RSS、YouTube字幕这类纯命令行功能大概能跑，但涉及浏览器自动化的功能在Termux里基本用不了，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "用pipx安装（没有pipx就先跑 pip install --user pipx）：", "code": "pipx install https://github.com/Panniantong/agent-reach/archive/main.zip" },
            { "text": "先只读检测一下环境：", "code": "agent-reach install --env=auto" },
            { "text": "确认没问题后正式安装：", "code": "agent-reach install --env=auto --system" },
            { "text": "按需开启某个平台，比如小红书：", "code": "agent-reach install --env=auto --system --channels=xiaohongshu", "after": "想全部开启就把 channels 的值换成 all" },
            { "text": "检查各平台状态：", "code": "agent-reach doctor" }
          ],
          "done": "`doctor`命令里对应平台显示可用，就说明装好了；哪个平台报错，再按提示单独配置那个平台的key或cookie。"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（只建议试基础功能，不保证）",
          "steps": [
            { "text": "装好git（Termux已有Node.js和Python）：", "code": "pkg install -y git" },
            { "text": "走代理装Agent-Reach：", "code": "https_proxy=http://127.0.0.1:7890 pip install https://github.com/Panniantong/agent-reach/archive/main.zip", "after": "这一步在Termux里有一定概率失败，报错就说明走不通，换电脑装。" },
            { "text": "环境检测：", "code": "agent-reach install --env=auto" }
          ],
          "done": "环境检测能跑出结果不报错，基础功能就算装上了；浏览器自动化相关功能手机上不用管。"
        }
      ],
      "url": "https://github.com/Panniantong/Agent-Reach"
    },
    {
      "emoji": "🤖",
      "repo": "langbot-app/LangBot",
      "title": "一句命令搭个支持DeepSeek的AI聊天机器人",
      "lang": "Python",
      "stars": "18,003",
      "body": "`LangBot`是个开源的IM机器人开发平台，配置好之后能把AI接到QQ、微信、企业微信、飞书、Discord、Telegram等平台上，背后的模型可以换成DeepSeek、Kimi、智谱，也支持Ollama跑本地模型。自带RAG知识库、工具调用、多轮对话这些功能，不用从零写一套机器人框架。",
      "explain": "IM机器人就是能在QQ、微信这类聊天软件里自动收发消息的程序；RAG是「先查资料再回答」的技术，能让AI基于你给的文档回答问题，而不是瞎编。`LangBot`把这些功能都打包好了，你只要配好模型的API Key就能用。",
      "opinion": "如果你想做一个能在QQ或微信群里用的AI小助手，这个比自己从头搭消息处理、接API要省事很多，官方文档里明确支持DeepSeek，不用自己改代码。缺点是依赖openai、anthropic这两个Python库，它们背后要编译jiter，手机上基本装不上。📱 手机上：大概率装不上（卡在openai/anthropic依赖的jiter编译这一步），建议用电脑装；电脑上用uv一行命令就能跑起来，很简单。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（不用Docker）",
          "steps": [
            { "text": "没装过uv就先装（PowerShell）：", "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"", "after": "装完重开一个终端窗口让命令生效。" },
            { "text": "一行命令启动LangBot：", "code": "uvx langbot", "after": "第一次运行要下载依赖，下载慢或失败就先开代理再试。" },
            { "text": "浏览器打开后台，跟着页面提示创建管理员账号：", "code": "http://localhost:5300" },
            { "text": "在后台的「模型」页面里添加DeepSeek，填入你自己的DeepSeek API Key" }
          ],
          "done": "网页能打开、账号创建好、「模型」页面显示DeepSeek已连接，就算装好了。"
        }
      ],
      "url": "https://github.com/langbot-app/LangBot"
    },
    {
      "emoji": "📚",
      "repo": "rohitg00/ai-engineering-from-scratch",
      "title": "523节课从数学基础学到能上线的AI工程",
      "lang": "Python",
      "stars": "63,916",
      "week": "4,904",
      "body": "这是一套系统的AI工程教程，523节课分成20个阶段，从线性代数、反向传播这些数学基础，一步步讲到怎么做能实际用的AI应用。每节课的流程都是「看文档→推公式→写代码→跑测试→产出一个能复用的小工具」，可以直接在网页上看，不用装任何东西。",
      "explain": "反向传播是神经网络「学习」时用来调整参数的核心算法，是现在几乎所有AI模型背后的数学原理。这套课会从头推导这些概念，而不是只讲怎么调API。",
      "opinion": "你平时主要是调API做应用，这套课能补上「这些模型到底是怎么算出来的」这一块，对理解AI能做到什么、做不到什么会有帮助，但523节课的量不小，建议按需挑感兴趣的阶段看，不用从头啃到尾。网页直接看最省事。📱 手机上：网页版用浏览器打开就行，手机电脑都一样；想跑配套的Python代码示例，Termux里装好Python也能跑，代码本身不依赖openai、anthropic这类装不上的库。",
      "install": [
        {
          "title": "怎么看（网页，不用安装）",
          "steps": [
            { "text": "直接打开官网看课程：", "code": "https://aiengineeringfromscratch.com" }
          ],
          "done": "能打开网页看到课程列表就行。"
        },
        {
          "title": "安装步骤 · 跑配套代码（可选，手机电脑通用）",
          "steps": [
            { "text": "克隆仓库（手机Termux要走代理，电脑不用加前面这段）：", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/rohitg00/ai-engineering-from-scratch.git" },
            { "text": "进入目录，跑第一节的环境检查脚本：", "code": "cd ai-engineering-from-scratch\npython3 phases/00-setup-and-tooling/01-dev-environment/code/verify.py --route beginner", "after": "Windows上如果python3不认，换成python试试。" }
          ],
          "done": "脚本跑完没报错，说明环境没问题，可以按目录往后跑其他课程的代码。"
        }
      ],
      "url": "https://github.com/rohitg00/ai-engineering-from-scratch"
    },
    {
      "emoji": "🛠",
      "repo": "hoothin/SearchJumper",
      "title": "右键选中文字，一键换到任意搜索引擎搜",
      "lang": "JavaScript",
      "stars": "1,158",
      "today": "11",
      "body": "`SearchJumper`是个浏览器扩展，选中网页上的文字、图片或链接后右键，就能立刻用百度、Google、GitHub等任意搜索引擎重新搜一遍，还支持批量打开同类网站、自定义快捷键。",
      "explain": "浏览器扩展就是装在浏览器里的小插件，不是独立的App。`SearchJumper`要解决的问题很具体——选中一段文字后不用再手动复制、开新标签、粘贴搜索，右键一下就直接跳过去了。",
      "opinion": "平时查资料经常要把同一段话换几个搜索引擎、换着站内搜索试，这个扩展能省掉手动复制粘贴跳转的步骤，是个很轻的效率工具，装上挂着就行，几乎没有学习成本。📱 手机上：Chrome、Firefox手机版理论上都能装浏览器扩展，但手机浏览器对扩展的支持普遍比电脑弱（右键菜单在手机上要换成长按），实际体验不如电脑版顺手。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / 📱 手机（浏览器扩展）",
          "steps": [
            { "text": "Chrome/Edge（Chromium内核）打开商店页面安装：", "code": "https://chromewebstore.google.com/detail/hgepmblbgodbilmfdjkalkgofdcipkhh", "after": "商店打不开就先开代理再试。" },
            { "text": "Firefox打开商店页面安装：", "code": "https://addons.mozilla.org/firefox/addon/searchjumper/" }
          ],
          "done": "浏览器右上角能看到SearchJumper的图标，选中文字右键能看到它的菜单，就是装好了。"
        }
      ],
      "url": "https://github.com/hoothin/SearchJumper"
    },
    {
      "emoji": "🎨",
      "repo": "OpenCut-app/OpenCut",
      "title": "开源的CapCut替代品，剪视频不用装App",
      "lang": "TypeScript",
      "stars": "92,138",
      "today": "512",
      "body": "`OpenCut`是一个开源的网页版视频剪辑工具，定位是CapCut（剪映海外版）的开源替代品，支持剪辑、分段、加字幕这些基础操作，官方直接提供在线试用地址，不用下载安装。项目目前在用Rust重写核心，新版地址还在测试阶段。",
      "explain": "CapCut是字节跳动做的一款很火的手机剪视频App（国内就是剪映），`OpenCut`想做一个开源、不用把视频传到别人服务器的替代品；「在线试用」就是直接打开网页用，不用下载安装包。",
      "opinion": "如果你平时发视频或做教程需要简单剪一下，不想为这个单独装一个App，这个网页打开就能用，试试没什么成本；不过项目正在重写核心，功能和稳定性都还在变化中，复杂剪辑别太指望。📱 手机上：是网页版，手机浏览器直接打开链接就能用，不用装任何东西，但手机屏幕小，剪辑操作体验肯定不如电脑顺手。",
      "install": [
        {
          "title": "怎么看（网页版，不用安装）",
          "steps": [
            { "text": "经典版（功能更完整）：", "code": "https://opencut.app" },
            { "text": "重写中的新版（测试阶段，可能不稳定）：", "code": "https://new.opencut.app" }
          ],
          "done": "打开网页能看到剪辑界面、能导入一段视频试剪，就是能用了。"
        }
      ],
      "url": "https://github.com/OpenCut-app/OpenCut"
    }
  ]
};
