DAILY_DATA["github/2026-11-09"] = {
  "date": "2026-11-09",
  "highlight": "今天最值得动手试的是 CowAgent——一个支持国内大模型的开源 AI 助手框架，装好就能直接看它怎么管理工具和记忆，比自己从零搭省事。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "deploy": ["pc", "cloud"],
      "title": "开源 AI 助手框架，接国内大模型并管理工具和记忆",
      "lang": "Python",
      "stars": "47,839",
      "today": "10",
      "body": "CowAgent 是一个开源的个人 AI 助手框架，能规划任务、调用工具和技能，并靠记忆和知识库持续进化。它支持多个国内大模型，包括 DeepSeek、通义千问、智谱 GLM、Kimi、MiniMax、豆包和文心，也支持 Claude、GPT、Gemini 等海外模型。项目提供一键安装脚本，装好后打开本地网页控制台来配置和使用，也能接入微信、飞书、钉钉、Telegram、Slack、Discord 等即时通讯工具当机器人。它既能本地跑，也能用 Docker 或放服务器上长期挂着。",
      "explain": "「Agent」（智能体）是指能自己拆解任务、决定调用哪个工具、再把结果拼起来给你的程序，不是简单的一问一答聊天。项目里的「技能」相当于给 Agent 装的功能插件，比如联网搜索或执行某个操作。「渠道」就是它能接入的聊天软件，比如微信或 Telegram，装好之后那边也能当机器人用。",
      "opinion": "如果想学怎么搭一个会调用工具、能接国内大模型的 AI 助手，这个项目能直接跑起来看它的架构，比自己从零摸索省时间；装好之后开着当成一个随时能聊、能记事的助手用也行。它依赖库不算少，建议先在电脑上跑熟，再考虑要不要搬到服务器上长期挂着。📱 手机上：没查到它依赖里有 Termux 常见装不上的那几个库（比如 jiter），理论上有机会装，但官方没提过支持安卓，具体会不会卡在别的依赖上没测试过，不保证一定能装成。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "官方给了 Windows 和 Linux/macOS 两种一键脚本，这里用 Windows 版本。",
          "steps": [
            { "text": "打开 PowerShell，运行官方一键安装脚本：", "code": "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex", "after": "下载慢或失败就先开代理再试一次。" },
            { "text": "安装完成后，用命令启动它：", "code": "cow start" },
            { "text": "打开浏览器访问本地控制台，首次进去按提示设置管理密码和模型密钥。" }
          ],
          "done": "浏览器打开 `http://localhost:9899` 能看到控制台界面，就算装成功了。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🛠",
      "repo": "jakubkrehel/skills",
      "deploy": ["phone", "pc"],
      "title": "一套帮 Claude Code 把界面做得更专业的技能包",
      "lang": "Markdown",
      "stars": "11,726",
      "week": "1,857",
      "body": "这是一组给 AI 编程工具用的「技能包」，专门帮你把界面做得更规范。装上之后，Claude Code 能按无障碍、排版、配色、文案等标准审查你写的界面，还能照着 Figma 设计图或截图还原页面、给组件做压力测试。里面也有专门拆解别的网站动效是怎么实现的技能，方便学习参考。",
      "explain": "「Agent skill」是给 Claude Code 这类 AI 编程工具装的技能模块，相当于给它加一本专门领域的参考手册，调用时它就照着手册里的标准去做，不用你每次都重新解释一遍什么是「好的界面」。「无障碍（accessibility）」指的是让屏幕阅读器、键盘操作这些辅助功能也能正常用你的页面，不只是视觉上好看。",
      "opinion": "你的项目都是自己手写单文件网页，这套技能包相当于给 Claude Code 补一份界面审查的标准，能把圆角、间距、配色这些凭感觉调的细节量化成具体数值，省得来回试。里面拆解别人网站动效的那个技能也适合直接拿来学东西，装上试试成本很低，用不上随时卸。📱 手机上：它只是几份文字技能文件，跟着 Claude Code 走，手机上能跑 Claude Code 的地方它就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（通用）",
          "intro": "这是纯文本技能包，装的时候需要连 GitHub，命令前要加代理（只对这一条命令生效）。",
          "steps": [
            { "text": "在终端里用 skills 工具安装（Termux 要加代理前缀，电脑不用）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add jakubkrehel/skills --global --agent claude-code", "after": "电脑上直接去掉 `https_proxy=http://127.0.0.1:7890 ` 这段再跑。" },
            { "text": "或者在 Claude Code 里直接装插件：", "code": "/plugin marketplace add jakubkrehel/skills\n/plugin install interfaces@interfaces" }
          ],
          "done": "在 Claude Code 里输入 `/plugin` 能看到 interfaces 这个插件，或者跟 Claude Code 说「审查一下这个页面的界面」它会主动用上，就算装好了。"
        }
      ],
      "url": "https://github.com/jakubkrehel/skills"
    },
    {
      "emoji": "🛠",
      "repo": "blader/humanizer",
      "deploy": ["phone", "pc"],
      "title": "帮你把 AI 写的文字改得不那么像 AI",
      "lang": "Python",
      "stars": "66,506",
      "week": "3,118",
      "body": "Humanizer 是一个给 Claude Code、Codex 等 AI 编程工具用的技能，专门去掉文本里常见的「AI 写作痕迹」，同时尽量保住原意。它参照维基百科总结的「AI 写作特征」指南来改写，可以处理整段文本，也可以指定某个文件只改正文，不碰代码、数据和链接。给它看你自己的几段文字，它还能模仿你的用词和语气习惯。",
      "explain": "所谓「AI 写作痕迹」，是指 AI 生成的文字里常见的一些套路，比如总爱用「值得注意的是」「总而言之」这类空话，或者句子结构整齐却没什么实际信息。这个技能就是照着一份整理过的「常见套路清单」去改写，把这些痕迹擦掉。",
      "opinion": "你平时要写不少说明、笔记类的文字，如果觉得哪段话 AI 腔太重、读着不像自己写的，直接丢给它改一下就行，成本很低。它是纯文字技能，不涉及要装的软件库，基本不会有装不上的问题。📱 手机上：它只是技能文件，靠 Claude Code 运行，手机上的 Claude Code 能正常用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（通用）",
          "intro": "直接在 Claude Code 里装插件最简单。",
          "steps": [
            { "text": "在 Claude Code 里运行：", "code": "/plugin marketplace add blader/humanizer\n/plugin install humanizer@humanizer", "after": "如果 Claude Code 版本太旧用不了这个命令，换成下面这条。" },
            { "text": "版本较旧时改用 skills 工具装（Termux 记得给这条命令加代理前缀）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add blader/humanizer --global --agent claude-code" }
          ],
          "done": "跟 Claude Code 说「用 humanizer 帮我改一下这段话」，它能正常回应并给出改写结果，就是装好了。"
        }
      ],
      "url": "https://github.com/blader/humanizer"
    },
    {
      "emoji": "🛠",
      "repo": "vercel-labs/agent-browser",
      "deploy": ["pc"],
      "title": "能让 AI 自动操作浏览器的命令行工具",
      "lang": "Rust",
      "stars": "47,597",
      "today": "815",
      "body": "agent-browser 是一个给 AI Agent 用的浏览器自动化命令行工具。它能打开一个网页，把页面结构读成一份简化的文字描述（里面每个元素都带一个像 `@e1` 的编号），然后你可以直接用编号去点击、输入、读取这个元素，不用自己写选择器。常用命令包括 `open`、`snapshot`、`click`、`get url`、`close` 这些。",
      "explain": "这里说的「CLI」就是命令行工具，在终端里敲命令用，不是图形界面软件。它读网页结构的方式类似给页面做一份「列清单」，告诉你页面上有哪些按钮和输入框、分别编了什么号，AI 看这份清单就知道该点哪里，不用理解网页长什么样。",
      "opinion": "你写的工具都是单文件网页，这东西可以用来自动点一遍自己做的页面，看按钮、输入框是不是都正常，相当于一个简单的自动化测试，不用自己装 Playwright 那一整套。它需要先下载一份 Chrome 测试版才能用，装起来比较重，先在电脑上试试值不值得花时间。📱 手机上：官方没提过支持安卓，Termux 跟标准 Linux 发行版的系统库不一样，这种预编译的二进制大概率装不上，没有实测过，不保证。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows/Mac/Linux）",
          "steps": [
            { "text": "用 npm 全局安装：", "code": "npm install -g agent-browser" },
            { "text": "首次使用前下载它要用的浏览器（只需要一次）：", "code": "agent-browser install", "after": "下载的是 Chrome for Testing，文件比较大，网不好就先开代理。" },
            { "text": "试着打开一个网页看效果：", "code": "agent-browser open example.com\nagent-browser snapshot -i" }
          ],
          "done": "`snapshot -i` 能打印出页面里的元素列表（带 `@e1` 这种编号），就是装成功了。"
        }
      ],
      "url": "https://github.com/vercel-labs/agent-browser"
    },
    {
      "emoji": "🎨",
      "repo": "Renhuai123/ziwei-doushu",
      "deploy": ["pc"],
      "title": "一个开源的紫微斗数排盘小程序",
      "lang": "TypeScript",
      "stars": "16,957",
      "week": "4,191",
      "body": "这是一个开源的紫微斗数排盘引擎，排盘算法、「四化」规则和一份古籍资料库都在代码里能看到。项目还附带两份数据集：一份 51.8 万张命盘的样本，一份 67.5 万张命盘的解读数据。排盘、画命盘、合盘这些都在浏览器里跑，不用联网查询，不需要 API key；但 AI 解读部分的后端没有开源，装好也用不了那块。",
      "explain": "「紫微斗数」是一种传统命理推算方式，跟八字算命是同一类东西，项目做的是把这套推算规则写成代码来自动排盘，不代表算出来的东西是真的。「Next.js」是一个用 JavaScript/TypeScript 搭网页的框架，自带一套开发服务器，跟平时写的单文件 HTML 不是一回事，装起来步骤会多一些。",
      "opinion": "这个纯粹是图个新鲜，看看命理规则怎么写成代码、顺便翻翻它带的古籍资料，不是什么正经工具。单纯想排个盘玩，装起来也不麻烦；想要像它线上商业版那样的 AI 解读是没有的，别抱太大期待。📱 手机上：Next.js 装依赖时常要用到编译好的原生模块，Termux 环境下经常装不上，大概率跑不起来，建议只在电脑上玩。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "只想随便看看效果、不打算自己装的话，也可以去看它线上的商业版 ouranic.cn，但界面和内容跟开源版差别很大，不是同一个东西。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/Renhuai123/ziwei-doushu.git\ncd ziwei-doushu" },
            { "text": "装依赖：", "code": "npm install" },
            { "text": "只看排盘效果可以跳过配置，直接启动开发服务器：", "code": "npm run dev" }
          ],
          "done": "浏览器打开 `http://localhost:3000`，能看到排盘页面，就是装成功了。"
        }
      ],
      "url": "https://github.com/Renhuai123/ziwei-doushu"
    }
  ]
};
