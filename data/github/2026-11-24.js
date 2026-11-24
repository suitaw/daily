DAILY_DATA["github/2026-11-24"] = {
  "date": "2026-11-24",
  "highlight": "今天最值得先装的是 **Umi-OCR**——免费离线的 OCR 软件，解压就能用，能把扫描版 PDF 直接转成能搜索、能复制文字的版本，手头有扫描教材的话很实用。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "hiroi-sora/Umi-OCR",
      "deploy": ["pc"],
      "title": "离线识别扫描版 PDF，转成能搜索复制的文字",
      "lang": "Python",
      "stars": "48,903",
      "week": "195",
      "body": "Umi-OCR 是一款免费开源的离线 `OCR` 软件，支持截图识别、批量处理图片，还能把没有文字层的扫描版 PDF 转成能搜索、能复制文字的双层 PDF。完全离线运行，解压即用，不用联网也不用账号，支持 Windows 和 Linux。",
      "explain": "`OCR` 是「光学字符识别」，说白了就是让电脑「认字」——把图片里的文字变成能复制粘贴、能搜索的文本。扫描版 PDF 看着像文字，其实整页是一张图片，复制不出字也搜不到内容；OCR 识别后会在图片上盖一层「隐藏文字」，PDF 外观不变，但能搜索复制了。",
      "opinion": "手头有扫描版的教材或笔记，用这个工具能直接转成能搜索、能复制文字的 PDF，省掉自己打字抄的功夫，查电工、理财这类要翻书核对内容的资料时会方便很多。完全离线免费、没有广告和账号门槛，先装一个放电脑里备用没什么成本。📱 手机上：官方只给了 Windows 和 Linux 的桌面版，Termux 没有图形界面跑不起来，这个只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 Releases 页面，下载 `.7z` 压缩包（或自解压的 `.7z.exe`）：", "code": "https://github.com/hiroi-sora/Umi-OCR/releases", "after": "下载慢的话仓库里还给了蓝奏云、SourceForge 的链接，可以换一个试。" },
            { "text": "用解压工具把压缩包解压到任意文件夹（不用安装，解压即用）。" },
            { "text": "进入解压出来的文件夹，双击运行主程序：", "code": "Umi-OCR.exe" },
            { "text": "（可选）装了 Scoop 的话也可以直接用命令安装：", "code": "scoop bucket add extras\nscoop install extras/umi-ocr" },
            { "text": "要转换扫描版 PDF 时，在软件里选「PDF识别」或「批量OCR」功能，导入 PDF，输出设置里选可搜索的双层 PDF。" }
          ],
          "done": "软件打开后能看到截图、批量、PDF 识别几个功能标签，截一张带字的图能识别出文字，就是装好了。"
        }
      ],
      "url": "https://github.com/hiroi-sora/Umi-OCR"
    },
    {
      "emoji": "📚",
      "repo": "sharpie7/circuitjs1",
      "deploy": ["phone", "pc"],
      "title": "网页里直接搭电路、看电流电压实时跑",
      "stars": "3.0k",
      "body": "CircuitJS1 是一个纯网页版的电路仿真器，不用装软件，打开网址就能在画布上拖元件搭电路——电阻、电容、二极管、电机都有，接好线点「运行」就能看到电流方向和电压数值实时变化。项目最早是 Java 小程序，后来被移植成网页版，内置了大量现成电路示例可以直接打开看。",
      "explain": "「仿真」就是电脑帮你算电路里电流电压怎么流动，不用自己拿万用表接线就能看到结果；适合原理图看不懂的时候，先把电路画出来跑一遍，看哪根线通、哪根线不通、灯泡会不会亮。",
      "opinion": "学电工遇到原理图看不懂，可以在这上面把电路画一遍、点运行看效果，比死记硬背直观。网址打开就能用，不用装任何东西，拿来验证一些简单电路（比如正反转、灯泡开关）的接线逻辑很合适；但它仿真的是理想电路，跟实际接线、真实器件会遇到的坑不是一回事，别指望它能替代实操。📱 手机上：是网页工具，手机浏览器直接打开就能用，不用装 App，但画布小，复杂电路在手机上拖拽会比较费劲。",
      "install": [
        {
          "title": "怎么用（不用装）",
          "intro": "纯网页工具，电脑和手机浏览器打开下面任意一个网址都能直接用：",
          "steps": [
            { "text": "打开官方在线版（任选一个）：", "code": "http://www.falstad.com/circuit/\nhttp://lushprojects.com/circuitjs/" },
            { "text": "在右侧元件栏拖元件到画布，连好线后点顶部的「运行」（▶）图标。" },
            { "text": "不熟悉怎么搭的话，先从菜单的「File → Open」里打开自带示例电路，看别人怎么搭的。" }
          ],
          "done": "电路通电后线上会出现移动的小点表示电流方向，元件上也会显示电压数值，看到这些在动就是在正常仿真。"
        }
      ],
      "url": "https://github.com/sharpie7/circuitjs1"
    },
    {
      "emoji": "📚",
      "repo": "jackfrued/Python-100-Days",
      "deploy": ["read"],
      "title": "100 天 Python 教程，从语法基础到实战项目",
      "stars": "188k",
      "body": "《Python-100-Days》是一套按天组织的中文 Python 教程，从变量、分支循环这些最基础的语法开始，一直讲到文件处理、爬虫、数据分析、`Django` 建网站、机器学习入门，全部是 Markdown 文档配代码例子，在网页上直接读就行。",
      "explain": "后半部分会提到 `Django`（一个用 Python 写网站后端的框架）、`pandas`/`NumPy`（处理表格数据的工具库）这些，都是进阶内容，是给学完基础想往后走的人看的，先过一遍前面的语法部分就够用。",
      "opinion": "作为 Python 入门教程，内容从零开始、中文讲解、例子多，比起边搜边学更系统，可以先跟着前面的基础语法章节走，后面爬虫、数据分析这些按需挑着看，不用全部学完。📱 手机上：就是在网页上读 Markdown 文档，手机浏览器直接打开就能看，不用装任何东西；想跟着敲代码练习的话换到电脑上效果更好。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "浏览器打开仓库主页，按目录进入 Day01、Day02…… 顺序阅读：", "code": "https://github.com/jackfrued/Python-100-Days" }
          ],
          "done": "打开仓库能看到 Day01 到 Day100 的文件夹按顺序排列，点进去是 Markdown 正文和代码示例，就是找对地方了。"
        }
      ],
      "url": "https://github.com/jackfrued/Python-100-Days"
    },
    {
      "emoji": "🤖",
      "repo": "langbot-app/LangBot",
      "deploy": ["cloud"],
      "title": "把大模型接进聊天软件，搭自己的 AI 机器人",
      "lang": "Python",
      "stars": "19,170",
      "week": "144",
      "body": "LangBot 是一个把大模型接到即时通讯软件里的开源平台，支持 QQ、微信、企业微信、飞书、钉钉、Telegram、Discord 等十几个平台，接好之后机器人能多轮对话、调用工具、流式输出回复，还能挂知识库做问答。大模型这边支持 `OpenAI`、`Claude`、`Gemini`、`DeepSeek`、智谱AI、`Ollama` 等一长串，官方一键安装脚本会自动装好 Python 环境，也支持 Docker 部署。",
      "explain": "「流式输出」是机器人像打字一样一个字一个字往外蹦回复，不用等它想完再一次性发出来；「知识库问答」是先把你自己的文档喂给它，回答问题时先去这些文档里找答案，不是单靠自己记的东西编。",
      "opinion": "想做一个能在 QQ/微信/飞书里直接聊天、调用自己接的 `DeepSeek`/豆包 API 的机器人，这个项目把接入各个聊天平台的脏活都封装好了，不用自己从头写。缺点是它是一个要长期在线的服务，装完要一直开着才有用。📱 手机上：Termux 装不了这种要长期挂着的机器人服务，想用的话得找一台能 24 小时开着的电脑或云服务器。",
      "install": [
        {
          "title": "安装步骤 · ☁️ 云服务器（Linux + Docker）",
          "steps": [
            { "text": "登录云服务器，克隆代码并进入 docker 目录：", "code": "git clone https://github.com/langbot-app/LangBot\ncd LangBot/docker", "after": "没装 Docker 和 Docker Compose 的话先按官方文档装好。" },
            { "text": "一次性把全部服务跑起来：", "code": "docker compose --profile all up -d" },
            { "text": "浏览器打开管理后台，首次访问会让你设置管理员账号密码：", "code": "http://服务器IP:5300" },
            { "text": "在后台里添加一个大模型提供商（比如 `DeepSeek`，需要先去 DeepSeek 官网申请 API key），再绑定一个聊天平台（QQ/微信/飞书等），按页面提示走完授权流程。", "after": "不同聊天平台绑定方式不一样，具体看后台里每个平台对应的教程链接，这步不保证一次就通，卡住就对照官方文档排查。" }
          ],
          "done": "后台里机器人状态显示在线，在对应的聊天软件里给机器人发一条消息能收到回复，就算装成功了。"
        }
      ],
      "url": "https://github.com/langbot-app/LangBot"
    },
    {
      "emoji": "🎨",
      "repo": "Open-LLM-VTuber/Open-LLM-VTuber",
      "deploy": ["pc"],
      "title": "本地跑一个能语音聊天、带动态形象的 AI 陪聊",
      "lang": "Python",
      "stars": "14.9k",
      "body": "Open-LLM-VTuber 是一个带 `Live2D` 动态形象的语音 AI 陪聊项目，能实时语音对话、支持说话打断，还能通过摄像头做视觉感知。接入的大模型很灵活，`OpenAI`、`Claude`、`DeepSeek`、智谱AI、本地跑的 `Ollama` 模型都能接，语音识别和合成也可以选完全本地离线跑。",
      "explain": "`Live2D` 是一种让 2D 图片「动起来」的技术，让一张静态立绘能眨眼、动嘴说话，很多语音陪聊、虚拟主播用的就是这个；「说话打断」是指你说话时 AI 能停下来听你说，不用等它说完一整段才能插话，更像真人对话。",
      "opinion": "想体验一下「对着电脑说话、AI 带着动态形象实时回你」是什么感觉，这个项目能接你自己的 `DeepSeek` 之类 API，不一定要在本地跑模型。配置偏麻烦，要装 `FFmpeg`、`uv` 这些依赖，官方默认教程走本地 `Ollama` 模型，想换成云端 API 得自己改配置文件。纯粹图个新鲜、玩一玩可以试，别指望一步到位。📱 手机上：官方只说支持 Windows/macOS/Linux 桌面，依赖 `FFmpeg` 等工具链，Termux 里装不起来，只能在电脑上玩。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，接 DeepSeek API 而不用本地模型）",
          "intro": "官方默认教程用本地 `Ollama` 模型，下面改成接你自己的 `DeepSeek` API，省掉本地跑大模型这一步。",
          "steps": [
            { "text": "装好前提软件：Python 3.10~3.12（不能到 3.13）、Git、`FFmpeg`；再装 `uv`：", "code": "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"" },
            { "text": "克隆代码（注意带 `--recursive`，不然子模块拉不全）：", "code": "git clone https://github.com/Open-LLM-VTuber/Open-LLM-VTuber --recursive\ncd Open-LLM-VTuber", "after": "下载慢或失败就先开代理。" },
            { "text": "装依赖：", "code": "uv sync" },
            { "text": "先跑一次生成配置文件，看到启动信息后按 Ctrl+C 退出：", "code": "uv run run_server.py", "after": "根目录会多出一个 conf.yaml，没有的话就去 config_templates 文件夹把 conf.ZH.default.yaml 复制出来改名成 conf.yaml。" },
            { "text": "打开 conf.yaml，把 basic_memory_agent 下的 llm_provider 改成 openai_compatible_llm，再把下面这段配置里的 base_url、model 换成 DeepSeek 官方文档给的值，llm_api_key 填你自己的 DeepSeek API key：", "code": "openai_compatible_llm:\n  base_url: \"https://api.deepseek.com\"\n  llm_api_key: \"你的DeepSeek API key\"\n  model: \"deepseek-chat\"\n  temperature: 1.0", "after": "不保证 DeepSeek 的接口地址和模型名一直不变，去 DeepSeek 官网文档核对最新值再填。" },
            { "text": "启动项目：", "code": "uv run run_server.py", "after": "第一次启动可能要下载一些模型文件，等的时间会长一点。" },
            { "text": "启动成功后，浏览器打开：", "code": "http://localhost:12393" }
          ],
          "done": "浏览器里能看到一个 2D 形象，点麦克风图标说话，它能听懂并开口回你，就是跑起来了。"
        }
      ],
      "url": "https://github.com/Open-LLM-VTuber/Open-LLM-VTuber"
    }
  ]
};
