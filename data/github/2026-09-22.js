DAILY_DATA["github/2026-09-22"] = {
  "date": "2026-09-22",
  "highlight": "今天最值得动手试的是 `tw93/Pake`——把你自己那些单文件 HTML 小工具一键打包成能在任务栏里钉住的桌面 App，全程在 GitHub 网页上点几下就行，不用装 Rust 环境。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "tw93/Pake",
      "title": "一键把网页打包成桌面应用，不用学Electron",
      "lang": "Rust",
      "stars": "61,583",
      "today": "27",
      "body": "Pake 用 Rust 写的 Tauri 框架，把任何一个网址包一层壳，变成一个独立的桌面程序，图标、窗口大小、无边框都能自定义。项目已经打包好了微信读书、ChatGPT、Twitter 等一批热门网站的现成安装包，直接下载装上就能用。如果要打包自己的网页，官方还提供「在线构建」，借 GitHub Actions 在云端编译，不用在自己电脑上装任何环境。",
      "explain": "Tauri 是一个用 Rust 做壳、网页做界面的桌面应用框架，比 Electron 打包出来的程序体积小很多。GitHub Actions 是 GitHub 自带的「云端电脑」，能替你在网上跑一段脚本（这里就是编译打包），跑完把结果给你下载，你自己的电脑不用装任何东西。",
      "opinion": "你自己那些托管在 GitHub Pages 上的单文件 HTML 小工具，用它包一下就能变成一个能在任务栏里钉住的桌面 App，不用每次都开浏览器找标签页，体验完整不少。用「在线构建」这条路完全不用装 Rust，跟着表单填几个参数就行，新手也能走通。📱 手机上：打包这一步全程是在浏览器里操作 GitHub 网页（填表单、等构建、下载文件），手机浏览器一样能做；但下载出来的是 Windows/Mac 桌面安装包，装到手机上没用，所以最后这个「桌面 App」还是要在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑通用（网页操作，不用装环境）",
          "intro": "打包你自己的网页用「在线构建」，全程在浏览器里点，手机电脑都一样；如果只是想用 README 里已经打包好的热门网站（微信读书、ChatGPT 等），直接去 Releases 页下载对应安装包装到电脑上就行。",
          "steps": [
            { "text": "打开 Pake 仓库，点右上角「Fork」，把它复制一份到你自己的 GitHub 账号下", "code": "https://github.com/tw93/Pake/fork" },
            { "text": "进入你 fork 后仓库的 Actions 标签页，左侧选「Build App With Pake CLI」这个工作流", "after": "如果提示要先启用 Actions，点一下允许就行" },
            { "text": "点「Run workflow」，在弹出的表单里填你要打包的网页地址（比如你自己工具页的链接）和应用名字，其他保持默认，点绿色的 Run workflow 按钮" },
            { "text": "等构建跑完，出现绿色对勾就是成功了，第一次大概 10~15 分钟，之后再打包会快很多" },
            { "text": "点进这次运行记录，下面「Artifacts」里下载打包好的安装包", "after": "Windows 是 .msi，Mac 是 .dmg，下载后用电脑打开安装" }
          ],
          "done": "电脑桌面/开始菜单里多了一个能双击打开的独立图标，不再靠浏览器标签页装着你的工具"
        }
      ],
      "url": "https://github.com/tw93/Pake"
    },
    {
      "emoji": "🤖",
      "repo": "mksglu/context-mode",
      "title": "给Claude Code等编程AI的上下文瘦身工具",
      "lang": "TypeScript",
      "stars": "23,886",
      "week": "1,089",
      "body": "Context Mode 是一个装在 Claude Code、Cursor 这类 AI 编程工具里的插件，专门处理「AI 上下文塞太满」的问题：把命令行、搜索结果这些又长又占地方的工具输出先压缩、存进本地数据库，官方说能省下 98% 的这部分内容，同时还能记住之前会话聊过的东西，跨对话保留记忆。装好之后不用改任何配置，靠自动挂钩生效。",
      "explain": "「上下文窗口」是 AI 一次能看到、记住的内容上限，超出这个上限，AI 之前聊的内容就会被挤掉、忘掉，或者干脆报错。像执行一条命令、搜一次代码库这种操作，输出经常又长又啰嗦，占掉大量上下文空间——这个工具就是替你把这些「啰嗦的部分」先精简一遍再交给 AI 看。",
      "opinion": "你平时用 Claude Code 写代码，如果发现长会话里 AI 开始「忘事」或者变慢，很可能就是上下文被这些工具输出占满了，这个插件正好对症。装好以后自带一个体检命令，能直接看出有没有生效，不用自己猜。它是 MCP 服务器加 Claude Code 插件的组合，不涉及 openai/anthropic 这些 Python SDK，风险不大，可以先在一个不重要的项目里试。📱 手机上：能装。它靠 Node.js 自带的 node:sqlite 存数据，不用额外编译原生模块，Termux 里的 Node v26 版本够新，直接能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            { "text": "装命令行工具", "code": "npm install -g context-mode" },
            { "text": "打开 Claude Code，在对话框里输入，给它加上这个插件市场", "code": "/plugin marketplace add mksglu/context-mode" },
            { "text": "接着输入，正式安装插件", "code": "/plugin install context-mode@context-mode" },
            { "text": "输入体检命令，确认装好了", "code": "/context-mode:ctx-doctor", "after": "看到列出的检查项全部是 [x] 就说明生效了" }
          ],
          "done": "「/context-mode:ctx-doctor」列出的检查项全部打勾"
        }
      ],
      "url": "https://github.com/mksglu/context-mode"
    },
    {
      "emoji": "💰",
      "repo": "AutoAccountingOrg/AutoAccounting",
      "title": "自动读账单记账的安卓App，不联网上传",
      "lang": "Kotlin",
      "stars": "921",
      "body": "AutoAccounting 装在安卓手机上，靠读取支付通知/短信或者截图识别的方式，自动把消费记成一笔账，不用自己一笔笔手输。项目反复强调「数据仅在设备端处理，绝不联网上传」，记账数据不会跑到别人的服务器上。",
      "explain": "手机上有一种叫 Xposed 的技术，能在系统层面「挂钩」其他 App 的行为，但需要 root（拿到手机系统的最高权限）才能用。这个项目也提供不需要 root 的模式：靠「无障碍」权限（安卓给盲人等群体用的辅助功能，能读屏幕内容）或者 Shizuku（一个不用真正 root 就能借到部分系统权限的小工具）来读账单截图，效果接近但要手动截个图。",
      "opinion": "个人理财第一步是知道钱花哪了，手动记账很容易半途而废，这类自动记账工具能省掉大半力气。没有 root 就用它的无障碍/Shizuku 模式，前几天可能要手动核对几笔让它学会识别银行/支付宝/微信不同的账单格式，用熟了基本就不用管了。AI 辅助分类是可选项，不填 API Key 也能用基础记账功能。📱 手机上：这本来就是个安卓 App，直接在手机上装，不涉及 Termux。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机安卓",
          "steps": [
            { "text": "手机浏览器打开 Releases 页面，下载最新的稳定版安装包", "code": "https://github.com/AutoAccountingOrg/AutoAccounting/releases" },
            { "text": "安装时如果提示「不允许安装未知来源应用」，去系统设置里给这个浏览器或文件管理器开个白名单" },
            { "text": "打开 App 选工作模式：没有 root 就选「无障碍」或「Shizuku」授权的模式，不要选需要 root 的 Xposed 模式", "after": "授权之后 App 才能读到账单通知/截图" },
            { "text": "（可选）要用 AI 自动分类，去设置里找到 AI 相关选项，填自己的大模型 API Key（豆包、DeepSeek 这类兼容 OpenAI 接口的都能填）", "after": "不填也能用，只是复杂账单可能分类不准，要手动改" }
          ],
          "done": "手机收到一笔消费通知后，App 里自动多出一笔对应的记账记录"
        }
      ],
      "url": "https://github.com/AutoAccountingOrg/AutoAccounting"
    },
    {
      "emoji": "🛠",
      "repo": "zhouxiaoka/autoclip",
      "title": "AI自动把长视频剪成高光短片",
      "lang": "Python",
      "stars": "8,226",
      "today": "250",
      "body": "AutoClip 分析视频的字幕内容，自动定位「精彩片段」，配上标题，一键导出成适合抖音、小红书、B站、YouTube Shorts 这些平台的短视频合集。支持接豆包、DeepSeek 这类兼容 OpenAI 接口的大模型，也能接本地跑的 Ollama，不联网也能用。",
      "explain": "这里的「兼容 OpenAI 接口」是说很多国产大模型（包括豆包、DeepSeek）都照着 OpenAI 那套接口格式做了适配，所以支持「OpenAI 接口」的工具，填上豆包/DeepSeek 的地址和 Key 通常也能直接用，不是非要用 OpenAI 自己的服务。",
      "opinion": "如果你有长录屏、长直播回放这类素材想剪成短视频发出去，这个工具能省掉从头到尾人工找高光点的时间，先用便宜的模型跑一条短视频看效果，觉得可以再批量处理。它支持换成豆包/DeepSeek 的接口，不用非绑 OpenAI 账号。📱 手机上：装不了。它的 Python 依赖里直接写了 openai 这个 SDK，而 openai、anthropic 这两个包都依赖 jiter，jiter 需要编译原生扩展，Termux 里编不过，装依赖这一步会直接失败；只能用电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，装现成的安装包）",
          "steps": [
            { "text": "打开 Releases 页面，下载 Windows 安装包", "code": "https://github.com/zhouxiaoka/autoclip/releases", "after": "文件名类似「AutoClip-Setup.exe」，下载慢或失败就先开代理" },
            { "text": "双击安装包，按提示装完并打开" },
            { "text": "首次使用去设置里配置一个大模型接口：选「OpenAI 兼容接口」，把地址和 API Key 换成豆包或 DeepSeek 的；想完全不联网就装 Ollama 跑本地模型", "after": "不同模型效果差别不小，先拿一条短视频试跑看看再决定" },
            { "text": "导入一个视频文件，点「生成精彩片段」，等它处理完" }
          ],
          "done": "生成的片段列表里能看到自动配好的标题和高光时间点，能直接导出"
        }
      ],
      "url": "https://github.com/zhouxiaoka/autoclip"
    },
    {
      "emoji": "🎨",
      "repo": "bilawalsidhu/gods-eye-view",
      "title": "打开浏览器就能看的实时全球3D地球",
      "lang": "JavaScript",
      "stars": "40,591",
      "week": "7,318",
      "body": "God's Eye View 是个浏览器里跑的 3D 地球，作者强调「数据是真实的」：实时显示全球的航班、船只、卫星轨迹、地震、交通和公开摄像头画面，还能用语音控制视角，想看哪就说去哪。",
      "explain": "项目底层用了 CesiumJS，这是个专门做地图/地球 3D 可视化的开源库，很多航空、气象类的可视化网站背后都是它。不需要你懂这些，启动起来就是一个能拖动缩放的立体地球。",
      "opinion": "纯粹好玩，拿来感受一下「全球实时数据可视化」是什么效果，也能顺便看看单文件网页项目怎么把真实数据接进一个炫酷的界面里，对自己写工具的界面灵感可能有点用。基础功能不用填任何 API Key 就能跑起来，更精细的功能（比如接谷歌地图、接船舶数据）是可选的。📱 手机上：不保证。它是个 Node 项目，理论上 Termux 也能装依赖、跑开发服务器，再用手机浏览器打开本地地址，但这是个偏重的 3D 地球可视化项目，手机上装依赖可能会慢、跑起来也可能卡，如果卡住或报错，换电脑装体验更好。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证）",
          "steps": [
            { "text": "克隆项目（这一步要走代理）", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/bilawalsidhu/gods-eye-view.git" },
            { "text": "进入目录装依赖", "code": "cd gods-eye-view\nnpm ci", "after": "依赖包不少，手机上可能要等一会儿" },
            { "text": "启动开发服务器", "code": "npm run dev" },
            { "text": "手机浏览器打开命令行里显示的地址", "code": "http://localhost:4173", "after": "实际端口以终端里显示的为准" }
          ],
          "done": "浏览器里出现一个能拖动旋转的 3D 地球，上面有飞机、船只这些实时标记在动"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows，命令一样）",
          "steps": [
            { "text": "克隆项目", "code": "git clone https://github.com/bilawalsidhu/gods-eye-view.git", "after": "下载慢或失败就先开代理" },
            { "text": "进入目录装依赖", "code": "cd gods-eye-view\nnpm ci" },
            { "text": "启动开发服务器", "code": "npm run dev" },
            { "text": "浏览器打开命令行里显示的地址", "code": "http://localhost:4173" }
          ],
          "done": "浏览器里出现一个能拖动旋转的 3D 地球，上面有飞机、船只这些实时标记在动"
        }
      ],
      "url": "https://github.com/bilawalsidhu/gods-eye-view"
    }
  ]
};
