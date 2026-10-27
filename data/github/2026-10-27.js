DAILY_DATA["github/2026-10-27"] = {
  "date": "2026-10-27",
  "highlight": "今天最值得动手试的是 `huashu-design`——给 AI 编程工具装上一把「设计脑子」，一句话就能换回能交付的网页、原型或 PPT 草稿，想做点好看的小工具/演示的人可以直接试。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "multica-ai/andrej-karpathy-skills",
      "deploy": ["phone", "pc"],
      "title": "给 AI 编程工具装一份「别乱改、少写屁话」的行为准则",
      "stars": "224,651",
      "today": "638",
      "body": "这是一份放进项目或当插件装的说明文件，核心是 4 条写代码的规矩：先想清楚再动手、只写刚好够用的代码、只改要改的地方、干活前先定好「怎么算做完」。作者整理自知名 AI 研究者 Andrej Karpathy 对 AI 编程常见毛病的观察，这几天在 GitHub 热门榜上一直排得很靠前。",
      "explain": "这类说明文件是 AI 编程工具开始写代码前会先读一遍的「项目规矩」，不是程序，不用编译，就是一段文字。文中说的「插件市场」是统一安装这类扩展的地方，装一次之后换哪个项目都能用。",
      "opinion": "这几条规矩说的「别过度设计」「只改要改的地方」正是写代码时容易踩的坑，装上基本零成本，坐等它在后续对话里起作用就行，值得先试一周看有没有感觉。它只是文字规则，不装任何软件包。📱 手机上：能用，就是跑一条命令或复制一段文字，Termux 里完全没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令通用）",
          "intro": "用 Claude Code 自带的插件市场装，比较省事。",
          "steps": [
            { "text": "在 Claude Code 对话框里添加这个技能市场", "code": "/plugin marketplace add forrestchang/andrej-karpathy-skills" },
            { "text": "装上这份行为准则", "code": "/plugin install andrej-karpathy-skills@karpathy-skills" }
          ],
          "done": "装完后开一个新对话让 AI 编程工具写点代码，能明显感觉到它会先把思路说清楚，而不是直接摊一大段代码上来。"
        }
      ],
      "url": "https://github.com/multica-ai/andrej-karpathy-skills"
    },
    {
      "emoji": "🛠",
      "repo": "NVIDIA/SkillSpector",
      "deploy": ["pc"],
      "title": "装 AI 插件/技能前先用它扫一遍，查有没有藏恶意代码",
      "lang": "Python",
      "stars": "22,185",
      "today": "214",
      "body": "NVIDIA 出的安全扫描工具，专门检查给 Claude Code、Codex 这类 AI 编程工具用的技能包/插件。内置 71 条检测规则，先做静态分析，查提示词注入、偷偷联网泄露数据、权限滥用、依赖里混入的供应链风险；也可以选加一层 AI 语义分析，但不开也能用。今天刚上榜。",
      "explain": "「提示词注入」是说一个技能文件里藏了几句话，想骗 AI 去做开发者没让它做的事，比如偷偷上传文件；「供应链风险」是说装的东西里混进了来源不明、会偷偷联网拉代码的部分。这工具就是帮你在装之前先检查一遍，而不是装上了才发现有问题。",
      "opinion": "从网上装 AI 编程工具的插件和技能包时来源五花八门，装之前用它扫一下是个不错的习惯,能避免装到带后门的包。只做静态扫描（加 `--no-llm`）就够用，不用配任何 API key。它靠 Python 的 openai 库运行，这个库依赖的 jiter 在手机上编译不过。📱 手机上：装不上——openai 这个 Python 库在 Termux 里装不进去，只能放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "需要 Python 3.12 及以上；手机 Termux 装不了，这步只能在电脑上做。",
          "steps": [
            { "text": "没装过 uv（Python 包管理器）的话先装一下", "code": "pip install uv" },
            { "text": "把工具装到全局", "code": "uv tool install git+https://github.com/NVIDIA/skillspector.git", "after": "如果下载慢或失败，先开代理再试" },
            { "text": "扫描一个本地的技能文件夹（换成自己要装的那个路径），只做静态检查不用配 API key", "code": "skillspector scan ./my-skill/ --no-llm" }
          ],
          "done": "命令跑完会打印一份风险评分，退出码是 0 说明没查到严重问题，是 1 说明有明显风险，别装了。"
        }
      ],
      "url": "https://github.com/NVIDIA/SkillSpector"
    },
    {
      "emoji": "🤖",
      "repo": "anomalyco/opencode",
      "deploy": ["pc"],
      "title": "又一个开源的终端 AI 编程 agent，可以拿来对比着用",
      "lang": "TypeScript",
      "stars": "221,961",
      "week": "5,070",
      "body": "跟 Claude Code、Codex 类似的终端里跑的开源 AI 编程 agent，内置「build」（完整权限直接改代码）和「plan」（只读、改文件和执行命令前都会先问）两种模式，也有桌面版。本周在 GitHub 热门榜涨得很快。",
      "explain": "这类工具本质是命令行版本的 AI 程序员：你在终端里说需求，它读代码、改代码、跑命令。「plan 模式」相当于先让它只看不动手，你确认了再放手让它改，适合不放心直接给权限的时候用。",
      "opinion": "手上已经用熟 Claude Code、Codex 的话,这个可以装起来对比一下写代码风格、速度、要不要额外付费 key，说不定某些场景它处理得更顺手。它不是刚需，纯粹是「多一个工具可选」，闲着的时候试试就行。官方没写清楚手机上能不能装，没把握,不保证。📱 手机上：不保证——官方说明没提到手机/Termux，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "全局装上这个命令行工具", "code": "npm i -g @opencode/cli@latest", "after": "下载慢或失败就先开代理再试" },
            { "text": "装完直接在终端里跑起来", "code": "opencode" }
          ],
          "done": "跑起来会进入一个终端界面，能像在 Claude Code / Codex 里一样跟它对话写代码。"
        }
      ],
      "url": "https://github.com/anomalyco/opencode"
    },
    {
      "emoji": "🛠",
      "repo": "alchaincyf/huashu-design",
      "deploy": ["phone", "pc"],
      "title": "一句话生成网页、原型、PPT 草稿的 AI 设计技能",
      "lang": "HTML",
      "stars": "26,742",
      "today": "251",
      "body": "给 Claude Code、Codex、Cursor 这类支持技能扩展的 AI 编程工具用的设计技能包，装上之后直接用一句话描述需求，就能让 AI 产出网页、App 交互原型、可编辑的 PPT、动画或信息图的草稿。今天新上榜，涨得很快。",
      "explain": "这东西不是独立软件，是给已经在用的 AI 编程工具「加技能」，让它在设计这件事上更懂规矩，不再是随手拼个丑页面。",
      "opinion": "平时要做点带界面的小工具或者演示页面，装上之后直接跟 AI 说「做个 XX 的页面，给我 3 个风格方向选」之类的话就能试，省得自己从零想排版。产出是草稿不是成品，想要的效果还是要自己改细节，但起个头很快。📱 手机上：能装，就是 Node 跑一条命令同步几个文件，Termux 里没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "在 AI 编程工具里装这份设计技能", "code": "https_proxy=http://127.0.0.1:7890 npx skills add alchaincyf/huashu-design" }
          ],
          "done": "去 `~/.claude/skills/huashu-design/` 看一下，里面除了 `SKILL.md` 还有 `references`、`assets`、`scripts`、`demos` 四个文件夹才算装全；只有一个 `SKILL.md` 说明 skills 工具版本太旧，先跑 `npm i -g skills@latest` 升级再重装一次。"
        },
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在 AI 编程工具里装这份设计技能", "code": "npx skills add alchaincyf/huashu-design", "after": "下载慢或失败就先开代理再试" }
          ],
          "done": "同样去技能目录看一下，有 `SKILL.md`、`references`、`assets`、`scripts`、`demos` 五样才算装全。"
        }
      ],
      "url": "https://github.com/alchaincyf/huashu-design"
    },
    {
      "emoji": "📚",
      "repo": "1c7/chinese-independent-developer",
      "deploy": ["read"],
      "title": "一份国内独立开发者在做什么项目的清单",
      "stars": "61,933",
      "today": "18",
      "body": "一份由社区一起维护的清单，收集国内独立开发者分享的自己在做的项目，涵盖各种方向，持续在更新，今天又上了热门榜。",
      "explain": "「独立开发者」指不靠团队、自己一个人从想法做到上线的开发者，这份清单就是这群人互相贴出自己做的东西，方便别人发现、围观、抄作业。",
      "opinion": "自己也是一个人把项目从想法做到上线的，翻一翻这份清单能看看别人都在捣鼓什么方向、用什么形式做出来的，找灵感或者看看有没有能顺手借鉴的思路，纯阅读不费事。📱 手机上：能看，就是打开网页读文字，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开仓库主页，拉到底看 README 里的清单，按分类一条条列着" }
          ],
          "done": "读完大概能知道国内独立开发者最近都在做哪类项目，当灵感清单用。"
        }
      ],
      "url": "https://github.com/1c7/chinese-independent-developer"
    }
  ]
};
