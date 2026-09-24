DAILY_DATA["github/2026-09-24"] = {
  "date": "2026-09-24",
  "highlight": "今天最值得动手试的是 `obra/superpowers`——给 Claude Code 装一套「头脑风暴→写计划→测试驱动开发→自动审查」的方法论，你平时就是靠 Claude Code 写工具，装上它能让 AI 动手前先想清楚、写完先自测，少踩一些「看着能跑其实有坑」的坑。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "title": "给Claude Code装一套编程方法论",
      "lang": "Shell",
      "stars": "290,682",
      "today": "474",
      "body": "superpowers 给 Claude Code、Cursor、GitHub Copilot 等 15 种以上编码工具装了一整套开发方法论：先头脑风暴梳理需求，再拆成任务清单；写代码前先写一个会失败的测试（红灯），再写代码让测试通过（绿灯），最后自动做代码审查。相当于把「靠谱程序员的工作习惯」打包成 Claude 能直接调用的技能，内置 14 个技能，覆盖调试、需求梳理、多代理协作审查等场景。Star 数已经涨到 29 万+，是这类「给编码 Agent 装方法论」项目里目前最火的一个。",
      "explain": "「skill」是给 Claude 这类编码 Agent 装的可复用技能包，类似给手机装 App；「插件市场（marketplace）」就是这些技能包的应用商店。「测试驱动开发（TDD）」的「红-绿-重构」是先写一个明知道会失败的测试（红灯），再写代码让它通过（绿灯），最后再优化代码，是软件工程里常见的写代码习惯。",
      "opinion": "你平时让 Claude Code 直接写单文件 HTML/JS，这套技能包能让它在动手前先跟你确认需求、写完先自测，减少「一遍过但其实有坑」的情况，尤其调试和代码审查这两个技能对你现在的项目类型应该挺实用。装上试几天，不合适随时能卸载，成本很低。📱 手机上：能装，装的是 Claude Code 的插件配置，不涉及编译原生代码，Termux 里能跑；联网拉取市场数据卡住的话多半是没开代理。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "在你已经能用的 Claude Code 里执行。",
          "steps": [
            { "text": "打开 Claude Code", "code": "claude" },
            { "text": "安装 superpowers 插件", "code": "/plugin install superpowers@claude-plugins-official", "after": "这一步要连插件市场（在 GitHub 上），Termux 里卡住先检查代理 127.0.0.1:7890 开了没；电脑上慢或失败也先开代理再试" }
          ],
          "done": "命令跑完不报错就算装上了；可以问 Claude「你有哪些 skills」，能看到 brainstorming、test-driven-development 这些技能名就说明生效了。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🤖",
      "repo": "cloudflare/security-audit-skill",
      "title": "用AI帮你的项目做一次安全审计",
      "lang": "JavaScript",
      "stars": "20,906",
      "week": "15,280",
      "body": "Cloudflare 开源的一个「安全审计」技能，让编码 Agent 按六个阶段给你的项目做体检：先摸清项目结构，再分头排查可疑点，然后独立验证每个疑似问题是不是真的，最后生成一份结构化的审计报告。用来查密钥泄露、权限校验漏掉、输入没过滤导致的注入这类常见问题。本周新增 1.5 万+ 星，涨势很猛。",
      "explain": "「安全审计」就是系统性检查代码里有没有能被人利用的漏洞，比如密钥被写死在代码里、用户输入没做过滤导致别人能往网页里插恶意脚本（XSS）。这个技能会让 Agent 在「沙箱」（一个隔离的、出问题也不影响你真实系统的运行环境）里跑测试、做验证。",
      "opinion": "你的小工具是单文件 HTML+JS，直接托管在 GitHub Pages 上公开给别人用，「问 AI」功能还要处理用户自己填的 API key——这类项目最容易在不知不觉中留漏洞（比如某处输入没转义）。跑一次这个审计让 Claude 帮你查一遍，成本不高，值得试。📱 手机上：命令本身是 Node 跑的 CLI，Termux 装了 Node 能跑；它提到的部分沙箱能力（跑测试、浏览器）手机上受限，遇到这类检查卡住直接跳过就行，不影响核心的代码扫描。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "进入项目目录，用 skills CLI 装这个技能", "code": "https_proxy=http://127.0.0.1:7890 npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit" }
          ],
          "done": "装完后在 Claude Code 里问「帮我做个安全审计」，能看到它跑起来生成审计报告就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "进入项目目录，用 skills CLI 装这个技能", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit", "after": "下载慢或失败就先开代理" },
            { "text": "（可选）装成全局技能，不用每个项目重复装", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit --global" }
          ],
          "done": "装完后在 Claude Code 里问「帮我做个安全审计」，能看到它跑起来生成审计报告就是装好了。"
        }
      ],
      "url": "https://github.com/cloudflare/security-audit-skill"
    },
    {
      "emoji": "🛠",
      "repo": "pbakaus/impeccable",
      "title": "让AI帮你的网页/工具做设计把关",
      "lang": "JavaScript",
      "stars": "70,330",
      "today": "304",
      "body": "impeccable 是专门给 AI 编程工具用的「设计语言」技能：装上以后，Claude、Cursor 这些工具写网页/App 界面时会自动对照 61 条常见的设计毛病做检查（比如间距乱、颜色对比度不够），还提供 `/impeccable audit`（检查）、`/impeccable polish`（打磨）等命令，支持在浏览器里边看效果边让 AI 改。目前支持 Claude Code、Cursor、GitHub Copilot 等 17 种编码工具，Star 数已经到 7 万+。",
      "explain": "「设计反模式」就是常见的、容易让界面看起来「土」或不好用的错误做法，比如文字挤在一起、颜色搭配刺眼。这个项目把这些规律总结成规则，让 AI 写代码时自动照着检查，相当于给 AI 配了一个「审美顾问」。",
      "opinion": "你写的都是单文件 HTML 小工具，界面基本靠自己审美和 AI 临场发挥，装上这个以后让 Claude 写完界面跑一下 `/impeccable audit`，能帮你揪出一些「一眼看着不对但说不出哪里不对」的问题，不需要你懂设计理论。值得装上试试，不喜欢随时删掉配置就行。📱 手机上：核心是配置文件加一个小的二进制引擎，不需要编译 Rust/C++，Termux 能跑；第一次运行如果卡在下载引擎那一步，多半是网络问题，开着代理再试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "进入项目目录，安装 impeccable", "code": "npx impeccable install", "after": "如果卡在下载引擎那一步，开着代理再试一次" },
            { "text": "在 Claude Code 里初始化", "code": "/impeccable init" }
          ],
          "done": "跑完 `/impeccable init` 后，再让 Claude 帮你改界面，它会提到照某条设计规则做了调整，就说明装好了。"
        }
      ],
      "url": "https://github.com/pbakaus/impeccable"
    },
    {
      "emoji": "📚",
      "repo": "PlexPt/awesome-chatgpt-prompts-zh",
      "title": "中文prompt写法参考大全",
      "stars": "62,646",
      "today": "45",
      "body": "一份中文 ChatGPT/大模型提示词（prompt）合集，收了写论文、写文案、代码审查、角色扮演等几十种场景的现成 prompt 模板，照着抄现成的问法就能用，不用自己从头摸索怎么跟 AI 说话。内容是 JSON+Markdown 格式的静态列表，不是工具，直接在 GitHub 页面上翻 README 就能看。Star 数 6.2 万+，是中文 prompt 合集里体量最大的一个。",
      "explain": "「prompt」就是你给 AI 的那句话/那段指令，同一件事，prompt 写得好坏，AI 给出的结果能差很多——这也是为什么会有专门收集「怎么问 AI」的仓库。",
      "opinion": "你自己在做调豆包、DeepSeek API 的小工具，里面免不了要设计系统提示词（system prompt），翻一翻这份合集里同类场景的写法，能省不少「自己瞎试半天」的功夫，照着改一改就能用在自己的工具里。它不用装，打开 README 看就行。📱 手机上：纯文字内容，浏览器打开 GitHub 页面就能看，不涉及安装。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库主页，直接看 README 里按场景分类的 prompt 列表", "code": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh" }
          ],
          "done": "能看到「学术」「文案」「代码」这些分类下的现成 prompt，就是找对地方了。"
        }
      ],
      "url": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
    },
    {
      "emoji": "💰",
      "repo": "QingHeYang/EasyAccounts",
      "title": "自己搭一个带AI记账的账本",
      "stars": "355",
      "body": "一款中文记账软件，支持账户管理、分类记账、报表导出，还带了 AI 记账助手——可以直接跟 AI 对话说「今天吃饭花了35」，让 AI 帮你分类记录，也支持拍照识别小票。数据存在你自己部署的服务器上，不是别人的云。项目在持续更新，今年 5 月刚发了 2.7.0 版本，加了定时记账、自动生成月度 Excel 这些功能。Star 数不算多，但作者说明「自己天天在用」，更新挺活跃。",
      "explain": "「Docker」是一种把软件和它需要的运行环境打包在一起的技术，你不用自己一步步装数据库、配环境，跑一条命令就能把整个记账系统跑起来，类似「预装好的软件包」。",
      "opinion": "你在学个人理财入门，记账是最基础的第一步，这个项目比单纯用 Excel 多了 AI 自动分类和报表这些功能，自己部署也不用担心记账数据被别人看到。缺点是必须装 Docker，配置比装个 App 麻烦一些，适合在电脑上花十几分钟折腾一次。AI 记账功能需要你自己填一个大模型的 API key，不填也能用最基础的手动记账。📱 手机上：装不了，Termux 没有 Docker 也没 root 权限，这个只能在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "只能在电脑上装，手机 Termux 没有 Docker 装不了。",
          "steps": [
            { "text": "下载安装 Docker Desktop", "after": "官方下载地址 https://www.docker.com/products/docker-desktop/ ，装完打开一次，确保它在后台运行着" },
            { "text": "打开 PowerShell，下载项目代码", "code": "git clone https://github.com/QingHeYang/EasyAccounts.git", "after": "下载慢或失败就先开代理" },
            { "text": "进入项目目录并启动", "code": "cd EasyAccounts\ndocker compose up -d" },
            { "text": "打开浏览器访问", "code": "http://localhost:10669" }
          ],
          "done": "网页能打开看到记账软件的界面就算装好了（首次进去一般会让你自己设置管理员账号，具体流程以页面提示为准，这一步不保证和这里描述的完全一致）；打不开先检查 Docker Desktop 有没有在运行。"
        }
      ],
      "url": "https://github.com/QingHeYang/EasyAccounts"
    }
  ]
};
