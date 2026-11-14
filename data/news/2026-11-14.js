DAILY_DATA["news/2026-11-14"] = {
  "date": "2026-11-14",
  "highlight": "今日最大新闻：黄仁勋辞任英伟达CEO，CFO Colette Kress接任临时CEO。另外4条：Anthropic新规限制中国大陆等地区使用Claude；Google用AI生成数学证明验证Signal加密协议安全性；OpenAI将于12月11日停用两种旧语音模式；Anthropic在IPO材料中称Claude曾3天内「自行」把模型适配到AMD芯片上。",
  "items": [
    {
      "emoji": "💰",
      "title": "黄仁勋辞任英伟达CEO，Colette Kress任临时CEO",
      "body": "据TechCrunch、CNBC等11月12日报道，英伟达董事会宣布已接受黄仁勋辞去总裁、首席执行官及董事职务的请求，即刻生效；首席财务官`Colette Kress`将兼任临时CEO，同时继续担任财务副总裁，董事会表示正在从内部和外部考察正式CEO候选人。公司官方声明没有说明辞职的具体原因。这发生在此前媒体报道黄仁勋被曝与一名美方情报人士认为可能和外国情报机构有关联的女性有染、以及与公司内部另一名高管有婚外情之后——英伟达董事会本月早些时候已就相关传闻启动过独立调查（见前几天资讯）。英伟达原定11月17日公布第三季度财报，目前未因此次人事变动调整该日期。",
      "explain": "「临时CEO」意思是董事会先找人顶上管理公司的日常运转，同时继续在外部和内部找真正要长期干的人选，不代表公司已经选定最终接班人。黄仁勋是英伟达的联合创始人，从1993年公司成立起就一直担任CEO，这次相当于他33年来第一次不再是这家公司的CEO。",
      "opinion": "跟前几天「董事会启动独立调查」比，这次是实打实的人事变动——传闻带来的压力已经大到让创始人兼CEO直接下台。要注意的是，英伟达官方通稿没有把辞职和「间谍」传闻直接挂钩，具体因果关系目前仍缺乏权威说明，不要自己过度解读。对你做开发来说，这条新闻本身不会立刻影响到你用的API或工具，但英伟达是整个AI行业芯片供应的核心，管理层动荡会不会影响到公司决策和对外合作，还要看后续，尤其是11月17日的财报和新管理层的表态。",
      "sources": [
        { "name": "TechCrunch", "url": "https://techcrunch.com/2026/11/12/nvidias-jensen-huang-resigns-chipmaker-names-cfo-colette-kress-as-interim-ceo/" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/11/12/nvidia-jensen-huang-ceo-live-updates.html" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "Anthropic新规限制Claude在中国大陆等地区使用",
      "body": "据香港《南华早报》、台湾Inside等近期报道，Anthropic更新了「支持地区政策」，自11月12日起生效：中国大陆、香港、澳门和俄罗斯不在支持地区名单内，政策适用于`Claude.ai`网页、API、`Claude Code`、`Cowork`等全部产品和开发者平台，以及通过云平台和授权经销商提供的Claude模型。据报道，受限对象不只是「人在限制地区」，还包括在限制地区注册、总部设立，或被限制地区的个人与机构控股的公司——即便使用者本人身处其他地区，也可能被判定受限；仅持有限制地区国籍、本人不在限制地区且不受当地机构控制的情况据报道不在限制范围内。Anthropic去年9月已经禁止过受中国实体多数控股的公司使用Claude，这次是在原有基础上扩大并公开了具体判定规则；据报道，Anthropic称此前已有受限地区的公司通过在海外设立子公司的方式绕开限制，所以才强化了核查手段。",
      "explain": "「支持地区政策」是Anthropic自己定的一份「能用/不能用Claude的地区清单」，不是哪国政府的法律要求，而是公司自己设的使用门槛。这次判断受不受限，看的是三件事：人在哪、公司在哪注册、公司被谁控股——这三项里任何一项落在限制地区，都可能被判定受限，不是只看用户的国籍。",
      "opinion": "你平时主要用豆包、DeepSeek这些国内模型，这条新闻直接影响不大，但值得知道背后的趋势：美国AI公司对中国市场的技术隔离，正在从「禁止中资控股公司」升级成更细、更广的地区级限制。如果以后你的项目涉及调用Claude API，或者给中国大陆的客户、公司提供基于Claude的服务，需要留意是否会被判定受限——按这次的标准，哪怕开发者本人不在受限地区，只要公司注册地或控股方落在受限地区，也可能用不了。这类限制接下来大概率还会继续收紧，不像是一次性调整。",
      "sources": [
        { "name": "South China Morning Post", "url": "https://www.scmp.com/tech/tech-war/article/3324504/tech-war-us-start-anthropic-blocks-chinese-firms-subsidiaries-worldwide-ai-access" },
        { "name": "Inside", "url": "https://www.inside.com.tw/article/42880-anthropic-supported-regions-policy-nov-12-location-incorporation-ownership-control" }
      ]
    },
    {
      "emoji": "🔬",
      "title": "Google用AI证明验证Signal加密协议安全性",
      "body": "据Axios、Google DeepMind官方博客11月10日发布，DeepMind用名为`AlphaProof Code`的系统，调用基于`Gemini 4 Carbon`模型的AI智能体，为加密通讯应用Signal背后的核心加密代码库`libsignal`生成了「机器可验证」的数学证明，整个过程只用了四周，官方说法是这类工作过去需要专家团队花数年才能完成。证明范围覆盖的是`libsignal`一个特定编译版本在一个小型命令行程序里的运行情况，不包括Signal手机应用整体。验证的属性包括「前向保密」「后向安全」等加密协议的核心安全性质，每一步证明都会交给专门的证明检查工具`Lean`核实逻辑是否成立。研究人员还做了一次反向测试：故意把两个此前已修复的历史bug加回代码，系统同样生成了「这个版本不安全」的证明，验证了方法本身管用。DeepMind表示会把这次用到的形式化验证工具开源，但没有透露具体成本，也向媒体表示现在还不清楚这套方法能推广到多大范围。",
      "explain": "「形式化证明」是用严格的数学逻辑一步步推导，证明一段代码确实做到了它承诺的安全性质，不是靠「跑一跑测试看看有没有问题」，而是从数学上保证不会出问题，可信度更高但做起来非常费工夫。`Lean`就像专门检查数学证明有没有逻辑漏洞的审核员，证明本身是AI写的，所以需要`Lean`这道工具把关，确认AI没有自己骗自己。",
      "opinion": "这是AI在「安全验证」这类高技术门槛领域展现实际能力的一个具体案例——过去专家团队要做好几年的事，AI系统四周就做完了，这个效率提升是真实的。但要注意这次只验证了`libsignal`某个特定编译版本在命令行程序里的表现，不代表整个Signal应用都被证明绝对安全，DeepMind自己也说不确定这套方法能不能推广，先别过度解读成「以后软件安全全靠AI搞定」。跟你做开发关系不算直接，但如果你关心「AI能不能帮忙证明自己写的代码没有漏洞」这个方向，这是个值得追踪的信号。",
      "sources": [
        { "name": "Axios", "url": "https://axios.com/2026/11/10/google-code-verification-signal" },
        { "name": "Google DeepMind", "url": "https://deepmind.google/blog/formal-verification-signal-protocol" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "OpenAI将于12月11日停用ChatGPT两种旧语音模式",
      "body": "据Android Authority、NewsBytes等11月报道，OpenAI从11月10日起通知用户：ChatGPT里的`Advanced Voice`和`Standard Voice`两种旧语音模式将于12月11日停用，停用后默认切换到此前推出的`Live Voice`（即`GPT-Live`）。停用日期前用户仍可继续使用旧模式；停用后，账号若原来选的是旧模式，会被自动切换到`Live Voice`，之前的语音对话记录会保留，可以继续用文字或语音接着聊。OpenAI表示，语音功能的使用量自`Live Voice`上线后几乎翻倍，这次调整是为了把开发资源集中到`Live Voice`。视频通话和屏幕共享目前仍只有旧版`Advanced Voice`支持，官方没有给出这些功能迁移到`Live Voice`的时间表；自定义GPT（`Custom GPTs`）里的语音功能也会保留在旧模式上，直到自定义GPT本身于12月11日停用（部分企业版和FedRAMP工作区会延后到2027年2月11日）。",
      "explain": "`Live Voice`是ChatGPT主推的新一代语音对话模式，反应比旧的`Advanced`/`Standard Voice`更快、更自然。这次相当于OpenAI直接把老版本语音功能下线，让所有用户统一换到新版本，而不是让两套系统一直并存。",
      "opinion": "对普通用户来说这更像一次产品整理，不是技术突破。如果你自己的工具调用了OpenAI语音相关的API（比如Realtime API或旧版语音接口），这是个提醒：去确认一下用的是不是这次要停用的旧模式，免得12月11日之后功能突然用不了。OpenAI说使用量「几乎翻倍」是公司自己的说法，没有第三方数据佐证，但换新模式本身是确定要发生的事，建议提前看官方迁移说明做准备。",
      "sources": [
        { "name": "Android Authority", "url": "https://androidauthority.com/openai-retiring-chatgpt-advanced-standard-voice-3733978" },
        { "name": "NewsBytes", "url": "https://www.newsbytesapp.com/news/science/openai-to-retire-older-voice-modes-in-chatgpt-next-month/story" }
      ]
    },
    {
      "emoji": "🚀",
      "title": "Anthropic称Claude曾3天内「自行」适配AMD芯片",
      "body": "据The Information、WCCFTech等近期报道，援引Anthropic在IPO招股材料中披露的内容，一个代号`Claude Mythos Preview`的模型，在几乎没有人工干预的情况下，用大约3天时间就让AI模型能在AMD的`MI355X`芯片上运行，据称相关底层适配代码几乎全部由Claude自己编写；Anthropic称这类适配工作过去通常需要工程师团队花6~12个月。需要注意，材料的脚注把「3天」限定在「让一个Anthropic模型在`MI355X`芯片上完成Prompt处理阶段、并达到可用的性能水平」，并不等于模型完整地在AMD芯片上训练或部署；这是公司在招股材料里自己给出的说法，报道中没有看到独立的第三方复测或公开的详细基准数据。Anthropic此前已与AMD达成协议，计划部署最多2吉瓦的AMD Instinct MI450系列芯片。",
      "explain": "英伟达的芯片在AI行业最常用，一大原因是配套的`CUDA`软件生态非常成熟，模型开发者已经习惯基于它写代码；换用AMD芯片，过去意味着要重新写大量底层适配代码（即「kernel」），很耗人工。这次说的是让AI（也就是Claude自己）去写这些适配代码，如果真能把原来几个月的工作缩短到3天，会明显降低换用AMD芯片的门槛。",
      "opinion": "这条消息要打个折扣看——它出自Anthropic自己为IPO准备的招股材料，公司有动机讲一个「我们技术很强、不完全依赖英伟达」的好故事，而且脚注已经把「3天」限定在一个比较窄的技术环节，不是整个模型迁移。对你做开发来说直接相关性不大，但背后趋势值得留意：如果AI公司真能靠AI自己写底层适配代码降低换芯片成本，不同芯片厂商之间的竞争会更激烈，长期看可能意味着算力成本有机会往下压，但这还只是一个苗头，别急着当成已经发生的事。",
      "sources": [
        { "name": "Digital Citizen", "url": "https://www.digitalcitizen.life/anthropics-claude-mythos-reportedly-ports-ai-model-to-amd-mi355x-gpus-in-just-three-days-challenging-nvidia-cuda/" },
        { "name": "WCCFTech", "url": "https://wccftech.com/anthropic-jeopardizes-nvidias-cuda-moat-as-its-claude-mythos-model-took-only-3-days-to-figure-out-how-to-run-another-model-on-amds-mi355x-gpus/" }
      ]
    }
  ]
};
