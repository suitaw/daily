DAILY_DATA["github/2026-11-18"] = {
  "date": "2026-11-18",
  "highlight": "今天最值得先装的是 `obra/superpowers`——给 Claude Code 装一套「先想清楚再动手」的技能包，装完编程助手不会直接冲上去写代码，会先跟你确认需求、列计划，还会自己跑测试和代码审查，一条命令就能装，门槛最低。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "deploy": ["phone", "pc"],
      "title": "让 Claude Code 先想清楚再动手的技能包",
      "lang": "Shell",
      "stars": "319,327",
      "today": "1,917",
      "body": "这是一套给 AI 编程工具用的技能包，装上后 Claude Code（以及 Codex、Cursor、Gemini CLI 等其他几个工具）接到任务不会直接冲上去写代码，而是先跟你一起把需求和设计想清楚，列出实现计划，再按「先写测试、再写代码」的方式一步步做，写完还会自己过一遍代码审查。整个流程里会自动触发对应的技能，不用每次都手动提醒它该做什么。",
      "explain": "「Agent Skill」就是给 AI 编程工具的一份「技能说明书」，装进去之后它在合适的场景会自动照着做，不是另装一个独立软件；「TDD」（测试驱动开发）是先写好「这段代码该干什么」的测试，再去写实现代码的做法，好处是改完代码能立刻知道有没有改坏别的地方。",
      "opinion": "写单文件小工具时最容易出现的问题就是需求想一半就动手、写完发现漏了什么又推倒重来，这套技能逼着先想清楚再写、还顺带做测试和自查，长期看能少走弯路；装的成本很低，就一条命令，不用额外填任何 key。📱 手机上：装的只是一份技能配置，不涉及编译任何东西，在 Termux 里跑 Claude Code 的 `/plugin` 命令就能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux + 💻 电脑（都在 Claude Code 对话里操作）",
          "intro": "这一步是在 Claude Code 的对话框里直接输入，不是在外面的终端敲。",
          "steps": [
            { "text": "在 Claude Code 里装插件：", "code": "/plugin install superpowers@claude-plugins-official" },
            { "text": "装完开一个新对话，让插件生效。" }
          ],
          "done": "下次让 Claude Code 做一个稍复杂的任务时，它会先跟你确认需求、列计划再动手写代码，而不是直接甩代码，就是装好了。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🛠",
      "repo": "openai/codex-security",
      "deploy": ["phone", "pc"],
      "title": "用 AI 帮你扫代码里的安全漏洞",
      "lang": "TypeScript",
      "stars": "13,958",
      "week": "2,531",
      "body": "这是 OpenAI 做的代码安全扫描工具，命令行一条命令就能扫当前项目，帮你找、核实、修代码里的安全漏洞，背后是调用 AI 模型去分析代码而不是死板的规则匹配；也提供 GitHub Action，可以挂在仓库里自动跑。",
      "explain": "「安全漏洞」指代码里可能被人利用来做坏事的问题，比如密码写死在代码里、输入没检查导致能被注入恶意内容这类；工具本身是用 TypeScript 写的命令行程序，不涉及要编译的原生库。",
      "opinion": "手上几个已经上线或准备上线的小工具、App，跑一遍能帮着挑出一些自己没注意到的问题，比自己一行行猜靠谱；但它扫描要调用 AI 模型分析代码，会产生对应的 API 调用费用，拿去扫代码量不大的项目成本应该不高，大项目之前先看看价格。📱 手机上：它是纯 TypeScript 写的命令行工具，没有 jiter、openai SDK 那类装不上的依赖，用 npm 装理论上能跑，具体效果没实测过，先拿小项目试一下。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux + 💻 电脑（命令一样）",
          "intro": "需要 Node.js 22 及以上版本，以及 Python 3.10 以上（用来跑它内部的部分检查逻辑）。",
          "steps": [
            { "text": "全局安装：", "code": "npm install -g @openai/codex-security" },
            { "text": "登录或配置模型 key：", "code": "cs login", "after": "登录会跳浏览器走一遍授权；不想登录的话，直接设置环境变量 OPENAI_API_KEY 也能用。" },
            { "text": "扫描当前项目：", "code": "cs scan .", "after": "跑完会列出发现的问题和风险等级，看不懂报告里的术语就直接丢给 Claude Code 让它用大白话解释、顺便帮你改。" }
          ],
          "done": "能跑出一份列着风险等级的扫描报告，就是装成功了。"
        }
      ],
      "url": "https://github.com/openai/codex-security"
    },
    {
      "emoji": "📚",
      "repo": "jingyaogong/minimind",
      "deploy": ["pc"],
      "title": "从零手写训练一个迷你大模型",
      "lang": "Python",
      "stars": "65,960",
      "today": "192",
      "body": "这个项目带你从零手写训练一个 6400 万参数的小语言模型，README 里说在一块 RTX 3090 显卡上跑一轮训练大概 2 小时，附带完整的预训练、微调代码和教程，训练完还能跟它对话。目标是让人看懂大模型训练的全过程，不是拿来当日常助手用。",
      "explain": "「参数」可以理解成模型里能调整的「旋钮」数量，越多模型能学的东西越复杂，也越吃资源；「从零训练」和平时说的调 API、「微调」不是一回事——调 API 是直接用别人训好的大模型，这个项目是从一张白纸开始、拿数据把模型喂出来，所以能看到训练的每一步是怎么发生的。GPU（显卡）之所以比 CPU 训练快很多，是因为它天生就是为「同时做海量次简单运算」设计的，正好对上训练模型需要的那种计算。",
      "opinion": "平时都是调别人的 LLM API，这个项目能让看看模型训练到底是怎么回事——数据怎么喂进去、参数怎么一步步调整，对理解 AI 原理会有帮助；但完整训练需要一块像 RTX 3090 这种级别的显卡，普通电脑没有合适显卡的话只能用 CPU 跑得很慢，或者租一台云 GPU 跑完整流程。📱 手机上：要装 PyTorch 和 CUDA，Termux 里装不了，只能在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（最好有支持 CUDA 的显卡，没有也能跑但很慢）",
          "intro": "没显卡也能先把代码跑通看看流程，只是速度会很慢；想要正常速度训练，建议租一台云 GPU。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone --depth 1 https://github.com/jingyaogong/minimind\ncd minimind", "after": "下载慢或失败就先开代理。" },
            { "text": "装依赖（用国内源加速）：", "code": "pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple" },
            { "text": "按 README 里的链接把训练数据集下载到 `./dataset` 目录。" },
            { "text": "开始预训练：", "code": "cd trainer\npython train_pretrain.py", "after": "没有合适显卡的话这一步会非常慢，等很久、没报错就是正常在跑。" },
            { "text": "训练完用这条命令跟它聊几句看效果：", "code": "python eval_llm.py --load_from ./minimind-3" }
          ],
          "done": "能跟训练出来的模型对话、它能给出像样的回复，就说明整条流程跑通了。"
        }
      ],
      "url": "https://github.com/jingyaogong/minimind"
    },
    {
      "emoji": "💰",
      "repo": "mayswind/ezbookkeeping",
      "deploy": ["pc", "cloud"],
      "title": "自己部署的轻量记账软件",
      "stars": "6,100+",
      "body": "这是一个自己部署的轻量记账软件，记录每天花销、按分类统计、能导入其他工具或账单的数据，还能生成图表看钱花在哪儿了，设计上照顾到了小主机、NAS、树莓派这类配置不高的机器。官方给了编译好的 Windows/Linux/macOS 可执行文件和 Docker 镜像，不一定非要用 Docker。",
      "explain": "「自托管」是说软件装在自己的电脑或服务器上、数据存在自己手里，不是传到别人公司的服务器；「NAS」是家用网络存储盒子，很多人拿它当家里的小型服务器用，不熟悉的话跳过这部分，直接装在电脑上用也完全可以。",
      "opinion": "刚开始学理财，从日常记账练起比直接啃需要先学复式记账规则的工具容易上手，这个软件界面简单、装完直接能用；纯粹是记录和统计工具，不涉及任何投资建议或自动交易，放心用。📱 手机上：官方只给了 Windows/Linux/macOS 的可执行文件和 Docker 镜像，没有专门为 Termux 打包的版本，大概率装不上，建议装在电脑上，装好后用手机浏览器照样能访问。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，用官方编译好的可执行文件）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/mayswind/ezbookkeeping/releases) 下载 Windows 版压缩包并解压。" },
            { "text": "在解压出来的文件夹里运行：", "code": ".\\ezbookkeeping.exe server run" },
            { "text": "浏览器打开 http://localhost:8080，首次使用先注册一个自己的账号。" }
          ],
          "done": "打开网页能看到登录/注册页面，注册完能看到记账看板，就是装好了。"
        },
        {
          "title": "怎么部署到云服务器 · ☁️ Docker（可选，想随时用手机浏览器访问就放云上）",
          "steps": [
            { "text": "先在服务器上装好 Docker，然后一条命令启动：", "code": "docker run -p8080:8080 mayswind/ezbookkeeping", "after": "长期用的话官方建议把数据目录挂载成持久化存储，不然容器删掉数据就没了，具体挂载参数看仓库 README 里 Docker 那一节。" },
            { "text": "浏览器打开 http://服务器IP:8080，首次使用先注册账号。" }
          ],
          "done": "能打开登录/注册页面，就是装好了。"
        }
      ],
      "url": "https://github.com/mayswind/ezbookkeeping"
    },
    {
      "emoji": "🤖",
      "repo": "vercel-labs/agent-browser",
      "deploy": ["pc"],
      "title": "让 AI 像人一样点网页的命令行工具",
      "lang": "Rust",
      "stars": "52,370",
      "week": "3,429",
      "body": "这是一个命令行工具，给 AI agent 一个能实际操作的浏览器：AI 发一条指令（比如点某个按钮、填一个表单），工具就在浏览器里把这件事做了，再把页面新内容读回去给 AI 看，一步步来回，浏览器在命令之间会一直保持打开状态。",
      "explain": "它给页面上每个按钮、输入框都编了一个像 `@e1` 这样的引用号，AI 直接说「点 @e1」就行，不用靠截图去识别按钮位置，这比纯看图识别更准、也更省算力；这个工具是给 AI（比如 Claude Code）调用的，不是给人自己点的浏览器。",
      "opinion": "平时写的都是调 API 的单文件小工具，用不上这个；但如果以后想做一个「帮我自动填表、自动操作网页」这类需要操作网页的 agent，这种工具比自己从头写浏览器自动化代码省事很多，可以等真有这类需求时再装。📱 手机上：官方只给了 macOS / Linux x64 / Windows 编译好的程序，没有专门为 Termux 打包的版本，而且第一次用还要另外下载一个 Chrome for Testing 浏览器，手机上大概率装不上也用不起来，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "需要先装好 Node.js。",
          "steps": [
            { "text": "全局安装：", "code": "npm install -g agent-browser" },
            { "text": "装浏览器（第一次要下载 Chrome for Testing，文件比较大，耐心等）：", "code": "agent-browser install" },
            { "text": "不想全局装的话，也可以直接试一下：", "code": "npx agent-browser open example.com" }
          ],
          "done": "命令跑完能自动弹出一个浏览器窗口打开对应网页，就是装成功了。"
        }
      ],
      "url": "https://github.com/vercel-labs/agent-browser"
    },
    {
      "emoji": "🎨",
      "repo": "Anduin2017/HowToCook",
      "deploy": ["read"],
      "title": "程序员的在家做饭指南",
      "stars": "104,071",
      "today": "43",
      "body": "一份社区维护的菜谱合集，每道菜都把食材分量、步骤顺序写得明明白白，不像一般菜谱写「盐适量」「少许」这种模糊说法，照着做不容易翻车；另外还有刀工、焯水、各种厨房电器怎么用的专门讲解，照顾完全没下过厨的人。",
      "explain": "这个项目主要是生活技巧，不涉及什么技术术语；「焯水」是指把食材先在开水里烫一下再正式烹饪的一个步骤，项目里专门有一页讲这个和其他几个基础厨房手法，跟着做就行。",
      "opinion": "跟平时做的 AI 工具、学 Python/电工这些没关系，纯粹是个顺手的生活工具，想做饭的时候打开在线版翻一下就行，不用装任何东西。📱 手机上：有在线版，手机浏览器直接打开就能看，不用装。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "手机或电脑浏览器直接打开在线版：[howtocook.aiursoft.com](https://howtocook.aiursoft.com)" },
            { "text": "也可以直接在 GitHub 仓库里按分类翻（荤菜、素菜、早餐、半成品加工等），网页版搜索起来更方便。" }
          ],
          "done": "打开网页能看到菜谱分类列表，就说明能正常用。"
        }
      ],
      "url": "https://github.com/Anduin2017/HowToCook"
    }
  ]
};
