DAILY_DATA["github/2026-11-11"] = {
  "date": "2026-11-11",
  "highlight": "今天最值得动手试的是 `agent-desktop`——让 AI agent 直接读懂电脑软件的界面结构去点按钮、填表单，比靠截图瞎猜稳得多，适合想让 AI 帮你操作桌面软件的人。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "vercel-labs/agent-desktop",
      "deploy": ["pc"],
      "title": "让 AI agent 学会操作电脑软件界面",
      "lang": "Rust",
      "stars": "21,387",
      "week": "9,502",
      "body": "这是 Vercel Labs 出的命令行工具，让 AI agent 通过系统自带的无障碍接口「看懂」桌面软件界面，返回里面每个按钮、输入框的位置和编号，agent 据此点击、输入，再重新读取界面确认效果有没有生效。工具本身不内置任何大模型，只负责「操作」这一步，调用它的 agent 自己接哪家大模型都行。支持 macOS、Windows、Linux 桌面，也能当 `MCP` 工具接进 Claude Code 之类的客户端。",
      "explain": "「无障碍接口」本来是给视障用户读屏幕用的系统功能（Windows 叫 UI Automation，Mac 叫 AX API），这个工具是借用它来让 AI「看见」界面上有哪些按钮和输入框，不用截图再靠视觉模型瞎猜位置。`MCP` 是让 AI 助手连接外部工具的通用协议，装成 MCP 工具后，Claude Code 这类客户端可以直接调它来操作电脑。",
      "opinion": "如果你想让 AI agent 帮你在电脑上点菜单、填表单、操作那些没有 API 的桌面软件，这个工具提供了一条比截图识别更稳的路——直接读界面结构。先用自带的 `snapshot` 命令试试能不能读出你常用软件的界面，再决定要不要接进自己的 agent 里。📱 手机上：不支持，它靠的是 Windows/Mac/Linux 桌面系统的无障碍接口，Android 没有对应接口，装不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "装好 Node.js 的电脑上就能用。",
          "steps": [
            { "text": "全局安装命令行工具：", "code": "npm install -g agent-desktop", "after": "下载慢或失败就先开代理。" },
            { "text": "给一个正在打开的软件拍个「结构快照」试试：", "code": "agent-desktop snapshot --app 记事本 -i", "after": "把「记事本」换成你电脑上任意已打开的软件名也行。macOS/Linux 第一次用前要去系统设置里给它开「辅助功能」权限，运行 `agent-desktop permissions --guide` 能看到具体指引。" }
          ],
          "done": "运行 snapshot 命令后输出一堆按钮、输入框的信息（不是报错），就算装好了，可以照着 README 里的 `click`、`type` 命令试着操作界面。"
        }
      ],
      "url": "https://github.com/vercel-labs/agent-desktop"
    },
    {
      "emoji": "🛠",
      "repo": "anomalyco/hex",
      "deploy": ["pc"],
      "title": "按键说话，松手自动变文字粘贴",
      "lang": "Rust",
      "stars": "6,199",
      "week": "1,839",
      "body": "Hex 是一个本地语音听写工具：按住一个快捷键说话，松开后它把语音转成文字，直接粘贴到你当前在用的软件里，聊天框、备注、代码编辑器都行。转写在本机完成，不用联网调用在线接口，第一次用时会下载一个语音模型，下载完之后就能离线用。支持 macOS（仅 Apple silicon）、Windows（x64/ARM64）、Linux。",
      "explain": "「本地听写」是说语音转文字这步是在你自己电脑上跑的，不像不少语音输入工具要把录音传到云端服务器处理——不用担心说的话被传出去，也不用额外申请哪家公司的 API key。",
      "opinion": "比系统自带的语音输入好用的地方是不挑软件、不联网，适合懒得打字的时候念一段话让它直接变文字，比如写笔记、顺手记一句话。装起来成本不高，先装上试几天，不好用卸掉也不费什么事。📱 手机上：官方只给了桌面系统的安装包，没有 Android 版本，用不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 https://github.com/anomalyco/hex/releases ，下载最新版里 Windows 的安装包（x64 或 ARM64，看你电脑是哪种）", "after": "打不开就先开代理。" },
            { "text": "双击装好后打开 Hex，第一次运行会自动下载语音模型，等它下完（需要联网）" },
            { "text": "按住设置好的快捷键说一段话，松开试试看是不是自动变成文字粘贴出来了" }
          ],
          "done": "松开快捷键后，刚说的话变成文字出现在当前光标处，就算装好了。"
        }
      ],
      "url": "https://github.com/anomalyco/hex"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "deploy": ["read"],
      "title": "动画图解数据结构与算法",
      "lang": "Python",
      "stars": "132,155",
      "today": "72",
      "body": "一套开源、免费的数据结构与算法入门教程，用动画一步步图解每个算法怎么运作，比干看代码好理解不少。同一本书的代码用十几种语言各写了一遍，Python 版本也在其中，边看书边照着抄 Python 代码练手比较顺。支持简体中文、繁体中文、英文、日文等语言阅读。",
      "explain": "「数据结构与算法」是编程里比较基础但绕不开的一块——怎么高效存数据、怎么排序查找，看懂别人代码、面试时也经常会用到这些概念。「动画图解」就是把这些抽象操作画成一步步的小动画，比盯着代码脑内模拟轻松。",
      "opinion": "这本书在自学圈子里口碑一直不错，免费、中文、还带动画，比硬啃纯文字教材省劲。可以当成学完 Python 语法之后的下一步，不用全刷完，挑几个常用的（比如排序、查找、链表）看看就有收益。📱 手机上：不用装，网页直接看，手机浏览器打开一样能读。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器直接打开官网阅读：打开 https://www.hello-algo.com/ ，左侧选目录章节，右上角能切阅读语言和代码语言版本" },
            { "text": "想离线看或打印，去 Releases 页面下载 PDF/EPUB：打开 https://github.com/krahets/hello-algo/releases" }
          ],
          "done": "能打开网页看到动画图解，就算能看了（其实不用装）。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "💰",
      "repo": "beancount/beancount",
      "deploy": ["pc"],
      "title": "写文本文件记账，顺带学会复式记账",
      "lang": "Python",
      "stars": "6.2k",
      "body": "Beancount 是一种用纯文本记账的方法：在一个文本文件里按规定格式写「钱从哪个账户到哪个账户、花了多少」，它读进去后自动生成报表、算出每个账户的余额。配套的网页工具 Fava 能把这些记录做成好看的图表和余额表。因为记录方式是复式记账——一笔钱必须同时记「从哪来」和「去哪了」两笔——这套流程本身就是学复式记账原理的一种办法。",
      "explain": "「复式记账」是会计里的基本记账法：每笔收支都记两笔，一笔是钱从哪来，一笔是钱去哪了，两边永远对得上，这样才不会算错账，能随时看清钱的来龙去脉，银行、公司用的也是这套方法。普通流水账只记一笔，复式记账能帮你更清楚地看出钱到底花在哪一类上。",
      "opinion": "比起手机记账 App，这个要自己写文本文件，上手门槛高一点，但好处是数据全在自己的文件里，格式也逼着你去理解「这笔钱到底从哪个账户转到了哪个账户」，对学理财基础概念是个不错的练习；要是只想随手记一笔消费，不如用手机记账 App 方便。📱 手机上：Beancount 新版本依赖要编译原生代码，网上没查到安卓 aarch64 的预编译包，大概率装不上，建议在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "下面装的是 Beancount 本体加网页界面 Fava。",
          "steps": [
            { "text": "用 pip 装 Fava（会自动带上 Beancount）：", "code": "pip install fava", "after": "如果报错提示缺编译工具，换成 Python 3.12 版本再试一次，不保证一定能成功。" },
            { "text": "新建一个空文件，文件名随意、后缀是 .beancount，用文本编辑器打开，按 Beancount 的语法写入账户和交易记录，语法细节看 https://beancount.github.io/docs/ " },
            { "text": "启动网页界面，把文件名换成你自己的账本文件：", "code": "fava ledger.beancount" },
            { "text": "浏览器打开 http://localhost:5000 查看余额和图表" }
          ],
          "done": "浏览器里能看到账户余额和图表，就算装好了。"
        }
      ],
      "url": "https://github.com/beancount/beancount"
    },
    {
      "emoji": "🎨",
      "repo": "sherlock-project/sherlock",
      "deploy": ["phone", "pc"],
      "title": "查一个用户名在各平台留下的账号痕迹",
      "lang": "Python",
      "stars": "108,968",
      "today": "2,393",
      "body": "Sherlock 是个命令行工具，输入一个用户名，它会去 400 多个社交网站挨个查这个用户名有没有被注册，把查到的账号链接列出来。常被用来做隐私自查——看看自己到底在多少个网站上留下过同名账号，方便想起来都注销掉。",
      "explain": "OSINT 全称「开源情报」，意思是只用网上公开能查到的信息去拼出一个人的情况，是安全研究常用的手法；这个工具做的就是其中一小块——扫一遍各网站看某个用户名是否存在。",
      "opinion": "拿自己的常用用户名跑一遍，能快速看出自己到底在多少个早就忘了的网站上注册过号，是清理个人信息、降低隐私风险的一个简单起点；不要拿别人的用户名去查，那就是在未经同意的情况下搜集别人的信息了。📱 手机上：Termux 能装，它主要靠 requests 这类纯 Python 库发请求，没有需要编译的原生依赖。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "装好 pipx：", "code": "pip install pipx" },
            { "text": "用 pipx 装 Sherlock：", "code": "pipx install sherlock-project" },
            { "text": "换成你自己的用户名试一下：", "code": "sherlock 你的用户名" }
          ],
          "done": "命令跑完后当前目录出现一个「用户名.txt」，里面列着查到的账号链接，就算成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装好 pipx：", "code": "pip install pipx" },
            { "text": "用 pipx 装 Sherlock：", "code": "pipx install sherlock-project", "after": "下载慢或失败就先开代理。" },
            { "text": "换成你自己的用户名试一下：", "code": "sherlock 你的用户名" }
          ],
          "done": "命令跑完后当前目录出现一个「用户名.txt」，里面列着查到的账号链接，就算成功了。"
        }
      ],
      "url": "https://github.com/sherlock-project/sherlock"
    }
  ]
};
