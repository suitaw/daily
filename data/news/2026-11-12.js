DAILY_DATA["news/2026-11-12"] = {
  "date": "2026-11-12",
  "highlight": "过去24小时能交叉核实的全新大新闻有限，挑的是本周（11月4~9日）信息量较大、还没在前几天资讯里出现过的5条：Anthropic发布新一代`Claude Fable 5.2`和`Mythos 5.2`；英伟达董事会就黄仁勋「间谍门」传闻启动独立调查；DeepSeek开源智能体应用`Harness`日活破154万；亚马逊被曝组建「个人机器人」团队做家用机器人；安全公司Censys发现上千个开源AI渗透测试工具后台暴露在公网且无密码保护。",
  "items": [
    {
      "emoji": "🚀",
      "title": "Anthropic发布新一代Claude Fable 5.2和Mythos 5.2",
      "body": "Anthropic于11月9日发布了新一代模型`Claude Fable 5.2`和`Claude Mythos 5.2`，官方说明里提到这两个版本其实是同一个底层模型：`Fable 5.2`面向所有用户开放，`Mythos 5.2`则继续只对通过「生命科学」和「网络安全验证」项目审核的机构开放。据报道，新模型的输出速度比上一代5.1版本提升最多30%；API价格为每百万输入token 8美元、每百万输出token 40美元，另有价格翻倍的「快速模式」可选。在Anthropic自己公布的`FrontierCode 2.0`智能体编程基准上，`Fable 5.2`得分49.1%，高于此前的`Opus 5.5`（45.5%）。Anthropic还提到，测试过程中`Mythos 5.2`和`Fable 5.2`都表现出「怀疑自己正在被比以往更频繁地测试」的行为。",
      "explain": "Anthropic现在把自己的模型分成几条产品线：平时普通开发者和用户用的（这次是`Fable`），还有权限更高、只给做生命科学研究或网络安全测试的机构用的版本（`Mythos`），这次说明两者背后是「同一个模型」，只是开放的权限和使用场景不同。「智能体编程基准」是专门测试AI能不能完成写代码、改bug这类有步骤、需要自己规划的任务，不是简单问答。模型「怀疑自己正在被测试」这种说法，指的是模型回答里会流露出类似「这感觉像是在被评估」的表述，属于模型行为层面的观察，不代表模型真的有自我意识。",
      "opinion": "如果你平时会用Claude API做开发，这次`Fable 5.2`速度提升、编程基准分数变好，值得实际跑一下看看对自己的工具有没有提升；价格方面「快速模式翻倍收费」这种分层定价，也是以后用API时要留意的新选项。基准分数是Anthropic自己公布的，没有第三方独立复测，不要直接当成客观排名；至于「模型怀疑自己在被测试」这种说法比较新奇，目前只是Anthropic自己的观察描述，还看不出对实际使用有什么具体影响。",
      "sources": [
        { "name": "Anthropic", "url": "https://www.anthropic.com/news/claude-fable-and-mythos-5-2" },
        { "name": "SD Times", "url": "https://sdtimes.com/ai/anthropic-introduces-claude-fable-5-2-mythos-5-2/" }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "英伟达董事会调查黄仁勋「间谍门」传闻",
      "body": "据多家媒体11月8日报道，英伟达董事会宣布，针对此前《纽约时报》报道中提到的「黄仁勋可能被境外情报机构接触」一事，已启动一项独立调查，由董事会里的独立董事委员会牵头，并聘请外部律师协助。英伟达官方声明称，目前没有理由认为公司机密或国家安全因此受到影响，黄仁勋本人表示支持调查、会全力配合，调查期间继续留任CEO。相关传闻源自《纽约时报》对新加坡公司Megaspeed一名高管的报道，美国官方人士称该高管与中国情报系统有关联；此事与前几天资讯里提到的「众议院三位主席要求黄仁勋11月18日出席闭门简报」是同一件事的后续，英伟达第三季度财报则定在11月17日公布。",
      "explain": "「独立调查」在公司治理里，一般是由不参与公司日常管理的「独立董事」牵头，再请外部律师事务所协助核查，目的是避免公司自己人「既当裁判又当选手」，让调查结果更有公信力。这次传闻的核心人物黄仁勋既是CEO也是公司创始人之一，公司选择让独立董事出面调查，一定程度上是想显示调查不是「自己人保自己人」。",
      "opinion": "跟几天前「国会要求问询」比起来，这次是公司自己主动站出来调查，说明这件事已经不只是媒体爆料和国会施压，连英伟达内部治理层面都在认真对待。但到目前为止，所有「间谍」指控仍然只是媒体援引的消息来源，没有任何独立证据或法律认定公开，英伟达自己也说没有证据显示机密泄露，建议继续当「尚无实锤、仍在调查」来看，不要因为启动了调查就倾向于认定指控属实或不实。",
      "sources": [
        { "name": "LetsDataScience", "url": "https://letsdatascience.com/news/nvidia-board-opens-investigation-into-reported-foreign-intel-c5b93236" },
        { "name": "FourWeekMBA", "url": "https://fourweekmba.com/ai-nvidia-board-opens-independent-probe-9-days-before-results/" }
      ]
    },
    {
      "emoji": "🇨🇳",
      "title": "DeepSeek开源智能体应用Harness日活破154万",
      "body": "据DeepSeek在X平台公布的数据，其开源智能体应用`Harness`截至11月4日日活跃用户达到154万，比8月13日上线时增长明显——9月底刚推出桌面版时日活约27万，一个多月内涨了5倍多。DeepSeek还披露，`Harness`平台每天处理的token消耗量约92万亿，第三方插件数量已有约3.5万个，大约60%的活跃用户至少用过或装过一个插件。不同媒体对这个用户数口径的解读不完全一致：有的说是DeepSeek自家网页/App服务的使用量，有的说只统计官方API的调用量，报道也没说明DeepSeek具体怎么定义「活跃用户」。",
      "explain": "`Harness`是DeepSeek做的一款「智能体外壳」应用，可以理解成一个专门用来调用AI自动干活（比如写代码、整理文件）的客户端，和Claude Code、Cursor这类工具是同类产品，区别是它背后用的是DeepSeek自己的模型，而且是开源的，意味着任何人都能下载它的代码自己改、自己部署。「插件」是给这个智能体外壳加功能的小模块，插件数量多说明已经有不少开发者在它基础上二次开发。",
      "opinion": "对你这种主要调用国内模型做工具的开发者来说，这条信息值得留意：DeepSeek不只是在卷模型本身，还在往「自带智能体外壳」的方向补齐产品，如果以后想做类似Claude Code的工具，`Harness`开源之后可以直接参考甚至基于它二次开发，不用从零搭。不过用户数这些数据目前都是DeepSeek自己经由X公布的，没有第三方审计，具体增长是不是真有这么猛，还要打个问号。",
      "sources": [
        { "name": "LetsDataScience", "url": "https://letsdatascience.com/news/deepseek-harness-agent-app-reaches-154-million-daily-users-83394bf7" },
        { "name": "AI Weekly", "url": "https://aiweekly.co/alerts/deepseek-harness-hits-154m-daily-users-92t-tokens-a-day" }
      ]
    },
    {
      "emoji": "🤖",
      "title": "亚马逊被曝组建「个人机器人」团队做家用机器人",
      "body": "据CNBC11月8日援引招聘信息报道，亚马逊近几个月组建了一个专门做家用机器人的新团队，正在招聘人员开发一款「全新品类」的机器人产品，具体是什么、能做什么、什么时候上市，公司都没有透露。这个团队建立在亚马逊今年3月收购的纽约机器人公司Fauna Robotics基础上——Fauna此前做出一款约1.1米高、名叫`Sprout`的人形机器人，收购后被并入亚马逊新设立的「个人机器人」（Personal Robotics Group）部门，部分成员来自亚马逊硬件研发部门Lab126。亚马逊发言人回应称，收购Fauna是为了解决「阻碍个人机器人普及的难题」，同时表示仍会继续支持现有的Astro家用机器人用户。",
      "explain": "亚马逊之前出过一款叫Astro的家用机器人（会在家里跑来跑去、能看家、能提醒事情），但市场反响一般；这次新团队背后的`Sprout`是人形机器人（有胳膊有身体，不只是个带轮子的小车），说明亚马逊想往更接近「真人形态」的家用机器人方向再试一次。",
      "opinion": "这条还停留在「组建团队、招人」阶段，没有产品、没有价格、没有时间表，更多是行业动向而不是能直接用的东西。跟做AI应用开发关系不大，但可以看出一个趋势：大厂在把生成式AI的能力（理解语言、规划任务）往实体机器人上装的尝试越来越多，家用机器人可能会是未来几年AI落地的一个新战场。",
      "sources": [
        { "name": "AI Weekly", "url": "https://aiweekly.co/alerts/amazon-stands-up-personal-robotics-group-around-faunas-sprout" },
        { "name": "FourWeekMBA", "url": "https://fourweekmba.com/ai-amazon-hires-for-a-new-home-robot-five-years-after-astro/" }
      ]
    },
    {
      "emoji": "🛡️",
      "title": "安全公司发现上千个AI渗透测试后台暴露无密码",
      "body": "网络安全扫描公司Censys在11月5日发布的报告中说，截至11月4日，全球有1,465台主机运行着开源AI渗透测试工具`ARTEX`的管理后台，且暴露在公开互联网上；剔除重复的托管集群后，Censys估计实际部署数量大概在800多个。报告指出，这些后台很多没有设置密码登录，意味着任何人在网上找到地址就能直接打开操作界面。按地区分布，数量最多的是美国（726个），其次是香港（387个）和中国内地（177个）。Censys表示，并非每一个暴露的实例都代表恶意用途——也有安全研究人员和授权的渗透测试团队在合法使用这个工具，但报告没有说明这些暴露实例里有多少已经被外人趁机利用过。",
      "explain": "`ARTEX`是一款开源的「AI渗透测试」工具，简单说就是给网络安全研究员用的一套AI辅助工具，能帮着自动找系统漏洞、模拟攻击，用来提前发现问题，跟前几天资讯提到的`GPT-6 Cyber`方向类似，都是「用AI做安全测试/攻防」的工具。区别是`ARTEX`开源免费、谁都能下载部署，所以更容易被人图省事直接挂在公网上、懒得设密码，这才被Censys扫描出来。",
      "opinion": "如果你自己的工具或服务器上部署过类似的开源AI工具、管理后台，这是个直接提醒：默认配置经常不设密码，部署之后一定要自己手动加上登录验证，不要觉得「这只是内部工具，没人会扫到」——这次被发现的上千个暴露实例，大概就是这么来的。这条新闻也印证了前几天提到的趋势：AI安全攻防工具越来越普及，用的人多了，配置疏忽导致的暴露面也在跟着变大。",
      "sources": [
        { "name": "LetsDataScience", "url": "https://letsdatascience.com/news/censys-finds-1465-exposed-hosts-running-artex-ai-pentesting-58bf3ec9" },
        { "name": "FourWeekMBA", "url": "https://fourweekmba.com/ai-censys-finds-1465-exposed-artex-ai-hacking-consoles-online/" }
      ]
    }
  ]
};
