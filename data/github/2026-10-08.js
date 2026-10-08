DAILY_DATA["github/2026-10-08"] = {
  "date": "2026-10-08",
  "highlight": "今天最值得先装的是 `agent-skills`——前 Chrome 团队工程师打包的一套「资深工程师技能包」，覆盖需求、编码、测试、审查全流程，装一两个就能感觉到 Claude Code 干活变规范；想给自己的小工具做个安全体检的话再加装 `security-audit-skill`。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "addyosmani/agent-skills",
      "title": "给 Claude Code 装一套资深工程师技能包",
      "lang": "JavaScript",
      "stars": "102,808",
      "today": "677",
      "body": "作者是前 Chrome 团队的 Addy Osmani，把 25 个「资深工程师该怎么干活」的流程打包成 Skill，覆盖需求梳理、方案规划、写代码、测试、代码审查、发布全流程。每个技能就是一份教 AI 编程工具按最佳实践干活的说明文件，装上之后 Claude Code 执行对应任务时会自动套用这些流程。支持 Claude Code、Codex、Gemini CLI 等多种编码 Agent 工具，也可以只装其中一两个技能，不用全装。",
      "explain": "Skill 在这里就是给 AI 编程工具的「操作手册」，用 Markdown 写的，让它做某件事（比如代码审查）时按固定的高质量流程走，而不是每次随性发挥。Agent（智能体）就是能自己调用工具、分步骤完成任务的 AI，Claude Code 本身就是一个 Agent。",
      "opinion": "你平时就用 Claude Code 写代码，装上这套技能包相当于免费升级它的工作习惯，尤其是代码审查和测试那几个技能，能帮你发现自己写 HTML+JS 小工具时容易漏掉的问题。先按需装一两个试试效果，再决定要不要全装，比一口气装 25 个更容易判断有没有用。📱 手机上：Termux 装了 Node v26，`npx` 能跑，装的时候要拉取 GitHub 内容，记得给这条命令加代理前缀，应该没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "安装整套技能包（会从 GitHub 拉取内容，这条命令前面要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add addyosmani/agent-skills", "after": "第一次运行 npx 会提示装 skills 这个小工具，确认一下即可" },
            { "text": "也可以先看看有哪些技能，挑自己需要的装：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add addyosmani/agent-skills --list" }
          ],
          "done": "装完后在 Claude Code 里问一句「你现在有哪些 skill」，或者直接让它做一次代码审查，回复风格变得更规范、分步骤，就说明装上了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "命令和手机一样，去掉代理前缀；如果下载慢或失败，先开代理软件再试。",
          "steps": [
            { "text": "在 PowerShell 里运行：", "code": "npx skills add addyosmani/agent-skills" },
            { "text": "如果你直接用 Claude Code，也可以在会话里输入：", "code": "/plugin marketplace add addyosmani/agent-skills\n/plugin install agent-skills@addy-agent-skills" }
          ],
          "done": "同上，让 Claude Code 做点事看看回复风格有没有变规范。"
        }
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "emoji": "🤖",
      "repo": "cloudflare/security-audit-skill",
      "title": "给 Claude Code 装一个安全审计员技能",
      "lang": "JavaScript",
      "stars": "26,048",
      "today": "576",
      "body": "Cloudflare 开源的一个 Coding Agent 技能，装上后让 Claude Code（或其他支持多子任务并行的编码工具）给你的代码库做一次安全审计：先扫一遍找风险点，再逐个验证是不是真的能被利用，最后生成一份结构化的问题清单 `findings.json`。覆盖范围很广，包括网页前端常见的 XSS、DOM 注入、原型链污染，也包括依赖供应链、云配置等问题。运行时需要本机有 Node.js，以及能并行跑子任务的编码 Agent。",
      "explain": "XSS（跨站脚本）是最常见的网页漏洞之一，简单说就是攻击者想办法往你的页面里塞一段他写的脚本，冒充你的网站偷用户数据；DOM 注入和它类似，都是往网页结构里插坏东西。这个技能就是专门帮你揪这些问题的检查清单。",
      "opinion": "你做的都是单文件 HTML+JS 小工具，没有团队帮你做代码审查，这类技能正好补上「有没有人帮我看看安全隐患」这一环，尤其是读取用户输入、拼 HTML 的地方。装上之后找 Claude Code 说一句「security audit this codebase」就能跑，不用额外学什么，小项目一次审计可能就几分钟，发布前跑一次挺值。📱 手机上：Termux 有 Node.js 能跑，但审计过程会让编码 Agent 同时开好几个子任务，Termux 后台限制多、容易被系统杀掉，大项目建议放电脑上跑，小项目可以先在手机试试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "运行（会从 GitHub 拉取内容，这条命令前面要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit" },
            { "text": "装完后进到你的项目目录，在编码 Agent 里直接提需求：", "code": "security audit this codebase", "after": "也可以说「find security vulnerabilities in ./」" }
          ],
          "done": "Agent 跑完会生成一份 findings.json 问题清单，看到这个文件就是装成功并且跑完了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "命令和手机一样，去掉代理前缀；下载慢或失败就先开代理软件。",
          "steps": [
            { "text": "在 PowerShell 里运行：", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit" },
            { "text": "进到项目目录，在编码 Agent 里提需求：", "code": "security audit this codebase" }
          ],
          "done": "同上，生成 findings.json 就是跑通了。"
        }
      ],
      "url": "https://github.com/cloudflare/security-audit-skill"
    },
    {
      "emoji": "🛠",
      "repo": "immersive-translate/immersive-translate",
      "title": "浏览器装一个双语网页翻译",
      "stars": "19,218",
      "today": "19",
      "body": "一款浏览器划词/整页双语翻译扩展，看英文文档、README、论文时能在原文下面自动加一行中文翻译，支持网页、PDF、EPUB、字幕等多种格式，也能接自定义翻译引擎或自己的 AI 接口。中文开发者维护，更新频繁。",
      "explain": "双语对照意思是原文和翻译同时显示，不是整页替换成中文，方便你顺手对照学英文术语。",
      "opinion": "你平时查 Python、电工、理财资料少不了看英文内容，装上这个比来回复制粘贴到翻译软件快很多，而且是双语对照，顺便还能练英文。默认设置不用填 API key 就能用。📱 手机上：Termux 本身不是浏览器装不了这个，要看你手机用的浏览器支不支持装 Chrome 扩展（比如 Kiwi 浏览器可以），这个工具本质是配合浏览器用，跟 Termux 无关。",
      "install": [
        {
          "title": "怎么装 · 浏览器扩展（手机/电脑通用）",
          "intro": "按你用的浏览器选一种方式，应用商店打不开就走官方文档里的离线办法。",
          "steps": [
            { "text": "打开官方安装说明页，按提示选对应浏览器商店安装：", "code": "", "after": "[immersivetranslate.com/docs/installation](https://immersivetranslate.com/docs/installation/)" },
            { "text": "商店打不开的话，去 Releases 页面下载对应的安装包，按页面说明手动加载：", "code": "", "after": "[github.com/immersive-translate/immersive-translate/releases](https://github.com/immersive-translate/immersive-translate/releases)" }
          ],
          "done": "装好后打开一个英文网页，右下角会出现悬浮球图标，点一下整页翻译，能看到中英对照就是装成功了。"
        }
      ],
      "url": "https://github.com/immersive-translate/immersive-translate"
    },
    {
      "emoji": "🛠",
      "repo": "pablostanley/yoinks",
      "title": "终端下视频，不用看广告",
      "lang": "TypeScript",
      "stars": "5,098",
      "week": "2,732",
      "body": "一个命令行视频下载工具，支持 YouTube、X/Twitter、Instagram、TikTok 等 1800 多个网站，粘贴链接、选分辨率或选纯音频 mp3 就能下载，文件默认存到 Downloads 文件夹。不用在浏览器里点来点去躲广告和弹窗，用到的 yt-dlp 和 ffmpeg 会自动获取，需要 Node 18 及以上。",
      "explain": "yt-dlp 是一个专门下视频用的开源工具，这个项目给它包了一层更好用的命令行界面。",
      "opinion": "平时想存一段教程视频离线看，这个比网页下载站干净快捷，装一次就能一直用。不是刚需工具，但顺手。📱 手机上：Termux 装了 Node v26，满足 18+ 的要求，装这个走的是 npm，不涉及 GitHub，不用加代理，应该能直接装上用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）",
          "intro": "命令两边一样，装的时候走 npm 不涉及 GitHub，不用加代理前缀；电脑上如果没装过 Node.js，先去 nodejs.org 下载装一下 LTS 版本。",
          "steps": [
            { "text": "全局安装：", "code": "npm install -g yoinks" },
            { "text": "不想全局装也可以直接试：", "code": "npx yoinks" },
            { "text": "粘贴链接直接下载：", "code": "yoinks https://youtu.be/xxxxxxxx", "after": "也可以不带链接直接运行 yoinks，再把链接粘贴进去" }
          ],
          "done": "运行后会提示选分辨率或 mp3，选完开始下载，下载完能在 Downloads 文件夹里找到文件就是成功了。"
        }
      ],
      "url": "https://github.com/pablostanley/yoinks"
    },
    {
      "emoji": "💰",
      "repo": "sngyai/Sequoia-X",
      "title": "开源A股选股脚本，收盘自动推送",
      "lang": "Python",
      "stars": "7,937",
      "today": "41",
      "body": "一个 A 股量化选股脚本，收盘后跑 6 种技术面策略（比如海龟突破、均线放量），选出符合条件的股票，通过飞书机器人推送结果，不涉及自动下单。数据源用免费的 baostock 接口，不用注册券商账户。配好 `.env` 和飞书 Webhook 后，设个定时任务（crontab）就能每天收盘自动跑。",
      "explain": "量化选股就是把「什么样的 K 线形态值得关注」写成死规则，让程序每天自动扫一遍股票池，省得自己盯盘。这里的几种策略都是公开的技术分析方法，不代表真的能稳定赚钱——技术面信号本身胜率有限，历史上管用不代表以后管用。",
      "opinion": "拿来学 Python 怎么处理股票数据、怎么写策略挺合适，代码结构清楚。但务必说清楚：这是选股提示，不是自动交易，更不是「稳赚」工具——技术指标选出来的股票照样可能跌，项目本身也没做过安全审计，别往里面接真实券商账户或者填交易密钥，只当学习材料看，不要拿真钱跟着它的信号下单。📱 手机上：它依赖 pandas 这类需要编译的 Python 库，Termux 大概率装不上（表现为 `pip`/`uv sync` 装到 numpy、pandas 那一步报编译错误），建议直接放电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "手机 Termux 大概率装不上（见上面说明），这里只写电脑步骤。需要 Python 3.10 及以上。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/sngyai/Sequoia-X.git\ncd Sequoia-X", "after": "下载慢或失败就先开代理软件再试一次" },
            { "text": "装依赖（没有 uv 就先 `pip install uv`）：", "code": "uv sync" },
            { "text": "复制配置文件，填入你的飞书机器人 Webhook 地址：", "code": "cp .env.example .env" },
            { "text": "第一次运行要先回填历史数据，大概 12 分钟：", "code": "python main.py --backfill" },
            { "text": "日常运行（选股+推送）：", "code": "python main.py" }
          ],
          "done": "终端能看到选股结果，飞书群里也收到机器人推送的消息，就是跑通了。"
        }
      ],
      "url": "https://github.com/sngyai/Sequoia-X"
    },
    {
      "emoji": "📚",
      "repo": "wanglin2/mind-map",
      "title": "免费思维导图工具，整理学习笔记",
      "lang": "JavaScript",
      "stars": "12,797",
      "today": "1",
      "body": "一个开源的网页版思维导图工具（原名 SimpleMindMap），有免费在线版可以直接用，不用装软件，也有可下载的客户端。支持多种导图样式、大纲模式，笔记能导出常见格式。",
      "explain": "思维导图就是把一个主题拆成分支树状结构，适合整理「Python 有哪些知识点」「电工要学什么」这类零散知识。",
      "opinion": "学 Python、电工、理财这几门杂的东西时，知识点容易记成一团乱账，用思维导图按模块拆开记，复习的时候一眼看全貌，比记流水笔记更容易理清先后顺序。在线版免费打开就能用，不用折腾安装。📱 手机上：在线版是网页，手机浏览器直接打开就行，不用装东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开在线版，手机电脑都能用：", "code": "", "after": "[web.sxmind.cn](https://web.sxmind.cn/)" }
          ],
          "done": "打开页面能新建导图、添加节点，就是能正常用了。"
        }
      ],
      "url": "https://github.com/wanglin2/mind-map"
    },
    {
      "emoji": "🎨",
      "repo": "LorisYounger/VPet",
      "title": "开源桌宠，挂在电脑上暖场",
      "lang": "C#",
      "stars": "6,892",
      "today": "14",
      "body": "一个开源桌面宠物模拟器，可以养一只小宠物待在桌面上，支持互动、投喂，还有创意工坊的模组可以换皮肤和功能。基于 WPF，只支持 Windows。普通用户直接在 Steam 上免费领取就能玩，不用自己编译源码。",
      "explain": "桌面宠物就是一个常驻在桌面上的小动画角色，类似早年的电子宠物，纯娱乐、不影响正常用电脑。",
      "opinion": "纯图一乐，写代码写累了可以摆一个在桌面上看看，别对它有啥实际用处的期待。Steam 领取比自己编译省事很多。📱 手机上：这是基于 Windows 桌面技术（WPF）做的，Termux 跑不了，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "普通用户直接走 Steam，不用编译源码。",
          "steps": [
            { "text": "打开 Steam 搜索「VPet」领取（免费）：", "after": "需要先装好 Steam 客户端并登录账号" }
          ],
          "done": "在 Steam 库里能启动 VPet，桌面上出现小宠物动画，就是装好了。"
        }
      ],
      "url": "https://github.com/LorisYounger/VPet"
    }
  ]
};
