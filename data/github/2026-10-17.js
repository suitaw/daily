DAILY_DATA["github/2026-10-17"] = {
  "date": "2026-10-17",
  "highlight": "今天最值得试的是 `obra/superpowers`——给 Claude Code 装一套写代码的「行为规范」，一条插件命令，不用改任何现有项目，就能让它写代码前先想清楚、写完自己检查。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "obra/superpowers",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 装一套开发方法论技能包",
      "lang": "Shell",
      "stars": "300,681",
      "today": "973",
      "body": "superpowers 把头脑风暴、写计划、测试驱动开发、系统化调试、代码审查这一整套开发流程打包成可安装的「技能」，装进 Claude Code 后会在合适的时机自动触发，不用每次在提示词里重新描述。同时支持 Claude Code、Codex、Cursor 等十几种 AI 编程工具，不同工具安装方式不一样。项目开源免费，官方说明没有列出额外运行依赖。",
      "explain": "「技能(skill)」可以理解成给 AI 编程助手配的一套操作手册，告诉它遇到什么情况该按什么步骤来，比如先问清楚需求再动手。「测试驱动开发(TDD)」是先写一个会失败的测试，再写代码让测试通过，最后再整理代码的套路，能少踩「写完才发现逻辑错了」的坑。",
      "opinion": "你平时写代码靠自己盯着改，装上这套技能包后，Claude Code 在规划任务、写完代码自检这些环节会多一层自动提醒，对没人帮你把关代码质量的情况挺实用。先装官方市场版本试几天就知道合不合手，不合适卸掉也简单。📱 手机上：装的只是 Claude Code 的插件配置，不涉及编译，Termux 里能跑 Claude Code 的话，敲一条斜杠命令就能装上。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "在 Claude Code 里敲命令就行，没有额外依赖。",
          "steps": [
            { "text": "打开 Claude Code，装官方市场版本：", "code": "/plugin install superpowers@claude-plugins-official" },
            { "text": "想用 Superpowers 自己的插件市场（内容基本一样，更新更快）就换成这两条：", "code": "/plugin marketplace add obra/superpowers-marketplace\n/plugin install superpowers@superpowers-marketplace", "after": "这两步要连 GitHub，卡住先确认代理开着再试" }
          ],
          "done": "新建一个任务，提需求时带点「先规划再写代码」的意思，如果 Claude Code 主动问细节或者先列计划再动手，技能就生效了"
        }
      ],
      "url": "https://github.com/obra/superpowers"
    },
    {
      "emoji": "🤖",
      "repo": "android/skills",
      "deploy": ["phone", "pc"],
      "title": "Google 官方出的 Android 开发 AI 技能包",
      "lang": "Kotlin",
      "stars": "8,070",
      "today": "36",
      "body": "android/skills 是 Google 官方维护的仓库，给 AI 编程助手配了一套 Android 开发技能，覆盖 Jetpack Compose、导航、CameraX、测试、性能分析(R8)、Wear、TV、XR 等方向，内容基于 developer.android.com 的官方最佳实践。项目专门挑 AI 容易写错的细分场景下手，不是 Compose 入门这类 AI 已经比较熟的内容。目前只能通过 Claude Code、Codex 等插件市场安装，暂不接受外部代码贡献。",
      "explain": "这里的「技能」跟上一条一样，是给 AI 编程助手配的操作手册。几个生词：`Jetpack Compose` 是 Android 官方现在主推的写界面方式；`CameraX` 是官方封装好的拍照录像功能库，省得自己对接每款手机摄像头的细节；`R8` 是打包 App 时帮你压缩代码体积、混淆源码的工具。",
      "opinion": "你写的几个 Android 原生 App，如果以后遇到界面布局、权限、摄像头调用这类官方细节容易写错的地方，装上这个技能包能让 Claude Code 按 Google 自己的最佳实践来改，比它凭记忆瞎写靠谱。免费，而且走 Claude Code 插件市场这条路安装，不需要额外装 Android SDK 或 Android CLI。📱 手机上：跟上一条一样，在 Claude Code 里敲插件安装命令，不需要 Android SDK，手机上能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "走 Claude Code 插件市场这条路，不用装 Android CLI 和 SDK。",
          "steps": [
            { "text": "用 Claude Code 的，直接敲：", "code": "/plugin install android-skills --marketplace android/skills", "after": "要连 GitHub，卡住先确认代理开着" },
            { "text": "用 Codex 的，换成这两条：", "code": "codex plugin marketplace add android/skills\ncodex plugin add android-skills@android-skills" }
          ],
          "done": "让 Claude Code 帮你改一个 Compose 界面相关的需求，如果它按官方最佳实践来处理（比如正确处理边到边显示、权限申请），技能就生效了"
        }
      ],
      "url": "https://github.com/android/skills"
    },
    {
      "emoji": "🛠",
      "repo": "heygen-com/hyperframes",
      "deploy": ["pc"],
      "title": "写 HTML 直接渲染成视频的工具",
      "lang": "TypeScript",
      "stars": "65,319",
      "week": "5,601",
      "body": "hyperframes 让你用 HTML/CSS 写视频内容，靠 `data-*` 属性控制每个元素出现的时间点，支持用 GSAP、CSS、Three.js 等常见方式做动画。渲染时用无头 Chrome 一帧一帧截图，再用 FFmpeg 拼成 MP4，同样的输入每次渲出来的视频完全一样。项目由 HeyGen 开源维护，口号是「写 HTML，渲染成视频，为 AI 编程助手设计」，还提供预览、编辑器和组件目录。",
      "explain": "「无头 Chrome(headless Chrome)」是不显示窗口、在后台偷偷跑的浏览器，专门用来截图或渲染页面；「FFmpeg」是几乎所有视频处理工具背后都在用的免费转码程序，负责把一张张截图拼成视频文件。这两样搭起来，相当于把「写网页」变成了「做视频」。",
      "opinion": "你平时干的就是写单文件 HTML/JS 的活，这个工具顺着这条路往下延伸一步——想给工具做个演示视频、或者给教程配个带动画的讲解视频，不用学剪辑软件，直接写 HTML 就行。真要好看还得自己花时间调动画效果，不是写完 HTML 就自动好看，建议先跑一下官方的 init 示例看看效果再决定要不要深入。📱 手机上：不保证。渲染视频靠本机的无头 Chrome，Termux 里能不能装起来不确定，大概率会卡在这一步，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "先装好 Node.js 22 及以上版本和 FFmpeg 并加入 PATH，官方 README 没给这两个在 Windows 下的具体安装命令，要自己先弄好。",
          "steps": [
            { "text": "装好 Node 和 FFmpeg 后，用这条命令初始化一个示例项目：", "code": "npx hyperframes init my-video", "after": "下载慢或失败就先开代理" },
            { "text": "进入项目目录，开预览（带实时刷新，能在浏览器里看效果）：", "code": "cd my-video\nnpx hyperframes preview" },
            { "text": "效果没问题后，渲染成 MP4：", "code": "npx hyperframes render" },
            { "text": "想让 Claude Code 直接帮你写 HTML 视频内容，装这个插件：", "code": "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes" }
          ],
          "done": "项目目录下生成一个能打开播放的 .mp4 文件，就是装成功了"
        }
      ],
      "url": "https://github.com/heygen-com/hyperframes"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "deploy": ["phone"],
      "title": "开源记账 App，支持 AI 对话和拍照记账",
      "lang": "Dart",
      "stars": "2.6k",
      "body": "蜜蜂记账是一款跨 iOS、Android、Web 的个人记账开源 App，本地优先、不强制联网，基础记账功能免费全开。支持多账本多账户、二级分类、预算、周期记账、图表统计、CSV 导入导出，另外还有 AI 对话记账、拍照识别支付宝/微信/云闪付账单、语音记账三种更快的记法，官方说明这些 AI 功能也是完全免费的，不需要自己申请密钥。想同步数据的话，有自建云、iCloud、WebDAV、S3 等五种方式可选，不同步也能正常用。",
      "explain": "「AI 对话记账」是打字告诉它「今天吃饭花了 30」，它自动帮你归类到对应账本；「拍照识别账单」是把支付截图拍下来，App 自己读出金额和商家，不用手动输入每一笔。",
      "opinion": "你在学理财，先把每天花的钱记清楚是最基础的一步，这个 App 比自己拿表格记省事，尤其是拍个支付截图就能自动入账这点，能让记账这件事坚持得更久。它不用联网也能用，数据存在手机本地，不想折腾同步账户的话装完直接能用。📱 手机上：能用，直接是 Android App，不用 Termux、不涉及编译，Google Play 和 GitHub Releases 都能下到安装包。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机",
          "steps": [
            { "text": "优先去 [Google Play 商店页](https://play.google.com/store/apps/details?id=com.tntlikely.beecount) 直接装（国内网络可能打不开，打不开就用下一步）：" },
            { "text": "打不开 Google Play 的话，去 [GitHub Releases 页面](https://github.com/TNT-Likely/BeeCount/releases/latest) 下载最新版 apk（Android 6.0 以上机型都能装）：", "after": "下载完点开安装，手机可能会提示「允许安装未知来源应用」，同意就行" }
          ],
          "done": "打开能看到记账首页，点右下角加号能记一笔，就是装好了"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    }
  ]
};
