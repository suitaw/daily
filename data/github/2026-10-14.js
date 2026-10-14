DAILY_DATA["github/2026-10-14"] = {
  "date": "2026-10-14",
  "highlight": "今天最值得动手试的是 `vercel-labs/skills`：一条 `npx` 命令就能给 Claude Code、Codex 这些 AI 编程工具装上别人写好的技能包，不挑设备，立刻能试。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "vercel-labs/skills",
      "deploy": ["phone", "pc"],
      "title": "一条命令给 AI 编程工具装技能包",
      "lang": "TypeScript",
      "stars": "34,499",
      "today": "190",
      "body": "vercel-labs/skills 是个命令行工具，专门管理「AI 技能包」：一条命令就能给 Claude Code、Codex、Cursor 等一大堆 AI 编程工具装上别人写好的技能。能先列出技能包里有哪些技能，挑着装，之后也能随时更新或删掉。",
      "explain": "「技能包」可以理解成给 AI 编程工具装的插件——本来它不太会的本事（比如按统一规范做前端设计），装上之后就会用了。这个工具的好处是不挑具体用哪个 AI 编程工具，装一次能在好几个上用。",
      "opinion": "你现在用的 AI 编程工具大概率在它支持的列表里，装一个试试基本零成本，不满意删掉就行。遇到网速慢多等等，不用改配置。📱手机上：大概率能装——`npx` 是纯 JS 命令，不用编译，Termux 里应该能跑；如果卡住大概率是连不上 GitHub，命令前加代理试试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "确认已经装好 Claude Code 或 Codex 命令行工具" },
            { "text": "看看这个技能包里有哪些技能", "code": "https_proxy=http://127.0.0.1:7890 npx skills add vercel-labs/agent-skills --list", "after": "第一次跑会先下载 skills 这个小工具，是正常现象" },
            { "text": "挑一个装上试试，比如前端设计技能", "code": "https_proxy=http://127.0.0.1:7890 npx skills add vercel-labs/agent-skills --skill frontend-design -a claude-code" }
          ],
          "done": "下次用 Claude Code 做前端相关任务时，它提示用到了这个技能，就是装上了"
        },
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "打开终端，看看这个技能包里有哪些技能", "code": "npx skills add vercel-labs/agent-skills --list", "after": "下载慢或失败就先开代理" },
            { "text": "挑一个装上试试，比如前端设计技能", "code": "npx skills add vercel-labs/agent-skills --skill frontend-design -a claude-code" }
          ],
          "done": "下次用 Claude Code 做前端相关任务时，它提示用到了这个技能，就是装上了"
        }
      ],
      "url": "https://github.com/vercel-labs/skills"
    },
    {
      "emoji": "🤖",
      "repo": "debpalash/VoiceStudio",
      "deploy": ["pc"],
      "title": "本地开源语音工具，能克隆声音做配音",
      "lang": "Python",
      "stars": "63,258",
      "today": "1,748",
      "body": "VoiceStudio 是个开源的本地语音工具，定位是「免费版 ElevenLabs」。能做声音克隆、视频配音、语音转文字，还能批量生成有声书，支持 646 种语言。官方说装好之后模型都在本地跑，不用联网。",
      "explain": "ElevenLabs 是一家很火的付费 AI 配音公司，不少视频配音、有声书都用它的声音。VoiceStudio 想做一个本地免费版，不用按月交钱，代价是要自己在电脑上装、模型文件也占不少硬盘空间。",
      "opinion": "想给视频配旁白、把文章做成有声书，或者单纯想试试声音克隆，这个可以直接用官方一键安装包装，不用碰命令行里麻烦的编译步骤。没有独显也能跑（选 CPU 模式），就是会慢一点。📱手机上：装不了——它是桌面软件（Electron+本地语音模型），Termux 没有图形界面也扛不住这堆依赖，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 Windows PowerShell，粘贴一键安装命令", "code": "irm https://voicestudio.sh/install | iex", "after": "下载慢或失败就先开代理重试" },
            { "text": "装完后在开始菜单找到 VoiceStudio 打开" },
            { "text": "首次打开选 CPU 模式（没有独显就选这个），等它下载语音模型文件", "after": "模型文件比较大，没反应就耐心等，别重复点" }
          ],
          "done": "能打开主界面，选一个语言试听出声音，就算装成功"
        }
      ],
      "url": "https://github.com/debpalash/VoiceStudio"
    },
    {
      "emoji": "🎨",
      "repo": "calesthio/OpenMontage",
      "deploy": ["pc"],
      "title": "让 AI 编程助手帮你剪视频",
      "lang": "Python",
      "stars": "67,972",
      "week": "3,401",
      "body": "OpenMontage 把 Claude Code、Codex 这类 AI 编程助手变成一个视频剪辑工作室：跟它描述想要的视频，它用上百个工具和十几套流程自己完成找素材、配音、剪辑、渲染。有个零 API key 的演示模式，用免费的离线配音和免费素材库就能先试一遍。",
      "explain": "「智能体（agentic）」「流程（pipeline）」听着唬人，其实就是 AI 助手按一套写好的步骤自己调用一堆小工具干活，你不用管每一步具体怎么做。里面用到的 Remotion、FFmpeg 都是专门渲染视频的引擎，当黑箱工具用就行。",
      "opinion": "如果平时就用 Claude Code 写代码，装上这个之后可以直接在里面跟它聊着做个短视频，demo 模式完全不用填 API key，先免费试一遍看效果再决定要不要接付费的配音/素材服务。项目工具多、依赖杂，第一次装需要点耐心。📱手机上：装不上——要跑 FFmpeg、Node 和好几个 Python 包外加视频渲染引擎，Termux 扛不住，只能在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "打开终端，克隆仓库", "code": "git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage", "after": "下载慢或失败就先开代理" },
            { "text": "跑自动安装脚本（Windows 用户按 README 里给的 PowerShell 版本）", "code": "make setup", "after": "不保证一次就顺，需要 FFmpeg、Node 18+、Python 3.10+ 这些环境，缺什么按提示装什么" },
            { "text": "先试免费演示模式，不用填任何 API key", "code": "make demo" },
            { "text": "用自己的 AI 编程助手（Claude Code、Codex 等）打开这个项目文件夹，直接跟它说想要什么视频" }
          ],
          "done": "跑完 `make demo` 能在项目里看到生成的视频文件，就说明环境搭好了"
        }
      ],
      "url": "https://github.com/calesthio/OpenMontage"
    },
    {
      "emoji": "🎨",
      "repo": "greensock/GSAP",
      "deploy": ["phone", "pc"],
      "title": "网页动画库，CDN 一行代码就能用",
      "lang": "JavaScript",
      "stars": "29,173",
      "week": "338",
      "body": "GSAP 是个很成熟的网页动画库，能让 CSS、SVG、canvas 上的元素动起来，还带一个跟着滚动条联动的动画插件。最近把以前要收费的插件也全部开放，官方说现在整套工具商用也完全免费。",
      "explain": "CDN 的意思是直接引用别人托管好的一份代码文件，不用自己下载、不用装包管理工具，加一行 `<script>` 就能用——跟你现在写单文件 HTML 的习惯完全合得上。",
      "opinion": "给自己做的游戏页面、互动页面加个过渡动画、滚动特效，用这个比自己手写补间动画省事很多，而且不引入任何构建工具。先在一个页面里试一个小动画，效果不满意随时删掉那一行就行。📱手机上：能用——不是要装的软件，是往自己网页里加一行引用，手机上编辑 HTML、在浏览器里看效果都没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（命令一样）",
          "intro": "不用装软件，是往自己的 HTML 文件里加代码",
          "steps": [
            { "text": "在 HTML 文件的 `<head>` 里加这一行引用", "code": "<script src=\"https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js\"></script>" },
            { "text": "在自己的 `<script>` 里试着让一个元素动起来", "code": "gsap.to(\".box\", {x: 100, duration: 1});" }
          ],
          "done": "刷新网页，对应的元素真的移动了，就是用上了"
        }
      ],
      "url": "https://github.com/greensock/GSAP"
    },
    {
      "emoji": "🛠",
      "repo": "mnfst/awesome-free-llm-apis",
      "deploy": ["read"],
      "title": "免费大模型 API 清单，连坑点都标好了",
      "stars": "10,126",
      "week": "809",
      "body": "一份持续维护的清单，收集了 16 家能免费用的大模型 API，列清楚了每家的速率限制、要不要实名、会不会拿你的对话去训练模型这些细节，还会标注哪些额度不是「永久免费」而是限时试用。",
      "explain": "「RPM / RPD」是「每分钟 / 每天能请求几次」的缩写，是判断一个免费 API 够不够用的关键数字；清单里标的「会记录对话用于训练」是说有些家的免费档会拿你发的内容去训练模型，介意的话要避开。",
      "opinion": "做 AI 小工具时手上多备几个免费 API 选项，某一家限额用完或者不稳定可以马上切换，不用现场满世界搜。挑之前先看清楚额度和「是否记录训练」这两条，别只看哪家免费就直接接。📱手机上：不用装——就是个清单，手机浏览器打开看表格、点链接去对应官网申请 key 就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库页面看完整表格：https://github.com/mnfst/awesome-free-llm-apis" },
            { "text": "挑一个额度和隐私条款都合适的，点它的链接去对应官网申请 API key" }
          ],
          "done": "拿到一个能用的免费 API key，就算挑到手了"
        }
      ],
      "url": "https://github.com/mnfst/awesome-free-llm-apis"
    },
    {
      "emoji": "📚",
      "repo": "jaywcjlove/linux-command",
      "deploy": ["read"],
      "title": "600多个 Linux 命令的中文速查手册",
      "lang": "Markdown",
      "stars": "37,128",
      "today": "13",
      "body": "收集了 600 多条 Linux 命令，每条都配着用法、参数说明和例子，还打包成了一个能搜索的网页版手册。不是要装的软件，是一本能在线翻、能搜索的命令词典。",
      "explain": "平时在 Termux 里敲命令，遇到不熟的参数经常只能瞎猜，这种速查手册的作用就是把「这个命令能加哪些参数、什么意思」直接列出来，比到处搜博客靠谱。",
      "opinion": "在 Termux 终端里手生的命令，随手搜一下这本手册比翻零散的教程快，当作日常参考书用就行，不用一次看完。📱手机上：不用装，直接打开网页看或搜索，手机浏览器也行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开官方速查网站：https://jaywcjlove.github.io/linux-command/" },
            { "text": "在搜索框里输入命令名，比如 `tar` 或 `grep`，直接看用法和例子" }
          ],
          "done": "能搜到想查的命令、看懂它的用法和例子，就够用了"
        }
      ],
      "url": "https://github.com/jaywcjlove/linux-command"
    }
  ]
};
