DAILY_DATA["github/2026-10-15"] = {
  "date": "2026-10-15",
  "highlight": "今天最值得动手试的是 `sharpie7/circuitjs1`：一个能在浏览器里直接搭电路、看电流电压变化的仿真器，不用装任何东西，手机电脑都能打开玩，拿课本里学到的电路现场搭一个最直观。",
  "items": [
    {
      "emoji": "📚",
      "repo": "sharpie7/circuitjs1",
      "deploy": ["phone", "pc"],
      "title": "打开网页就能玩的电路仿真器",
      "body": "CircuitJS1 是个能直接在浏览器里跑的电路仿真器：拖几个元件、接好线，就能实时看到电流方向、电压读数，甚至电子在导线里「流动」的动画。项目自带一批示例电路，从简单的串并联电路到振荡器、逻辑门都有，点开示例就是一份能动手改的教材。它本来是上世纪的一个 Java 小程序，后来被移植成了纯网页版，现在有两个作者各自维护的在线地址可以直接打开用。",
      "explain": "仿真器的意思是电脑按电路原理算出该有的电流电压，不用真的接电线也能看效果，拆错线、接错了也不会出什么事故，适合先在屏幕上试错。",
      "opinion": "跟着电工教材学到哪个电路，就在这上面照样搭一个试试，看电流表读数对不对得上书上讲的道理，比光看图纸直观很多；完全不碰代码也能用，拖一拖、连一连线就行。离线版要自己用 Electron 工具打包，步骤比较繁琐，不如直接用网页版方便。📱手机上：能用——这就是个普通网页，手机浏览器打开链接就能玩，拖拽接线可能不如电脑鼠标顺手，但基本操作没问题。",
      "install": [
        {
          "title": "怎么用（不用安装）",
          "steps": [
            { "text": "打开其中一个在线地址：http://www.falstad.com/circuit/ 或 http://lushprojects.com/circuitjs/" },
            { "text": "在页面菜单里找 File → Examples（或类似入口），挑一个示例电路打开，看它怎么接线、电流怎么走" },
            { "text": "自己拖元件、接线，试着搭一个课本里学到的电路" }
          ],
          "done": "打开示例电路能看到电流动画和表头读数变化，就是在正常跑了"
        }
      ],
      "url": "https://github.com/sharpie7/circuitjs1"
    },
    {
      "emoji": "📚",
      "repo": "jackfrued/Python-100-Days",
      "deploy": ["read"],
      "title": "一套从变量讲到项目实战的Python教程",
      "body": "Python-100-Days 是一套中文 Python 教程，按「天」划分课程：从环境安装、变量、分支、循环开始，一路讲到文件处理、爬虫、数据分析和几个实战项目。每一天的内容是一份独立的 Markdown 笔记，点开仓库里的链接就能直接在网页上看，不用下载任何东西。这套教程已经迭代很多年，是中文自学圈里很常见的参考资料之一。",
      "explain": "不用特别解释什么术语，顺序刚好是从最基础的东西开始讲，跟着目录一步步点开看就行。",
      "opinion": "正好能接上现在学到的进度——第 3 天讲变量，第 5 天就是判断（if/else），顺序和现在学的内容差不多，可以对照着看有没有漏掉什么，或者换个讲法再理解一遍，不用从头全部重学，直接跳到对应章节就行。📱手机上：能看——都是 GitHub 上的网页链接，手机浏览器打开直接读，不用装任何东西。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "打开仓库主页：https://github.com/jackfrued/Python-100-Days" },
            { "text": "按目录点开对应「Day」的链接（比如 Day03 变量、Day05 分支结构），在网页上直接读" }
          ],
          "done": "打开某一天的链接能正常看到完整内容，就是能看了"
        }
      ],
      "url": "https://github.com/jackfrued/Python-100-Days"
    },
    {
      "emoji": "🤖",
      "repo": "HKUDS/CLI-Anything",
      "deploy": ["pc"],
      "title": "让Claude Code直接操作Blender、GIMP这类软件",
      "lang": "Python",
      "stars": "52,485",
      "today": "103",
      "body": "CLI-Anything 能给专业软件自动生成一套命令行接口，这样 Claude Code、Codex 这类 AI 编程工具就能直接敲命令操作它们，而不是只能看着你手动点界面。项目自带一个叫 CLI-Hub 的小商店，收录了社区已经做好的一批软件命令行接口，可以直接搜索、安装、启动，覆盖 Blender、GIMP、LibreOffice 等设计和办公软件。如果想要的软件还没人做，也可以让 AI 按一套固定步骤自动分析软件、生成对应的命令行接口。",
      "explain": "「CLI」就是命令行接口，以前要自己去学 Blender 的脚本写法才能让程序自动建模导出，现在是给 Blender 包一层「说明书」，AI 照着说明书敲命令就能操作，不用再手写脚本。",
      "opinion": "如果平时自己写 Blender 脚本做 3D 渲染，可以试试让 Claude Code 直接帮着调模型、导出文件，说不定能省掉手写脚本那一步；GIMP 那套如果装起来顺手，批量处理图片素材也能省不少手工点击。项目偏新，很多软件的接口可能还不成熟，先拿小任务试试效果，别指望一步到位。📱手机上：装不上——要先装 Blender、GIMP 这些桌面软件本身，Termux 没有图形界面扛不住，只能在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "确认装好 Python 3.10 及以上版本，以及想接入的软件本身（比如 Blender、GIMP）" },
            { "text": "装 CLI-Hub 管理器", "code": "pip install cli-anything-hub" },
            { "text": "看看 CLI-Hub 里已经有哪些软件的命令行接口", "code": "cli-hub list" },
            { "text": "装一个现成的接口，比如 GIMP", "code": "cli-hub install gimp" },
            { "text": "启动它试试", "code": "cli-hub launch gimp" }
          ],
          "done": "`cli-hub list` 能列出一堆软件，装好的那个能用 `cli-hub launch` 打开，就算用上了"
        }
      ],
      "url": "https://github.com/HKUDS/CLI-Anything"
    },
    {
      "emoji": "🛠",
      "repo": "nvm-sh/nvm",
      "deploy": ["phone", "pc"],
      "title": "一条命令管理多个Node.js版本",
      "lang": "Shell",
      "stars": "95,453",
      "today": "52",
      "body": "nvm 是个管理 Node.js 版本的小工具，装好之后能在手机 Termux 或电脑上同时留着好几个 Node 版本，随时切换，不用卸载重装。装一个新版本、切到某个版本、看看都装了哪些，都是一条命令的事。它本身是个纯 Shell 脚本，不挑系统，Linux、macOS、Windows 的 Git Bash/WSL 都能用。",
      "explain": "有些用 `npx` 跑的小工具会要求某个 Node 版本，版本不对可能装不上或者报错；留着好几个版本随时切换，遇到这种情况不用来回卸载重装，切一下版本就行。",
      "opinion": "平时 Node 用得好好的话用不上这个，不是非装不可；但哪天某个 AI 工具的 `npx` 命令突然报版本不对，装上它马上就能切个版本试试，省得专门卸载重装现在的 Node。装这一步本身花不了多少时间，也不影响现在用的版本。📱手机上：大概率能装——它是纯 Shell 脚本，Termux 本身就是 bash 环境，跑安装脚本应该没问题；如果装不上大概率是连不上 GitHub，命令前加代理试试。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux",
          "steps": [
            { "text": "跑官方安装脚本", "code": "https_proxy=http://127.0.0.1:7890 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash" },
            { "text": "关掉当前 Termux 会话重新打开，或者手动让配置生效", "code": "source ~/.bashrc" },
            { "text": "确认装好了", "code": "command -v nvm", "after": "输出 `nvm` 这个词就是装好了" },
            { "text": "装一个 Node 版本试试", "code": "nvm install 20" },
            { "text": "切换到这个版本", "code": "nvm use 20" }
          ],
          "done": "`nvm use 20` 之后跑 `node -v` 显示版本号变成 20.x，就是切换成功了"
        },
        {
          "title": "安装步骤 · 💻 电脑（需要 Git Bash 或 WSL，纯 PowerShell 装不了）",
          "steps": [
            { "text": "在 Git Bash 或 WSL 终端里跑官方安装脚本", "code": "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash", "after": "下载慢或失败就先开代理" },
            { "text": "关掉终端重新打开，或者手动让配置生效", "code": "source ~/.bashrc" },
            { "text": "装一个 Node 版本并切换过去", "code": "nvm install 20 && nvm use 20" }
          ],
          "done": "跑 `node -v` 显示版本号变成 20.x，就是切换成功了"
        }
      ],
      "url": "https://github.com/nvm-sh/nvm"
    },
    {
      "emoji": "🛠",
      "repo": "ntdevlabs/tiny11builder",
      "deploy": ["pc"],
      "title": "打包更精简的Windows 11系统镜像",
      "lang": "C#",
      "stars": "20,214",
      "today": "139",
      "body": "tiny11builder 是个 WinUI 工具，能基于官方 Windows 11 镜像，自动去掉预装应用、Copilot、部分系统组件，打包出一个更精简的安装镜像（ISO）。有普通版「Tiny11」（保留系统更新、Defender 和恢复功能）、更激进的「Core」版（连维护和恢复功能也去掉），也能自己手动挑要留要删的内容。",
      "explain": "「镜像（ISO）」就是一整套能用来装系统的文件包；这个工具是在正式安装之前先给这个安装包「减脂」，跟现在正在用的系统本身没关系，运行它这一步不会动你现在的电脑。",
      "opinion": "如果觉得电脑上 Windows 预装的东西太多、后台进程多、用着卡，这个工具能先打包一个干净点的安装镜像出来——但只有「打包镜像」这一步是安全的，真拿它重装系统会清空整个硬盘，用之前必须把资料备份好，官方自己也建议先在虚拟机里装一遍试试效果，别直接刷现在在用的电脑。选普通版 Tiny11 而不是 Core 版，至少还能保留系统更新和 Defender，安全一些。📱手机上：用不了——这是个 Windows 桌面程序，用来打包系统镜像，手机上没有对应场景。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑（Windows）",
          "intro": "下面只是打包出镜像文件，这一步本身不会动当前系统；真要拿镜像装机，记得先备份数据",
          "steps": [
            { "text": "打开 Releases 页面，下载对应电脑 CPU 的压缩包（x64 或 ARM64）并解压：https://github.com/ntdevlabs/tiny11builder/releases" },
            { "text": "右键用管理员身份运行解压出来的 `Tiny11Builder.exe`" },
            { "text": "在工具里选好一份官方 Windows 11 镜像文件（没有的话去微软官网下载）" },
            { "text": "构建模式选「Tiny11」（保留更新和 Defender，比较安全），点开始打包", "after": "想更激进地精简可以选 Custom 自己挑，但 Core 版连维护更新都没了，现阶段不建议选" },
            { "text": "等它跑完，生成 ISO 文件" },
            { "text": "（强烈建议）先把这个 ISO 装到虚拟机里试用一段时间，确认没问题再考虑要不要真的拿它重装电脑", "after": "真要重装会清空硬盘，务必先备份资料" }
          ],
          "done": "打包完能看到生成的 ISO 文件，就算工具用成功了；要不要拿它重装电脑，自己再三确认后再决定"
        }
      ],
      "url": "https://github.com/ntdevlabs/tiny11builder"
    }
  ]
};
