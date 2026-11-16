DAILY_DATA["github/2026-11-16"] = {
  "date": "2026-11-16",
  "highlight": "今天最值得动手试的是 `alibaba/open-code-review`——一个命令行代码审查工具，装好之后跑一条命令就能让 AI 挑你改动里的问题，配合 Claude Code 的「代理模式」还不用额外申请模型 key，提交代码前多一层把关，成本很低。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "alibaba/open-code-review",
      "deploy": ["pc"],
      "title": "装一个命令行工具，让 AI 帮你看 diff 挑代码问题",
      "lang": "Go",
      "stars": "52,088",
      "today": "691",
      "body": "这是阿里开源的一个命令行代码审查工具，装好之后在项目目录里跑一条命令，就能让大模型读你的改动（git diff），给出具体到哪一行有问题的审查意见，而不是泛泛而谈。也支持只审某个文件、某次 commit，或者两个分支之间的差异。除了自己配置模型 key，还有一种「代理模式」，直接交给你正在用的 AI 编程工具（比如 Claude Code）用它自己的登录去审，不用额外填 key。",
      "explain": "「diff」就是改动前后的差异，git 工具本来就能看到哪几行加了、哪几行删了，这个工具是在这基础上让 AI 读懂这些改动再给意见。「代理模式」说的是不单独配置模型，而是借用你已经登录好的 AI 编程工具（比如 Claude Code）去完成审查这一步。",
      "opinion": "平时写单文件 HTML/JS 小工具，提交前自己过一遍 diff 容易漏看细节，用它跑一下能多一层把关，尤其是「代理模式」直接借用 Claude Code，不用再单独申请、填一个模型 key，上手成本很低。只是个命令行小工具，花几分钟装上试试没什么代价。📱 手机上：不保证，它靠 npm 装的时候会下载对应系统的二进制程序，Termux 这种手机上的 ARM64 Linux 环境有没有现成的包不确定，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "全局安装命令行工具（需要先装好 Node.js）：", "code": "npm install -g @alibaba-group/open-code-review", "after": "下载慢或失败就先开代理。" },
            { "text": "配置模型（会跟着提示一步步选供应商、填 API key）：", "code": "ocr config provider\nocr config model" },
            { "text": "进到你的项目目录，审查当前还没提交的改动：", "code": "ocr review" },
            { "text": "不想单独配置模型 key 的话，可以试试「代理模式」，交给已经登录好的 AI 编程工具去审：", "code": "ocr delegate preview", "after": "这个模式官方说明不算详细，具体效果以命令行里的实际输出为准。" }
          ],
          "done": "跑完 `ocr review` 能在终端里看到针对改动的具体审查意见，就算装好了。"
        }
      ],
      "url": "https://github.com/alibaba/open-code-review"
    },
    {
      "emoji": "🤖",
      "repo": "google/elephant-goldfish-model",
      "deploy": ["phone", "pc"],
      "title": "Claude Code 插件，写代码前先让 AI 挑你方案里没想到的坑",
      "lang": "Python",
      "stars": "19,769",
      "week": "5,060",
      "body": "这是 Google 放出的一个 Claude Code（也支持 Codex、Antigravity 等）插件，分两步走：先用一个角色跟你一起聊清楚要做的功能、写成一份方案文档，再换另一个「没看过前面聊天记录」的角色，只拿着方案文档和代码本身去挑里面没说清楚、容易被忽略的假设。用官方的话说是「用一只象去设计，用一条金鱼去审查」。",
      "explain": "这里说的「金鱼」角色，是故意不让它看到你和前一个角色聊了什么，只看最终写下来的方案文档，这样才能发现「写方案的人觉得理所当然，但文档里其实没写清楚」的地方——跟找人审东西时故意不告诉对方太多背景是类似的思路。",
      "opinion": "平时做单文件小工具，想法到代码之间常常是自己一个人连贯地想到哪写到哪，容易漏掉一些隐藏假设；用这个插件先走一遍「写方案 → 换个视角挑毛病」，能在真正动手改代码之前多一次检查，对改动稍微复杂一点的功能比较值。装的时候只是加个插件市场、装一个插件，成本不高，可以先拿一个具体功能试一次看顺不顺手。📱 手机上：能装，它就是几份文字说明文件，跟在电脑上用 Claude Code 装插件是同一套操作，在 Termux 里用 Claude Code 应该一样能跑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（用 Claude Code 的环境通用）",
          "steps": [
            { "text": "在 Claude Code 里添加插件市场：", "code": "claude plugin marketplace add google/elephant-goldfish-model", "after": "Termux 里这一步要连 GitHub，前面加一次性代理：`https_proxy=http://127.0.0.1:7890 claude plugin marketplace add google/elephant-goldfish-model`。" },
            { "text": "安装插件：", "code": "claude plugin install egm@egm" },
            { "text": "装完重新开一个 Claude Code 会话，让插件生效。" },
            { "text": "拿一个具体功能试着走一遍，先聊清楚要做什么：", "code": "/egm:egm-brainstorm 给这个项目加一个xxx功能" },
            { "text": "把方案写成文档：", "code": "/egm:egm-draft" },
            { "text": "让「金鱼」角色审查这份文档（把上一步生成的文件路径填进去）：", "code": "/egm:egm-review design_draft.md" }
          ],
          "done": "跑完 `/egm:egm-review` 能看到一份指出方案里没说清楚的地方的审查意见，就算用起来了。"
        }
      ],
      "url": "https://github.com/google/elephant-goldfish-model"
    },
    {
      "emoji": "🤖",
      "repo": "langbot-app/LangBot",
      "deploy": ["pc", "cloud"],
      "title": "自己搭一个能接多个 AI 模型、多个聊天软件的机器人平台",
      "lang": "Python",
      "stars": "19,019",
      "today": "33",
      "body": "这是一个自托管的 AI 聊天机器人平台，一边能接 OpenAI、DeepSeek、Gemini 等一堆模型供应商，另一边能接到 Discord、Telegram、QQ、微信客服、企业微信、飞书等一大堆聊天软件上，中间还带了一个知识库（可以喂自己的资料进去，让机器人回答时参考）、插件系统和一个网页管理后台。装好之后不用写代码，在网页上配置好模型和要接的平台就能跑起来。",
      "explain": "「知识库（RAG）」是指先把你自己的文档、资料喂给机器人，它回答问题时会先去这些资料里找相关内容，再结合大模型组织成答案，这样回答关于你自己东西的问题会更准，不是单纯凭大模型自己的知识瞎答。「MCP」是让 AI 连接外部工具、数据源的一套通用接口，这个平台也支持接 MCP。",
      "opinion": "平时都是自己从零写代码调用大模型接口做工具，这个项目相当于把「接模型 + 接聊天软件 + 管理后台」这一整套现成搭好了，想做一个能在 QQ/微信这类平台上用的机器人，直接配置比自己写一遍省不少事；配置里能填 DeepSeek 之类的模型供应商，跟平时用的接口方向一致。更适合放在云服务器上长期挂着跑。📱 手机上：不保证，它是个要装一堆依赖的 Python 项目，其中可能用到跟各家模型对接的库，在 Termux 里能不能装全不确定，建议先在电脑或云服务器上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器",
          "intro": "官方给了好几种装法，这里是最简单的一种，需要先装好 `uv`（Python 的包管理工具）。",
          "steps": [
            { "text": "先按 [uv 官方安装说明](https://docs.astral.sh/uv/getting-started/installation/) 装好 `uv`，然后运行：", "code": "uvx langbot", "after": "首次运行会自动下载需要的依赖，等它跑起来。" },
            { "text": "浏览器打开管理后台：", "code": "http://localhost:5300" },
            { "text": "首次打开会让你注册一个管理员账号，登录后在后台里添加模型供应商（填 API key）和要接的聊天平台，保存后机器人就能用了。" }
          ],
          "done": "浏览器能打开 http://localhost:5300 的管理后台，注册登录后能看到配置界面，就算装好了。"
        }
      ],
      "url": "https://github.com/langbot-app/LangBot"
    },
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "deploy": ["pc"],
      "title": "免费离线 OCR 工具，截图/扫描件一键转文字",
      "lang": "Python",
      "stars": "48,714",
      "today": "39",
      "body": "这是一个免费开源的离线文字识别（OCR）软件，不用联网就能把截图、批量图片、PDF 里的文字识别出来，PDF 还能直接导出成能搜索、能复制文字的版本。支持划区域忽略水印、页眉页脚，也能识别和生成二维码/条形码，界面是中文友好的。",
      "explain": "「OCR」就是把图片里的文字「认」出来变成能复制、能搜索的文本，比如拍一张纸面的照片，它能把上面的字转成你能复制粘贴的文字。「离线」是说识别过程在本机完成，不用把图片传到网上的服务器，也不用联网。",
      "opinion": "手头有扫描版的资料、截图里的笔记想摘出文字来整理，用它处理比自己一个字一个字打快很多，而且全程本机跑，不用担心内容被传到别的服务器上。装好直接是个图形界面软件，不用敲命令。📱 手机上：装不了，它官方只给了 Windows 和 Linux 桌面版，没有安卓版，Termux 也不适用，建议放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows / Linux）",
          "steps": [
            { "text": "打开 Releases 页面，下载最新的安装包（`.7z` 压缩包或者 `.7z.exe` 自解压版）：", "code": "https://github.com/hiroi-sora/Umi-OCR/releases", "after": "国内下载慢的话，README 里也给了蓝奏云等国内镜像链接。" },
            { "text": "解压后直接运行里面的 `Umi-OCR.exe`，不用额外安装（Linux 用解压出来的 `umi-ocr.sh` 脚本启动）。" }
          ],
          "done": "打开软件能看到识别界面，截个图或者拖一张图片进去能认出文字，就算装好了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "🎨",
      "repo": "auto-novel/auto-novel",
      "deploy": ["read"],
      "title": "轻小说机翻网站，日文网络小说直接看机翻版",
      "lang": "TypeScript",
      "stars": "1,294",
      "today": "7",
      "body": "这是一个轻小说机器翻译网站，支持把网络连载小说、文库小说、甚至自己本地的小说文件丢进去跑机器翻译，翻完能直接在网页上看。项目本身不建议自己搭一套（作者说没为个人部署设计），但官方自己运营着一个可以直接用的网站。",
      "explain": "「轻小说」是日本那边一种篇幅较短、偏年轻向的小说类型，很多只有日文原文没有中文翻译，这个网站就是用机器翻译把这类小说搬到中文读者能看的地方，翻译质量比不上人工翻译，但能先看懂个大概。",
      "opinion": "想看点日文轻小说又不认识日文，或者想找点轻松的东西打发时间，直接打开网站搜小说名字就能看机翻版，不用自己装任何东西。机翻质量有限，文笔和细节别太较真，图个能看懂情节。📱 手机上：能用，就是个网页，手机浏览器打开就能看。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开网站搜你想看的轻小说：", "code": "https://n.novelia.cc" }
          ],
          "done": "能搜到小说、点进去能看到翻译后的章节内容，就算能用了。"
        }
      ],
      "url": "https://github.com/auto-novel/auto-novel"
    }
  ]
};
