DAILY_DATA["github/2026-10-23"] = {
  "date": "2026-10-23",
  "highlight": "今日看点：最值得先试的是 `taste-skill`——专治「AI 写的网页千篇一律」，装上后 Claude Code 这类编码智能体写界面时会先找风格参考、再用真实浏览器截图自检，成本几乎为零。",
  "items": [
    {
      "emoji": "🛠",
      "repo": "Leonxlnx/taste-skill",
      "deploy": ["pc"],
      "title": "给编码智能体装上「审美」的技能包",
      "stars": "101,122",
      "today": "630",
      "body": "这是个给 Claude Code、Codex 这类编码智能体用的技能包，专治 AI 写的网页/界面「一股 AI 味」「长得都差不多」的问题。装上后智能体会先找风格方向、拿真实参考图片来搭界面，再用真实浏览器在不同宽度下截图自检，照着截图改问题。",
      "explain": "大白话说，这个技能包像是给 AI 配了个「设计顾问」：平时让 AI 写页面，它习惯套最保守、最常见的布局和配色；装了这个技能，AI 会先想清楚这个页面该长什么风格，再用真实图片和浏览器截图检查效果，而不是写完就交卷。",
      "opinion": "你自己做的那些单页 HTML 项目界面经常要反复打磨，装上这个技能相当于让 Claude Code 写页面时自带一次「自我检查」，省得来回挑毛病。本身不花钱也不用 API key，装上试试成本很低。📱 手机上：不保证——需要电脑上真实的 Chrome/Edge/Chromium 配合截图自检，Termux 里装浏览器比较麻烦，建议先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Claude Code 插件）",
          "steps": [
            { "text": "确认电脑装了 Node 22 及以上版本，并且有 Chrome、Edge 或 Chromium 浏览器（截图自检要用）。" },
            { "text": "在 Claude Code 里加这个插件市场：", "code": "/plugin marketplace add Leonxlnx/taste-skill" },
            { "text": "装具体的技能包：", "code": "/plugin install taste-skill@taste-skill", "after": "下载慢或失败就先开代理。" }
          ],
          "done": "下次让 Claude Code 写网页/界面，它会主动说明参考了什么风格、截图检查过哪些问题，产出的页面不再是「一眼 AI 味」的默认样子。"
        }
      ],
      "url": "https://github.com/Leonxlnx/taste-skill"
    },
    {
      "emoji": "🤖",
      "repo": "BerriAI/litellm",
      "deploy": ["pc", "cloud"],
      "title": "统一接口调用100多种大模型API的网关工具",
      "stars": "61,838",
      "today": "107",
      "body": "LiteLLM 用一套 OpenAI 格式的接口统一调用 100 多家大模型服务商，官方支持列表里有 DeepSeek、Volcengine（豆包所在的云平台）等。可以当 Python 库直接在代码里调用，也能单独跑一个本地网关，把所有模型请求都代理到同一个地址上，自带花费统计和负载均衡。",
      "explain": "简单说，这就是个「万能转接头」——平时对接不同家的 API 得照着各自的写法改代码，装了它之后统一按一种格式写，想换哪家模型只改一个参数名。网关（Gateway）模式是让它常驻跑着，所有请求先经过它再转发出去，方便统一管理。",
      "opinion": "如果你在不同工具里来回切豆包、DeepSeek 这些 API，用它能省掉不少改代码的功夫，接入口和统计花费也更省心；具体怎么配置国内模型文档首页没给示例，用之前最好翻一下官方文档。📱 手机上：装不了——它依赖的 openai SDK 需要 jiter 这个要编译的库，Termux 里装不上。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云端",
          "steps": [
            { "text": "装 Python SDK（没装 uv 就先 `pkg install uv` 或参考 uv 官网装）：", "code": "uv add litellm" },
            { "text": "试着直接在代码里调用一个模型（示例用的是 gpt-4o，换成你有 key 的模型即可）：", "code": "from litellm import completion\nresponse = completion(model=\"openai/gpt-4o\", messages=[{\"role\": \"user\", \"content\": \"Hello!\"}])" },
            { "text": "如果想要一个常驻网关、所有请求都走它，装这个再启动：", "code": "uv tool install 'litellm[proxy]'\nlitellm --model gpt-4o", "after": "默认监听 `http://0.0.0.0:4000`，把你代码里 OpenAI 客户端的 `base_url` 改成这个地址就行。" }
          ],
          "done": "SDK 调用能正常收到模型回复；网关模式打开 `http://localhost:4000` 能看到管理后台就算跑起来了。"
        }
      ],
      "url": "https://github.com/BerriAI/litellm"
    },
    {
      "emoji": "🤖",
      "repo": "firecrawl/firecrawl",
      "deploy": ["phone", "pc"],
      "title": "给AI智能体用的网页抓取/搜索API",
      "stars": "194,311",
      "today": "424",
      "body": "Firecrawl 是专门喂给 AI 用的网页抓取服务：给一个网址，它把整页内容转成干净的 Markdown 或结构化 JSON，也能做搜索和截图。官方有现成的云端 API，注册就能拿 key 直接调用，不想用云端也可以自己部署。",
      "explain": "普通网页里一堆广告、导航、脚本代码，直接丢给大模型效果很差。Firecrawl 相当于帮你把网页「榨」成干净的文字，模型读起来更准；这类工具是做 AI Agent「联网能力」时的常见组件。",
      "opinion": "你做小工具时如果想让 AI 读某个网页内容（比如抓一篇文章做总结），不用自己写爬虫处理反爬和排版，直接调这个 API 省事很多；免费额度官网没写清楚具体数字，用之前先去看一下再决定值不值得长期用。📱 手机上：能用——本质是一条 HTTP 请求，Termux 里 `curl` 一下就能测，不用装什么重的东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux & 💻 电脑（命令通用）",
          "steps": [
            { "text": "去 [firecrawl.dev](https://firecrawl.dev) 注册账号，拿到一个以 `fc-` 开头的 API key。" },
            { "text": "拿一个网址试一下抓取，把下面命令里的 key 和网址换成你自己的：", "code": "curl -X POST 'https://api.firecrawl.dev/v2/scrape' \\\n  -H 'Authorization: Bearer fc-YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"url\": \"firecrawl.dev\"}'" }
          ],
          "done": "返回一段 JSON，里面能看到抓到的网页内容（Markdown 格式的正文）就算成功。"
        }
      ],
      "url": "https://github.com/firecrawl/firecrawl"
    },
    {
      "emoji": "📚",
      "repo": "luongnv89/claude-howto",
      "deploy": ["read"],
      "title": "从入门到高级的 Claude Code 图文教程",
      "stars": "43,200",
      "today": "177",
      "body": "这是一份系统讲解 Claude Code 用法的免费教程，从斜杠命令、记忆、技能一路讲到子代理、MCP、hooks 和插件，每节都配示例图，还能自测。内容以文档为主，附带一些可以直接复制去用的模板文件。",
      "explain": "Claude Code 里「技能」「子代理」「MCP」这些概念平时用得到但没人系统讲过，这份教程相当于把官方文档拆开配图讲了一遍，比零散查文档效率高。",
      "opinion": "你天天用 Claude Code 写东西，但很多进阶功能（比如子代理、hooks）大概率没碰过，花点时间翻一遍能少走不少弯路，模板也能直接抄到自己项目里用。📱 手机上：能看——纯文字教程，手机浏览器打开仓库页面就能读，模板文件复制过去用也没问题。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开仓库主页或 [LEARNING-ROADMAP.md](https://github.com/luongnv89/claude-howto/blob/main/LEARNING-ROADMAP.md) 按顺序看。" },
            { "text": "想用模板：把对应文件夹里的 `.md` 文件复制到你项目的 `.claude/commands/` 或 `~/.claude/skills/`，需要先装好 Claude Code。" },
            { "text": "想离线看：clone 下来后跑一条命令生成 EPUB 电子书：", "code": "uv run scripts/build_epub.py" }
          ],
          "done": "挑一个模块看完，或者生成的 EPUB 能打开，就算到手了。"
        }
      ],
      "url": "https://github.com/luongnv89/claude-howto"
    },
    {
      "emoji": "🎨",
      "repo": "mrdoob/three.js",
      "deploy": ["phone", "pc"],
      "title": "浏览器里做3D动画/游戏的JS库",
      "lang": "JavaScript",
      "stars": "116,791",
      "today": "53",
      "body": "Three.js 是一个在网页里画 3D 图形的 JavaScript 库，封装了 WebGL，能直接拿来做 3D 场景、动画、简单游戏。它历史很久、生态很全，官方文档也给了不用 npm、直接用 CDN 引入的写法。",
      "explain": "WebGL 是浏览器内置的一套画 3D 图的底层接口，直接手写很麻烦；Three.js 把常用的「造个立方体」「摆个相机」「打个光」这些操作包成了简单的 API，不用懂图形学底层也能画东西。",
      "opinion": "你做单文件 HTML 项目这个路子正好吃它——不用装任何构建工具，一个 `<script>` 标签接 CDN 就能用，拿来给游戏或者 3D 展示类的小项目加点效果很合适，先跑一下官方最简示例感受一下。📱 手机上：能用——它本质是网页 JS 库，手机浏览器只要支持 WebGL（现在基本都支持）就能跑，不用额外装东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux & 💻 电脑（同一份 HTML，浏览器直接打开）",
          "steps": [
            { "text": "新建一个 `.html` 文件，头部加这段 importmap，把 three.js 指向 CDN（版本号可以换成官方最新的）：", "code": "<script type=\"importmap\">\n{\n  \"imports\": {\n    \"three\": \"https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.module.js\"\n  }\n}\n</script>" },
            { "text": "接一段最简示例，画一个会转的立方体：", "code": "<script type=\"module\">\nimport * as THREE from 'three';\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.01, 10);\ncamera.position.z = 1;\nconst geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);\nconst material = new THREE.MeshNormalMaterial();\nconst mesh = new THREE.Mesh(geometry, material);\nscene.add(mesh);\nconst renderer = new THREE.WebGLRenderer({antialias: true});\nrenderer.setSize(innerWidth, innerHeight);\ndocument.body.appendChild(renderer.domElement);\nrenderer.setAnimationLoop(t => {\n  mesh.rotation.x = t/2000;\n  mesh.rotation.y = t/1000;\n  renderer.render(scene, camera);\n});\n</script>" },
            { "text": "用浏览器直接打开这个 HTML 文件（部分功能在 `file://` 方式下可能不正常，不行就起个本地服务器打开）。" }
          ],
          "done": "页面中间出现一个会转的立方体，就算跑起来了。"
        }
      ],
      "url": "https://github.com/mrdoob/three.js"
    },
    {
      "emoji": "💰",
      "repo": "Open-Dev-Society/OpenStock",
      "deploy": ["pc", "cloud"],
      "title": "自己部署的开源股票行情看盘工具",
      "lang": "TypeScript",
      "stars": "20,794",
      "today": "109",
      "body": "OpenStock 是个开源的股票行情追踪工具，能看价格、设提醒、查公司资料，官方说法是「贵的行情软件的开源替代品」。它不是券商，没有下单交易功能，README 里也写了「这里的内容不构成投资建议」。",
      "explain": "它只是把股票行情数据（价格、走势图、公司新闻）整理展示出来，类似一个免费的看盘面板，跟能不能真的买卖股票是两件事——这个项目压根没有下单功能。",
      "opinion": "拿来练手看盘、熟悉「行情、提醒、公司资料」这些理财常见概念挺合适，社区版数据大概一小时更新一次，别拿它的行情做实际交易判断。部署需要自己配数据库和 Finnhub 的免费 key，稍微有点折腾但都是免费额度；记住行情工具不等于能赚钱，也不要真把它接到真实券商账户上。📱 手机上：不保证——要装 Node 并跑一个常驻网页服务，流程偏电脑/服务器路线，手机上折腾意义不大。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / ☁️ 云端",
          "intro": "先去 [Finnhub](https://finnhub.io) 免费注册拿一个 API key；数据库可以用免费的 MongoDB Atlas 云数据库，不用自己装 MongoDB。",
          "steps": [
            { "text": "clone 代码并装依赖：", "code": "git clone https://github.com/Open-Dev-Society/OpenStock.git\ncd OpenStock\nnpm ci", "after": "下载慢或失败就先开代理。" },
            { "text": "复制配置文件，填上数据库地址、密钥和 Finnhub key：", "code": "cp .env.example .env", "after": "`MONGODB_URI` 填 Atlas 给的连接地址，`BETTER_AUTH_SECRET` 可以用 `openssl rand -hex 32` 生成一个，`FINNHUB_API_KEY` 填前面注册到的 key。" },
            { "text": "检查配置和数据库连接：", "code": "node scripts/check-env.mjs\nnpm run test:db" },
            { "text": "启动开发服务器：", "code": "npm run dev" }
          ],
          "done": "打开 `http://localhost:3000` 能看到股票行情列表，就算跑起来了。"
        }
      ],
      "url": "https://github.com/Open-Dev-Society/OpenStock"
    }
  ]
};
