DAILY_DATA["github/2026-10-31"] = {
  "date": "2026-10-31",
  "highlight": "今天最值得先动手的是 `mattpocock/skills`——一套能直接装进 Claude Code 的工程技能合集，TDD、代码评审、bug 诊断这些流程不用再自己一步步交代，手机 Termux 和电脑都能装，不用编译任何东西。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "mattpocock/skills",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装一套工程技能，TDD、代码评审这些自动套流程",
      "lang": "Shell",
      "stars": "307,482",
      "today": "876",
      "body": "这是一套面向 `Claude Code`、Codex、GitHub Copilot 等多种编码 Agent 的技能合集。里面有按测试驱动开发流程写代码的 `tdd`、分阶段排查 bug 的 `diagnosing-bugs`、按规范审查改动的 `code-review`，还有把需求整理成文档再实现的 `to-spec`/`implement-spec` 等。部分技能要主动输入命令调用，部分会在 Agent 判断任务匹配时自己用上。",
      "explain": "「Skill」是提前写好的一套「该怎么做这件事」的说明书，Agent 照着来，不用每次现教；`TDD`（测试驱动开发）是先写一条会失败的测试，再写代码让它通过的编程习惯，能少踩「写完才发现漏了什么」的坑；`spec` 是动手写代码前先写清楚「这次要做成什么样」的一份文档，照着它写能少跑偏。",
      "opinion": "你平时用 `Claude Code` 写代码，这套技能相当于把「测试先行」「诊断 bug」「审查改动」这些好习惯打包成可以直接调用的流程，不用每次自己在对话里现教一遍。免安装成本很低，先装上试试 `/tdd`、`/code-review` 这两个最直接用得上的命令，用不顺手的部分不装也行。📱 手机上：能装——官方装法就是 Claude Code 自带的插件命令或者一条 `npx` 脚本，不需要编译任何东西，Termux 里跑 Claude Code 的话应该能直接装上。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样，都在 Claude Code 里跑）",
          "intro": "两种装法选一种，别同时装，不然每个技能会重复出现。",
          "steps": [
            { "text": "打开 Claude Code，运行命令走官方插件市场（会自动更新）：", "code": "claude plugin install mattpocock-skills@claude-plugins-official" },
            { "text": "这条装不上，换通用方式（把技能文件直接复制进当前项目，适合各种支持技能的 Agent，更新要手动重跑这条）：", "code": "npx skills@latest add mattpocock/skills -a claude-code" },
            { "text": "挑一个要用的项目仓库，跑一次初始化配置：", "code": "/setup-matt-pocock-skills", "after": "会让你选 issue 怎么管理（比如直接用 GitHub），按提示选就行。" }
          ],
          "done": "在 Claude Code 里跑 `/tdd` 或 `/code-review` 这类命令有反应，就是装好了。"
        }
      ],
      "url": "https://github.com/mattpocock/skills"
    },
    {
      "emoji": "🤖",
      "repo": "thedotmack/claude-mem",
      "deploy": ["pc"],
      "title": "给 AI 编码 Agent 装跨会话记忆，不用每次从头讲项目背景",
      "lang": "TypeScript",
      "stars": "106,243",
      "today": "1,140",
      "body": "claude-mem 是给 `Claude Code` 等编码 Agent 用的持久记忆系统。它会自动记录一次会话里 Agent 做了哪些操作，用 AI 压缩成摘要存下来，等开新会话时再把相关的部分找出来注入回去，让 Agent 不用每次重新摸清项目情况。支持的 Agent 不止 `Claude Code`，还包括 Codex、Gemini、GitHub Copilot 等好几种。",
      "explain": "「Agent」这里指像 `Claude Code` 这样能自己动手操作文件、跑命令的 AI 编码工具；它平时每开一个新会话就把之前的记忆清空了，claude-mem 做的事是把关键内容先压缩存进一个「向量数据库」（一种按内容相近程度查找信息的数据库），下次开会话时按需要再捞出来。",
      "opinion": "用 `Claude Code` 写项目时，每次开新会话都要重新介绍一遍项目背景确实烦，这个工具理论上能省掉这一步。但它的依赖链不短——要装 Bun、uv、还有做语义检索的向量数据库，值得先在电脑上装一遍，确认真的能跑起来、确实省事，再决定要不要长期挂着用。📱 手机上：不保证——向量数据库那部分很可能要编译 C/Rust 扩展，Termux 上大概率卡在装这一步，建议先用电脑试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Claude Code 插件市场）",
          "steps": [
            { "text": "打开 Claude Code，运行命令添加插件源：", "code": "/plugin marketplace add thedotmack/claude-mem" },
            { "text": "再运行命令安装插件：", "code": "/plugin install claude-mem" },
            { "text": "装完重启 Claude Code 让插件生效。", "after": "重启后会自动装缺的 Bun、uv 等依赖，第一次启动可能要等一会。" },
            { "text": "可选：登录 claude-mem 账号解锁云端摘要服务（有 30 天免费试用），或者在设置里填自己的 OpenRouter / Gemini key；不想登录也能跳过，用环境变量配置成本地模式。" }
          ],
          "done": "重新开一个新会话，Claude Code 还能接得上之前这个项目聊过的内容，就说明记忆真的留住了。"
        }
      ],
      "url": "https://github.com/thedotmack/claude-mem"
    },
    {
      "emoji": "🛠",
      "repo": "XIU2/CloudflareSpeedTest",
      "deploy": ["phone", "pc"],
      "title": "给走 Cloudflare CDN 的网站测速，挑出当下最快的 IP",
      "lang": "Go",
      "stars": "29,722",
      "today": "30",
      "body": "CloudflareSpeedTest 是个命令行小工具，专门测 Cloudflare 的 CDN 节点 IP 延迟和下载速度，挑出当下最快的几个，支持 IPv4 和 IPv6。也能自己指定测速地址，拿来测别的 CDN 或者有多个 IP 的网站。",
      "explain": "「CDN」是把同一份网站内容在全球很多地方都存一份，访问时就近给你，但不同节点、不同时段的速度不一样；Cloudflare 是提供这类 CDN 服务的公司之一，分配给国内访客的节点有时会比较绕、比较慢。",
      "opinion": "这个工具解决的是「不走代理、直连访问某个套了 Cloudflare CDN 的网站觉得卡」这类场景，跟你平时走代理访问 GitHub 是两件不同的事。遇到某个网站加载慢，跑一下测出最快的几个 IP，自己写进 hosts 文件，经常能缓解。不用常驻跑，卡的时候跑一次就行。📱 手机上：大概率能装——它是 Go 写的静态二进制，官方 Release 里直接有 `linux_arm64` 的包，Termux 里下载解压就能跑，不用编译，没专门验证过 Termux 环境，真跑不起来就换电脑装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "下载官方预编译的 arm64 版本：", "code": "https_proxy=http://127.0.0.1:7890 curl -LO https://github.com/XIU2/CloudflareSpeedTest/releases/download/v2.3.5/cfst_linux_arm64.tar.gz" },
            { "text": "解压并给执行权限：", "code": "tar -xzf cfst_linux_arm64.tar.gz && chmod +x cfst" },
            { "text": "跑一次默认测速看效果：", "code": "./cfst", "after": "跑起来报权限错误或者直接退出，大概率是 Termux 环境跟这个二进制不兼容，换电脑装。" }
          ],
          "done": "终端里跑出一份按速度排序的 IP 列表，就是装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 Releases 页面下载 Windows 版压缩包并解压：https://github.com/XIU2/CloudflareSpeedTest/releases", "after": "下载慢或失败就先开代理。" },
            { "text": "双击解压出来的 `cfst.exe`，会自动弹出命令行窗口跑默认测速。" },
            { "text": "想自定义参数（比如限制延迟 200ms 以内、只测 20 个），在文件夹里打开命令行运行：", "code": "cfst.exe -tl 200 -dn 20" }
          ],
          "done": "命令行窗口里跑出一份按速度排序的 IP 表格，就是装好了。"
        }
      ],
      "url": "https://github.com/XIU2/CloudflareSpeedTest"
    },
    {
      "emoji": "🛠",
      "repo": "xifangczy/cat-catch",
      "deploy": ["phone", "pc"],
      "title": "浏览器资源嗅探扩展，一键找出网页里的视频/音频直链",
      "lang": "JavaScript",
      "stars": "22,630",
      "today": "19",
      "body": "猫抓（cat-catch）是个浏览器扩展，能自动嗅探并列出当前网页加载过的媒体资源（视频、音频、图片等）地址，还带一个专门解析 `m3u8` 格式的界面。数据只在本地处理，不上传到任何服务器，不含跟踪代码。",
      "explain": "`m3u8` 是一种常见的视频播放列表格式，很多网站的视频其实是靠这种格式串起一堆小文件分段播放的，普通右键「另存为」抓不到完整视频，得靠专门工具把这些分段解析出来。",
      "opinion": "整理资料、想保存网页上某个视频或音频时能省不少事，装上之后打开页面点一下插件图标就能看到可下载的资源列表，比挨个找下载网站方便。它只负责「找到链接」，真要下载和转换格式还得自己动手；官方也提醒网上有加了广告的仿冒版本，装的时候认准 GitHub 和官方文档的地址。📱 手机上：能装——官方给了 Edge Android 版（README 里扫二维码装），但手机版功能是否和桌面版完全一致没细说，日常用建议先在电脑浏览器上装全功能版。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Chrome / Edge / Firefox 应用商店）",
          "steps": [
            { "text": "Chrome：打开 [应用商店页面](https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb) 点安装。" },
            { "text": "Edge：打开 [应用商店页面](https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci) 点安装。" },
            { "text": "Firefox：打开 [应用商店页面](https://addons.mozilla.org/addon/cat-catch/) 点安装；官方提示国内 IP 访问商店页面可能需要代理。" },
            { "text": "商店打不开时可以离线装：打开 [Releases 页面](https://github.com/xifangczy/cat-catch/releases) 下载 `crx` 文件，浏览器扩展管理页打开「开发者模式」，把 `crx` 文件拖进去。" }
          ],
          "done": "浏览器右上角出现猫爪图标，打开任意网页点一下能看到资源列表，就是装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机（Edge Android）",
          "intro": "官方只给了二维码，没有文字直链。",
          "steps": [
            { "text": "手机装好 Edge 浏览器，打开仓库主页 https://github.com/xifangczy/cat-catch ，找到 Edge Android 那张二维码，用 Edge 自带的扫码功能扫它安装。", "after": "没有自带扫码功能的话，用其他扫码工具扫出链接再在 Edge 里打开。" }
          ],
          "done": "Edge 工具栏能看到猫爪图标，打开网页点一下有资源列表，就是装好了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "deploy": ["read"],
      "title": "每月一期的开源项目推荐清单，挑感兴趣的入门项目看",
      "lang": "Python",
      "stars": "185,798",
      "today": "261",
      "body": "HelloGitHub 是个月刊，每月 28 号更新，专门收集 GitHub 上有趣、适合入门看的开源项目，顺带也收开源书籍和实战项目，目前已经出到第 127 期。",
      "explain": "没什么要特别解释的名词，就是一份定期更新的开源项目推荐清单。",
      "opinion": "想换换口味找点新项目练手，或者单纯想知道 GitHub 上最近有什么好玩的东西，翻几期比自己瞎逛效率高一些。里面项目质量参差不齐，挑感兴趣的看就行，不用每篇都读完。📱 手机上：能看，打开官网或者直接在 GitHub 仓库里翻 Markdown 正文都行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "官网阅读体验更好：[hellogithub.com/periodical](https://hellogithub.com/periodical) ；也可以直接在仓库 `content` 目录翻 Markdown 原文：https://github.com/521xueweihan/HelloGitHub" }
          ],
          "done": "能打开某一期，看到里面列出的项目和简介，就算能看了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    },
    {
      "emoji": "💰",
      "repo": "sngyai/Sequoia-X",
      "deploy": ["pc", "cloud"],
      "title": "A 股技术选股 + 推送飞书，拿来看量化策略怎么写（别拿真钱跑）",
      "lang": "Python",
      "stars": "8,377",
      "today": "41",
      "body": "Sequoia-X 是个 A 股量化选股程序，每个交易日收盘后拉全市场日 K 线数据，用六种内置的技术形态策略（比如突破前期新高、放量上涨、涨停后洗盘回踩等）筛出符合条件的股票，把结果推送到飞书群。数据来自免费、不用注册的 `baostock` 接口。",
      "explain": "「量化」就是把选股的判断标准写成代码规则，让程序自动按规则扫描全市场，不是人工盯盘；这里的几种策略本质上都是常见的技术分析规则（比如「突破前期高点」），不是什么能预测未来的黑科技。",
      "opinion": "它不帮你下单，只是扫描、筛选再推送信号，拿来看懂几种常见技术选股规则怎么用代码实现、顺手学学怎么接飞书 Webhook 推送消息是可以的。但股票的涨跌不会因为跑了这个程序就变得可预测，照着它选的股票真金白银跟着买，亏钱的风险一分没少，这类技术形态历史上也常常失灵，代码本身有没有 bug 也没人专门审计过——当学习材料看就好，别当成投资建议，更别真拿它去操作真实账户。📱 手机上：不保证——它依赖 `pandas` 这类数据分析库，在 Termux 上常常会卡在编译这一步，建议放电脑或云服务器上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器（命令一样）",
          "intro": "需要先装好 Python 3.10 及以上版本。",
          "steps": [
            { "text": "克隆仓库并进入目录：", "code": "git clone https://github.com/sngyai/Sequoia-X.git\ncd Sequoia-X", "after": "下载慢或失败就先开代理。" },
            { "text": "装依赖，推荐用 `uv`（更快）：", "code": "uv sync", "after": "没装 uv 也可以用 pip install . 代替。" },
            { "text": "去飞书群里建一个自定义机器人，拿到 Webhook 地址，按项目里 `.env` 示例文件的提示填进去。" },
            { "text": "第一次跑要先回填全市场历史数据（大概 12 分钟）：", "code": "python main.py --backfill" },
            { "text": "以后每个交易日收盘后跑这条（大概 2~3 分钟）：", "code": "python main.py", "after": "想自动化可以配合 crontab 定时执行这条命令。" }
          ],
          "done": "飞书群收到一条选股结果的推送消息，就是跑成功了。"
        }
      ],
      "url": "https://github.com/sngyai/Sequoia-X"
    }
  ]
};
