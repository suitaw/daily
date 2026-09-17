DAILY_DATA["github/2026-09-16"] = {
  "date": "2026-09-16",
  "highlight": "今天最值得试的是 `security-audit-skill`——一条命令给 Claude Code 装上「安全审计」技能，写完自己的单文件小工具后顺手扫一遍更放心。",
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
    }
  ]
};
