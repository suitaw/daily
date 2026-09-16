DAILY_DATA["github/2026-09-15"] = {
  "date": "2026-09-15",
  "highlight": "ayghri/i-have-adhd 这个 Claude Code 技能包一周涨了 1.7 万星，两条命令装完能让 AI 回答不再绕圈子、直接甩结论，你天天用 Claude Code 写代码，装一个立刻有感觉。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "ayghri/i-have-adhd",
      "title": "让 Claude Code 少说废话、直接给结论的技能包",
      "lang": "Shell",
      "stars": "45,426",
      "week": "17,658",
      "body": "一个装进 Claude Code 的技能包，核心是逼着 AI 回答问题时先给可执行的步骤，不绕开场白、不说\"希望这对你有帮助\"这类客套话，多步骤任务会自动编号。",
      "explain": "这里的\"技能\"跟你之前装过的 superpowers、ponytail 是同一类东西——给 Claude Code 用的规则说明文件，装上后它会在合适的时候自动照着做。",
      "opinion": "你平时用 Claude Code 干活，如果嫌它有时候话太多、正事说得慢，这个装上立刻能感觉到差别；两条命令就能装好，卸载也很简单，随手试一下成本很低。📱 手机上：可以，跟你之前装过的技能包一样是文本形式的插件，不需要编译，Termux 里装法和电脑一样。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入（不是 shell 命令，如果因为网络问题失败，确保代理已经开着再重试）：",
              "code": "claude plugin marketplace add ayghri/i-have-adhd\nclaude plugin install i-have-adhd@i-have-adhd"
            },
            {
              "text": "装完重启 Claude Code，输入斜杠命令试一下：",
              "code": "/i-have-adhd"
            }
          ],
          "done": "输入 `/i-have-adhd` 后 Claude Code 有反应（提示技能已触发），之后它的回答风格会变得更直接。"
        }
      ],
      "url": "https://github.com/ayghri/i-have-adhd"
    },
    {
      "emoji": "🛠",
      "repo": "localsend/localsend",
      "title": "手机和电脑之间局域网传文件，苹果 AirDrop 的开源平替",
      "lang": "Dart",
      "stars": "91,313",
      "today": "251",
      "body": "一个开源的跨平台文件传输工具，手机和电脑在同一个 WiFi 下就能互相发文件、发文字，不用联网、不用登录账号、不经过任何服务器中转。安卓、Windows、Mac、iOS、Linux 都有官方版本。",
      "explain": "「AirDrop」是苹果设备之间隔空传文件的功能，只能苹果用苹果；这个项目做的是同样的事，但安卓、Windows 这些非苹果设备也能用。",
      "opinion": "你平时手机 Termux 写代码、电脑上也要用，代码、截图、日志文件经常要来回传，这个比用微信传给自己更快也更私密（不经过第三方服务器），装一个常驻在两边很实用。📱 手机上：可以，官方直接有安卓 App，Play Store 打不开就用 F-Droid 或 GitHub Releases 里的 APK。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（安卓）",
          "steps": [
            {
              "text": "国内一般打不开 Google Play，改用 F-Droid（浏览器打开下面地址）：",
              "code": "https://f-droid.org/packages/org.localsend.localsend_app/",
              "after": "或者去 [GitHub Releases](https://github.com/localsend/localsend/releases) 页面下载 APK，打不开就先开代理。"
            },
            {
              "text": "下载完点开安装包，手机提示\"允许安装未知来源应用\"时点允许。"
            }
          ]
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            {
              "text": "用 winget 一条命令安装：",
              "code": "winget install LocalSend.LocalSend",
              "after": "下载慢或失败就先开代理，或者去 [GitHub Releases](https://github.com/localsend/localsend/releases) 页面手动下载安装包。"
            }
          ],
          "done": "手机和电脑都打开 LocalSend 后，两边能在\"附近的设备\"里看到对方，选一个文件发送，另一边能收到。"
        }
      ],
      "url": "https://github.com/localsend/localsend"
    },
    {
      "emoji": "🤖",
      "repo": "alibaba/open-code-review",
      "title": "命令行里跑的 AI 代码审查工具",
      "lang": "Go",
      "stars": "25,680",
      "week": "2,709",
      "body": "一个命令行工具，读取你项目里 Git 的改动（diff），交给大模型逐行生成审查意见，能挑出潜在的 bug 和问题点，也能对整个文件做审查，不需要 Docker、不需要复杂的服务器环境，装完配好 API Key 就能在自己电脑上用。",
      "explain": "「Git diff」是你改代码前后的差异对比，就是你在 GitHub 上常看到的那种红绿对照。这个工具做的事，是把这份对比丢给大模型，让它帮你像同事一样挑毛病。",
      "opinion": "你自己写单文件小工具，平时可能没人帮你 review 代码，这个能在自己电脑上顶一个\"AI 同事\"的角色，改完代码跑一下，看看有没有明显漏洞；具体能不能填豆包、DeepSeek 的 API Key 文档没写清楚，装完在 `ocr config provider` 里自己看一眼选项，很可能支持填自定义的 OpenAI 兼容地址（豆包、DeepSeek 官方都提供这种），不确定就先试。📱 手机上：不保证，它给 Linux 提供的是编译给普通 Linux（glibc）用的二进制文件，Termux 是安卓自己的 bionic 系统库，跟普通 Linux 不是一回事，大概率装不上或跑不起来，建议先在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "全局安装（走 npm 官方源，国内一般能直连，不用开代理）：",
              "code": "npm install -g @alibaba-group/open-code-review"
            },
            {
              "text": "配置用哪个大模型、填 API Key（用自己新申请的 Key）：",
              "code": "ocr config provider\nocr config model"
            },
            {
              "text": "在你自己的项目文件夹里，审查当前改动：",
              "code": "ocr review"
            }
          ],
          "done": "`ocr review` 跑完后，命令行里能看到针对具体代码行的审查意见。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "🤖",
      "repo": "Tencent/WeKnora",
      "title": "把一堆文档变成能问答的 AI 知识库",
      "lang": "Go",
      "stars": "23,224",
      "week": "1,460",
      "body": "腾讯出的开源知识管理平台，能把 PDF、Word 这些文档丢进去，自动整理成一个能直接提问的知识库，背后是搜索资料再回答（RAG）加一个会自己规划怎么找答案的推理 Agent，支持接 20 多家大模型（含 DeepSeek、通义千问），本地模型 Ollama 也能接。",
      "explain": "「RAG」是让大模型回答前先去翻一份你自己的资料库，而不是纯靠它自己记的东西瞎编。「ReAct」可以理解成让 AI 自己想\"下一步该查什么\"，而不是一次性把所有资料都塞给它。",
      "opinion": "你在学着自己调 API 做 Agent，这种别人做好的 RAG 知识库项目很值得跑起来试试、翻翻它怎么设计\"文档进、问答出\"这条流程，对你自己写类似的小工具是个现成参考；它面向的是团队场景，功能比你需要的复杂得多，抱着\"看设计思路\"的心态用，不用追求把所有功能用全。📱 手机上：装不了，需要 Docker，Termux 没有；在电脑上用 Docker Desktop 跑起来，再用手机浏览器访问电脑的地址就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装 Docker Desktop）",
          "steps": [
            {
              "text": "如果电脑还没装 Docker，先去官网下载装好 Docker Desktop：[docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)"
            },
            {
              "text": "打开 PowerShell，下载代码并启动（下载慢或失败就先开代理）：",
              "code": "git clone https://github.com/Tencent/WeKnora.git\ncd WeKnora\ncp .env.example .env\ndocker compose pull\ndocker compose up -d"
            },
            {
              "text": "在 `.env` 文件里填入自己的大模型 API Key（DeepSeek、豆包官网都能申请），再打开浏览器：",
              "code": "http://localhost"
            }
          ],
          "done": "能打开网页界面，上传一个文档后能对着它提问、拿到回答。"
        }
      ],
      "url": "https://github.com/Tencent/WeKnora"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "title": "写了 8 年的科技爱好者周刊",
      "stars": "102,514",
      "today": "77",
      "body": "一份从 2018 年写到现在、每周五更新的科技周刊，内容涵盖科技动态、行业分析、值得一试的软件和工具，纯 Markdown 文本，没有软件本体，是持续更新的阅读材料。",
      "explain": "这个跟之前推荐过的《前端周刊》是同一类东西——固定周期更新、有人帮你筛选过的内容合集，只是这份涉猎更广，不止前端。",
      "opinion": "你是自学路线，平时接触的技术圈子信息可能没那么系统，这种坚持了 8 年的周刊是个稳定的信息来源，跟着看几个月，对整个技术圈在聊什么会有更完整的概念，不是刚需，但性价比很高。📱 手机上：不用装，手机浏览器直接看 GitHub 页面就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "浏览器打开仓库的 `docs` 文件夹，按期数找到最新一期。"
            },
            {
              "text": "想跟着追更新，可以点 GitHub 页面右上角的 Watch，方便回来翻。"
            }
          ],
          "done": "每周五更新一次，看不过来就先收藏，等有空的时候翻。"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    },
    {
      "emoji": "💰",
      "repo": "mootdx/mootdx",
      "title": "读取国内股票行情数据的 Python 工具包",
      "lang": "Python",
      "stars": "2,284",
      "today": "7",
      "body": "一个 Python 库，封装了读取通达信（国内一款老牌炒股软件）行情数据的接口，能拿到历史K线、实时报价、财务数据这些，官方写明\"只作学习交流，不得用于任何商业目的\"，只能查数据，不带自动下单功能。",
      "explain": "「通达信」是国内很多股民在用的一款行情看盘软件，这个项目相当于绕过它的界面，直接用代码把里面的数据抓出来。「K线」就是股价走势图上那种一根一根的柱状图，记录一段时间里的开盘价、收盘价、最高最低价。",
      "opinion": "你在学 Python 入门、也在学理财，这个项目能当一个练手素材——用你正在学的 Python 语法，去拿一份真实的股票数据，跑一跑、打印出来，比对着教材敲练习题更有实感；它只是读数据的工具，不是让你去炒股或自动交易，看行情数据本身不代表投资建议，真金白银的决策还是要靠自己判断，别指望靠它赚钱。📱 手机上：不保证，它依赖一个叫 mini-racer 的编译好的 JS 引擎库，Termux 上大概率没有对应的预编译包，跟你之前装 jiter 失败是同一类问题，建议直接在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "安装：",
              "code": "pip install mootdx"
            },
            {
              "text": "写几行代码试试读取效果（示例读取股票代码 600036 的行情）：",
              "code": "from mootdx.quotes import Quotes\n\nclient = Quotes.factory(market='std', multithread=True, heartbeat=True)\n\nclient.bars(symbol='600036', frequency=9, offset=10)"
            }
          ],
          "done": "命令行里能打印出一段股票的历史行情数据（一堆日期、价格数字）。"
        }
      ],
      "url": "https://github.com/mootdx/mootdx"
    }
  ]
};
