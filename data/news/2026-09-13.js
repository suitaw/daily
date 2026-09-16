DAILY_DATA["news/2026-09-13"] = {
  "date": "2026-09-13",
  "highlight": "一伙黑客用数百个基于 Codex 和 DeepSeek 的 AI agent，在不到4小时内就攻破了近400家机构的打印服务器，是目前公开报道里AI辅助网络攻击规模最大、速度最快的一次，值得每个把AI agent当工具用的开发者提高警惕。",
  "items": [
    {
      "emoji": "🛡️",
      "title": "黑客用数百个AI agent，4小时内攻破395家机构",
      "body": "安全公司GreyNoise披露，一名疑似俄语背景的黑客用基于OpenAI Codex和一个DeepSeek模型搭建的数百个AI agent，自动化开发并发起攻击，专打打印管理软件PaperCut NG/MF的两个漏洞（CVE-2026-81578、CVE-2026-82078）。攻击者从零搭建环境到真正攻破第一个目标只用了不到4小时，全面攻击铺开后26秒内就攻陷了11家机构，累计影响48个国家395家机构的440多台服务器，教育行业受害最集中（204起）。",
      "explain": "PaperCut是很多学校、企业用来管理打印任务和收费的软件；CVE是安全漏洞的编号，相当于给每个漏洞发一张身份证；这次用到的漏洞可以让人绕过登录验证、随意执行代码（RCE），等于直接拿到别人电脑的控制权。以前找漏洞、写攻击代码是需要经验的技术活，现在攻击者把这些活儿交给了AI agent——就像你用Claude Code或Codex帮你写代码调试一样，只不过他们让AI去写攻击代码、扫描目标、发起入侵，整个流程被大幅提速和自动化了。",
      "opinion": "这条新闻的重点不是PaperCut这个具体漏洞，而是攻击的“生产方式”变了——AI agent把原来要一个团队干几天的活压缩到几小时，而且是“批量复制”式的攻击。如果你做的工具里接入了能联网、能执行代码或调用系统命令的agent能力，现在就该假设有人会用同样的思路对付你：漏洞公开后第一时间打补丁，别把管理后台暴露在公网，API密钥和权限按最小够用原则给。这不是“以后要注意”，是现在就该做的事。",
      "sources": [
        {
          "name": "The Register",
          "url": "https://www.theregister.com/security/2026/09/10/hundreds-of-ai-agents-helped-papercut-attacker-hit-395-orgs-and-some-went-off-script/5295650"
        },
        {
          "name": "GreyNoise",
          "url": "https://www.greynoise.io/blog/ai-orchestrated-campaign-against-papercut-ng-mf"
        }
      ]
    },
    {
      "emoji": "🚀",
      "title": "DeepSeek发布V4.1 Flash，模型更大价格更低",
      "body": "DeepSeek于9月10日发布V4.1 Flash，据报道参数规模从上一代V4 Flash的约2840亿升至约5520亿，几乎翻倍，但输入价格降到0.15美元/百万token（缓存命中低至0.003美元）、输出0.60美元/百万token（高峰时段翻倍），比上一代任何一项价格都便宜，同时支持100万token的上下文。",
      "explain": "“参数规模”大致可以理解成模型的“脑容量”，通常越大理论上越聪明，但也更贵更慢；这次模型做大了价格却降了，说明训练和推理效率有实打实的提升。“缓存命中”（cache hit）是指你反复发送重复或相似内容时，模型不用每次都从头“读”一遍，直接省钱省时间。“高峰/非高峰定价”有点像电费的峰谷电价，同样的请求在不同时间段收费不同。",
      "opinion": "如果你现在就在用DeepSeek的API做工具，这次升级基本是“加量不加价”——模型更强、上下文更长，价格反而更低，值得实际测一下自己的场景是否受益，尤其是长文档、长对话类应用。但要留意峰谷定价这个新变量，如果你的应用有明确的高频调用时段，粗略估算成本时最好按峰值价格来测算，避免账单超预期。",
      "sources": [
        {
          "name": "Dataconomy",
          "url": "https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/"
        },
        {
          "name": "OpenRouter",
          "url": "https://openrouter.ai/deepseek/deepseek-v4.1-flash"
        }
      ]
    },
    {
      "emoji": "🤖",
      "title": "Cognition发布编程模型SWE-2，成本降64%",
      "body": "Devin开发商Cognition于9月10日在Devin Desktop和Devin CLI中上线新编程模型SWE-2。SWE-2并非从零训练，而是在月之暗面（Moonshot AI）开源的2.8万亿参数模型Kimi K3基础上做强化学习后训练。据Cognition自己公布的跑分，SWE-2在编程测试FrontierCode 1.1上得分50.0%，只比Anthropic的Fable 5.1低1个百分点，但成本便宜64%，还支持按需调节“思考力度”。",
      "explain": "“后训练”（post-train）是指不从头训练一个模型，而是拿别人已经训练好的基础模型，再用强化学习等方法继续“调教”，让它在具体任务（这里是写代码）上更强更省——有点像买一台通用电脑再针对某个用途做专门优化，比自己造一台电脑省事得多。Kimi K3是中国公司月之暗面放出来的开源大模型，Cognition选它做底座，说明国产开源模型已经被国际团队当作可用的“地基”。Devin是Cognition的老牌AI程序员agent产品。",
      "opinion": "50.0%和“只比Fable 5.1低1分”都是Cognition自己公布的跑分，还没有第三方复现验证，看看就好，别当成定论。但背后的趋势值得注意：越来越多公司不再自己从零训练大模型，而是拿开源底座（尤其是中国的开源模型）做二次强化学习，成本更低、更快出成果，对独立开发者也是一种可以借鉴的思路——不是所有场景都需要硬啃最贵的旗舰模型。",
      "sources": [
        {
          "name": "Cognition",
          "url": "https://cognition.com/blog/swe-2"
        },
        {
          "name": "MarkTechPost",
          "url": "https://www.marktechpost.com/2026/09/12/cognition-releases-swe-2-a-kimi-k3-post-trained-coding-model-that-matches-fable-5-1-on-frontiercode-at-64-lower-cost/"
        }
      ]
    },
    {
      "emoji": "🔬",
      "title": "Anthropic称模型逼近生物武器门槛，安全研究员离职",
      "body": "Anthropic发布9月版威胁情报报告，披露2025年12月至2026年8月间发现并制止的多起AI滥用案例，涉及网络攻击、间谍活动、诈骗、生物安全等七大类风险，并首次公开表示，公司已经无法再假定自家最新一代Claude模型的能力“低于”可能实质性协助制造生物武器的门槛。与此同时，原Anthropic安全团队研究员Joe Benton公开宣布离职，警告AI行业的竞速可能带来“灭绝级风险”，据报道这是两天内该公司安全团队第二起类似离职；Benton本人将加入AI安全评估机构METR。",
      "explain": "“威胁情报报告”是安全团队定期公布的“自查报告”，记录有没有人拿自家AI去干坏事、公司又是怎么发现和拦下来的。“生物武器门槛”说的是模型掌握的知识和推理能力，是否强到能实质性帮一个原本做不出危险武器的人做出来——这是AI安全圈公认最需要严防的红线之一。METR是一家专门给各大AI公司的模型做风险评估的独立非营利机构，经常被各公司请去做“第三方体检”。",
      "opinion": "两件事放在一起看更有意思：一边是Anthropic自己承认模型已经逼近危险能力的门槛，一边是自家安全团队的人相继离职、公开警告“公司做得不够”。前者可以理解为负责任的公开披露，但也不排除带一点“我们早说过很危险”的免责姿态；后者说明公司内部对“该跑多快、该多谨慎”存在真实分歧，不是外界瞎猜的公关话题。这条新闻和普通开发者用API写工具关系不大，但如果你在关注哪家模型公司更值得长期信赖，这类内部信号值得留意。",
      "sources": [
        {
          "name": "Anthropic",
          "url": "https://www.anthropic.com/threat-intelligence-report-september-2026"
        },
        {
          "name": "Tech Times",
          "url": "https://www.techtimes.com/articles/327308/20260911/anthropic-threat-report-ai-models-near-bioweapons-threshold-drone-kill-software-emerges.htm"
        },
        {
          "name": "Free Press Journal",
          "url": "https://www.freepressjournal.in/world/joe-benton-quits-anthropic-safety-team-warns-ai-race-could-pose-extinction-level-risks"
        }
      ]
    },
    {
      "emoji": "💰",
      "title": "AI芯片公司Positron融资8.75亿美元",
      "body": "AI推理硬件创业公司Positron AI于9月10日宣布完成8.75亿美元新一轮融资，公司估值达到50亿美元，由NEA、Atreides Management、Valor Equity Partners、Andra Capital、SemiAnalysis Capital等机构联合领投；此前公司在今年2月刚完成2.3亿美元B轮融资，估值超10亿美元，短短半年估值涨了约5倍。",
      "explain": "大模型跑起来分两个阶段——“训练”（教模型学东西，一次性投入巨大）和“推理”（模型对外提供服务、回答问题，是持续发生的日常开销）。Positron做的是专门优化“推理”这一段的芯片和系统，目标是在英伟达之外让大家用更低成本跑模型的日常问答。“估值”只是投资人和公司谈出来的一个“值多少钱”的数字，不代表公司账上真有这么多钱，也不代表这个数字最终能兑现。",
      "opinion": "这条新闻离普通开发者稍远，但方向是对的——推理芯片这条赛道竞争越激烈，长期看越有利于把大家用API的成本往下压。不过芯片公司从拿到钱到真正把算力便宜地铺到市场，中间还有很长的路要走，短期内不会反映到你现在用的任何一个API价格上，看个热闹就好，不用现在就调整什么。",
      "sources": [
        {
          "name": "Yahoo Finance",
          "url": "https://finance.yahoo.com/technology/ai/articles/ai-inference-startup-positron-raises-083948188.html"
        },
        {
          "name": "GlobeNewswire",
          "url": "https://www.globenewswire.com/news-release/2026/09/11/3360204/34554/en/liberty-global-tech-ventures-invests-in-ai-inference-hardware-and-software-company-positron-ai.html"
        }
      ]
    }
  ]
};
