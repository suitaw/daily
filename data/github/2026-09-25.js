DAILY_DATA["github/2026-09-25"] = {
  "date": "2026-09-25",
  "highlight": "今天最值得动手试的是 `HKUDS/CLI-Anything`——把专业软件包成命令行，让 AI 智能体能直接调用，给「怎么让 Agent 真正动手做事」这件事提供了新思路，电脑上装个 pip 包几分钟就能感受到；手机 Termux 装得上框架本身，但包装好的具体软件用不了。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "HKUDS/CLI-Anything",
      "title": "把专业软件包成命令行，AI智能体能直接调用",
      "lang": "Python",
      "stars": "50,330",
      "today": "413",
      "body": "CLI-Anything 会自动分析一个软件的源码，把它的功能生成一套命令行接口（CLI），这样 AI 智能体（比如 Claude Code）就能直接调用这个软件的功能，不用去点鼠标、认界面。项目自带一个「CLI 商店」，已经打包好 GIMP、Blender 等 30 多个软件的命令行版本，装好后支持 `--json` 输出，方便智能体解析结果；也提供 Claude Code 插件，可以自己动手给新软件生成命令行版本。",
      "explain": "`CLI`（命令行界面）就是不用鼠标点按钮，靠打字命令来操作软件，比如一行命令就能让软件按你说的处理一张图片。AI 智能体平时只会「读文字、写文字」，遇到图形界面软件（点菜单、拖控件）就束手无策；把软件包成命令行，相当于给它一双能直接操作专业软件的手。",
      "opinion": "如果你以后想让自己的 Agent 不只是调 API 回答问题，还能真的「动手」操作别的软件（比如自动改图、批量转格式），这个思路值得学一下——不用自己造轮子，一条 `cli-hub install` 就能拿现成的命令行版本用。不过它目前打包的软件偏专业向，跟你现在做的单文件小工具关联不大，更适合当「以后想做复杂 Agent 时的参考」。📱 手机上：框架本身是纯 Python，`pip install` 应该能装；但它包装的具体软件（GIMP 等）Termux 里没有，装了也基本用不上，只能看代码学思路。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / 📱 手机 Termux（命令一样）",
          "intro": "需要先装好 Python 3.10 以上。",
          "steps": [
            { "text": "装 CLI-Anything 的命令行商店：", "code": "pip install cli-anything-hub" },
            { "text": "看看商店里有哪些现成的软件命令行：", "code": "cli-hub list" },
            { "text": "按关键词搜索：", "code": "cli-hub search image" },
            { "text": "装一个具体软件的命令行版本（以 GIMP 为例）：", "code": "cli-hub install gimp", "after": "这一步不保证成功——需要电脑上本来就装了对应软件本体，Termux 上大概率会失败。" }
          ],
          "done": "能跑出 `cli-hub list` 的软件列表，就说明商店装好了；具体某个软件的命令行能不能装成功，取决于电脑上有没有装它本体。"
        }
      ],
      "url": "https://github.com/HKUDS/CLI-Anything"
    },
    {
      "emoji": "📚",
      "repo": "rohitg00/ai-engineering-from-scratch",
      "title": "从数学到大模型、Agent的免费系统教程",
      "lang": "Python",
      "stars": "56,543",
      "today": "347",
      "body": "这是一套从数学基础一路讲到深度学习、大模型、Agent、多模态的系统教程，一共分 20 个阶段，官网是 aiengineeringfromscratch.com。每一课都配代码，用 Python（也有 TypeScript、Rust、Julia 版本）让你自己把经典算法实现一遍，而不是直接调现成框架。作者写这套教程是给「已经会用 AI 工具、但想更专业地理解它」的人看的。",
      "explain": "教程里会遇到很多机器学习的数学名词（比如梯度下降、损失函数），这些是训练模型时「让模型越猜越准」背后的原理，跟你平时调 API 用现成模型是两回事——调 API 是「用别人训好的模型」，这套教程教的是「模型是怎么被训出来的」。`Agent`（智能体）这个词你很熟，教程后半段专门有一个阶段讲怎么搭建能自主完成任务的 Agent。",
      "opinion": "你现在的路子是直接调豆包、DeepSeek 的 API 做工具，这套教程不会马上让你的工具变强，但能帮你搞懂「AI 为什么这样答」「模型内部在干嘛」，以后调参数、选模型、判断一个新模型值不值得换的时候会更有底。内容偏硬核（要写代码实现算法），建议当长期学习资料，别指望一两天看完。📱 手机上：教程本身是网页和 Markdown，手机浏览器直接能看；里面的 Python 代码示例大多是纯算法实现，不依赖 openai/anthropic 这类装不上的库，理论上 Termux 也能跑，但更适合在手机或电脑上先看懂再说。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开官网看全部 20 个阶段的课程：[aiengineeringfromscratch.com](https://aiengineeringfromscratch.com)" },
            { "text": "（可选）想在本地跑代码示例，克隆仓库：", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/rohitg00/ai-engineering-from-scratch", "after": "电脑上克隆不用加这个代理前缀，直接 `git clone` 就行；这一步只是为了跑代码示例，光看教程不需要。" }
          ],
          "done": "能打开网站看到分阶段的课程目录，就算找对地方了。"
        }
      ],
      "url": "https://github.com/rohitg00/ai-engineering-from-scratch"
    },
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "title": "免费离线OCR，截图识字、批量转文字",
      "lang": "Python",
      "stars": "47,488",
      "today": "23",
      "body": "Umi-OCR 是一款免费开源的文字识别工具，能截图识字、批量处理图片和 PDF、识别二维码，还能做版面分析（把识别出来的文字按原来的排版整理好）。内置 PaddleOCR-json 和 RapidOCR-json 两套识别引擎，解压就能用，全程离线运行，不用联网、不用 API key。目前官方支持 Windows 7 x64 和 Linux x64。",
      "explain": "OCR 全称是「光学字符识别」，说白了就是把图片里的文字「读」出来变成能复制的文字，比如拍一张发票照片，OCR 能把上面的金额、日期直接识别成文字，不用你手打。「离线运行」意思是识别过程不联网、不上传你的图片，隐私上更放心。",
      "opinion": "这个工具对你记账挺实用——拍张发票或者账单截图，用它识别出文字再整理进记账工具或表格，比手打省事很多；平时截图里的文字要复制、扫描件要转文字，也能直接用。它不依赖网络和 API key，是本地小工具的好例子，甚至可以研究一下怎么把它的识别结果接进你自己写的 AI 小工具里当「眼睛」用。📱 手机上：官方只支持 Windows 和 Linux 桌面版，没有 Android/Termux 版本，装不了，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开发布页面，选一个版本下载（普通电脑选 Rapid 版，兼容性更好；高性能电脑可选 Paddle 版，识别更准）：", "after": "网址 https://github.com/hiroi-sora/Umi-OCR/releases ，最新版本 v2.1.5，文件名类似 `Umi-OCR_Rapid_v2.1.5.7z.exe`；国内直连 GitHub 慢的话多刷新几次。" },
            { "text": "双击下载好的 `.7z.exe` 文件，自解压到一个文件夹。" },
            { "text": "打开解压出来的文件夹，双击 `Umi-OCR.exe` 就能用，不用装。" }
          ],
          "done": "打开软件能看到截图识别的界面，随便截一张带文字的图测试一下就知道装好了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "📚",
      "repo": "jaywcjlove/linux-command",
      "title": "600多个Linux命令速查手册",
      "lang": "Markdown",
      "stars": "36,959",
      "today": "13",
      "body": "这是一份收录了 600 多个 Linux 命令的速查手册，每个命令都有用法说明和示例，做成了可以搜索的网页。除了网页版，还提供 Docker、npm 包、浏览器插件等多种用法，方便集成到别的工具里。",
      "explain": "Termux 本质上就是一个 Linux 命令行环境，你敲的 `pkg install`、`ls`、`cd` 这些都是 Linux 命令；这份手册就是把常见命令和参数都查好了放在一个网页里，忘了某个命令怎么用的时候搜一下就行，比记不住去网上到处搜靠谱。",
      "opinion": "你在 Termux 里干活难免会碰到没见过的命令或者参数，收藏这个网页当词典用挺方便，比如查 `grep`、`find`、`chmod` 这些常用命令的具体用法。不是那种要正襟危坐学一遍的教程，更像工具书，用到再查就行。📱 手机上：就是个网页，手机浏览器直接打开就能用，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "手机或电脑浏览器直接打开查询：[jaywcjlove.github.io/linux-command](https://jaywcjlove.github.io/linux-command/)" }
          ],
          "done": "能搜到你查的命令（比如搜 `grep`）出现用法说明，就说明能正常用。"
        }
      ],
      "url": "https://github.com/jaywcjlove/linux-command"
    },
    {
      "emoji": "💰",
      "repo": "xiaojinzi123/yike-app",
      "title": "开源记账App，本地存储不用联网登录",
      "lang": "Kotlin",
      "stars": "468",
      "body": "一刻记账是一个 Android 记账 App 的开源版本，支持基础的收支记录、分类统计。开源版本不连接服务器，用本地默认账号，数据都存在手机本地，不用注册登录。作者说开源版主要是给大家学习交流用，功能比官方商店里的正式版简单一些。",
      "explain": "这是一个「开源版」和「商店正式版」并存的 App——开源版免费、功能简化、数据只存本地；商店版功能更全，可能有云同步等收费服务。选开源版意味着数据自己保管，没有云备份，换手机记得自己导出数据。",
      "opinion": "作为入门记账工具够用了：不用注册、数据在本地，适合你刚开始学理财、想先养成记账习惯的阶段。它是个人开发的小项目，star 数不算多，别指望长期维护和客服支持，出问题多半得自己看代码解决。📱 手机上：本来就是 Android App，装 apk 就能用，不用在 Termux 里折腾。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Android",
          "steps": [
            { "text": "打开发布页面，在最新版本（v1.0.3）的 Assets 里下载 apk 文件：", "after": "网址 https://github.com/xiaojinzi123/yike-app/releases ；国内直连 GitHub 慢或打不开的话多刷新几次。" },
            { "text": "手机设置里允许「安装未知来源应用」，然后点开下载好的 apk 安装。" }
          ],
          "done": "能打开 App 看到记账首页，随手记一笔支出测试一下就说明装好了。"
        }
      ],
      "url": "https://github.com/xiaojinzi123/yike-app"
    },
    {
      "emoji": "🎨",
      "repo": "ScottSloan/Bili23-Downloader",
      "title": "开源B站视频下载器，支持画质选择和弹幕",
      "lang": "Python",
      "stars": "7,715",
      "today": "34",
      "body": "Bili23-Downloader 是一款开源、免费、跨平台的 B 站视频下载工具，支持多线程加速下载、音视频分离、弹幕提取，下载完的文件名和存放方式还能自己定制。目前支持 Windows（含 Win 7）、Linux、macOS 三个平台。下载某些内容需要登录 B 站账号，支持扫码、短信验证码、Cookie 三种登录方式。",
      "explain": "「音视频分离」是因为 B 站很多清晰度更高的视频，画面和声音是分开两个文件传的，下载工具要把它们合并成一个能正常播放的文件；这个工具帮你自动做了这一步。",
      "opinion": "纯粹是个好玩的小工具，把喜欢的视频下载下来离线看，或者研究一下它是怎么处理视频下载、弹幕解析的，对你写自己的小工具也是个参考案例。下高清晰度视频需要登录账号，账号信息只在你自己电脑上用，没什么额外风险。📱 手机上：官方没有 Android 版，Termux 里也没有现成安装包，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows/Linux/macOS）",
          "steps": [
            { "text": "打开发布页面，在最新版本（v2.15.0）里选对应系统的安装包下载：", "after": "网址 https://github.com/ScottSloan/Bili23-Downloader/releases ；国内直连 GitHub 慢的话多刷新几次，或者去 B 站搜「Bili23-Downloader」找作者置顶的下载地址。" },
            { "text": "Windows 上直接运行下载好的安装包或解压后运行主程序；下载高画质视频前，先在软件里用扫码或 Cookie 登录一下 B 站账号。" }
          ],
          "done": "打开软件粘贴一个 B 站视频链接，能看到视频信息（标题、清晰度选项）就说明装好了。"
        }
      ],
      "url": "https://github.com/ScottSloan/Bili23-Downloader"
    }
  ]
};
