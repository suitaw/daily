DAILY_DATA["github/2026-11-17"] = {
  "date": "2026-11-17",
  "highlight": "今天最值得先试的是 `kajisho5/ffmpeg-skill`——给 Claude Code 装一套本地跑的剪视频技能，不用联网、不用填 key，门槛最低；后面记账网站和定时任务面板更适合周末专门花时间折腾。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "kajisho5/ffmpeg-skill",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装一套免费本地剪视频工具",
      "lang": "Python",
      "stars": "6,716",
      "today": "367",
      "body": "这是一套给 AI 编程工具用的本地剪视频技能，一共 42 个 ffmpeg 相关的小工具，涵盖剪片段、去静音、按时长裁剪、烧录字幕（包括卡拉OK 式动态字幕）、画质转换、音频降噪和响度统一，还能按 TikTok/Reels/YouTube 等平台的尺寸直接导出。全程只靠 Python 标准库加本机装好的 ffmpeg，不用联网、不用填任何 API key。",
      "explain": "`ffmpeg` 是最常用的开源音视频处理引擎，专业剪辑软件背后基本都在用它，只是平时不用自己敲命令；MCP 是让 AI 连接外部工具的通用接口，这里就是让 Claude Code 能直接调 ffmpeg 剪视频，而不是你把命令一条条抄给它。",
      "opinion": "剪视频、烧字幕这类活儿经常是重复劳动，装上这套技能后可以直接让 Claude Code 按你的要求去调用具体工具，不用自己一遍遍翻 ffmpeg 参数文档；全程本地跑、不用 key，装的成本很低，值得先装上试一次剪片或加字幕的活。📱 手机上：能装，它全是 Python 标准库加系统装的 ffmpeg，没有 jiter、openai 这类编译依赖，Termux 里应该能跑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "装好 ffmpeg：", "code": "pkg install ffmpeg -y" },
            { "text": "给 Claude Code 装这套技能：", "code": "npx ffmpeg-skill" },
            { "text": "检查装得对不对：", "code": "npx ffmpeg-skill doctor" }
          ],
          "done": "`doctor` 命令提示一切正常，在 Claude Code 里让它剪一段视频试试，就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "去 ffmpeg 官网下载 Windows 版，解压后把它的路径加到系统环境变量 PATH 里（官方 README 这一步的具体命令没写全，照 Windows 常规加 PATH 的方法做即可）。" },
            { "text": "给 Claude Code 装这套技能：", "code": "npx ffmpeg-skill" },
            { "text": "检查装得对不对：", "code": "npx ffmpeg-skill doctor" }
          ],
          "done": "`doctor` 命令提示一切正常，在 Claude Code 里让它剪一段视频试试，就是装好了。"
        }
      ],
      "url": "https://github.com/kajisho5/ffmpeg-skill"
    },
    {
      "emoji": "🤖",
      "repo": "mvanhorn/last30days-skill",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装个调研技能，核心功能不用 key",
      "lang": "Python",
      "stars": "68,121",
      "today": "135",
      "body": "这是一个给 Claude Code 等 AI 编程工具用的调研技能，输入一个话题，它会去 Reddit、Hacker News、Polymarket、GitHub、StockTwits 这些地方抓信息，汇总成一份有依据的总结。这几个来源不用填任何 key 就能直接用；想接 X（推特）、YouTube、Bluesky 等更多来源，需要自己再申请对应的 key。",
      "explain": "Agent Skill 说白了就是给 AI 的一份「技能说明书」，装进 Claude Code 后它就多会一种本事，不是额外装一个独立程序。「Polymarket」是一个大家可以为各种事件结果下注的网站，上面的数据只反映「大家觉得会怎样」，不代表事情一定会这样发展。",
      "opinion": "做工具或写东西之前想快速了解一个话题最近讨论得怎么样，用这个技能让 Claude 去扫一遍免费的那几个来源就够用了，比自己一个个网站搜省事；真要接 X、YouTube 这些门槛就高一些，先用免费的部分就行。📱 手机上：能装，装的只是一份技能说明文件，不涉及编译，Termux 里跑完下面的命令就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux + 💻 电脑（都在 Claude Code 对话里操作）",
          "intro": "这两步是在 Claude Code 的对话框里直接输入，不是在外面的终端敲。",
          "steps": [
            { "text": "添加这个技能市场：", "code": "/plugin marketplace add mvanhorn/last30days-skill" },
            { "text": "安装技能：", "code": "/plugin install last30days", "after": "网络连不上的话先检查代理有没有开。" }
          ],
          "done": "装完问 Claude 一个最近的话题，回复里能看到「正在查 Reddit / Hacker News」之类的字样，就是装好了。"
        }
      ],
      "url": "https://github.com/mvanhorn/last30days-skill"
    },
    {
      "emoji": "💰",
      "repo": "we-promise/sure",
      "deploy": ["pc", "cloud"],
      "title": "自己搭一个记账、看净资产的网站",
      "lang": "Ruby",
      "stars": "16,009",
      "week": "4,679",
      "body": "这是一个自己部署的记账/理财网站，装好之后能看每月收支、净资产变化、消费分类统计，数据全部存在自己这边，不经过别人的服务器。项目本身是基于 Ruby 的网页程序，官方用 Docker 打包好了，照着步骤跑几条命令就能在本机或云服务器上开起来。",
      "explain": "「净资产」就是你名下所有东西的价值加起来，再减掉欠的钱，剩下的数字；「自托管」是说这个网站不是装在别人公司的服务器上帮你存账单，而是你自己找台电脑或云服务器把它跑起来，数据在你自己手里。",
      "opinion": "比起随手一个手机记账 App，这个更适合想亲手搭一遍、顺便搞懂收支和净资产是怎么算出来的人，而且是开源的，代码能看。它是个完整的网页程序，要先装 Docker 才能跑，比纯记账 App 麻烦一些，但对刚开始学理财、想动手练一练的人是个不错的项目，用来记录、不涉及任何真实交易或投资建议。📱 手机上：装不了，这是要跑 Docker 加数据库的完整网站，Termux 没有 Docker，只能放电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装好 Docker Desktop）",
          "steps": [
            { "text": "先去官网装好 Docker Desktop 并打开它。" },
            { "text": "新建一个文件夹，进去：", "code": "mkdir sure-app\ncd sure-app" },
            { "text": "下载官方的配置文件：", "code": "Invoke-WebRequest -Uri https://raw.githubusercontent.com/we-promise/sure/main/compose.example.yml -OutFile compose.yml\nInvoke-WebRequest -Uri https://raw.githubusercontent.com/we-promise/sure/main/.env.example -OutFile .env", "after": "下载慢或失败就先开代理。" },
            { "text": "用文本编辑器打开刚下载的 `.env` 文件，把里面的 `SECRET_KEY_BASE` 和 `POSTGRES_PASSWORD` 改成自己随便写的、别人猜不到的长字符串。" },
            { "text": "启动：", "code": "docker compose up -d" },
            { "text": "浏览器打开 http://localhost:3000，点「create your account」注册一个自己的账号。" }
          ],
          "done": "能打开 http://localhost:3000 看到注册页面，注册完能看到账单看板，就是装好了。"
        }
      ],
      "url": "https://github.com/we-promise/sure"
    },
    {
      "emoji": "🛠",
      "repo": "whyour/qinglong",
      "deploy": ["pc", "cloud"],
      "title": "给自动化脚本搭个网页控制台，定时跑、看日志",
      "lang": "JavaScript",
      "stars": "20,107",
      "today": "10",
      "body": "这是一个网页版的定时任务管理面板，支持跑 Python3、JavaScript、Shell、TypeScript 写的脚本，能在网页上看任务列表、手动跑一次、看运行日志、管环境变量，不用再记一堆 crontab 语法。官方用 Docker 打包，拉镜像跑一条命令就能起来。",
      "explain": "「定时任务」就是让某个脚本到点自动跑一次（比如每天固定时间跑一遍某个检查），`crontab` 是 Linux 下写这类任务最常见但也最不好记的方式，这个项目相当于给它配了个网页界面。",
      "opinion": "如果手上有不止一两个要定期跑的脚本，比起纯命令行管理，这种能在网页上看每次跑没跑成功、日志长啥样，排查问题能省不少时间；就一两个脚本的话用 crontab 也够，不一定非装这个。更适合长期挂在云服务器上跑。📱 手机上：不标，它靠 Docker 跑，Termux 没有 Docker，而且这类面板一般依赖常驻的系统服务，手机上很难跑稳，建议放电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker）",
          "steps": [
            { "text": "先装好 Docker。" },
            { "text": "拉镜像：", "code": "docker pull whyour/qinglong:debian", "after": "下载慢或失败就先开代理。" },
            { "text": "跑起来（把 `/path/to/ql/data` 换成本地一个用来存数据的文件夹路径）：", "code": "docker run -d -v /path/to/ql/data:/ql/data -p 5700:5700 --user qinglong --name qinglong whyour/qinglong:debian" },
            { "text": "浏览器打开 http://本机或服务器IP:5700，首次登录的账号密码按页面提示或官方文档 qinglong.online 设置。" }
          ],
          "done": "网页能打开登录界面，登进去能看到任务列表页，就是装好了。"
        }
      ],
      "url": "https://github.com/whyour/qinglong"
    },
    {
      "emoji": "🛠",
      "repo": "getarcaneapp/arcane",
      "deploy": ["pc", "cloud"],
      "title": "给 Docker 装个网页管理面板，不用背命令",
      "lang": "Go",
      "stars": "8,724",
      "today": "46",
      "body": "这是一个管理 Docker 容器的网页面板，能在网页上看当前有哪些容器在跑、启动/停止/重启、看日志、管理 Compose 项目，不用每次都去记 `docker` 命令的参数。如果前面的记账网站、定时任务面板都是用 Docker 跑起来的，装这一个能把它们放到一个网页里统一看。",
      "explain": "「容器」可以理解成一个个打包好、能独立运行的小盒子程序，Docker 就是管这些盒子的工具，命令行能操作但参数不好记，这个项目就是给它配了个网页界面。",
      "opinion": "手上 Docker 容器就一两个的话，命令行完全够用，没必要专门装这个；如果照前面推荐装了不止一个 Docker 应用，用它统一看、统一管会比记命令方便不少。装之前先想清楚自己到底有几个容器要管，容器太少就没必要折腾。📱 手机上：装不了，Termux 没有 Docker。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（Docker）",
          "steps": [
            { "text": "先生成一个加密密钥：", "code": "docker run --rm ghcr.io/getarcaneapp/manager:latest /app/arcane generate secret", "after": "下载慢或失败就先开代理。" },
            { "text": "新建 `compose.yaml` 文件，把下面内容粘进去，`<your-encryption-key>` 换成上一步生成的密钥：", "code": "services:\n  arcane:\n    image: ghcr.io/getarcaneapp/manager:latest\n    container_name: arcane\n    ports:\n      - \"3552:3552\"\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - arcane-data:/app/data\n    environment:\n      - ARCANE_APP_URL=http://localhost:3552\n      - ARCANE_ENCRYPTION_KEY=<your-encryption-key>\n    restart: unless-stopped\n\nvolumes:\n  arcane-data:" },
            { "text": "启动：", "code": "docker compose up -d" },
            { "text": "拿初始管理员密码：", "code": "docker compose cp arcane:/app/data/initial-admin-password ." },
            { "text": "浏览器打开 http://localhost:3552，用户名 `arcane`，密码就是上一步那个文件里的内容，登录后会让你改成自己的密码。" }
          ],
          "done": "能打开登录页、用生成的密码登进去，就是装好了。"
        }
      ],
      "url": "https://github.com/getarcaneapp/arcane"
    }
  ]
};
