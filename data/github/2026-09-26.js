DAILY_DATA["github/2026-09-26"] = {
  "date": "2026-09-26",
  "highlight": "今天最值得马上试的是 `anthropics/claude-plugins-official`——Anthropic 官方上线的 Claude Code 插件市场，一条 `/plugin` 命令就能浏览安装官方技能包，不用改配置、装错随时能卸载，手机电脑都能用。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "anthropics/claude-plugins-official",
      "title": "官方插件市场上线，一条命令给Claude Code装技能",
      "lang": "Python",
      "stars": "36,935",
      "today": "83",
      "body": "Claude 官方维护的插件目录，收录 Anthropic 团队和社区贡献的 Claude Code 插件，涵盖斜杠命令、Agent 定义、技能（Skill）和 MCP 服务器配置几种类型。在 Claude Code 里直接输入 `/plugin` 就能浏览列表，看中哪个装哪个，不用自己写配置文件。仓库分 `plugins`（官方内部维护）和 `external_plugins`（第三方贡献）两部分。",
      "explain": "斜杠命令、Agent、技能（Skill）、MCP，都是 Claude Code 已经支持的扩展方式——斜杠命令是像 `/plugin` 这样打字触发的快捷操作；技能是打包好的一套工作方法（比如怎么做代码审查）；MCP 是让 Claude 连接外部工具（比如 GitHub、数据库）的通用接口。这个仓库的作用是把已经写好的这几类插件集中收在一个地方，方便你挑着装，不用自己从头写。",
      "opinion": "你平时就在用 Claude Code，这个官方目录几乎零成本——不用改代码、不用配置文件，一条命令就能试装官方出的技能包，装错了卸载也简单。建议先打开列表看看有没有覆盖你常做的事（比如写文档、代码审查），有就装上试试，用不上随时删。📱 手机上：Termux 里的 Claude Code 本来就支持插件系统，这个操作和电脑上完全一样，能直接用。",
      "install": [
        {
          "title": "安装步骤 · 在 Claude Code 里（手机 Termux / 电脑通用）",
          "steps": [
            { "text": "打开插件菜单，看看有哪些官方插件：", "code": "/plugin" },
            { "text": "菜单里选「Discover」浏览列表，找到想要的插件按提示安装；也可以跳过菜单直接装（把 {plugin-name} 换成看中的插件名）：", "code": "/plugin install {plugin-name}@claude-plugins-official" }
          ],
          "done": "再输入一次 `/plugin`，能在已安装列表里看到刚才装的插件，就说明成功了。"
        }
      ],
      "url": "https://github.com/anthropics/claude-plugins-official"
    },
    {
      "emoji": "🤖",
      "repo": "Fission-AI/OpenSpec",
      "title": "先写规范再动手写代码的AI辅助开发工具",
      "lang": "TypeScript",
      "stars": "70,368",
      "week": "1,282",
      "body": "OpenSpec 是一个「规范驱动开发」框架：让你先和 AI 编码助手一起把要做的功能写成一份双方都认可的规范文档，再让 AI 照着规范生成代码，而不是直接让 AI 一上来就动手改代码。提供 `explore`（探索想法）、`propose`（写提案）、`apply`（照提案生成代码）、`archive`（归档已完成的改动）几个阶段，支持 Claude Code 等 30 多种编码工具。",
      "explain": "「规范驱动开发」说白了就是「先说清楚要干嘛，再动手做」——你平时直接跟 Claude Code 说「加个功能」，它可能理解偏、返工好几次；这个工具逼着你和 AI 先对齐一份写清楚需求的文档，等双方都认可了再生成代码，返工的概率会小一点。",
      "opinion": "你一个人做单文件小工具，需求一般不复杂，日常改动可能用不上这么正式的流程；但等你做的 Agent 项目变复杂、需求容易说不清楚的时候，试试这种「先提案再动手」的习惯，能减少 AI 理解错方向、改了又改的情况。先在一个小项目上试试顺不顺手，不用马上全面套用。📱 手机上：纯 Node.js 命令行工具，Termux 自带的 Node v26 够新（要求 20.19 以上），`npm install` 应该能装上。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）都一样",
          "intro": "需要先有 Node.js 20.19 以上版本（Termux 自带的 Node v26 够用；电脑上没装 Node 的话先去官网下载安装，下载慢或失败就先开代理）。",
          "steps": [
            { "text": "全局安装：", "code": "npm install -g @fission-ai/openspec@latest" },
            { "text": "进到你的项目文件夹，初始化：", "code": "cd 你的项目文件夹\nopenspec init" },
            { "text": "在 Claude Code 里对着这个项目提需求时，用它的提案命令开始（把描述换成你实际要加的功能）：", "code": "/opsx:propose 给这个页面加一个深色模式" }
          ],
          "done": "项目文件夹里多出一个 `openspec/` 文件夹，就说明装好了。"
        }
      ],
      "url": "https://github.com/Fission-AI/OpenSpec"
    },
    {
      "emoji": "🤖",
      "repo": "addyosmani/agent-skills",
      "title": "25个AI编码Agent工程技能包，装给Claude Code用",
      "lang": "JavaScript",
      "stars": "99,080",
      "week": "2,911",
      "body": "这是一套给 AI 编码 Agent 用的工程技能包，把资深工程师做软件时的工作流程（写需求、拆任务、测试驱动开发、代码审查、代码简化、安全加固、发版）打包成 25 个技能，覆盖从定需求到发布的整个开发流程。支持 Claude Code、Cursor、GitHub Copilot 等多种编码 Agent，装上以后直接用对应的斜杠命令调用。",
      "explain": "这些技能相当于给 Claude Code 内置几套「标准作业流程」——比如你说「帮我做测试驱动开发」，它就会按业界公认的步骤（先写测试、再写实现、再重构）一步步来，而不是随便写完代码就算了。",
      "opinion": "你平时一个人写代码，容易漏掉「写测试」「代码审查」这些步骤，装上这套技能包后可以按流程走一遍，尤其是代码审查和安全加固这两项，对没人帮你把关的独立开发者比较实用。技能比较多，不用一次全用上，挑几个平时最容易漏掉的步骤试试就行。📱 手机上：主要是一堆 Markdown 说明文件，用 Claude Code 自带的 `/plugin` 命令装，跟在电脑上一样能用。",
      "install": [
        {
          "title": "安装步骤 · 在 Claude Code 里（手机 Termux / 电脑通用）",
          "steps": [
            { "text": "添加这个技能包的市场：", "code": "/plugin marketplace add addyosmani/agent-skills" },
            { "text": "安装技能包：", "code": "/plugin install agent-skills@addy-agent-skills" }
          ],
          "done": "装完后输入 `/plugin`，已安装列表里能看到 agent-skills，就说明成功了。"
        }
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "emoji": "🤖",
      "repo": "cline/cline",
      "title": "开源自主编码Agent，VS Code插件/命令行都能用",
      "lang": "TypeScript",
      "stars": "69,326",
      "week": "676",
      "body": "Cline 是一个开源的自主编码 Agent，能跨文件改代码、跑终端命令、装依赖、跑测试，支持先「规划」再「执行」两种模式，每一步操作都可以要求你确认再继续。有 VS Code 插件、命令行、桌面客户端三种形态，除了 Anthropic、OpenAI、Google 的模型，也支持任何「OpenAI 兼容」的接口。",
      "explain": "「OpenAI 兼容接口」是说很多国内模型（包括豆包、DeepSeek）为了方便大家迁移，把自己的接口做成了和 OpenAI 一样的格式，所以支持「OpenAI 兼容」的工具，改一下地址和 key 就能接上豆包、DeepSeek，不用等官方专门适配。",
      "opinion": "如果你想在 VS Code 里体验一下另一种编码 Agent 的思路（对比一下它规划、执行、确认的方式跟 Claude Code 有什么不一样），可以装个插件试试；接豆包或 DeepSeek 要在设置里选「OpenAI Compatible」，填对应的地址和 key。不是非装不可，更像是换个角度看看别人怎么做 Agent。📱 手机上：`npm i -g cline` 是纯 JS 命令行，Termux 理论上能装，但没有 VS Code 图形界面，只能用命令行版，交互体验跟电脑上不一样，不保证顺手。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，VS Code扩展）",
          "steps": [
            { "text": "打开网址，点 Install 安装扩展：", "after": "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev ，或者直接在 VS Code 扩展面板里搜「Cline」安装。" },
            { "text": "安装后左侧栏会出现 Cline 图标，点开在设置里选「OpenAI Compatible」，填豆包或 DeepSeek 的接口地址和 API key。" }
          ],
          "done": "点开 Cline 图标能正常对话、给出代码修改建议，就说明装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（命令行版，不保证好用）",
          "steps": [
            { "text": "全局安装命令行版：", "code": "npm i -g cline" },
            { "text": "运行进入交互界面：", "code": "cline", "after": "第一次运行会让你选模型提供商，选「OpenAI Compatible」，填豆包或 DeepSeek 的接口地址和 key。" }
          ],
          "done": "命令行里能正常问答、给出代码改动建议，就算装成功；卡住报错大概率是网络连不上你填的模型接口，检查地址和 key 有没有填对。"
        }
      ],
      "url": "https://github.com/cline/cline"
    },
    {
      "emoji": "📚",
      "repo": "bojieli/ai-agent-book",
      "title": "《深入理解AI Agent》，免费开源电子书",
      "lang": "Python",
      "stars": "50,997",
      "week": "2,485",
      "body": "一本讲 AI Agent 设计原理和工程实践的免费开源书，核心思路是「Agent = 大模型 + 上下文 + 工具」。十章内容从入门概念，一路讲到上下文工程、记忆和知识库、工具调用（含 MCP）、评估方法、多 Agent 协作，配了 109 个实验。支持中、英、西班牙语等 15 种语言，Apache 2.0 协议完全开源。",
      "explain": "书里「上下文工程」说的是怎么给大模型喂它需要的背景信息（比如聊天记录、文档片段）——喂多了它会抓不住重点，喂少了它不知道你在说什么，这门学问就是研究怎么喂得刚刚好；MCP 是让 Agent 连接外部工具（比如查天气、读文件）的通用接口。",
      "opinion": "这本书正好对上你在做的事——你已经在调 API 做小工具和 Agent，这本书能帮你把「为什么这么设计」讲透，比如工具调用怎么设计、记忆怎么存取，都是你写 Agent 时会遇到的实际问题，比零散的博客文章更系统。内容偏理论加实验，建议当长期资料翻，不用一口气读完。📱 手机上：纯网页和 PDF/EPUB，手机浏览器直接看或下载电子书都行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "在线阅读，支持切换语言和记笔记：[bojieli.github.io/ai-agent-book](https://bojieli.github.io/ai-agent-book/astro/)" },
            { "text": "想离线看，去仓库主页找中文 PDF/EPUB 下载链接：[github.com/bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)" }
          ],
          "done": "打开在线阅读页能看到目录和第一章内容，就说明找对地方了。"
        }
      ],
      "url": "https://github.com/bojieli/ai-agent-book"
    }
  ]
};
