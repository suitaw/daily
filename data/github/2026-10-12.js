DAILY_DATA["github/2026-10-12"] = {
  "date": "2026-10-12",
  "highlight": "今天最值得先装的是 `thedotmack/claude-mem`——给 Claude Code 装上跨会话记忆，开新对话不用再从头解释项目背景，几条插件命令就能装好，手机电脑都一样。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "thedotmack/claude-mem",
      "deploy": ["pc"],
      "title": "给Claude Code装上跨会话记忆",
      "lang": "TypeScript",
      "stars": "99,740",
      "week": "3,803",
      "body": "claude-mem 给 Claude Code 这类 AI 编程工具加上跨会话记忆：它会把你和 AI 之前的操作、聊天记录自动压缩成摘要存起来，下次开新会话时自动把相关的旧上下文找回来塞给 AI。目前支持 Claude Code、OpenCode、Gemini 等多个客户端，用插件市场几条命令就能装好。",
      "explain": "可以这么类比：平时用 Claude Code 每开一个新会话，就像换了个失忆的同事，上次聊的内容全忘了，得重新介绍一遍项目；claude-mem 就是帮它记笔记、下次自动翻笔记接上话的工具。里面说的「向量搜索」，就是让它按意思而不是按关键词去翻找旧记录。",
      "opinion": "你平时用 Claude Code 做长期的小工具项目，这个能省掉不少「重新解释一遍背景」的时间，装好基本不用管，值得试。它默认走自带的服务，有 30 天免费额度，之后可以换成自己的 OpenRouter/Gemini key 或用自己的 Anthropic 套餐，不是非要额外花钱才能继续用。📱 手机上：装的是 Node.js 插件，不需要编译原生扩展，Termux 已有 Node.js v26 应该能装；它会自动装 uv 和 Bun，如果这两步自动失败，可以先自己 `pkg install uv` 再重试，不保证一定顺利。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（在 Claude Code 里操作，命令一样）",
          "intro": "这几条命令都是在已经打开的 Claude Code 对话框里直接输入，不是系统的终端。",
          "steps": [
            { "text": "添加插件市场：", "code": "/plugin marketplace add thedotmack/claude-mem" },
            { "text": "安装插件：", "code": "/plugin install claude-mem" },
            { "text": "重启 Claude Code 让插件生效" },
            { "text": "首次使用会弹出登录链接，用邮箱在浏览器里登录一下即可（有 30 天免费额度）", "after": "不想登录也可以跳过，改用 `--provider` 参数指定自己的 key，或在非交互环境下运行" }
          ],
          "done": "再开一个新会话时，如果它能直接接上你之前聊过的项目背景（不用你重新介绍），就是装成功了。"
        }
      ],
      "url": "https://github.com/thedotmack/claude-mem"
    },
    {
      "emoji": "🤖",
      "repo": "ranxianglei/billion-context",
      "deploy": ["phone", "pc"],
      "title": "给AI编程工具的对话做压缩，省token聊更久",
      "lang": "TypeScript",
      "stars": "904",
      "week": "337",
      "body": "billion-context 是一个接在编码 Agent 和 AI 模型之间的上下文压缩代理，会把已经聊过的内容压缩成分层摘要再喂给 AI，目的是省 token、让小上下文窗口的 AI 也能撑更长的会话。支持 Claude Code、aider、codex 等多种客户端，装好后能当 Claude Code 插件用，也能单独当命令行工具跑。项目作者自己标注还在「早期」阶段。",
      "explain": "AI 一次能看懂、记住的聊天内容是有限的，叫「上下文窗口」，聊久了会被挤爆，要么突然「忘事」，要么因为按 token 计费变贵。这个工具相当于在你和 AI 中间加一个「压缩员」，把聊过的内容先提炼成摘要再喂给 AI，省地方又能聊更久。",
      "opinion": "作者自己说还在「早期」，没经过大规模验证，别用在正在赶工的重要项目上，先在无关紧要的小项目里试试效果。如果你平时用 Claude Code 处理长任务，经常被上下文耗尽打断，这个方向值得关注，但现在就指望它完全稳定还早，出 bug 不代表你装错了。📱 手机上：装的是 npm 全局包，没提到要编译原生扩展，Termux 理论上能装；但项目还早期，功能是否齐全不保证，图个新鲜可以试，别太指望。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "先装命令行工具，再在 Claude Code 里装它的插件。",
          "steps": [
            { "text": "全局安装命令行工具：", "code": "npm install -g billion-context --prefix=~/.local", "after": "装不上不保证是环境问题还是项目本身早期不稳定" },
            { "text": "在 Claude Code 里添加它的插件市场：", "code": "/plugin marketplace add ranxianglei/billion-context" },
            { "text": "安装插件：", "code": "/plugin install billion-context@billion-context" },
            { "text": "跑一下初始化命令：", "code": "/billion-context:bili-setup" }
          ],
          "done": "跑 `curl -s http://localhost:8787/__bili/health` 能看到返回内容，说明后台服务起来了。"
        }
      ],
      "url": "https://github.com/ranxianglei/billion-context"
    },
    {
      "emoji": "🛠",
      "repo": "XIU2/CloudflareSpeedTest",
      "deploy": ["phone", "pc"],
      "title": "测出你这边最快的Cloudflare节点IP",
      "lang": "Go",
      "stars": "29,393",
      "today": "26",
      "body": "CloudflareSpeedTest 专门用来测 Cloudflare CDN 在你当前网络下哪个节点最快。国内访问 Cloudflare 经常被分到延迟高、丢包的节点，这个工具几分钟就能跑出一份按延迟和下载速度排序的 IP 列表。支持 Windows、Linux、macOS，也提供专门编译的 ARM64 版本。",
      "explain": "Cloudflare 是很多网站、服务用的全球加速网络，但它会按你的网络情况随机分配一个「就近」节点，国内分到的节点有时反而很慢。这个工具会帮你挨个测一遍哪个节点在你这儿最快，测完把这个 IP 配到需要用的地方（比如改 hosts）就能用上。",
      "opinion": "如果你平时觉得某个走 Cloudflare 的服务访问慢，这个工具几分钟就能测出更快的节点，立竿见影。它只是测速和找 IP，不是代理工具，测的时候记得先关掉代理软件再测，不然延迟会显示不正常地低（比如 0.几毫秒），那是测到了代理本身。📱 手机上：官方提供了专门编译的 `arm64` 版本，Termux 的处理器就是这个架构，下载解压直接能跑，不用额外装任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "下载 arm64 版本（这条要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 wget https://github.com/XIU2/CloudflareSpeedTest/releases/latest/download/cfst_linux_arm64.tar.gz" },
            { "text": "解压：", "code": "tar -zxf cfst_linux_arm64.tar.gz" },
            { "text": "给执行权限：", "code": "chmod +x cfst" },
            { "text": "运行测速：", "code": "./cfst" }
          ],
          "done": "跑完会打印一份按延迟、速度排好序的 IP 列表，排第一的就是当前最快的节点。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开发布页面，下载 Windows 版压缩包：", "code": "https://github.com/XIU2/CloudflareSpeedTest/releases/latest", "after": "下载慢或失败就先开代理再下载；下载 cfst_windows_amd64.zip" },
            { "text": "解压后双击 `cfst.exe` 运行" }
          ],
          "done": "弹出的窗口打印出按延迟、速度排好序的 IP 列表，就是测完了。"
        }
      ],
      "url": "https://github.com/XIU2/CloudflareSpeedTest"
    },
    {
      "emoji": "📚",
      "repo": "d2l-ai/d2l-zh",
      "deploy": ["read"],
      "title": "免费中文教科书《动手学深度学习》",
      "lang": "Python",
      "stars": "81,568",
      "today": "30",
      "body": "d2l-zh 是中文版《动手学深度学习》教材，配套网站可以直接在线看，每一章都带数学推导和能跑起来的代码示例。深度学习是机器学习的一个分支，现在的大模型底子也是这套理论。作者团队持续更新，有第一版和第二版两套内容。",
      "explain": "深度学习简单说就是模拟「神经元」连接起来的网络去学习规律的一套方法，现在的 ChatGPT、豆包这类大模型底层都是从这套理论发展来的。这本书既讲背后的数学，也配代码让你动手跑一遍，属于进阶内容，不是零基础科普。",
      "opinion": "说实话这本书对数学（线性代数、微积分）和 Python 基础有要求，你现在还在 Python 入门阶段，现在啃可能会比较吃力，不如先收藏，等 Python 练熟了再回来看，不用急着现在啃完。想随便翻翻感受一下的话，直接在线看就行，不涉及装环境。📱 手机上：纯看在线网页版就行，手机浏览器能直接打开，不涉及任何安装。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开在线版网页（第二版）：", "code": "https://zh.d2l.ai" },
            { "text": "想看第一版可以打开：", "code": "https://zh-v1.d2l.ai" }
          ],
          "done": "网页能看到目录和章节内容，就能直接看了；想跑书里的代码，页面里的「安装」一节有专门的教程。"
        }
      ],
      "url": "https://github.com/d2l-ai/d2l-zh"
    },
    {
      "emoji": "🎨",
      "repo": "Anduin2017/HowToCook",
      "deploy": ["read"],
      "title": "程序员在家怎么做饭的开源菜谱",
      "stars": "102,704",
      "today": "45",
      "body": "HowToCook 是一份按菜系和场景整理的中文家常菜谱，主打「程序员在家怎么做饭」，内容是纯 Markdown 文档，官方搭了个可视化网站方便直接浏览。仓库也提供可选的 Docker 本地部署方式，但单纯看菜谱不需要装任何东西。",
      "explain": "没有需要解释的技术名词，这就是一份菜谱合集，按「荤菜」「素菜」「早餐」之类的场景分类，照着步骤做就行。",
      "opinion": "跟 AI 开发、Python、电工、理财都不搭边，纯粹用来换换脑子；自己照着做饭确实比天天点外卖省钱，这点倒是能跟理财扯上点关系。网页直接看就行，想做哪道菜点进去看步骤，不用装任何东西。📱 手机上：就是个网页，手机浏览器直接打开就能看，不涉及安装。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开在线版网站：", "code": "https://howtocook.aiursoft.com/" }
          ],
          "done": "能看到按分类整理的菜谱列表，点进去能看到具体步骤，就对了。"
        }
      ],
      "url": "https://github.com/Anduin2017/HowToCook"
    }
  ]
};
