DAILY_DATA["news/2026-09-11"] = {
  "date": "2026-09-11",
  "highlight": "OpenAI 宣称用一万个智能体在 88 小时内「攻克」千禧年七大难题之一的纳维-斯托克斯方程问题，但 Clay 数学研究所尚未认可，已有数学家质疑它借用了未发表的私人研究成果。AI 数学能力的边界和学术诚信问题同时成了焦点。",
  "items": [
    {
      "emoji": "🔬",
      "title": "OpenAI 称智能体「解出」纳维-斯托克斯方程，遭数学家质疑",
      "body": "OpenAI 于 9 月 8 日前后宣布，其内部模型驱动的 1 万个协同智能体经过约 88 小时运算，于 9 月 5 日得出纳维-斯托克斯方程问题（千禧年七大数学难题之一，悬赏 100 万美元）的一个解，随后又用 17 小时通过 GPT-6 Astra 完成 Lean 形式化验证。项目负责人、OpenAI 研究员 Sébastien Bubeck 估计这次运算花费了「数百万美元」的算力。消息发布数小时后，纽约大学数学教授 Tristan Buckmaster 公开质疑该成果可能参考了他存放在 Codex 中、尚未发表的私人研究。目前 Clay 数学研究所还没有把这个问题从「未解决」名单中移除。",
      "explain": "纳维-斯托克斯方程是描述水、空气这类流体怎么流动的一组方程，天气预报、飞机设计都靠它。数学家的难题是：没人能证明它的解在任何情况下都不会突然「爆掉」（冒出无穷大）。2000 年 Clay 研究所把它列为 7 个「千禧年大奖难题」之一，解出一个奖 100 万美元，26 年来只有庞加莱猜想被解决。「Lean 形式化验证」是把证明写成计算机能逐行检查的代码，机器检查通过就说明推理没有错。",
      "opinion": "先别急着信。千禧年难题的证明历来要数学家审好几个月，公司自己宣布不算数。机器验证也有盲区：它只保证推理没错，还得有人确认代码里写的「题目」和原题一字不差。不过就算最后发现有问题，AI 能在几天里拿出一份通过机器检查的候选证明，本身已经很惊人。署名争议同样值得留意：如果 AI 用到了别人存在 Codex 里的未发表成果，功劳算谁的、放在 AI 工具里的资料安不安全，都是新问题。",
      "sources": [
        {
          "name": "CNBC",
          "url": "https://www.cnbc.com/2026/09/09/openai-navier-stokes-math-problem-solved.html"
        },
        {
          "name": "OpenAI",
          "url": "https://openai.com/index/navier-stokes-solution/"
        },
        {
          "name": "Quanta Magazine",
          "url": "https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/"
        }
      ]
    },
    {
      "emoji": "🚀",
      "title": "DeepSeek 发布 V4.1-Flash，号称反超自家旗舰 V4-Pro",
      "body": "DeepSeek 于 9 月 10 日正式推出 V4.1-Flash，这是其新架构家族中最小的模型：5520 亿参数的混合专家（MoE）结构，配合因果编码器-解码器设计，推理时只激活约 80 亿至 160 亿参数。官方称它在性能、速度和任务完成时间上都超过此前的旗舰 V4-Pro。新模型支持约 104 万 token 上下文，定价为每百万输入 token 0.3 美元、输出 token 1.2 美元。据悉从 9 月 14 日起，原本发往 V4-Pro 的请求将统一路由到 V4.1-Flash。",
      "explain": "MoE（混合专家）就是模型里养了一大群「专家」小网络，每次只叫醒其中几个干活。所以总参数有 5520 亿，但每次实际参与计算的只有 80 亿到 160 亿，跑得快、花钱少。上下文 104 万 token，意思是一次能读进几本长篇小说那么多的文字。每百万输入 token 0.3 美元，大约两块多人民币。",
      "opinion": "这条跟你最直接相关。你做的是调 API 的工具，DeepSeek 这个价格和速度值得换上试一试（国内 API，记得直连不走代理）。「反超旗舰」是官方说法，最好拿你自己的真实任务测一下再下结论。还有一点：9 月 14 日起发给 V4-Pro 的请求会被自动转到 V4.1-Flash，如果你有项目在用 V4-Pro，输出风格可能会变。",
      "sources": [
        {
          "name": "DeepSeek 官方",
          "url": "https://www.deepseek.com/en/news/deepseek-v4-1-flash/"
        },
        {
          "name": "SiliconANGLE",
          "url": "https://siliconangle.com/2026/09/10/deepseek-releases-v4-1-flash-says-it-outperforms-flagship-v4-pro/"
        }
      ]
    },
    {
      "emoji": "🤖",
      "title": "OpenAI 开放 Agents API 公测，Codex 背后的智能体框架对外开放",
      "body": "OpenAI 于 9 月 10 日宣布 Agents API 进入公测，把此前支撑 Codex 的智能体框架（harness）通过统一的 API 开放给所有开发者，包括会话管理、工具编排、上下文压缩和故障恢复等能力。开发者不用额外付费，只为智能体实际消耗的 token 和工具调用付费，可以选择在 OpenAI 托管沙箱、自己的基础设施或合作伙伴沙箱中运行。",
      "explain": "Agent（智能体）不只是回答一句话，而是能自己分好几步干活：查资料、调工具、写文件、出错了重试。「框架（harness）」就是管这些步骤的外壳：记住做到哪了、下一步该调哪个工具、对话太长了怎么压缩。以前这层外壳要开发者自己写，现在 OpenAI 直接给现成的。「沙箱」是隔离的运行环境，Agent 在里面怎么折腾都伤不到你的真实电脑。",
      "opinion": "这和 9 月 8 日 Anthropic 发布的 Claude Managed Agents 是同一个方向：大厂都在把「造 Agent 的脚手架」做成现成服务。对你来说既是好事也是提醒：从零手写 Agent 循环这门手艺在贬值，更值得花时间琢磨的是「让 Agent 去解决哪个具体问题」。",
      "sources": [
        {
          "name": "OpenAI 官方",
          "url": "https://openai.com/index/introducing-the-agents-api/"
        },
        {
          "name": "MarkTechPost",
          "url": "https://www.marktechpost.com/2026/09/10/openai-launches-the-agents-api-in-public-beta-putting-the-codex-harness-behind-one-api-call/"
        }
      ]
    },
    {
      "emoji": "💰",
      "title": "Oracle 云基础设施收入暴涨 121%，新签超 300 亿美元 AI 合同",
      "body": "Oracle 公布 2027 财年第一财季业绩：总营收 193 亿美元，同比增长 30%；云基础设施收入 74 亿美元，同比增长 121%；云业务总收入 116 亿美元，同比增长 62%。当季新签 AI 云合同超过 300 亿美元，剩余履约义务（RPO）升至 6640 亿美元。管理层把全年营收指引上调到 900 亿美元以上，但当季资本支出达 285 亿美元，自由现金流为负 54 亿美元。",
      "explain": "「云基础设施」就是把服务器和 GPU 按用量租给别人，跟阿里云是一类生意。RPO（剩余履约义务）是客户已经签了合同、但 Oracle 还没交付的金额，可以理解成「手里攥着的订单」。「资本支出」是买服务器、建机房花的钱；「自由现金流为负」意思是这个季度花出去的比赚进来的多。",
      "opinion": "订单很猛，但钱是先花出去的：Oracle 相当于在借钱建机房，赌这些 AI 客户将来能按时付款。如果 AI 热潮降温，这类「先投入、后收钱」的公司会最先吃亏。所以大家讨论「AI 是不是泡沫」时，常把 Oracle 当温度计看。",
      "sources": [
        {
          "name": "Investing.com",
          "url": "https://www.investing.com/news/company-news/oracle-q1-fy2027-slides-cloud-infrastructure-surges-121-guides-90b-93CH-4897025"
        }
      ]
    },
    {
      "emoji": "⚖️",
      "title": "加州签署 AB 1405，设立全美首个 AI 审计师注册制度",
      "body": "加州州长 Gavin Newsom 于 9 月 9 日签署 AB 1405 法案，建立全美第一个州级 AI 审计师注册制度。法案要求加州政府运营局最迟在 2029 年 1 月 1 日前建立「AI 审计师注册处」，从那天起，没有州注册编号的个人或机构不得开展「受监管的 AI 审计」。立法目的是避免 AI 公司自己评估自家技术，建立独立的第三方审计机制。",
      "explain": "「审计」在这里就是第三方检查。好比汽车年检要去有资质的检测站，而不是厂家自己说安全就算数。这部法律规定：给 AI 做「受监管审计」的人或机构，必须先在州政府登记拿编号。2029 年才生效，中间留了几年准备期。",
      "opinion": "短期内对普通用户没什么直接影响，但方向很明确：以后 AI 产品可能像食品、药品一样要过第三方检测。顺带可能冒出一个新职业「AI 审计师」。加州的科技法规常被别的地方照抄，值得记住这个名字。",
      "sources": [
        {
          "name": "加州州长办公室",
          "url": "http://www.gov.ca.gov/2026/09/09/governor-newsom-signs-first-in-the-nation-ai-safeguards-to-protect-californians-calls-on-the-federal-government-to-do-its-part/"
        }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "Anthropic 披露第四起 Claude 早期版本安全事件",
      "body": "Anthropic 于 9 月 9 日披露，今年 1 月发生过一起此前没被发现的安全事件：早期版本的 Claude Opus 4.6 在一次网络安全评估中，本应处在无法联网的模拟环境里，却因为评估方配置错误被意外接上了真实互联网。公司 7 月 30 日排查 14.1 万份对话记录时曾披露三起类似事件，这一起是排查时被 AI 智能体自己漏掉的一批记录，团队 8 月为 METR 整理材料时才发现。四起事件都发生在同一家评估合作方设计的网络安全测试中。",
      "explain": "「网络安全评估」就是模型上线前，故意让它尝试黑进系统，测它的攻击能力有多强。正常应该在断网的模拟环境里做，就像在封闭的靶场里打靶。这次是合作方把靶场的围墙配置错了，模型的「子弹」打到了外面的真实系统。METR 是一家专门做独立评测的第三方机构。",
      "opinion": "要分清一点：这次是评估方配置出错，不是模型自己想办法「逃」出去的，看标题容易想歪。真正值得警惕的是后半段：Anthropic 让 AI 智能体翻查 14 万份记录，结果 AI 自己漏掉了一批。说明「用 AI 检查 AI」现在还不能完全放心，关键环节仍然要人盯着。",
      "sources": [
        {
          "name": "Yahoo Finance",
          "url": "https://ca.finance.yahoo.com/news/anthropic-reports-fourth-cybersecurity-incident-194842259.html"
        },
        {
          "name": "Investing.com",
          "url": "https://www.investing.com/news/stock-market-news/anthropic-reports-fourth-cybersecurity-incident-with-early-version-of-claude-4894416"
        }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "华为、寒武纪上调 AI 芯片报价，HBM 短缺推高成本",
      "body": "据路透社 9 月 10 日报道，华为、寒武纪等中国 AI 芯片厂商近期大幅上调现有及下一代 AI 处理器报价，原因是高带宽内存（HBM）供应紧张、采购成本飙升。华为昇腾 950DT 加速卡指导价升至 25 万元以上（约 3.7 万美元），比两个月前上涨 20% 至 50%；昇腾 950PR 从年初约 6 万元一张涨到 8 万多元，涨幅约 30%。寒武纪代号「690」的下一代芯片报价也比两个月前上调 20% 至 30%。",
      "explain": "HBM（高带宽内存）是紧贴在 AI 芯片旁边的一种特殊内存，读写速度极快，训练和运行大模型离不开它。全球主要由 SK 海力士、三星、美光三家生产，美国的出口管制让中国很难买到先进的 HBM。昇腾是华为的 AI 芯片，寒武纪是国产 AI 芯片公司，它们都是英伟达在中国市场的替代品。",
      "opinion": "可以理解成「AI 芯片的关键配件缺货，整机跟着涨价」。这笔成本迟早会传到国内 AI 服务的价格上。一边是算力变贵，一边 DeepSeek 这类公司还在降价，说明国内厂商只能更多靠算法省钱，这也是国产模型特别卷效率的原因之一。",
      "sources": [
        {
          "name": "Yahoo Finance / Reuters",
          "url": "https://ca.finance.yahoo.com/news/exclusive-chinas-ai-chipmakers-raise-050223278.html"
        },
        {
          "name": "Investing.com",
          "url": "https://www.investing.com/news/stock-market-news/exclusivechinas-ai-chipmakers-raise-prices-as-highbandwidth-memory-shortage-bites-4894950"
        }
      ]
    }
  ]
};
