DAILY_DATA["github/2026-11-23"] = {
  "date": "2026-11-23",
  "highlight": "今天最值得试的是 **Plannotator**——给 Claude Code 配一个浏览器审阅面板,它每次要动手改代码前,先把方案摆出来给你写批注,点头了才继续。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "backnotprop/plannotator",
      "deploy": ["pc"],
      "title": "给 AI 编程代理的方案审阅工具，边改边批注打回去",
      "lang": "TypeScript",
      "stars": "14,429",
      "week": "2,815",
      "body": "Plannotator 是一个本地运行、在浏览器里给 `Claude Code`、Codex 等 AI 编程代理做方案审阅的工具。装好之后，代理每次要退出计划模式前会自动在浏览器里弹出审阅界面，你可以直接在计划、文档或代码改动上写批注，点「拒绝」就会把你的意见发回代理，让它按你的意见改。也支持手动审阅当前的改动或指定文件。",
      "explain": "AI 编程代理（比如 Claude Code）写代码前会先列个「计划」再动手，但计划写得对不对，平时只能靠读一堆文字判断，容易漏看。Plannotator 把这一步变成像批改作业一样——在浏览器里圈重点、写评语，系统会把你的意见原样发回代理，不用自己再打字转述一遍。",
      "opinion": "如果你平时让 Claude Code 代劳整段代码或整个计划，又不想每次都逐字核对，这个工具能把「审阅」这件事变得直观很多，尤其适合手上项目不止一个、没时间逐条看完每次改动的情况。装起来就是一个安装脚本，跟现有的 Claude Code 插件机制不冲突，值得先挑一个项目试几天看顺不顺手。📱 手机上：装不上——它的安装脚本只认 macOS、Linux、WSL 和 Windows，没提到 Termux 或安卓，大概率不兼容，电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 PowerShell，运行安装脚本：", "code": "irm https://plannotator.ai/install.ps1 | iex", "after": "下载慢或失败就先开代理。" },
            { "text": "在 Claude Code 里添加插件市场：", "code": "/plugin marketplace add backnotprop/plannotator" },
            { "text": "安装插件：", "code": "/plugin install plannotator@plannotator" },
            { "text": "重启 Claude Code，让插件生效。" }
          ],
          "done": "下次 Claude Code 要退出计划模式时，浏览器会自动弹出审阅界面，说明装成功了。"
        }
      ],
      "url": "https://github.com/backnotprop/plannotator"
    },
    {
      "emoji": "🛠",
      "repo": "mjmirza/app-store-compliance",
      "deploy": ["phone", "pc"],
      "title": "提交 App Store / Google Play 前，先用脚本扫一遍常见拒审雷区",
      "lang": "Shell",
      "stars": "3,978",
      "today": "621",
      "body": "这是一份整理了 124 种 App Store 和 Google Play 拒审原因及修复方法的清单，配了一个命令行检查脚本。对着自己的 iOS 或 Android 项目跑一下，脚本会给出「存在风险」「代码层面没问题」或「没找到项目」的结论，「存在风险」时还会告诉你该改哪一行。作者说明它不保证一定能过审，只能查出代码扫描能看到的风险。",
      "explain": "「拒审」是说你把 App 提交给苹果或谷歌审核，结果被退回来不让上架，原因可能是用了被禁止的权限、隐私说明没写全等，这些规则又多又零碎，靠自己记很容易漏。",
      "opinion": "如果你以后有 App 想发到应用商店，提交前先跑一遍这个脚本，能提前发现明显的雷区，省得交上去等几天才被退回来重新改；现在手上没有要上架的项目，也可以先收藏，用到再说。📱 手机上：能装——它就是 `git clone` 下来的 bash/python 脚本，不依赖编译原生库，Termux 里应该能跑，但扫描对象是 iOS/Android 项目的源码目录，项目在哪台设备上就在那台设备上跑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Git Bash）",
          "intro": "两边命令一样，Windows 在 Git Bash 里跑。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/mjmirza/app-store-compliance ~/repositories/app-store-compliance", "after": "手机 Termux 里这条命令前面加 `https_proxy=http://127.0.0.1:7890 `（只对这一条命令生效）；电脑上如果下载慢或失败，先开代理再试。" },
            { "text": "对你的项目目录跑检查脚本（把路径换成你自己项目的路径）：", "code": "bash ~/repositories/app-store-compliance/agent-os/hooks/app-store-compliance-guard.sh \"/path/to/your/app\"" }
          ],
          "done": "输出以「CLEAR.」开头说明代码层面没查到关键风险；「BLOCKED.」开头会列出要改的地方；两者都不代表审核一定通过。"
        }
      ],
      "url": "https://github.com/mjmirza/app-store-compliance"
    },
    {
      "emoji": "📚",
      "repo": "jaywcjlove/linux-command",
      "deploy": ["read"],
      "title": "查 Linux/Termux 命令怎么用，网页搜一下就有",
      "lang": "Markdown",
      "stars": "37,285",
      "today": "15",
      "body": "收录了 600 多个 Linux 命令的手册和用法说明，带搜索功能，网页打开直接查、不用装。在 Termux 里敲命令时不记得某个参数是干嘛的，上网页搜命令名就有例子和讲解。",
      "explain": "这是一份放在网上的「命令字典」，不是一个软件，打开网址用搜索框查命令名就行，跟查词典差不多。",
      "opinion": "平时在 Termux 里折腾环境、装东西，经常会用到各种 Linux 命令，遇到生词查一下比自己瞎试更快。纯粹是文档，随手收藏网址就行，不用花时间装。📱 手机上：能用——就是个网页，手机浏览器直接打开查。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "手机或电脑浏览器打开：", "code": "https://jaywcjlove.github.io/linux-command/" },
            { "text": "在页面搜索框里输入命令名（比如 grep、tar）就能查到用法和例子。" }
          ],
          "done": "能搜到命令说明就对了。"
        }
      ],
      "url": "https://github.com/jaywcjlove/linux-command"
    },
    {
      "emoji": "📚",
      "repo": "1c7/chinese-independent-developer",
      "deploy": ["read"],
      "title": "一份清单，看看国内独立开发者都在做什么项目",
      "stars": "62,265",
      "today": "10",
      "body": "这是一份收集中国独立开发者项目的清单，按分类列出别人在做的小工具、App、网站，附带简介和链接，纯文档形式，方便一次性浏览很多同类项目。",
      "explain": "「独立开发者」指一个人（或很小的团队）自己做产品、自己维护、自己想办法推广出去，不是在大公司里上班写代码。",
      "opinion": "自己也在做单文件小工具的话，翻一翻这份清单能看看别人怎么起名字、怎么写简介、怎么找用户，说不定能挑到几个顺手参考的点子，但别指望里面每个项目都靠谱，质量参差不齐，挑着看就行。📱 手机上：能看——就是个 GitHub 页面，手机浏览器直接打开。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "手机或电脑浏览器打开仓库页面：", "code": "https://github.com/1c7/chinese-independent-developer" },
            { "text": "点开 README，按分类往下翻就能看到各个项目和链接。" }
          ],
          "done": "能看到一串项目列表就对了。"
        }
      ],
      "url": "https://github.com/1c7/chinese-independent-developer"
    },
    {
      "emoji": "💰",
      "repo": "jameskokoska/Cashew",
      "deploy": ["phone", "pc"],
      "title": "开源记账 App，网页打开就能用，不用先装",
      "stars": "4.8k",
      "body": "Cashew 是一个开源的个人记账和预算管理 App，支持多账户、多币种、消费目标和统计图表。有网页版可以直接在浏览器里用，也有 Android/iOS App，在 Google Play 和 App Store 都能下载。",
      "explain": "它跟花呗账单、银行流水没关系，是自己手动记一笔一笔的收支，「预算」是自己先定好这个月在某类上最多花多少钱，App 帮你跟踪有没有超。",
      "opinion": "想摸清每月钱花在哪，不用自己写个记账页面，先拿这个现成的用一个月，看看花钱的规律，比凭感觉记账更有数，不满意了再决定要不要自己写个简化版。📱 手机上：能用——网页版直接在手机浏览器打开就能记账，不用装东西。",
      "install": [
        {
          "title": "怎么用（网页版，不用安装）",
          "intro": "网页版手机、电脑浏览器通用。",
          "steps": [
            { "text": "浏览器打开网页版：", "code": "https://budget-track.web.app" },
            { "text": "（可选）想要安卓 App，去 Google Play 搜「Cashew」安装，或在仓库 Releases 页面找 APK。", "after": "不保证 Releases 页面一定挂着现成的 APK，没有就用网页版或 Google Play。" }
          ],
          "done": "能新建一笔收支记录，就说明能用了。"
        }
      ],
      "url": "https://github.com/jameskokoska/Cashew"
    },
    {
      "emoji": "💰",
      "repo": "sngyai/Sequoia-X",
      "deploy": ["pc"],
      "title": "用 Python 写的 A 股选股扫描器，收盘后自动跑完推消息到飞书",
      "lang": "Python",
      "stars": "8.8k",
      "body": "Sequoia-X 是一套跑在本地的 A 股量化选股系统，每天收盘后用六种技术策略扫一遍全市场，把符合条件的股票推送到飞书群，数据存在本地 SQLite，不涉及下单和真实账户，也不用接任何券商 API。",
      "explain": "「量化选股」是说用写好的规则（比如某种价格走势、成交量变化）去全市场股票里机器筛一遍，挑出符合条件的，跟人工盯盘看图不是一回事；它不帮你下单，只是把筛选结果发给你自己看。",
      "opinion": "这东西对你更大的价值不是真拿去做买卖决策，而是看它怎么用 Python 把「抓数据 → 跑规则 → 推消息到飞书」这条流程串起来，这类自动化思路挺值得翻一下代码学结构。股票筛选结果不代表会涨会跌，策略有没有效作者也没给回测数据，代码也可能有 bug，别把这当买卖依据，更别真拿钱跟着操作，顶多当学习材料看看。📱 手机上：不确定——它要装 pandas 这类带 C 扩展的数据处理库，Termux 上没验证过能不能装，大概率要折腾，建议先在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "用 `uv` 管理 Python 环境，这是 README 推荐的方式。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/sngyai/Sequoia-X", "after": "下载慢或失败就先开代理。" },
            { "text": "进入目录，装依赖：", "code": "cd Sequoia-X\nuv sync" },
            { "text": "把配置文件改成自己的：", "code": "Copy-Item .env.example .env", "after": "打开 .env，填入自己飞书机器人的 Webhook 地址（飞书群里加「自定义机器人」就能拿到）。" },
            { "text": "第一次运行，把近几年的历史数据拉下来（约 12 分钟）：", "code": "python main.py --backfill" },
            { "text": "日常运行，跑一次当天的选股：", "code": "python main.py", "after": "也可以配合系统的定时任务，在每个交易日收盘后自动跑一次。" }
          ],
          "done": "飞书群里收到选股结果的消息，就说明装成功了。"
        }
      ],
      "url": "https://github.com/sngyai/Sequoia-X"
    }
  ]
};
