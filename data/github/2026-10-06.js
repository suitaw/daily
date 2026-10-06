DAILY_DATA["github/2026-10-06"] = {
  "date": "2026-10-06",
  "highlight": "今天最值得试的是 `CowAgent`——一行命令在本地搭个支持豆包、DeepSeek的AI管家框架，规划任务、记忆、多渠道接入都给搭好了，正对上你平时调API做Agent的路子。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "zhayujie/CowAgent",
      "title": "一行命令搭个支持豆包DeepSeek的AI管家",
      "lang": "Python",
      "stars": "47,232",
      "today": "4",
      "body": "`CowAgent`是一个开源的个人AI助手框架，能规划任务、调用工具和技能，还能靠记忆和知识库慢慢「进化」。支持多智能体协作、多模型切换，豆包、DeepSeek、通义千问、智谱GLM、Kimi都能直接接。装好之后是一个跑在本地的网页后台，微信、Telegram这些聊天渠道也能接进去。",
      "explain": "Agent（智能体）就是能自己拆解任务、调用各种工具去执行，而不是只回答一句话的AI程序；「多智能体」是让几个这样的AI分工配合干一件事。「技能市场」是别人写好的功能插件，装上就能用，不用自己从零写。",
      "opinion": "你平时就是在调豆包、DeepSeek这类API做Agent，这个项目直接把「规划任务+记忆+多渠道」这套框架搭好了，想做个能长期记事的AI管家，拿它当起点比自己从零搭省不少事；但它是个完整的后台服务，不是单文件小工具，上手要花点时间看配置。📱 手机上：安装脚本会自动装Python依赖，但依赖里有numpy这类要编译的库，Termux上不保证能装完，卡住或报错大概率就是编译失败，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用PowerShell跑官方一键安装脚本：", "code": "irm https://cdn.link-ai.tech/code/cow/run.ps1 | iex", "after": "下载慢或失败就先开代理再试。" },
            { "text": "装完后浏览器打开后台：", "code": "http://localhost:9899" },
            { "text": "在后台「模型」设置里填入豆包或DeepSeek的API Key，选好要用的模型。" }
          ],
          "done": "浏览器打开 http://localhost:9899 能看到配置页面，模型连上后能在网页里对话，就是装好了。"
        },
        {
          "title": "安装步骤 · 📱 手机 Termux（不保证）",
          "steps": [
            { "text": "跟电脑一样跑官方一键脚本：", "code": "bash <(curl -fsSL https://cdn.link-ai.tech/code/cow/run.sh)", "after": "脚本会自动装Python依赖，手机上编译numpy这类库经常失败，卡住或报错就说明这条路走不通，换电脑装。" }
          ],
          "done": "脚本跑完提示访问 http://localhost:9899，浏览器打开能看到配置页面就是装好了；中途报错大概率是原生库编译失败，直接换电脑。"
        }
      ],
      "url": "https://github.com/zhayujie/CowAgent"
    },
    {
      "emoji": "🛠",
      "repo": "xushengfeng/eSearch",
      "title": "截图/OCR/翻译/录屏四合一免费工具",
      "lang": "TypeScript",
      "stars": "7,250",
      "today": "4",
      "body": "`eSearch`是个桌面端全能工具：截图加标注、离线OCR识别文字、划词翻译、以图搜图、录屏都集成在一个软件里。OCR默认用本地离线引擎，不用联网也不用API Key；翻译和搜图功能可以选Google、DeepL、百度等免费接口。",
      "explain": "OCR是把图片里的文字识别成能复制的文本，比如截一张图里的一段话，直接识别出来复制走，不用自己打字抄。「离线OCR」说明这个识别过程在电脑本地跑，不用把图片传到网上。",
      "opinion": "你平时做小工具经常要截图存资料、抄代码片段里的文字，这个软件把截图、OCR、翻译这几个日常最常用的小功能打包到一起，装一次能顶好几个单独的小工具，免费、不用注册账号就能用基础功能。📱 手机上：这是电脑桌面软件（Windows/macOS/Linux），没有Android版，手机上装不了，只能在Windows电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "用winget直接装（Windows自带）：", "code": "winget install esearch" },
            { "text": "winget装不上就去Releases页面手动下载安装包：", "code": "https://github.com/xushengfeng/eSearch/releases", "after": "选文件名带win32-x64的.exe安装包。" }
          ],
          "done": "安装完打开软件，系统托盘（屏幕右下角）出现它的图标，就是装好了；右键图标能看到截图、翻译这些功能入口和快捷键设置。"
        }
      ],
      "url": "https://github.com/xushengfeng/eSearch"
    },
    {
      "emoji": "📚",
      "repo": "M-Abozaid/esp32-c3-adblock",
      "title": "几块钱的芯片板子，自己做个广告拦截器",
      "lang": "C++",
      "stars": "1,342",
      "today": "196",
      "body": "这个项目用一块几块钱的ESP32-C3开发板，做成一个类似Pi-hole的DNS广告拦截器，插在路由器USB口上就能跑。它把54万条广告域名压缩成「闪存里的40位哈希值」而不是存进内存里的完整网址，所以一块很便宜、内存很小的芯片也能扛住查域名的速度。",
      "explain": "ESP32-C3是一种很便宜、常用在智能硬件里的小芯片（开发板），自带WiFi；Pi-hole是一种常见的广告拦截思路，原理是在家里网络里拦截广告域名的请求。DNS是上网时把网址翻译成服务器地址的系统，拦掉广告域名的DNS请求，广告就加载不出来。",
      "opinion": "这不是帮你赚钱或提效率的工具，是个很适合练手的硬件小项目：买块几块钱的板子、接USB、刷个固件，就能在家里网络里挡掉一部分广告，顺带了解芯片、固件、DNS这些概念怎么串起来工作。真要拦广告，手机App或路由器插件可能更省事，这个项目的价值在于「自己动手做一个真实能用的东西」。📱 手机上：这是刷进硬件芯片的固件项目，需要USB连电脑烧录，Termux用不了，只能在电脑上装好PlatformIO来做。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，需要一块ESP32-C3开发板）",
          "intro": "先网购一块ESP32-C3开发板（不用带PSRAM的版本，几块钱一块），用USB线接上电脑。",
          "steps": [
            { "text": "装PlatformIO（命令行版）：", "code": "pip install -U platformio", "after": "官方提示别用太旧的版本（比如Linux包管理器自带的4.3.4），否则编译会失败。" },
            { "text": "克隆仓库：", "code": "git clone https://github.com/M-Abozaid/esp32-c3-adblock.git" },
            { "text": "进目录，复制一份配置文件：", "code": "cd esp32-c3-adblock\ncp src/secrets.example.h src/secrets.h", "after": "打开secrets.h把WEB_USER、WEB_PASS、OTA_PASS改成自己的值（这几项必填，不能用示例里的占位符），WIFI_SSID/WIFI_PASS可以留空，开机后用手机连它自动开的热点配网。" },
            { "text": "生成广告域名黑名单：", "code": "python3 tools/build_blocklist.py data/blocklist.bin" },
            { "text": "USB烧录固件（只有第一次需要接USB）：", "code": "pio run -t upload\npio run -t uploadfs" },
            { "text": "看启动日志拿到设备的IP地址：", "code": "pio device monitor", "after": "连不上家里WiFi就先用手机连它自动开的热点`C3-AdBlock-XXXX`，弹出的页面里填WiFi密码。" }
          ],
          "done": "浏览器打开 http://c3adblock.local（或日志里看到的IP）能看到管理页面，说明板子跑起来了；把家里设备的DNS指向这个IP，就能看到广告请求被挡掉的记录。"
        }
      ],
      "url": "https://github.com/M-Abozaid/esp32-c3-adblock"
    },
    {
      "emoji": "📚",
      "repo": "PlexPt/awesome-chatgpt-prompts-zh",
      "title": "一千多条中文AI提示词，照抄就能用",
      "stars": "62,990",
      "today": "45",
      "body": "这是一份中文AI提示词(prompt)合集，覆盖学术写作、代码、文案、生活教练等几十种场景，直接复制粘贴改一改就能用在豆包、DeepSeek或其他对话类AI上。内容整理成README和JSON文件两种形式，前者方便人看，后者方便开发者接到自己的程序里。",
      "explain": "Prompt（提示词）就是你喂给AI的那句指令，同一个问题换一种问法，AI给出的答案质量能差很多。这份合集相当于一本「问AI的句式参考书」，照着改几个词就能套到自己的场景里。",
      "opinion": "你平时做AI小工具，经常要设计系统提示词(system prompt)来让AI扮演某个角色、按某种格式回答，这份合集能当素材库用，省去自己从头想措辞的功夫；缺点是条目多、质量不均，挑几个贴近你场景的改改用就行，不用全看完。📱 手机上：纯文字内容，手机浏览器直接打开GitHub页面看就行，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接在GitHub上看完整列表：", "code": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh" },
            { "text": "想接到自己程序里用，可以直接读仓库里的`prompts-zh.json`文件" }
          ],
          "done": "能打开页面看到一条条提示词，就可以挑着用了。"
        }
      ],
      "url": "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
    },
    {
      "emoji": "💰",
      "repo": "TNT-Likely/BeeCount",
      "title": "跨平台开源记账App，手机电脑网页都能用",
      "stars": "2.5k",
      "body": "`BeeCount`是个跨平台的开源记账App，iOS、Android、网页都有版本，支持多账本、多账户、预算管理、周期记账和图表统计。还带AI拍照识别小票、语音记账、截图自动识别金额这些辅助输入功能，数据可以选本地存储，也能用自己的服务器、iCloud或WebDAV同步。",
      "explain": "本地优先（local-first）是说App默认把数据存在你自己手机或电脑上，不强制上传到别人的服务器；WebDAV是一种常见的个人云同步协议，很多网盘都支持，用它同步数据不用依赖这个App作者的服务器。",
      "opinion": "如果你想养成记账习惯、顺手练一下理财，这个App基础的记账、预算、图表功能免费且离线能用，不用注册账号就能先用起来，想同步数据再配置云端选项。它用的是商业源代码许可证，个人使用和学习完全免费，只是不能拿去改成自己的商业产品卖。它不涉及接银行账户或自动交易，纯粹是记账工具。📱 手机上：有专门的Android APK和Google Play版本，手机是它的主力平台，装起来最省事。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（Android）",
          "steps": [
            { "text": "应用商店能打开就走Google Play搜BeeCount安装；打不开商店就去GitHub的Releases页面下载APK：", "code": "https://github.com/TNT-Likely/BeeCount/releases", "after": "下载的是.apk文件，安装时手机会提示「未知来源」，需要手动允许一下才能装。" }
          ],
          "done": "打开App能看到记一笔的界面，新建一条支出记录保存成功，就是装好了。"
        }
      ],
      "url": "https://github.com/TNT-Likely/BeeCount"
    }
  ]
};
