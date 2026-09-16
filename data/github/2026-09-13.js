DAILY_DATA["github/2026-09-13"] = {
  "date": "2026-09-13",
  "highlight": "DietrichGebert/ponytail 这个 Claude Code 技能包一周涨了近 9,000 星，装上后能让 Claude Code 写代码更克制，跟你写单文件、不用框架的风格很搭，两条命令就能装完，今天最值得先试这个。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "Shubhamsaboo/awesome-llm-apps",
      "title": "100 多个能直接抄的 AI Agent/RAG 应用示例合集",
      "lang": "Python",
      "stars": "137,624",
      "today": "230",
      "body": "一个收集了 100 多个用大模型 API 做的 Agent、RAG 应用示例的大合集，从几十行的入门 Demo 到带记忆、带团队协作的复杂系统都有，全部开源可以直接抄来改。示例支持 Claude、DeepSeek、Qwen 等多种模型，不锁死在某一家。",
      "explain": "「RAG」是先让大模型去查一份资料库、再根据查到的内容回答问题的技术，可以理解成让 AI 考试前先翻书，而不是全靠死记硬背。「Agent Skills」跟前几天见过的技能包是一回事，是给编程助手用的说明文件。",
      "opinion": "你自己写的都是单文件小工具、Agent，这个仓库里 starter_ai_agents 文件夹的入门示例代码风格跟你接近，挑一两个跟你需求像的抄来改，比自己从零摸索快很多；仓库体量太大，别想着全看完。📱 手机上：不一定，各个子项目依赖不同——用 openai/anthropic 官方库的示例大概率跟你之前装 jiter 一样失败，纯调 HTTP 接口不依赖官方 SDK 的示例能装；具体看你选的那个文件夹里的 requirements.txt，装不上就换电脑。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证）/ 💻 电脑",
          "steps": [
            {
              "text": "下载整个仓库（要连 GitHub，Termux 里这条命令前面加代理，电脑上把这段去掉）：",
              "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git"
            },
            {
              "text": "进入一个入门级示例文件夹，装它的依赖：",
              "code": "cd awesome-llm-apps/starter_ai_agents/ai_travel_agent\npip install -r requirements.txt",
              "after": "手机上如果这一步卡在编译 jiter 或类似原生库报错，说明这个示例用了 openai/anthropic 库，装不上，换电脑，或者换仓库里不带这类依赖的示例试。"
            },
            {
              "text": "打开代码文件，把里面调用的 API Key 换成你自己的（DeepSeek、豆包官网的 API 控制台都能申请），然后启动：",
              "code": "streamlit run travel_agent.py",
              "after": "浏览器打开命令行提示的地址（通常是 `http://localhost:8501`）。"
            }
          ],
          "done": "浏览器里出现网页界面，输入内容能看到 Agent 的回复。"
        }
      ],
      "url": "https://github.com/Shubhamsaboo/awesome-llm-apps"
    },
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "title": "把大模型接到微信、QQ、Telegram 上做机器人的框架",
      "lang": "Python",
      "stars": "46,936",
      "today": "32",
      "body": "前身是很知名的 chatgpt-on-wechat 项目，改名 CowAgent 后升级成更完整的 Agent 框架：网页控制台、微信、飞书、钉钉、企业微信、QQ、Telegram、Discord、Slack 等渠道都能接，模型支持 OpenAI、Claude、DeepSeek、豆包、通义千问、智谱、Kimi 等，还带插件一键安装和记忆功能。",
      "explain": "「Agent 框架」可以理解成一套现成的脚手架，「收到消息 → 调用大模型 → 回复」这套流程已经帮你搭好，你只管配置和加自己的逻辑。「多渠道接入」是说同一个机器人可以同时挂在微信、QQ 等不同软件上，不用给每个平台单独写对接代码。",
      "opinion": "你平时调豆包、DeepSeek API 做小工具，这个项目能直接把你的模型接到微信、QQ 这些真实聊天软件里，做成一个随时能召唤的机器人，原生支持豆包和 DeepSeek，跟你现在的技术栈很贴合。跟前天推荐过的 AstrBot 是同一类项目（IM 机器人框架），这个历史更久、社区更大，两个挑一个玩就行，不用都装。📱 手机上：很可能装不上，它支持接入 OpenAI、Claude 等模型，大概率也用到了 openai/anthropic 这类库，跟你之前装 jiter 失败是同一类问题，建议直接在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            {
              "text": "打开 PowerShell，运行官方一键安装脚本（脚本托管在国内 CDN，不用开代理）：",
              "code": "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex"
            },
            {
              "text": "按安装脚本提示打开配置文件，填入 DeepSeek 或豆包的 API Key，同时给 `web_password` 设一个你自己的密码。"
            },
            {
              "text": "浏览器打开管理后台：",
              "code": "http://localhost:9899",
              "after": "用刚才设置的 `web_password` 登录，登录后再去配置页面接微信/QQ 等渠道。"
            }
          ],
          "done": "能打开网页控制台并登录成功，看到渠道和模型的配置页面。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🤖",
      "repo": "DietrichGebert/ponytail",
      "title": "让 Claude Code 少写没用代码的极简技能包",
      "lang": "JavaScript",
      "stars": "136,600+",
      "week": "9,272",
      "body": "一个装进 Claude Code 的技能包，核心规则是让 AI 写代码前先问自己“这个功能真的需要写吗、能不能一行搞定”，逼着它少写没必要的封装。官方测试显示平均能减少约 54% 的代码量，还更省 API 调用成本。",
      "explain": "这里说的「技能」跟前几天见过的 superpowers 是同一类东西——给 Claude Code 装的规则说明文件，不是一个独立软件，装完会在它写代码时自动起作用。",
      "opinion": "你写的都是单文件 HTML + JS，不用框架，这个技能包提倡的“能不写就不写”跟你的风格完全一致，装上以后 Claude Code 帮你写代码会更克制，少一些你事后要手动删掉的多余封装，而且随时能用命令关掉，试错成本很低，建议装上用一阵子看看顺不顺手。📱 手机上：可以，跟 superpowers 一样是 Claude Code 自己的插件系统，装的是文本技能文件，不需要编译任何东西。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入（不是 shell 命令，如果因为网络问题失败，确保代理已经开着再重试）：",
              "code": "/plugin marketplace add DietrichGebert/ponytail\n/plugin install ponytail@ponytail"
            },
            {
              "text": "装完后可以调节强度，比如只开轻量模式：",
              "code": "/ponytail lite"
            }
          ],
          "done": "输入 `/skills` 能看到 ponytail 相关技能；输入 `/ponytail-review` 能检查当前改动有没有过度设计。"
        }
      ],
      "url": "https://github.com/DietrichGebert/ponytail"
    },
    {
      "emoji": "🛠",
      "repo": "cathrynlavery/diagram-design",
      "title": "让 Claude Code 帮你画单文件 HTML 图表",
      "lang": "HTML",
      "stars": "38,900+",
      "week": "7,409",
      "body": "也是一个装进 Claude Code 的技能包，能生成 39 种“编辑级”的流程图、架构图、时序图、甘特图等，输出是不用装任何软件、双击就能在浏览器里打开的单个 HTML 文件（内嵌 SVG 图形），不用画图软件也不用 Mermaid。",
      "explain": "「SVG」是一种用代码描述图形的格式，浏览器原生认识，放大也不会像照片一样变模糊。这里生成的“单文件 HTML”跟你自己写的小工具是同一种形态，打开就能看，不用额外装东西。",
      "opinion": "你自己写单文件 HTML + JS 工具，这个技能包生成的图刚好也是单文件 HTML，可以直接当成项目里的一张说明图放进 GitHub Pages；给自己的 Agent 项目画个模块调用关系图时能省不少事。📱 手机上：可以，装法跟前面的技能包一样是 Claude Code 插件，不需要编译；只有想把图导出成 PNG 图片时才需要另装 playwright，这一步在手机上大概率装不上，日常用 HTML 格式看图完全够用，不用管 PNG 导出。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入：",
              "code": "/plugin marketplace add cathrynlavery/diagram-design\n/plugin install diagram-design@diagram-design"
            },
            {
              "text": "让 Claude Code 帮你画一张图试试，比如让它给你现在的项目画一张架构图。"
            }
          ],
          "done": "生成出一个 `.html` 文件，打开（电脑双击，手机用浏览器打开）能看到图。"
        }
      ],
      "url": "https://github.com/cathrynlavery/diagram-design"
    },
    {
      "emoji": "🛠",
      "repo": "RapidAI/RapidOCR",
      "title": "免费离线的中英文 OCR 文字识别工具",
      "lang": "Python",
      "stars": "7,805",
      "today": "10",
      "body": "一个免费开源的 OCR（文字识别）工具包，能识别图片和文档里的中英文文字，速度快、能离线跑，不用调用付费的在线 OCR API。",
      "explain": "「OCR」全称光学字符识别，就是让电脑“看懂”图片里的文字，比如拍一张发票或截一张图，自动识别出上面写的字变成能复制的文本。",
      "opinion": "你做 AI 小工具时经常需要先把图片、截图里的文字弄成文本才能喂给大模型，这个工具能省掉自己接付费 OCR API 的钱和麻烦，识别出来的文字直接拼进 prompt 就行，适合当自己项目里的一个功能模块用。📱 手机上：大概率装不上，它依赖 onnxruntime 这类编译好的原生推理库，Termux 用的是安卓自己的 bionic 系统库、不是常见 Linux 的 glibc，通常装不了这类库，跟你之前遇到的 jiter 是同一类问题，建议直接在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "安装：",
              "code": "pip install rapidocr onnxruntime"
            },
            {
              "text": "写几行代码试试识别效果（把文件名换成你自己的图片）：",
              "code": "from rapidocr import RapidOCR\nengine = RapidOCR()\nresult = engine(\"你的图片.jpg\")\nprint(result)"
            }
          ],
          "done": "命令行里能打印出图片中识别出的文字内容。"
        }
      ],
      "url": "https://github.com/RapidAI/RapidOCR"
    },
    {
      "emoji": "📚",
      "repo": "ascoders/weekly",
      "title": "前端好文精读周刊",
      "lang": "JavaScript",
      "stars": "31,119",
      "today": "10",
      "body": "一份纯中文的前端技术周刊，每周更新一期，把当周值得读的前端文章挑出来做深度解读，内容涵盖框架、TypeScript 类型体操、设计模式、编译原理等，本身是一份持续更新的文档合集，不是能运行的软件。",
      "explain": "这里的“精读”是指对文章做深入解读、补充背景和点评，不是简单转发一个链接。",
      "opinion": "你写 JS 做工具，跟前端关系很近，比起自己漫无目的地刷技术号，这种固定每周一期、有人筛选过的合集效率更高，坚持翻几个月会有实打实的技术视野提升，但不是刚需，闲下来当学习材料看就行。📱 手机上：不用装，手机浏览器直接看 GitHub 页面就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "手机或电脑浏览器打开仓库首页，README 里有完整的历期目录，点你感兴趣的标题直接跳转。"
            },
            {
              "text": "想跟着追更新，可以点 GitHub 页面右上角的 Watch/Star，方便过一阵回来翻。"
            }
          ],
          "done": "每周更新一次，看不过来就先收藏，等空下来的时候翻。"
        }
      ],
      "url": "https://github.com/ascoders/weekly"
    },
    {
      "emoji": "💰",
      "repo": "ellite/Wallos",
      "title": "自托管的订阅费追踪器",
      "lang": "PHP",
      "stars": "8,500+",
      "body": "一个开源的“订阅费追踪器”，帮你把 Netflix、iCloud、各种会员这些每月自动扣费的订阅整理在一起，一眼看出每月/每年在订阅上花了多少钱，还能在续费到期前提醒你。",
      "explain": "「自托管」是说软件跑在你自己的电脑或服务器上，数据不用上传到别人的服务器。这里的 Docker 是一种“把软件和它需要的运行环境打包好，一条命令就能跑起来”的工具，不用自己手动配置网站服务器。",
      "opinion": "你在学理财入门，目标是先搞清楚钱花哪儿了，很多人根本不知道自己身上挂着多少个“自动续费”，这个工具专门解决这一个问题，比综合记账软件轻、上手成本低，适合先从“止血”（停掉不用的订阅）开始。它带一个可选的“AI 推荐”功能能接 ChatGPT/Gemini/本地 Ollama，那是加分项不是必须，先别急着折腾。📱 手机上：装不了，它需要一个 Docker 环境（或 PHP 网站服务器）跑在电脑或 NAS 上，Termux 没有 Docker；装好后用手机浏览器访问电脑上跑起来的这个服务就行，不用在手机上单独装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装 Docker Desktop）",
          "steps": [
            {
              "text": "如果电脑还没装 Docker，先去官网下载装好 Docker Desktop：[docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)"
            },
            {
              "text": "打开 PowerShell，运行（把路径换成你电脑上想存数据的位置）：",
              "code": "docker run -d --name wallos -v C:\\wallos\\db:/var/www/html/db -v C:\\wallos\\logos:/var/www/html/images/uploads/logos -e TZ=Asia/Shanghai -p 8282:80 --restart unless-stopped bellamy/wallos:latest",
              "after": "下载慢或失败就先把 Docker Desktop 设置里的代理打开，或者检查网络。"
            },
            {
              "text": "浏览器打开：",
              "code": "http://localhost:8282",
              "after": "第一次进去按提示注册自己的账号（不是用官方演示的 demo/demo 账号）。"
            }
          ],
          "done": "能打开网页，注册登录后能添加一条订阅记录。"
        }
      ],
      "url": "https://github.com/ellite/Wallos"
    }
  ]
};
