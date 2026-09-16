DAILY_DATA["github/2026-09-12"] = {
  "date": "2026-09-12",
  "highlight": "chrome-devtools-mcp 能让 Claude Code 直接打开、操作、检查 Chrome 浏览器，调试你自己写的网页小工具会方便很多，今天最值得在电脑上装一个。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "ChromeDevTools/chrome-devtools-mcp",
      "title": "让 AI 编程助手直接操控 Chrome 调试网页",
      "lang": "TypeScript",
      "stars": "51,680",
      "week": "804",
      "body": "Chrome 官方团队出的 MCP 服务器，让 Claude Code、Cursor 这类 AI 编程助手可以直接打开一个真正的 Chrome 浏览器，帮你截图页面、看控制台报错、抓网络请求、测网页加载性能。它不是一个独立软件，而是插进 Claude Code 等工具里的\"外接工具\"，本身没有图形界面。",
      "explain": "「MCP」是让 AI 连接外部工具的通用接口，可以理解成给 AI 装了一个万能插座。「DevTools」是 Chrome 浏览器自带的调试面板，就是你按 F12 弹出来那个能看报错、看网络请求的窗口——这个项目相当于把这个面板开放给 AI 直接用。",
      "opinion": "你写单文件 HTML + JS 放 GitHub Pages，出问题一直靠自己开浏览器控制台肉眼排查；装上这个以后可以直接让 Claude Code 帮你截图、读控制台报错、看接口返回了什么数据，调试 Agent 小工具卡住时会顺手不少。值得装一个放着用。📱 手机上：装不了，它需要能控制一个真正的 Chrome（哪怕无头模式），Termux 这种没有桌面环境的安卓终端里没法装/开 Chrome，只能在 Windows 电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            {
              "text": "前提是电脑上已经装好 Claude Code、Node.js，并且有 Chrome 浏览器，然后用 Claude Code 命令行一键添加：",
              "code": "claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest"
            },
            {
              "text": "重启 Claude Code，让它帮你截一张当前网页的图，或者看看控制台报错，测试是否连上。"
            }
          ],
          "done": "重启后问 Claude Code\"帮我截一张当前网页的图\"，它能唤起 Chrome 并把截图结果发给你。"
        }
      ],
      "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp"
    },
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "title": "给 Claude Code 装一套软件开发方法论技能包",
      "lang": "Shell",
      "stars": "285,368",
      "today": "729",
      "body": "一套装进 Claude Code 的技能包，教会它按规范流程做事：先想清楚设计、写测试、再写代码、最后自我检查，而不是接到需求就直接开始写。装上后这些技能会在合适的场合自动触发，不用每次手动喊它用。",
      "explain": "这里的「技能（Skill）」是 Claude Code 里教 AI 怎么完成一类任务的说明文件，相当于给它发一份\"操作手册\"；「开发方法论」就是一套固定的做事套路，比如先设计、再测试、后写代码。",
      "opinion": "你现在写单文件小工具流程比较随意，这套东西能让 Claude Code 在写代码前先跟你确认设计、写完后自动检查有没有漏掉的测试，能减少\"写完才发现漏洞\"的情况；不过原版是给复杂工程设计的方法论，单文件小工具用得上的可能只是一部分，挑着用就好，别被它的流程绑住手脚。📱 手机上：可以，这是 Claude Code 自己的插件系统，装的是文本形式的技能文件，不需要编译任何东西，Termux 里跟电脑上装法一样。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入这条斜杠命令（不是 shell 命令）：",
              "code": "/plugin install superpowers@claude-plugins-official"
            },
            {
              "text": "如果提示市场里找不到，改用作者自己维护的市场：",
              "code": "/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace",
              "after": "这两条命令是 Claude Code 内部去连 GitHub，如果因为网络问题失败，确保打开 Claude Code 前代理已经开着，再重试。"
            }
          ],
          "done": "装完重启 Claude Code，输入 `/skills` 能看到 superpowers 相关的技能列表。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🛠",
      "repo": "microsoft/markitdown",
      "title": "把 PDF、Word、PPT 这些文件转成 AI 能读的 Markdown",
      "lang": "Python",
      "stars": "182,682",
      "week": "4,650",
      "body": "微软出的命令行小工具，把 PDF、Word、PPT、Excel、图片、网页、YouTube 字幕这些五花八门的文件统一转换成 Markdown 纯文本，方便直接丢给大模型看。",
      "explain": "「Markdown」是一种用简单符号排版的纯文本格式（比如用 `#` 表示标题），大模型读这种格式的文字，比读原始 PDF、Word 文件更准更省事。「命令行工具」意味着没有图形界面，靠打字输入命令来用。",
      "opinion": "你调豆包、DeepSeek 的 API 做工具时，经常要把用户传的文件内容喂给大模型，这个工具能省掉自己写 PDF/Word 解析代码的麻烦，转完直接读文本拼进 prompt 就行，很实用。📱 手机上：基础功能大概率能装，核心只依赖几个纯 Python 库；但要转 PDF、Word、Excel 这些格式，会连带装一个叫 magika 的库，它依赖 onnxruntime（一种编译好的原生库），这类库在 Termux 上很难装，大概率失败，建议直接在电脑上用全功能版。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证，只能转部分格式）",
          "steps": [
            {
              "text": "装基础版，不带 PDF/Word/Excel 这些可选格式，减少失败概率：",
              "code": "pip install markitdown"
            },
            {
              "text": "试着转一个网页文件看效果：",
              "code": "markitdown 你的文件.html > 结果.md",
              "after": "如果第①步卡在编译 onnxruntime 或 numpy 报错，说明这条路在手机上走不通，换电脑装全功能版。"
            }
          ]
        },
        {
          "title": "安装步骤 · 💻 电脑（功能齐全）",
          "steps": [
            {
              "text": "装全部格式支持：",
              "code": "pip install \"markitdown[all]\""
            },
            {
              "text": "转一个文件试试：",
              "code": "markitdown 你的文件.pdf > 结果.md"
            }
          ],
          "done": "命令执行后能在命令行里看到转换出来的文字内容，或者生成了 `结果.md` 文件。"
        }
      ],
      "url": "https://github.com/microsoft/markitdown"
    },
    {
      "emoji": "🎨",
      "repo": "pascalorg/editor",
      "title": "浏览器里的 3D 建筑编辑器，还带 AI Agent 接口",
      "lang": "TypeScript",
      "stars": "23,597",
      "today": "106",
      "body": "一个能在浏览器里搭建 3D 建筑/场景的编辑器，可以直接在网页里拖东西建模，也能用命令行打开；还专门开放了一套接口，让 Claude Code 这类 AI Agent 能直接读取、编辑场景里的物体。有官方在线版可以先体验，不用先安装。",
      "explain": "「WebGPU」是浏览器里跑 3D 图形的新技术标准，可以理解成\"网页版的显卡驱动接口\"，比老技术画面效果更好、速度更快。这里的「MCP 工具」跟上面第 1 条一个道理，是开放给 AI 用的操作接口。",
      "opinion": "拿来玩玩挺有意思，能看到纯前端网页技术能做出什么级别的 3D 效果，跟你写单文件 HTML + JS 是同一条技术路线；它开放的 MCP 接口也能给你个思路——怎么把自己的网页小工具也做成\"AI 能操作\"的样子。不是工作刚需，当拓展见识的项目看。📱 手机上：能装，官方要求 Node.js 22.13 以上，Termux 装的版本够用；不过它本质是给浏览器用的 3D 编辑器，手机屏幕小、性能有限，能跑起来但不一定好用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "用 npx 直接启动，不用提前装（仓库要走代理才能连上，只对这一条命令生效）：",
              "code": "https_proxy=http://127.0.0.1:7890 npx @pascal-app/cli editor",
              "after": "电脑上把 `https_proxy=http://127.0.0.1:7890 ` 这段去掉，需要代理就在代理软件里开系统代理。"
            },
            {
              "text": "命令行会提示已经在本机开了端口，浏览器打开它给出的地址（通常是 `http://localhost` 加一个端口号）。 不想自己装，也可以直接打开官方在线版试玩：[editor.pascal.app](https://editor.pascal.app)"
            }
          ],
          "done": "浏览器里出现 3D 编辑器界面，能看到场景和工具栏。"
        }
      ],
      "url": "https://github.com/pascalorg/editor"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "title": "苹果、安卓、网页都能用的本地优先记账 App",
      "lang": "Dart",
      "stars": "2,300+",
      "body": "一个开源记账 App，苹果、安卓、网页三端都能用，主打\"数据存在自己设备上\"，还支持拍照识别小票自动记账，也能接大模型 API 做智能记账。",
      "explain": "「本地优先」意思是账单、余额这些数据默认存在你自己的手机或电脑里，不用先传到某家公司的服务器才能用，隐私更放心。这里的\"AI 记账\"是指拍一张购物小票的照片，AI 自动识别出金额和分类帮你记上，不用手动一笔笔敲。",
      "opinion": "你在学个人理财入门，目标是先把钱花在哪儿搞清楚，这类只记账、不碰投资、还能直接装在安卓手机上用的 App，门槛最低，最适合先养成记账习惯。它的多端云同步需要自己另外搭一个服务器（用 Docker），你手机上没有 Docker，暂时用单机版就够，别折腾同步。📱 手机上：可以，官方直接提供安卓 App 和 APK，不需要在 Termux 里装任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（安卓，直接装 App）",
          "steps": [
            {
              "text": "国内一般打不开 Google Play，改用 GitHub 上的 APK，打开下面链接后在 Assets 列表里找 .apk 文件下载： [BeeCount 最新版发布页](https://github.com/TNT-Likely/BeeCount/releases/latest)"
            },
            {
              "text": "下载完点开安装包，手机提示\"允许安装未知来源应用\"时点允许。"
            }
          ],
          "done": "桌面上出现 BeeCount 图标，打开能新建一笔账。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    }
  ]
};
