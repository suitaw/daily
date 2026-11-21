DAILY_DATA["github/2026-11-21"] = {
  "date": "2026-11-21",
  "highlight": "今天最值得先装的是 `GoogleChrome/modern-web-guidance`——给 Claude Code 塞进最新的网页开发套路，手机电脑装法都一样，一条命令就能跑起来，正好对上你平时写单文件 HTML/JS 小工具的路子。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "GoogleChrome/modern-web-guidance",
      "deploy": ["phone", "pc"],
      "title": "给 Claude Code 塞进最新的网页开发套路",
      "lang": "TypeScript",
      "stars": "23.9k",
      "body": "Google Chrome 团队维护的一套「网页开发最佳实践」技能包，专门喂给 Claude Code 这类编程 AI，防止它写出过时的 HTML/JS/CSS 写法。可以装成 Claude Code 插件，也能单独当命令行工具用，扫一遍已有项目找出里面该更新的老写法。",
      "explain": "可以把它理解成给编程 AI 开的一本「网页开发最新规范手册」，AI 写代码前先翻一下，就不容易沿用几年前过时但还能跑的写法（比如老式的事件绑定方式）；里面的 `legacy-scan` 功能专门用来扫现有代码，把这类该更新的地方标出来。",
      "opinion": "你平时都是让 Claude Code 写单文件 HTML/JS 小工具，装上这个之后它能少踩「写法过时但没报错」的坑；也可以直接拿它扫一遍自己已经写好的项目，看有没有顺手能改的老写法。装起来就一两条命令，值得先试一下。📱 手机上：能装，就是 npm 包和 Claude Code 插件，不需要编译任何东西，Termux 自带的 Node 版本就够用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令基本一样）",
          "intro": "手机和电脑的区别只在要不要给命令加代理前缀，其余步骤相同。",
          "steps": [
            { "text": "① 如果你在用 Claude Code（现在应该正在用），直接在 Claude Code 对话框里输入装成插件：", "code": "/plugin marketplace add GoogleChrome/modern-web-guidance\n/plugin install modern-web-guidance@googlechrome", "after": "这两条是打在 Claude Code 对话框里的指令，不是终端命令，所以不用加代理前缀。" },
            { "text": "② 也可以单独当命令行工具用，跑官方安装向导（手机 Termux 这条要连 GitHub，前面加代理；电脑不用加）：", "code": "https_proxy=http://127.0.0.1:7890 npx modern-web-guidance@latest install", "after": "电脑上去掉前面的 https_proxy 那段直接跑就行；第一次跑要下载东西，卡住或报错大概率是网络问题，下载慢或失败就先开代理再试，不保证一次成功。" },
            { "text": "③ 装完可以试着扫一下某个已有项目有没有过时写法：", "code": "npx modern-web-guidance@latest legacy-scan ." }
          ],
          "done": "能跑 `npx modern-web-guidance@latest search fetch` 返回结果，或者在 Claude Code 里输入 `/help` 能看到 modern-web-guidance 相关命令，就是装好了。"
        }
      ],
      "url": "https://github.com/GoogleChrome/modern-web-guidance"
    },
    {
      "emoji": "🛠",
      "repo": "XiaoYouChR/Ghost-Downloader-3",
      "deploy": ["phone", "pc"],
      "title": "多协议下载器，能解析B站/YouTube视频",
      "lang": "Python",
      "stars": "13,701",
      "today": "1,082",
      "body": "一个支持 HTTP、磁力链接/BT、FTP、M3U8、MPEG-DASH 等多种协议的下载器，还能解析 B 站、YouTube 视频按清晰度和字幕下载。桌面端支持 Windows/macOS/Linux，安卓端（9.0 及以上，arm64）有独立 APK，能在后台继续下载甚至录制直播流。",
      "explain": "磁力链接/BT 是不经过网盘、直接在用户电脑之间互相传文件的下载方式；M3U8/MPEG-DASH 是视频网站常把一个视频切成很多小段分别加载用的格式，这个工具能自动把这些小段拼回一个完整文件。",
      "opinion": "平时下视频、下种子文件，用这一个工具基本能覆盖大部分场景，不用来回切换好几个下载器；安卓端是独立 APK，不走 Termux，装起来很省事。电脑和手机都能装，值得留一个在手上备用。📱 手机上：能装，官方直接提供 Android APK（不是 Termux 里的命令行工具），下载装上就能用。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机（Android APK）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/XiaoYouChR/Ghost-Downloader-3/releases)，找最新版本里文件名带 `android` 或 `arm64-v8a` 的 apk。", "after": "页面打开慢就先用手机上已有的代理/VPN 开一下再试，只是看网页，不用改系统设置。" },
            { "text": "下载后点开安装；手机可能会提示「阻止了未知来源应用」，去设置里允许这次安装就行。" },
            { "text": "装完打开 App，就能新建下载任务。" }
          ],
          "done": "App 能正常打开并新建一个下载任务，就是装好了。"
        },
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [Releases 页面](https://github.com/XiaoYouChR/Ghost-Downloader-3/releases)，下载 Windows 版（注意看清系统是 x86_64 还是 arm64）。", "after": "下载慢或失败就先开代理再试。" },
            { "text": "运行安装包，按提示装完即可。" }
          ],
          "done": "软件界面能打开，下载列表是空的，就是装好了。"
        }
      ],
      "url": "https://github.com/XiaoYouChR/Ghost-Downloader-3"
    },
    {
      "emoji": "🎨",
      "repo": "JoeanAmier/TikTokDownloader",
      "deploy": ["pc"],
      "title": "批量下载抖音/TikTok作品，能当API调用",
      "stars": "17,588",
      "today": "21",
      "body": "一个抖音/TikTok 作品下载和数据采集工具，能批量下载指定账号或合集里的作品，也能采集评论、点赞等数据。提供免安装的可执行文件，也能用源码或 uv 方式跑，还有一个 Web API 模式，跑起来后能被别的程序调用。",
      "explain": "Web API 模式是指把这个工具跑成一个本地小服务，别的程序（包括你自己写的网页小工具）能用网络请求喊它帮忙下载，不用自己从头写一遍下载抖音视频的代码；用它下私密账号或受限内容时需要一个 Cookie，相当于把你登录的身份信息贴给它，工具才能拿到跟你账号权限一样的内容。",
      "opinion": "想批量保存自己收藏的视频，或者给自己写的小工具当「下载后端」用，都用得上；Web API 模式配合你平时写的单文件网页小工具会比较顺手。电脑上直接用免安装版最省事，不用装 Python 环境。📱 手机上：不保证——它依赖的 curl_cffi 这个库要编译原生代码，Termux 里大概率装不上，建议放电脑用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows，免安装最简单）",
          "intro": "省事优先用免安装版；想自己改代码再用源码方式。",
          "steps": [
            { "text": "① 打开 [Releases 页面](https://github.com/JoeanAmier/TikTokDownloader/releases)，下载免安装的 Windows 压缩包。", "after": "下载慢或失败就先开代理再试。" },
            { "text": "② 解压后直接运行里面的 `main.exe`，弹出命令行菜单选对应功能就行。" },
            { "text": "③ 想用源码方式跑（需要 Python 3.12 及以上），先装依赖：", "code": "pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt", "after": "这是国内源，直连就行，不用开代理。" },
            { "text": "④ 再运行：", "code": "python main.py" },
            { "text": "⑤ 想当成后台服务被别的程序调用，在菜单里选 Web API 模式，默认跑在 `http://127.0.0.1:5555`，接口文档在 `/docs`。" }
          ],
          "done": "命令行菜单正常弹出能选功能，或者浏览器打开 http://127.0.0.1:5555/docs 能看到接口文档，就是装好了。"
        }
      ],
      "url": "https://github.com/JoeanAmier/TikTokDownloader"
    },
    {
      "emoji": "🛠",
      "repo": "xushengfeng/eSearch",
      "deploy": ["pc"],
      "title": "截图自带离线OCR、翻译、搜图",
      "lang": "TypeScript",
      "stars": "7,455",
      "today": "8",
      "body": "一个开源截图工具，截图之后能直接识别文字（离线 OCR）、翻译、搜索相似图片，还能贴图和录屏。支持 Windows、Linux、macOS，基础的离线 OCR 开箱即用，不用额外联网也不用额外下语言包。",
      "explain": "OCR 是「光学字符识别」，说白了就是把图片里的文字变成能复制粘贴的文本——比如截一张电路图上的参数说明，直接框出来就能把文字复制出来，不用自己再打一遍。",
      "opinion": "看资料、查教程的时候经常会截图保存却没法复制里面的文字，这个工具能直接从截图里抠文字出来，比系统自带的截图工具强不少；翻译和搜图功能查外文资料时也能用上。📱 手机上：不支持，它只做 Windows/Linux/macOS 桌面端，手机上用不了。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "steps": [
            { "text": "打开 [官网下载页](https://esearch-app.netlify.app) 或 [Releases 页面](https://github.com/xushengfeng/eSearch/releases)，下载 Windows 版。", "after": "也可以用 winget 装：`winget install esearch`；下载慢或失败就先开代理再试。" },
            { "text": "装完打开软件，按提示设置截图快捷键。" },
            { "text": "想识别生僻字，或者韩文/日文等其他语言，去设置里下载对应的语言包。" }
          ],
          "done": "按快捷键截图后能弹出工具栏（翻译、OCR、搜图这些按钮），就是装好了。"
        }
      ],
      "url": "https://github.com/xushengfeng/eSearch"
    },
    {
      "emoji": "📚",
      "repo": "ruanyf/weekly",
      "deploy": ["read"],
      "title": "每周五更新的科技周刊，AI/编程资讯合集",
      "stars": "108,439",
      "today": "83",
      "body": "阮一峰维护的科技周刊，每周五发布一期，收录一周内值得看的科技新闻、工具和文章，内容偏 AI、编程圈子；全部内容都放在仓库的 docs 目录里按期号存成一个个文件，往期随时能翻。",
      "explain": "「周刊」就是固定每周更新一次的文章合集，不是突发新闻，适合攒一批资讯一次性看完，不用天天刷。",
      "opinion": "不用装任何东西，每周翻一下能省掉自己到处找 AI、编程相关资讯的时间；当学习材料看也不错，经常会提到些新出的工具和技术动向，可以留意有没有自己用得上的。📱 手机上：能看，就是在 GitHub 上看 Markdown 文件，手机浏览器直接打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库首页，进 `docs` 目录，按期号挑着看；写这篇时最新一期是第 420 期。" },
            { "text": "也可以直接打开最新一期：[docs/issue-420.md](https://github.com/ruanyf/weekly/blob/master/docs/issue-420.md)" }
          ],
          "done": "能打开文章正文看到当期的资讯列表，就算看成功了。"
        }
      ],
      "url": "https://github.com/ruanyf/weekly"
    }
  ]
};
