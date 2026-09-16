DAILY_DATA["github/2026-09-16"] = {
  "date": "2026-09-16",
  "highlight": "debpalash/VoiceStudio 是个完全在自己电脑本地跑的开源语音克隆/配音工具，相当于白嫖一个 ElevenLabs，不用为语音功能的 API 调用费发愁，今天最值得在电脑上装一个试试效果。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "debpalash/VoiceStudio",
      "title": "完全本地跑的开源语音克隆/配音工具",
      "lang": "Python",
      "stars": "30,942",
      "today": "2,072",
      "body": "一个开源的语音工具箱，能做语音克隆（模仿某个声音念文字）、语音设计、给视频配音、语音转文字、做有声书，支持 646 种语言，全程在自己电脑本地跑，不用联网、不用账号。",
      "explain": "ElevenLabs 是一家做 AI 语音生成的知名商业公司，按用量收费；「语音克隆」是让 AI 学会模仿某个人的声音，再照着你打的文字念出来；「配音」这里是指给视频换成别的语言的语音。VoiceStudio 把这类功能都开源出来，能在自己电脑上跑，不用付费。",
      "opinion": "你做 AI 小工具，如果想加朗读、配音、语音转文字这些功能，用商业 API 要按次收费，这个能在自己电脑本地跑，不用接口调用费，缺点是模型和运行比较吃资源（建议至少 8GB 内存，有独显更快），先在电脑上装起来试试效果，合不合用一试便知。📱 手机上：不行，它依赖 PyTorch 这类大型 AI 推理库，模型和运行都需要不小的内存和存储，Termux 装不上也带不动，只能在电脑上装。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            {
              "text": "打开 Releases 页面，下载 Windows 安装包（.msi）：",
              "code": "https://github.com/debpalash/VoiceStudio/releases/latest"
            },
            {
              "text": "双击下载好的安装包，按提示装完。"
            }
          ],
          "done": "桌面出现 VoiceStudio 图标，打开后能看到语音克隆、配音等功能标签页。"
        }
      ],
      "url": "https://github.com/debpalash/VoiceStudio"
    },
    {
      "emoji": "🛠",
      "repo": "addyosmani/agent-skills",
      "title": "给 AI 编程助手用的全流程工程技能包",
      "lang": "JavaScript",
      "stars": "94,785",
      "today": "307",
      "body": "一套装进 Claude Code 等 AI 编程助手的技能包，把「想清楚需求 → 写测试 → 写代码 → 代码审查 → 加固安全 → 部署上线」整个流程拆成 25 个技能文件，跟你之前装过的 superpowers、ponytail 是同一类东西，只是覆盖的开发环节更全。",
      "explain": "这里的「技能（Skill）」是给 Claude Code 用的规则说明文件，装上后它会在合适的场合自动照着做，不是一个独立软件。",
      "opinion": "你写单文件小工具，规模不大，25 个技能可能用不完，但挑几个用得上的装（比如代码审查、安全加固相关的），能帮你在写完代码后自动检查有没有明显漏洞，成本很低，不喜欢随时能卸载，值得试试。📱 手机上：可以，全部是纯文本 Markdown 技能文件，不需要编译，跟你之前装的技能包一样直接用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "steps": [
            {
              "text": "在 Claude Code 里直接输入（不是 shell 命令，如果因为网络问题失败，确保代理已经开着再重试）：",
              "code": "/plugin marketplace add addyosmani/agent-skills\n/plugin install agent-skills@addy-agent-skills"
            },
            {
              "text": "装完重启 Claude Code，输入斜杠命令看已装的技能：",
              "code": "/skills"
            }
          ],
          "done": "`/skills` 列表里能看到 spec-driven-development、test-driven-development 这些技能名称。"
        }
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "emoji": "🤖",
      "repo": "PlexPt/awesome-chatgpt-prompts-zh",
      "title": "中文提示词合集，照抄照用",
      "stars": "62,383",
      "today": "36",
      "body": "一份纯文本资料合集，收集了大量中文场景下好用的 ChatGPT 提示词（律师、老师、程序员等各种角色设定），直接复制粘贴到对话框里就能用，不是能运行的软件。",
      "explain": "「提示词（Prompt）」就是你跟 AI 说的那段开场指令，好的提示词能让 AI 少绕弯子、直接给你想要的格式和语气。",
      "opinion": "你自己写 Agent、调豆包/DeepSeek API，写系统提示词的手感很重要，翻一翻这里的写法——怎么设定角色、怎么限定格式、怎么处理边界情况——比自己瞎试更快摸到门道；虽然是给 ChatGPT 写的，稍微改改就能套到豆包、DeepSeek 上用。📱 手机上：不用装，手机浏览器直接打开仓库看文字就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "手机或电脑浏览器打开仓库，按角色/场景分类找需要的提示词。"
            },
            {
              "text": "复制喜欢的提示词，粘贴到豆包、DeepSeek 或你自己写的 Agent 的系统提示词里，照着改成自己需要的语气。"
            }
          ],
          "done": "能打开对应的提示词文本，复制粘贴能直接用，就说明找对地方了。"
        }
      ],
      "url": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
    },
    {
      "emoji": "📚",
      "repo": "krahets/hello-algo",
      "title": "动画图解的数据结构与算法教程",
      "stars": "130,134",
      "today": "44",
      "body": "一本开源的数据结构与算法教程，用动画图解配合能直接运行的代码讲解，支持 Python、Java、C++ 等 13 种编程语言的代码示例，网页版、PDF/EPUB、GitHub 仓库都能看。",
      "explain": "「数据结构」和「算法」是编程的地基，不管你写什么语言的代码都用得上；这本书不是干巴巴的文字教材，而是配了动画一步步演示这些概念是怎么运作的。",
      "opinion": "你是自学路线，没系统学过科班的数据结构课，这本书用可视化动画讲清楚常见概念，比啃文字教材轻松很多，而且代码有 Python 版本，正好配合你在学的 Python；不用一口气看完，用到某个数据结构时查着看就行。📱 手机上：能看，网页版手机浏览器直接打开；想跑 Python 代码的话，Termux 里的 python3.14 也够用，不需要装额外的包。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            {
              "text": "浏览器打开官网，跟着目录顺序看动画图解：",
              "code": "https://www.hello-algo.com"
            },
            {
              "text": "想跟着敲 Python 代码，克隆仓库到本地，代码都在 codes/python 文件夹按章节分类（手机上这条命令前面加代理，电脑上把这段去掉）：",
              "code": "https_proxy=http://127.0.0.1:7890 git clone https://github.com/krahets/hello-algo.git\ncd hello-algo/codes/python"
            }
          ],
          "done": "能打开官网看到动画图解；克隆成功后能进入 codes/python 目录，看到按章节命名的文件夹。"
        }
      ],
      "url": "https://github.com/krahets/hello-algo"
    },
    {
      "emoji": "💰",
      "repo": "getmoneynote/moneynote-api",
      "title": "功能更全的自托管记账/资产管理系统",
      "lang": "Java",
      "stars": "1,400+",
      "body": "一套开源的个人理财记账系统，除了记流水，还能管资产、负债，支持多账户、多币种、多人共享账本和报表，自己用 Docker 部署在自己的电脑上，数据不上传别人服务器，配套有 PC 网页版和 Flutter 手机 App。",
      "explain": "「自托管」是说软件跑在你自己的电脑或服务器上，数据存在自己手里，不用交给别人的服务器；「资产负债」是指你名下的钱、房子、欠款这些一起管理，不只是记「今天花了多少」。",
      "opinion": "你在学个人理财入门，目标是先搞清楚钱花哪儿了，如果只是想记流水，前面推荐过的轻量记账 App（BeeCount 等）就够用；这个功能更全、更像专业记账软件，适合你养成记账习惯一段时间、想更系统管理资产负债时再考虑装，现在可以先收藏。装的时候记得把默认邀请码换掉，别让默认邀请码长期挂在公网上被陌生人蹭注册。📱 手机上：装不了，需要 Docker，Termux 没有；在电脑上用 Docker Desktop 跑起来，再用手机浏览器连同一个 WiFi 访问电脑的地址就行。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要先装 Docker Desktop）",
          "steps": [
            {
              "text": "如果电脑还没装 Docker，先去官网下载装好 Docker Desktop：",
              "code": "https://www.docker.com/products/docker-desktop/"
            },
            {
              "text": "打开 PowerShell，下载配置并启动（下载慢或失败就先开代理）：",
              "code": "git clone https://github.com/getmoneynote/docker-compose-moneynote-hub.git\ncd docker-compose-moneynote-hub\ndocker compose up -d"
            },
            {
              "text": "浏览器打开：",
              "code": "http://127.0.0.1:43743",
              "after": "注册时邀请码填 `111111`（官方默认邀请码，长期用建议自己改掉，避免陌生人蹭注册）。"
            }
          ],
          "done": "能打开网页，用邀请码注册登录后，手动添加一笔账能保存成功。"
        }
      ],
      "url": "https://github.com/getmoneynote/moneynote-api"
    }
  ]
};
