DAILY_DATA["github/2026-09-29"] = {
  "date": "2026-09-29",
  "highlight": "今天最想让你去试的是 AstrBot——能把 DeepSeek/豆包这类大模型接进QQ、微信、Telegram，变成一个能长期跑的AI机器人，比自己从零写一个聊天机器人省事很多。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "AstrBotDevs/AstrBot",
      "title": "接入QQ/微信/Telegram的AI机器人平台",
      "lang": "Python",
      "stars": "41,165",
      "today": "67",
      "body": "AstrBot是一个开源的AI Agent聊天平台，能把大模型接到QQ、微信、Telegram、飞书、钉钉、Discord等十几个即时通讯平台上，变成能聊天、执行任务的机器人。支持接豆包、DeepSeek、OpenAI、Claude等主流模型接口，还带MCP、知识库、插件市场这些进阶功能，官方也提供了内置的Web聊天界面和管理后台。今天在GitHub中文热门榜上冲到前列。",
      "explain": "MCP是让大模型能调用外部工具（比如查天气、发消息、跑代码）的通用协议；「插件市场」类似给这个机器人装应用商店，装个插件就能加新功能，不用自己写代码。",
      "opinion": "如果想做一个能长期挂着跑、又能接进自己常用聊天软件的AI机器人，这个项目基本把「接哪个平台、接哪个模型」这层脏活都封装好了，配上豆包或DeepSeek的Key就能用，比自己从零写一个聊天机器人省事很多。依赖装起来比较重，但电脑上问题不大，值得花点时间试。📱 手机上：大概率不行——它依赖`openai`、`anthropic`这两个Python库，两个库背后都要装`jiter`，Termux里编译不过去，建议直接用电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "需要 Python 3.12 及以上版本，用 uv 来装，不用自己一个个装依赖。",
          "steps": [
            { "text": "先装 uv（Windows PowerShell 里跑，下载慢或失败就先开代理）", "code": "powershell -c \"irm https://astral.sh/uv/install.ps1 | iex\"" },
            { "text": "用 uv 装 AstrBot 本体", "code": "uv tool install astrbot --python 3.12" },
            { "text": "初始化配置", "code": "astrbot init" },
            { "text": "启动", "code": "astrbot run", "after": "启动时终端日志里会打印一个随机密码，记下来；忘记了可以用 astrbot run --reset-password 重置" },
            { "text": "浏览器打开管理后台，用户名 astrbot，密码用上一步日志里的那个", "code": "http://localhost:6185" }
          ],
          "done": "能打开 http://localhost:6185 看到登录页并登进去，就是装好了；在「模型」里配上豆包/DeepSeek的Key，在「消息平台」里接上自己的QQ/Telegram，就能跑起来了。"
        }
      ],
      "url": "https://github.com/AstrBotDevs/AstrBot"
    },
    {
      "emoji": "🛠",
      "repo": "whyour/qinglong",
      "title": "给自己写的定时脚本配个网页管理面板",
      "lang": "TypeScript",
      "stars": "19,910",
      "today": "5",
      "body": "青龙是一个开源的定时任务管理平台，支持Python3、JavaScript、Shell、TypeScript写的脚本，能在网页上统一管理运行时间、环境变量、执行日志，不用再自己手写crontab、翻日志文件。今天在GitHub中文热门榜上有露出。本质上就是个带界面的定时任务调度器，什么脚本都能塞进去跑。",
      "explain": "「crontab」是Linux系统自带的定时任务功能，得在命令行手写时间表达式、日志还得自己去翻文件，不直观；青龙相当于给这套东西套了一层网页界面，加任务、看日志、改环境变量都能点按钮完成。",
      "opinion": "如果已经写了几个会定时跑的小脚本（比如抓点数据、发个提醒），装一个青龙能省掉自己维护crontab和日志的麻烦，网页上点一下就知道昨晚的任务跑没跑成功。功能对个人来说偏重，只跑一两个脚本用系统自带的定时任务可能更省事，不用非装不可。📱 手机上：不保证——官方文档写了不用Docker的npm安装方式，理论上Termux装好Node、Python3、pip之后能跑，但面板本身是照着Debian/Ubuntu环境写的，手机上会不会有奇怪的兼容问题没法保证，卡住就换电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，不用Docker）",
          "intro": "官方更推荐用Docker装，这里给的是不用Docker的npm方式。",
          "steps": [
            { "text": "全局安装青龙面板（走npm官方仓库，不用开代理）", "code": "npm install -g @whyour/qinglong" },
            { "text": "设置两个环境变量（PowerShell里，路径自己改成想放的位置）", "code": "$env:QL_DIR=\"D:\\qinglong\"\n$env:QL_DATA_DIR=\"D:\\qinglong\\data\"" },
            { "text": "启动", "code": "qinglong" },
            { "text": "浏览器打开面板", "code": "http://127.0.0.1:5700" }
          ],
          "done": "能打开登录页，首次访问会提示注册管理员账号，注册完登进去就算装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证能成）",
          "steps": [
            { "text": "全局安装青龙面板（走npm官方仓库，不用开代理）", "code": "npm install -g @whyour/qinglong" },
            { "text": "设置环境变量", "code": "export QL_DIR=~/qinglong\nexport QL_DATA_DIR=~/qinglong/data" },
            { "text": "启动", "code": "qinglong" },
            { "text": "手机浏览器打开面板", "code": "http://127.0.0.1:5700", "after": "装到一半报错或者卡住不动，大概率是面板脚本跟Termux环境不兼容，直接放弃换电脑装" }
          ],
          "done": "能打开登录页，就说明基本跑起来了。"
        }
      ],
      "url": "https://github.com/whyour/qinglong"
    },
    {
      "emoji": "🎨",
      "repo": "xifangczy/cat-catch",
      "title": "揪出网页里的视频/音频直链，一键下载",
      "lang": "JavaScript",
      "stars": "22,058",
      "today": "20",
      "body": "一个嗅探当前网页资源的浏览器扩展，能把页面里加载过的图片、音频、视频（包括M3U8、MPD这类分段流媒体）直链列出来，点一下就能下载，不用再找专门的下载网站或者装乱七八糟的下载器。Chrome、Edge、Firefox都有商店版本，Edge安卓版也能装。开发者特别提醒过，网上有些改过、塞了广告的「套壳」版本，装的时候认准官方链接。",
      "explain": "「M3U8/MPD」是很多视频网站真正用来传视频的格式，不是一个单独的mp4文件，而是拆成很多小段清单，普通「另存为」抓不到，得靠这种能解析清单的工具才能凑出完整视频。",
      "opinion": "平时想留一份看过的教学视频、直播录像或者某个页面里的音频素材，这个扩展比到处搜「XX视频下载网站」靠谱，而且不用为了下载一个视频专门装个软件。装好之后基本不用配置，点开图标看当前页面抓到了哪些资源就行。📱 手机上：安卓版Edge支持装浏览器扩展，可以直接用；iOS的Safari不支持第三方扩展装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / 📱 手机（Edge安卓版）",
          "steps": [
            { "text": "Chrome用户去应用商店搜索安装", "code": "https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb" },
            { "text": "Edge用户（电脑或安卓版Edge App）去微软商店安装", "code": "https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci" },
            { "text": "Firefox用户去官方商店安装", "code": "https://addons.mozilla.org/addon/cat-catch/" },
            { "text": "商店打不开就去Releases页面下载crx文件，浏览器扩展管理页开启「开发者模式」后把crx文件拖进去", "code": "https://github.com/xifangczy/cat-catch/releases", "after": "只从这个GitHub官方地址下载，网上搜到的第三方安装包可能被塞了广告" }
          ],
          "done": "浏览器工具栏能看到猫爪图标，打开一个视频网页点一下图标，能看到列出的资源列表，就是装成功了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "📚",
      "repo": "byoungd/up",
      "title": "一份用AI加速学习和做成事的实践指南",
      "lang": "JavaScript",
      "stars": "64,660",
      "today": "327",
      "body": "一本持续更新的开放书稿，围绕「怎么用英语连接到更大的信息世界」「AI时代怎么学习和交付真实项目」「怎么做个人成长复盘」这三块内容展开，作者称之为「让AI替你干活，而不是替你思考」的实践方法论，里面配了学习状态卡、九十天计划这类可以直接照着用的工作表模板。CC BY-NC 4.0协议开放，任何人都能免费看。",
      "explain": "「复盘」是做完一件事之后回头梳理哪里做得好、哪里可以改进，是个学习方法而不是技术名词；书里说的「保留证据」是指做完一个项目要留下能证明自己做过、学到了什么的记录（代码、笔记、截图都算），方便以后回头看进步。",
      "opinion": "不是一本手把手教技术的教程，更像是一套「怎么用AI和自己的时间做成真事」的方法参考，适合在自己用AI写工具遇到瓶颈、不知道下一步该学什么的时候翻一翻，看看别人是怎么拆解问题、安排学习节奏的；里面的模板可以直接拿来用，不用照单全收整本书的观点。免费、CC BY-NC协议，看看无妨，别指望看完就能立刻变厉害。📱 手机上：能看，纯文字内容，手机浏览器打开GitHub页面或者下载PDF/EPUB用看书App读都行，不用装任何开发工具。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开仓库首页阅读", "code": "https://github.com/byoungd/up" },
            { "text": "想离线看，就去仓库里或Releases找PDF/EPUB下载，导到手机看书App里" }
          ],
          "done": "能打开内容、看到目录结构，就行了。"
        }
      ],
      "url": "https://github.com/byoungd/up"
    },
    {
      "emoji": "💰",
      "repo": "glink25/Cent",
      "title": "网页记账，说一句话AI帮你记一笔",
      "stars": "1,200",
      "body": "一个开源的记账网页应用，长按记账按钮说一句话，AI就能自动识别出金额、分类和备注填进去，还能导入微信/支付宝账单、按周期自动生成订阅账单、支持三十多种货币换算，官方提供了能直接打开用的在线版本，也可以自己部署一份。",
      "explain": "「周期记账」就是像房租、视频会员这种每个月固定要交的钱，设置一次以后系统自动按时帮你记一笔，不用每次手动敲。",
      "opinion": "记账这件事最容易半途而废的原因就是「记起来太麻烦」，这个项目把「说一句话自动填一笔」的门槛降得比较低，配合导入微信/支付宝账单，适合刚开始想养成记账习惯、又懒得每笔手动分类的人。在线版免费直接用，语音识别这步大概率要联网调用官方自己的服务，具体隐私政策没细看，介意的话就只用手动记账部分，或者自己部署一份。📱 手机上：能用，就是普通网页，手机浏览器打开在线版本就能记账，不用装App，也不用碰Termux。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（用在线版，不用部署）",
          "steps": [
            { "text": "浏览器直接打开在线版", "code": "https://cent.linkai.work" },
            { "text": "首次使用按提示建个账本，开始记第一笔" }
          ],
          "done": "能打开首页、记一笔支出能保存下来看到统计，就是能用了。"
        }
      ],
      "url": "https://github.com/glink25/Cent"
    }
  ]
};
