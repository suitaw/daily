DAILY_DATA["github/2026-09-27"] = {
  "date": "2026-09-27",
  "highlight": "今天最值得动手试的是 `zhayujie/CowAgent`——一句安装脚本就能在本地起一个支持豆包、DeepSeek 的 AI 助手框架，能配技能、建知识库，刚好接得上你平时做 Agent 工具的路子。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "title": "自己搭一个能跑技能、记笔记的AI助手",
      "lang": "Python",
      "stars": "47,126",
      "today": "14",
      "body": "CowAgent 是一个可以自己部署的 AI 助手框架，一条安装脚本装完就有个网页控制台，能配置任务规划、调用工具和技能、建知识库，还支持多个 Agent 分工协作。模型这块直接支持豆包、DeepSeek、Claude、OpenAI、通义千问等一堆厂商，填个 key 就能用。作者就是原来做微信机器人 chatgpt-on-wechat 的那位。",
      "explain": "这里的 `Agent` 指能自己拆解任务、调用工具、一步步把事情做完的AI程序，不只是聊天回话。「多智能体协作」就是让几个AI角色分工干活，比如一个负责查资料、一个负责写总结。",
      "opinion": "如果你想给自己搭一个不依赖某个网页版、能记住上下文、还能调用外部工具的AI助手，这个可以直接拿来用，比自己从零写 Agent 框架省事很多，而且原生支持豆包和DeepSeek，正好对上你现在用的模型。缺点是功能比较多，配置项也不少，第一次上手要花点时间摸索。📱 手机上：核心依赖只用到 `requests` 这类纯Python库，没有openai、anthropic这种装不上的SDK，理论上能装；但官方写的是Python 3.13，Termux现在是3.14，版本没完全对上，能不能顺利跑通不保证，装不上就换电脑试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "确保git已经装好：", "code": "pkg install git -y" },
            { "text": "跑官方一键安装脚本（脚本内部会从GitHub拉代码，所以整条命令套上代理）：", "code": "https_proxy=http://127.0.0.1:7890 bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)", "after": "这一步在Termux里没实测过，不保证一定能跑通；如果卡在拉代码那一步或者报错退出，多试一次，还是不行就换电脑装。" },
            { "text": "脚本跑完后，用浏览器打开控制台：", "after": "地址是 http://localhost:9899" }
          ],
          "done": "浏览器能打开 http://localhost:9899 看到CowAgent的控制台页面，就说明装成功了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开PowerShell，运行安装脚本：", "code": "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex", "after": "下载慢或失败就先开代理再重试。" },
            { "text": "跑完后打开浏览器访问：", "after": "地址是 http://localhost:9899" }
          ],
          "done": "浏览器能打开 http://localhost:9899 看到CowAgent的控制台页面，就说明装成功了。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🛠",
      "repo": "Tencent/WeKnora",
      "title": "把自己的文档喂给AI，变成能查能问的知识库",
      "lang": "Go",
      "stars": "30,347",
      "week": "3,015",
      "body": "WeKnora 是腾讯开源的知识库框架，能把你扔进去的文档转换成三种能力：能问答查证据的 `RAG` 知识库、能多步推理干活的Agent，或者自动生成的Wiki。用Docker Compose一条命令就能在本地跑起来，模型这块支持DeepSeek、通义千问等27种以上服务商。",
      "explain": "`RAG` 是「先从你的文档里查到相关内容，再让AI基于这些内容回答」的技术，能减少AI瞎编；比起直接把文档扔给AI聊天，RAG能标出答案是从原文哪一段来的，更可信。",
      "opinion": "如果你手头有一堆笔记、教程、工作文档，想做一个自己能问的私人知识库，这个比自己搭一套RAG流程省事很多，Docker Compose一键起服务，中文文档也齐全。功能偏重，个人用可能顾不上Wiki、Agent这些高级模式，先跑起来把问答功能用顺了就够。📱 手机上：跑不了，它靠Docker Compose部署，Termux里没有Docker，只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装Docker Desktop）",
          "intro": "先去 docker.com 装好Docker Desktop并启动。",
          "steps": [
            { "text": "克隆代码：", "code": "git clone https://github.com/Tencent/WeKnora.git", "after": "下载慢或失败就先开代理再重试。" },
            { "text": "进入目录：", "code": "cd WeKnora" },
            { "text": "复制配置文件：", "code": "cp .env.example .env" },
            { "text": "用记事本打开 `.env`，把 `LLM_API_KEY`、`LLM_BASE_URL`、`LLM_MODEL_NAME` 换成豆包或DeepSeek的信息：", "code": "notepad .env" },
            { "text": "启动服务：", "code": "docker compose up -d" }
          ],
          "done": "浏览器打开 http://localhost 能看到WeKnora的界面，就说明启动成功了。"
        }
      ],
      "url": "https://github.com/Tencent/WeKnora"
    },
    {
      "emoji": "🛠",
      "repo": "anthropics/claude-code-action",
      "title": "让Claude Code自动帮你审代码、改bug",
      "lang": "TypeScript",
      "stars": "9,089",
      "today": "31",
      "body": "这是官方出的GitHub Action，装到你自己的仓库后，在Issue或PR里 `@claude`，它就能自动回答问题、审查代码、直接改bug甚至提交PR。用Claude Code命令行跑一条安装命令就能配置好，不用自己写workflow文件。",
      "explain": "GitHub Action是GitHub自带的自动化功能，代码一提交或有人评论，就能自动触发跑一段程序；这里触发的程序就是Claude Code。",
      "opinion": "你平时就用Claude Code写代码，这个等于把它接到你自己的GitHub仓库里，在Issue或PR上喊一声 `@claude` 就能让AI干活，不用专门开电脑打开终端。对daily这种仓库也能用来帮你看看网友提的issue。装好后留意一下额度消耗，大概率还是按你自己的Anthropic key计费。📱 手机上：装的时候用Claude Code命令行跑安装命令，Termux里能跑Claude Code的话直接执行就行；装完之后日常触发靠GitHub评论，手机上刷GitHub App评论 `@claude` 就能用，不挑设备。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（用Claude Code命令行，两边一样）",
          "steps": [
            { "text": "在想开启自动化的GitHub仓库目录里，用Claude Code运行安装命令：", "code": "claude /install-github-app", "after": "需要你是这个仓库的管理员；命令会引导你连接GitHub App、填ANTHROPIC_API_KEY、生成workflow文件，跟着提示走就行。" },
            { "text": "装好后，去这个仓库的Issue或PR评论区试一下：", "after": "比如评论「@claude 帮我看看这个报错」，等它自动回复。" }
          ],
          "done": "仓库里能看到 `.github/workflows/` 下多了个新文件，评论 `@claude` 之后有机器人回复，就说明装成功了。"
        }
      ],
      "url": "https://github.com/anthropics/claude-code-action"
    },
    {
      "emoji": "💰",
      "repo": "virattt/ai-hedge-fund",
      "title": "用AI模拟几个投资风格跑「虚拟对冲基金」",
      "lang": "Python",
      "stars": "63,800",
      "body": "这个项目让几个AI角色模拟不同投资风格（比如价值投资、技术分析）分析股票，给出买卖建议，但作者明确写了：只是概念验证、纯模拟回测，不接真实交易，不构成投资建议。需要配一个查行情财报数据的API key，再配一个模型API key（DeepSeek、Claude、OpenAI都行）。",
      "explain": "「回测」是拿历史数据跑一遍策略，看看要是当时这么操作能赚多少或亏多少，跟真拿钱交易完全是两回事。",
      "opinion": "拿这个当学习材料，看AI怎么拆解财报、新闻去做投资判断的思路，挺有意思，能顺带熟悉几个经典投资流派怎么想问题；但千万别指望它能帮你赚钱——AI分析股票靠不靠谱没有共识，代码也可能有bug，真金白银的决定不要靠一个开源模拟项目，本金亏光的风险自己担，这个项目也不涉及接真实证券账户。📱 手机上：装不上，它底层用的 `langchain-openai`、`langchain-anthropic` 库依赖官方openai、anthropic SDK，这两个SDK又依赖 `jiter`，Termux编译不了jiter，这条路走不通，只能用电脑装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows / Mac 命令一样）",
          "intro": "需要先装好Python 3.11及以上版本。",
          "steps": [
            { "text": "用pipx安装（没装pipx也可以换成pip install aihf）：", "code": "pipx install aihf" },
            { "text": "第一次运行，跟着提示填key：", "code": "aihf", "after": "会让你填Financial Datasets API key（查行情财报数据用）和一个模型API key（DeepSeek、Claude、OpenAI选一个都行），这些key只用来调API，不会碰你的证券账户或银行卡。" }
          ],
          "done": "终端里能看到AIHF的交互式菜单界面，就说明装好了。"
        }
      ],
      "url": "https://github.com/virattt/ai-hedge-fund"
    },
    {
      "emoji": "🎨",
      "repo": "maotoumao/MusicFree",
      "title": "插件化的无广告免费听歌App",
      "lang": "TypeScript",
      "stars": "27,120",
      "today": "26",
      "body": "MusicFree 是个安卓和鸿蒙的音乐播放器，本身不带任何音源，靠装「插件」去接各家音乐平台的资源，界面干净没有广告。作者还单独做了个桌面版 MusicFreeDesktop，Windows也能用。",
      "explain": "这里的「插件」就是一个小配置文件，告诉App去哪抓歌曲信息，App本身不塞广告，音源合不合规看插件来源自己判断。",
      "opinion": "如果你手机上的音乐App广告太多，这个可以换一换，纯粹是省心的日常工具，跟做AI开发没直接关系，但胜在开源透明、没有强制收费。装插件这步要自己找靠谱来源，官方示例插件库先用着就行。📱 手机上：能用，就是安卓App，下载APK装上就行，不用Termux也不用命令行。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（APK直接装，不用Termux）",
          "steps": [
            { "text": "去Releases页面下载最新APK：", "after": "地址是 https://github.com/maotoumao/MusicFree/releases" },
            { "text": "安装APK（第一次装可能要手动允许「未知来源」安装权限）" },
            { "text": "打开App后进「设置→插件设置」装音源插件才能搜到歌：", "after": "插件不是内置的，需要自己装，官方仓库里有示例插件列表可以参考。" }
          ],
          "done": "打开App能看到没有广告的播放界面，装了插件后能搜到歌并正常播放，就算成功。"
        },
        {
          "title": "安装步骤 · 💻 电脑（另一个项目 MusicFreeDesktop）",
          "steps": [
            { "text": "打开桌面版仓库的Releases页面下载Windows安装包：", "after": "地址是 https://github.com/maotoumao/MusicFreeDesktop/releases" },
            { "text": "运行安装包装好后，同样去插件设置里装音源插件" }
          ],
          "done": "打开桌面版能看到播放界面，装了插件后能搜到歌，就算成功。"
        }
      ],
      "url": "https://github.com/maotoumao/MusicFree"
    }
  ]
};
