DAILY_DATA["github/2026-10-11"] = {
  "date": "2026-10-11",
  "highlight": "今天最值得先装的是 `mksglu/context-mode`——给 Claude Code 这类 AI 编程工具的上下文做「减肥」，装上以后聊得久也不容易被挤爆上下文、中途「失忆」，手机电脑都能装；想看 Anthropic 官方怎么写 Claude 插件，`anthropics/knowledge-work-plugins` 也值得翻一翻。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "mksglu/context-mode",
      "title": "给AI编程智能体的上下文做「减肥」",
      "lang": "TypeScript",
      "stars": "26,315",
      "today": "178",
      "body": "MCP 服务器，给 Claude Code 等 AI 编程工具的工具输出做「沙箱化」处理，减少塞进对话上下文的原始内容——官方说能把 315KB 的输出压缩到 5.4KB。它还用 SQLite 做会话记忆，哪怕对话被压缩清空，之前的工作进度也能找回来。支持 Claude Code、Cursor、Gemini CLI 等 17 个平台，装法因平台不同，Claude Code 下最简单。",
      "explain": "MCP 是让 AI 工具连接外部功能的通用接口，类似「万能转接头」。AI 一次能看的内容有限，叫`上下文窗口`，调用工具返回一堆原始数据（比如整份文件）很容易把这个窗口占满，逼着 AI 中途「失忆」。这个项目做的事，就是先把这些原始输出压缩精简一遍再喂给 AI。",
      "opinion": "你平时在 Claude Code 里写代码，聊得越久越容易被自动压缩、中途忘事，装上它能让每次工具调用占的「内存」小很多，对话能撑更久。免费、一条命令能装上，值得试；效果因人而异，装完跑一次体检命令看看是否都通过。📱 手机上：Termux 已经有 Node.js v26，满足它要求的 ≥22.5，按插件方式装应该能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "在 Claude Code 对话框里直接装，不用额外开终端。",
          "steps": [
            { "text": "添加插件市场：", "code": "/plugin marketplace add mksglu/context-mode" },
            { "text": "安装插件：", "code": "/plugin install context-mode@context-mode" },
            { "text": "重启 Claude Code，再运行体检命令：", "code": "/context-mode:ctx-doctor" }
          ],
          "done": "体检结果每一项前面都是 [x]（打勾），就是装成功了；如果 Node 版本不够，上一步会直接报错并给出修复提示。"
        }
      ],
      "url": "https://github.com/mksglu/context-mode"
    },
    {
      "emoji": "🤖",
      "repo": "hugohe3/ppt-master",
      "title": "喂文档或主题，AI直接生成可编辑PPT",
      "lang": "Python",
      "stars": "59,441",
      "today": "461",
      "body": "开源的「AI 做 PPT」技能，配合 Claude Code、Cursor 这类支持 Agent 的工具使用。把 PDF、Word、网页等素材丢进去，或者直接说一个主题，AI 会生成一份真正的 .pptx 文件——里面的图表、表格、文字都是 PowerPoint 原生对象，打开后还能接着改，不是一张拼好的图片。",
      "explain": "这里说的「技能」（skill）不是独立软件，而是一套给 AI 编程工具用的说明书加脚本，装进 Claude Code 后，AI 照着这份说明书的步骤来做 PPT，相当于给 AI 配了一个「PPT 实习生」的工作手册。",
      "opinion": "你平时在 Claude Code 里做小工具，这个可以当现成的 Agent 技能案例来读——怎么把复杂任务拆成步骤、素材放哪、产物输出到哪，对你写自己的技能或 Agent 有参考价值；顺手用它做 PPT 也省去手动排版。它不绑定固定的大模型，官方示例主要提 Claude、Kimi、Gemini，想接豆包、DeepSeek 大概率可以通过 OpenAI 兼容地址配置，但没有现成示例，需要自己试。📱 手机上：代码本身没有 openai、anthropic 这类装不上的包，但依赖里的 skia-pathops、uharfbuzz 是要编译的 C++ 扩展，Termux 能不能装不确定，装不上就先放电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，手机不保证，见上面说明）",
          "intro": "需要先有能用的 AI 编程工具（比如 Claude Code），把这个项目当素材库配合使用。",
          "steps": [
            { "text": "拉取项目代码：", "code": "git clone https://github.com/hugohe3/ppt-master.git", "after": "下载慢或失败就先开代理软件再试" },
            { "text": "进入项目目录，装依赖：", "code": "cd ppt-master\npip install -r requirements.txt", "after": "如果某个包报错装不上，看提示是哪个包，可以先去掉对应功能那一行（比如语音旁白用的 edge-tts）再试" },
            { "text": "在 Claude Code 等工具里打开这个项目文件夹，把要转换的素材放进 projects/ 目录" },
            { "text": "在对话里直接提需求，比如「把这份 PDF 做成 PPT」" }
          ],
          "done": "生成完成后 exports/ 目录下能看到 .pptx 文件，用 PowerPoint 打开能看到可编辑的图表和文字，就是成功了。"
        }
      ],
      "url": "https://github.com/hugohe3/ppt-master"
    },
    {
      "emoji": "🛠",
      "repo": "RapidAI/RapidOCR",
      "title": "离线OCR工具包，给工具加「认字」功能",
      "lang": "Python",
      "stars": "8,105",
      "today": "18",
      "body": "开源 OCR（文字识别）工具包，把百度的 PaddleOCR 模型转换成 ONNX 格式跑推理，不用联网也能把图片里的文字识别成文本，支持中英文等多语言，纯本地跑，不用装一整套训练框架。",
      "explain": "OCR 就是「看图识字」——给它一张截图或扫描件，就能把图里的文字原样抠出来变成可以复制的文本。ONNX 是一种通用的 AI 模型打包格式，好处是不用装一整套训练框架，跑起来更轻。",
      "opinion": "你做 AI 小工具时如果想加一个「认字」功能（比如识别截图里的信息喂给大模型），这个比直接调云端 OCR API 省一笔调用费，图片也不用传出去。一行 pip 就能装完，值得收进工具箱。📱 手机上：它依赖的 onnxruntime 官方只发布给标准 Linux/Windows/Mac 的预编译包，Termux 是安卓系统，大概率匹配不到能装的版本，这个建议只在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，手机大概率装不上，见上面说明）",
          "steps": [
            { "text": "确认电脑装了 Python（建议 3.8 及以上）：", "code": "python --version" },
            { "text": "安装：", "code": "pip install rapidocr onnxruntime" },
            { "text": "装完在 Python 里试着识别一张图片（把图片路径换成自己的）：", "code": "from rapidocr import RapidOCR\nengine = RapidOCR()\nresult = engine(\"你的图片路径.png\")\nprint(result)" }
          ],
          "done": "能打印出识别到的文字和坐标，就是装成功了；提示装不上、找不到匹配版本，就是上面说的 onnxruntime 兼容性问题。"
        }
      ],
      "url": "https://github.com/RapidAI/RapidOCR"
    },
    {
      "emoji": "🛠",
      "repo": "JoeanAmier/TikTokDownloader",
      "title": "抖音/TikTok作品批量下载与数据采集工具",
      "lang": "Python",
      "stars": "16,666",
      "today": "45",
      "body": "开源的抖音、TikTok 作品下载与数据采集工具，支持批量下载无水印视频图片、采集账号主页作品列表、提取评论等数据。既能用终端交互菜单操作，也能跑成本地 Web API 服务给自己的程序调用。",
      "explain": "这里说的「数据采集」，是把公开能看到的作品信息（标题、点赞数、发布时间等）整理成结构化数据，不只是下视频。",
      "opinion": "如果你想做点「分析哪类视频容易火」之类的小工具，用它采集公开数据喂给大模型分析，比自己写爬虫省事很多；单纯下视频收藏素材也能用，但只能下自己有权限用的内容，别拿别人的原创或付费内容去商用。📱 手机上：Termux 已经有 Python 3.14、uv，满足它要求的 3.12+，可以试，但依赖里的 lxml、curl-cffi 是要编译的 C 扩展，装不上的概率存在，失败会报类似「Failed building wheel」的错，到时候只能换电脑装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证，见上面说明）",
          "intro": "先确认 Termux 装了 git（没装就跑 `pkg install git`）。",
          "steps": [
            { "text": "拉取项目代码（这条要加代理）：", "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/JoeanAmier/TikTokDownloader.git" },
            { "text": "进项目目录，用 uv 装依赖：", "code": "cd TikTokDownloader\nuv sync --no-dev" },
            { "text": "运行：", "code": "uv run main.py" }
          ],
          "done": "能看到终端交互菜单，就是装成功了；某个依赖报编译失败，就是上面说的兼容性问题，换电脑装。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "不想折腾环境可以直接用打包好的程序。",
          "steps": [
            { "text": "去 Releases 页面下载 Windows 版打包好的程序，解压后双击 main 运行：", "after": "[github.com/JoeanAmier/TikTokDownloader/releases](https://github.com/JoeanAmier/TikTokDownloader/releases)" },
            { "text": "也可以从源码运行：装 Python 3.12 及以上，再装依赖：", "code": "pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt" },
            { "text": "运行：", "code": "python main.py" },
            { "text": "首次用先在菜单里设置 Cookie（把抖音网页登录后的 Cookie 复制粘贴进去，具体怎么找看仓库 docs 目录里的教程）" }
          ],
          "done": "进入终端菜单能选「批量下载链接作品」之类的选项，并能正常下载，就是装成功了。"
        }
      ],
      "url": "https://github.com/JoeanAmier/TikTokDownloader"
    },
    {
      "emoji": "📚",
      "repo": "anthropics/knowledge-work-plugins",
      "title": "Anthropic官方出的Claude插件写法范例",
      "lang": "Python",
      "stars": "28,820",
      "today": "625",
      "body": "Anthropic 官方开源的一批 Claude 插件合集，每个插件对应一种职场角色（销售、数据分析、产品经理、法务、财务等），内容基本是 Markdown 说明文件加少量配置。装进 Claude Code 或 Cowork 后会在合适场景自动触发，也能用斜杠命令直接调用，比如数据分析插件的 `/write-query` 能按指定方言写 SQL。",
      "explain": "这里的「插件」「技能」对 Claude Code 来说，本质是一套写好的操作指南文件，告诉 AI 遇到什么情况该怎么做、按什么步骤来，不是要编译运行的程序。",
      "opinion": "你自己给 Claude Code 写 CLAUDE.md、规划 Agent 工作流的时候，这个仓库是个很好的参考范本——官方怎么拆分 skills 和 commands、怎么组织一个插件的文件结构，可以直接照着抄改。里面的 data 插件（写 SQL、做数据分析）以后处理电工、理财学习数据时也能顺手拿来用。📱 手机上：全是文本文件，装插件的命令和电脑一样，没有任何编译依赖，Termux 能正常装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "在 Claude Code 里直接装某一个插件（下面以数据分析插件为例，换成 sales、finance 等其他名字也行）。",
          "steps": [
            { "text": "添加插件市场：", "code": "/plugin marketplace add anthropics/knowledge-work-plugins" },
            { "text": "安装想要的插件，比如数据分析：", "code": "/plugin install data@knowledge-work-plugins" },
            { "text": "装完在对话里直接用斜杠命令试一下：", "code": "/write-query 帮我写一条按月统计新增用户的SQL" }
          ],
          "done": "能看到 Claude 按插件里的套路给出结果（比如列出结构化的 SQL 和解释），就是装成功了。"
        }
      ],
      "url": "https://github.com/anthropics/knowledge-work-plugins"
    }
  ]
};
