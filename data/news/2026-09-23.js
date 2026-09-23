DAILY_DATA["news/2026-09-23"] = {
  "date": "2026-09-23",
  "highlight": "今天信息面覆盖较广：联合国安理会今天首次就AI风险举行简报会，OpenAI、Anthropic与中国的DeepSeek、月之暗面均受邀出席；网络安全公司思科Talos披露了首例由多个大模型「投票」自主决策的恶意软件；xAI发布2.1万亿参数的Grok 4.7。另外，国内脑机接口公司华超神控获2亿元融资，谷歌旗下机器人公司Intrinsic开源核心平台，数学家还借助AI攻克了「逆伽罗瓦问题」中两万多个未解情形。",
  "items": [
    {
      "emoji": "⚖️",
      "title": "联合国安理会今日开会讨论AI失控风险",
      "body": "据路透社等9月22日报道，联合国安理会将于9月23日（周三）召开一场关于人工智能风险的简报会，正值联合国大会年度会议期间各国领导人齐聚纽约。OpenAI首席执行官Sam Altman计划出席并发言，据报道Anthropic也将派高级代表参加。中国的DeepSeek和月之暗面（Moonshot）受邀作发言，但DeepSeek创始人梁文锋预计不会亲自到场。会议聚焦AI失控风险，以及先进AI模型在网络行动、自主武器、信息战等领域对国际和平与安全可能带来的影响。截至发稿，会议内容和结论尚未公布。",
      "explain": "「安理会」是联合国负责国际和平与安全事务的最高决策机构，平时讨论的多是战争、制裁这类议题，这次专门就AI风险开简报会，说明AI已经被当作影响国家间安全的议题，而不只是科技公司自己的事。「简报会」不是正式立法或表决，更像是请各方专家和公司代表来介绍情况、供各国代表了解讨论，不会当场产生有约束力的决议。DeepSeek和月之暗面是国内两家有代表性的大模型公司，被拉进这种级别的国际场合发言，也比较少见。",
      "opinion": "这条对你现在用的API和工具不会有直接影响，更多是信号意义：AI风险讨论正从行业内部、学界呼吁走向联合国安理会这种最高级别的国际政治场合，说明各国政府确实在认真对待「AI失控」这类问题。但简报会本身没有强制约束力，会不会谈出什么实质性成果现在还不知道，不用对这次会议抱太高期待。",
      "sources": [
        { "name": "Quartz", "url": "https://qz.com/deepseek-openai-anthropic-un-security-council-ai-risks-092226" },
        { "name": "Business Standard", "url": "https://www.business-standard.com/amp/world-news/deepseek-openai-and-anthropic-to-brief-un-security-council-on-ai-this-week-126092201553_1.html" }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "研究者发现全自动AI投票决策的恶意软件",
      "body": "据Bleeping Computer、Help Net Security等9月22日报道，网络安全公司思科Talos发布了开源工具CAIRN用于检测「AI集成型恶意软件」，并借此发现了一个名为CLOSEDQUORUM的Windows恶意软件样本。据介绍，这是目前已知首例把战术层面的攻击决策完全交给多个商业大模型「投票」决定的恶意软件：它入侵电脑后会收集主机信息，同时向Google Gemini、DeepSeek、通义千问（Qwen）、Mistral最多四家模型提供商发起请求，让这些模型对下一步该执行哪个预设动作（比如窃取账号密码、加密货币钱包）进行投票，得票最多的动作会被自动执行，全程不需要攻击者手动下达指令。研究人员表示暂无证据显示该软件已在真实环境中大规模传播，但通过样本代码把开发者和2025年以来一些暗网论坛上的洗钱、盗刷相关帖子联系了起来。",
      "explain": "传统恶意软件的攻击动作通常是攻击者提前写死在代码里，或者由一台「指挥服务器」实时远程下达指令。这次的CLOSEDQUORUM不太一样：它把「接下来干什么」的决策权交给了几个AI大模型，让它们各自给意见再投票决定，相当于把作恶的「智能」外包给了公开的商业API，攻击者自己反而不用一直在线盯着操作。目前没证据说明它已经大规模作案，更像是一次技术验证性质的发现，但说明这个方向的技术门槛已经不算高。",
      "opinion": "这条和你实际调用API的工作有点关系，值得留意但不用恐慌：这个恶意软件用的是Gemini、DeepSeek、Qwen这类和你平时调用的同一批公开商业模型API，说明模型服务商目前很难从技术上区分「正常开发者调用」和「恶意软件在调用」。如果未来这类手法被更多滥用，模型厂商大概率会加强对异常调用模式的风控，这也可能间接影响到正常开发者的调用体验，比如更频繁的验证或限流。目前这更像一次安全研究预警，不是说这类软件已经在到处传播。",
      "sources": [
        { "name": "Bleeping Computer", "url": "https://www.bleepingcomputer.com/news/security/new-closedquorum-windows-malware-uses-ai-for-attack-decisions/" },
        { "name": "Help Net Security", "url": "https://www.helpnetsecurity.com/2026/09/22/cairn-open-source-framework-ai-malware-closedquorum/" }
      ]
    },
    {
      "emoji": "🚀",
      "title": "xAI发布Grok 4.7，参数量增至2.1万亿",
      "body": "9月21日，马斯克旗下xAI发布新一代模型Grok 4.7，主打编程、智能体任务和专业知识工作。据官方介绍，新模型参数量达2.1万亿，比上一代Grok 4.6的1.5万亿增加约40%，采用了更大的基础模型、更长的强化学习训练，并针对需要数小时才能完成的高难度任务加重了训练权重。定价维持在每百万输入token 2美元、输出6美元，和Grok 4.6一致，已经可以通过xAI API（模型名grok-4.7）以及Cursor等平台调用。据xAI公布的评测数据，Grok 4.7在长任务编程测试CursorBench 4.0上得分46.3%（Grok 4.6为40.4%），法律智能体测试Harvey Legal Agent Benchmark从15.8%升到19.6%；不过官方也承认，在多项编程和长任务测评上，Anthropic的Fable 5.1 Max仍然领先。",
      "explain": "「参数量」大致是模型的「脑容量」，2.1万亿参数说明这是目前公开的最大模型之一，但参数越大不代表所有任务都更强，还要看训练方法和数据质量。「智能体任务」是指模型不只是回答一个问题，而是要自己拆解步骤、调用工具、执行较长的一串操作，这类任务比单轮问答更能体现模型的实际可用性。这些评测分数都是xAI自己公布的，跟Fable 5.1 Max的对比结果也是引用官方数字，还没有大量独立第三方复测验证。",
      "opinion": "如果你平时用的是国内模型（豆包、DeepSeek等），Grok 4.7目前的定价（每百万token输入2美元、输出6美元）比多数国产模型贵不少，短期内不太会成为你的主力选择，但可以关注它在长任务、智能体编程上的表现作为参照。值得注意的是xAI自己也承认在不少长任务和编程评测上Fable 5.1 Max仍然领先，说明「参数量最大」不等于「能力最强」，选模型还是要看具体任务实测。",
      "sources": [
        { "name": "Decrypt", "url": "https://decrypt.co/378824/xai-launches-grok-4-7" },
        { "name": "Digital Applied", "url": "https://www.digitalapplied.com/blog/grok-4-7-benchmarks-price-what-changed" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "华超神控完成2亿元脑机接口Pre-A轮融资",
      "body": "据搜狐、投资界等9月22日报道，国内脑机接口创业公司华超神控（BCI-Sonics）完成2亿元人民币Pre-A轮融资，由红杉中国与云启资本联合领投，比邻星投资、元禾控股、徐汇科创投、德石投资跟投，老股东经纬创投、德联资本继续加注。公司2025年成立，总部位于上海，主攻「非侵入式」路线，核心技术包括超声神经调控、多模态读脑和AI神经解码。据介绍，公司旗下FUS-BCI系列已完成两代产品研发并取得安全性报告，闭环超声脑机系统计划2027年第一季度进入临床，面向消费者的产品已进入批量验证阶段。公司成立至今累计融资已近3亿元人民币。",
      "explain": "「脑机接口」是让大脑信号直接和电脑、机器沟通的技术，「非侵入式」是说不用开颅手术、不用往脑子里植入电极，而是通过头皮外部的设备（比如超声波）读取或调控大脑活动，安全性和普及门槛比植入式方案低很多，但目前精度通常也更有限。「AI神经解码」是说用AI模型分析采集到的脑部信号数据、翻译成具体指令或意图，这部分工作跟你熟悉的大模型不是同一类技术，但同样依赖AI算法。",
      "opinion": "这条离日常调用LLM API的工作比较远，更多是行业融资背景信息：说明「AI+脑机接口」这个交叉赛道在国内继续获得头部机构（红杉中国、云启资本）真金白银的加注，融资规模在早期创业公司里不算小。这类硬科技+AI的项目从产品到真正临床落地通常需要好几年，公告自己说2027年才计划进临床，现在下结论说它能不能成功还太早，保持关注即可。",
      "sources": [
        { "name": "搜狐", "url": "https://www.sohu.com/a/1079324960_329768" },
        { "name": "投资界", "url": "https://news.pedaily.cn/202609/569461.shtml" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "谷歌旗下Intrinsic开源机器人核心平台",
      "body": "据SiliconANGLE、The Robot Report等9月22日报道，Alphabet旗下机器人公司Intrinsic在加拿大多伦多举行的ROSCon 2026大会上，以Apache 2.0协议开源了旗下机器人平台的核心组件，命名为Intrinsic Core。该平台兼容机器人行业常用的开发框架ROS，提供跨硬件的实时控制、基于英伟达FoundationPose的物体位姿识别（不需要固定夹具就能找到零件）、运动规划、抓取规划，以及仿真、标定和ROS驱动等能力。Intrinsic同时发布了一套面向CNC机床上下料场景的参考方案，可在Universal Robots和FANUC品牌的机械臂上运行，主要面向美国和欧洲的中小型工厂。目前Intrinsic Core已经在Alphabet旗下GitHub上开放下载。",
      "explain": "「ROS」（机器人操作系统）是机器人行业最常用的一套开发框架，很多机器人公司和研究机构的软件都基于它搭建，类似机器人界的「安卓系统」。Intrinsic这次把自己平台里偏底层、偏通用的核心能力（比如让机械臂实时根据传感器反馈调整动作路径、识别没有固定摆放位置的零件）开源出来，相当于把原本可能只在Google内部或付费客户那里用的技术免费开放给全球开发者。「CNC机床上下料」是工厂里常见的场景：机械臂负责把零件放进数控机床、加工完再取出来，这类重复性体力劳动很适合用机器人自动化。",
      "opinion": "这条离你平时做的LLM应用工具比较远，更偏硬件和工业自动化方向，不用特别关注。但如果你对「具身智能」（能在物理世界干活的AI）感兴趣，可以留意这次开源释放的信号：大厂开始把机器人底层能力免费开放出来，可能会降低中小团队做机器人应用的门槛，类似当年开源大模型权重降低了做AI应用的门槛。",
      "sources": [
        { "name": "SiliconANGLE", "url": "https://siliconangle.com/2026/09/22/googles-robotics-unit-intrinsic-open-sources-its-foundational-infrastructure-for-intelligent-robots/" },
        { "name": "The Robot Report", "url": "https://www.therobotreport.com/intrinsic-open-sources-key-parts-platform-easier-development/" }
      ]
    },
    {
      "emoji": "🔬",
      "title": "数学家借助AI攻克逆伽罗瓦难题两万多情形",
      "body": "据Scientific American等9月22日报道，一组数学家和AI研究者联手，解决了「24次逆伽罗瓦问题」中此前尚未解决的两万多个情形（该问题共涉及2万5千个24次传递置换群，此前只有286个被证明成立）。这项工作起源于今年6月在加州理工学院举行的一次会议，美国数学研究所（AIM）在会上征集适合用AI来突破的数学问题，科罗拉多州立大学数学家Rachel Pries提出了这个悬而未决多年的问题；此后几个月内，研究者把人类的数学洞察力和AI在海量可能性中筛选搜索的能力结合起来，攻克了绝大部分剩余情形。",
      "explain": "「伽罗瓦问题」源自19世纪法国数学家伽罗瓦研究的一类对称性规律：一个方程的解，其排列组合方式对应着一种叫「群」的数学结构。「逆伽罗瓦问题」反过来问：给定任意一种对称性结构（群），能不能找到一个系数是分数（有理数）的方程，刚好具备这种对称性。这次的突破针对「24次」这一类具体情形（共2万5千种可能的对称结构），此前人类几十年只证明了286种能找到对应方程，这次借助AI大范围搜索候选方程，一下子把绝大部分剩余情形都验证了出来。",
      "opinion": "这条离你做LLM应用开发本身没有直接关系，更多是「AI能不能帮人类做基础科研」这个大问题上的一个具体例子：说明AI在数学这种需要海量搜索、验证候选方案的任务上，已经能实质性加速人类几十年没解决的难题，而不只是辅助算算术。如果你对AI在科研场景的应用感兴趣，可以关注这类「人类出思路、AI做大规模搜索验证」的协作模式，未来可能会在其他学科里复制。",
      "sources": [
        { "name": "Scientific American", "url": "https://www.scientificamerican.com/article/mathematicians-use-ai-to-find-mysterious-symmetries-solving-decades-old-problem/" },
        { "name": "Yahoo News", "url": "https://www.yahoo.com/news/science/articles/mathematicians-ai-mysterious-symmetries-solving-110000349.html" }
      ]
    }
  ]
};
