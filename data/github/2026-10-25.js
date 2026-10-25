DAILY_DATA["github/2026-10-25"] = {
  "date": "2026-10-25",
  "highlight": "今日看点：最值得先试的是 hallmark——给 Claude Code 装一个「设计技能」，几分钟装好，马上能看出自己做的页面是不是还那么一眼 AI 风。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Nutlope/hallmark",
      "deploy": ["phone", "pc"],
      "title": "让 Claude Code 写的网页不再一眼 AI 风",
      "lang": "CSS",
      "stars": "32,141",
      "today": "455",
      "body": "给 Claude Code、Codex、Cursor 用的一个「设计技能」，内置几十套真实配色和排版风格，AI 写页面时会照着这些风格来，而不是默认那种一看就知道是 AI 生成的样式。还带一个自动检查工具，能扫描页面找出常见的「AI 风」问题（比如千篇一律的渐变紫、居中大标题）并给出修改建议。",
      "explain": "「设计技能」其实就是一份写给 AI 看的说明书，AI 动手写代码前会先读一遍，照着里面的风格和规矩来做，相当于给新来的同事发一本风格手册；自动检查那部分则有点像拼写检查，只不过检查的是页面「长得像不像 AI 糊的」，不是检查文字错别字。",
      "opinion": "平时写的都是单文件 HTML 小工具，页面好看不好看全靠 Claude Code 自己发挥，装上这个技能相当于白嫖一份现成的设计经验，试错成本很低——不满意随时能关掉。可以先拿一个已经上线的小工具跑一下 audit，看它能挑出什么毛病。📱 手机上：核心功能（技能说明+静态检查）是纯文字加脚本，Termux 装 Claude Code 插件没问题；只有带截图的浏览器检查需要额外装 Chrome，手机上大概率跑不起来，但不影响日常使用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "打开要用这个技能的项目文件夹，装到当前项目：", "code": "https_proxy=http://127.0.0.1:7890 npx skills add nutlope/hallmark -g", "after": "加了 `-g` 是装成全局技能，所有项目都能用；只想这一个项目用就去掉 `-g`。也可以用 Claude Code 插件市场装：先 `/plugin marketplace add nutlope/hallmark`，再 `/plugin install hallmark@hallmark`。" },
            { "text": "进 Claude Code 对话框，试着让它套用这个风格写一个页面：", "code": "/hallmark 做一个记录每天学习进度的页面" },
            { "text": "想检查已经上线的页面，换成 audit：", "code": "/hallmark audit ./index.html" }
          ],
          "done": "在 Claude Code 里打 `/hallmark` 有反应、能正常生成或给出检查结果，就是装好了。"
        }
      ],
      "url": "https://github.com/Nutlope/hallmark"
    },
    {
      "emoji": "🤖",
      "repo": "ruvnet/ruflo",
      "deploy": ["pc"],
      "title": "给 Claude Code 加一层「多智能体+长期记忆」",
      "lang": "TypeScript",
      "stars": "79,052",
      "week": "3,241",
      "body": "在 Claude Code 和 Codex 之上加一层协调能力：能把一个大任务拆给几个专门角色的子智能体同时干，带一份跨会话都记得的持久记忆，还有个面板能看到每个子任务跑到哪了。能直接当 Claude Code 插件装，也能单独装成命令行工具。",
      "explain": "「多智能体/swarm」说白了就是把一个大活儿分给几个「虚拟同事」同时做，再把结果拼起来，不是一个人从头扛到尾；「持久记忆」是让 AI 下次打开项目还记得上次聊过什么，不用每次重新交代一遍背景。",
      "opinion": "手上同时在跟的项目不少，每次打开 Claude Code 都要重新交代背景确实麻烦，持久记忆这块听着是真能省事；不过它功能做得比较重（联邦协作、合规模式这些明显是给团队用的），日常用只装基础功能、跑一遍设置向导就够，复杂的那些可以不管，先拿一个小项目试一两周看是不是真的省事。📱 手机上：不保证，它带 Rust 原生组件，Termux 上能不能装不确定，建议先在电脑上试，装不上的表现大概是 npm 报错找不到对应平台的预编译文件。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "全局装一下命令行工具（下载慢或失败就先开代理）：", "code": "npm install -g ruflo@latest" },
            { "text": "跑一次设置向导，跟着提示选基础功能就行：", "code": "npx ruflo@latest init wizard" },
            { "text": "也可以不走命令行，直接在 Claude Code 里装成插件：", "code": "/plugin marketplace add ruvnet/ruflo\n/plugin install ruflo-core@ruflo", "after": "这条路需要比较新的 Claude Code 版本，太旧会装不上，先更新一下 Claude Code 再试。" }
          ],
          "done": "设置向导跑完不报错，Claude Code 里能找到 ruflo 相关的插件或命令，就算装好了。"
        }
      ],
      "url": "https://github.com/ruvnet/ruflo"
    },
    {
      "emoji": "🛠",
      "repo": "heygen-com/hyperframes",
      "deploy": ["pc"],
      "title": "把 HTML 页面直接渲染成 MP4 视频",
      "lang": "TypeScript",
      "stars": "71,492",
      "week": "5,633",
      "body": "能把用 HTML/CSS 写的页面和动画，直接转成一段能播放的 MP4 视频，专门给 AI 和自动化场景用，自带命令行工具和一个能在网页里预览效果的 Studio。原理是用无头浏览器把页面逐帧截下来，再用 FFmpeg 编码成视频。",
      "explain": "「无头浏览器（headless Chrome）」是一个看不见界面、只在后台跑的浏览器，专门用来截图或录屏；「FFmpeg」是处理音视频的老牌免费工具，很多视频软件底层都在用它。",
      "opinion": "做的都是单文件 HTML 小工具，想把效果发出去给人看时，一般只能对着屏幕用录屏软件录，这个工具能直接把网页变成一段视频文件，不用再手动录屏剪辑；装一次 Node 和 FFmpeg 就能反复用，值得拿一个已经做好的小项目练一下，不满意就当没装过。📱 手机上：不标，它要调起无头浏览器截图再编码成视频，这套流程 Termux 里跑不起来，这个工具电脑专用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "也可以先不装，直接打开 https://hyperframes.dev/studio 在网页里试效果，觉得好用再装本地版。",
          "steps": [
            { "text": "先装好 Node.js 22 及以上版本，再装好 FFmpeg（去官网下载后把它加进系统 PATH）。" },
            { "text": "在要做视频的文件夹里初始化一个项目（下载慢或失败就先开代理）：", "code": "npx hyperframes init my-video\ncd my-video" },
            { "text": "本地预览效果：", "code": "npx hyperframes preview" },
            { "text": "满意了就渲染成视频文件：", "code": "npx hyperframes render" }
          ],
          "done": "my-video 文件夹里多出一个能正常播放的 .mp4 文件，就是成功了。"
        }
      ],
      "url": "https://github.com/heygen-com/hyperframes"
    },
    {
      "emoji": "📚",
      "repo": "PlexPt/awesome-chatgpt-prompts-zh",
      "deploy": ["read"],
      "title": "中文版「怎么跟 AI 说话」提示词合集",
      "stars": "63,952",
      "today": "34",
      "body": "收集了几十种让 AI 扮演特定角色的中文提示词模板，比如让 AI 扮演 Linux 终端、翻译、面试官、文字冒险游戏主持人，照抄照改就能用；还配了一份 JSON 格式文件，方便自己的程序直接读取调用。",
      "explain": "「提示词（prompt）」就是下给 AI 的那段开场指令，决定它接下来用什么身份、什么语气回答；可以理解成跟新同事交代任务——交代得越细、越具体，干出来的活越对路。",
      "opinion": "自己在调国内模型的 API 做工具，这份合集能直接当现成的开场指令抄过去用，更值得看的是它怎么把一句笼统的要求写细、写准，对自己写 system prompt 有参考价值；纯文本列表，不用装任何东西，打开仓库页面直接看。📱 手机上：能看，就是个网页列表，手机浏览器打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库页面看完整列表：`https://github.com/PlexPt/awesome-chatgpt-prompts-zh`；想要程序能直接读的版本，看仓库里的 `prompts-zh.json`。" }
          ],
          "done": "打开页面能看到一长串角色提示词，就对了。"
        }
      ],
      "url": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
    },
    {
      "emoji": "💰",
      "repo": "mtotschnig/MyExpenses",
      "deploy": ["phone"],
      "title": "开源记账 App，手机上直接装",
      "stars": "1.2k",
      "body": "一个做了十几年、还在持续更新的开源安卓记账 App。支持多账户、转账记录、周期性支出提醒，账单能导入导出成表格文件，还能给 App 单独设密码或锁屏保护；界面主题和字号都能调，也有对账功能。",
      "explain": "「F-Droid」是一个专门收开源安卓 App 的应用商店，跟应用宝、Google Play 类似，但只收开源、不塞广告的 App；「导入导出表格文件（QIF/CSV）」就是能把账单导出成 Excel 能打开的表格，方便自己再整理分析。",
      "opinion": "正在学理财，记账是最基础的第一步，这个 App 不用联网、不用绑银行卡，数据存在手机本地，装个现成的 App 比自己从零写一个记账工具快得多；先拿它把每天的流水记顺手，等以后想自己做记账工具，它的分类方式也能当参考。📱 手机上：能用，是普通安卓 App，F-Droid 或 Google Play 直接装，不用 Termux、不用敲命令。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机",
          "steps": [
            { "text": "有 F-Droid 商店的，直接搜「My Expenses」装：[F-Droid 页面](https://f-droid.org/packages/org.totschnig.myexpenses)；没装过 F-Droid，去 Google Play 搜同名 App 装也一样。" },
            { "text": "打开 App，先建一个账户（现金、储蓄卡都行），记第一笔支出试试。" },
            { "text": "想更安心的话，去设置里打开「密码或锁屏保护」锁住这个 App。" }
          ],
          "done": "能看到账户余额，记完一笔支出后余额跟着变化，就是用起来了。"
        }
      ],
      "url": "https://github.com/mtotschnig/MyExpenses"
    }
  ]
};
