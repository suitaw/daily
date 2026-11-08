DAILY_DATA["github/2026-11-08"] = {
  "date": "2026-11-08",
  "highlight": "今天最值得动手试的是 `billion-context`——专门给用AI编程助手聊长会话的人做「token瘦身」，经常被上下文用满、越聊越卡越贵的可以试试。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "ranxianglei/billion-context",
      "deploy": ["phone", "pc"],
      "title": "给AI编程助手做「上下文压缩」，省token还能聊更久",
      "lang": "TypeScript",
      "stars": "4,608",
      "today": "191",
      "body": "这是一个装在编码助手（如Claude Code、Codex等十几种客户端）和模型API之间的小工具，会把已经聊过的长对话自动压缩成分层摘要，减少token消耗，同时保证上下文窗口不被用满。需要时还能按需把压缩掉的细节还原回来。也提供Docker部署方式。",
      "explain": "「上下文窗口」是AI一次能记住的聊天内容量，用满了AI就会「失忆」、变慢甚至变贵。这个工具相当于给AI配了个自动记笔记的助理，把你们聊过的内容压成摘要再喂给AI，省地方也省钱。",
      "opinion": "如果经常跟AI编程助手一聊就是大半天，容易碰到上下文窗口被用满、AI开始「忘事」或者响应变慢的情况，这类工具能明显缓解，值得试。毕竟是加在AI和助手中间的一层，建议先拿不重要的小任务测一下，确认压缩后AI还记得关键信息再用在正事上。📱 手机上：它是纯Node.js工具，不依赖要编译的原生库，装的时候留意报错，大概率能装，但要求Node版本够新（低于某个版本会直接崩溃）。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "检查Node版本是否够新（低于22会崩溃）：", "code": "node -v", "after": "版本不够就先把Node升级" },
            { "text": "全局安装，装好后会多一个bili命令：", "code": "npm install -g billion-context --prefix=~/.local" },
            { "text": "把它接到Claude Code上：", "code": "bili plugin install claude", "after": "不保证一定成功；如果这一步报错提示连不上GitHub，在命令前加上代理再试一次：https_proxy=http://127.0.0.1:7890 bili plugin install claude" },
            { "text": "（可选）确认服务已经跑起来：", "code": "curl -s http://localhost:8787/__bili/health" }
          ],
          "done": "在Claude Code里正常聊天，长会话时token消耗涨得明显变慢，说明压缩已经生效。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "检查Node版本是否够新（低于22会崩溃）：", "code": "node -v" },
            { "text": "全局安装billion-context：", "code": "npm install -g billion-context" },
            { "text": "把它接到Claude Code上：", "code": "bili plugin install claude", "after": "下载慢或失败就先开代理" }
          ],
          "done": "同手机端，长对话里token涨得变慢就说明生效了。"
        }
      ],
      "url": "https://github.com/ranxianglei/billion-context"
    },
    {
      "emoji": "🤖",
      "repo": "github/spec-kit",
      "deploy": ["phone", "pc"],
      "title": "先把需求写成「规格书」，再让AI编程助手照着做",
      "lang": "Python",
      "stars": "148,421",
      "week": "4,280",
      "body": "GitHub出品的开源工具包，围绕「规范驱动开发」这套流程，给AI编码助手提供一套标准化的提示词命令：先把需求、技术方案、任务拆解依次写成规格文档，再让AI一步步照着实现，减少AI理解偏差导致的返工。支持多种主流AI编码工具。",
      "explain": "「规范驱动开发」说白了就是先把要做的事写成一份说明书再让AI动手，而不是上来就口头描述让AI自己猜。`uv`是一个Python的包管理工具，可以理解成帮你装好、跑起来这类Python命令行程序的小帮手。",
      "opinion": "平时做的小工具如果直接口头跟AI描述需求，项目简单时没问题，但稍复杂一点容易出现AI理解偏差、返工。这个工具相当于先把需求整理成结构化文档再喂给AI，复杂项目上能省不少返工时间；纯粹的小单页工具可能用不上，杀鸡用牛刀。📱 手机上：它是纯Python命令行脚本，用`uv`管理，不涉及要编译的原生库，大概率能装。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（Windows）",
          "intro": "命令两边一样，用`uv`安装不用编译，不用连GitHub所以不用加代理。",
          "steps": [
            { "text": "确认已经装了uv：", "code": "uv --version", "after": "没有就先用pkg install uv（Termux）或参考uv官方文档装" },
            { "text": "安装specify-cli命令行工具：", "code": "uv tool install specify-cli" },
            { "text": "新建一个项目，指定要接入的AI编码助手：", "code": "specify init my-project --integration copilot", "after": "README示例写的是copilot，如果用的是别的AI助手（比如Claude Code），把copilot换成对应名字，具体名称去Specify文档的Other agents页面查" },
            { "text": "进入项目目录，在编码助手的聊天窗口里按顺序运行：", "code": "/speckit-constitution\n/speckit-specify\n/speckit-plan\n/speckit-tasks\n/speckit-implement", "after": "每一步跑完都检查一下结果再继续下一步" }
          ],
          "done": "助手按规格文档一步步把功能做出来，中间每步都有文档可以回头核对，就算用起来了。"
        }
      ],
      "url": "https://github.com/github/spec-kit"
    },
    {
      "emoji": "🛠",
      "repo": "pbakaus/impeccable",
      "deploy": ["pc"],
      "title": "让AI写的界面别一股「AI味」，自动挑设计毛病",
      "lang": "Rust",
      "stars": "105,536",
      "week": "7,623",
      "body": "一套给编码智能体用的「设计词汇表」，提供polish、critique、audit等命令，用62条规则自动检测常见的AI生成界面的廉价套路（比如堆叠的渐变、滥用圆角阴影），帮着把界面调得不那么像AI随手糊的。也能脱离智能体单独当命令行工具用。",
      "explain": "「AI味」/「AI slop」指的是AI生成网页常见的一些一眼能看出来的廉价套路，比如乱加渐变色、阴影、圆角。这个工具就是把这些套路总结成规则，自动帮你挑出来。",
      "opinion": "平时做的单页小工具界面都是自己写的，跑一遍这个工具的检测命令，能挑出一些不够顺眼、不规范的地方，顺手让界面更干净，花的时间不多，值得试。纯脚本、没有界面的项目用不上。📱 手机上：它用的检测引擎是首次使用时下载的预编译二进制文件，是给普通Linux（glibc）编译的，跟Termux的安卓系统库不兼容，大概率装不上/跑不起来，建议在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "在项目根目录运行安装命令，会自动检测并接入本机的Claude Code/Cursor/Codex CLI等工具：", "code": "npx impeccable install", "after": "下载慢或失败就先开代理" },
            { "text": "装好后在编码助手的聊天窗口里初始化：", "code": "/impeccable init" },
            { "text": "不想用智能体，也能直接用命令行检测某个目录：", "code": "npx impeccable detect src/" }
          ],
          "done": "运行detect后终端会列出检测到的设计问题（如果有），对着提示改就行；没问题就什么都不会列。"
        }
      ],
      "url": "https://github.com/pbakaus/impeccable"
    },
    {
      "emoji": "🛠",
      "repo": "RapidAI/RapidOCR",
      "deploy": ["pc"],
      "title": "离线把截图、扫描件里的文字识别成能复制的文本",
      "lang": "Python",
      "stars": "8,479",
      "today": "12",
      "body": "开源免费的OCR（文字识别）工具，把PaddleOCR的模型转成ONNX格式跑，默认支持中英文识别，几行代码就能跑，可以完全离线用，不用联网传图。也有C++、Java等其他语言的版本。",
      "explain": "OCR就是「图片转文字」——把截图、扫描件、PDF里本来不能复制的文字识别出来，变成能复制粘贴、能搜索的文本。ONNX可以理解成一种让AI模型在不同机器上都能跑起来的通用格式。",
      "opinion": "碰到扫描版的文档、截图里想摘抄的文字，这工具几行代码就能把文字识别出来整理成笔记，而且是离线跑、不用把文档传到网上的在线OCR网站，涉及隐私的内容更放心。装起来也简单，值得留一份备用。📱 手机上：它依赖的onnxruntime是预编译好的二进制包，装的时候需要Termux这边能找到匹配的版本，跟openai/anthropic的SDK装不上是同一类坑（原生库跟安卓的系统库不兼容），大概率装不上，建议在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "装依赖包：", "code": "pip install rapidocr onnxruntime" },
            { "text": "新建一个Python文件，写几行代码测试识别一张图：", "code": "from rapidocr import RapidOCR\n\nengine = RapidOCR()\nresult = engine(\"要识别的图片路径或图片网址\")\nprint(result)" }
          ],
          "done": "运行后终端打印出图片里识别到的文字内容，就算装好了。"
        }
      ],
      "url": "https://github.com/RapidAI/RapidOCR"
    },
    {
      "emoji": "💰",
      "repo": "we-promise/sure",
      "deploy": ["pc", "cloud"],
      "title": "自己托管的个人理财App，记账、做预算、看净资产",
      "stars": "10.8k",
      "body": "一个免费开源、可以自己部署的个人理财App，能记账分类、做预算、算净资产变化，用Docker一条命令就能把整套服务（含数据库）跑起来，数据存在自己的设备上，不上传给别人的公司。它是已停止维护的Maybe Finance项目的社区继续维护版本。",
      "explain": "「自托管」就是软件装在自己的电脑或服务器上跑，不是用别人公司的云服务，数据也留在自己这边。Docker是一种打包软件的方式，装一个Docker就能把一整套程序（包括它要用的数据库）一次性跑起来，不用自己一步步配环境。",
      "opinion": "这个工具本身不连真实银行或证券账户、不碰真钱，纯粹是自己手动记一笔一笔的收支、分类、设预算，拿来练「记账-分类-看预算」这套理财基本功很合适，比纯手工表格更直观，数据也在自己手上不怕被收集。只是要用Docker，第一次配置要花点时间。📱 手机上：这是要跑Docker容器的自托管Web服务，Termux没有Docker环境，装不了，得用电脑。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "需要先装好Docker Desktop。",
          "steps": [
            { "text": "装好并打开Docker Desktop（Windows版），确认它在正常运行" },
            { "text": "建一个文件夹放配置文件，再进去：", "code": "mkdir sure\ncd sure" },
            { "text": "下载官方提供的示例配置文件：", "code": "curl --fail --location --silent --show-error --output compose.yml https://raw.githubusercontent.com/we-promise/sure/main/compose.example.yml", "after": "下载慢或失败就先开代理" },
            { "text": "启动服务，第一次建议用前台模式方便看日志：", "code": "docker compose up", "after": "第一次启动要拉取镜像、初始化数据库，得等几分钟" },
            { "text": "浏览器打开 http://localhost:3000 ，点「create your account」，用自己的邮箱和密码注册" }
          ],
          "done": "能打开网页、注册登录进去看到记账首页，就算装好了。"
        }
      ],
      "url": "https://github.com/we-promise/sure"
    },
    {
      "emoji": "📚",
      "repo": "EbookFoundation/free-programming-books",
      "deploy": ["read"],
      "title": "按语言、主题分类的免费编程学习资料大全",
      "stars": "401.2k",
      "body": "一份收录了海量免费编程书籍、免费课程、互动教程的分类列表，按编程语言、技术主题、所属国家语言细分，每一条都链接到官方免费或合法授权的资源，不是网盘盗版链接。有专门的中文资料分区，也配了方便浏览和搜索的网站。",
      "explain": "这份清单本身不存书，只是整理了一堆指向官方免费资源的链接，相当于一个「哪里能合法免费学」的导航页，不是盗版资料合集。",
      "opinion": "想找某门编程语言或某个技术主题的免费资料，先去这个列表翻一翻比自己在网上一个个搜更省事，而且链接基本都是官方免费渠道，不用担心踩坑。📱 手机上：纯看网页/文档，不用装任何东西，手机电脑都能看。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开配套网站，按编程语言或主题分类找资料：https://ebookfoundation.github.io/free-programming-books/" },
            { "text": "想按关键词搜，用搜索版网站：https://ebookfoundation.github.io/free-programming-books-search/" },
            { "text": "想找中文资料，直接在网站里找中文分类，或者到GitHub仓库里翻中文列表文件" }
          ],
          "done": "找到想学的书或课程，打开链接开始看就行。"
        }
      ],
      "url": "https://github.com/EbookFoundation/free-programming-books"
    },
    {
      "emoji": "🎨",
      "repo": "Anduin2017/HowToCook",
      "deploy": ["read"],
      "title": "写给程序员的家常菜教程，步骤精确到克和分钟",
      "stars": "103.7k",
      "body": "一份社区维护的家常菜教程合集，按程序员习惯的风格写得很精确——放多少克盐、炒几分钟都写清楚，覆盖家常菜、早餐、汤羹等各种场景，支持大家一起补充菜谱。配了图文版网页，不用在GitHub文件夹里翻Markdown也能看。",
      "explain": "这份菜谱不是转载自网上随便哪篇文章，是作者自己试做总结再加上大家一起补充修订的，所以步骤比一般网上搜到的菜谱更具体、更好照做。",
      "opinion": "跟代码和理财没关系，纯粹换个脑子放松一下，照着步骤买菜做饭成功率比自己瞎琢磨高不少。📱 手机上：纯看网页，不用装任何东西，手机电脑都能看。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开图文网页版按菜系、场景翻：https://howtocook.aiursoft.com/" },
            { "text": "或者在GitHub仓库的dishes目录里翻文字版Markdown菜谱" }
          ],
          "done": "挑一个感兴趣的菜打开看完，照着买菜试一次就算用上了。"
        }
      ],
      "url": "https://github.com/Anduin2017/HowToCook"
    }
  ]
};
