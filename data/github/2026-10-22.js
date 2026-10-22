DAILY_DATA["github/2026-10-22"] = {
  "date": "2026-10-22",
  "highlight": "今日看点：最值得先装的是 Cloudflare 出的安全审计技能 security-audit-skill——装上后能让 Claude Code 这类 AI 编程助手帮你把代码仓库过一遍安全漏洞，对自己写公开网页小工具、容易手滑漏密钥的场景特别实用，手机电脑都能装。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "cloudflare/security-audit-skill",
      "deploy": ["phone", "pc"],
      "title": "让 AI 编程助手帮你做一次安全审计",
      "lang": "JavaScript",
      "stars": "36,472",
      "today": "2,012",
      "body": "Cloudflare 官方开源的一个 Claude Code 技能，装上后让 AI 编程助手扮演安全审计员，按侦察、找漏洞、验证、出报告几个阶段，对代码仓库做一遍结构化的安全检查，最后生成 `findings.json` 和 `REPORT.md`，列出发现的问题和严重程度。不限定只能在 Claude Code 里用，只要是支持工具调用和并行子代理的 AI 编程助手都能装。",
      "explain": "技能本身不是一个独立程序，是给 AI 编程助手额外装的一套「怎么做安全审计」的说明书加几个零依赖的校验脚本，装卸都很轻，不会动你原来的代码；这里说的漏洞主要是指代码里能被人利用的安全问题，比如密钥写死在代码里、该校验的输入没校验。",
      "opinion": "做的是公开托管在网上的网页小工具，项目一多难保不会哪天手滑把密钥、token 写死在代码里推上去，装这个让 AI 在 push 前扫一遍，能防住这类低级失误，比自己每次人工过一遍省心；先跑一次看看输出的报告再决定要不要常态化用。📱 手机上：装得上，整个技能只是文字规则加几个零依赖的 Node 脚本，用 Claude Code 自带的技能安装流程装，不需要编译任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "没装 Node.js 就先装：", "code": "pkg install -y nodejs" },
            { "text": "装这个技能（会连 GitHub，记得加代理）：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit --global", "after": "--global 装一次全局能用，不用每个项目再装一遍。" },
            { "text": "在 Claude Code 对话框里直接说：", "code": "对这个项目做一次安全审计" }
          ],
          "done": "跑完会在项目里生成 findings.json 和 REPORT.md，打开能看到列出来的问题和严重程度，就是装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "没装 Node.js 就先去 nodejs.org 下载 LTS 版装上。" },
            { "text": "打开终端装这个技能（下载慢或失败就先开代理）：", "code": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit --global" },
            { "text": "在 Claude Code 对话框里直接说：", "code": "对这个项目做一次安全审计" }
          ],
          "done": "跑完会在项目里生成 findings.json 和 REPORT.md，打开能看到列出来的问题和严重程度，就是装成功了。"
        }
      ],
      "url": "https://github.com/cloudflare/security-audit-skill"
    },
    {
      "emoji": "🤖",
      "repo": "HKUDS/CLI-Anything",
      "deploy": ["phone", "pc"],
      "title": "让 AI 把任意软件/脚本包装成它能调用的命令行工具",
      "lang": "Python",
      "stars": "55,931",
      "week": "3,681",
      "body": "给 Claude Code 装的一个「万物转命令行」技能：告诉它某个软件或脚本，它能照着生成一套命令行接口，让 AI 自己就能调用这个软件去干活，不用你再手写一堆胶水代码；仓库里还带了一个工具市场，收了社区已经封装好的工具（比如 GIMP、Blender 这些桌面软件的命令行封装）可以直接装来用。",
      "explain": "这里的命令行接口就是像 `git clone` 这种在终端里打字执行的命令；平时写的那些调 API 的小工具，AI 要是想调用别的软件帮它干活，得先有这么一层命令行接口，这个项目就是帮你（或者帮 AI）把这层接口自动生成出来。",
      "opinion": "做的是调 LLM API 的 Agent 和小工具，经常要让 AI 去操作别的程序，这个项目相当于省了自己手写命令行封装的功夫，装上之后直接让 Claude Code 按需要生成；用不到的工具（比如 GIMP、Blender 封装）不用装，只装自己需要的那部分就行，别为了凑全套装一堆没用的东西。📱 手机上：核心的 Claude Code 插件装得上，走的是标准插件安装流程；但里面封装 GIMP、Blender 这类桌面软件的具体工具，手机上没装对应软件自然用不上，属于正常现象。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "直接在 Claude Code 对话框里装。",
          "steps": [
            { "text": "加插件市场：", "code": "/plugin marketplace add HKUDS/CLI-Anything" },
            { "text": "装插件：", "code": "/plugin install cli-anything" },
            { "text": "想用的时候直接在对话里说要给哪个软件或脚本做命令行封装，比如：", "code": "帮我给这个 Python 脚本做一个命令行封装" }
          ],
          "done": "在 Claude Code 里跑 /plugin，能看到 cli-anything 已启用，就是装成功了。"
        }
      ],
      "url": "https://github.com/HKUDS/CLI-Anything"
    },
    {
      "emoji": "🎨",
      "repo": "debpalash/VoiceStudio",
      "deploy": ["pc"],
      "title": "本地跑的语音克隆/配音/转录工具箱",
      "lang": "Python",
      "stars": "80,414",
      "week": "15,125",
      "body": "一个本地跑的开源语音工具箱，定位是 ElevenLabs（一家收费的语音 AI 公司）的平替：能做语音克隆、配音、听写转录和有声书制作，官方说支持 646 种语言。有打包好的安装包（Windows/Mac/Linux）也能从源码跑，还提供本地 API 和 MCP，能接进 AI 编程助手里用。",
      "explain": "语音克隆是喂一段录音进去，让它学着模仿那个声音读别的文字；配音是给已经有画面、没声音（或要换声音）的视频配一条新语音轨。全程在自己电脑上跑，不用把声音数据传到哪家公司的服务器。",
      "opinion": "做视频翻译、配乐这类带音频的项目，这个工具能用来做配音轨或者克隆自己的声音读稿子，省得找别的在线服务；没有独立显卡也能用 CPU 跑，就是速度会慢不少，模型文件也挺大（装完要留出几 GB 空间），先跑着试试效果值不值得。另外这类克隆工具只该拿自己的声音练手，别拿别人的声音乱用。📱 手机上：装不了，这是要装桌面客户端、跑本地 AI 模型的工具，Termux 环境带不动。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 PowerShell，一键安装（下载慢或失败就先开代理）：", "code": "irm https://voicestudio.sh/install | iex", "after": "也可以去 Releases 页面直接下 .exe 装：https://github.com/debpalash/VoiceStudio/releases" },
            { "text": "装完照提示打开程序，第一次用会下载需要的模型文件，留够几 GB 空间。" }
          ],
          "done": "打开能看到语音克隆、配音的功能界面，就是装好了。"
        }
      ],
      "url": "https://github.com/debpalash/VoiceStudio"
    },
    {
      "emoji": "🛠",
      "repo": "RapidAI/RapidOCR",
      "deploy": ["pc"],
      "title": "把图片/扫描件里的文字识别出来",
      "lang": "Python",
      "stars": "8,251",
      "today": "35",
      "body": "一个开源免费的 OCR（图片转文字）工具，默认支持中英文识别，输入一张图片就能把里面的文字识别出来；Python 一行代码就能调用，支持好几种推理引擎可选，没有独立显卡用 CPU 跑的版本也能装。",
      "explain": "OCR 就是让程序「认字」——给一张图片或扫描件，它把里面能看到的文字识别成能复制、能搜索的文本，不是真的理解内容。",
      "opinion": "扫描版教材、拍照存的资料没有文字层、搜不了也复制不了，拿这个跑一遍能把图里的文字转出来，之后查资料、搬去别的地方用都方便很多；识别效果对印刷体比较准，手写字和版式复杂的图片未必理想，先拿一两页试试再决定要不要大批量跑。📱 手机上：不保证，它依赖的识别引擎是编译好的二进制库，Termux 环境大概率没有适配的安装包，装不上，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "确认装了 Python（3.8 以上），打开终端装这个库（下载慢或失败就先开代理）：", "code": "pip install rapidocr onnxruntime" },
            { "text": "新建一个 .py 文件，写几行代码跑一下（把路径换成你自己的图片）：", "code": "from rapidocr import RapidOCR\nengine = RapidOCR()\nresult = engine('test.jpg')\nprint(result)" }
          ],
          "done": "跑完能在输出里看到图片里识别出来的文字，就是装成功了。"
        }
      ],
      "url": "https://github.com/RapidAI/RapidOCR"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "deploy": ["read"],
      "title": "每月一期的中文开源项目推荐月刊",
      "stars": "183,536",
      "today": "216",
      "body": "一份坚持了很多年的中文开源项目月刊，专挑「有趣、入门级」的开源项目介绍，每月 28 号更新一期，还收了一些开源书籍和实战项目，适合想多逛逛开源世界但不知道从哪挑的人。",
      "explain": "入门级就是挑那些代码量不大、说明写得清楚、新手照着也能看懂在干什么的项目，不是随便拿个大项目糊弄。",
      "opinion": "现在主要盯着 AI 工具开发和几门正在学的东西，但平时多看看别的方向的开源项目，能攒点别的点子、也能顺便练练读别人代码的手感，一个月一期不费时间，当成零食读物刷一下就行，不用每条都认真研究。📱 手机上：能看，就是一份 Markdown 文档，手机浏览器直接打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开最新一期（第 126 期）：[HelloGitHub126.md](https://github.com/521xueweihan/HelloGitHub/blob/master/content/HelloGitHub126.md)", "after": "也可以去官网看阅读体验更好的版本：[hellogithub.com](https://hellogithub.com)" }
          ],
          "done": "打开能看到当期收录的项目列表和简介，就算看成了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    }
  ]
};
