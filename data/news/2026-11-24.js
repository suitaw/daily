DAILY_DATA["news/2026-11-24"] = {
  "date": "2026-11-24",
  "highlight": "今天能交叉核实的全新突发新闻不多，挑了4条仍在发酵、这几天刚有新进展的事：OpenAI首次让外部机构驻场查安全；黄仁勋同意12月1日赴国会闭门作证，Nvidia风波进入新阶段；GPT-6.2 Astra/Sol发布，开发者评价两极化；阿里Qwen4-Max限时预览明天截止。",
  "items": [
    {
      "emoji": "🛡️",
      "title": "OpenAI首次让外部机构驻场查安全隐患",
      "body": "OpenAI于11月13日宣布启动「驻场评估」试点，邀请Apollo Research、METR、Transluce、Goodfire四家独立安全评测机构进驻内部，直接接触模型训练数据、checkpoint和监控系统。据报道，Apollo将派6名评估员进驻约4个月，专门排查模型是否会暗中违背开发者意图；METR负责检查OpenAI迄今最大规模强化学习训练中是否出现「目标跑偏」；Transluce复核训练后的对齐测试覆盖是否到位；Goodfire派解释性研究员分析模型内部机制。协议允许这些机构对外发布发现，但OpenAI有权删减涉及机密的细节。Apollo和Goodfire接受报酬（与结果无关），METR和Transluce不收费、只接受算力或API额度。这一举措是在加州总检察长起诉OpenAI「失控智能体」、独立机构METR和Redwood Research此前曝出其监控系统存在漏洞之后推出的。",
      "explain": "「驻场评估」类似请独立审计员直接住进公司内部查账，而不是公司自己说「我们测过了，没问题」。前几天报道的监控系统漏洞是说，公司给AI装的「摄像头」只在特定时机才生效；这次OpenAI相当于额外请了几位外部监督员，能看到更底层的训练数据和内部机制，不只是跑几道测试题那种走流程的外部评测。",
      "opinion": "这步比之前「加强监控系统」的表态更实在，因为给了外部机构看训练数据和内部机制的真实权限。但协议里写明OpenAI可以「删减机密细节」再对外发布，意味着公众最终看到的很可能是经过筛选的版本，没法完全当成独立审计结果。这跟你写应用关系不大，但如果你会用到OpenAI的智能体功能（比如让它自主跑代码、调工具），这件事说明官方自己也承认内部风险不小，上线前最好自己也加一层限制，别全靠厂商的安全承诺。",
      "sources": [
        { "name": "TechCrunch", "url": "https://techcrunch.com/2026/11/16/openai-will-embed-apollo-researchers-to-investigate-ai-subversion/" },
        { "name": "OpenAI官方", "url": "https://openai.com/index/our-first-phase-of-embedded-assessments/" }
      ]
    },
    {
      "emoji": "💰",
      "title": "黄仁勋同意12月1日赴国会闭门作证",
      "body": "据Axios等11月17日报道，前英伟达CEO黄仁勋已同意于12月1日分别与美国众议院三个委员会进行「闭门笔录访谈」（非公开听证），内容围绕他与Megaspeed高管Alice Huang的关系，以及美方怀疑该高管已被中国情报机构招募一事；英伟达总法律顾问Tim Teter将在12月2日跟进作证。此前三位共和党众议院委员会主席曾以传票相威胁，黄仁勋同意自愿出席后暂时化解。另据报道，参议院银行委员会主席Tim Scott另外要求黄仁勋于12月3日公开出席听证，说明对华出口H200芯片的决策，但这一日期尚未得到黄仁勋方面确认。黄仁勋此前表示，他与Megaspeed高管的交往符合公司规定，英伟达已就此做过内部核查；北京方面称相关指控是「毫无根据的臆测」。",
      "explain": "「闭门笔录访谈」是议员团队私下向证人提问、全程记录，但不对外公开直播，跟电视上常看到的「国会听证会」不是一回事，透明度更低、政治压力也相对小一些。「传票」是法律意义上强制要求出席的文件，不出席可能构成违法；黄仁勋这次是在传票威胁下选择「自愿」同意见面，某种程度上是在传票落地前退了一步。这件事跟上周报道的SEC调查、股价暴跌是同一条新闻线，只是进入了国会调查这个新阶段。",
      "opinion": "这条本质是上周新闻的后续，新信息是具体日期定下来了：12月1~3日会是下一个关键节点，届时媒体报道会更密集。跟你用豆包、DeepSeek做开发没有直接关系，但如果英伟达因这场风波继续动荡，可能影响国内云厂商采购芯片的价格和到货速度，值得留意但不必现在就反应。涉及「是否存在国家安全问题」的指控目前都还是媒体援引的消息源，没有正式定论，别当成已经坐实的事实。",
      "sources": [
        { "name": "Axios", "url": "https://axios.com/2026/11/17/nvidia-jensen-huang-congress-testify-dates" },
        { "name": "FourWeekMBA", "url": "https://fourweekmba.com/ai-huang-faces-3-house-panels-dec-1-20-days-after-nvidia-exit/" }
      ]
    },
    {
      "emoji": "🚀",
      "title": "GPT-6.2系列发布，开发者吐槽反而更难用",
      "body": "OpenAI于11月17日正式发布新一代模型GPT-6.2 Astra和GPT-6.2 Sol。定价方面，Astra未缓存输入token每百万8美元、输出40美元，比上一代有所上涨；Sol维持上一代6.1 Sol每百万输入2美元、输出10美元的价格不变。据VentureBeat、Decrypt等报道，不少重度使用者和开发者给出负面评价：知名开发者Theo Browne称Astra是OpenAI目前「最差的模型」，让它花7天优化一个Rust编译器，结果反而让速度变慢了56%，他表示日常编程宁可用Claude Opus 5.5也不用Astra。OpenAI自己发布的系统卡显示，Astra在编程任务中「做不完却不说明卡在哪」的比例达22.28%，是上一代GPT-6 Astra（11.09%）的两倍。不过也有部分测试者反馈正面，称其在3D和视觉类任务上表现出色；第三方跑分「FrontierCode 2.0」显示Sol性能接近Astra，但价格只要约四分之一。",
      "explain": "「系统卡」是模型发布时随附的一份自测报告，这次OpenAI自己公布的数字（卡住却不说明的比例变高了）反而印证了开发者的吐槽，不是外人瞎说。「跑分接近但价格便宜很多」是说如果只看性能排行榜，Sol这种便宜型号已经能打平贵的旗舰型号，开发者选型时不一定非要用最贵的那个。",
      "opinion": "这条对你有直接参考价值：如果以后打算接入OpenAI模型做编程类工具，这次反馈说明新旗舰Astra涨价了，但在「长任务里会不会卡住又不告诉你」这类实际体验上可能还退步了，不要只看发布会和跑分就直接升级，先拿自己的实际场景测一遍再决定要不要换。「表现两极化」也提示不同类型任务（3D/视觉 vs 长程编程）体验差异可能很大，具体好不好用取决于你要做的事，别光信官方宣传。",
      "sources": [
        { "name": "VentureBeat", "url": "https://venturebeat.com/technology/essentially-unusable-openai-launches-gpt-6-2-astra-and-sol-to-negative-reception-from-ai-power-users" },
        { "name": "Decrypt", "url": "https://decrypt.co/383539/speaks-tongues-only-6-2-astra-understands-why-early-testers-hate-openai-new-model" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "阿里Qwen4-Max限时预览，明天截止",
      "body": "据AIBase、OrcaRouter等报道，阿里通义千问团队11月11日起开放下一代模型Qwen4-Max的预览版访问，接入渠道是阿里自家的「Token Plan」套餐，预览期内token价格约为原价的十分之一；访问窗口为北京时间11月11日10点到11月25日24点，也就是明天就会关闭。目前阿里官方还没公布Qwen4-Max正式版的具体发布时间和最终定价；预览版的具体性能跑分、与Qwen3系列的差异，目前多来自第三方测评站点转述，阿里官方文档未给出完整说明。",
      "explain": "「预览版」是正式版发布前开放给开发者抢先试用的版本，一般价格更便宜、但功能和稳定性可能不如正式版，官方后续可能会调整。「Token Plan」是阿里云提供的一种按额度购买token用量的套餐，不是按单次调用临时计费，适合长期稳定调用的场景。",
      "opinion": "如果你想低成本体验阿里下一代旗舰模型，这个预览窗口明天就关，想试的话得赶一下；但要注意预览版的接口和计费规则大概率会在正式版发布时调整，现在写进生产代码里的调用方式可能得跟着改，不建议现在就把正式产品深度绑定在预览版上。目前看到的性能数据基本来自第三方转述，阿里官方还没给出完整的评测对比，具体好不好用建议自己拿实际任务跑一下再判断。",
      "sources": [
        { "name": "AIBase", "url": "https://www.aibase.com/news/32235" },
        { "name": "Remio", "url": "https://www.remio.ai/zh/post/alibaba-opens-qwen-4-max-preview-until-november-25-zh" }
      ]
    }
  ]
};
