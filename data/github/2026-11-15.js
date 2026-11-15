DAILY_DATA["github/2026-11-15"] = {
  "date": "2026-11-15",
  "highlight": "今天最值得动手试的是 `louislam/uptime-kuma`——一个开源的自托管监控面板，装上之后能盯着自己的网站、接口是不是正常，一旦挂了直接推送通知，比隔三差五手动开网页检查靠谱，普通 Node.js 环境就能装，门槛不高。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "louislam/uptime-kuma",
      "deploy": ["pc", "cloud"],
      "title": "自己搭一个服务状态监控面板，网站/接口挂了第一时间通知你",
      "lang": "JavaScript",
      "stars": "94,240",
      "today": "430",
      "body": "这是一个自托管的监控面板，能盯着网站、接口、数据库、Docker 容器这些东西的存活状态，定时去探测，挂了立刻推送通知到 Telegram/Discord 等一堆渠道。自带一个状态页功能，可以把「服务是否正常」这页面公开给别人看。界面是网页版，装好打开浏览器就能用，不用天天敲命令操作。",
      "explain": "「自托管」就是整个程序装在你自己的机器或服务器上跑，数据存在自己手里，不是交给别人家的云服务。「状态页」是它自带的一个公开页面，专门给别人看「我的服务现在是不是正常」，不少云服务商自己也有这种页面。",
      "opinion": "手上的网页/App 项目挂在 GitHub Pages 或自己搭的服务上，万一哪天挂了不一定第一时间知道；装一个 uptime-kuma 盯着，真挂了能第一时间收到推送，比时不时手动开网页检查靠谱。常规安装只要 Node.js，没什么复杂依赖，门槛不高，适合放云服务器上 24 小时跑。📱 手机上：不保证，它存数据要编译一个原生数据库组件，Termux 里大概率编译不过，建议装在电脑或云服务器上。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云服务器",
          "intro": "有 Docker 的机器最省事，直接用 Docker；没有 Docker 就用下面的 Node.js 方式。",
          "steps": [
            { "text": "方式一（有 Docker，推荐）：建个目录，下载官方配置文件后一键启动：", "code": "mkdir uptime-kuma\ncd uptime-kuma\ncurl -o compose.yaml https://raw.githubusercontent.com/louislam/uptime-kuma/master/compose.yaml\ndocker compose up -d", "after": "下载慢或失败就先开代理。" },
            { "text": "方式二（没有 Docker）：装好 Node.js 20.4 以上和 git 后，克隆仓库并初始化：", "code": "git clone https://github.com/louislam/uptime-kuma.git\ncd uptime-kuma\nnpm run setup", "after": "下载慢或失败就先开代理。" },
            { "text": "初始化完成后启动服务：", "code": "node server/server.js", "after": "想让它关掉终端也一直跑，可以先装 `npm install -g pm2`，再用 `pm2 start server/server.js --name uptime-kuma` 启动。" }
          ],
          "done": "浏览器打开 http://你的机器IP:3001（本机是 http://localhost:3001），第一次打开会让你注册一个管理员账号，能看到监控面板就算装好了。"
        }
      ],
      "url": "https://github.com/louislam/uptime-kuma"
    },
    {
      "emoji": "🤖",
      "repo": "anthropics/claude-quickstarts",
      "deploy": ["pc"],
      "title": "官方出的 Claude API 应用示例合集，照着抄代码学怎么搭 Agent",
      "stars": "20,981",
      "week": "1,794",
      "body": "这是 Anthropic 官方维护的一套 Claude API 应用范例仓库，收了十几个能直接跑起来的小项目：客服机器人、财务数据分析助手、能自己写代码的 Agent、控制浏览器/电脑的 Demo，还有一批接 Slack、Linear、Sentry 这些服务的例子。每个子项目单独一个文件夹，各自带说明文档，挑一个感兴趣的抄着改就能上手。",
      "explain": "这里的「Agent」指能自己拆解任务、调用工具、一步步把活干完的 AI 程序，不是简单问一句答一句。「Managed Agents」是 Anthropic 官方托管的一种运行方式，省去自己搭服务器这一步，但要用它家的平台；仓库里大部分示例还是普通的自己起服务那种，不依赖它也能跑。",
      "opinion": "平时做 AI 小工具都是自己从零搭 Agent 逻辑，翻翻这些官方范例能看到 Anthropic 自己怎么拆步骤、怎么处理工具调用报错，财务数据分析那个例子尤其值得看——传数据进去自动画图表、答问题，这套思路换成别的模型接口一样能照搬。跑起来要注册一个 Claude API key（有免费额度），光看代码不跑也能学到东西。📱 手机上：不保证，这些示例是 Next.js 网页项目，构建工具链在 Termux 上容易因为原生组件适配问题跑不起来，建议只在电脑上跑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "克隆仓库，进到财务数据分析这个示例目录（README 里写的是仓库改名前的旧地址，GitHub 会自动跳转，照样能拉下来）：", "code": "git clone https://github.com/anthropics/anthropic-quickstarts.git\ncd anthropic-quickstarts/financial-data-analyst", "after": "下载慢或失败就先开代理。" },
            { "text": "装依赖（需要 Node.js 20 以上）：", "code": "npm install" },
            { "text": "在项目根目录新建一个 `.env.local` 文件，写入你的 Claude API key（在 console.anthropic.com 免费注册获取）：", "code": "ANTHROPIC_API_KEY=你的key" },
            { "text": "启动开发服务器：", "code": "npm run dev" }
          ],
          "done": "浏览器打开 http://localhost:3000，能看到上传数据、提问分析的页面，就算跑起来了。"
        }
      ],
      "url": "https://github.com/anthropics/claude-quickstarts"
    },
    {
      "emoji": "🛠",
      "repo": "backnotprop/plannotator",
      "deploy": ["pc"],
      "title": "让 Claude Code 做计划、改代码时先给你看一眼，不满意当场改",
      "lang": "TypeScript",
      "stars": "11,124",
      "today": "408",
      "body": "这是给 Claude Code、Codex 这类 AI 编程工具用的本地审阅工具：AI 提了一个计划、或者改完一批代码，会自动在浏览器里弹出一个页面，你可以在上面标注、评论、打回去让它改，不用在终端里来回打字描述哪里不对。也能用来审 diff、审 PR，甚至标注文档和网页。",
      "explain": "「计划（Plan）」是 AI 编程工具常见的一个环节——先说一遍打算怎么改，确认没问题再动手，省得改错了再返工。这个工具把「确认计划」这一步从纯文字对话变成一个能点点画画的网页界面。",
      "opinion": "平时用 Claude Code 带着做各种项目，经常要在终端里打字说「这里不对，应该是……」，效率不算高；装上这个之后能直接在网页上圈出要改的地方加一句说明，对着图说话比打字描述更快，适合审查比较复杂的改动。只是个人本地用的小工具，花几分钟装上试试没什么成本。📱 手机上：装不了，它官方只确认了给电脑的安装包，Termux 是手机上的 arm 架构，大概率没有对应的包能装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 PowerShell，运行官方安装脚本（会自动下载程序并配置好检测到的 Claude Code 等工具）：", "code": "irm https://plannotator.ai/install.ps1 | iex", "after": "下载慢或失败就先开代理。" },
            { "text": "安装完重启一下 Claude Code。" }
          ],
          "done": "让 Claude Code 提一个改动计划，浏览器自动弹出一个标注页面，能看到计划内容就算装好了。"
        }
      ],
      "url": "https://github.com/backnotprop/plannotator"
    },
    {
      "emoji": "🤖",
      "repo": "Tencent/LoopForge",
      "deploy": ["pc", "cloud"],
      "title": "腾讯出的「AI 编程流水线」平台，跑脚本+人工审批串成一套自动化",
      "lang": "Go",
      "stars": "907",
      "today": "33",
      "body": "这是腾讯开源的一个自托管平台，把「调用 AI 编程工具」「跑脚本」「人工审批」串成一条可以反复执行的工作流（官方叫 SOP）：比如让 AI 先改代码，自动跑测试，测试通过了再等人点一下「同意」才继续往下走。也能直接在网页里跟一个「主 Bot」聊天，它会开一个装着代码仓库的沙箱环境。",
      "explain": "「沙箱」是一个隔离出来的临时环境，AI 在里面改代码、跑命令都不会影响到你机器上的其他东西，用完能直接扔掉。「审批节点」是流程走到某一步会停下来等人确认，不是全程甩手不管，这点跟完全自动跑脚本不一样，多一道人工把关。",
      "opinion": "这类「流程+审批节点」的思路，如果平时手动给各个项目串流程、管发布这类活，用它搭一套能省掉不少重复操作；不过要用 Docker 跑沙箱，个人小项目未必用得上这么重的一套，更适合有稳定云服务器、经常要跑重复性 AI 编程任务的场景，先了解一下思路也不错。📱 手机上：装不了，它要用 Docker 开沙箱环境，Termux 没有 Docker，装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Linux/Mac 或 Windows 的 WSL）/ ☁️ 云服务器（需要先装好 Docker）",
          "intro": "Windows 没装 WSL 的话，先搜「Windows 启用 WSL」装一个 Linux 子系统，再在里面跑下面的命令。",
          "steps": [
            { "text": "克隆仓库：", "code": "git clone https://github.com/Tencent/LoopForge.git\ncd LoopForge", "after": "下载慢或失败就先开代理。" },
            { "text": "一键启动（内部会用 Docker 拉镜像、起服务）：", "code": "./start.sh", "after": "国内拉 ghcr.io 镜像慢的话，可以加个镜像加速：`MIRROR=ghcr.nju.edu.cn ./start.sh`。" },
            { "text": "日常管理，看日志/停止/重启分别用：", "code": "./start.sh logs\n./start.sh stop\n./start.sh restart" }
          ],
          "done": "浏览器打开 http://你的机器IP:8090（本机是 http://localhost:8090），能看到主 Bot 聊天界面，就算装好了。"
        }
      ],
      "url": "https://github.com/Tencent/LoopForge"
    },
    {
      "emoji": "🎨",
      "repo": "maotoumao/MusicFree",
      "deploy": ["phone"],
      "title": "不内置任何音源、靠插件自己接歌单的免费听歌 App",
      "lang": "TypeScript",
      "stars": "28,562",
      "today": "39",
      "body": "这是一个安卓听歌 App，本身不带任何音乐来源，所有搜索、播放、歌单导入都靠你自己装的「插件」去接，插件是社区做的，各自接不同的音乐网站。界面干净、没有广告，也没有会员解锁这种限制。",
      "explain": "这里的「插件」是一个个单独的小文件，专门负责去某个音乐网站搜歌、拿播放地址，App 本身只管播放界面和下载管理，换个插件就能换一个音乐来源，这也是它不内置音源、不算侵权的原因。",
      "opinion": "日常听歌想要个没广告、没会员墙的播放器可以试试，装好之后要自己找插件装才能搜到歌，第一次用要花几分钟配置，图方便直接用成熟音乐 App 的人可能嫌麻烦；网上有现成分享的插件可以直接导入，不用自己写。注意应用商店和电商平台上很多叫这个名字收费卖的都是假货，认准官方 Releases 页面下载。📱 手机上：能装，就是个普通安卓 App，装 APK 就能用，不用 Termux，也不用编译任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机",
          "steps": [
            { "text": "打开仓库的 Releases 页面，下载最新的安卓安装包：", "code": "https://github.com/maotoumao/MusicFree/releases", "after": "国内访问 GitHub 慢的话，README 里提到可以去 GitCode 镜像下载。" },
            { "text": "安装 APK（手机需要允许「安装未知来源应用」），打开 App 后在侧边栏的插件设置里添加插件，用本地文件或网络链接都可以。" }
          ],
          "done": "添加插件后能搜到歌、点开能正常播放，就算装好了。"
        }
      ],
      "url": "https://github.com/maotoumao/MusicFree"
    }
  ]
};
