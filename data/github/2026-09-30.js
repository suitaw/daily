DAILY_DATA["github/2026-09-30"] = {
  "date": "2026-09-30",
  "highlight": "今天最想让你去试的是 `reclip`——自己搭一个下载视频/音频的小网站，粘链接就能存，五分钟能跑起来，手机电脑都能装。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "t8y2/dbx",
      "title": "带 AI 助手的数据库客户端，能接进 Claude Code",
      "lang": "Rust",
      "stars": "21,990",
      "today": "232",
      "body": "`dbx` 是一个数据库管理工具，支持 MySQL、PostgreSQL、SQLite、Redis、MongoDB 等 100 多种数据库，图形界面、命令行、网页版都有，整个软件才 25MB 左右。\n它内置 AI 助手，能用大白话让 AI 帮你写 SQL、解释查询、修复报错；还提供 MCP 接口，能让 Claude Code 之类的 AI 编程工具直接读写你的数据库。",
      "explain": "MCP 是一种让 AI 工具（比如 Claude Code）直接连上外部软件的通用接口协议，配好之后你在 Claude Code 里聊天就能让它去查数据库、改数据，不用自己手写连接代码。SQL 是操作数据库用的查询语言。",
      "opinion": "如果你以后写的小工具要用上数据库（哪怕只是本地存点数据），这个能省掉自己学写连接代码的功夫，接上 Claude Code 后直接用中文让 AI 帮你查表、改数据挺方便；现在用不到数据库的话可以先收藏，真的需要时再装。\n📱 手机上：不保证——官方只列了 macOS/Windows/Linux 桌面版和 Docker，没提到安卓 Termux，`npx @dbx-app/mcp-server` 这条纯 Node 命令理论上能跑，但如果装的时候报原生模块编译错误，就说明这条路在 Termux 走不通，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "先装桌面版看数据库，要接进 Claude Code 再多做一步配置。",
          "steps": [
            { "text": "用 winget 装桌面版", "code": "winget install t8y2.dbx" },
            { "text": "打开 dbx，按界面提示连接你的数据库（本地 SQLite 文件、远程 MySQL 等）。" },
            { "text": "要接进 Claude Code 的话，在项目目录下的 `.mcp.json` 里加上这段", "code": "{\n  \"mcpServers\": {\n    \"dbx\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@dbx-app/mcp-server\"]\n    }\n  }\n}", "after": "存好后重启 Claude Code 就能生效" }
          ],
          "done": "dbx 界面里能看到数据库的表和数据，或者在 Claude Code 里问一句「帮我查一下数据库有哪些表」有正常回复，就是装成功了。"
        }
      ],
      "url": "https://github.com/t8y2/dbx"
    },
    {
      "emoji": "🛠",
      "repo": "521xueweihan/GitHub520",
      "title": "改一下 hosts，GitHub 访问能快不少",
      "lang": "Python",
      "stars": "29,908",
      "today": "21",
      "body": "`GitHub520` 是一个专门解决国内访问 GitHub 慢、图片和头像加载不出来的小项目：它每天自动更新一份「域名对应最快 IP」的名单，把这份名单加到系统的 hosts 文件里，电脑就会绕开慢的线路直连。\n改一次 hosts 之后基本不用管，作者说全程「5 分钟搞定，不用装任何软件」。",
      "explain": "hosts 文件是电脑里一张「网址对应 IP」的手工对照表，优先级比正常的域名解析还高；把 GitHub 的网址手动指到一批测速更快的 IP 上，就能跳过绕远路的默认线路。",
      "opinion": "如果你在电脑上 `git clone`、`git push` 经常卡慢，这个比自己一个个找 IP 省心，改一次 hosts 就够用，不用像 Termux 那样为每条命令单独设代理。\n📱 手机上：装不了——改 hosts 在安卓上需要 root 权限，没 root 的手机走不通，继续用现在 Termux 里对单条命令加代理的办法就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "只需要改一个系统文件，不用装软件。",
          "steps": [
            { "text": "打开这个网址，全选复制里面的内容", "code": "https://raw.hellogithub.com/hosts" },
            { "text": "以管理员身份运行记事本，再用它打开 hosts 文件", "code": "C:\\Windows\\System32\\drivers\\etc\\hosts", "after": "右键记事本图标选「以管理员身份运行」，否则保存时会提示没权限" },
            { "text": "把刚复制的内容粘贴到文件末尾，保存。" },
            { "text": "打开命令提示符（cmd），刷新一下 DNS 缓存", "code": "ipconfig /flushdns" }
          ],
          "done": "重新打开 GitHub 网页或者跑一次 `git pull`，明显比之前快、图片头像能正常加载，就是生效了。"
        }
      ],
      "url": "https://github.com/521xueweihan/GitHub520"
    },
    {
      "emoji": "📚",
      "repo": "1c7/chinese-independent-developer",
      "title": "一份「国内独立开发者在做什么」的项目大合集",
      "stars": "61,597",
      "today": "31",
      "body": "这是一份持续更新的清单，收集了很多国内独立开发者做的产品和项目，按类型分类，方便一个个翻着看别人在做什么、怎么做的。\n纯内容，不是要装的软件。",
      "explain": "「独立开发者」指的是一个人（或很小的团队）自己做产品、自己发布，不背靠大公司——跟你现在写小工具放 GitHub Pages 的路子是一类人。",
      "opinion": "适合没事翻一翻找灵感，看看别人拿一个小点子做成了什么样、用了什么技术栈，比自己瞎想省时间；它不是教程，别指望照抄出一个项目。\n📱 手机上：随时能看——就是一份 GitHub 上的清单页面，浏览器打开就行，不需要装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器打开仓库地址，直接看 README 里按分类列出的项目清单。" }
          ],
          "done": "打开页面看到一长串分类项目列表，就是找对地方了。"
        }
      ],
      "url": "https://github.com/1c7/chinese-independent-developer"
    },
    {
      "emoji": "💰",
      "repo": "hugo2046/QuantsPlaybook",
      "title": "100+ 券商研报量化策略，拿来复现学量化用",
      "lang": "Jupyter Notebook",
      "stars": "6,347",
      "today": "31",
      "body": "这个项目把国内券商研报里的 100 多个量化投资策略，用 Python 代码复现出来，分成择时、因子构建、价值投资、组合优化四大类，每个策略配一份 Jupyter Notebook，能看代码、看历史数据回测的效果。\n是拿来学习和研究用的，不是能直接接真实账户下单的交易系统。",
      "explain": "「量化投资」就是把选股、买卖的规则写成代码让电脑按固定逻辑执行，而不是凭感觉判断；「回测」是拿历史价格数据跑一遍策略，看看「如果当年这么操作账户会涨还是跌」，跟真实赚不赚钱是两件事。",
      "opinion": "适合当理财入门的进阶阅读材料——看看专业机构研报里那些策略到底是怎么用代码写出来的，对理解「量化」这个词具体是什么很有帮助。但这些策略只是历史回测，不代表未来还有效，代码也没经过审计，绝不能直接拿去接真金白银交易，更不要填券商账户密码或 API Key 到没审计过的脚本里。\n📱 手机上：装不满——里面用到 `qlib`、`lightgbm` 这类需要编译的库，Termux 大概率装不上，建议只在电脑上跑，或者直接在网页上翻 notebook 里的代码和图，不用真的跑起来。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（仅学习用，不接真实账户）",
          "intro": "依赖比较重，第一次装可能要等一会儿；只想看策略逻辑的话可以跳过安装，直接在 GitHub 网页上打开 `.ipynb` 文件看代码和图。",
          "steps": [
            { "text": "克隆项目（国内可直连，不用代理）", "code": "git clone https://github.com/hugo2046/QuantsPlaybook.git\ncd QuantsPlaybook" },
            { "text": "装依赖", "code": "pip install pandas numpy matplotlib seaborn qlib backtrader alphalens", "after": "不保证一次全部装成功，装不上的库先跳过，只研究不依赖它的策略" },
            { "text": "用 Jupyter 打开对应分类文件夹里的 `.ipynb` 文件，一格一格运行看结果", "code": "pip install notebook\njupyter notebook" }
          ],
          "done": "notebook 里能跑出历史回测的收益曲线图，就说明环境装对了。"
        }
      ],
      "url": "https://github.com/hugo2046/QuantsPlaybook"
    },
    {
      "emoji": "🎨",
      "repo": "averygan/reclip",
      "title": "自己搭视频下载站，粘链接就能存视频音频",
      "lang": "HTML",
      "stars": "10,094",
      "today": "113",
      "body": "`reclip` 是一个自己部署的视频/音频下载工具，支持 1000 多个网站，网页界面很简单：粘贴链接，选清晰度，一键下载成 MP4 或 MP3，还能批量下载。\n它只依赖两个 Python 库（Flask 和 `yt-dlp`）加 `ffmpeg`，没有花里胡哨的依赖，比大多数同类工具轻。",
      "explain": "`yt-dlp` 是一个能从几乎所有视频网站扒视频的命令行工具，`reclip` 相当于给它套了一层网页壳；`ffmpeg` 是处理音视频格式转换的通用工具，很多下载、转码软件背后都靠它。",
      "opinion": "适合平时想存点视频里的素材或音频当学习/参考材料，比装一堆浏览器插件干净；作者说是纯手写 HTML/CSS/JS 没有构建步骤，跟你自己做工具的路子很像，改起来也容易上手。\n📱 手机上：能装——两个 Python 库都不需要编译，Termux 里 `pip install flask yt-dlp` 加 `pkg install ffmpeg` 应该都能过。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用",
          "intro": "命令基本一样；手机上装 GitHub 相关的一步要加代理，电脑上不用加。",
          "steps": [
            { "text": "装好 ffmpeg（电脑用官网安装包或包管理器；手机 Termux 用）", "code": "pkg install ffmpeg" },
            { "text": "克隆项目代码（手机上这条要走代理）", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/averygan/reclip.git\ncd reclip", "after": "电脑上把 `https_proxy=http://127.0.0.1:7890 ` 去掉直接跑；下载慢或失败就先开代理" },
            { "text": "装依赖", "code": "pip install flask yt-dlp" },
            { "text": "启动服务", "code": "./reclip.sh", "after": "这个脚本在 Windows 上不保证能直接跑，跑不了就找仓库里给 Windows 用的启动方式" }
          ],
          "done": "浏览器打开 http://127.0.0.1:8899，看到粘贴链接的下载页面，就是装好了。"
        }
      ],
      "url": "https://github.com/averygan/reclip"
    }
  ]
};
