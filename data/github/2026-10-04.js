DAILY_DATA["github/2026-10-04"] = {
  "date": "2026-10-04",
  "highlight": "今天最值得花时间的是 `claude-mem`——给 Claude Code 装的记忆插件，能跨会话接上你项目做到哪了，省掉每次重新交代一遍上下文的功夫，装起来也就一条命令。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "thedotmack/claude-mem",
      "title": "给 Claude Code 装个记忆，跨会话接得上上下文",
      "lang": "TypeScript",
      "stars": "95,574",
      "today": "79",
      "body": "`claude-mem`是给 Claude Code 用的持久化记忆插件，会把每次会话里的操作过程自动压缩成摘要存起来，下次打开同一个项目接着聊的时候，把之前的摘要喂给 Claude，让它知道上次做到哪了。装好之后不用改用法，照常用 Claude Code 聊天就行，它在后台自动记，数据用 SQLite 存在本地。",
      "explain": "你现在用 Claude Code 写代码，每次开新会话它都得重新读一遍项目才知道上次做了什么，这个插件相当于给它加了一本「会话笔记」，自动记重点，下次翻出来用，不用你每次重新交代背景。",
      "opinion": "如果你经常隔一天甚至隔几个小时才回来接着改同一个项目，这个能省不少「重新解释一遍」的时间，装起来也简单，值得试。📱 手机上：不保证一定装得上——安装脚本会自动拉 Bun 这个运行时，Bun 官方对 Termux/aarch64 的支持没有正式承诺，如果报错提示装不上 Bun，这条路在手机上就走不通，换到电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）通用",
          "steps": [
            { "text": "先看 Node 版本够不够新（要 20 以上）：", "code": "node -v" },
            { "text": "跑官方安装脚本，它会自动装好需要的 Bun 和 uv：", "code": "npx claude-mem install", "after": "如果这一步报错提示装不上 Bun，说明手机上走不通，去电脑上装。" }
          ],
          "done": "装完后正常跟 Claude Code 聊几句，关掉再重新打开这个项目问它「我们上次做到哪了」，能接上下文就是装好了。"
        }
      ],
      "url": "https://github.com/thedotmack/claude-mem"
    },
    {
      "emoji": "🤖",
      "repo": "addyosmani/agent-skills",
      "title": "给 Claude Code 装一套「高级工程师」工作流技能",
      "lang": "JavaScript",
      "stars": "100,837",
      "today": "252",
      "body": "`agent-skills`是一套打包好的 Claude Code 技能包，内置 `/spec` `/plan` `/build` `/test` `/review` `/ship` 这些斜杠命令，把「写需求 → 拆计划 → 写代码 → 测试 → 审查 → 上线」这套流程标准化，装一次就能在 Claude Code 里用。除了 Claude Code，作者说还支持另外 70 多种编程助手。",
      "explain": "「斜杠命令」就是在 Claude Code 里打 `/` 开头能直接触发的固定操作，相当于给它配了一套「做事清单」，比如 `/review` 就是让它照着一套标准走一遍代码审查，而不是每次都重新想该查哪里。",
      "opinion": "你平时一个人写单文件小工具，流程比较随意，装这个不是要你照搬一整套大厂流程，而是可以挑几个用得上的命令（比如 `/review` 自查代码、`/test` 补测试）按需用，不用也不影响别的。装上试试成本很低，不喜欢卸掉就行。📱 手机上：就是 Claude Code 的插件，命令本身在 Claude Code 对话框里跑，手机电脑用法一样，能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）通用（在 Claude Code 对话框里操作）",
          "steps": [
            { "text": "在 Claude Code 对话框里输入，添加这个插件市场：", "code": "/plugin marketplace add addyosmani/agent-skills" },
            { "text": "然后装插件：", "code": "/plugin install agent-skills@addy-agent-skills" }
          ],
          "done": "装完之后在对话框里打 `/` 能看到 `/spec` `/plan` `/build` `/test` `/review` `/ship` 这些新命令，就是装好了。"
        }
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "emoji": "🛠",
      "repo": "XIU2/CloudflareSpeedTest",
      "title": "测一测你这边哪个 Cloudflare 节点最快",
      "lang": "Go",
      "stars": "29,266",
      "today": "18",
      "body": "`CloudflareSpeedTest`是个命令行小工具，批量测试 Cloudflare 的一堆 IP，挑出延迟最低、下载速度最快的那几个，排好序存成一个表格，主要给自己搭的、挂在 Cloudflare 后面的网站挑一个更快的访问 IP 用。",
      "explain": "Cloudflare 是个全球有很多机房的 CDN 服务商，很多人搭的小网站、博客都挂在它后面；同一个域名在不同地方测出来走的机房不一样，速度也不一样，这个工具就是帮你从一堆可选 IP 里挑出当下对你这台设备最快的那个。",
      "opinion": "如果你以后自己搭网站、用 Cloudflare 做反代或 CDN，这个工具能帮你手动选一个更快的节点；但你现在访问 GitHub 已经是走本机代理解决的，日常用不太到，算是「以后要搭东西了再捡起来用」的工具，不算现在非装不可。📱 手机上：官方直接给了 Linux ARM64 的现成二进制，不用编译，装得上。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "没装过 wget 的话先装一个：", "code": "pkg install wget -y" },
            { "text": "下载 ARM64 版本（这条要走代理）：", "code": "https_proxy=http://127.0.0.1:7890 wget https://github.com/XIU2/CloudflareSpeedTest/releases/latest/download/cfst_linux_arm64.tar.gz" },
            { "text": "解压、给执行权限：", "code": "tar -zxf cfst_linux_arm64.tar.gz\nchmod +x cfst" },
            { "text": "跑一次测速：", "code": "./cfst" }
          ],
          "done": "跑完会在当前目录生成 result.csv，打开它，第一行就是延迟低、速度快的 IP。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开这个地址，下载 Windows 版压缩包（打不开就先开代理）：", "code": "https://github.com/XIU2/CloudflareSpeedTest/releases/latest" },
            { "text": "解压后双击 cfst.exe 运行就行" }
          ],
          "done": "运行完会在同目录生成 result.csv，第一行就是本地最快的 IP。"
        }
      ],
      "url": "https://github.com/XIU2/CloudflareSpeedTest"
    },
    {
      "emoji": "📚",
      "repo": "jackfrued/Python-for-Freshmen-2026",
      "title": "一套专门给零基础写的 2026 版 Python 教程",
      "stars": "809",
      "body": "这是一套从变量、分支循环、列表字典讲到函数、面向对象的 Python 入门教程，一共 20 篇文档，专门冲着「新手容易卡在哪」重新打磨过，语言写得比较精简。",
      "explain": "后面会讲到「面向对象编程」，就是把数据和操作这些数据的方法打包在一起当成一个「对象」来用，是 Python 进阶绕不开的一个概念，教程排到靠后才讲，现在不用纠结。",
      "opinion": "你正在学 Python 入门阶段，这套刚好覆盖你现在需要的内容，而且专门为新手写得比较浅显；不用装任何环境，直接在网页上点开文件看就行，利用碎片时间读几篇就有收获。📱 手机上：纯看文档，手机浏览器直接打开 GitHub 页面就能看，没有安装门槛。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开仓库主页，按顺序点开里面的 .md 文件看：", "code": "https://github.com/jackfrued/Python-for-Freshmen-2026" }
          ],
          "done": "把目录里列出的章节看完一轮，对变量、分支循环、列表字典、函数、面向对象这些基础概念有印象就算学完了。"
        }
      ],
      "url": "https://github.com/jackfrued/Python-for-Freshmen-2026"
    },
    {
      "emoji": "💰",
      "repo": "firefly-iii/firefly-iii",
      "title": "自己把账算明白：开源记账理财软件 Firefly III",
      "lang": "PHP",
      "stars": "24.8k",
      "body": "Firefly III 是一个搭在自己电脑上的记账软件，能记收支、分类、做预算、设定存钱目标，还能生成收支报表。没有 AI 功能、不连云服务，数据全部存在本地数据库里。",
      "explain": "「自托管」意思是软件跑在你自己的电脑上，不是别人公司的服务器，好处是账单数据不会传到别人那，坏处是要自己装环境、自己维护，出问题要自己排查。",
      "opinion": "这是个维护很久的成熟开源记账工具，不涉及自动交易、不涉及加密货币，安全顾虑比较小，拿来学「怎么系统化记账做预算」挺合适。缺点是装起来比普通 App 麻烦，得先装 Docker；如果只是想随手记个账，手机上现成的记账 App 可能更省事，这个更适合当成一个了解「自己搭服务、管好自己数据」的周末小项目来试。📱 手机上：装不了，Termux 跑不了 Docker，只能在 Windows 电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "下面步骤需要先装好 Docker Desktop，Docker 需要开 WSL2 才能跑，具体看 Docker 官网教程，这里不展开。",
          "steps": [
            { "text": "没装过 Docker 的话先去官网下载安装 Docker Desktop（下载慢就先开代理）：", "code": "https://www.docker.com/products/docker-desktop/" },
            { "text": "新建一个文件夹（比如叫 firefly），打开这个地址，把内容保存到这个文件夹，文件名改成 docker-compose.yml：", "code": "https://raw.githubusercontent.com/firefly-iii/docker/main/docker-compose.yml" },
            { "text": "打开这个地址，保存到同一个文件夹，文件名改成 .env：", "code": "https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example" },
            { "text": "打开这个地址，保存到同一个文件夹，文件名改成 .db.env：", "code": "https://raw.githubusercontent.com/firefly-iii/docker/main/database.env" },
            { "text": "用文本编辑器打开 .env，把里面的 DB_PASSWORD 改成你自己设的一个密码；再打开 .db.env，把 MYSQL_PASSWORD 改成同一个密码", "after": "两边密码必须完全一样，不然等下数据库连不上。" },
            { "text": "在这个文件夹空白处按住 Shift 右键，选「在此处打开 PowerShell」，运行：", "code": "docker compose -f docker-compose.yml up -d --pull=always" },
            { "text": "等它跑完（第一次下载镜像会慢一点），打开浏览器访问：", "code": "http://localhost", "after": "按页面提示注册一个账号，用户名密码自己定，只存在你自己电脑上。" }
          ],
          "done": "能打开注册页面、注册完看到记账首页就算装好了；想关掉的话在同一个文件夹里跑 `docker compose down`。"
        }
      ],
      "url": "https://github.com/firefly-iii/firefly-iii"
    },
    {
      "emoji": "🎨",
      "repo": "pablostanley/yoinks",
      "title": "命令行里粘个链接，就能把视频存到本地",
      "lang": "TypeScript",
      "stars": "3,853",
      "week": "1,917",
      "body": "`yoinks`是个命令行小工具，支持 YouTube、X/Twitter、Instagram、Threads、TikTok 等 1800 多个网站，贴一个视频链接、选个清晰度，就能把视频存到本地，不用装浏览器插件也不用找在线下载网站。",
      "explain": "里面用到的下载引擎`yt-dlp`是业内常用的视频下载工具，这个项目把它和转码工具 ffmpeg 都打包好了，不用你单独装。",
      "opinion": "平时想存个视频又懒得装浏览器插件、找那些带广告的在线下载站，这个工具挺顺手，跑一条命令就行，成本很低，值得装一个放着。📱 手机上：是 Node 写的，不用编译，你已经装了 Node v26，直接能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）通用",
          "steps": [
            { "text": "不想装的话，直接临时跑一次：", "code": "npx yoinks", "after": "第一次跑会自动下载内置的 yt-dlp 和 ffmpeg，稍微等一下。" },
            { "text": "经常用的话装成全局命令：", "code": "npm install -g yoinks" }
          ],
          "done": "跑起来后粘贴一个支持网站的视频链接，能看到分辨率选项并顺利下载下来，就是装好了。"
        }
      ],
      "url": "https://github.com/pablostanley/yoinks"
    }
  ]
};
