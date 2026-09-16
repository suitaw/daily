DAILY_DATA["news/2026-09-06"] = {
  "date": "2026-09-06",
  "highlight": "Anthropic 宣布 Claude 用 11 天把费马大定理的完整证明翻译成计算机可逐行检验的 Lean 代码，这项工作原本预估要人类做约十年。同一天 OpenAI 公开 GPT-6 Astra 的安全报告，确认它是首个达到「关键级」网络安全能力的大范围部署模型。",
  "items": [
    {
      "emoji": "🔬",
      "title": "Claude 用 11 天完成费马大定理的计算机形式化验证",
      "body": "Anthropic 于 9 月 4 日宣布，Claude 生成了费马大定理首个完整的计算机可验证证明：约 1300 万行 Lean 代码、约 2.95 万个中间定理，规模是数学库 Mathlib 的五倍多。工作沿用 Wiles 1995 年证明的简化版本，由几十个 Claude 智能体协作完成，耗时 11 天、消耗约 60 亿输出 token。审阅证明的帝国理工数学家 Kevin Buzzard 称之为「非凡的自动形式化成就」。注意：Claude 做的是把**已有证明**翻译成机器可检验的形式，不是发现新证明。",
      "explain": "费马大定理说的是：x 的 n 次方加 y 的 n 次方等于 z 的 n 次方，当 n 大于 2 时找不到正整数解。1637 年费马在书页空白处写「我有个绝妙的证明，这里写不下」，之后 350 多年没人证出来，直到 1995 年 Andrew Wiles 才完成，证明长达一百多页，极其艰深。Lean 是一种「证明检查语言」：把证明写成代码，电脑逐行核对每一步推理是否成立。Mathlib 是数学家们共建的 Lean 数学库。",
      "opinion": "这件事的价值不在「证明了新东西」，而在「把人类最难的证明之一变成了机器能核对的形式」。以后数学家写出新证明，可能交给 AI 翻成 Lean 代码自动检查，审稿从几年缩到几天。对普通人影响不大，但它展示了 AI 在「又长又难、每一步都不能错」的任务上的耐力，这种能力迟早会用到写代码、审合同这些地方。",
      "sources": [
        {
          "name": "Anthropic 官方",
          "url": "https://www.anthropic.com/research/formalizing-fermats-last-theorem"
        },
        {
          "name": "Nature",
          "url": "https://www.nature.com/articles/d41586-026-02822-9"
        }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "OpenAI 公布 GPT-6 Astra 安全报告，拿 10 亿美元帮公共设施防御",
      "body": "OpenAI 公布 GPT-6 Astra 的安全概览，确认它是首个在其「准备度框架」中达到「关键级」网络安全能力、并且大范围部署的模型：能在没有人指导的情况下发现未知漏洞，并在受保护的系统中加以利用。OpenAI 为此加上了模型检查点加密、思维链监控等防护。同时推出「Daybreak for Frontline Defenders」计划，拿出 10 亿美元的补贴额度和支持，帮助供水、公用事业、地方政府和银行用前沿 AI 做网络防御。",
      "explain": "「准备度框架」是 OpenAI 自己定的风险分级表，把模型在网络攻击、生物武器等方面的能力分成几档，档位越高，发布前要加的防护越多，「关键级」是最高一档。这里指模型能自己找到厂商都不知道、还没有补丁的漏洞（叫「零日漏洞」），并且真的利用它。「思维链监控」是盯着模型的推理过程，发现它在打坏主意就拦下来。",
      "opinion": "攻和防是同一种能力：能找漏洞去攻击，也就能找漏洞去修补。OpenAI 拿 10 亿美元补贴水厂、银行这些「防守方」，一方面是真在补救，另一方面也是在为「我们敢发布这么强的模型」找理由。后面值得看的是：别的实验室会不会跟进这种「发强模型 + 补贴防守」的做法。",
      "sources": [
        {
          "name": "OpenAI 安全概览",
          "url": "https://openai.com/index/safety-overview-gpt-6-astra/"
        },
        {
          "name": "Daybreak 计划",
          "url": "https://openai.com/index/daybreak-for-frontline-defenders"
        }
      ]
    },
    {
      "emoji": "💰",
      "title": "Anthropic IPO 路演推迟到 10 月中旬以后",
      "body": "据路透援引知情人士，Anthropic 的 IPO 路演最早要到 10 月中旬才启动，招股书预计 9 月底前后提交；公司同时在筹备一笔约 150 亿美元的信贷额度。",
      "explain": "IPO（首次公开募股）就是公司第一次把股票拿到交易所卖给公众，也就是「上市」。「路演」是上市前公司到处给大投资人讲故事、摸清股票能卖多少钱的过程。「招股书」是上市前必须公开的详细文件，里面有收入、亏损、风险等真实数字。「信贷额度」是银行答应公司随时可以借的一笔钱。",
      "opinion": "最值得期待的其实是招股书。Anthropic 和 OpenAI 一直不公开详细财务，招股书一出来，外界第一次能看到「做大模型到底赚不赚钱、一年烧多少钱」。这对判断整个 AI 行业是不是泡沫很有参考价值。",
      "sources": [
        {
          "name": "Reuters",
          "url": "https://www.reuters.com/world/anthropic-ipo-launch-shifts-toward-mid-october-sources-say-2026-09-04/"
        }
      ]
    },
    {
      "emoji": "⚖️",
      "title": "西雅图时报、Newsday 起诉 OpenAI 和微软侵犯版权",
      "body": "两家美国报纸于 9 月 4 日向联邦法院起诉 OpenAI 和微软，指控两家公司抓取其网站内容（包括付费墙后的文章）用于训练 ChatGPT 和 Copilot，侵犯版权和商标，并造成网站流量和订阅收入流失。",
      "explain": "大模型要用海量文字训练，其中很多来自新闻网站。报社的逻辑是：你没付钱、没经过同意就拿我的文章去训练，做出的产品还抢了我的读者（用户直接问 ChatGPT，就不看报纸了），这是侵权。「付费墙」是要订阅才能看的文章。《纽约时报》2023 年就起诉过 OpenAI 和微软，这类官司已经有不少。",
      "opinion": "这些官司的结局，决定了 AI 公司以后要不要为训练数据付钱。如果 AI 公司输了，模型成本会上升，最终反映到 API 价格上。已经有一些 AI 公司选择先跟出版方签授权协议，花钱买平安。",
      "sources": [
        {
          "name": "Reuters",
          "url": "https://www.reuters.com/legal/government/seattle-times-newsday-sue-openai-microsoft-alleging-copyright-infringement-2026-09-05/"
        }
      ]
    },
    {
      "emoji": "💰",
      "title": "印度 TCS 拟投约 74 亿美元，在海得拉巴建 1GW AI 数据中心",
      "body": "塔塔咨询服务（TCS）旗下基础设施公司 HyperVault 9 月 5 日宣布，与合作方承诺投入至多 7000 亿卢比（约 74 亿美元），在海得拉巴 264 英亩土地上分期建设最高 1GW 的 AI 数据中心园区，用于 GPU 训练和推理。",
      "explain": "GW（吉瓦）是功率单位，1GW 大约相当于一座大型核电站的发电能力，这里指数据中心最多能用这么多电。AI 数据中心特别耗电，成千上万块 GPU 同时运转还要散热，所以现在说数据中心规模，常用「多少 GW」而不是「多少台服务器」。TCS 是印度最大的 IT 外包公司。",
      "opinion": "印度工程师多、土地和电相对便宜，想从「给别人写代码」升级成「自己手里有算力」。对我们没有直接影响，但它说明 AI 算力正在变成像电厂、港口一样的国家级基础设施，各国都在抢。",
      "sources": [
        {
          "name": "Reuters",
          "url": "https://www.reuters.com/world/india/indias-tcs-unit-invest-up-74-billion-ai-data-center-campus-2026-09-05/"
        }
      ]
    },
    {
      "emoji": "⚖️",
      "title": "128 国在日内瓦就自主武器谈出不具约束力的文本",
      "body": "在日内瓦《特定常规武器公约》框架下，128 个国家就自主武器的治理谈出一份不具约束力的文本。美国和俄罗斯倾向由各国自行立规，而不是接受国际规则。",
      "explain": "「自主武器」是能自己挑选目标并开火、不需要人按按钮的武器，比如能自动识别目标的攻击无人机。《特定常规武器公约》是联合国框架下的国际条约，专门讨论地雷、致盲激光这类「过于残忍或不分敌我」的武器。「不具约束力」意思是签了也不强制遵守，更像一份共同表态。",
      "opinion": "实话说，这份文本效力很有限，真正在大规模研发这类武器的国家不愿被约束。但它至少把「开火的决定要不要由人来把关」摆上了台面。后面值得看的是：有没有国家愿意签真正有约束力的条约。",
      "sources": [
        {
          "name": "Reuters",
          "url": "https://www.reuters.com/world/states-reach-agreement-autonomous-weapons-talks-geneva-2026-09-05/"
        }
      ]
    },
    {
      "emoji": "💰",
      "title": "高盛上调预测：2030 年数据中心用电需求达 108GW",
      "body": "高盛把 2030 年数据中心用电需求预测从 83GW 上调到 108GW。按其测算，与 2024 年初相比，到 2030 年 AI 带来的新增用电量相当于给全球再加上一个日本的用电量。",
      "explain": "GW 是用电功率，1GW 大约是一座大型核电站的发电能力，108GW 就相当于上百座大型核电站发的电全给数据中心用。数据中心的电主要花在两处：GPU 计算，以及给 GPU 降温的空调和冷却系统。",
      "opinion": "前两年大家担心「买不到芯片」，现在越来越多人担心「买到芯片也没电可插」。这就是为什么科技公司纷纷去投资核电、跑到北欧和中东建机房。也有人认为，电力建设速度会成为各国 AI 竞争里的一张重要底牌。",
      "sources": [
        {
          "name": "Goldman Sachs",
          "url": "https://goldmansachs.com/insights/goldman-sachs-exchanges/the-outlook-for-data-center-power-demand-as-ai-token-use-grows"
        }
      ]
    }
  ],
  "note": "本页于 2026-09-11 补录，由 AI 根据公开报道整理，「背景」和「看法」是 AI 的解读，不是新闻原文；个别数字可能存在转述误差，请以原文为准。"
};
