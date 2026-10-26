DAILY_DATA["github/2026-10-26"] = {
  "date": "2026-10-26",
  "highlight": "今日看点：最值得先试的是 ai-memory——让你换一个 AI 编程工具接着上次的进度做，不用重新把项目背景说一遍，经常来回换工具的人能省不少事。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "akitaonrails/ai-memory",
      "deploy": ["pc"],
      "title": "换个 AI 编程工具，能接着上次的进度做",
      "lang": "Rust",
      "stars": "13,521",
      "week": "3,254",
      "body": "装在电脑上的一个后台记录程序，AI 编程工具帮你改代码时，它会把过程存成本地的 Markdown 笔记。下次换另一个 AI 编程工具接着做同一件事，新工具能先看到这份笔记，不用你重新介绍一遍背景。默认不调用任何大模型，不用填 key。",
      "explain": "「长期记忆」说的是让 AI 工具记住你们之前做过什么，而不是每次都从头介绍。现在很多人会在不同 AI 编程工具间来回换着用，但默认换工具等于背景清零，这个项目就是补这个缺口的。",
      "opinion": "如果你平时不止用一种 AI 编程工具做开发，这个能省下不少「重新介绍项目背景」的功夫，笔记是本地 Markdown 文件，自己也能翻着看。不调用任何大模型、不用填 key，装起来成本不高，值得试一天看顺不顺手。📱 手机上：官方给了 Linux aarch64 的现成程序，但 Termux 的目录结构和普通 Linux 不一样，类似的通用二进制大概率装不上或启动报错，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用 PowerShell 下载并安装：", "code": "irm https://github.com/akitaonrails/ai-memory/releases/latest/download/install.ps1 | iex" },
            { "text": "跑一次初始化设置：", "code": "ai-memory setup" },
            { "text": "（可选）接到 Claude Code 的插件市场：", "code": "claude plugin marketplace add akitaonrails/ai-memory && claude plugin install ai-memory@ai-memory", "after": "不接插件市场也能单独用，这一步按需。" },
            { "text": "以后用它来启动你的 AI 编程工具，它会在后台自动记笔记：", "code": "ai-memory run claude", "after": "换成别的工具名就是用别的工具接着做同一件事，比如 ai-memory run codex。" }
          ],
          "done": "执行 ai-memory doctor 没报错，且 ai-memory run 能正常拉起你的 AI 编程工具，就是装好了。"
        }
      ],
      "url": "https://github.com/akitaonrails/ai-memory"
    },
    {
      "emoji": "🤖",
      "repo": "pbakaus/impeccable",
      "deploy": ["pc"],
      "title": "专治 AI 写的网页「一眼假」",
      "lang": "Rust",
      "stars": "87,695",
      "today": "1,092",
      "body": "装进 Claude Code 之类的 AI 编程工具后，你用 AI 改网页界面时，它会用一套固定规则检查「一看就是 AI 随手写的」的设计问题，比如配色、间距、字体这些老毛病，也能让 AI 对着规则主动改好看一点。检查这一步不联网、不调用大模型。",
      "explain": "很多人管这种「一看就是 AI 生成的」网页风格叫『AI 味』——配色死板、间距随意、按钮长得差不多。这个项目把这些毛病整理成固定检查项，相当于给 AI 编程工具配了一份「审美纠错清单」。",
      "opinion": "如果你做的工具页面都是自己写 HTML/JS，这个能当免费的审美把关，让 AI 改完界面后自动过一遍清单，省得自己看着「怪」又说不出哪里怪。默认会上报一次匿名使用记录，不想要可以关掉。📱 手机上：它靠下载一个检测用的二进制程序，没查到有 Android/Termux 版本，不保证能跑，建议先在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在项目根目录下执行安装：", "code": "npx impeccable install" },
            { "text": "初始化一次（会生成一份项目说明文件）：", "code": "/impeccable init", "after": "这一步是在 Claude Code 的对话框里输入，不是在终端里敲。" },
            { "text": "让它检查当前界面有哪些问题：", "code": "/impeccable audit" }
          ],
          "done": "审查完给出一条条问题列表，就是装好了；不想要匿名使用记录可以执行 npx impeccable telemetry off 关掉。"
        }
      ],
      "url": "https://github.com/pbakaus/impeccable"
    },
    {
      "emoji": "🛠",
      "repo": "AgriciDaniel/claude-seo",
      "deploy": ["pc"],
      "title": "给 Claude Code 装个 SEO 体检员",
      "lang": "Python",
      "stars": "20,861",
      "today": "197",
      "body": "装进 Claude Code 后多出一组 /seo 命令，能对着一个网址做技术 SEO、内容质量、结构化数据等方面的检查，还会看网页在 AI 搜索（比如被 AI 聊天工具引用）里的表现，最后能导出 Markdown/PDF/JSON 报告。",
      "explain": "SEO 全称是搜索引擎优化，说白了就是让网页更容易被搜索引擎和 AI 搜索找到、排到前面。「结构化数据」是给网页加一些搜索引擎看得懂的标签，让它更准确地知道这页讲的是什么。",
      "opinion": "如果你的网站想让人能搜到，这个能一次性把常见的 SEO 坑都扫一遍，不用自己一条条查清单，不用联网 key 默认就能跑。单纯自己用的工具页、不指望搜索流量的话，这个用处不大。📱 手机上：它要装一个无头浏览器才能跑完整审计，Termux 上大概率装不上或装完跑不起来，建议在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在 Claude Code 里添加插件市场：", "code": "/plugin marketplace add AgriciDaniel/claude-seo" },
            { "text": "安装插件：", "code": "/plugin install claude-seo@agricidaniel-claude-seo" },
            { "text": "跑一次初始化，它会顺手装需要的无头浏览器：", "code": "/seo setup", "after": "不保证成功，无头浏览器装不上的话后面检查会跑不起来。" },
            { "text": "对着一个网址做全站检查：", "code": "/seo audit https://你的网站地址" }
          ],
          "done": "/seo audit 跑完给出一份分类列出问题的检查报告，就是装好了。"
        }
      ],
      "url": "https://github.com/AgriciDaniel/claude-seo"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "deploy": ["pc"],
      "title": "不记流水账，按「信封」提前分钱花的记账本",
      "stars": "29,800",
      "body": "本地跑的记账软件，思路跟常见的「记一笔流水」不太一样：先把每个月的钱分到不同「信封」（比如房租、吃饭、娱乐），花一笔就从对应信封里扣，提前就知道这个月还能在哪块上花多少，不是月底才算总账。桌面版可以完全离线用，不用联网、不用建服务器。",
      "explain": "这种按信封分钱的方法叫「信封预算法」，是个很老但很实用的理财思路：发工资先把钱分好类，而不是花到哪算到哪再反思。桌面版和「自己架服务器多设备同步」是两件事，前者就是电脑上装个软件自己用，跟普通记账 App 一样简单。",
      "opinion": "适合练「提前分配」而不是「事后算账」的习惯，装个桌面版自己记完全够用，不用折腾服务器、不用联网。如果想多设备同步或接银行账单自动导入，需要自己架服务器，涉及编译安装，不折腾的话只用桌面版单机记就好。📱 手机上：官方自架服务器那条路要装几个需要本地编译的库，手机 Termux 上大概率装不上，也没有官方手机 App，这个只推荐在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开下载页面 https://actualbudget.org/download/ ，下载 Windows 版的安装包（.exe）" },
            { "text": "双击装好的安装包，按提示装完" },
            { "text": "打开软件，选「新建本地预算」", "after": "不用注册账号、不用联网，本地就能用。" }
          ],
          "done": "能看到按分类摆开的预算界面，手动加一笔支出能正常扣减对应分类余额，就是装好了。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "📚",
      "repo": "ascoders/weekly",
      "deploy": ["read"],
      "title": "前端技术周刊，一周看一期涨知识",
      "lang": "JavaScript",
      "stars": "31,533",
      "today": "16",
      "body": "一个坚持多年、每周更新的前端技术文章合集，内容涵盖前沿技术、源码解读、算法、设计模式等方向，用 Markdown 文件按主题分文件夹存放，GitHub 上直接点开就能读。",
      "explain": "「前端」就是写网页界面那部分开发工作（HTML/CSS/JS），平时做的单文件网页小工具也属于这个范围。",
      "opinion": "适合当成日常刷的技术文章来源，挑感兴趣的主题点进去看就行，不用整本啃。它更像是保持对前端动态的手感，不保证每篇都对当前项目直接有用。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库页面 https://github.com/ascoders/weekly，从 README 里点感兴趣的主题文件夹或文章链接" }
          ],
          "done": "打开任意一篇 Markdown 文章能正常读到内容，就是找对地方了。"
        }
      ],
      "url": "https://github.com/ascoders/weekly"
    },
    {
      "emoji": "🎨",
      "repo": "go-musicfox/go-musicfox",
      "deploy": ["phone", "pc"],
      "title": "终端里跑的网易云音乐播放器",
      "lang": "Go",
      "stars": "2,600",
      "body": "一个在命令行里跑的网易云音乐播放器，支持切换音质、歌词显示、主题换色等功能，Termux 和 Windows 都有现成的安装方式，不用额外编译。",
      "explain": "「命令行里跑」意思是没有图形界面，全靠文字和键盘操作，跟平时点按钮的 App 不一样，但上手后用方向键选歌、空格暂停就行，习惯了反而简洁。",
      "opinion": "纯粹是个好玩的小工具，手机上跟其他 Termux 工具一起装，不占图形界面，适合挂后台听歌；对开发学习没有直接帮助，想体验一下命令行工具可以装。📱 手机上：Termux 官方源里直接有这个包，一行命令装完就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "直接从 Termux 自带的源安装：", "code": "pkg install go-musicfox" },
            { "text": "启动播放器：", "code": "musicfox" }
          ],
          "done": "进入一个文字版的播放界面、能看到歌曲列表，就是装好了；要听歌、收藏歌单需要登录网易云账号，跟着界面提示登录即可。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用 Scoop 添加软件源：", "code": "scoop bucket add go-musicfox https://github.com/go-musicfox/go-musicfox.git" },
            { "text": "安装：", "code": "scoop install go-musicfox" },
            { "text": "启动：", "code": "musicfox" }
          ],
          "done": "进入一个文字版的播放界面、能看到歌曲列表，就是装好了；要听歌、收藏歌单需要登录网易云账号，跟着界面提示登录即可。"
        }
      ],
      "url": "https://github.com/go-musicfox/go-musicfox"
    }
  ]
};
