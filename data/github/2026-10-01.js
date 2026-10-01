DAILY_DATA["github/2026-10-01"] = {
  "date": "2026-10-01",
  "highlight": "今天最值得花五分钟试的是 `claude-code-templates`——一条命令就能给你天天在用的 Claude Code 装现成的自定义命令、MCP 集成，还带一个能看自己用量的本地面板。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "modelcontextprotocol/servers",
      "title": "官方 MCP 服务器合集，接到 Claude Code 里直接用",
      "lang": "TypeScript",
      "stars": "90,811",
      "today": "50",
      "body": "这是 MCP 协议官方团队维护的参考实现合集，收了文件系统读写、网页抓取（fetch）、Git 操作等几十个现成的「插件」，大多一条命令就能拉起来跑，接到支持 MCP 的 AI 工具里给 AI 用。\n README 里给的是接入 Claude Desktop 的配置示例，但写法和接入 Claude Code 是同一套 `.mcp.json` 格式。",
      "explain": "MCP 是让 AI 工具（比如 Claude Code）直接连上外部软件和数据的通用接口协议，昨天 `dbx` 那一条讲过；`npx`/`uvx` 是临时从网上拉一个包跑起来、不用提前装的命令，用完也不会常驻占地方。",
      "opinion": "想让 Claude Code 帮你干活范围更广的话，这里的 fetch（联网抓页面）和 filesystem（读写指定文件夹）两个比较实用，挑感兴趣的试一下；配置方法跟昨天 `dbx` 接 MCP 的 `.mcp.json` 写法完全一样。\n📱 手机上：大概率能跑——`npx`/`uvx` 命令本身不需要编译，Termux 装的 Node 和 uv 应该够用，但合集里几十个 server 没有逐个验证，遇到报错编译失败的就说明那一个在 Termux 走不通，换别的试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用",
          "intro": "命令本身一样，不涉及克隆 GitHub 仓库，不用加代理。",
          "steps": [
            { "text": "单独试一下 fetch server 能不能用（让 AI 读取某个网页）", "code": "npx -y @modelcontextprotocol/server-fetch" },
            { "text": "在你的项目目录下新建或编辑 `.mcp.json`，接入 filesystem server", "code": "{\n  \"mcpServers\": {\n    \"filesystem\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-filesystem\", \"/你要给AI读写的文件夹路径\"]\n    }\n  }\n}", "after": "存好后重启 Claude Code 就能生效" }
          ],
          "done": "在 Claude Code 里问一句「帮我看看这个文件夹里有哪些文件」，AI 能正常列出来，就是接上了。"
        }
      ],
      "url": "https://github.com/modelcontextprotocol/servers"
    },
    {
      "emoji": "🛠",
      "repo": "davila7/claude-code-templates",
      "title": "一条命令给 Claude Code 装现成的命令、MCP，还能看用量",
      "stars": "32,239",
      "week": "914",
      "body": "这是一个给 Claude Code 配置用的工具箱：一条命令弹出交互菜单，从社区整理好的 agent、自定义命令、hooks、MCP 集成、项目模板里挑着装，不用自己翻文档一个个写配置文件。\n它还带一个本地面板，能实时看自己的 Claude Code 会话状态和用量统计。",
      "explain": "这里说的 agent、自定义命令、hooks 都是 Claude Code 里可以自己写的脚本和配置，用来让它自动干某件固定的事；这个项目相当于把别人已经写好、测过的那些配置收集起来，装的时候照抄就行。",
      "opinion": "适合想给 Claude Code 加点好用功能、又不想自己啃官方文档配置的你；先跑一下交互菜单翻翻有没有用得上的 MCP 或命令，`--analytics` 这个用量面板能看一天跟 AI 聊了多少、调了多少次工具，对了解自己平时怎么用 Claude Code 有点用。\n📱 手机上：能跑——纯 Node.js 命令，不需要编译，Termux 装的 Node v26 应该够用；如果装的某个具体 MCP 组件本身要连 GitHub 拉东西，记得只给那一条命令单独加代理。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用",
          "intro": "三个命令功能不一样，按需跑。",
          "steps": [
            { "text": "打开交互式安装菜单，挑着装 agent/命令/MCP", "code": "npx claude-code-templates@latest" },
            { "text": "想直接看自己的用量统计面板", "code": "npx claude-code-templates@latest --analytics" },
            { "text": "想看本地的会话记录监控", "code": "npx claude-code-templates@latest --chats" }
          ],
          "done": "交互菜单能正常选择和安装，装完后对应的 agent/命令出现在项目的 `.claude` 目录里；或者 `--analytics` 能打开一个本地统计页面，就是装成功了。"
        }
      ],
      "url": "https://github.com/davila7/claude-code-templates"
    },
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "title": "图片文字一键提取，完全离线免费的 OCR 工具",
      "stars": "47,559",
      "today": "8",
      "body": "`Umi-OCR` 是一款免费开源的离线文字识别软件：截图、图片、PDF、扫描件里的文字都能提取出来复制走，还支持二维码识别和生成。\n全程不联网、不用账号不用 API Key，软件自带识别库。",
      "explain": "OCR 就是「把图片里的文字认出来变成能复制的文本」的技术，比如一张教程截图、一页扫描的电路图标注，用它能把上面的文字抠出来，不用自己一个字一个字重新打。",
      "opinion": "学东西时经常截图、拍文档照片的话会挺顺手，比在手机备忘录里手打省不少事；完全离线运行，不用担心图片内容被传到别人服务器上。\n📱 手机上：装不了——官方只出 Windows 和 Linux x64 桌面版，README 没提到安卓或任何移动端支持，这个只能装在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "有两个识别引擎版本，Rapid 版兼容性好、占内存小，新手建议先装这个。",
          "steps": [
            { "text": "打开 Releases 页面", "code": "https://github.com/hiroi-sora/Umi-OCR/releases" },
            { "text": "下载文件名里带 `Rapid` 的 `.7z.exe` 安装包（国内下 GitHub 慢的话，页面里还给了蓝奏云链接，速度更快）" },
            { "text": "双击下载的 `.7z.exe` 自解压，解压完进文件夹双击 `Umi-OCR.exe` 打开，不需要额外安装步骤" }
          ],
          "done": "打开软件界面，截图或拖一张带文字的图片进去，几秒内识别出文字并能直接复制，就是装好了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "title": "动画图解数据结构与算法，代码能直接在网页跑",
      "lang": "Java",
      "stars": "130,557",
      "today": "17",
      "body": "`hello-algo` 是一本开源免费的数据结构与算法入门教程，每个知识点配动画图解，支持 Python、Java、C++ 等 13 种语言的代码实现，网站上点开代码块能直接看运行结果。\n纯教程网站，不是要装的软件。",
      "explain": "数据结构与算法是编程的基础功底之一，比如「数组」「链表」「排序」这些概念讲的是「数据该怎么存、怎么处理效率更高」，跟具体用哪种语言写没关系，学一次能用到任何语言上。",
      "opinion": "你正在入门 Python，这本书用动画把抽象概念讲得比较直观，网站顶部能切到 Python 的代码实现，挑几个基础章节跟着敲一遍代码，比干看文字教材记得住；不用强求整本刷完，当成查概念的工具书也行。\n📱 手机上：随时能看——纯网页教程，浏览器打开网站翻看、点代码块看 Python 实现就行，不需要装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器打开官网", "code": "https://www.hello-algo.com" },
            { "text": "网站顶部的语言选择切到 Python，再按左侧目录从「数据结构」章节开始看" }
          ],
          "done": "打开网站能看到动画演示和右侧的 Python 代码块，点代码块能看到运行结果，就是找对地方了。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "💰",
      "repo": "actualbudget/actual",
      "title": "本地跑的「信封记账法」预算软件，数据不传云端",
      "body": "`Actual Budget` 是一款完全免费开源的本地记账/预算软件，用「信封预算法」帮你把每一笔钱提前分配好用途，有 Windows/Mac/Linux 桌面版，也能自己搭网页版。\n数据存在自己设备本地，不用注册账号，也不连接真实银行账户。",
      "explain": "「信封预算法」是一种老式理财思路：发工资先把钱按用途（房租、吃饭、娱乐……）分进不同「信封」，花钱前先看对应信封还剩多少，比记完一堆流水账才发现超支，更容易管住自己的手。",
      "opinion": "适合当「学记账 + 学预算」的入门练习工具，比直接用会同步你银行卡的商业 App 更让人放心——它本地运行，不涉及连接银行卡号；可以先拿假数据练几周，摸清这套分配方法好不好用再决定要不要长期记真实账。\n📱 手机上：没有安卓专用版——官方只给了 Windows/Mac/Linux 桌面版和自建网页版，手机要用得先在电脑上把网页版服务搭起来再拿手机浏览器连，目前更适合先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "装的是本地单机版，不用搭服务器、不用注册账号。",
          "steps": [
            { "text": "打开 Releases 页面下载 Windows 安装包", "code": "https://github.com/actualbudget/actual/releases/latest", "after": "文件名是 `Actual-windows-x64.exe`（64 位系统选这个，32 位选 `ia32` 版）" },
            { "text": "双击安装包，按提示装完并打开软件" },
            { "text": "首次打开选「Create a new budget」（创建新预算），起个文件名", "after": "界面是英文的，不保证之后版本菜单文字完全一样，大意是「新建一个本地预算文件」的那一项都行" }
          ],
          "done": "打开软件能看到预算分类界面，手动加一笔收入或支出，数字会跟着变化，就是装好了。"
        }
      ],
      "url": "https://github.com/actualbudget/actual"
    }
  ]
};
