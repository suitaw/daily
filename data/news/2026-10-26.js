DAILY_DATA["news/2026-10-26"] = {
  "date": "2026-10-26",
  "highlight": "今天搜索更费劲：中英文换了十几种关键词反复搜（模型发布、智能体产品、融资商业、政策监管、安全研究、国内动态都搜了几轮），但真正发生在过去24~48小时内、站得住脚的新进展几乎没查到——搜到的大多是上周甚至更早的事被聚合网站标错日期，或者是2025年的旧闻。这期退而求其次，选了3条经核实、过去几天里发生、站内还没写过、对做AI应用的你有实际参考价值的进展：Anthropic把智能体技能标准捐给中立基金会、OpenAI的模型登陆谷歌云、以及大厂三季度财报里AI投入还在加码的信号。",
  "items": [
    {
      "emoji": "🤖",
      "title": "Anthropic把Agent Skills捐给新基金会",
      "body": "据Anthropic官网新闻页10月22日发布的公告，公司把「Agent Skills」这套开放标准（包括名称、Logo、GitHub组织和agentskills.io域名）捐给了「Agentic AI Foundation」（AAIF，隶属于Linux基金会）。AAIF由Anthropic联合Block、OpenAI于2025年共同发起，此前已经接受过Anthropic捐赠的「模型上下文协议」（MCP）。Agent Skills去年10月随Claude Code一起推出，今年12月被发布为开放标准，官方数据显示目前已有超过70个智能体平台接入，包括ChatGPT、Cursor、GitHub Copilot和VS Code，累计发布的「技能包」超过100万个、安装量接近2.8亿次。Anthropic表示，这么做是为了让这套标准保持「开放、社区驱动、不绑定单一厂商」。",
      "explain": "「Agent Skills」可以理解成给AI智能体准备的「技能说明书文件夹」——里面打包了完成某类具体任务所需的步骤说明、脚本和参考资料，智能体用到的时候才去读，不用的时候不占地方，这样既能让它学会做财务报表、写合同这类有固定流程的活，又不会把每次对话都塞满无关指令。「捐给基金会」类似把一项技术的所有权和品牌，从一家公司手里转交给一个多方共管的非营利组织，往后不管哪家公司（哪怕是竞争对手OpenAI、Google）都能平等参与制定规则，不用担心规则被Anthropic一家说了算。",
      "opinion": "如果你平时在给自己的工具接入Claude、ChatGPT这类支持Agent Skills的智能体，这个标准以后大概率会更稳定、长期维护更有保障——毕竟连Anthropic的竞争对手OpenAI都是基金会的共同发起方，不太可能说改就改。这也说明「智能体标准化」正在从各家各自为战，走向行业共用一套底层规则，有点像当年USB、HTTP接口标准化的路径。不过「安装近2.8亿次」这类数字是Anthropic自己公布的，具体统计口径没细说，当个大致数量级参考就好。",
      "sources": [
        { "name": "Anthropic", "url": "https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "OpenAI模型登陆Google Cloud平台",
      "body": "据OpenAI官网和Techzine等媒体10月21日报道，OpenAI和Google Cloud宣布合作，把OpenAI的旗舰模型和Codex智能体编程工具接入Google Cloud统一管理各家模型的目录平台「Model Garden」。目前只对部分受邀的企业客户开放私测，涉及GPT-6 Astra、GPT-6.1 Sol、GPT-6 Luna几个型号，官方说几周内会扩大开放范围，具体日期没公布。企业客户可以直接通过Google Cloud Marketplace采购这些模型，并用已经签的Google Cloud云资源合同额度支付，不用单独另付费。这意味着OpenAI的模型现在同时在亚马逊AWS、微软Azure、谷歌云三大云厂商的平台上都能买到。",
      "explain": "以前企业想用OpenAI的模型，基本只能直接找OpenAI，或者通过关系最深的微软Azure。现在谷歌云也能直接卖OpenAI的模型了，对企业来说相当于多了一个采购入口——已经把预算放在谷歌云里的公司，不用再单独走一遍采购流程，就能顺手用上GPT系列模型。这更多是「渠道」上的合作，不代表OpenAI和谷歌在模型技术上穿一条裤子，两家在研发上仍然是直接竞争对手。",
      "opinion": "这件事跟你自己写小工具直接调API关系不大——该用OpenAI还是Google的接口不会因此改变。但它说明一个趋势：大模型厂商正在把自己的模型铺到尽可能多的云平台上卖，而不是绑死一家云厂商，这对企业客户是好事（议价空间更大），对普通开发者主要是间接影响——以后企业版定价、合规选项可能会因为多云竞争变得更灵活。具体哪天面向所有人开放、定价有没有变化，官方都还没细说，值得继续留意。",
      "sources": [
        { "name": "OpenAI", "url": "https://openai.com/index/openai-models-google-cloud" },
        { "name": "Techzine", "url": "https://www.techzine.eu/news/applications/145174/openais-models-are-finally-fully-supported-on-google-cloud/" }
      ]
    },
    {
      "emoji": "💰",
      "title": "Meta三季度资本开支上调但盈利不及预期",
      "body": "据Newsquawk、ZeroHedge等财经媒体10月21日报道的财报数据，Meta公布2026年第三季度营收646亿美元，超出分析师预期的633亿美元，同比增长约26%；但每股收益3.83美元，大幅低于市场预期的6.67美元，据报道主要和公司确认的一笔24亿美元法律诉讼费用有关。与此同时，Meta把2026年全年资本开支（主要花在建数据中心、买AI芯片上）指引下限从1300亿美元上调到1350亿美元，新区间为1350亿至1450亿美元，管理层表示对2027年的投入还会继续加码，但具体数字留到以后再给。",
      "explain": "「资本开支」（capex）指花在建厂房、买设备这类长期资产上的钱，跟发工资、交电费这种日常开销是两码事——Meta现在每个季度要往AI数据中心和芯片上砸几百亿美元，这笔钱短期内变不成利润，是在为未来的AI业务提前囤算力。这次每股收益远低于预期，很大一部分是被一笔一次性的法律费用拖累，不代表公司的AI广告、核心业务突然变差了，看财报不能只盯这一个数字。",
      "opinion": "Meta这次「业绩被一次性费用拖累、同时还在加码AI资本开支」释放的信号是：大厂对AI基础设施的投入并没有因为短期财务压力放缓，微软和谷歌预计10月28、29日公布财报时大概率也会给出类似的高资本开支指引。这跟你做AI应用开发没有直接关系，但如果你关心未来算力会不会更便宜、API价格走势，这类持续加码的资本开支，某种程度上是供给端在追赶需求的信号，中长期看对降价是利好，短期可能因为芯片、电力这些硬件瓶颈见效较慢。具体数字不同媒体口径略有差异，这里采用的是相互印证较多的说法，不是官方新闻稿原文。",
      "sources": [
        { "name": "Newsquawk", "url": "https://www.newsquawk.com/headlines/meta-platforms-inc-meta-q3-2026-usd-eps-383-exp-667-revenue-646bln-exp-6331bln" },
        { "name": "ZeroHedge", "url": "https://www.zerohedge.com/markets/meta-jumps-after-q3-earnings-beat-boosts-guidance" }
      ]
    }
  ]
};
