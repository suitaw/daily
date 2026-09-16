DAILY_DATA["github/2026-09-16"] = {
  "date": "2026-09-16",
  "highlight": "今天最值得试的是 `security-audit-skill`——一条命令给 Claude Code 装上「安全审计」技能，写完自己的单文件小工具后顺手扫一遍更放心；记账类选了本地优先的 `BeeCount`，Android 上下个 APK 就能用，AI 还能帮你自动分类账单。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "cloudflare/security-audit-skill",
      "title": "一条命令让 Claude Code 学会审计代码安全",
      "lang": "JavaScript",
      "stars": "5,419",
      "today": "1,434",
      "body": "Cloudflare 把自己内部审计代码安全的流程做成了一个 Claude Code 的技能包，装上之后可以直接让 Claude 帮你扫一个代码仓库，找常见的安全问题（比如密钥硬编码在代码里、输入没做转义、权限判断写漏了），并给出可核实的审计报告，而不是随口说一句「看起来有风险」。它靠的是编排 Claude 自己读代码、调工具的能力，不需要额外装扫描引擎。这个仓库9月15日刚发布就冲上了 GitHub 日榜第二名。",
      "explain": "「Skill」是 Claude Code 里可以额外安装的技能包，相当于给 Claude 装一个专门套路，让它按固定流程做一件事，不用你每次都手把手描述该怎么查。这个安全审计 Skill，说白了就是把「资深安全工程师查代码的一套方法」写成了 Claude 能直接执行的操作手册。",
      "opinion": "你写的单文件 HTML/JS 小工具虽然没有后端数据库，但一样可能踩坑——比如把 API key 直接写死在前端代码里被人扒走，或者某个输入框没做处理导致别人塞奇怪内容进去。写完一个工具后顺手让 Claude 用这个 Skill 查一遍，比自己凭感觉检查靠谱，而且免费、装的成本很低。📱 手机上：装的是纯 JavaScript 的 npm 包，靠 Termux 自带的 Node.js 就能跑，不用编译任何东西，能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "在你的项目目录下安装这个 Skill（要连 GitHub，命令前面加了本机代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit" }
          ],
          "done": "命令跑完没报错，就在 Claude Code 里对它说「security audit this codebase」试试，能跑出一份审计结果就算装成功。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "在项目目录下打开 PowerShell，安装这个 Skill（下载慢或失败就先开代理）：", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit" }
          ],
          "done": "命令跑完没报错，就在 Claude Code 里对它说「security audit this codebase」试试，能跑出一份审计结果就算装成功。"
        }
      ],
      "url": "https://github.com/cloudflare/security-audit-skill"
    },
    {
      "emoji": "🤖",
      "repo": "mksglu/context-mode",
      "title": "给 Claude Code 上下文瘦身的插件",
      "lang": "TypeScript",
      "stars": "23,167",
      "body": "这是一个 Claude Code 插件，专门解决「用久了上下文越堆越多、代理越答越乱」的问题：它把工具执行的输出先收进一个隔离空间再摘要给 Claude，官方说能压掉 98% 的无用内容，还能在多次对话之间记住会话进度。这周（9月8日~9月15日）新增了 1,832 颗星，涨得挺快，说明不少用 AI 编程工具的人都被「上下文塞爆」这个问题烦过。它支持 17 种编程代理平台，Claude Code 是其中之一。",
      "explain": "「上下文窗口」就是 AI 一次能记住的内容上限，写代码时间一长，工具的输出、历史对话都会往里堆，堆满了 AI 就会开始「失忆」或者东拉西扯。这个插件相当于给 Claude Code 配了个秘书，把琐碎的工具输出先整理精简，只把要点递给 Claude，腾出更多「脑容量」给真正的任务。",
      "opinion": "如果你平时用 Claude Code 写一个工具写得比较久、感觉它后半程开始答非所问，这个插件值得装上试试，安装是标准的 Claude Code 插件市场流程，成本很低。不过它是刚冒头的新项目，稳定性和长期维护还有待观察，先在小项目上试用观察几天比较稳妥。📱 手机上：Termux 自带 Node.js v26，满足它要求的 Node ≥ 22.5，装的时候会优先用 Node 内置的 `node:sqlite`，不用额外编译原生模块，理论上能装，不保证一定顺利。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（都在 Claude Code 里执行）",
          "steps": [
            { "text": "在 Claude Code 里添加插件市场：", "code": "/plugin marketplace add mksglu/context-mode" },
            { "text": "安装插件：", "code": "/plugin install context-mode@context-mode" },
            { "text": "装完用这条命令自检一下有没有装对：", "code": "/context-mode:ctx-doctor" }
          ],
          "done": "自检命令跑出「一切正常」之类的提示、没有报错，就算装成功。"
        }
      ],
      "url": "https://github.com/mksglu/context-mode"
    },
    {
      "emoji": "🛠",
      "repo": "microsoft/markitdown",
      "title": "把 PDF、Word、Excel 一键转成 Markdown",
      "lang": "Python",
      "stars": "184,639",
      "body": "微软出的一个小工具，能把 PDF、Word、PPT、Excel、图片、网页等各种格式的文件转换成干净的 Markdown 文本，本来是给大模型处理文档准备的——AI 理解 Markdown 比理解原始 PDF/Word 格式效果好得多。这周新增了 3,046 颗星，是个已经存在一段时间、但仍在稳定涨人气的老牌项目。命令行一条命令就能转，也可以当 Python 库调用。",
      "explain": "「Markdown」是一种用 `**加粗**`、`# 标题` 这类简单符号写格式的纯文本，比 PDF/Word 干净得多，AI 处理起来更准。如果你做的 Agent 需要「读」一份用户上传的合同、报表或者笔记，直接喂原始 PDF 效果往往很差，先转成 Markdown 再喂给大模型，是个常见的预处理套路。",
      "opinion": "如果你以后想做一个能读文件的小工具（比如「上传一份 PDF，AI 帮你总结」），这个库基本是标配的第一步，比自己写 PDF 解析代码省事很多。安装时只装你需要的格式（pdf/docx/pptx/xlsx）就够，不用装全部（`[all]`），免得装到用不上的音频转录相关依赖。📱 手机上：基础转换功能是纯 Python 实现，不依赖 openai/anthropic 这类装不上的库，在 Termux 上能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "装库，只选常用的几种文件格式支持：", "code": "pip install 'markitdown[pdf,docx,pptx,xlsx]'" },
            { "text": "转换一个文件试试（把 test.pdf 换成你自己的文件路径）：", "code": "markitdown test.pdf -o test.md" }
          ],
          "done": "当前目录下生成了 test.md，打开能看到转换出来的文字内容，就算装成功。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "在 PowerShell 里装库：", "code": "pip install 'markitdown[pdf,docx,pptx,xlsx]'" },
            { "text": "转换一个文件试试：", "code": "markitdown test.pdf -o test.md" }
          ],
          "done": "当前目录下生成了 test.md，能打开看到内容，就算装成功。"
        }
      ],
      "url": "https://github.com/microsoft/markitdown"
    },
    {
      "emoji": "🛠",
      "repo": "max-sixty/worktrunk",
      "title": "让多个 AI 代理并行干活的 Git 分支管理工具",
      "lang": "Rust",
      "stars": "7,881",
      "body": "这是个命令行小工具，专门管理 Git 的「worktree」（同一个仓库同时检出多个独立工作目录），方便你同时开着好几个分支、让好几个 AI 编程代理各自在自己的目录里干活，互不打架。本周新增了 871 颗星。它提供了 Windows、Mac、Linux 各平台的预编译安装方式，不用自己编译源码。",
      "explain": "「Git worktree」是 Git 自带的一个功能，能让同一个仓库同时存在好几份独立的工作目录，分别检出不同分支，改动互不影响——这样就能让 Claude Code 在一个目录改功能 A、另一个目录改功能 B，两边同时跑不冲突。这个工具就是把管理这些目录的操作做得更简单。",
      "opinion": "如果你平时只用 Claude Code 改一个单文件小工具、很少同时开多个任务，这个工具用不上也没关系；但如果开始想「让 AI 同时改两三个功能」，它能省掉手动管理多个目录的麻烦。属于进阶效率工具，不着急装。📱 手机上：官方提供了 aarch64 Linux 的预编译静态二进制包，理论上能在 Termux 跑，但没有专门为 Termux 测试过，不保证一定能执行成功；如果下载下来提示「无法执行」，就放弃，直接用电脑版。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证成功）",
          "steps": [
            { "text": "下载 aarch64 版本的预编译包（要连 GitHub，命令前面加了代理）：", "code": "https_proxy=http://127.0.0.1:7890 curl -L -o worktrunk.tar.xz https://github.com/max-sixty/worktrunk/releases/latest/download/worktrunk-aarch64-unknown-linux-musl.tar.xz" },
            { "text": "解压：", "code": "tar xf worktrunk.tar.xz" },
            { "text": "把可执行文件放进 PATH：", "code": "mv worktrunk $PREFIX/bin/ && chmod +x $PREFIX/bin/worktrunk" },
            { "text": "打开 shell 集成：", "code": "wt config shell install" }
          ],
          "done": "执行 `wt --help` 能看到帮助信息就是装成功了；如果提示「权限不足」或「无法执行」，说明这个二进制在 Termux 上跑不了，放弃即可。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "在 PowerShell 里用 winget 安装：", "code": "winget install max-sixty.worktrunk" },
            { "text": "打开 shell 集成（Windows 上命令叫 git-wt，避免和 Windows Terminal 自带的 wt 冲突）：", "code": "git-wt config shell install" }
          ],
          "done": "执行 `git-wt --help` 能看到帮助信息就算装好了。"
        }
      ],
      "url": "https://github.com/max-sixty/worktrunk"
    },
    {
      "emoji": "📚",
      "repo": "ankitects/anki",
      "title": "科学记忆神器，背单词记概念都好用",
      "lang": "Rust",
      "stars": "30,617",
      "today": "50",
      "body": "Anki 是一款用「间隔重复」算法安排复习节奏的记忆卡片软件——简单说就是它会算好一张卡片什么时候快忘了，正好在那个时间点提醒你复习，比按顺序死记硬背效率高很多。今天新增了 50 颗星，是个已经用了十几年的成熟老项目，这次上榜大概率是发了新版本。支持 Windows、Mac、Linux 桌面端，官方也有 iOS App，Android 上则由另一个独立的开源项目 AnkiDroid 提供客户端。",
      "explain": "「间隔重复」（spaced repetition）是一种被研究证明更有效的记忆方法：快忘的时候才复习，比刚背完就复习、或者很久都不复习，记得都更牢。可以把 Python 的语法点、电工的公式名词、理财的术语各自做成一套卡片，Anki 会自动帮你安排每天该复习哪些。",
      "opinion": "你正在学的东西比较杂，知识点又多又碎，很适合用卡片的方式利用零散时间刷。它不需要联网也不用付费，桌面端和手机端数据还能同步。缺点是做卡片本身要花时间，一开始会觉得麻烦，但坚持做的人普遍反馈效果不错。📱 手机上：Anki 桌面版是给 Windows/Mac/Linux 用的，不适合装在 Termux 里；Android 上装 AnkiDroid（应用商店直接搜索安装即可），跟桌面版的卡片数据可以互通。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开官网 [apps.ankiweb.net](https://apps.ankiweb.net) 下载 Windows 安装包（下载慢就先开代理）" },
            { "text": "双击下载好的安装程序，一路下一步装完" }
          ],
          "done": "桌面出现 Anki 的星形图标，能打开就是装好了。"
        },
        {
          "title": "怎么在手机上用 · 📱 Android",
          "steps": [
            { "text": "打开应用商店，搜索「AnkiDroid」安装（这是配套的独立开源 Android 客户端）" }
          ],
          "done": "打开 App 能看到卡组界面，就是装好了；想和电脑同步的话，在设置里登录同一个 AnkiWeb 账号即可。"
        }
      ],
      "url": "https://github.com/ankitects/anki"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "title": "本地优先的开源记账 App，AI 能帮你记",
      "lang": "Dart",
      "stars": "2,400",
      "body": "BeeCount（蜜蜂记账）是一款轻量的开源记账 App，数据优先存在你自己手机本地，不强制注册账号，也可以选择用 iCloud、WebDAV、S3 或者自建服务同步到多台设备。它内置了 AI 记账功能（接的是智谱 GLM-4 模型），说一句话或者拍张票据，AI 就能帮你整理成一条记账记录。支持 Android、iOS 和网页版，完整支持简体中文。",
      "explain": "「本地优先」意思是数据先存在你自己设备上，不是必须联网、必须传到别人服务器才能用，隐私和数据安全上更让人放心，就算以后不用这个 App 了，本地数据也还在自己手里。「WebDAV」是一种通用的网盘同步协议，很多网盘和自建服务都支持，可以用来在手机和电脑之间同步记账数据。",
      "opinion": "学理财第一步通常是先搞清楚自己的钱花哪去了，记账是最基础也最实用的一步。这个 App 免费、不用绑定真实资金账户、也不涉及任何交易操作，纯粹是「记录+统计」，风险为零，适合现在就装上开始用。AI 记账功能省去手动分类的麻烦，但准不准还是要自己抽空核对一下。📱 手机上：直接就是 Android App，去 Releases 页面下载 apk 装上就行，不用 Termux，也不用折腾命令行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Android",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/TNT-Likely/BeeCount/releases)，在最新版本里下载文件名以 `.apk` 结尾的安装包" },
            { "text": "打开下载好的 apk 文件安装；如果提示「禁止安装未知来源应用」，去系统设置里对这次安装临时放行一下" }
          ],
          "done": "打开 App 能看到记账首页，就是装好了；本地记账不用注册，想同步到其他设备再去设置里配置 WebDAV/iCloud/S3。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    },
    {
      "emoji": "🎨",
      "repo": "bilawalsidhu/gods-eye-view",
      "title": "打开浏览器就能玩的全球实时地球监控台",
      "lang": "JavaScript",
      "stars": "35,272",
      "body": "这是个纯网页做的地球可视化项目，本周新增了 15,193 颗星，涨得非常猛。打开之后能看到一个可以自由缩放旋转的 3D 地球，上面实时叠加飞机、船只、卫星、地震、交通甚至公开摄像头的位置信息，还能切换成夜视、红外热成像这类视角，甚至能用语音控制。13 个数据源完全免费、不用任何密钥就能用，官方托管版还在开发中，目前需要自己在本地跑起来看。",
      "explain": "项目底层用的是 CesiumJS（一个专门做三维地球可视化的开源引擎，不少航天、气象网站都在用）加 Vite（一个前端开发服务器工具），所以能在普通网页浏览器里流畅转动一个逼真的 3D 地球，不需要装任何专业地图软件。",
      "opinion": "纯粹是个好玩涨见识的项目，跟开发工作关系不大，但拿来感受「原来免费公开数据能做到这个程度」挺有意思，运行起来也不复杂，花十分钟看看效果就行，不用深究代码。📱 手机上：本质是跑一个网页开发服务器，Termux 装好 Node.js 后能跑起来，再用手机自带浏览器打开网址看效果，3D 画面对手机性能要求不低，卡顿是正常现象；嫌麻烦的话直接在电脑上跑体验更流畅。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "拉取代码（要连 GitHub，命令前面加了代理）：", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/bilawalsidhu/gods-eye-view.git" },
            { "text": "进入目录装依赖：", "code": "cd gods-eye-view && npm ci" },
            { "text": "跑起开发服务器：", "code": "npm run dev" },
            { "text": "手机浏览器打开 http://localhost:4173 查看效果" }
          ],
          "done": "浏览器里能看到一个可以拖动旋转的 3D 地球，就是跑起来了；如果卡在某一步报错或者转不动，大概率是手机性能或网络问题，看个新鲜就好，不用较真。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "拉取代码（下载慢或失败就先开代理）：", "code": "git clone https://github.com/bilawalsidhu/gods-eye-view.git" },
            { "text": "进入目录装依赖：", "code": "cd gods-eye-view; npm ci" },
            { "text": "跑起开发服务器：", "code": "npm run dev" },
            { "text": "浏览器打开 http://localhost:4173 查看效果" }
          ],
          "done": "浏览器里能看到一个可以拖动旋转的 3D 地球，就是跑起来了。"
        }
      ],
      "url": "https://github.com/bilawalsidhu/gods-eye-view"
    }
  ]
};
