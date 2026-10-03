DAILY_DATA["github/2026-10-03"] = {
  "date": "2026-10-03",
  "highlight": "今天最值得动手试的是 `obra/superpowers`——专门给 Claude Code 这类编码 Agent 用的技能框架，一天内又涨了 500 多星。在 Claude Code 对话框里敲一行命令就能装上，拿它身上的开发方法论检验一下自己平时跟 AI 对话的习惯。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "title": "Claude Code 技能框架一天涨了500多星",
      "lang": "Shell",
      "stars": "294,460",
      "today": "556",
      "body": "`obra/superpowers`是一套给编码 Agent 用的「技能包」框架，把需求澄清、设计评审、测试驱动开发等一整套开发方法论拆成一个个可复用的技能，教 Agent 在写代码的各个阶段该怎么做。项目星标已经冲到29万+，今天一天又涨了556颗。目前官方支持 Claude Code、Cursor、Devin CLI 等十几种编码 Agent 平台，各自的安装命令不一样。",
      "explain": "「Agent 技能」可以理解成给 AI 装的一套作业流程说明书：遇到新需求先做什么、设计评审怎么问、写完代码怎么自查，Agent 照着技能文件一步步执行，而不是每次都临时发挥。「SDLC」是「软件开发生命周期」的缩写，指从需求到上线的整套流程。",
      "opinion": "你平时用 Claude Code 写单文件小工具，这类技能包相当于把别人踩过的开发套路直接装进你的 Agent，省得自己从头摸索怎么跟 AI 对话才靠谱。装上以后可以挑几个技能试试，看跟你现在的习惯比起来是不是真的更靠谱，不好用随时能卸载。📱 手机上：是在 Claude Code 对话框里敲命令安装的技能包，不涉及本地编译，手机 Termux 跑 Claude Code 一样能装。",
      "install": [
        {
          "title": "安装步骤 · 📱💻 两边通用（在 Claude Code 里输入命令）",
          "steps": [
            {
              "text": "在 Claude Code 对话框里直接输入安装命令：",
              "code": "/plugin install superpowers@claude-plugins-official",
              "after": "如果提示找不到这个市场，先注册一下：`/plugin marketplace add anthropics/claude-plugins-official`，再重新执行上面的安装命令。"
            },
            {
              "text": "（可选）官方市场装不上的话，可以换作者自己维护的市场：",
              "code": "/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace"
            }
          ],
          "done": "装完后在 Claude Code 里问一句「现在有哪些 skills」，能看到 superpowers 相关的技能被列出来，就算装好了（README 没写具体的确认命令，这步不保证一定有提示）。"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🤖",
      "repo": "TencentCloud/Octop",
      "title": "腾讯云出了个自托管多智能体助手",
      "lang": "Python",
      "stars": "6,393",
      "week": "1,425",
      "body": "`TencentCloud/Octop`是腾讯云放出的开源自托管 AI 助手，支持多用户、多智能体：一个管理员账号能给全家人分配不同的智能体，还有`AgentTeams`功能让多个 Agent 接力处理复杂任务。项目今年7月才建仓，这周新增1,425颗星，目前6千多星。LLM 这块接的是通用的`OpenAI兼容API`和阿里`DashScope`，不是只能绑死 OpenAI。",
      "explain": "「自托管」是说你自己找台电脑或服务器把程序跑起来，不依赖别人家的云服务。「多智能体（multi-agent）」是说一个任务拆给好几个不同角色的 AI 分别处理，比如一个查资料、一个写报告，再接力汇总。",
      "opinion": "你做 AI 小工具主要调豆包、DeepSeek 的 API，这个项目正好支持接`OpenAI兼容`接口，理论上能直接填 DeepSeek 的 key 试试效果，拿它当一个现成的多智能体助手参考实现来看代码也值得。不过它要配 Redis、Postgres 这类数据库服务，装起来比单文件小工具麻烦不少，建议先在电脑上跑一遍再决定要不要深入。📱 手机上：装脚本本身能跑，但还要配数据库和浏览器自动化组件，Termux 上折腾这些比较费劲，这篇就只写电脑的装法。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows / macOS / Linux）",
          "intro": "官方提供一键安装脚本，Windows 和 macOS/Linux 命令不同。",
          "steps": [
            {
              "text": "macOS / Linux 终端执行：",
              "code": "curl -fsSL https://finnie-1258344699.cos.ap-guangzhou.myqcloud.com/octop/install.sh | bash"
            },
            {
              "text": "Windows 用 PowerShell 执行：",
              "code": "irm https://finnie-1258344699.cos.ap-guangzhou.myqcloud.com/octop/install.ps1 | iex",
              "after": "下载慢或失败就先开代理再试。"
            },
            {
              "text": "初始化配置和数据库：",
              "code": "octop init"
            },
            {
              "text": "启动服务：",
              "code": "octop run"
            },
            {
              "text": "打开浏览器访问本机的 Octop 页面（具体地址以`octop run`的输出为准），在设置里填入 LLM 服务商的 API Key（选`OpenAI兼容`可以填 DeepSeek 等国内 key）。"
            }
          ],
          "done": "能在网页里跟 AI 助手对话，并新建不同角色的 Agent，就算装成功了。"
        }
      ],
      "url": "https://github.com/TencentCloud/Octop"
    },
    {
      "emoji": "🛠",
      "repo": "qjfoidnh/BaiduPCS-Go",
      "title": "百度网盘命令行工具支持分享链接秒传转存",
      "lang": "Go",
      "stars": "5,686",
      "today": "2",
      "body": "`qjfoidnh/BaiduPCS-Go`是百度网盘的命令行客户端，在原版基础上加了分享链接、秒传链接转存的功能，上传下载、离线下载、多账号登录都能在命令行里搞定。Go 语言写的，提供 Windows/macOS/Linux 各平台的预编译程序，Linux 版本也有`arm64`。",
      "explain": "「秒传」是百度网盘的特性：如果网盘里已经有别人传过完全一样的文件，你不用真上传，靠文件指纹「秒传」过去就行，省流量。「Cookies」是浏览器里登录网盘后保存的身份凭证，程序靠它模拟你已登录的身份操作网盘，不用在命令行里重新输密码。",
      "opinion": "手机或电脑上要批量传文件、管几个百度网盘账号倒腾文件，这个工具比网页端顺手，命令行还能配合你自己写的小工具自动化。不过要先去浏览器登录网盘拿 Cookies，这步稍微麻烦一点。📱 手机上：Linux arm64 的预编译程序 Termux 里能直接跑，不用编译，加个执行权限就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑",
          "intro": "两边都是下载预编译程序直接运行，命令按平台略有不同。",
          "steps": [
            {
              "text": "打开 [Releases 页面](https://github.com/qjfoidnh/BaiduPCS-Go/releases)，手机 Termux 下载`linux-arm64`的 zip，电脑 Windows 下载对应的`windows`zip。"
            },
            {
              "text": "（仅手机 Termux）如果还没装解压工具，先装一下：",
              "code": "pkg install unzip"
            },
            {
              "text": "解压并给程序加执行权限（文件名以你下载到的版本号为准）：",
              "code": "unzip BaiduPCS-Go-v4.0.2-linux-arm64.zip\ncd BaiduPCS-Go-v4.0.2-linux-arm64\nchmod +x BaiduPCS-Go"
            },
            {
              "text": "浏览器登录 https://pan.baidu.com ，按 F12 打开开发者工具的 Network 面板，刷新页面随便点一个请求，复制请求头里`Cookie`的值。"
            },
            {
              "text": "用复制到的 Cookies 登录（Windows 把`./BaiduPCS-Go`换成`BaiduPCS-Go.exe`）：",
              "code": "./BaiduPCS-Go login -cookies=\"粘贴你复制的Cookie值\""
            }
          ],
          "done": "执行`./BaiduPCS-Go ls`能列出网盘根目录下的文件，就说明登录成功、装好了。"
        }
      ],
      "url": "https://github.com/qjfoidnh/BaiduPCS-Go"
    },
    {
      "emoji": "📚",
      "repo": "jaywcjlove/reference",
      "title": "开发者技术速查手册网页直接看不用装",
      "stars": "15,252",
      "body": "`jaywcjlove/reference`收集了 Python、JavaScript、Go、React、Vue、Docker、Git 等各种技术的速查表（cheat sheet），常用命令、语法点整理在一页纸里，免费开源，15,252颗星。打开网页搜你要查的技术名字就行，不用装任何东西。",
      "explain": "「速查表（cheat sheet）」就是把一个技术里最常用的命令、语法浓缩成一页，比翻官方文档快，适合学到一半忘了语法细节时现查。",
      "opinion": "你在学 Python，这种速查表比教程书更适合当「字典」用：学完一个语法点记不住细节时搜一下比重新翻书快。缺点是只给命令和语法片段，不会像教程一样从头教你概念，适合查漏补缺不适合当第一本入门资料。📱 手机上：就是个网页，手机浏览器直接打开就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "手机或电脑浏览器直接打开 https://jaywcjlove.github.io/reference ，搜索框里输入你要查的技术名字（比如`python`、`git`）。"
            }
          ],
          "done": "能搜到对应的速查表内容，就是看成了。"
        }
      ],
      "url": "https://github.com/jaywcjlove/reference"
    },
    {
      "emoji": "💰",
      "repo": "beancount/beancount",
      "title": "纯文本复式记账工具Python写的",
      "lang": "Python",
      "stars": "6,043",
      "body": "`beancount`是一个用纯文本文件记账的工具：把每笔收支写成固定格式的文本，它帮你按复式记账法算出每个账户的余额、分类汇总，还支持自己写脚本处理数据。核心是 Python 写的，6,043颗星，今年8月还有更新，算是记账类开源项目里的老牌项目。配套的网页界面`Fava`能把记完的账可视化展示出来。",
      "explain": "「复式记账」是会计记账的标准方法：每笔钱花出去，要同时记录它去了哪个账户、从哪个账户出的，两边数字相等，这样能自动发现记错账的地方，比简单流水账更不容易出错，银行、公司财务基本都用这套方法。",
      "opinion": "你在学个人理财，这个项目能让你真正搞懂「复式记账」是怎么一回事——不是用 App 点点按钮，而是自己写文本、跑脚本算余额，会强迫你理解每一笔钱的来龙去脉。缺点是没有图形界面，纯命令行加文本文件，对新手不算友好，得先啃一下官方教程才能上手；只是想简单记账的话，用现成记账 App 可能更省事。📱 手机上：beancount 本体是纯 Python 包，Termux 上`pip install beancount`大概率能直接装上预编译的 wheel，不用编译。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "命令在手机 Termux 和电脑上是一样的。",
          "steps": [
            {
              "text": "安装 beancount 本体：",
              "code": "pip install beancount",
              "after": "不保证一定成功：如果你的 Python 版本太新，PyPI 上可能还没对应的预编译包，命令行会报错提示要本地编译。Termux 上遇到这种情况可以先跑`pkg install clang make`装上编译工具再重试一次。"
            },
            {
              "text": "（可选）装网页可视化界面 Fava，方便看报表：",
              "code": "pip install fava"
            },
            {
              "text": "新建一个文本文件（比如`my.beancount`），按官方语法教程（https://beancount.github.io/docs/beancount_language_syntax.html）里的格式写第一笔账。"
            },
            {
              "text": "用自带的检查工具验证格式对不对：",
              "code": "bean-check my.beancount"
            },
            {
              "text": "（可选）启动 Fava 网页界面看报表：",
              "code": "fava my.beancount",
              "after": "命令行会提示一个本机网址（通常是 http://127.0.0.1:5000），浏览器打开那个地址就能看到账本报表。"
            }
          ],
          "done": "`bean-check`跑完没有报错，就说明这笔账记对了格式；打开 Fava 网页能看到余额和图表，就说明装好了。"
        }
      ],
      "url": "https://github.com/beancount/beancount"
    },
    {
      "emoji": "🎨",
      "repo": "harry0703/MoneyPrinterTurbo",
      "title": "一句话生成带配音字幕的AI短视频",
      "lang": "Python",
      "stars": "128,090",
      "week": "2,533",
      "body": "`harry0703/MoneyPrinterTurbo`输入一个主题或关键词，就能自动写脚本、配音、配素材、加字幕、合成背景音乐，最后出一个横屏/竖屏/方形的成品短视频。支持接 DeepSeek、Kimi、OpenAI、Claude、Gemini 等好几家大模型。这周新增2,533颗星，目前12.8万颗星。",
      "explain": "「配音」这一步用的是文字转语音（TTS）技术，把脚本文字自动读出来变成人声音频，不用自己录。",
      "opinion": "你平时调 LLM API 做小工具，这个项目可以当一个「多个 AI 能力拼起来做成品」的参考案例看——脚本靠 LLM 写，配音靠 TTS，画面靠素材匹配，流程怎么串起来的代码值得翻一翻。真要用它批量产视频发平台，内容质量和各平台的 AI 生成内容规范自己把关。📱 手机上：装不了，它依赖`openai`这个 SDK，背后牵连的`jiter`库在 Termux 上编译不过，而且合成视频要用`ffmpeg`跑`moviepy`，手机上折腾这些不现实，这个项目建议只在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows 一键包最简单）",
          "intro": "官方给了几种装法，这里写最省事的 Windows 一键包和通用的 Docker 方式。",
          "steps": [
            {
              "text": "Windows 最简单：去 [Releases 页面](https://github.com/harry0703/MoneyPrinterTurbo/releases) 下载一键启动的`.7z`压缩包。",
              "after": "GitHub 下载慢或打不开就先开代理再试。"
            },
            {
              "text": "解压后双击里面的`start.bat`，等它自动打开网页界面。",
              "after": "首次启动会自动装一些东西，网络不好可能比较慢，耐心等。"
            },
            {
              "text": "（或者用 Docker，适合电脑上已经装了 Docker 的情况）克隆仓库再启动：",
              "code": "git clone https://github.com/harry0703/MoneyPrinterTurbo.git\ncd MoneyPrinterTurbo\ndocker compose -f docker-compose.release.yml up",
              "after": "同样，下载慢或失败就先开代理。"
            },
            {
              "text": "浏览器打开 http://127.0.0.1:8501 ，在左侧基础设置里选 LLM 服务商（选 OpenAI 兼容可以填 DeepSeek 的 key），填好 API Key。"
            }
          ],
          "done": "网页能正常打开，填完 API Key 后输入一个视频主题点生成，能跑出脚本和视频文件，就算装成功了。"
        }
      ],
      "url": "https://github.com/harry0703/MoneyPrinterTurbo"
    }
  ]
};
