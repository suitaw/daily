DAILY_DATA["github/2026-11-14"] = {
  "date": "2026-11-14",
  "highlight": "今天最值得动手试的是 `mattpocock/skills`——这周刚冲上 GitHub 热榜的 AI 编程「工作习惯」技能包，装上后多一批像 `/grill-me`、`/diagnosing-bugs` 这样的斜杠命令，能让 Claude Code 先把需求问清楚、照步骤排查 bug，比自己瞎猜效率高。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "mattpocock/skills",
      "deploy": ["phone", "pc"],
      "title": "这周冲上 GitHub 热榜的 AI 编程「工作习惯」技能包",
      "lang": "Shell",
      "stars": "323,827",
      "week": "7,599",
      "body": "前端圈知名讲师 Matt Pocock 把自己平时带 AI 编程助手的一套做事章法开源出来了：需求没说清楚先用 `/grill-me` 反复追问你，动手改代码前用 `/to-spec` 先定好范围，排查 bug 用 `/diagnosing-bugs` 一步步来，而不是让 AI 看到问题就瞎改。装上之后 Claude Code、Codex 这类工具会多出一批这样的斜杠命令。",
      "explain": "这里说的「技能」不是让 AI 多会点什么新本事，而是给它一套做事的规矩——比如先问清楚需求、改之前先写好范围、调试按步骤来，这些是经验丰富的程序员会做、但 AI 自己不一定会主动做的事。装上之后相当于把这套规矩直接喂给它，让它照着来，不是上来就开始改代码。",
      "opinion": "平时用 Claude Code 写东西，经常是需求没想清楚就让它动手，改出来才发现不是自己要的；装上这套之后可以先跑 `/grill-me` 把需求问清楚再动手，调试卡住了用 `/diagnosing-bugs` 按步骤查，比自己瞎猜省心不少。它要求同一个工具只能选一种安装方式，别重复装，不然每个技能会出现两遍。📱 手机上：能装，装的只是一批说明文件和斜杠命令，不用编译任何东西，Termux 里跑的 Claude Code 一样能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "在 Claude Code 里装插件：", "code": "claude plugin install mattpocock-skills@claude-plugins-official", "after": "装的时候记得勾上 `setup-matt-pocock-skills`，插件会自动更新。" },
            { "text": "进到你要用的项目目录里，初始化一次（每个项目跑一次就行）：", "code": "/setup-matt-pocock-skills", "after": "会问你用哪个问题追踪系统（GitHub/GitLab/本地文件/其他）、文档放哪，照实选就行。" }
          ],
          "done": "输入 `/grill-me` 或 `/diagnosing-bugs` 这类斜杠命令，Claude Code 能认得并照对应流程走，就算装好了。"
        }
      ],
      "url": "https://github.com/mattpocock/skills"
    },
    {
      "emoji": "🤖",
      "repo": "anthropics/skills",
      "deploy": ["phone", "pc"],
      "title": "Anthropic 官方技能包，装完 Claude 自动帮你处理 PDF/Word/PPT",
      "lang": "Python",
      "stars": "194,142",
      "week": "6,169",
      "body": "这是 Anthropic 官方仓库，收了一批给 Claude 用的「技能」：处理 PDF/Word/PPT/Excel 文件的 document-skills，还有画图、做 MCP server 之类的示例 skill。装上之后跟 Claude Code 说一句「用 PDF 技能帮我处理这份文件」，它就会照技能里写好的步骤做，不用现写一遍提示词。",
      "explain": "「技能（Skill）」就是把一套固定的工作流程打包成文件夹交给 Claude：里面写好了步骤、该注意的细节，Claude 碰到对应任务会照着走，不用你每次重新教它。文档类的几个技能就是 Anthropic 自己做文档功能时用的那套代码，直接开源出来了。",
      "opinion": "装上 document-skills 之后，让 Claude Code 帮你整理 PPT、从 Word 里抠数据这类杂事会更靠谱，比每次临时现写提示词稳定；example-skills 更多是给写 skill 的人找灵感，自己平时用不上可以先不装。两个都是一条命令的事，花不了几分钟。📱 手机上：能装，装的只是几份说明文件，不用编译任何东西，Termux 里跑的 Claude Code 一样能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "在 Claude Code 里添加插件市场：", "code": "/plugin marketplace add anthropics/skills" },
            { "text": "装处理文档的技能（PDF/Word/PPT/Excel）：", "code": "/plugin install document-skills@anthropic-agent-skills" },
            { "text": "（可选）装示例技能，给自己写 skill 找灵感用：", "code": "/plugin install example-skills@anthropic-agent-skills" }
          ],
          "done": "装完之后跟 Claude Code 说「用 PDF 技能帮我读一下这份 PDF」，它开始照技能步骤处理，就算生效了。"
        }
      ],
      "url": "https://github.com/anthropics/skills"
    },
    {
      "emoji": "🤖",
      "repo": "ChromeDevTools/chrome-devtools-mcp",
      "deploy": ["pc"],
      "title": "让 Claude Code 直接看懂你网页里发生了什么",
      "lang": "TypeScript",
      "stars": "55,450",
      "today": "67",
      "body": "Chrome DevTools 团队出的工具，让 Claude Code、Cursor 这类 AI 编程助手能直接控制和检查一个正在跑的 Chrome 窗口：看控制台报错、看网络请求、截图、录一段性能分析。装好之后可以让 AI 自己打开你写的网页调试，不用你把报错一行行贴给它看。",
      "explain": "MCP 是让 AI 连接外部工具的通用协议，这里连的是 Chrome 的「开发者工具」——平时按 F12 打开的那个调试面板。装上这个工具，相当于把 F12 面板的查看权限直接交给 AI，它自己就能看到页面哪里报错了。",
      "opinion": "写单文件 HTML/JS 工具时最烦的就是把控制台报错一行行复制给 AI 看；装上这个之后可以直接让 Claude Code 打开你写的页面、自己看报错、自己截图确认改没改好，省掉中间来回贴代码的步骤，值得装一次。📱 手机上：装不了，它要控制一个真的在跑的 Chrome 窗口，Termux 没有图形界面、打不开浏览器，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "在 Claude Code 里添加插件市场：", "code": "/plugin marketplace add ChromeDevTools/chrome-devtools-mcp" },
            { "text": "安装插件（会同时装好 MCP 服务器和配套技能）：", "code": "/plugin install chrome-devtools-mcp@chrome-devtools-plugins", "after": "需要电脑上装好 Node.js 和当前版本的 Chrome 浏览器，第一次用到要看网页的功能时才会自动打开 Chrome。" }
          ],
          "done": "让 Claude Code 帮你打开一个网页、读一下控制台报错，如果它能说出页面里具体报了什么错，就算装好了。"
        }
      ],
      "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp"
    },
    {
      "emoji": "🛠",
      "repo": "tw93/Pake",
      "deploy": ["pc"],
      "title": "一条命令把自己写的网页打包成电脑桌面软件",
      "lang": "Rust",
      "stars": "63,547",
      "today": "102",
      "body": "这是把任意网址打包成轻量桌面应用的命令行工具，支持 Windows/Mac/Linux，打出来的安装包通常不到 10MB，比用 Electron 打包小了快 20 倍。除了命令行，官网也有现成的桌面版 GUI 工具，不用敲命令照样能打包。",
      "explain": "「打包成桌面应用」就是把一个网页变成一个双击就能开的独立窗口程序，图标、标题栏都是自己的，不再是浏览器里开的一个标签页，看起来更像一个正式软件。",
      "opinion": "自己的小工具都是托管在 GitHub Pages 上的单文件网页，想在电脑上像软件一样双击打开、钉在任务栏，用这个工具一条命令就能打包成桌面版，不用自己学 Electron 那一套。命令行方式要联网装 Rust 相关工具，第一次跑不保证顺利，嫌麻烦就直接用下面说的现成 GUI 版。📱 手机上：装不了，打包这一步要用到 Rust 编译工具链，Termux 里装不了 Rust 编译环境，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "intro": "嫌装命令行麻烦，可以跳过下面的步骤，直接去 https://pake.run 下载现成的桌面版 GUI 工具，打开后填网址点一下就能打包，不用敲命令。",
          "steps": [
            { "text": "装好 Node.js（22 以上）和 pnpm 后，全局安装 Pake 命令行工具（不保证一次顺利，第一次打包可能要联网装 Rust 相关工具，装不上就改用上面说的 GUI 版）：", "code": "pnpm install -g pake-cli" },
            { "text": "把你自己网页的网址打包成桌面应用（换成你自己的网址和想要的应用名）：", "code": "pake https://你的网页地址 --name 你的应用名" }
          ],
          "done": "当前目录下生成一个安装包文件，装上之后桌面能看到一个独立图标，双击能打开你的网页、没有浏览器的地址栏，就算打包成功了。"
        }
      ],
      "url": "https://github.com/tw93/Pake"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "deploy": ["phone", "pc"],
      "title": "嗅探并下载网页里藏着的视频/音频资源的浏览器扩展",
      "lang": "JavaScript",
      "stars": "22,942",
      "today": "18",
      "body": "这是一个浏览器扩展，能把当前网页里加载的资源（图片、音频、视频，包括 m3u8 格式的流媒体地址）筛出来列成一张清单，点一下就能下载。支持 Chrome、Edge、Firefox，Edge 浏览器的安卓版也能装。",
      "explain": "「m3u8」是不少在线视频网站用的一种流媒体格式，网页上看着是个播放器，背后其实是很多段小文件拼起来播的，普通右键另存为经常存不下来，这类工具就是专门把这些藏着的资源地址找出来。",
      "opinion": "遇到那种网页上能看、却找不到下载按钮的视频音频，装上这个扩展打开它的面板，经常能直接看到资源地址点下来，比到处搜下载工具省事；只能下载你有权限看的内容，别拿去扒付费资源。📱 手机上：能装，Edge 浏览器安卓版扫二维码就能装扩展，不用走 Termux，但只在 Edge 安卓版里能用，手机 Chrome 不支持装扩展。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（Edge 安卓版）/ 💻 电脑（Chrome/Edge/Firefox）",
          "steps": [
            { "text": "手机：先装 Edge 浏览器安卓版，再打开仓库页面，找 README 里的 Edge Android 安装二维码扫码装：", "code": "https://github.com/xifangczy/cat-catch" },
            { "text": "电脑：打开仓库页面，按浏览器点 README 里对应的应用商店链接安装：", "code": "https://github.com/xifangczy/cat-catch", "after": "商店页面打不开就先开代理；也可以去 Releases 页面下载 crx 离线包，浏览器扩展管理页开启「开发者模式」后把 crx 文件拖进去装。" }
          ],
          "done": "浏览器右上角能看到扩展图标，打开一个有视频的网页点一下图标，能看到资源列表，就算装好了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "deploy": ["read"],
      "title": "每月一期的「有趣入门级开源项目」清单",
      "lang": "Python",
      "stars": "188,663",
      "today": "230",
      "body": "这是一个月刊清单仓库，每期挑一批「有趣、入门级」的开源项目介绍给大家，范围很杂：小工具、开源书、实战项目都有。最新一期是第 127 期。",
      "explain": "这里的「月刊」就是像杂志一样每个月出一期，不是实时更新的热榜；清单里的项目新旧都有，有的是刚发布的，有的是放了好几年但一直有人用的老项目。",
      "opinion": "不是奔着解决具体问题去的，更像是没事翻一翻找灵感：看看最近大家在做什么好玩的小项目，说不定能碰到自己也想试着照做一个的点子。不用装任何东西，有空刷一刷就行。📱 手机上：不用装，手机浏览器直接打开页面看文字就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器打开最新一期（第 127 期）：", "code": "https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub127.md", "after": "官网 hellogithub.com 阅读体验更好，想订阅可以关注说明里提到的微信公众号。" }
          ],
          "done": "能打开页面看到一条条项目介绍，就算能看了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    }
  ]
};
