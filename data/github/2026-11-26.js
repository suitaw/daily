DAILY_DATA["github/2026-11-26"] = {
  "date": "2026-11-26",
  "highlight": "今天最值得先动手试的是 **ezBookkeeping**——花几分钟用 Docker 在电脑上搭一个记账网站，数据存在自己手里，正好配合学理财用起来。",
  "items": [
    {
      "emoji": "💰",
      "repo": "mayswind/ezbookkeeping",
      "deploy": ["pc", "cloud"],
      "title": "自己搭一个记账网站，数据自己攥着",
      "stars": "6.1k",
      "body": "ezBookkeeping 是一个开源的自托管记账工具，支持手动记流水、导入各家银行和支付软件的账单、按分类统计和画图表，还带预算管理和多币种汇率自动更新。界面对手机和电脑都做了适配，装好后用浏览器打开就能记账，也能加到手机主屏幕当 App 用。所有数据都存在你自己的机器上，不会传到别人的服务器。",
      "explain": "「自托管」是说这个软件装在你自己的电脑或服务器上跑，账单数据只存在这台机器里；不像手机记账 App，数据通常存在厂商的云端服务器上，软件停运或你换App，数据不一定带得走。",
      "opinion": "你在学理财，手动记一遍账、看一遍分类统计，比光看书更容易把「预算」这些概念用到自己身上。装在 Windows 电脑上就能用，缺点是电脑关机网页就打不开，想随时随地记账得配一台常年开着的电脑或云服务器。免费、开源、数据自己管，这点比大多数手机记账 App 强，值得花十分钟装一下试试。📱 手机上：官方没明确给出手机能直接跑的 ARM64 二进制，Termux 也没有 Docker，装不稳，不建议在手机上折腾，手机上就用浏览器访问装在电脑或服务器上的网页版。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Docker）",
          "intro": "需要先装好 Docker",
          "steps": [
            { "text": "拉取并启动容器，把数据目录挂载到本机，防止重启容器后数据丢失：", "code": "docker run -d -p 8080:8080 -v ezbookkeeping-data:/ezbookkeeping/data mayswind/ezbookkeeping", "after": "下载慢或失败就先开代理。" },
            { "text": "打开浏览器访问 http://localhost:8080/，第一次打开会引导你注册管理员账号" }
          ],
          "done": "能看到注册/登录页面，注册完进到记账首页，就算装成功。"
        }
      ],
      "url": "https://github.com/mayswind/ezbookkeeping"
    },
    {
      "emoji": "🤖",
      "repo": "HKUDS/CLI-Anything",
      "deploy": ["pc"],
      "title": "让 AI 编程工具能直接操作你电脑上的软件",
      "lang": "Python",
      "stars": "65,674",
      "today": "1,106",
      "body": "这是一套给 Claude Code、Cursor 等 AI 编程工具用的扩展，核心是 CLI-Hub——一个社区维护的命令行工具市场，收录了 GIMP、Blender、LibreOffice、Ollama 等几十个软件的现成命令行封装，装好之后 AI 工具就能直接调用这些软件干活，不止是帮你写代码。它还带一个生成器，能分析某个软件或代码库，自动给它生成一套新的命令行工具。项目刚上榜一天就涨了 1,100 多星。",
      "explain": "「命令行工具」是靠打字输入命令来操作软件，不用鼠标点菜单；很多软件（比如 GIMP、Blender）本来只能靠鼠标点，这个项目相当于给它们另开一个「文字操控入口」，这样 AI 工具才能直接下命令指挥它们，而不是只会聊天或写代码。",
      "opinion": "你平时用 Claude Code 写 AI 小工具，这个能扩展它能干的活——比如让它直接调用 LibreOffice 转文档格式、调用电脑上已装的软件批量处理文件，不用自己从头写对接代码。建议先从 CLI-Hub 市场里挑一两个电脑上已经装了对应软件的封装装上试试，比自己写代码接入稳，也更容易判断值不值得投入时间。📱 手机上：CLI-Hub 本身纯 Python，装包这步没问题，但它封装的大多是 GIMP、Blender 这类手机上根本没有的桌面软件，装了也用不上，所以没把这个标成手机能用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "需要先装好 Python 3.10 及以上版本",
          "steps": [
            { "text": "装 CLI-Hub 命令行工具（从 PyPI 装，不用连 GitHub）：", "code": "pip install cli-anything-hub" },
            { "text": "搜一下有没有你需要的软件已经被封装成命令行工具（把「图片」换成想找的软件或用途）：", "code": "cli-hub search 图片", "after": "这一步要连 GitHub 上的注册表，下载慢或失败就先开代理。" },
            { "text": "装一个电脑上已经有对应软件的封装（比如已经装了 GIMP 才装它）：", "code": "cli-hub install gimp" },
            { "text": "（可选）如果用 Claude Code，想让 AI 给某个代码库自动生成专属命令行工具，在 Claude Code 里装插件：", "code": "/plugin marketplace add HKUDS/CLI-Anything\n/plugin install cli-anything", "after": "这条在 Claude Code 内部执行，不是普通终端命令。" }
          ],
          "done": "运行 `cli-hub --help` 能看到命令列表，就算装成功。"
        }
      ],
      "url": "https://github.com/HKUDS/CLI-Anything"
    },
    {
      "emoji": "📚",
      "repo": "jingyaogong/minimind",
      "deploy": ["pc"],
      "title": "从零手写训练一个迷你大模型，搞懂AI到底怎么练出来的",
      "lang": "Python",
      "stars": "70,940",
      "today": "826",
      "body": "这个项目教你用 PyTorch 从零实现一个约 6400 万参数的小语言模型，覆盖预训练、指令微调、`LoRA`、强化学习对齐等完整流程，每一步代码都写得比较直白，不是直接套现成框架。作者给出的参考数据是单张 3090 显卡跑完一轮训练约 2 小时，租云 GPU 的成本大概几块钱。项目还放出了训练好的模型，可以先下载下来直接试效果，不用自己从头训。",
      "explain": "「参数」是模型里需要通过训练调整的数字，参数越多模型通常能力越强，但训练和跑起来也越费显卡。「预训练」是先用海量文字让模型学会说话的规律，「微调」是之后用少量问答数据教它听懂指令、按格式回答——有点像先上完通识教育，再考一个专业证。",
      "opinion": "你在学 Python 和 AI，比起只看现成课程，这种从零实现的小项目能让你真正碰到训练一个大模型每一步到底在做什么，代码量不算大，适合边读边改着玩。显卡用云 GPU 租着跑就够，没必要在本机硬跑。建议先下载作者训练好的模型跑一遍推理看效果，确认感兴趣再考虑自己从头训一遍。📱 手机上：装不了，PyTorch 在 Termux 上没有现成的安装包，而且训练和推理都吃显卡，这个只能放在电脑或云 GPU 上玩。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 / 云 GPU",
          "intro": "需要 Python 3.10 及以上版本，有 NVIDIA 显卡最好（没有也能跑推理，训练会很慢）",
          "steps": [
            { "text": "克隆仓库并装依赖：", "code": "git clone --depth 1 https://github.com/jingyaogong/minimind\ncd minimind && pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple", "after": "下载慢或失败就先开代理。" },
            { "text": "用国内镜像下载作者训练好的模型（不用连 GitHub）：", "code": "modelscope download --model gongjy/minimind-3 --local_dir ./minimind-3" },
            { "text": "跑推理，直接和这个迷你模型对话：", "code": "python eval_llm.py --load_from ./minimind-3" },
            { "text": "（可选，需要显卡）想自己从头训练一轮：", "code": "cd trainer && python train_pretrain.py", "after": "不保证一次顺利，缺依赖或显存不够会直接报错，照报错信息改 requirements 或换更小的 batch size。" }
          ],
          "done": "推理命令跑完能在终端看到模型输出的文字回复，就算装成功。"
        }
      ],
      "url": "https://github.com/jingyaogong/minimind"
    },
    {
      "emoji": "📚",
      "repo": "d2l-ai/d2l-zh",
      "deploy": ["read"],
      "stars": "82.7k",
      "title": "免费中文教材，边看书边跑代码学深度学习",
      "body": "《动手学深度学习》是一本开源中文教材，中英文版被 70 多个国家、500 多所大学当教材使用。每一节理论配一段能直接跑的代码，不是光讲公式；内容从最基础的数学和编程一路讲到现在流行的深度学习模型。",
      "explain": "「深度学习」是现在大部分 AI（包括你平时调的 LLM API）背后用的训练方法，这本书从最基础的数学和代码讲起，不要求你已经懂机器学习。",
      "opinion": "你在学 Python，这本书比单纯刷语法题更有方向——边看理论边跑代码，顺便能搞懂 AI 工具背后大致在算什么，对理解提示词、模型这些概念也有帮助。不用装任何东西，网页打开就能看，书里前几章的代码在没有显卡的电脑上也能跑。先看目录挑感兴趣的章节读，不用从头到尾按顺序啃。📱 手机上：看书完全没问题，书里要跑的代码需要装 PyTorch 这类深度学习框架，Termux 里没有对应安装包，跑代码这部分得放到电脑上。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "intro": "纯网页教材，手机电脑浏览器都能直接看。",
          "steps": [
            { "text": "打开网页直接看（最新版，持续更新）：", "code": "https://zh.d2l.ai" },
            { "text": "想顺手提问或看别人讨论，可以去论坛逛逛：", "code": "https://discuss.d2l.ai" }
          ],
          "done": "打开网站能看到章节目录，就可以直接开始看了。"
        }
      ],
      "url": "https://github.com/d2l-ai/d2l-zh"
    },
    {
      "emoji": "🛠",
      "repo": "wanglin2/mind-map",
      "deploy": ["phone", "pc"],
      "title": "开源思维导图工具，整理学习笔记和项目计划",
      "lang": "JavaScript",
      "stars": "13,074",
      "today": "21",
      "body": "这是一个开源思维导图软件，支持思维导图、逻辑图、组织结构图、时间轴、鱼骨图等多种结构，能导入 XMind、FreeMind、Markdown、Excel 等格式，导出 PNG、SVG、PDF，还带云同步和上百个内置主题。提供 Windows/Mac/Linux 桌面客户端，也有免费的在线网页版可以不装软件直接用。",
      "explain": "没什么特别难懂的名词——「鱼骨图」是一种用来分析问题原因的图表，形状像鱼骨头，中间写问题，骨刺上写各种可能原因，常用来理清一件事为什么没做好。",
      "opinion": "你同时在学 Python、电工、理财，知识点杂、进度各不一样，用思维导图梳理一下每门课学到哪了、下一步学什么，比纯文字笔记更容易一眼看全局。想先试试效果，直接打开免费在线版画一张看顺不顺手，觉得好用再装桌面客户端留本地文件。📱 手机上：在线网页版可以直接打开用，不用装任何东西，但手机上画图操作不如电脑鼠标顺手，凑合用没问题。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 / 💻 电脑（不装，直接用网页版）",
          "steps": [
            { "text": "打开网页版直接用：", "code": "https://web.sxmind.cn/" }
          ],
          "done": "能打开网页画一张思维导图并保存，就说明能正常用了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（可选，想要本地离线客户端）",
          "steps": [
            { "text": "去 Releases 页面下载对应系统的安装包：", "code": "https://github.com/wanglin2/mind-map/releases" }
          ],
          "done": "装完打开客户端，能新建一张思维导图，就算装好了。"
        }
      ],
      "url": "https://github.com/wanglin2/mind-map"
    }
  ]
};
