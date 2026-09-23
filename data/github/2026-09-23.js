DAILY_DATA["github/2026-09-23"] = {
  "date": "2026-09-23",
  "highlight": "今天最值得动手试的是 `davila7/claude-code-templates`——你已经在用 Claude Code，这个项目把上百套现成的 agent、斜杠命令、MCP 配置打包好了，一条 npx 命令就能挑几个装进项目，比自己从零摸索省事不少。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "davila7/claude-code-templates",
      "title": "一键给Claude Code装现成配置模板",
      "stars": "31,120",
      "today": "64",
      "body": "claude-code-templates 是一个给 Claude Code 用的模板商店：作者收集了 100 多套现成的 agent（专门角色）、command（斜杠命令）、MCP 连接器和项目设置，运行一条命令就能弹出交互菜单，挑几个装进当前项目的 `.claude/` 目录，不用自己从零写配置文件。也有网页版目录 aitmpl.com，能先在浏览器里翻一遍有哪些模板再决定装哪个。",
      "explain": "agent、command 这些概念你用 Claude Code 应该不陌生：command 是打 `/` 开头的斜杠命令，agent 是给 Claude 指定一个专门干某类活的「角色设定」，MCP 是让 AI 连接外部工具（比如 GitHub、数据库）的通用接口。这个项目就是把别人写好的这几类配置打包收集起来，让你直接拿来用，不用自己一点点摸索怎么写。",
      "opinion": "你平时已经在用 Claude Code，与其自己摸索怎么写 agent 和斜杠命令，不如先去这个仓库或 aitmpl.com 翻一遍，看有没有正好适合你「写单文件 HTML 小工具/Agent」场景的现成配置，能省不少试错时间；但模板是社区众多贡献者一起加的，装进项目前最好先打开看看内容，别不看就无脑装一堆。📱 手机上：能装。它是靠 npx 跑的纯 Node.js 命令行工具，不涉及要编译的原生模块，Termux 里现成的 Node v26 直接能跑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "在你想加模板的项目目录里执行。",
          "steps": [
            { "text": "进入你要配置的项目目录，执行", "code": "npx claude-code-templates@latest", "after": "第一次运行 npx 会先下载这个包，稍等一下" },
            { "text": "弹出的交互菜单里，用方向键选你要装的 agent / command / MCP，回车确认" },
            { "text": "（可选）想跳过菜单直接装某个具体模板，可以带上参数一次装好，比如", "code": "npx claude-code-templates@latest --agent development-tools/code-reviewer --yes" },
            { "text": "先想看看有哪些模板可选，也能直接去网页版目录翻", "code": "https://aitmpl.com" }
          ],
          "done": "项目目录下多出 `.claude/agents`、`.claude/commands` 之类的文件夹，里面是刚装好的配置"
        }
      ],
      "url": "https://github.com/davila7/claude-code-templates"
    },
    {
      "emoji": "🤖",
      "repo": "RapidAI/RapidOCR",
      "title": "免费开源OCR，让程序读懂图片里的文字",
      "lang": "Python",
      "stars": "7,926",
      "today": "21",
      "body": "RapidOCR 是一个开源的文字识别（OCR）工具，能从图片、截图、PDF 里把文字识别出来变成能复制的文本，支持中英文等多种语言，装好之后完全离线跑，不用联网、不用调用任何在线服务。官方给了 Python、C++、Java、C# 好几种语言的版本，多数人直接用 Python 版就够。",
      "explain": "OCR 就是「看图识字」：给它一张图片，它能认出里面的文字变成文本，比如拍一张截图或者账单照片，它就能把上面的字抠出来。项目底层用的是 ONNX 这种通用模型格式，好处是不用装一整套很重的深度学习框架，跑起来也比较轻。",
      "opinion": "如果你想做的小工具/Agent 需要「看图」这一步——比如识别截图里的文字发给大模型分析、自动读账单上的金额去记账——这个库能直接当积木用，装完调两行代码就能拿到识别结果。它本身是个 Python 库，不是一个能双击打开的软件，得写代码调用它或者包成自己的小工具才能用。📱 手机上：不保证。它依赖的 onnxruntime 官方预编译包是给电脑上标准 Linux（glibc）系统编的，Termux 用的是安卓自己的 C 库，版本不一定对得上，装的时候如果报错找不到匹配的安装包，就说明装不上，换电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装库", "code": "pip install rapidocr onnxruntime" },
            { "text": "写几行代码试一下识别效果（存成 test.py 运行）", "code": "from rapidocr import RapidOCR\n\nengine = RapidOCR()\nresult = engine(\"要识别的图片路径或网址\")\nprint(result)", "after": "想看识别框画在图上什么样，可以再加一行 result.vis(\"vis_result.jpg\")" }
          ],
          "done": "运行后终端打印出图片里识别到的文字内容"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证）",
          "steps": [
            { "text": "先试着装库，失败就说明这条路走不通", "code": "pip install rapidocr onnxruntime" },
            { "text": "装成功的话，用跟电脑一样的代码试一下识别", "code": "from rapidocr import RapidOCR\n\nengine = RapidOCR()\nresult = engine(\"要识别的图片路径或网址\")\nprint(result)" }
          ],
          "done": "运行后终端打印出图片里识别到的文字内容；如果第一步 pip install 就报错编译失败，就换电脑装"
        }
      ],
      "url": "https://github.com/RapidAI/RapidOCR"
    },
    {
      "emoji": "🤖",
      "repo": "TencentCloud/Octop",
      "title": "自己搭一个能连飞书/QQ的AI助手后台",
      "lang": "Python",
      "stars": "4,634",
      "week": "2,148",
      "body": "Octop 是一个能自己部署的 AI 助手平台：一个进程里就能跑起来，自带网页控制台、命令行，还能接飞书、钉钉、QQ 这些即时通讯软件当聊天入口，支持多个用户共用，也能配多个不同角色的 Agent，还带定时任务（cron）功能，能让 AI 按时间自动干活。",
      "explain": "「自托管」意思是这个 AI 助手跑在你自己的电脑/服务器上，不是用别人家的云服务，数据和对话记录都在你自己手上。cron 是一种「定时闹钟」机制，可以设置「每天几点自动做一件事」，比如让 AI 每天早上自动整理一份新闻摘要发到你的聊天软件里。",
      "opinion": "如果你想更进一步，做一个「随时能在手机聊天软件里叫得动」的私人 AI 助手，而不是只在网页里用，这个项目提供了现成的骨架：接好一个大模型 API（豆包、DeepSeek 都行），配上飞书或 QQ 机器人，就有了一个能收发消息、按时自动干活的助手。项目比前面这类单文件小工具重不少，涉及初始化配置和长期跑着的后台进程，值得花点时间但别指望十分钟搞定。📱 手机上：不保证。一键安装脚本大概是照标准 Linux 环境写的，Termux 环境和包管理器不一样，能不能直接跑通没有把握；跑的时候如果报「命令不存在」之类的错，就说明脚本不兼容，换电脑装更稳。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，PowerShell）",
          "steps": [
            { "text": "打开 PowerShell，跑一键安装脚本", "code": "irm https://finnie-1258344699.cos.ap-guangzhou.myqcloud.com/octop/install.ps1 | iex", "after": "下载慢或失败就先开代理" },
            { "text": "初始化配置，会问你要接哪个大模型（填豆包/DeepSeek 的接口地址和 API Key 就行）", "code": "octop init" },
            { "text": "启动", "code": "octop run" }
          ],
          "done": "命令行提示服务已启动，浏览器打开它给出的网页控制台地址能看到界面"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证）",
          "steps": [
            { "text": "跑一键安装脚本试试", "code": "curl -fsSL https://finnie-1258344699.cos.ap-guangzhou.myqcloud.com/octop/install.sh | bash" },
            { "text": "跑通了的话，初始化配置", "code": "octop init" },
            { "text": "启动", "code": "octop run", "after": "手机上长时间挂着后台进程容易被系统杀掉，记得开着 Termux 别切太久" }
          ],
          "done": "命令行提示服务已启动；如果安装脚本中途报找不到某个系统命令就说明装不上，换电脑装"
        }
      ],
      "url": "https://github.com/TencentCloud/Octop"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "title": "每周五更新的科技资讯合集，AI理财话题都有",
      "stars": "104,462",
      "today": "622",
      "body": "《科技爱好者周刊》由 ruanyf 主持，每周五更新一期，汇总一周内值得读的科技资讯、工具、文章、开源项目，也常年附带一个「谁在招人」的程序员求职信息板块。内容按年月归档成一个个 markdown 文件，直接在 GitHub 上就能读。",
      "explain": "这类「周刊」是圈内很常见的一种资讯整理形式：作者把一周看到的好东西筛一遍，浓缩成一篇，不用你自己满世界刷新闻。文中经常会出现「一周信息量」这种板块，把比较猎奇或有意思的社会新闻也放进来，不全是硬核技术内容。",
      "opinion": "这份周刊话题很杂，从 AI、编程语言更新到理财、职场、社会新闻都有，适合当碎片时间读物快速扫一遍，遇到感兴趣的条目再点进去细看，不用逐字读完。里面偶尔会出现开源项目推荐、理财相关的文章链接，可以顺手收藏几个自己感兴趣的方向。📱 手机上：能看，就是在 GitHub 网页上翻 markdown 文件，手机浏览器打开链接直接读就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库首页，顶部就有最新一期的链接，点进去看", "code": "https://github.com/ruanyf/weekly" },
            { "text": "往期按年份归档在 docs 目录下，想翻旧的也能找到" }
          ],
          "done": "打开的 markdown 页面里能看到本期的资讯条目列表"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    },
    {
      "emoji": "📚",
      "repo": "d2l-ai/d2l-zh",
      "title": "免费中文深度学习教材，能跑代码那种",
      "lang": "Python",
      "stars": "81,021",
      "today": "84",
      "body": "《动手学深度学习》是一本免费、可在线阅读的中文教材，从数学基础一路讲到能跑起来的深度学习代码，被 70 多个国家、500 多所大学用来教学，中英文版本都有。全书配套可运行的代码示例，边看边改代码观察结果。",
      "explain": "「深度学习」是机器学习里现在最火的一个分支，聊天机器人、图片识别背后的技术基本都属于这一类；书名里的「动手学」是说不光讲理论，每一章都配着能直接跑起来改一改试试看的代码。这本书对数学（线性代数、微积分）和 Python 基础都有一定要求，是本正经教材，不是几分钟能翻完的科普文。",
      "opinion": "如果你对「大模型到底怎么训出来的」这类问题好奇，想往底层多懂一点，这本书是中文圈公认的入门教材之一，免费在线看不用装任何东西；但书本身对数学和编程基础要求不低，别指望轻松读完，当成一本可以放着慢慢啃、遇到具体知识点再回来查的参考书更现实，不用有压力从头背到尾。真要跑里面的代码得装 Python 和 PyTorch 一类的深度学习框架，那部分环境搭建量不小，先把书当纯阅读材料也完全可以。📱 手机上：能看。它就是个免费网页教材，手机浏览器直接打开网址读就行；真要跑里面的代码，配置那套深度学习环境在手机上不现实，那部分建议放在电脑上弄。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "intro": "只看书不跑代码的话，直接在线读就行。",
          "steps": [
            { "text": "打开中文版第二版在线阅读网址", "code": "https://zh.d2l.ai" },
            { "text": "想跑书里的代码，先看官方安装指南，里面有具体的 Python/框架版本和 pip 命令", "code": "https://zh.d2l.ai/chapter_installation/index.html", "after": "这一步涉及环境搭建，建议在电脑上弄，手机上不现实" }
          ],
          "done": "网页打开后能看到目录和正文，点章节标题就能跳读"
        }
      ],
      "url": "https://github.com/d2l-ai/d2l-zh"
    }
  ]
};
