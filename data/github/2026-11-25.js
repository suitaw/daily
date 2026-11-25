DAILY_DATA["github/2026-11-25"] = {
  "date": "2026-11-25",
  "highlight": "今天最值得先试的是 **ffmpeg-skill**——给 AI 编程工具装一套剪视频工具箱，装好之后可以直接用人话让 Claude Code 剪片、转格式、加字幕，比自己手敲 `FFmpeg` 参数省事很多。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "kajisho5/ffmpeg-skill",
      "deploy": ["phone", "pc"],
      "title": "给 AI 编程工具装一套剪视频工具箱",
      "lang": "Python",
      "stars": "10,678",
      "week": "2,993",
      "body": "这是一个给 Claude Code、Cursor 等 AI 编程工具用的技能包，内置 42 个 `FFmpeg` 相关工具，能探测视频信息、按比例裁剪、加字幕、转格式、拼接片段。装好之后，直接用人话告诉 AI 工具「把这段视频剪成 60 秒竖版」，它就会自动调用这些工具完成。核心代码只用 Python 标准库，不额外装 Python 第三方包，但要求本机先装好 `FFmpeg` 本身。",
      "explain": "`FFmpeg` 是几乎所有视频软件背后都在用的免费转码引擎，能处理剪辑、转格式、加字幕这些活，但命令行参数很难记。`MCP` 是让 AI 工具直接调用外部程序的通用接口，这里配的 `MCP` 服务就是让 AI 编程工具能「看懂」怎么用 `FFmpeg`。",
      "opinion": "如果你平时会用 AI 编程工具剪视频、转格式、批量处理素材，这个工具能省掉手敲 `FFmpeg` 参数的功夫，直接用人话让 AI 剪片、拼素材。先拿小文件试一遍输出效果，确认参数对了再处理大视频。📱 手机上：核心只用 Python 标准库，没碰要编译的库，大概率能装，但自动装 `FFmpeg` 那一步在 Termux 认不出包管理器，得自己先装好再跳过那一步。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "先装好 FFmpeg 本身：", "code": "pkg install ffmpeg -y" },
            { "text": "装这个技能包到 Claude Code（跳过自动装 FFmpeg 的步骤）：", "code": "npx ffmpeg-skill setup --no-ffmpeg" },
            { "text": "检查是否装好：", "code": "npx ffmpeg-skill doctor" }
          ],
          "done": "doctor 命令跑完没有报错，就说明装好了；之后在 Claude Code 里让它剪视频，它会自己调用这些工具。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装这个技能包，没装过 FFmpeg 的话会提示自动装：", "code": "npx ffmpeg-skill setup", "after": "下载慢或失败就先开代理。" },
            { "text": "检查是否装好：", "code": "npx ffmpeg-skill doctor" }
          ],
          "done": "doctor 命令跑完没有报错，就说明装好了。"
        }
      ],
      "url": "https://github.com/kajisho5/ffmpeg-skill"
    },
    {
      "emoji": "🤖",
      "repo": "mvanhorn/last30days-skill",
      "deploy": ["phone", "pc"],
      "title": "让 AI 自动搜全网最近 30 天动态",
      "lang": "Python",
      "stars": "74,211",
      "today": "703",
      "body": "这是一个给 Claude Code 用的技能，能自动去 Reddit、Hacker News、Polymarket（一个预测市场网站）、GitHub 等平台搜同一个话题最近 30 天的讨论，汇总成一份带来源链接的摘要。Reddit、Hacker News、Polymarket、GitHub 这几个来源不用配 key 就能直接用，YouTube、X 等来源需要额外的 key 或登录才能搜。",
      "explain": "这里的「预测市场」是一种让大家用真金或虚拟分数给「某件事会不会发生」下注的网站，价格高低能间接反映大家对这件事的预期；技能会把这类网站也当成一个信息来源去搜。",
      "opinion": "调研某个 AI 工具或话题最近有什么新动向、找灵感时能用上，核心来源不用配 key 就能跑，输出还带原文链接方便核实。搜索范围偏英文和海外社媒，国内资讯覆盖不到，适合单独查某个话题的最近动向，别指望它能顶替专门的资讯订阅。📱 手机上：只用到 Python 标准库级别的依赖，没碰要编译的库，大概率能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "装技能包到 Claude Code（从 GitHub 拉，这条命令加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add mvanhorn/last30days-skill -g -a claude-code" },
            { "text": "（可选）想搜 YouTube 内容才需要装这个，不装也不影响其他来源：", "code": "pip install yt-dlp" }
          ],
          "done": "在 Claude Code 里输入 /last30days 加任意话题，比如 /last30days AI coding agents，能跑出一份带链接的摘要就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装技能包到 Claude Code：", "code": "npx skills add mvanhorn/last30days-skill -g -a claude-code", "after": "下载慢或失败就先开代理。" },
            { "text": "（可选）想搜 YouTube 内容才需要装这个：", "code": "pip install yt-dlp" }
          ],
          "done": "在 Claude Code 里输入 /last30days 加任意话题，能跑出一份带链接的摘要就是装好了。"
        }
      ],
      "url": "https://github.com/mvanhorn/last30days-skill"
    },
    {
      "emoji": "🤖",
      "repo": "backnotprop/plannotator",
      "deploy": ["pc"],
      "title": "本地网页审阅 AI 改的代码和计划",
      "lang": "TypeScript",
      "stars": "14,891",
      "week": "1,956",
      "body": "这是一个本地运行的浏览器审阅工具，专门用来看 Claude Code、Codex 等 AI 编程工具交出来的计划、文档和代码改动。装好后它会接入你的 AI 编程工具，改动或计划一出来就自动在浏览器里打开，可以直接在网页上标注、提意见，反馈会传回给 AI 继续改。也支持单独审阅 Git 的改动记录、GitHub/GitLab 的 PR。",
      "explain": "「PR」是 GitHub 上「请求合并代码改动」的流程，平时用来给别人审代码；这个工具把类似的审阅体验搬到本地，专门给 AI 产出的内容用。",
      "opinion": "如果你经常用 Claude Code 改代码，又想比在终端里一行行翻 `diff`（改动对比）更直观地审一遍，这个工具能把改动摆在网页上标注。它不改变 AI 的输出质量，纯粹是看得更方便，装一下成本不高，用不上就当没装。📱 手机上：官方只给了 Windows / macOS / Linux（含 WSL）的预编译包，没看到安卓或 ARM64 的版本，Termux 里大概率装不上，这个建议只在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "PowerShell 里直接装：", "code": "irm https://plannotator.ai/install.ps1 | iex", "after": "下载慢或失败就先开代理。" },
            { "text": "打开 Claude Code，输入这行给它装上插件：", "code": "/plugin marketplace add backnotprop/plannotator" },
            { "text": "在 Claude Code 里试着审阅一次改动：", "code": "/plannotator-review" }
          ],
          "done": "执行 /plannotator-review 后浏览器会自动弹出一个审阅页面，看到页面就是装成功了。"
        }
      ],
      "url": "https://github.com/backnotprop/plannotator"
    },
    {
      "emoji": "🤖",
      "repo": "alibaba/open-code-review",
      "deploy": ["phone", "pc"],
      "title": "让 AI 在提交前先挑一遍代码毛病",
      "lang": "Go",
      "stars": "56,050",
      "week": "2,638",
      "body": "这是一个命令行工具，能在改完代码准备提交之前，自动审查这次改动，挑出潜在的 bug、安全隐患，并标好是哪一行。它可以单独配一个大模型账号用，也可以用「委托模式」直接借用正在用的 Claude Code、Codex 等编程工具的账号，不用额外配 key。支持本地 Git 仓库直接审查改动，也能对整个目录做一次全面扫描。",
      "explain": "这里的「委托模式」是指它不自己去调用大模型，而是借用你本来就在用的 Claude Code 之类工具的账号来做审查，省掉再单独配一个 API key 的麻烦。",
      "opinion": "如果你写代码喜欢在提交前自己再检查一遍，这个工具能当成多一道自动审查，审完再决定要不要改。用委托模式不用额外花钱配 key，是它比单独配 API key 更省心的地方，先在一个小项目上试试，看它挑出来的问题是不是真有用。📱 手机上：是纯 Node 命令行工具，不涉及要编译的库，大概率能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）命令一样",
          "steps": [
            { "text": "全局装这个工具（从 npm 装，不是从 GitHub，不用加代理）：", "code": "npm install -g @alibaba-group/open-code-review", "after": "Windows 上下载慢或失败就先开代理。" },
            { "text": "配置用哪种模式（选委托模式可以直接用 Claude Code 的账号，不用再配 key）：", "code": "ocr config provider" },
            { "text": "进到项目目录，审查这次没提交的改动：", "code": "cd 你的项目目录\nocr review" }
          ],
          "done": "审查跑完，终端会打印出带文件和行号的问题列表（或者提示没问题），就说明装好了。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "🛠",
      "repo": "xushengfeng/eSearch",
      "deploy": ["pc"],
      "title": "截屏自带离线 OCR 和翻译",
      "lang": "TypeScript",
      "stars": "7,482",
      "today": "10",
      "body": "这是一款 Windows/macOS/Linux 都能用的截屏工具，把截图、文字识别（`OCR`）、翻译、贴图这些功能揍到了一起。截图框选之后能直接识别出图里的文字复制出来，也能把截图里的外语翻译成中文，`OCR` 和部分翻译是离线跑的，不用联网也不用配 key。还支持长截图拼接、屏幕录制、以图搜图等。",
      "explain": "`OCR` 就是把图片里的文字识别成可以复制的文本，比如截一张英文截图直接认出文字再翻译，不用自己手打。",
      "opinion": "平时看资料经常要截图查词、认字的话，这个工具截图之后能直接识别加翻译，比普通截图工具多一步，离线就能用不用额外配 key，装一下试试成本很低。📱 手机上：官方只做了 Windows、macOS、Linux 桌面版，没有安卓版，这个只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用 winget 直接装（Windows 自带的包管理器）：", "code": "winget install esearch", "after": "装不上就去仓库 Releases 页面下对应 Windows 的安装包手动装。" }
          ],
          "done": "装完能在开始菜单搜到 eSearch，打开后试着截一张图，能正常弹出截图工具条就算装好了。"
        }
      ],
      "url": "https://github.com/xushengfeng/eSearch"
    },
    {
      "emoji": "🎨",
      "repo": "xfangfang/wiliwili",
      "deploy": ["pc"],
      "title": "支持手柄操作的第三方 B 站客户端",
      "lang": "C++",
      "stars": "5,747",
      "today": "3",
      "body": "这是一个第三方 B 站客户端，主打用手柄、键鼠甚至 Switch 这类掌机也能流畅操作，触屏和鼠标键盘一样支持，Windows/macOS/Linux 都有。功能覆盖推荐、搜索、直播、追番追剧、弹幕评论这些 B 站常见功能，界面支持深色模式和多国语言。不登录也能直接看视频，扫码登录才能同步历史记录和收藏。",
      "explain": "「第三方客户端」是说这个 App 不是 B 站官方做的，是网友用 B 站开放的接口自己写的，界面和功能跟官方 App、网页不完全一样。",
      "opinion": "想在电脑上刷 B 站的话，这个比网页版操作更顺手，离线缓存、手柄支持这些是官方网页做不到的，不登录也能直接看视频。纯娱乐用途，忙的时候不用特意装。📱 手机上：官方明确没有做安卓版，这个只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "去仓库 Releases 页面下载 Windows 安装包并运行：", "code": "https://github.com/xfangfang/wiliwili/releases" }
          ],
          "done": "装完打开 wiliwili，能看到首页推荐视频列表就算装好了。"
        }
      ],
      "url": "https://github.com/xfangfang/wiliwili"
    }
  ]
};
