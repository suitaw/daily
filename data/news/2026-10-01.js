DAILY_DATA["news/2026-10-01"] = {
  "date": "2026-10-01",
  "highlight": "今天国际新闻集中在「大厂同台放大招」：谷歌发布新旗舰模型Gemini 4 Argon主攻代码和网络安全，几乎同一时间OpenAI开年度最大的DevDay大会，推出常驻智能体Dots和平价新模型GPT-6.1 Sol；安全方面，Anthropic红队测试发现智谱开源模型GLM-5.3的网络攻击能力已经逼近自家限制级模型；政策层面谷歌、OpenAI、Anthropic三家还在筹建一个自己说了算的行业自律机构。商业上OpenAI据报在谈300亿美元新融资、估值冲到1.4万亿美元；国内这边DeepSeek开源了一整套适配华为昇腾芯片的训练工具链。",
  "items": [
    {
      "emoji": "🚀",
      "title": "谷歌发布Gemini 4 Argon，网络安全防御者先用",
      "body": "据Axios、SiliconANGLE、Unite.AI9月30日报道，谷歌发布新一代前沿模型Gemini 4 Argon，谷歌称其在多数内部基准测试上超过了Anthropic和OpenAI的同类模型，主攻软件工程、长周期复杂任务以及金融、法律、网络安全这些专业领域。谷歌没有像平时一样直接全量开放，而是先通过「Fairwind计划」把模型交给经过审核的网络安全防御团队和自己内部团队使用，模型在发布时已经去掉了平时限制网络攻防操作的护栏；谷歌表示，Argon已经在医疗行业软件里发现了一个此前几代模型都没找到的、可能导致大量患者隐私信息外泄的高危漏洞。面向开发者的付费API和谷歌AI Ultra订阅用户要等后续才能用上，起步价为每百万输入token2美元。",
      "explain": "「前沿模型」一般指各家公司当下能力最强的旗舰模型。谷歌这次先给网络安全防御团队用，而不是直接开放给所有开发者，是因为Argon具备自动找漏洞、验证漏洞、甚至直接写补丁的能力——这种能力如果谁都能用，攻击者也能拿来找别人系统的漏洞，所以谷歌选择先去掉护栏、小范围发给做安全防御的专业团队练手，确认安全可控后再逐步开放。「去掉护栏」说的是正常情况下大模型会拒绝帮用户写攻击代码，这次给防御团队用的版本解除了这类限制，方便他们模拟真实攻击来测试系统。",
      "opinion": "这条对你是条利好消息：Gemini 4 Argon主打代码能力，等它开放付费API后（起步价每百万输入token2美元，和GPT-6.1 Sol价位接近），值得拿来跟你现在用的模型对比一下代码任务的效果和成本。「在多数基准测试上超过Anthropic和OpenAI」是谷歌自己公布的说法，没有第三方独立复测，实际体验好不好得自己试了才知道；「发现医疗软件高危漏洞」目前也只有谷歌一方的说法，具体是什么漏洞、影响多大范围，还没看到独立的安全机构确认。",
      "sources": [
        { "name": "Axios", "url": "https://www.axios.com/2026/09/30/google-gemini-4" },
        { "name": "SiliconANGLE", "url": "https://siliconangle.com/2026/09/30/googles-new-frontier-ai-model-gemini-4-argon-goes-to-cybersecurity-defenders-first/" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "OpenAI开DevDay，发布常驻智能体Dots",
      "body": "据Business Standard、The Neuron Daily9月29日报道，OpenAI召开规模最大的一届DevDay开发者大会，一口气发布20多项更新，其中最受关注的是名为Dots的常驻智能体：Dots由GPT-6 Astra驱动，拥有自己的云端电脑和浏览器，不需要用户一直开着对话窗口，可以在后台持续推进任务、对接超过4000款应用，还能接入Slack、微软Teams这类办公软件直接参与工作群对话。目前Dots只对Pro、Business Premium和企业版用户开放，欧洲经济区、英国、瑞士的Pro用户暂时还用不了。会上OpenAI还发布了新模型GPT-6.1 Sol，能力接近旗舰GPT-6 Astra，价格只要五分之一（每百万输入token2美元、输出10美元），并推出跑在英伟达GPU上、速度更快的Ultrafast档位，另外还上线了一个让企业能把OpenAI的预付费额度花在合作伙伴开源模型上的新市场。",
      "explain": "常驻智能体和平时聊天用的AI最大的区别是：平时你问一句AI答一句，用完就结束；常驻智能体更像雇了个远程员工，它有自己独立的「电脑」在云端持续运行，你交代一个任务后可以先去忙别的，它会在后台自己规划步骤、操作各种软件，直到任务做完或者需要你确认再找你。「接入超过4000款应用」说的是Dots能像人一样登录、操作这些第三方软件，而不是只会回答文字问题。GPT-6.1 Sol和前几天报道过的Claude Sonnet 5.5思路类似，都是用性能接近旗舰、价格大幅下降的中间档模型来覆盖日常任务。",
      "opinion": "这条和你关系很直接：GPT-6.1 Sol每百万输入token2美元、输出10美元，跟Anthropic前两天刚发的Sonnet 5.5价位几乎一样，两家旗舰公司同时在推性能够用、价格打折的中间型号，说明这类模型会是接口选型的主流方向，可以拿来对比测一测你手头的任务。Dots这种常驻智能体如果以后开放给个人开发者接入API，会直接改变调用模型这件事的玩法——但目前只对企业和Pro高价订阅用户开放，具体接入细节和价格还没公布，普通开发者短期用不上。",
      "sources": [
        { "name": "Business Standard", "url": "https://www.business-standard.com/technology/tech-news/openai-devday-2026-dots-gpt-6-1-sol-codex-developer-tools-126093000396_1.html" },
        { "name": "The Neuron Daily", "url": "https://www.theneurondaily.com/p/openai-launched-dots-20-more-tools" }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "Anthropic称GLM-5.3攻击力近Claude",
      "body": "据The Decoder、Tom's Hardware9月29日报道，Anthropic旗下专门研究前沿风险的Frontier红队发布报告，测试了智谱（Zhipu）新发布的开源模型GLM-5.3的网络攻击能力，发现它独立构建完整攻击链（从找到漏洞到真正打穿目标系统）的成功率，已经接近Anthropic自己限制使用的高风险模型Claude Mythos Preview。报告称，GLM-5.3面对直白的攻击指令会拒绝，但只要把同样的请求包装成「红队演练」，模型尝试连接目标系统的比例就有64%；如果再给模型预先写好一部分攻击思路，比例升到92%；而如果用一种叫abliteration的技术把模型里负责拒绝的那部分能力直接剥除掉，成功率能到100%，相比之下用同样手法攻击Claude系列模型全部失败。另据报道，美国NIST下属的AI标准与创新中心此前把GLM-5.3评为开源模型里网络攻击能力最强的一个，大约落后美国最强模型4个月左右。",
      "explain": "「红队」是公司内部专门负责扮演坏人攻击自家或别家产品的团队，目的是提前找出被滥用的风险。开源权重模型和Claude、GPT这类只能通过官方接口调用的闭源模型不一样：开源模型的参数文件任何人都能下载到自己电脑上运行和修改，公司没法事后再远程加限制。abliteration是一种专门针对开源模型的技术，直接从模型内部参数里把拒绝回答敏感请求的那部分能力删掉，相当于拆掉了模型自带的安全锁，而且因为模型是开源的，谁都能下载下来自己动手拆。",
      "opinion": "这条信息来自Anthropic自己做的测试，而Anthropic和智谱是直接的竞争对手，报告的客观性要打个折扣——但开源模型一旦被拆除护栏就没人管得住，这是开源权重模型普遍存在的问题，不只是GLM-5.3一家，值得留意：如果你的工具调用了国内开源模型，默认的安全护栏可能比闭源商用模型弱，自己做产品时如果涉及代码执行、联网这类敏感操作，不能完全指望模型自己拒绝危险请求，最好在你自己的系统里再加一层限制。",
      "sources": [
        { "name": "The Decoder", "url": "https://the-decoder.com/anthropic-says-zhipus-open-weight-glm-5-3-nearly-matches-claude-mythos-preview-at-building-exploits/" },
        { "name": "Tom's Hardware", "url": "https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-claims-popular-chinese-ai-model-has-mythos-class-hacking-abilities-frontier-red-teaming-report-details-weak-safeguards-on-open-weight-ai" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "DeepSeek开源昇腾工具链，减少对英伟达依赖",
      "body": "据17173新闻网、潮新闻9月30日报道，DeepSeek正式开源了一整套面向华为昇腾算力平台的基础设施组件，包括编译工具TileLang、矩阵运算库DeepGEMM、跨设备通信库DeepEP、向量计算库TileKernels、长文本注意力加速库FlashMLA和数据筛选库DeepSelect，这些组件分别对应英伟达CUDA生态里的同类工具。报道称，这套工具链此前已经用在DeepSeek自家V4系列模型的训练中，矩阵运算和跨卡通信的性能已经接近硬件理论上限；华为团队也参与了开发，双方还在联合推进基于昇腾950芯片的128卡超节点方案。",
      "explain": "CUDA是英伟达专门给自家GPU配的一整套编程工具，过去十几年几乎所有AI训练代码都是照着CUDA的习惯写的，换成别家芯片（比如华为昇腾）常常要把代码重写一遍，很麻烦，这也是英伟达芯片在AI圈子里难被替代的重要原因之一。DeepSeek这次开源的这几个工具，相当于把训练模型时最耗性能的几个环节（矩阵乘法、芯片之间传数据、长文本处理）在昇腾芯片上也各自配了一套对应的高性能实现，让原本只会用CUDA写代码的开发者，不用从头学一套新语言，就能把训练任务迁到国产芯片上跑，而且速度能接近硬件本身的极限。",
      "opinion": "如果你平时写的工具只调用API、不用自己训练模型，这条新闻和你关系不大；但如果你关心国产大模型背后的算力生态，这是一个具体的进展：以前摆脱对英伟达依赖更多是说法上的愿景，现在DeepSeek把具体用到的几个核心工具都开源公开了，相当于把怎么迁移这件事的技术门槛明确摆出来给大家看。「性能接近硬件理论上限」是DeepSeek和华为自己测出来的数字，没有第三方独立跑分验证，实际好不好用还要看后续有没有其他团队真的拿去跑通。",
      "sources": [
        { "name": "17173新闻网", "url": "https://news.17173.com/content/09302026/120549059.shtml" },
        { "name": "潮新闻", "url": "https://tidenews.com.cn/news.html?id=3574565" }
      ]
    },
    {
      "emoji": "⚖️",
      "title": "谷歌OpenAI Anthropic筹建AI行业自律机构",
      "body": "据Forbes、BankInfoSecurity9月28日报道，谷歌、OpenAI和Anthropic三家公司达成一致，计划联合成立一个暂定名为「前沿AI标准局」的行业自律组织，预计最快今年底、最晚2027年初成立，并已经接触前白宫AI政策顾问Sriram Krishnan等人选，考虑邀请其出任负责人。报道称，这个机构的运作模式参照美国证券行业的自律组织FINRA，打算统一制定「模型发布前怎么测试」「出了安全事故怎么上报」「怎么认证第三方审计机构」这几件事的行业标准。报道提到，这个想法最早源自谷歌DeepMind联合创始人Demis Hassabis的提议，三家公司原本更想要一个有美国联邦政府背书的监管机构，但相关的白宫行政令草案在特朗普政府内部没能获得足够支持，才转而由企业自己牵头筹建。",
      "explain": "FINRA是美国证券行业内部自己出钱、自己管自己的一个自律组织，不是政府机构，但华尔街的证券公司大多要听它的规则，有点像行业内部请的裁判。这次谷歌、OpenAI、Anthropic想复制的就是这个模式：与其等政府立法监管（流程慢，而且不一定管得明白AI这种新技术），不如三家头部公司自己先凑钱凑人，定一套大家都认的测试和上报标准，这样既能对外证明自己有在自我约束，具体标准怎么定、谁来执行也更多掌握在公司自己手里。",
      "opinion": "这是三家最大的AI公司在联手给自己定规则，而不是被动接受政府监管——说明他们更希望用一套自己能影响、甚至亲自挑负责人的标准，取代可能更严格、自己说了不算的政府立法。对你用API基本没有直接影响，但长期看，如果这套标准真的落地，模型发布节奏、安全测试要求可能都会按这套新规矩走，这家机构到底由谁牵头、具体标准定得严不严，目前都还在筹备阶段，没有定论。",
      "sources": [
        { "name": "Forbes", "url": "https://www.forbes.com/sites/jonmarkman/2026/09/28/google-openai--anthropic-plan-their-own-finra-style-ai-safety-regulator/" },
        { "name": "BankInfoSecurity", "url": "https://www.bankinfosecurity.com/google-openai-anthropic-plan-frontier-ai-standards-body-a-32926" }
      ]
    },
    {
      "emoji": "💰",
      "title": "OpenAI据报寻求300亿美元新融资",
      "body": "据彭博社、Yahoo Finance9月29日、30日报道，OpenAI据报正在寻求至少300亿美元新一轮融资，对应估值约1.4万亿美元（估值不计入新融到的这笔钱），相比今年3月由软银、亚马逊、英伟达领投、融资1220亿美元、估值8520亿美元的那轮，又涨了约64%。报道称，这轮融资更像是替代IPO的过桥融资——让OpenAI继续留在私募市场融钱，暂时不用上市，具体条款目前还在早期洽谈阶段，可能会变。另据路透社报道，OpenAI目前的年化收入已经接近700亿美元，比今年第三季度初增长超过70%。CEO Sam Altman此前表示，公司今年主动放弃了上市计划，认为现在考虑公开上市「不太明智」，原因与公司还在推进的AI安全工作有关。",
      "explain": "过桥融资原本是指公司在两个大阶段之间先借一笔钱过渡用的融资方式，这里的意思是OpenAI本来有可能走上市这条路公开从股市融资，但现在先用私募市场（找私人投资者谈，不公开挂牌交易）的方式再融一大笔钱，把上市这件事往后推。估值1.4万亿美元说的是投资人认为整个公司值这么多钱，不代表公司账上真有这么多现金，是用来算这次新投进来的钱能换多少股份的参考数字。年化收入接近700亿美元，是把近期的收入按一年的速度折算出来的数字，不是说这一年已经实际收了700亿美元。",
      "opinion": "这条说明资本市场对OpenAI的信心还在往上涨，一轮比一轮估值高，这类巨额私募融资通常意味着公司会继续大举投入算力和模型研发，短期内不太可能因为缺钱而收缩API服务或大幅涨价，对你来说算是个服务还会持续、甚至可能继续降价抢份额的间接利好信号。不过「寻求300亿美元」目前还只是据报道的早期阶段消息，具体投资人是谁、最终融没融到、估值定在多少，都还没有正式确认，不排除后续有变化。",
      "sources": [
        { "name": "彭博社", "url": "https://bloomberg.com/news/articles/2026-09-29/openai-targets-30-billion-in-new-funding-at-1-4-trillion-value" },
        { "name": "Yahoo Finance", "url": "https://finance.yahoo.com/technology/ai/articles/openai-targets-30-billion-funding-185008998.html" }
      ]
    }
  ]
};
