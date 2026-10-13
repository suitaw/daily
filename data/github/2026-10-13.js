DAILY_DATA["github/2026-10-13"] = {
  "date": "2026-10-13",
  "highlight": "今天最值得先装的是 `open-webui`——给自己接的大模型（DeepSeek、豆包都行）装一个像样的聊天网页，Windows 上 `pip install` 一下就能用，比自己写聊天界面省事很多。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "open-webui/open-webui",
      "deploy": ["pc", "cloud"],
      "title": "给自己接的大模型装个好用的聊天网页",
      "lang": "Python",
      "stars": "154,992",
      "today": "157",
      "body": "Open WebUI 是一个开源的网页版聊天界面，装在自己电脑或服务器上之后，能把 DeepSeek、豆包这类支持 OpenAI 接口格式的大模型全接进来，用一个网页统一聊天、管理历史记录、随时切换模型。它也支持本地跑的 Ollama 模型。界面和功能都接近市面上的商业聊天产品，但数据存在自己本地，不经过第三方。",
      "explain": "「OpenAI 兼容接口」的意思是，只要一个大模型厂商提供的接口格式跟 OpenAI 一样（现在豆包、DeepSeek 等国内厂商基本都支持这种格式），这个网页就能直接接上，不用改代码。Ollama 是另一个常见的开源工具，专门用来在自己电脑上跑开源模型，跟 Open WebUI 经常搭配使用，但你不装 Ollama 也能单独用 Open WebUI 接云端 API。",
      "opinion": "你平时写的小工具都是直接调 API 看文字结果，这个项目相当于给自己搭一个带历史记录、能切模型、能管多个 API key 的聊天前端，拿来测试 prompt、对比不同模型效果会方便不少。装起来比自己写一个聊天页面省事很多，值得花半小时装上试试。📱 手机上：装不上——它直接依赖 openai、anthropic 这两个 Python SDK，而这两个 SDK 新版本都要装 jiter（需要编译的 Rust 库），Termux 里编译不过，`pip install` 会直接报错卡在这一步。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装好 Python 3.11 及以上版本（从 python.org 下载安装包，安装时记得勾选「Add python.exe to PATH」）" },
            { "text": "用 pip 装 Open WebUI：", "code": "pip install open-webui" },
            { "text": "启动服务：", "code": "open-webui serve", "after": "第一次启动会自己下载一些依赖，等终端打印出访问地址" },
            { "text": "打开浏览器访问 http://localhost:8080，首次进入会让你自己注册一个管理员账号（用户名密码自己定，不是官方给的）" },
            { "text": "进左上角的设置 → 连接，填入 DeepSeek 或豆包的 API 地址和 key（选「OpenAI 兼容」那一类），就能在聊天框里选着用了" }
          ],
          "done": "网页打开后能看到聊天输入框和左侧对话列表，设置里能看到自己填的模型连接，就是装成功了。"
        }
      ],
      "url": "https://github.com/open-webui/open-webui"
    },
    {
      "emoji": "🤖",
      "repo": "AstrBotDevs/AstrBot",
      "deploy": ["pc", "cloud"],
      "title": "把大模型接进QQ/微信/Telegram做机器人的框架",
      "lang": "Python",
      "stars": "41,785",
      "today": "65",
      "body": "AstrBot 是一个开源的 Agent 开发框架，核心作用是把接好的大模型（支持 DeepSeek、阿里云百炼等 OpenAI 兼容接口）包装成能在 QQ、微信、Telegram、Discord 等平台上运行的机器人。配置好平台的机器人账号和模型 API key 之后，大模型就能直接在这些聊天软件里跟人对话。项目自带插件系统，能再给机器人加语音、图片生成之类的能力。",
      "explain": "文档里提到的 Dify、Coze、阿里云百炼这些是专门做大模型应用管理的平台，AstrBot 能跟它们对接，但不用这些东西也能直接接普通的 API key 用。它做的事简单说就是把一个聊天机器人「塞进」你平时用的聊天软件里，而不是单独做个网页。",
      "opinion": "如果你想做一个能在微信或 Telegram 里跟人聊天、按指令干活的机器人，这个项目把平台接入、消息收发这些麻烦事都包好了，自己只要接 API key、写插件逻辑，比从零用 SDK 搭省不少时间，适合花一两个小时跑通一个 demo 看效果。📱 手机上：大概率装不上——`uv tool install astrbot` 会拉 openai、anthropic 这两个 SDK，它们依赖的 jiter 库在 Termux 里编译不过，跟 Open WebUI 是同一个坑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "确认电脑装了 Python 3.12 及以上版本，再装好 uv：", "code": "pip install uv" },
            { "text": "用 uv 装 AstrBot：", "code": "uv tool install astrbot --python 3.12" },
            { "text": "初始化：", "code": "astrbot init" },
            { "text": "启动：", "code": "astrbot run", "after": "终端会打印一个管理后台的访问地址，用浏览器打开（这一步不保证细节，具体后台操作以 AstrBot 官方文档为准；如果命令报「astrbot 不是内部命令」，说明上一步 uv tool install 没成功，回头看报错信息）" },
            { "text": "在管理后台里填入 DeepSeek/豆包的 API key，再绑定一个聊天平台（比如 Telegram 的 Bot Token），每个平台怎么申请 Bot Token，AstrBot 文档里有单独教程，照着做" }
          ],
          "done": "管理后台能打开、能看到自己填的模型配置，就是装成功了；要机器人真能在聊天软件里说话，还要把对应平台的 Bot Token 配好。"
        }
      ],
      "url": "https://github.com/AstrBotDevs/AstrBot"
    },
    {
      "emoji": "🎨",
      "repo": "bilawalsidhu/gods-eye-view",
      "deploy": ["pc"],
      "title": "浏览器里用真实卫星数据做的卫星视角模拟器",
      "lang": "JavaScript",
      "stars": "53,661",
      "today": "1,895",
      "body": "这是个纯网页项目，用公开的真实卫星和地理数据，在 3D 地球上模拟「卫星视角」，可以缩放看任意地点的渲染画面。项目 README 的宣传味比较重（播放量、Product Hunt 之类），官方说的在线版还没上线，得自己把代码跑起来看。",
      "explain": "「开源空间情报数据」说的是网上公开能查到的卫星轨道、地图数据，不是涉密信息。项目是用 Vite 这类前端工具打包的网页，跟你平时写的单文件 HTML 不是一回事，装起来要走一遍 npm 的流程。",
      "opinion": "纯粹好玩、开眼界用，看看别人怎么用浏览器原生技术做出这么炫的 3D 可视化效果，对理解网页能做到什么程度有点启发，但跟你手头做 AI 小工具没有直接关系。宣传成分比较重，装之前心理预期不要太高；基础 3D 画面不需要 API key，想用语音讲解功能才要自己填 OPENAI_API_KEY，不填也能用基础功能。📱 手机上：不保证——Termux 跑 npm 项目本身没问题，但这类带 3D 渲染的前端项目有时会用到需要编译本地模块的 npm 包，装不上的话会在 `npm ci` 这一步直接报错；真要看，电脑上跑最稳。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装好 Node.js（建议官网 LTS 版本）和 git" },
            { "text": "克隆仓库：", "code": "git clone https://github.com/bilawalsidhu/gods-eye-view.git\ncd gods-eye-view" },
            { "text": "装依赖：", "code": "npm ci" },
            { "text": "跑一下自检脚本（README 里专门有这一步，检查环境是否齐全）：", "code": "npm run doctor" },
            { "text": "启动：", "code": "npm run dev", "after": "终端会打印出具体访问地址，一般是 http://localhost:4173" }
          ],
          "done": "浏览器里能看到 3D 地球和卫星视角画面，就是跑成功了。"
        }
      ],
      "url": "https://github.com/bilawalsidhu/gods-eye-view"
    },
    {
      "emoji": "🤖",
      "repo": "earthtojake/text-to-cad",
      "deploy": ["pc"],
      "title": "给Claude Code装个技能，让它能画3D零件图",
      "lang": "Python",
      "week": "2,441",
      "body": "Text-to-CAD 给 Claude Code、Codex 这类 Agent 工具加装一个 CAD 技能，装上之后可以用一句话让 AI 生成三维零件模型，输出 STEP、STL、3MF 等制造文件格式，还能检查设计能不能真的被加工出来（DFM），生成工程图纸。背后用的是开源 CAD 引擎 OpenCascade。",
      "explain": "CAD 是设计机械零件、外壳这类三维模型的软件统称，工厂靠它出图给机器加工或 3D 打印。STEP/STL/3MF 是不同的三维模型文件格式，3D 打印机、CNC 加工设备认的格式不完全一样，这个项目能导出好几种，省得自己转格式。DFM（可制造性检查）说的是检查这个设计实际能不能被机器做出来，不是纸上画画而已。",
      "opinion": "你平时用 Claude Code 写代码，这个项目相当于给它多装一个「能画三维零件图」的技能，以后如果要给电工相关的东西做个外壳、支架之类的小零件，能直接让 AI 生成模型文件，再找人 3D 打印或加工，不用自己学建模软件。不过 README 没给实际效果示例，值不值得花时间取决于你有没有具体要做的零件，没有需求的话可以先收藏。📱 手机上：不写安装步骤——它要用的 CAD 内核（OpenCascade 的 Python 绑定）基本只给电脑系统编译好了安装包，Termux（aarch64 手机）上大概率没有现成的包可装，强行装多半会在装依赖这一步报错。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Claude Code 插件）",
          "intro": "前提是电脑上已经装好了 Claude Code，并且有 Python 3.11+ 和 Node.js 20+。",
          "steps": [
            { "text": "在 Claude Code 里添加这个插件的市场源：", "code": "claude plugin marketplace add earthtojake/text-to-cad#latest" },
            { "text": "装插件：", "code": "claude plugin install text-to-cad@earthtojake" },
            { "text": "在 Claude Code 对话里用自然语言描述想要的零件，比如「做一个带四个安装孔的支架」，它会调用这个技能生成模型文件（README 没给实际运行截图，具体输出效果不保证，需要自己试）" }
          ],
          "done": "问它能不能画 CAD 模型，如果它能正常调用这个技能生成文件（或者给一个 CAD Viewer 的链接），就是装成功了。"
        }
      ],
      "url": "https://github.com/earthtojake/text-to-cad"
    },
    {
      "emoji": "📚",
      "repo": "microsoft/BitNet",
      "deploy": ["pc"],
      "title": "微软官方的「1-bit」推理框架，纯CPU也能跑大模型",
      "lang": "C++",
      "stars": "40,906",
      "today": "97",
      "body": "BitNet（也叫 bitnet.cpp）是微软官方做的推理框架，专门用来跑所谓「1-bit」量化过的大模型——把模型参数压缩到极小，官方说单张普通 CPU 就能跑起上百亿参数的模型，不需要显卡。项目配了一个现成的 20 亿参数模型，下载下来就能直接试跑。",
      "explain": "量化是把模型里的数字从比较精确的格式压缩成更简单、占用空间更小的格式，模型变小、跑得更快，但效果会打一点折扣；「1-bit」是压缩到极限的一种做法，微软说效果损失不大。不需要显卡这件事比较少见，普通大模型一般都得靠显卡的算力才跑得动。",
      "opinion": "这个更适合当学习材料，用来直观感受「模型压缩」是怎么回事——装好之后能跟一个跑在自己电脑 CPU 上的对话模型聊天，看看速度和效果如何，对理解大模型原理有帮助。日常做 AI 小工具还是直接调 API 更省事，不建议指望拿它当生产力工具。📱 手机上：不保证——Termux 里能装 clang、cmake 这些编译工具，理论上能试，但这个项目的编译过程和跑 20 亿参数模型对手机来说负担不小，大概率会卡很久甚至直接编译报错，电脑上跑更靠谱。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "官方要求装 Visual Studio 2022 并装好 C++ 相关组件，整个流程比较长，耐心来。",
          "steps": [
            { "text": "装 Visual Studio 2022，安装时勾选「使用 C++ 的桌面开发」「C++ CMake 工具」「Git」「C++ Clang 编译器」这几个组件" },
            { "text": "装好 conda（Anaconda 或 Miniconda 都行），建一个环境：", "code": "conda create -n bitnet-cpp python=3.10\nconda activate bitnet-cpp" },
            { "text": "打开 VS2022 的 Developer Command Prompt，克隆仓库：", "code": "git clone --recursive https://github.com/microsoft/BitNet.git\ncd BitNet" },
            { "text": "装 Python 依赖：", "code": "pip install -r requirements.txt" },
            { "text": "下载官方给的现成模型（需要先装 huggingface_hub）：", "code": "pip install huggingface_hub\nhuggingface-cli download microsoft/BitNet-b1.58-2B-4T-gguf --local-dir models/BitNet-b1.58-2B-4T" },
            { "text": "编译并准备运行环境：", "code": "python setup_env.py -md models/BitNet-b1.58-2B-4T -q i2_s" },
            { "text": "跟模型聊天：", "code": "python run_inference.py -m models/BitNet-b1.58-2B-4T/ggml-model-i2_s.gguf -p \"You are a helpful assistant\" -cnv" }
          ],
          "done": "最后那条命令跑起来后能在终端里打字跟它对话，就是装成功了；中间哪一步编译报错，一般是 Visual Studio 组件没勾全，回头检查一下。"
        }
      ],
      "url": "https://github.com/microsoft/BitNet"
    }
  ]
};
