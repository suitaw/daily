DAILY_DATA["github/2026-09-14"] = {
  "date": "2026-09-14",
  "highlight": "eSearch 一条 `winget install esearch` 就能装好，框选截图直接出离线 OCR 和翻译，你平时查英文文档、抄错误信息肯定用得上，今天最值得先装这个。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "heygen-com/hyperframes",
      "title": "写 HTML/CSS，一条命令导出成 MP4 视频",
      "lang": "TypeScript",
      "stars": "49,591",
      "week": "5,146",
      "body": "一个把 HTML、CSS、动画转成 MP4 视频文件的框架，专门给 AI Agent、命令行、在线编辑器这几种场景设计，同一份输入每次渲染出来的视频都一样（不会随机变化）。官方有在线体验版，也能在本地用命令行跑。\n🔗 [在线体验](https://www.hyperframes.dev/)",
      "explain": "这里说的「渲染」就是把网页代码变成一段能播放的视频文件。FFmpeg 是几乎所有视频软件背后都在用的一个转码引擎，你只用负责装好它，不用管它内部怎么工作。",
      "opinion": "你自己写的都是单文件 HTML + JS 小工具，这个项目走的是同一条路——用你已经会的网页技术画面、加动画，一条命令导出成视频，不用学剪辑软件。想给自己的 Agent 小工具录个演示视频、做条短视频素材时能省不少事；不确定值不值得装，可以先打开在线版 [hyperframes.dev](http://hyperframes.dev) 玩一下效果。📱 手机上：不保证，Termux 里 Node 版本够，但渲染这一步要靠 Puppeteer 控制一个无头 Chrome，安卓上大概率装不到能用的 Chromium，容易卡在这一步，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "确认电脑已经装好 Node.js 22 及以上版本，并装好 FFmpeg（Windows 上可以用 `winget install Gyan.FFmpeg`，装完记得重开一次终端）：",
              "code": "winget install Gyan.FFmpeg"
            },
            {
              "text": "初始化一个项目并本地预览（会自动下载需要的包，下载慢或失败就先开代理）：",
              "code": "npx hyperframes init my-video\ncd my-video\nnpx hyperframes preview"
            },
            {
              "text": "渲染成视频文件：",
              "code": "npx hyperframes render"
            }
          ],
          "done": "`preview` 能在浏览器里看到画面在动，`render` 跑完后项目文件夹里多出一个能正常播放的 `.mp4` 文件。"
        }
      ],
      "url": "https://github.com/heygen-com/hyperframes"
    },
    {
      "emoji": "🛠",
      "repo": "mksglu/context-mode",
      "title": "给 Claude Code 省\"记忆空间\"的插件",
      "lang": "TypeScript",
      "stars": "22,621",
      "week": "2,102",
      "body": "一个给 Claude Code 等 AI 编程助手用的插件，作用是不把读文件、跑命令产生的原始大段数据直接塞进对话的\"上下文\"里，官方说某些操作能把占用空间压缩到原来的 2% 左右，还能把当前会话的文件改动、跑过的命令这些记录存下来，方便下次接着干。",
      "explain": "AI 每次对话能\"记住\"的内容总量是有限的，这个上限业内叫\"上下文窗口\"，可以理解成一个内存条，塞满了要么开始丢内容、要么处理变慢变贵。这个插件干的事，就是别把没用的原始数据往这个内存条里塞。",
      "opinion": "你平时用 Claude Code 写代码，如果遇到过长对话变卡、变贵，或者聊到后面它像\"失忆\"一样忘了前面改过什么，这个插件是直接对症的；装的成本很低，不喜欢随时能卸载，可以先装上跑一阵子看有没有变化。📱 手机上：可以，Termux 里的 Node v26 满足它要求的 22.5 以上版本，在 Linux 上会自动用 Node 自带的数据库功能，不需要另外编译，不会碰到你之前装 jiter 那种编译失败的问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入（不是 shell 命令，如果因为网络问题失败，确保代理已经开着再重试）：",
              "code": "/plugin marketplace add mksglu/context-mode\n/plugin install context-mode@context-mode"
            },
            {
              "text": "装完让它自检一下环境：",
              "code": "/context-mode:ctx-doctor"
            }
          ],
          "done": "输入 `/context-mode:ctx-stats` 能看到上下文占用的统计数据。"
        }
      ],
      "url": "https://github.com/mksglu/context-mode"
    },
    {
      "emoji": "🛠",
      "repo": "xushengfeng/eSearch",
      "title": "截图 + 离线 OCR + 翻译 + 以图搜图合一的桌面工具",
      "lang": "TypeScript",
      "stars": "7,125",
      "today": "10",
      "body": "一个开源免费的桌面小工具，把框选截图、离线文字识别（OCR）、屏幕翻译、拿截图去谷歌/百度/Yandex 反搜图片、滚动截屏这些功能揉进一个软件里，Windows、Mac、Linux 都能装。",
      "explain": "「OCR」是让电脑\"看懂\"图片里的文字，把截图或照片里的字自动识别成能复制的文本。「离线」是说这些识别不用联网，也不会把你的截图传到别人服务器上。",
      "opinion": "你经常要看英文技术文档、截图存报错信息，这个工具能把\"截图 → 识别文字 → 翻译\"这一串操作压缩成几秒钟，比你现在可能用的几个分散的小工具方便，装一个常驻在电脑上很划算。📱 手机上：官方没有安卓版，只能在电脑上装；手机上暂时用系统自带的截图功能凑合，不用特意找替代品。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            {
              "text": "用 winget 一条命令安装：",
              "code": "winget install esearch",
              "after": "如果 winget 装不了，也可以去 [官网下载页](https://esearch-app.netlify.app/#download) 或者仓库的 Releases 页选对应系统的安装包，国内下载慢可以换用 GitHub 镜像站（比如 [ghfast.top](http://ghfast.top)）。"
            },
            {
              "text": "装完打开一次，按提示设置截图快捷键。"
            }
          ],
          "done": "按快捷键能弹出框选截图工具栏，框选后能看到 OCR、翻译、以图搜图这些按钮。"
        }
      ],
      "url": "https://github.com/xushengfeng/eSearch"
    },
    {
      "emoji": "📚",
      "repo": "asgeirtj/system_prompts_leaks",
      "title": "Claude、ChatGPT、Gemini 等大厂系统提示词合集",
      "lang": "JavaScript",
      "stars": "66,018",
      "today": "706",
      "body": "一份纯文本资料合集，收集了 Claude、ChatGPT、Gemini、Grok、Copilot 等各家 AI 产品实际用的\"系统提示词\"原文，按公司分文件夹存放，持续更新，不是能运行的软件。",
      "explain": "大模型正式回答你之前，产品方一般会先在后台塞给它一份\"总指令\"，规定它该扮演什么角色、哪些事不能做、说话该是什么语气，这份藏在幕后的指令就叫\"系统提示词\"。你自己写 Agent 时给模型开头设定的那段话，本质是同一个东西。",
      "opinion": "你自己动手写 Agent、调豆包/DeepSeek API 时，最花时间的往往是\"这段系统提示词到底该怎么写\"，翻一翻大厂实际在用的写法——怎么分条列规则、怎么限定语气、怎么处理边界情况——比自己瞎试更快摸到门道，直接抄格式改一改就能用在自己的项目里。📱 手机上：不用装，手机浏览器直接在 GitHub 上点开对应文件夹的 `.md` 文件看就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "浏览器打开仓库，按公司名文件夹（Anthropic、OpenAI、Google 等）找到你感兴趣的产品。"
            },
            {
              "text": "点开对应的 `.md` 文件，读里面的原始提示词，可以对照自己写 Agent 时的开场设定学着写。"
            }
          ],
          "done": "能打开任意一个 `.md` 文件看到成段的指令文本，就说明找对地方了。"
        }
      ],
      "url": "https://github.com/asgeirtj/system_prompts_leaks"
    },
    {
      "emoji": "💰",
      "repo": "QingHeYang/EasyAccounts",
      "title": "能用大模型自动记账的自托管记账软件",
      "stars": "351",
      "body": "一个中文家庭/个人记账软件，自己用 Docker 部署在自己的电脑或服务器上，数据不上传别人服务器；带一个\"AI 记账\"功能，需要自己配置大模型 API Key（支持多种大模型），可以直接说一句话（比如\"今天吃饭花了 35\"）让 AI 帮你识别金额、自动分类记账。",
      "explain": "这里的\"AI 记账\"跟你平时用豆包/DeepSeek API 做的事是同一种做法——把你说的一句大白话丢给大模型，让它帮你解析出金额、类别这些结构化信息，再存进数据库，只是这里应用在了记账这个场景上。",
      "opinion": "你在学个人理财入门，这个项目一方面能直接当记账工具用，另一方面它\"AI 记账\"这个功能本身就是一个现成的、调用大模型 API 解析自然语言的例子，装完之后翻翻它怎么设计这部分的提示词，对你自己写 Agent 小工具也有参考价值。星数不算多（351），是个小众项目，稳不稳定要自己装了才知道，抱着\"学习 + 试用\"的心态别期望太高；配置 API Key 时用自己新申请的 Key，账户密码这类敏感信息不要交给它。📱 手机上：装不了，需要 Docker 环境，Termux 没有 Docker；跟之前推荐过的 Wallos 一样，在电脑上用 Docker Desktop 跑起来，再用手机浏览器访问电脑的地址就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装 Docker Desktop）",
          "steps": [
            {
              "text": "如果电脑还没装 Docker，先去官网下载装好 Docker Desktop：[docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)"
            },
            {
              "text": "打开 PowerShell，下载代码并启动（下载慢或失败就先开代理）：",
              "code": "git clone https://github.com/QingHeYang/EasyAccounts.git\ncd EasyAccounts\ndocker compose up -d"
            },
            {
              "text": "浏览器打开：",
              "code": "http://localhost:10669",
              "after": "按提示注册自己的账号，然后去设置里填入自己申请的大模型 API Key（豆包、DeepSeek 官网都能申请），才能用 AI 记账功能。"
            }
          ],
          "done": "能打开网页、注册登录，手动添加一笔账能保存成功。"
        }
      ],
      "url": "https://github.com/QingHeYang/EasyAccounts"
    },
    {
      "emoji": "🎨",
      "repo": "JustVugg/colibri",
      "title": "用纯 C 语言硬啃超大模型的推理引擎，开眼界向",
      "lang": "C",
      "stars": "29,801",
      "today": "868",
      "body": "一个推理引擎，思路是把硬盘也当成显存/内存的一部分来用，需要用到哪块模型参数就临时从硬盘读，从而在普通硬件上跑本来装不下的超大 MoE 模型。整个引擎用纯 C 写成、不依赖任何第三方库，不需要 GPU 也能跑（有 GPU 会更快）。",
      "explain": "「MoE（混合专家模型）」可以理解成模型内部分成很多个\"专家小组\"，回答问题时只挑其中几组来干活，不用把整个巨大模型都算一遍，这样能省资源。「零依赖」是说这个软件自己实现了所有底层运算，不需要再装一堆别的软件包才能跑。",
      "opinion": "这是把\"根本装不进内存的超大模型\"硬塞进普通电脑跑的一种极客玩法，官方演示用的模型光下载就要 372GB、还要不少内存，对你现在的设备完全不现实，纯粹当\"开眼界\"看看别人怎么把存储、内存、显存拼起来当一个整体用，了解一下思路就好，不建议真的下载模型去跑。📱 手机上：软件本体是纯 C，理论上能在 Termux（aarch64）编译，但配套的模型动辄几百 GB，手机存储和网络都扛不住，别在手机上折腾。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（仅供了解，不建议真下载大模型）",
          "steps": [
            {
              "text": "下载官方预编译的发布包（版本号以 [Releases 页](https://github.com/JustVugg/colibri/releases) 为准，下面是示例文件名）：",
              "code": "mkdir colibri && tar xzf colibri-v1.8.0-linux-x86_64.tar.gz -C colibri && cd colibri"
            },
            {
              "text": "看一下工具自带的信息命令，不下载模型也能跑：",
              "code": "python3 coli info"
            }
          ],
          "done": "`coli info` 能正常打印出程序版本和用法说明，就算是看明白了，没必要真的去下载几百 GB 的模型文件。"
        }
      ],
      "url": "https://github.com/JustVugg/colibri"
    }
  ]
};
