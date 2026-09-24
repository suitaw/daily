DAILY_DATA["news/2026-09-24"] = {
  "date": "2026-09-24",
  "highlight": "今天信息面较广：联合国安理会当天举行AI风险简报会，OpenAI的Altman、Anthropic的Amodei等罕见同台警告AI失控风险，特朗普则在同一天称国际AI监管呼声是「全球主义把戏」；国内阿里云栖大会公布Qwen4已投入训练（规划参数达5万亿到10万亿）并发布自研AI芯片真武V900；Anthropic的AI生物实验室交出首个成果——近千个Claude智能体自主分析基因组，发现一种功能未知的新酶系统；安全方面曝出一起冒充「Claude Max免费送」的钓鱼诈骗，用Claude的读者请留意；另外AI训练数据公司Snorkel AI获3.5亿美元融资，OpenAI也把ChatGPT广告业务扩展到了印度、欧洲等新地区。",
  "items": [
    {
      "emoji": "⚖️",
      "title": "联合国安理会开会，OpenAI等公司警告AI失控风险",
      "body": "据CNN、Fortune等9月23日报道，联合国安理会当天在纽约举行人工智能高级简报会，由法国牵头召集，正值联合国大会第81届会议高级别周期间。受邀发言的包括图灵奖得主Yoshua Bengio、OpenAI首席执行官Sam Altman、Anthropic首席执行官Dario Amodei和Hugging Face首席执行官Clément Delangue。Amodei表示「如果管理不善，AI可能对全人类构成风险」，并提出三点国际合作设想：禁止用AI研发生物武器等窄口径协议、各国互相核查AI安全承诺的评估机制，以及AI安全事故的全球通报标准。Altman则呼吁由「对本国人民负责的民主机构和政府」来做决策，被媒体解读为暗指排除中国等国家。同一天，美国总统特朗普把联合国层面推动AI监管的呼声称为「全球主义把戏」（globalist scheme）。",
      "explain": "「安理会」是联合国负责国际和平与安全的最高决策机构，平时讨论的多是战争、制裁这类议题，这次专门就AI风险开简报会，说明AI已经被当作影响国家安全的议题在讨论，不只是行业内部的事。「简报会」不是正式立法或表决，更像是请专家和公司代表来介绍情况供各国了解，本身不会产生有约束力的决议。这次两家头部AI公司的CEO同台在安理会发言比较罕见，但会上提到的国际合作设想目前都还只是想法，没有具体条约或执行机制。",
      "opinion": "这条对你现在用的API不会有直接影响，更多是信号意义：AI风险讨论正式摆上了联合国最高安全议事平台，说明政府层面确实在认真考虑「AI失控」这类问题。但值得打个问号的是，Altman和Amodei一边在联合国呼吁国际监管，特朗普政府却在同一天公开唱反调，说明美国国内对「要不要管、谁来管」还远没有共识，这类国际呼吁短期内不太可能变成真正管用的规则。",
      "sources": [
        { "name": "CNN", "url": "https://edition.cnn.com/2026/09/23/tech/altman-amodei-ai-safety-un-security-council" },
        { "name": "Fortune", "url": "https://fortune.com/2026/09/23/trump-un-ai-globalist-scheme-altman-amodei-security-council/" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "阿里云栖大会：Qwen4投入训练，新一代AI芯片发布",
      "body": "9月22日至23日，阿里巴巴在杭州举行2026云栖大会，公布下一代大模型Qwen4已正式投入训练，采用全新架构，规划后续Qwen4.5、Qwen5系列参数规模将扩展到5万亿至10万亿，阿里方面把「Scaling（规模扩张）」称为通向通用人工智能的关键路径之一。同时，阿里旗下芯片团队平头哥发布新一代AI芯片真武V900，据官方介绍性能达到上一代真武M890的3倍，用于满足万亿参数级大模型的训练和推理需求，计划2027年第一季度量产。大会上阿里还提到「递归式自我改进（RSI）」技术已初步进入模型训练、推理和芯片-模型协同的探索阶段。",
      "explain": "「参数规模」大致是模型的「脑容量」，5万亿到10万亿是目前公开计划里数一数二大的规模，但参数越大不代表能力一定越强，还要看训练数据和方法。「自研AI芯片」是指阿里不完全依赖英伟达等外部厂商的芯片，自己设计训练和跑模型用的专用芯片，这样在算力被卡脖子（比如出口管制）时能多一层保障，但从发布到真正量产、稳定好用往往还要一两年，真武V900要到2027年一季度才量产。「递归式自我改进」是让AI参与改进下一代模型自己的训练过程，阿里说的还只是「初步进入探索阶段」，不是已经成熟的技术。",
      "opinion": "如果你平时主要调用国内模型API（比如通义千问），这条值得关注：Qwen系列如果按计划推进到万亿级参数，未来国内头部模型的能力上限可能会有明显跃升。但「规划参数规模」离「实际发布可用的模型」还有距离，具体能力得等Qwen4真正发布后再实测，现在这些还都是训练中的计划，自研芯片量产时间也定在2027年，短期内不会立刻改变你能用到的国产算力基础设施。",
      "sources": [
        { "name": "新浪财经", "url": "https://finance.sina.com.cn/roll/2026-09-22/doc-inissiti8906017.shtml" },
        { "name": "搜狐", "url": "https://www.sohu.com/a/1079597805_121948416" }
      ]
    },
    {
      "emoji": "🔬",
      "title": "Anthropic AI生物实验室称Claude发现新酶系统",
      "body": "据Anthropic官方博客及The Next Web等9月23日至24日报道，Anthropic今年春天新成立的AI生物实验室公布了成立以来的首个研究成果：团队让约950个Claude智能体自主运行21小时，处理约2.1亿个token规模的基因组数据，对超过20万个逆转录酶进行筛查，标记出约3500个候选系统进一步分析，最终锁定了一种此前未被描述过的酶系统，团队将其命名为ART（array-associated reverse transcriptase，阵列关联逆转录酶）。ART由酶本身、旁边的一个搭档基因，以及一段与CRISPR阵列相似的规律重复DNA序列组成，存在于噬菌体（专门感染细菌的病毒）的DNA中。Anthropic位于湾区的湿实验室（只处理生物安全1、2级、不涉及感染人类的病原体）随后用真实实验验证了Claude的计算发现，但目前还不清楚这套酶系统具体的生物学功能。这项成果以博客文章和未经同行评议的预印本形式于9月23日发布。",
      "explain": "「逆转录酶」是一类能把RNA信息反向转录成DNA的酶，HIV病毒等就靠它复制自己，是分子生物学里的常见研究对象。「CRISPR」是近年最出名的基因编辑技术之一，靠细菌里天然存在的一段「规律间隔重复序列」加上配套的酶实现精准剪切基因；这次发现的ART系统旁边有类似的重复序列结构，所以被拿来跟CRISPR类比，但具体是不是也能用来编辑基因，目前还不知道。「未经同行评议的预印本」意味着这项发现还没有经过其他独立科学家审核确认，结果还需要时间验证。",
      "opinion": "这条离日常用LLM API做工具比较远，但代表了一个新方向：AI公司不再只把模型当成聊天或写代码的工具，而是让大量AI智能体自主处理海量科学数据、去发现人类还没注意到的模式。「950个智能体跑21小时处理2亿多token」这类数字是Anthropic自己公布的，这个酶系统到底有什么用还要等同行评议和后续研究，现在说这是重大科学突破还太早，更准确的说法是「一个有意思的线索」。",
      "sources": [
        { "name": "Anthropic", "url": "https://www.anthropic.com/news/claude-discovers-novel-enzyme-system" },
        { "name": "The Next Web", "url": "https://thenextweb.com/news/anthropic-claude-enzyme-system-crispr-like-repeats" }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "冒充「Claude Max免费送」的钓鱼诈骗被曝光",
      "body": "据Help Net Security、Malwarebytes等9月23日报道，安全研究人员发现一起冒充Anthropic官方的钓鱼诈骗活动，页面宣称Anthropic为庆祝用户突破1亿而免费赠送1万份「Claude Max x20」订阅（该订阅原价每月200美元），并盗用了Anthropic的真实品牌视觉、伪造五星好评，页脚链接也指向Anthropic真实官网页面，做得相当逼真。用户点击领取后，页面会在当前浏览器标签页内画出一个假的Google登录弹窗，弹窗里甚至有正确拼写的Google网址和一个能拖动的锁图标，实际上并不是真的跳转到Google官网，而是诱导用户直接把Google账号密码填进钓鱼页面。研究人员提醒，由于不少用户用Google账号登录Claude等AI工具，一旦Google账号密码泄露，攻击者不仅能拿到邮箱、网盘，还可能连带拿到关联的AI账号访问权限。",
      "explain": "这种手法叫「浏览器内嵌浏览器」钓鱼：正常的Google登录会跳出一个独立的新窗口或新标签页，而这次的假窗口其实只是用网页画出来的一张「假窗口图片」，做得和真窗口几乎一模一样（包括网址栏和锁图标），普通人很难靠肉眼分辨真假，核心区别在于它不是浏览器真正打开的独立窗口。「Google单点登录」是说很多网站（包括Claude）允许你直接用Google账号一键登录，不用单独设密码，这次诈骗盯上的正是这个机制——骗到Google密码，就等于连带拿到了绑定它的其他账号。",
      "opinion": "这条对你很实际：看到任何声称「Claude Max免费送」「Anthropic庆祝周年抽奖」之类的邮件或链接，不管页面做得多像官网都不要点进去输入Google密码，Anthropic官方的促销信息只会通过其官网和登录后的产品内提示发出，不会靠邮件抽奖白送最贵的订阅套餐。如果你平时习惯直接用Google账号登录各种AI工具，也可以考虑给Google账号开启两步验证，即使密码泄露也能多一层保护。",
      "sources": [
        { "name": "Help Net Security", "url": "https://www.helpnetsecurity.com/2026/09/23/fake-claude-max-giveaway-phishing/" },
        { "name": "Malwarebytes", "url": "https://www.malwarebytes.com/blog/threat-intel/2026/09/fake-claude-max-giveaway-hides-a-google-account-phishing-trap" }
      ]
    },
    {
      "emoji": "💰",
      "title": "AI训练数据公司Snorkel AI获3.5亿美元融资",
      "body": "据SiliconANGLE、Unite.AI等9月22日报道，AI训练数据公司Snorkel AI完成3.5亿美元E轮融资，由Insight Partners和S32领投，Third Point、Lightspeed、Greylock、GV等参投，公司估值升至35亿美元，较此前一轮（2025年5月，13亿美元估值）大幅上涨。据官方介绍，公司近一年前推出的「数据即服务」业务增长超过18倍，年化收入规模已突破3.75亿美元，客户包括多家前沿大模型实验室、云计算厂商、企业及美国政府机构，主要为法律、医疗等复杂垂直领域构建定制化训练数据集。",
      "explain": "「训练数据」是喂给大模型学习用的原始材料，模型能力很大程度上取决于训练数据的质量和覆盖面，尤其是法律、医疗这类专业领域，通用网络文本往往不够用，需要专门整理、标注过的数据集。Snorkel这类公司做的就是帮大模型实验室和企业「造」这种高质量专业数据，本身不训练通用大模型，属于AI产业链里的「卖水人」角色。「年化收入规模」是把当前收款节奏乘以12估算出来的年收入，不是审计过的正式财报数字。",
      "opinion": "这条离你自己调用现成API做工具比较远，但反映了一个行业趋势：随着通用大模型能力见顶，「用什么数据训练/微调」正变得和「用什么模型」一样重要，专业垂直数据的价值在被重新定价。如果你以后打算自己微调开源模型做垂类工具，可以留意这类专门做数据服务公司的产品思路（针对具体领域整理高质量数据集），但3.5亿美元融资和35亿估值本身不代表这些数据的实际效果，具体好不好用得看你自己的场景。",
      "sources": [
        { "name": "SiliconANGLE", "url": "https://siliconangle.com/2026/09/22/training-data-provider-snorkel-ai-raises-350m-at-3-5b-valuation/" },
        { "name": "Unite.AI", "url": "https://www.unite.ai/snorkel-ai-raises-350m-series-e-at-3-5b-valuation-to-build-the-frontier-lab-for-ai-data/" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "ChatGPT广告业务扩展至印度、欧洲等地区",
      "body": "据OpenAI官方博客及Digital Applied等9月23日报道，OpenAI宣布ChatGPT Ads（对话内广告）自9月23日起进一步扩展至印度、欧洲、中东和北非地区，广告主可通过Ads Manager直接购买投放。此前ChatGPT Ads已于8月11日在英国、墨西哥、巴西、日本、韩国等市场上线。据OpenAI介绍，这项业务上线不到200天，年化收入规模已达到10亿美元。此次扩张正值ChatGPT在9月中旬全面切换到新一代GPT-6（Astra引擎）之后，OpenAI近期还在向ChatGPT语音功能中加入Astra、Sol、Luna等新引擎选项，并允许语音模式调用邮件、日历等插件。",
      "explain": "「对话内广告」是指广告会直接出现在你和ChatGPT聊天的过程里，而不是单独的横幅广告，具体怎么呈现、会不会打扰使用体验，目前公开资料还没有细说。「年化收入规模」是把当前收入节奏乘以12估算出来的年收入，不是正式审计财报数字，「不到200天做到10亿美元年化收入」是OpenAI自己公布的数字，含金量需要打个问号，因为这类新业务早期增长快，后续能不能维持还不确定。",
      "opinion": "如果你自己在国际市场做面向C端用户的产品或投放广告，可以关注ChatGPT广告开放地区的更新——多了一个新的投放渠道；但如果你主要是调用OpenAI的API做开发，这次扩张针对的是ChatGPT消费者端产品的商业化，跟API的定价、限流、稳定性没有直接关系。倒是可以留意一点：一款你天天在用的AI聊天工具开始大规模商业化广告，以后回答里会不会夹带广告推荐的成分，值得多留个心眼。",
      "sources": [
        { "name": "OpenAI", "url": "https://openai.com/index/chatgpt-ads-expands-across-europe/" },
        { "name": "Digital Applied", "url": "https://www.digitalapplied.com/blog/where-chatgpt-ads-are-sold-every-market-and-date" }
      ]
    }
  ]
};
