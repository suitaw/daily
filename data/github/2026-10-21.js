DAILY_DATA["github/2026-10-21"] = {
  "date": "2026-10-21",
  "highlight": "今日看点：给 AI 编程助手装的「少写代码」纪律插件 ponytail 最值得先试——零配置，手机电脑都能装，能明显减少 AI 写代码时乱加功能、该补的校验反而漏掉的问题。",
  "items": [
    {
      "emoji": "🤖",
      "repo": "DietrichGebert/ponytail",
      "deploy": ["phone", "pc"],
      "title": "给 AI 编程助手装的「少写代码」纪律插件",
      "stars": "169,651",
      "today": "1,208",
      "body": "给 Claude Code、Codex 这类 AI 编程助手装的一套行为规则：装上后它写代码前会先按顺序检查——这功能到底要不要新写、项目里是不是已经有现成的、标准库顶不顶得上、装的依赖包里有没有，实在不行才动手写，只写刚好够用的部分，不会多写。涉及权限校验、数据丢失、安全这些关键环节不会被这套「少写」原则省掉，涉及钱、分支逻辑的地方还会自动补一个小测试。还带 `/ponytail-review`（审查改动）、`/ponytail-audit`（审查整个项目）这类审查命令，官方说实测能把生成代码量砍掉一半左右。支持 20 多种 AI 编程助手，不只认 Claude Code。",
      "explain": "插件就是给 AI 编程助手额外装的一套规则，不改动 AI 本身，装卸都很轻；下文说的 `/ponytail-review` 这类斜杠命令，是在和 AI 对话的框里直接打字触发的，不是电脑终端命令。",
      "opinion": "AI 写代码经常图省事堆一堆用不上的东西，该补的校验反而被跳过，这个插件相当于给 AI 定了套写代码的规矩，能减少这两种毛病，装卸都不影响原来的用法，值得先装上跑几天看效果。想看 AI 这次改动有没有偷工减料，跑一下 `/ponytail-review` 就有审查结果。📱 手机上：装得上，整个插件就是一套给 AI 读的文字规则，不需要编译任何东西，跟在 Claude Code 里装别的插件操作一样。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "直接在 Claude Code 对话框里装，手机和电脑操作一样。",
          "steps": [
            { "text": "在 Claude Code 对话里加插件市场：", "code": "/plugin marketplace add DietrichGebert/ponytail" },
            { "text": "装插件：", "code": "/plugin install ponytail@ponytail", "after": "装完默认就是开启状态，不用额外配置。" },
            { "text": "想调严格程度，直接在对话里打字（不是终端命令）：", "code": "/ponytail full" }
          ],
          "done": "跑一下 `/ponytail-help`，能看到命令列表说明，就是装成功了。"
        }
      ],
      "url": "https://github.com/DietrichGebert/ponytail"
    },
    {
      "emoji": "🤖",
      "repo": "Graphify-Labs/graphify",
      "deploy": ["pc"],
      "title": "把整个代码仓库画成知识图，让 AI 秒懂项目结构",
      "stars": "130,237",
      "today": "802",
      "body": "给 Claude Code 等 AI 编程助手装的技能，能把一个代码仓库（连带文档、PDF、数据库表结构）解析成一张可以查询的知识图，而不是常见的切成小块塞进向量库那种模糊搜索。代码部分完全在本地解析，不用联网、不用调用任何 AI 模型；如果还想把文档、PDF 也接进图里做语义理解，需要配一个 AI 模型，可以直接用 Claude Code 自己登录的账号，不一定要单独申 API key。",
      "explain": "知识图是把项目里「这个文件调用了那个函数」「这份文档说明了哪个表结构」这类关系画成一张网，AI 查的时候能沿着关系找，比把文字切块按相似度模糊搜索（也就是常说的向量库/RAG）更准；向量库是现在很多 AI 工具默认用的切块检索方案，知识图是另一条路。",
      "opinion": "手上项目一多、文件一多，AI 接手一个新任务时经常要先东翻西找才搞懂项目结构，这个工具能让 AI 一次性把整个仓库的结构摸清楚，之后查起来更准，尤其是项目里文档、配置文件多的时候更有用；本来就是单文件的小项目用不上这么重的工具，挑那些文件多、结构复杂的项目装比较值。📱 手机上：不保证，它依赖的几个 Python 包（图计算、代码解析用的库）大概率需要编译，Termux 里可能跟不少原生扩展包一样装不上，建议先在电脑上试。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑",
          "steps": [
            { "text": "装 Python 包（自带 graphify 命令）：", "code": "pip install graphifyy", "after": "包名是 graphifyy，末尾两个 y，别少打一个；如果提示 externally-managed-environment 错误，换成 `pipx install graphifyy`。" },
            { "text": "注册到你用的 AI 编程助手（自动识别是 Claude Code 还是别的）：", "code": "graphify install" },
            { "text": "先 cd 到想分析的项目目录，进 Claude Code 后在对话框里跑：", "code": "/graphify ." }
          ],
          "done": "跑完能在对话里看到它列出项目的文件/模块关系，之后问 AI 项目问题时能用上这些关系，就是装成功了。"
        }
      ],
      "url": "https://github.com/Graphify-Labs/graphify"
    },
    {
      "emoji": "🛠",
      "repo": "wshobson/agents",
      "deploy": ["phone", "pc"],
      "title": "一站式插件市场，一条命令给 AI 编程助手加能力",
      "stars": "41,251",
      "today": "93",
      "body": "一个汇总好的插件市场，收了上百个给 Claude Code、Codex、Cursor 这类 AI 编程助手用的插件、技能和命令，按技术方向分类，比如 Python 开发、代码审查、测试、安全检查。装的时候不用一个个找仓库，先加这个市场，再按名字装某一类插件就行。",
      "explain": "插件市场相当于一个目录，把很多人写的插件集中收在一个仓库里，装的时候不用自己满世界找、一个个确认靠不靠谱；里面的技能、命令都是给 AI 用的现成本子，装上后 AI 按这些本子里写的方法做事，不用你自己从头描述一遍要怎么做。",
      "opinion": "正在学 Python 的话，里面的 python-development 插件把 Python 项目常见的开发、测试套路打包好了，装上以后 AI 帮你写 Python 代码会顺着这些套路走，比每次都从零解释省事；插件种类多，一次全装容易乱，按需装一两个够用的就行，不用贪多。📱 手机上：装得上，走的还是 Claude Code 自带的插件安装流程，跟装别的 Claude Code 插件一样，不需要额外编译什么。",
      "install": [
        {
          "title": "安装步骤 · 📱 手机 Termux / 💻 电脑（命令一样）",
          "intro": "直接在 Claude Code 对话框里装。",
          "steps": [
            { "text": "加插件市场：", "code": "/plugin marketplace add wshobson/agents" },
            { "text": "装 Python 开发相关的插件（也可以换成别的分类名）：", "code": "/plugin install python-development@claude-code-workflows" }
          ],
          "done": "装完问 AI 一个 Python 相关的问题，能感觉到它按更规范的套路回答（比如主动提测试、提代码风格），就是用上了。"
        }
      ],
      "url": "https://github.com/wshobson/agents"
    },
    {
      "emoji": "📚",
      "repo": "immersive-translate/immersive-translate",
      "deploy": ["pc"],
      "title": "网页双语对照翻译，英文资料不用来回切换",
      "stars": "19,386",
      "today": "18",
      "body": "浏览器扩展，装上后打开任何英文网页，原文下面自动加一行中文翻译，保持双语对照，不用整页切换成翻译版；除了普通网页，还能翻 PDF、字幕文件、在线视频的字幕。基础翻译引擎免费能用，想换更准的翻译引擎可以在设置里接自己的 API key，不接也能正常用。",
      "explain": "双语对照跟手动开两个窗口、一边原文一边翻译的做法效果类似，这个扩展是自动把译文垫在原文下面，不用来回切换标签页。",
      "opinion": "看英文技术文章、文档时，遇到看不懂的长句不用复制去搜，直接看原文下面的中文对照就行，比开两个窗口来回切省事；它是整段翻译辅助理解，用来精读记生词不如专门做查词记忆的工具顺手，平时泛读英文材料用这个比较合适。📱 手机上：装不了，这是电脑浏览器扩展，官方做过的安卓版浏览器已经停更，目前没有确认能稳定用的手机装法，先在电脑上用。",
      "install": [
        {
          "title": "安装步骤 · 💻 电脑 Chrome/Edge/Firefox",
          "steps": [
            { "text": "Chrome 用户，打开商店装：[Immersive Translate - Chrome 网上应用店](https://chromewebstore.google.com/detail/immersive-translate-trans/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)" },
            { "text": "Firefox 用户，打开[Mozilla 扩展商店](https://addons.mozilla.org/firefox/addon/immersive-translate/)装。" },
            { "text": "Edge 用户，在 Edge 自带的扩展商店里搜「Immersive Translate」装，或打开官方安装说明页找 Edge 商店链接：[安装说明](https://immersivetranslate.com/docs/installation/)", "after": "商店打不开就先开代理。" }
          ],
          "done": "装完打开一个英文网页，刷新一下能看到原文下面多一行中文翻译，就是装成功了。"
        }
      ],
      "url": "https://github.com/immersive-translate/immersive-translate"
    },
    {
      "emoji": "📚",
      "repo": "ryanhanwu/How-To-Ask-Questions-The-Smart-Way",
      "deploy": ["read"],
      "title": "怎么把问题问清楚，让别人（和 AI）愿意好好答",
      "stars": "35,934",
      "today": "10",
      "body": "一篇经典技术写作的中文翻译，原作者是开源圈很有名的程序员 Eric Raymond，讲的是提技术问题该怎么把背景、已经试过什么、报错信息说清楚，别人才愿意花时间帮你。写的年代早，举的例子是论坛和邮件列表，但怎么把一个问题讲清楚这套方法到现在都适用。",
      "explain": "文章里说的贴报错原文、说明环境这些习惯，放到现在问 AI 问题一样好用——描述问题越具体（做了什么、报了什么错、试过什么没用），AI 给出的答案通常也越准，道理是一样的。",
      "opinion": "自学路上经常要去论坛、群里问人，也经常要让 AI 帮着改代码、查错，这篇讲的怎么把问题问清楚的思路两边都用得上，看完能少走不少来回追问细节的弯路；内容是老文章，但道理没过时，花十几分钟看完就够，不用当成系统教程啃。📱 手机上：能看，纯文字网页，手机浏览器直接打开就行。",
      "install": [
        {
          "title": "怎么看（不用安装）",
          "steps": [
            { "text": "直接打开仓库看中文版：[README-zh_CN.md](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)" }
          ],
          "done": "打开能看到完整中文正文，就算看成了。"
        }
      ],
      "url": "https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"
    }
  ]
};
