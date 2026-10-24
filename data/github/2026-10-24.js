DAILY_DATA["github/2026-10-24"] = {
  "date": "2026-10-24",
  "highlight": "今日看点：最值得先试的是官方出的 claude-plugins-official——一个有官方把关的 Claude Code 插件目录，手机电脑都能用，装插件前先去逛一圈找找能用上的，比自己到处搜靠谱很多。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "anthropics/claude-plugins-official",
      "deploy": ["phone", "pc"],
      "title": "官方整理的 Claude Code 插件目录",
      "stars": "44,126",
      "week": "4,250",
      "body": "Anthropic 官方维护的 Claude Code 插件目录，把官方自己做的和社区贡献的插件分门别类收进一个仓库，不用自己到处找插件来源。官方说会标清楚哪些是自己出的、哪些是第三方提交的，装前能先看每个插件的说明。",
      "explain": "插件（Plugin）是给 Claude Code 装的功能包，可能是一套新的斜杠命令、一套它会自动用到的技能说明，或者接一个新工具；这个仓库相当于一个有官方把关的「应用商店目录」，不用自己满 GitHub 找插件，也不用太担心装到来路不明的东西。",
      "opinion": "一直在用 Claude Code 写代码，这个目录能省掉自己到处搜插件的功夫，没事去翻一下有没有能用上的通用工具（比如整理笔记、管理待办这类），按需装、不用全装；第三方插件官方自己也说没法保证质量和不会变，装前最好点进插件主页看一眼说明。📱 手机上：装得上，整个过程就是在 Claude Code 对话框里敲命令，手机电脑用的是同一套操作，不需要额外编译什么。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "直接在 Claude Code 对话框里操作，不用额外装东西。",
          "steps": [
            { "text": "添加官方插件目录：", "code": "/plugin marketplace add anthropics/claude-plugins-official" },
            { "text": "浏览看看有哪些插件：", "code": "/plugin", "after": "打开后选 Discover 标签页，能看到完整列表和每个插件的说明。" },
            { "text": "看中哪个就记下名字，装上（把 `<插件名>` 换成实际名字）：", "code": "/plugin install <插件名>@claude-plugins-official" }
          ],
          "done": "跑 `/plugin` 能在已安装列表里看到装上的插件，对应的斜杠命令或技能在对话里能用了，就是装成功了。"
        }
      ],
      "url": "https://github.com/anthropics/claude-plugins-official"
    },
    {
      "emoji": "🤖",
      "repo": "OpenBMB/VoxCPM",
      "deploy": ["pc"],
      "title": "能克隆声音、靠描述设计声音的开源语音合成",
      "lang": "Python",
      "stars": "40,256",
      "today": "150",
      "body": "OpenBMB 开源的语音合成模型，支持中英日韩等 30 种语言和几种方言，能把文字读出来，还有两个花活：不给录音、靠一句文字描述（比如「年轻女声，温柔」）直接「设计」出一个新声音；或者喂一小段录音，让它模仿着读别的文字。官方说输出是 48kHz 的高质量音频。",
      "explain": "语音合成（TTS）就是把文字变成人声朗读；声音克隆是喂一段某人的录音进去，让模型学着模仿那个音色读别的文字，不是简单的录音剪辑拼接。",
      "opinion": "做视频翻译配双语字幕，或者给自己的小工具加语音播报，这个能派上用场——比如把翻译好的台词读出来配一条配音轨；本地跑对显卡要求不低，没有合适显卡的话先打开官方挂在 Hugging Face 上的免费在线试玩版听听效果，觉得好用再决定要不要装到本地。📱 手机上：装不上，依赖 PyTorch 和 CUDA 显卡跑模型，Termux 环境带不动，手机也没有独立显卡。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（需要 NVIDIA 显卡，大约 8GB 显存起）",
          "intro": "没有独显就不用往下装，直接打开官方免费在线试玩版听效果：[VoxCPM-Demo](https://huggingface.co/spaces/OpenBMB/VoxCPM-Demo)。",
          "steps": [
            { "text": "确认装了 Python（3.10~3.12）和支持 CUDA 12 以上的显卡驱动，打开终端装这个库（下载慢或失败就先开代理）：", "code": "pip install voxcpm" },
            { "text": "靠文字描述「设计」一个声音读一段话：", "code": "voxcpm design --text \"这是一句测试文本。\" --output out.wav" },
            { "text": "或者喂一段录音样本，让它模仿着读：", "code": "voxcpm clone --text \"这是一句测试文本。\" --reference-audio voice.wav --output out.wav" }
          ],
          "done": "当前目录下生成出 out.wav，打开能听到合成的语音，就是装成功了。"
        }
      ],
      "url": "https://github.com/OpenBMB/VoxCPM"
    },
    {
      "emoji": "🤖",
      "repo": "earthtojake/text-to-cad",
      "deploy": ["pc"],
      "title": "让 AI 直接画 3D 模型、出工程图纸",
      "stars": "22,756",
      "week": "1,837",
      "body": "给 Claude Code、Codex 这类 AI 编程助手装的一个 CAD 技能，装上后能让 AI 直接把文字描述变成 3D 模型，导出 STEP、STL 这些能导入其他建模软件或拿去 3D 打印的通用格式，还能自动跑一遍「能不能造出来」的检查、生成工程图纸。官方说核心建模流程是离线跑的，模型数据不会传到外部服务器。",
      "explain": "CAD 就是电脑辅助设计，工程师画零件图、建 3D 模型用的软件；STEP/STL 是导出的通用模型文件格式，几乎所有 3D 建模、3D 打印软件都认得。",
      "opinion": "之前在云端渲染过 3D 模型，这个工具相当于把「画 3D 模型」这一步也交给 AI，直接在 Claude Code 对话里说想要什么形状、什么结构，不用自己去学建模软件；连 3D 打印相关服务的那部分功能用不用得上看有没有打印机，单独用核心建模功能也成立。第一次用要联网下载 CAD 运行时，之后能不能全程离线没细说，先试一次看看。📱 手机上：不保证，它要跑一个本地的 CAD 运行时内核，Termux 有没有对应的安装包不确定，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在 Claude Code 里直接装：", "code": "/plugin install text-to-cad@earthtojake", "after": "Windows 11 如果开了 Smart App Control，这个 CAD 内核会被挡住，需要关掉这个设置或者改用 WSL。" },
            { "text": "确保联网，第一次用会自动下载 CAD 运行时，下载慢或失败就先开代理。" },
            { "text": "在对话框里直接描述想要的零件，比如：", "code": "帮我画一个边长 5 厘米的立方体，导出 STL" }
          ],
          "done": "AI 回复里会给出生成的模型文件路径，打开 .stl/.step 文件能看到 3D 模型，就是装成功了。"
        }
      ],
      "url": "https://github.com/earthtojake/text-to-cad"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "deploy": ["read"],
      "title": "图解数据结构与算法教程",
      "stars": "130,934",
      "week": "225",
      "body": "一本开源的数据结构与算法教程，用动画风格的插图讲解，每个知识点配了能直接运行的示例代码，支持中文、英文等好几种语言阅读，代码示例覆盖 Python、Java、C++ 等十几种编程语言。",
      "explain": "数据结构与算法是编程里偏「地基」的一块内容——怎么组织数据（比如列表、树），怎么写出运行更快的处理逻辑；跟变量、判断、循环这些基础语法不是一回事，一般是打好基础语法之后再学。",
      "opinion": "现在 Python 还在变量这一章，这本书可以先收藏，等把变量、判断、循环这些基础语法过一遍之后再回来看，插图讲得比纯文字教程直观不少，不用急着现在啃；在线看不用装任何东西，想跑代码示例本地有 Python 就能跑。📱 手机上：能看，就是个普通网页，手机浏览器直接打开；想跑 Python 代码示例也没问题。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开在线版：[hello-algo.com](https://www.hello-algo.com)" },
            { "text": "想离线看，也能去仓库 Releases 页面下 PDF/EPUB：[Releases](https://github.com/krahets/hello-algo/releases)" }
          ],
          "done": "打开网页能看到章节目录和插图，就算看成了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "🎨",
      "repo": "LorisYounger/VPet",
      "deploy": ["pc"],
      "title": "能自己养的开源桌面宠物",
      "lang": "C#",
      "stars": "7,022",
      "today": "7",
      "body": "一个开源的桌面宠物模拟器，养一只会在桌面上走来走去、能互动的虚拟宠物，支持 Steam 创意工坊的 Mod，官方说也能当组件嵌进自己写的 WPF 桌面程序里。",
      "explain": "WPF 是微软一套做 Windows 桌面程序界面的技术，跟网页里的 HTML/CSS 不是一回事；桌宠就是常驻在桌面上、会动会互动的小动物形象，纯装饰加互动，不影响其他程序使用。",
      "opinion": "写代码写久了，桌面上放一个能喂、能互动的小宠物换换心情，图一乐，不是生产力工具；Steam 上有现成免费版，不用自己编译，点点鼠标就能装上。📱 手机上：装不了，这是 Windows 桌面程序，手机没有对应版本。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 Steam，搜索「VPet」找到官方免费版点安装。", "after": "没有 Steam 账号就先免费注册一个。" },
            { "text": "装完从 Steam 库里直接启动，照提示选一个初始宠物就能开始养。" }
          ],
          "done": "桌面上出现一只会动的小宠物，能点它互动、喂食，就是装成功了。"
        }
      ],
      "url": "https://github.com/LorisYounger/VPet"
    },
    {
      "emoji": "🎨",
      "repo": "Renhuai123/ziwei-doushu",
      "deploy": ["pc"],
      "title": "开源的紫微斗数排盘引擎",
      "lang": "TypeScript",
      "stars": "6,858",
      "today": "546",
      "body": "一个开源的紫微斗数（一种传统命理分析方法）排盘引擎，实现了排盘算法、四化系统和一套格局知识库，仓库自带一个网页版，填生辰信息就能生成命盘图。核心的排盘和展示功能跑在浏览器里，不用连外部服务，不需要 API Key。",
      "explain": "紫微斗数是一种传统命理分析方法，靠出生时间排出一张「星盘」来解读；这里是把这套排盘规则写成了代码，纯粹是算法加数据，输出的解读内容要辩证看待，不是科学结论。",
      "opinion": "纯粹当一个好玩的编程项目来看——用代码实现一套传统规则、自己跑起来生成命盘图，练练读别人项目代码的手感，顺手玩一下；真要拿结果当人生指导就没必要了，仓库自己也说带「AI 解读」的那部分功能要自己接后端，开源版本没有现成实现。📱 手机上：不保证，本地要跑一个 Next.js 开发服务器，Termux 装 Node 依赖理论上能跑，但项目偏重，流不流畅不好说，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "确认装了 Node.js，克隆仓库并装依赖（下载慢或失败就先开代理）：", "code": "git clone https://github.com/Renhuai123/ziwei-doushu.git\ncd ziwei-doushu\nnpm install" },
            { "text": "复制一份环境变量配置文件：", "code": "cp .env.example .env.local" },
            { "text": "启动本地开发服务器：", "code": "npm run dev" },
            { "text": "打开浏览器访问：", "code": "http://localhost:3000" }
          ],
          "done": "页面能填生辰信息并生成命盘图，就是跑成功了。"
        }
      ],
      "url": "https://github.com/Renhuai123/ziwei-doushu"
    }
  ]
};
