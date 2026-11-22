DAILY_DATA["github/2026-11-22"] = {
  "date": "2026-11-22",
  "highlight": "今天最值得先装的是 `chrome-devtools-mcp`——装上以后 Claude Code 能自己打开浏览器看页面、读控制台报错、截图，调试你平时写的单文件网页小工具会快很多。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "ChromeDevTools/chrome-devtools-mcp",
      "deploy": ["pc"],
      "title": "让 Claude Code 直接操控浏览器调试网页",
      "lang": "TypeScript",
      "stars": "58.7k",
      "body": "chrome-devtools-mcp 是 Chrome DevTools 团队官方发布的 MCP 服务器，能让 Claude Code、Cursor 这类编码 AI 直接连上一个正在运行的 Chrome 窗口。AI 可以帮你截图页面、读控制台报错、看网络请求，还能录制性能分析报告，底层基于 `puppeteer` 实现。",
      "explain": "`MCP` 是一种让 AI 助手连接外部工具的通用接口，装好之后 AI 就能像人一样操作浏览器，不用你再手动把报错贴给它看。`DevTools` 就是浏览器自带的开发者工具（按 F12 能打开的那个面板），能看到网页的报错信息和网络请求。`puppeteer` 是一个让程序自动控制 Chrome 的库，相当于 AI 的「手」。",
      "opinion": "你平时写的单文件 HTML/JS 小工具出 bug 时，不用再自己打开控制台复制报错给 AI 看——装好这个，Claude Code 能自己打开页面、截图、读报错，直接告诉你哪里出了问题，调试会快不少。命令只有两条，值得现在就装上试试。📱 手机上：不支持，Termux 没有图形界面，装不了能被远程控制的桌面版 Chrome，这个工具基本用不上，建议只在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Claude Code 插件）",
          "intro": "前提是电脑上已经装好 Claude Code 和 Chrome 浏览器。",
          "steps": [
            { "text": "在 Claude Code 对话框里输入，添加插件市场：", "code": "/plugin marketplace add ChromeDevTools/chrome-devtools-mcp" },
            { "text": "再安装插件：", "code": "/plugin install chrome-devtools-mcp@chrome-devtools-plugins" }
          ],
          "done": "装好后问 Claude Code「帮我打开某个网页截个图」，它能弹出浏览器窗口并返回截图或页面信息，就是装成功了。"
        }
      ],
      "url": "https://github.com/ChromeDevTools/chrome-devtools-mcp"
    },
    {
      "emoji": "🤖",
      "repo": "HKUDS/CLI-Anything",
      "deploy": ["pc"],
      "title": "让 Claude Code 学会调用社区现成CLI工具",
      "lang": "Python",
      "stars": "62,072",
      "today": "769",
      "body": "CLI-Anything 想做的是把各种软件都变成 AI 智能体能直接调用的命令行工具。它自带一个 CLI-Hub，收录了 GIMP、Blender、LibreOffice、Ollama 等软件的「智能体操作手册」，还能帮没收录的软件现场生成一套。今天冲上 GitHub 日榜前列。",
      "explain": "这里的「智能体」就是 Claude Code 这样能自己操作电脑的 AI。普通软件的操作界面是给人看的菜单和按钮，AI 不好直接点，CLI-Anything 相当于给这些软件配了一套「AI 专用说明书 + 命令行接口」，AI 看了说明书就知道该发什么命令。",
      "opinion": "装好之后可以让 Claude Code 去 CLI-Hub 里找现成的软件操作包装直接用，比如指挥 GIMP 批量处理图片、指挥 Blender 渲染。但这些包装大多是在指挥你电脑上已经装好的软件，本身不是什么新功能，值不值得装取决于你电脑上有没有它收录的那些软件。📱 手机上：这个 skill 本身大概率能装进 Termux，但它要指挥的 GIMP/Blender/LibreOffice 等软件手机上都没有，装了基本没东西可用，不推荐在手机上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Claude Code 插件）",
          "intro": "前提是电脑上已经装好 Claude Code。",
          "steps": [
            { "text": "在 Claude Code 对话框里输入，添加插件市场：", "code": "/plugin marketplace add HKUDS/CLI-Anything" },
            { "text": "再安装插件：", "code": "/plugin install cli-anything" }
          ],
          "done": "装好后问 Claude Code「CLI-Hub 里有哪些软件可以用」，它能列出一串软件名，就是装成功了。"
        }
      ],
      "url": "https://github.com/HKUDS/CLI-Anything"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "deploy": ["phone", "pc"],
      "title": "浏览器扩展嗅探网页资源，找视频图片直链",
      "lang": "JavaScript",
      "stars": "23,096",
      "today": "26",
      "body": "cat-catch 是一款浏览器扩展，能自动嗅探当前网页加载的音频、视频、图片等资源，列成清单方便一个个下载或复制直链。支持 Chrome、Edge、Firefox 桌面版，以及 Edge Android 手机版。",
      "explain": "「嗅探」在这里是指扩展会盯着网页加载过程中出现的网络请求，把里面长得像视频、音频、图片文件的地址挑出来，不用你自己打开开发者工具去找。",
      "opinion": "网页上能看到但找不到下载按钮的视频、图片，装上这个点开扩展图标看一眼列表就知道直链在哪，比到处搜下载工具靠谱；日常整理素材、保存参考图挺顺手。📱 手机上：Edge 安卓版提供了这个扩展，装好 Edge 浏览器后搜索安装就能用；普通手机 Chrome 不支持装浏览器扩展，用不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Chrome/Edge/Firefox）",
          "steps": [
            { "text": "按浏览器打开对应商店页面安装：Chrome 商店 [cat-catch](https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb)，Edge 商店 [cat-catch](https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci)，Firefox 商店 [cat-catch](https://addons.mozilla.org/addon/cat-catch/)。", "after": "Firefox 商店页面需要非国区 IP 才能打开，打不开就先开代理，或者改用 Chrome/Edge。" },
            { "text": "商店页面打不开或装不上时，也可以手动装：打开 [Releases 页面](https://github.com/xifangczy/cat-catch/releases) 下载 crx 文件，浏览器扩展管理页打开「开发者模式」，把 crx 文件拖进去。" }
          ],
          "done": "浏览器右上角出现猫爪图标，打开网页后点它能弹出资源列表，就是装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机 Edge Android",
          "steps": [
            { "text": "手机装好 Edge 浏览器 App，打开它的扩展商店搜索「cat-catch」安装。", "after": "官方说明这里只给了二维码图，没有文字商店链接；搜不到就说明你的 Edge 版本还不支持装扩展。" }
          ],
          "done": "Edge 工具栏能看到猫爪图标，就是装好了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "🛠",
      "repo": "toeverything/AFFiNE",
      "deploy": ["phone", "pc"],
      "title": "开源全能笔记+白板，网页打开就能用",
      "lang": "TypeScript",
      "stars": "76.3k",
      "body": "AFFiNE 是一款开源的全能工作区，定位是 `Notion` 和 `Miro` 的平替，笔记文档和画图白板能放在同一个地方编辑。支持本地优先存储，登录账号后也能云同步多端；提供免费版，本地工作区不限量，云存储 10GB。",
      "explain": "`Notion`、`Miro` 是国外常用的笔记/白板工具，前者像一个能自由排版的文档，后者像一块无限大的白板用来画思路图。`本地优先`的意思是数据先存在你自己设备上，不联网也能用，联网后再同步到云端，不怕服务商跑路丢数据。",
      "opinion": "学习笔记、项目进度记录零零散散分散在好几个地方的话，AFFiNE 能把文字笔记和画图白板放一起管理，免费额度个人用基本够。先去网页版试一两周，觉得好用再装桌面客户端做离线使用。📱 手机上：网页版用手机浏览器打开就能用，不用额外安装，但手机上排版和打字体验不如电脑，适合临时看一眼，正式记笔记建议用电脑。",
      "install": [
        {
          "title": "使用方法 · 📱💻 网页版（不用装）",
          "steps": [
            { "text": "手机或电脑浏览器打开 [app.affine.pro](https://app.affine.pro)，跟着页面提示注册/登录（支持邮箱等方式）即可开始记笔记。" }
          ],
          "done": "能新建一个文档或白板并保存，就是能正常用了。"
        },
        {
          "title": "安装步骤 · 💻 电脑客户端（可选，离线更快）",
          "intro": "网页版已经能用，这一步是想要离线客户端才需要做。",
          "steps": [
            { "text": "打开 [AFFiNE 下载页面](https://affine.pro/download)，选 Windows 版安装包下载。", "after": "下载慢或失败就先开代理。" },
            { "text": "运行下载好的安装包，一路下一步装完，然后登录跟网页版一样的账号。" }
          ],
          "done": "桌面图标能打开 AFFiNE 界面，登录后笔记会跟网页版同步，就是装好了。"
        }
      ],
      "url": "https://github.com/toeverything/AFFiNE"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "deploy": ["read"],
      "title": "每月一期，入门级开源项目推荐清单",
      "lang": "Python",
      "stars": "190,404",
      "today": "203",
      "body": "HelloGitHub 是一份月刊，专门挑GitHub上有趣、入门级的开源项目来介绍，也会收一些开源书籍和实战项目，方便不知道找什么项目练手的人直接挑着看。每月28号更新，目前已经出到第127期。",
      "explain": "「月刊」就是固定每月更新一次的内容合集，跟资讯网站不一样，不追热点，攒一个月挑出来的项目一次发完，适合没事的时候慢慢翻。",
      "opinion": "不知道练手找什么开源项目看的时候，翻一期月刊比自己到处搜靠谱，里面挑的项目都偏入门、容易看懂，适合平时练 Python 顺手找点小项目参考。不用装任何东西，花十分钟翻翻就行。📱 手机上：能看，内容在官网和公众号上，手机浏览器直接打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开官网 [hellogithub.com](https://hellogithub.com) 翻最新一期，或者在微信搜公众号「HelloGitHub」关注。" },
            { "text": "也可以直接在仓库里看往期月刊目录，挑感兴趣的分类点进去看。" }
          ],
          "done": "能打开某一期看到项目列表和简介，就算看成功了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    }
  ]
};
