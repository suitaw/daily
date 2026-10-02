DAILY_DATA["github/2026-10-02"] = {
  "date": "2026-10-02",
  "highlight": "今天最值得动手试的是 `Pake`——不用在自己电脑装 Rust，直接在 GitHub Actions 网页上点几下，就能把你自己做的单文件 HTML 小工具打包成一个独立的 Windows 桌面应用。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "tw93/Pake",
      "title": "零代码把你自己的网页/HTML 小工具打包成桌面应用",
      "lang": "Rust",
      "stars": "61,862",
      "today": "35",
      "body": "`Pake` 是一个开源打包工具，能把任意网页地址打包成独立的桌面应用（Mac/Windows/Linux 都支持），官方已经打包好了 ChatGPT、Twitter、YouTube 这类热门网站可以直接下载用。\n它最大的用处是也能打包你自己的网页——填一个网址、一个名字，就能生成一个独立的桌面程序，不用额外装浏览器。",
      "explain": "打包成桌面应用，意思是把一个网页套上一层壳变成能在电脑上像普通软件一样双击打开、单独出现在任务栏的程序，而不是开浏览器再输网址；它底层用的是 Tauri 这种比 Electron 更轻的技术，装出来的程序占用空间小很多。",
      "opinion": "你平时做的单文件 HTML 小工具都托管在 GitHub Pages 上，用这个工具可以把它们打包成一个独立的 Windows 桌面程序，发给朋友用也不用先解释「这是个网页」；下面给的是不用在自己电脑装 Rust 的在线打包方法，省了最麻烦的一步。\n📱 手机上：触发打包这一步可以在手机浏览器完成（都是 GitHub 网页操作），但打包出来的是 Windows/Mac 安装包，手机上装不了也跑不了，下载好之后要传到电脑上才能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑通用（GitHub Actions 在线打包，不用装 Rust）",
          "intro": "全程在 GitHub 网页上点几下就行，打包产物是给电脑用的安装包。",
          "steps": [
            { "text": "打开 Pake 仓库页面，点右上角「Fork」，复制一份到自己账号下", "code": "https://github.com/tw93/Pake" },
            { "text": "进入 fork 后的仓库，点「Actions」标签页；如果提示要先启用，点一下「I understand my workflows, go ahead and enable them」" },
            { "text": "左侧列表选「Build App With Pake CLI」，点右边的「Run workflow」" },
            { "text": "表单里填你要打包的网页地址（比如你自己 HTML 工具的 GitHub Pages 链接）和应用名字，平台选 Windows，然后点绿色的「Run workflow」按钮" },
            { "text": "等构建跑完（首次大概 10~15 分钟），点进这次运行记录", "after": "构建成功会显示绿色勾" },
            { "text": "下滑找到「Artifacts」区域，下载打包好的安装包" }
          ],
          "done": "下载下来的安装包传到 Windows 电脑上，双击能装上并打开，看到的内容就是你填的那个网页，说明打包成功。"
        }
      ],
      "url": "https://github.com/tw93/Pake"
    },
    {
      "emoji": "💰",
      "repo": "glink25/Cent",
      "title": "免服务器的多人记账网页，能自动导入支付宝微信账单",
      "body": "`Cent` 是一个开源的记账 Web App，数据不存在作者的服务器上，而是存进你自己的 GitHub 仓库；支持导入支付宝、微信账单自动生成记账记录，还有统计图表和消费地图。\n不连接真实银行账户，不涉及自动交易。",
      "explain": "它用你的 GitHub 账号登录授权后，把记账数据存进你自己名下的一个仓库里，相当于「记账本」就是你自己的一份 GitHub 数据，作者看不到也拿不走；这种「数据存自己账号」的方式比交给某个公司的服务器更让人放心一点。",
      "opinion": "你已经有 GitHub 账号，用它登录基本零成本上手，比自己注册一堆记账 App 账号省事；支持导入支付宝/微信账单这点对日常记账挺实用，能省掉手动一条条输的功夫。授权范围只是读写它自己建的那个数据仓库，不涉及你其他仓库，也不碰真实银行卡，风险可控。\n📱 手机上：能用——纯网页/PWA，手机浏览器打开登录就能记账，还能「添加到主屏幕」当成 App 用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑通用（网页版，不用部署）",
          "steps": [
            { "text": "浏览器打开官方在线版", "code": "https://cent.linkai.work" },
            { "text": "点登录按钮，选「使用 GitHub 登录」，授权后会自动在你的 GitHub 账号下创建一个专门存数据的仓库" },
            { "text": "（可选）手机上可以把这个网址「添加到主屏幕」，图标就跟普通 App 一样" }
          ],
          "done": "登录后能看到记账主界面，手动记一笔支出，数字和统计图跟着更新，就是用上了。"
        }
      ],
      "url": "https://github.com/glink25/Cent"
    },
    {
      "emoji": "📚",
      "repo": "rohitg00/ai-engineering-from-scratch",
      "title": "从数学基础到 AI Agent 的免费开源课程，带可运行代码",
      "lang": "Python",
      "stars": "62,448",
      "week": "6,469",
      "body": "这是一套开源的「AI 工程」学习课程，20 个阶段、500 多节课，从线性代数、概率这些数学基础讲到机器学习、LLM、Agent 开发，每节课都配有能直接跑的代码示例。\n可以直接在官网看文字教程，也可以把仓库 clone 下来跑代码。",
      "explain": "课程里的「线性代数」「概率论」是机器学习背后用到的数学工具，不是要你先去学一整本数学教材，课程是结合着代码讲「这个数学概念在 AI 里到底起了什么作用」；「Agent 开发」就是你平时在做的那类调 LLM API 写智能小工具。",
      "opinion": "你在学 Python 又想往 AI 应用方向做深一点，这套课程从最基础的数学直接连到 Agent 开发，刚好能补上「只会调 API、不知道背后原理」这块；不用从头按顺序啃完，挑和 LLM/Agent 相关的靠后阶段章节看，用 Python 跑一跑示例代码就有收获。\n📱 手机上：能看网页教程，想跑代码的话 git clone 加 python3 跑脚本大概率没问题——基础阶段代码多是用 Python 标准库做演示；某节课要装 numpy 这类库的话，Termux 里 `pip install numpy` 一般装得上，但没有逐节验证，遇到装不上的库就说明那一节暂时跑不了，换下一节。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "先看网站版免安装教程，想跑代码再做下面几步", "code": "https://aiengineeringfromscratch.com" },
            { "text": "把仓库拉到本地（这条命令要走代理）", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/rohitg00/ai-engineering-from-scratch.git" },
            { "text": "进目录跑第一阶段的示例代码", "code": "cd ai-engineering-from-scratch\npython3 phases/01-math-foundations/01-linear-algebra-intuition/code/vectors.py" }
          ],
          "done": "终端能看到脚本打印出的计算结果，没有报错退出，就是跑起来了；若某节课要装的库装不上，换下一节即可。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "浏览器直接看网站教程，或者把仓库拉到本地", "code": "git clone https://github.com/rohitg00/ai-engineering-from-scratch.git", "after": "下载慢或失败就先开代理再试" },
            { "text": "进目录跑第一阶段的示例代码", "code": "cd ai-engineering-from-scratch\npython phases/01-math-foundations/01-linear-algebra-intuition/code/vectors.py" }
          ],
          "done": "终端能看到脚本打印出的计算结果，没有报错退出，就是跑起来了。"
        }
      ],
      "url": "https://github.com/rohitg00/ai-engineering-from-scratch"
    },
    {
      "emoji": "🤖",
      "repo": "alirezarezvani/claude-skills",
      "title": "388 个现成的 Claude Code 技能包，装完直接用",
      "lang": "Python",
      "stars": "27,184",
      "week": "743",
      "body": "这是一个 Claude Code 技能（skill）合集，收了 388 个按工程、营销等分类整理好的技能包，装进 Claude Code 后能直接调用，不用自己从头写配置。\n同一套技能也适配 OpenAI Codex、Gemini CLI 等其他 AI 编码工具。",
      "explain": "Claude Code 里的「技能（skill）」是一份教它「怎么按某种固定流程干一件事」的说明文件，比如「怎么做代码审查」「怎么写测试」；装了对应技能后，AI 遇到类似任务会自动照着这份说明做，不用你每次重新解释一遍。",
      "opinion": "你平时就用 Claude Code 写代码，挑几个跟你项目类型相关的工程类技能装上试试，能省掉一些重复描述需求的功夫；项目收录的技能很多，不用全装，按文件夹名找自己用得上的装就行。\n📱 手机上：能装——都是 Claude Code 自带的 `/plugin` 命令操作，Termux 里跑 Claude Code 的话流程跟电脑上一样。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑通用",
          "intro": "在 Claude Code 里直接跑命令，不用额外装东西。",
          "steps": [
            { "text": "在 Claude Code 里添加这个技能市场", "code": "/plugin marketplace add alirezarezvani/claude-skills" },
            { "text": "挑一个分类装上，比如工程类技能合集", "code": "/plugin install engineering-skills@claude-code-skills" }
          ],
          "done": "Claude Code 提示安装成功；之后让它做对应类型的任务时，回复里会体现出按技能里的步骤在做。"
        }
      ],
      "url": "https://github.com/alirezarezvani/claude-skills"
    },
    {
      "emoji": "🎨",
      "repo": "xifangczy/cat-catch",
      "title": "浏览器扩展，一键嗅探网页里的视频/音频资源",
      "lang": "JavaScript",
      "stars": "22,115",
      "today": "16",
      "body": "`cat-catch` 是一款浏览器扩展，能自动嗅探当前网页加载过的视频、音频、m3u8 流媒体等资源，列出来点一下就能下载，不用找专门的下载工具。\n支持 Chrome、Edge、Firefox。",
      "explain": "m3u8 是很多视频网站用来分段传输视频的一种格式，直接右键保存网页通常保存不到真正的视频文件；这类嗅探工具是去抓网页背后请求过的那些资源地址，把能下载的文件列出来。",
      "opinion": "平时在网上找素材、保存教程视频音频会用得上，比到处搜「xx下载器」网站靠谱，也不用把链接上传到不明网站；具体某个网站能不能嗅探到，取决于那个网站怎么加载资源，不是百分百都好用。\n📱 手机上：装不了——安卓的 Chrome/Edge 不支持装浏览器扩展（只有少数小众浏览器支持，官方 README 没提到相关适配），这个工具目前只能在电脑浏览器上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "Chrome 用户，打开应用商店页面安装", "code": "https://chromewebstore.google.com/detail/cat-catch/jfedfbgedapdagkghmgibemcoggfppbb" },
            { "text": "Edge 用户，打开微软扩展商店页面安装", "code": "https://microsoftedge.microsoft.com/addons/detail/oohmdefbjalncfplafanlagojlakmjci" },
            { "text": "商店打不开的话，去 Releases 页面右键另存为下载 crx 文件，再在浏览器扩展管理页打开「开发者模式」，把 crx 文件拖进页面安装", "code": "https://github.com/xifangczy/cat-catch/releases" }
          ],
          "done": "浏览器右上角出现猫爪图标，打开一个有视频的网页点一下图标，能看到抓到的资源列表，就是装好了。"
        }
      ],
      "url": "https://github.com/xifangczy/cat-catch"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "title": "每月一期的开源项目推荐月刊，专挑入门好玩的",
      "lang": "Python",
      "stars": "179,569",
      "today": "163",
      "body": "`HelloGitHub` 是一份已经出了 100 多期的月刊，每期挑一批对新手友好、有趣、好上手的开源项目做简单介绍，涵盖各种语言和类型，不止 AI。\n纯内容仓库，`content` 文件夹下按期号存了历史所有期的 Markdown 文件。",
      "explain": "这个仓库本身不是一个要装的工具，是别人帮你筛选过的「开源项目精选清单」，省得自己天天刷 GitHub trending 找有意思的项目。",
      "opinion": "可以当成平时找新工具、找学习素材的一个来源，每期项目不多、介绍简短，刷起来不费时间；比起直接看 trending 榜（很多是面向公司和重度开发者的冷门库），这份月刊更照顾新手。\n📱 手机上：随时能看——纯网页/Markdown 文字内容，手机浏览器打开官网或仓库里的 `content` 目录翻看就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器打开官网，按分类挑感兴趣的项目", "code": "https://hellogithub.com" },
            { "text": "想直接看某一期原文，去仓库的 content 目录翻对应期号的 Markdown 文件", "code": "https://github.com/521xueweihan/HelloGitHub/tree/master/content" }
          ],
          "done": "打开后能看到一期期的项目列表和简短介绍，点进某个项目链接能跳到它的 GitHub 页面，就是找对地方了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    }
  ]
};
