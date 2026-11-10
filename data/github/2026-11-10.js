DAILY_DATA["github/2026-11-10"] = {
  "date": "2026-11-10",
  "highlight": "今天最值得动手试的是 `claude-mem`——给 Claude Code 装上跨会话记忆，开新会话不用再从头解释项目背景，省不少重复说明的功夫。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "thedotmack/claude-mem",
      "deploy": ["pc"],
      "title": "让 Claude Code 记住你上次聊到哪",
      "lang": "TypeScript",
      "stars": "115,397",
      "week": "5,130",
      "body": "这是给 Claude Code（也支持 Codex、Cursor 等编码助手）装的跨会话记忆插件。它会把你和 AI 之间的操作过程用 AI 压缩成一条条「观察记录」存在本地，下次开新会话时自动把相关记录找出来塞进上下文，相当于给 AI 配了一个会自己记笔记的本子。数据默认存在本地 `~/.claude-mem`，不强制上传。",
      "explain": "「插件」就是给 Claude Code 装一个额外功能模块；「MCP」是 AI 助手连外部工具的通用接口，这个项目用它来提供「搜索记忆」的功能。压缩总结那部分需要调一个小模型，可以用你自己的 API key，也能选官方账号（带 30 天免费试用）。",
      "opinion": "如果你经常开新会话、每次都要重新跟 AI 交代「我在做什么项目、上次卡在哪」，这个能省不少重复说明的功夫；但装上后别全信它记下的东西，偶尔核对一下有没有记错。它靠自动下载 Bun 运行时跑后台服务。📱 手机上：不保证，Bun 的预编译包大概率跟 Termux 的系统库不兼容，装不上就先放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "在已经装好 Claude Code 的电脑上装，装好后在任意项目里都能用。",
          "steps": [
            { "text": "打开终端，运行安装向导：", "code": "npx claude-mem install", "after": "向导会问你给哪些 AI 助手装钩子，照提示选就行；下载慢或失败就先开代理。" },
            { "text": "装完按提示重启 Claude Code（或新开一个终端窗口）。" },
            { "text": "想看它记了什么，可以打开查看器：", "code": "claude-mem viewer" }
          ],
          "done": "新开一个 Claude Code 会话问一句「我们上次聊到哪了」，它能答上来就是装成功了。"
        }
      ],
      "url": "https://github.com/thedotmack/claude-mem"
    },
    {
      "emoji": "🤖",
      "repo": "cloudflare/security-audit-skill",
      "deploy": ["phone", "pc"],
      "title": "让编码 AI 自己做一次安全体检",
      "lang": "JavaScript",
      "stars": "68,072",
      "week": "10,695",
      "body": "Cloudflare 开源的一套「技能」，装给 Claude Code 这类编码 AI 用，让它分阶段地去读代码、找漏洞、再自我核验，最后给出一份结构化的安全审计报告。Cloudflare 自己也用它来找自家代码里的漏洞。",
      "explain": "「Skill」是给 AI 助手的一份操作手册，装上之后它看到「审计代码」这类请求就会照着手册一步步做。完整审计需要一个隔离的沙箱环境（专门隔出来跑代码、不让它碰到真实系统的空间）去真的运行和测试代码；没有沙箱时，它只会给出需要人工复核的线索，不会去执行你的代码。",
      "opinion": "拿来检查自己写的小工具挺省心，相当于多一个人帮你过一遍「有没有明显的坑」。但手机上没有沙箱，它只能停在建议模式，给不出需要真实跑代码才能验证的结果，靠谱程度打个折；电脑上效果更完整。它不是万能的，该有的代码审查还是要自己把关。📱 手机上：能装，`npx skills add` 靠 Node 就能跑，但审计只会停在「建议模式」。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "在你平时跑 Claude Code 的项目目录下执行。",
          "steps": [
            { "text": "运行安装命令：", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit", "after": "手机 Termux 里把命令换成：`https_proxy=http://127.0.0.1:7890 npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit`（只对这一条命令生效）。" },
            { "text": "装完直接跟 Claude Code 说「帮我做一次安全审计」之类的话，它会自动走流程。" }
          ],
          "done": "Claude Code 回复里出现分阶段审计的说明，或者在 `~/security-audit-skill/` 目录下看到生成的报告，就是装成功了。"
        }
      ],
      "url": "https://github.com/cloudflare/security-audit-skill"
    },
    {
      "emoji": "🛠",
      "repo": "The-PR-Agent/pr-agent",
      "deploy": ["pc", "cloud"],
      "title": "让 AI 先帮你 review 一遍代码改动",
      "lang": "Python",
      "stars": "15,729",
      "week": "1,822",
      "body": "一个开源的 AI 代码审查工具，接到 PR（提交代码合并请求）后能自动写摘要、挑问题、给改进建议，在评论区打 `/review` 之类的指令就能触发。原本是 Qodo 公司的内部项目，后来捐给社区维护，跟 Qodo 现在卖的商业版是两条线。",
      "explain": "它本质上是调用你配置的大模型（ChatGPT、DeepSeek、Claude 等都行）去读「diff」（代码改动内容），按写好的模板生成审查意见，跟你自己把代码复制去问 AI 是类似的事，只是流程和提示词都提前写好了。",
      "opinion": "一个人改代码、没人帮你 review 的话，拿它当「第二双眼睛」扫一遍挺实用，尤其是改动一多容易漏看逻辑问题。它支持 DeepSeek 这类国内接口，不用非绑 OpenAI 的 key。📱 手机上：不装，这个包的依赖链里带了需要编译的底层库，情况跟 jiter 类似，大概率装不上，老实在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "先用 CLI 本地跑着试试效果，不用一开始就接 GitHub Action。",
          "steps": [
            { "text": "安装（建议先建个虚拟环境）：", "code": "pip install \"pr-agent[github]\"", "after": "下载慢或失败就先开代理。" },
            { "text": "设置模型 key（以 OpenAI 为例，换别家要查文档改配置）：", "code": "$env:OPENAI_KEY=\"你的key\"" },
            { "text": "对某个 PR 跑一次审查：", "code": "pr-agent --pr_url 这里填PR的网址 review" }
          ],
          "done": "终端或对应 PR 的评论区出现 AI 写的审查意见，就是跑成功了。"
        }
      ],
      "url": "https://github.com/The-PR-Agent/pr-agent"
    },
    {
      "emoji": "🎨",
      "repo": "Donchitos/Claude-Code-Game-Studios",
      "deploy": ["phone", "pc"],
      "title": "一句话让 Claude Code 帮你搭游戏原型",
      "lang": "Shell",
      "stars": "37,556",
      "week": "4,324",
      "body": "一套给 Claude Code 用的配置包，装了一堆分工明确的 agent 和 skill，专门干「做游戏」这件事。在里面说一句游戏想法，它会反问细节、写简报，然后生成一个能在浏览器里跑的小游戏原型。不是 Anthropic 官方项目，是个人作者做的，但热度和维护都还不错。",
      "explain": "「agent」就是让 AI 扮演不同角色分工干活（比如一个管策划、一个管写代码）；「skill」是预先写好的操作手册。项目里带了会自动执行命令的「hook」（钩子），装之前最好看一眼它到底会跑什么命令，别无脑信任来源不明的脚本。",
      "opinion": "图个新鲜、看看 AI 能把游戏做到什么程度挺好玩，别指望能做出复杂的正式作品。生成出来的原型大概率就是能直接在浏览器打开的网页游戏，跟你平时写单文件 HTML 工具的路子也搭。📱 手机上：大概率能用，主要靠 Claude Code 本身跑，克隆仓库、跑命令都是手机上常规操作；它提到要用 Chrome 做自动化测试，手机上没有，生成的网页游戏手动用手机浏览器打开看就行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "两边步骤一样，先确保已经装好 Claude Code。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/Donchitos/Claude-Code-Game-Studios.git my-game", "after": "手机 Termux 里这条命令前面加代理：`https_proxy=http://127.0.0.1:7890 git clone https://github.com/Donchitos/Claude-Code-Game-Studios.git my-game`。" },
            { "text": "进入目录，启动 Claude Code：", "code": "cd my-game\nclaude" },
            { "text": "在会话里直接说出你的游戏想法，比如：", "code": "/prototype 一个像素风格的跳跃小游戏" }
          ],
          "done": "Claude Code 反问细节或者直接生成项目文件，并给出一个能在浏览器打开的原型，就是跑起来了。"
        }
      ],
      "url": "https://github.com/Donchitos/Claude-Code-Game-Studios"
    },
    {
      "emoji": "💰",
      "repo": "ZhuLinsen/daily_stock_analysis",
      "deploy": ["pc", "cloud"],
      "title": "用 AI 看盘写每日分析报告（不是自动炒股）",
      "lang": "Python",
      "stars": "68,839",
      "today": "506",
      "body": "用大模型做的多市场股票分析工具，每天自动抓行情和新闻，生成一份 AI 写的分析报告，能推送到手机或网页上看。它只负责「分析和提醒」，不接券商账户，不会自动帮你下单买卖。",
      "explain": "项目里的「持仓」功能只是让你手动记一下自己买了什么，方便它结合行情给提醒，不是自动交易；行情数据用的是免费公开源，不用额外花钱买数据。",
      "opinion": "当成学习材料，看看 AI 怎么分析股票、练手改改 prompt 和逻辑可以，但别把它的「决策报告」当成真实的买卖建议——股市本身就可能亏钱，AI 的判断也可能是错的，千万别真金白银照着它的结论下单，更不要往里面填券商账户或密码。它可以配成 GitHub Actions 定时跑，不用自己留一台机器开机盯着。📱 手机上：不保证，Python 依赖里大概率有需要编译的库，装不上就放电脑或者直接用 GitHub Actions 跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ GitHub Actions 定时跑",
          "intro": "本地跑适合先试试效果，长期盯盘更适合用 GitHub Actions 定时触发，不用自己留一台电脑开机。",
          "steps": [
            { "text": "克隆仓库后安装依赖：", "code": "pip install -r requirements.txt", "after": "下载慢或失败就先开代理。" },
            { "text": "复制一份配置文件，填进去你的大模型 key（支持 DeepSeek 等国内接口）：", "code": "cp .env.example .env" },
            { "text": "跑一次看效果：", "code": "python main.py" },
            { "text": "想长期用，去 GitHub 上 Fork 这个仓库，在仓库 Settings → Secrets 里填上模型 key，再到 Actions 页面启用，它会按设定时间自动跑。" }
          ],
          "done": "终端里（或 GitHub Actions 的运行记录里）能看到生成的分析报告，就是跑成功了。"
        }
      ],
      "url": "https://github.com/ZhuLinsen/daily_stock_analysis"
    },
    {
      "emoji": "💰",
      "repo": "mayswind/ezbookkeeping",
      "deploy": ["pc", "cloud"],
      "title": "自己架一个记账网站，数据握在自己手里",
      "stars": "6k",
      "body": "一个自托管的记账软件，界面照顾了手机和电脑两种屏幕，能导入账单、用图表看收支趋势。装在自己的服务器或电脑上，数据不经过别人家的服务器。",
      "explain": "「自托管」就是软件装在你自己的电脑或服务器上跑，不是用别人公司运营的在线服务；「PWA」是一种网页技术，能把网站「添加到主屏幕」，用起来跟手机 App 差不多，但本质还是个网页。",
      "opinion": "适合想自己管记账数据、不想账单信息被第三方 App 拿去用的人，装好之后手机上用网页 PWA 就行，不用额外装 App。它要常年挂着跑，更适合丢到云服务器或一台常开的电脑上。📱 手机上：不标，这类要一直挂着跑的服务不适合放手机上，乖乖放电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（需要 Docker）",
          "intro": "用 Docker 跑最省事，先确保电脑或服务器上装好了 Docker。",
          "steps": [
            { "text": "拉取并启动容器（正式版）：", "code": "docker run -p8080:8080 mayswind/ezbookkeeping", "after": "想用每天更新的最新版，把镜像换成 `mayswind/ezbookkeeping:latest-snapshot`。" },
            { "text": "打开浏览器访问服务地址的 8080 端口，比如本机就是：", "code": "http://localhost:8080/" },
            { "text": "正式长期用之前记得给容器挂一个持久化目录，不然容器删了数据就没了，不保证这步给的命令完整，细节查官方文档。" }
          ],
          "done": "浏览器打开页面能看到注册/登录界面，就是装成功了。"
        }
      ],
      "url": "https://github.com/mayswind/ezbookkeeping"
    }
  ]
};
