DAILY_DATA["github/2026-10-18"] = {
  "date": "2026-10-18",
  "highlight": "今天最值得试的是 `hiroi-sora/Umi-OCR`——免费离线把扫描版 PDF、截图里的文字识别成能复制粘贴的文本，不用联网也不用花钱，电脑上常年要翻扫描件的人一装就知道省多少事。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "deploy": ["pc"],
      "title": "免费离线 OCR，截图和扫描版 PDF 都能识别成文字",
      "lang": "Python",
      "stars": "47,989",
      "today": "22",
      "body": "Umi-OCR 是一款免费开源、完全离线运行的 OCR 软件，支持截图识别、批量导入图片、识别扫描版 PDF，识别完的文字能直接复制粘贴。软件本身是解压即用，不用联网、不用注册、不用花钱。",
      "explain": "「OCR」就是把图片里的文字「认」出来变成能复制的文本，比如把一张截图里的字变成能粘贴到笔记里的文字；跟手机拍照软件自带的「识别图中文字」是同一类功能，只是这个是免费、离线、能批量处理的桌面版。",
      "opinion": "扫描版的书、论文、截图里的文字没法直接复制，一直是个麻烦事，这个软件能直接解决。装一次以后随手截图或拖 PDF 进去就能出文字，省去自己打字抄的功夫，值得装。📱 手机上：装不了——官方只给了 Windows 和 Linux x64 桌面版，没有安卓版，手机 Termux 用不上，只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/hiroi-sora/Umi-OCR/releases/latest)，下载 `Umi-OCR_Rapid_v2.1.5.7z.exe`（Rapid 引擎版，比另一个 Paddle 版兼容性更好，老机器也能跑）" },
            { "text": "双击下载的文件，它是自解压包，会自动解压出一个文件夹" },
            { "text": "打开解压出的文件夹，双击里面的 `Umi-OCR.exe` 启动软件", "after": "如果报 `0xc0000142` 或「OCR init fail」，一般是 CPU 不兼容，去上一步换成 Paddle 版试试" }
          ],
          "done": "软件打开后，随便截一张带文字的图或拖一个 PDF 进去，能认出文字就是装好了"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "🤖",
      "repo": "akitaonrails/ai-memory",
      "deploy": ["pc"],
      "title": "给 Claude Code、Codex 这类工具装长期记忆",
      "lang": "Rust",
      "stars": "9,917",
      "today": "178",
      "body": "ai-memory 给 AI 编程工具加一份长期记忆，能记住之前聊过的决定和进度，支持 Claude Code、Codex、Cursor 等二十多种工具共用同一份记忆，换一个工具接着用也不会丢上下文。默认不用配任何 API key，不联网也能跑。",
      "explain": "AI 编程工具默认每次开新对话都是「失忆」的，之前聊过的项目背景、做过的决定都要重新说一遍；这个工具相当于给它配一个随身小本子，把聊过的内容记下来，下次换个工具接着聊也能翻出来看。",
      "opinion": "如果你会换着用不同的 AI 编程工具，这东西能省掉每次重新交代背景的麻烦，而且默认不用联网、不用申请密钥，装上试试成本不高。官方说原生 Windows 支持还是「实验性」，不保证顺顺利利。📱 手机上：不建议装——官方没提到 Android/Termux，装它要么编译 Rust 要么下官方二进制，Termux 里大概率跑不起来，先只在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，官方标注原生支持为实验性）",
          "steps": [
            { "text": "打开 Windows 的 PowerShell，运行官方安装脚本：", "code": "irm https://github.com/akitaonrails/ai-memory/releases/latest/download/install.ps1 | iex", "after": "不保证一定成功；如果报错装不上，大概率是原生 Windows 兼容性问题，官方说在 WSL2（Windows 自带的 Linux 子系统）里更稳，如果你电脑上开了 WSL2，可以在里面的 Ubuntu 终端改用 `curl -fsSL https://github.com/akitaonrails/ai-memory/releases/latest/download/install.sh | sh`" },
            { "text": "装完运行初始化命令，它会自动检测你装的 Claude Code / Codex 并接好记忆功能：", "code": "ai-memory setup" }
          ],
          "done": "在 Claude Code 里聊几句，关掉重开一个新会话，如果它还记得之前聊过的内容，就是装成功了"
        }
      ],
      "url": "https://github.com/akitaonrails/ai-memory"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "deploy": ["pc"],
      "title": "本地优先的开源预算记账软件",
      "lang": "JavaScript",
      "stars": "29,600",
      "body": "Actual Budget 是一款完全免费开源的个人预算软件，用「信封式预算」的方法管钱：先把收入分配到各个用途的「信封」里，花一笔就从对应信封里扣，花超了一眼就能看出来。软件本身是本地优先设计，数据存在自己电脑上，不强制联网，官方也提供 Windows/Mac/Linux 的桌面安装包。",
      "explain": "「信封式预算」是个很老但很管用的管钱办法：发工资先把钱分进「吃饭」「交通」「娱乐」等几个虚拟信封，花钱只能从对应信封里出，哪个信封空了就说明这个月这项超支了，比记完账才发现超支要直观得多。",
      "opinion": "比起单纯的记账软件，这个工具多了「提前分配」这一步，更贴近你现在要学的「管好自己的钱」这个目标，而不只是事后看流水。本地优先、不强制联网同步，装完就能直接用，不用折腾服务器。📱 手机上：装不了——官方给的是 Windows/Mac/Linux 桌面安装包，没提到安卓版，先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [微软商店页面](https://apps.microsoft.com/detail/9p2hmlhsdbrm)，点「安装」", "after": "商店更新有时会比官方正式版慢几天，不影响正常使用" },
            { "text": "装好后打开 App，跟着首次引导新建一个预算，官方说明这是本地优先的工具，数据存在自己电脑上，不强制联网同步" }
          ],
          "done": "能新建一个预算、记一笔支出，就是装好了"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "emoji": "🎨",
      "repo": "maotoumao/MusicFree",
      "deploy": ["phone"],
      "title": "插件化、没广告的安卓音乐播放器",
      "lang": "TypeScript",
      "stars": "27,638",
      "today": "42",
      "body": "MusicFree 是一款完全免费、没有广告的安卓音乐播放器，目前只支持安卓和 HarmonyOS。软件本身不内置任何歌曲来源，要装「插件」才能搜歌、播放，插件可以从本地文件或网络地址装。",
      "explain": "这里的「插件」相当于给播放器接音源：软件本身只是个空播放器外壳，装上一个插件才能连到某个歌曲来源去搜歌，不装插件就搜不出任何歌。",
      "opinion": "免费、没广告，适合换掉用着烦广告的音乐 App，缺点是要自己去装插件才能用，上手门槛比普通音乐 App 高一点。网上流传的「破解版/去广告版」官方说明都是假的，只从 GitHub 下。📱 手机上：能装，是正经的安卓 App，直接下 APK 装上就行，不涉及 Termux 和编译。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Android",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/maotoumao/MusicFree/releases/latest)，在下面的 Assets 列表里找带 `arm64-v8a` 字样的 apk 下载（2017 年以后的手机基本都是这个；不确定自己手机型号就选带 `universal` 字样的通用包，文件会大一点）" },
            { "text": "下载后点开安装，如果手机提示「未知来源应用」被拦，去系统设置里允许这次安装" },
            { "text": "打开 App，进入侧边栏的插件设置，照 README 里给的插件仓库地址加一个音源插件", "after": "软件本身不带任何音源，不装插件搜不出歌" }
          ],
          "done": "搜一首歌能出结果、点开能播放，就是装好了"
        }
      ],
      "url": "https://github.com/maotoumao/MusicFree"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "deploy": ["read"],
      "title": "更新多年的科技爱好者周刊",
      "stars": "106,361",
      "today": "58",
      "body": "《科技爱好者周刊》是阮一峰每周五更新的一篇文章，汇总一周内看到的科技新闻、工具、资源和值得读的文章链接，已经坚持了很多年，不用订阅、不用付费，打开仓库就能看。",
      "explain": "这里的「周刊」不是要买的杂志，就是这个人每周固定写的一篇文章，持续更新了很多年，属于打开随手翻几眼、了解下行业动态的轻量阅读。",
      "opinion": "自学阶段容易闷头只看自己手头的东西，这种周刊式的汇总能顺手扫一眼行业里在发生什么、有什么新工具，花不了多少时间。不是非看不可，但顺手翻一下成本很低。📱 手机上：能看——就是普通网页，手机浏览器打开就行，不挑设备也不用装什么。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库主页 [ruanyf/weekly](https://github.com/ruanyf/weekly)，首页 README 就是最新一期内容" },
            { "text": "想翻以前的期数，去仓库里的 `docs` 文件夹找对应期号的文件" }
          ],
          "done": "打开页面能看到当期内容，就行了"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    }
  ]
};
