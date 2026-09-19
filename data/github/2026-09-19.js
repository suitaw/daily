DAILY_DATA["github/2026-09-19"] = {
  "date": "2026-09-19",
  "highlight": "今天最值得试的是 `Tencent/BrowserSkill`——如果你平时用Claude Code写AI小工具，经常要让它帮你查资料、测网页，这个能让AI直接操作你电脑上已经登录的浏览器，不用来回重新登录账号。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Tencent/BrowserSkill",
      "title": "让Claude Code等AI编程工具直接操作你电脑上已登录的浏览器",
      "lang": "Rust",
      "stars": "5,289",
      "today": "1,306",
      "body": "通常AI Agent要「上网」得自己开一个空白浏览器，遇到要登录的网站就卡住，很麻烦。BrowserSkill 装一个浏览器扩展加一个命令行程序，让Claude Code、Cursor、Codex这些AI编程工具能直接控制你电脑里已经登录的真实浏览器——你在哪个网站登录着，AI就能替你在那个网站上操作，不用额外账号也不用付搜索API的钱。",
      "explain": "「Agent」就是能自己想办法、自己动手做事的AI程序，不只是聊天回答问题。以前AI要上网查资料，常常得单独开一个「无头浏览器」（没有界面、看不到画面的浏览器），遇到要登录的网站就没法继续。BrowserSkill 相当于给AI一把钥匙，直接用你桌面上真实打开、已经登录的那个浏览器。",
      "opinion": "如果你在用Claude Code写AI小工具，经常要让它帮你查资料、测试网页，这个工具能省掉重新登录、重新开代理这些麻烦事，直接复用你自己的浏览器登录状态，装好扩展后平时该怎么上网还怎么上网。📱手机上：装不了——它靠的是Chrome/Edge桌面版浏览器扩展，普通安卓手机上的Chrome不支持装桌面扩展，这个工具就是给电脑设计的。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开PowerShell，装命令行工具：", "code": "irm https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.ps1 | iex" },
            { "text": "验证装好了没：", "code": "bsk --version" },
            { "text": "打开 [Chrome网上应用店](https://chromewebstore.google.com/detail/hhcmgoofomhgciiibhipgmgkgnoenaoi) 或 [Edge加载项商店](https://microsoftedge.microsoft.com/addons/detail/browserskill/emacgiaaaiojkkpkddmmdfhmokgmnikg)，给浏览器装上BrowserSkill扩展。" }
          ],
          "done": "命令行输入 `bsk --version` 能看到版本号，浏览器右上角能看到BrowserSkill的扩展图标，就是装好了。"
        }
      ],
      "url": "https://github.com/Tencent/BrowserSkill"
    },
    {
      "emoji": "🤖",
      "repo": "supermemoryai/supermemory",
      "title": "给你的AI工具装一个记忆库，记住用户偏好和历史信息",
      "lang": "TypeScript",
      "stars": "30,275",
      "today": "140",
      "body": "现在的AI助手大多没有「记性」——每次开新对话就把之前聊过的内容忘光。Supermemory 是一个开源的记忆/上下文引擎，能自动从对话里提取事实、整理成用户档案，之后不管用哪个AI模型提问，都可以先查一下这个记忆库，把相关背景喂给AI。它既有云端服务，也能一条命令在本地跑起来，数据不用交给别人。",
      "explain": "「上下文引擎」说白了就是一个专门帮AI「记笔记、查笔记」的小助手：你和AI聊过的重要信息存进去，下次不管换哪个模型，都能把这些笔记重新读给AI听，不用每次都重复交代背景。它用「向量搜索」技术找相关笔记，找的是「意思相关」而不是逐字匹配。",
      "opinion": "如果你在做自己的AI小工具或Agent，想让它记住你的偏好、不用每次都重新交代背景，这个可以直接接进项目里当记忆层用，支持接豆包、DeepSeek这类兼容OpenAI接口的模型。免费自建版本还比较新，建议先小范围试用，别直接放进正式项目。📱手机上：不保证——它是预编译好的程序不是纯Python代码，理论上不受jiter装不上的限制，但Termux的系统底层和普通Linux不完全一样，能不能跑需要实测；如果命令报「无法执行」或「找不到文件」，就说明这台手机装不上，换电脑跑就行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（都靠Node.js，命令一样）",
          "intro": "Termux能不能成功不保证，失败了就在电脑上用。",
          "steps": [
            { "text": "用npx直接跑本地版（第一次要下载文件，会等一会）：", "code": "npx supermemory local", "after": "如果卡在下载不动一直没反应，可能是要连GitHub，可以改用这条试试：`https_proxy=http://127.0.0.1:7890 npx supermemory local`（仅Termux需要，Windows不用这样写）。" },
            { "text": "另开一个窗口，启动本地服务：", "code": "supermemory-server" }
          ],
          "done": "命令行会打印一个 `http://localhost` 开头的地址，浏览器打开能看到界面，就是装好了。如果Termux里卡住不动或直接报错退出，说明这台手机跑不了，去电脑上试。"
        }
      ],
      "url": "https://github.com/supermemoryai/supermemory"
    },
    {
      "emoji": "🛠",
      "repo": "ahmedkhaleel2004/gitdiagram",
      "title": "把任何GitHub仓库变成一张能点开看的架构图",
      "lang": "TypeScript",
      "stars": "16,466",
      "today": "152",
      "body": "看别人的开源代码，经常不知道从哪个文件看起。GitDiagram 直接根据仓库的代码结构自动画一张可交互的架构图，点图上的模块还能跳到对应的代码文件。不用装任何东西，把网址里的「github.com」换成「gitdiagram.com」就能看。",
      "explain": "「架构图」就是把一个项目里的文件夹、模块怎么互相调用画成一张图，比一行行翻代码直观得多。这张图是AI读一遍代码结构后自动画出来的，不是人工画的。",
      "opinion": "平时看这份GitHub热门推荐，遇到感兴趣但代码量大的项目，可以先拿GitDiagram扫一眼架构再决定要不要深入，比直接打开文件夹瞎翻效率高，而且完全免费不用注册登录。📱手机上：能用，就是打网页，手机电脑浏览器都一样，不用装东西。",
      "install": [
        {
          "title": "使用方法（不用装）",
          "steps": [
            { "text": "把想看的GitHub仓库网址里的「github.com」换成「gitdiagram.com」，直接在浏览器打开，比如把 github.com/ahmedkhaleel2004/gitdiagram 换成：", "code": "https://gitdiagram.com/ahmedkhaleel2004/gitdiagram" },
            { "text": "或者直接打开官网自己填仓库地址：", "code": "https://gitdiagram.com" }
          ],
          "done": "打开后能看到一张可以点开、缩放的项目结构图，就说明用上了。"
        }
      ],
      "url": "https://github.com/ahmedkhaleel2004/gitdiagram"
    },
    {
      "emoji": "📚",
      "repo": "521xueweihan/HelloGitHub",
      "title": "每月一期，专挑「有趣又好上手」的开源项目介绍给新手",
      "lang": "Python",
      "stars": "177,362",
      "today": "238",
      "body": "HelloGitHub 是一份坚持了很多年的中文开源月刊，每期挑十几个「有意思、门槛低」的开源项目配上简单介绍，方便新手照着找练手项目、拓宽眼界，而不是一上来就啃很硬核的大型项目。往期内容都存在仓库的 content 目录里，一期一个文件，可以按期数一路翻回去看。",
      "explain": "「月刊」就是每个月固定出一期，像杂志一样按时间顺序更新，不是一次性写完的东西。",
      "opinion": "想找点好玩的开源项目练手，或者单纯了解现在大家在做什么，按月翻一翻比自己漫无目的搜GitHub效率高。内容偏轻松入门，当平时的开源「杂志」翻着看就行，不用抱系统学习的预期。📱手机上：直接用手机浏览器打开就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开 [hellogithub.com](https://hellogithub.com) 看排版好的网页版，或者直接在 [GitHub仓库](https://github.com/521xueweihan/HelloGitHub) 的 content 目录里点开某一期的md文件看。" }
          ],
          "done": "打开任意一期能看到十几个项目的简介列表，就是找对地方了。"
        }
      ],
      "url": "https://github.com/521xueweihan/HelloGitHub"
    },
    {
      "emoji": "💰",
      "repo": "glink25/Cent",
      "title": "用自己的GitHub账号登录就能用的免费记账App，数据存在自己仓库里",
      "stars": "1,200+",
      "body": "Cent 是一个完全免费开源的记账网页应用，特别的地方是它不需要单独的服务器——账本数据直接存在你自己的GitHub（或Gitee）私有仓库里，自己的数据自己保管，换设备登录同一个GitHub账号就能同步，也支持多人协作记一本账。",
      "explain": "之前有的记账App要么得自己搭服务器、要么得把数据交给第三方公司。Cent直接借用GitHub当「云盘」存数据，你已经在用GitHub写代码了，正好顺手拿来存账本，不用另外注册新账号。",
      "opinion": "学理财第一步通常是先搞清楚钱花哪去了，Cent不用部署、不用付费，登录就能记账，适合拿来先养成记账习惯。以后想深入分析收支，再考虑功能更全的记账软件也不迟。📱手机上：能用，浏览器打开网页登录就行，不用装App、也不用Termux。",
      "install": [
        {
          "title": "使用方法（不用装）",
          "steps": [
            { "text": "打开 [cent.linkai.work](https://cent.linkai.work)，用GitHub账号登录授权。" },
            { "text": "新建一个账本，就可以开始记账了。" }
          ],
          "done": "登录后能看到自己的账本界面、能添加一笔收支记录，就是用上了。"
        }
      ],
      "url": "https://github.com/glink25/Cent"
    }
  ]
};
