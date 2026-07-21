const TOPICS = {
  materials: {
    number: "01", name: "材料", en: "Materials", icon: "ph-atom",
    intro: "材料不是静止的名词，而是一套从原子排列、缺陷运动到宏观失效的因果链。沿着裂纹向内走，就会遇见结构真正的性格。",
    note: "真正决定性能的，往往不是完美晶体，而是那些能够移动、聚集或被工程师驯服的缺陷。",
    branches: {
      concepts: { label: "概念", kicker: "Structure & Property", title: "从原子排列，读出材料的性格。", deck: "同一种元素，因为排列方式、缺陷密度和尺度不同，可以表现出完全不同的强度、韧性与导电性。材料学的核心，是把“结构—工艺—性能”串成一条可验证的链。", quote: "晶格提供秩序，缺陷提供变化；工程发生在两者的拉扯之间。", facts: [["ph-grid-four","晶格与晶胞","晶胞是重复结构的最小描述单元。对称性决定了可以出现哪些方向与滑移方式。"],["ph-dots-nine","点缺陷","空位、间隙原子和置换原子改变扩散、颜色与电导，并且会随温度重新分布。"],["ph-waves","位错","位错让晶体在远低于理论强度的应力下发生塑性变形，也让强化机制成为可能。"],["ph-circles-three-plus","相与界面","晶界、相界和析出相既会阻挡位错，也可能成为腐蚀、扩散与裂纹的高速通道。"]], sources: [["NIST · Science of Defects","https://www.nist.gov/video/nist-colloquium-series-robin-selinger-science-defects"],["DoITPoMS · Crystal defects","https://www.doitpoms.ac.uk/tlplib/crystal_defects/index.php"]] },
      experiments: { label: "实验", kicker: "Observe & Measure", title: "把看不见的组织，变成可比较的证据。", deck: "从金相制样到电子显微镜，从拉伸曲线到断口分析，实验不是“拍一张漂亮图片”，而是用互相校验的测量回答结构如何形成、失效从哪里开始。", quote: "一个可信的材料结论，至少要同时尊重尺度、制样过程和测量不确定度。", facts: [["ph-microscope","显微组织","抛光与腐蚀把晶粒和相界显现出来；倍率变化时，统计结论也必须随之调整。"],["ph-chart-line-up","拉伸测试","屈服强度、抗拉强度、延伸率和断面收缩率共同描述材料的承载与变形能力。"],["ph-lightning","衍射与谱学","X 射线衍射识别晶体结构；能谱帮助判断元素分布，两者回答的是不同问题。"],["ph-magnifying-glass","断口追踪","韧窝、解理台阶、疲劳条带等形貌能反推裂纹传播方式，但必须结合载荷历史。"]], sources: [["NIST · Materials Measurement Laboratory","https://www.nist.gov/mml"],["DoITPoMS · Teaching resources","https://www.doitpoms.ac.uk/teachinglearning/index.php"]] },
      history: { label: "人物与历史", kicker: "People & Turning Points", title: "材料史，是人类学会控制结构的历史。", deck: "从青铜的合金化、贝塞麦炼钢到半导体纯化与高熵合金，关键跃迁都来自对“成分之外还有组织”这件事的逐步理解。", quote: "每一种新材料，都在重写一种工程可能性的边界。", facts: [["ph-fire","从冶炼到合金","早期工匠用经验控制温度与成分；现代相图把经验转化为可重复的热力学路径。"],["ph-factory","钢铁规模化","十九世纪炼钢技术降低成本，使铁路、桥梁和城市骨架进入新的尺度。"],["ph-cpu","硅的纯化","极高纯度单晶与可控制掺杂，让电子器件从真空管走向集成电路。"],["ph-sparkle","多主元合金","2004 年前后，高熵合金把关注点从“主元素加少量合金化”扩展到更大的成分空间。"]], sources: [["NIST · History of materials research","https://www.nist.gov/nist-museum"],["Yeh et al. 2004","https://doi.org/10.1002/adem.200300567"]] },
      resources: { label: "资料", kicker: "Reading Room", title: "从一张相图开始，建立自己的材料工具箱。", deck: "这一分支把常用数据库、开放课程和模拟工具放在同一条路径上。先掌握每个工具回答什么问题，再决定需要多高的精度。", quote: "工具不会替你判断；它只会把你的假设执行得更快、更彻底。", facts: [["ph-book-open-text","基础教材","先理解热力学、动力学、力学与结构表征，再把分散知识连成体系。"],["ph-database","材料数据库","使用数据库时记录版本、计算方法、温度压力条件与引用来源。"],["ph-cube-transparent","原子模拟","LAMMPS 适合经典分子动力学；势函数的适用范围往往比软件本身更重要。"],["ph-code","可视化与复现","OVITO、Python 与笔记本把数据处理流程保存下来，让图像能够被追溯。"]], sources: [["Materials Project","https://materialsproject.org/"],["LAMMPS Documentation","https://docs.lammps.org/"],["OVITO Documentation","https://www.ovito.org/docs/current/"]] }
    }
  },
  mathematics: {
    number: "02", name: "数学", en: "Mathematics", icon: "ph-function",
    intro: "数学把关系压缩成结构。它不只负责计算答案，更负责判断问题是否可解、哪些变化不重要、哪些模式会在尺度改变后依然存在。",
    note: "抽象不是离开现实，而是把许多现实共享的骨架单独拿出来。",
    branches: {
      concepts: { label: "概念", kicker: "Patterns & Proof", title: "把复杂对象，折叠成不变量。", deck: "集合描述对象，函数描述变化，结构描述关系，不变量则告诉我们哪些性质不会被允许的变换破坏。证明把直觉变成可复查的路径。", quote: "好的数学概念，像一副新的眼镜：同一个世界突然出现了更多秩序。", facts: [["ph-link-simple","函数与映射","函数不只是公式，而是从一个集合到另一个集合的对应规则。"],["ph-shapes","对称与群","群论把旋转、置换等操作的共同规律抽象出来，广泛连接几何与物理。"],["ph-bezier-curve","连续与极限","极限让“无限接近”拥有精确定义，并成为微积分与分析的地基。"],["ph-intersect","不变量","拓扑关注连续变形中保持不变的性质；代数也用不变量区分结构。"]], sources: [["Encyclopedia of Mathematics","https://encyclopediaofmath.org/"],["AMS · Mathematical Moments","https://www.ams.org/publicoutreach/mathmoments/mathmoments"]] },
      experiments: { label: "实验", kicker: "Think by Making", title: "数学也可以摸、画、跑起来。", deck: "计算实验不能代替证明，但它能暴露模式、寻找反例、测试猜想。把参数拖动、把图变形、把算法逐步执行，是理解抽象结构的捷径。", quote: "先让模式出现，再问它为什么必然出现。", facts: [["ph-chart-polar","画出参数曲线","观察曲率、周期与自交如何随参数变化，让方程获得空间直觉。"],["ph-tree-structure","遍历一张图","广度优先与深度优先访问同一网络，却形成不同的搜索边界。"],["ph-dice-five","模拟随机性","蒙特卡洛方法用重复采样估计难以直接计算的量，同时暴露误差尺度。"],["ph-spiral","迭代与混沌","简单递推可能产生分岔与不可预测行为；初值敏感不是“纯粹随机”。"]], sources: [["Wolfram MathWorld","https://mathworld.wolfram.com/"],["GeoGebra","https://www.geogebra.org/"]] },
      history: { label: "人物与历史", kicker: "Ideas Through Time", title: "一条公式背后，常有几代人的争论。", deck: "数学史不是天才名字的清单，而是符号、问题与证明标准如何改变。许多今天自然的概念，曾经需要很长时间才变得可接受。", quote: "数学进步不只增加结论，也不断提高“什么算作解释”的标准。", facts: [["ph-compass-tool","欧几里得的方法","公理化把少数前提与推理规则组织成完整体系，影响持续两千多年。"],["ph-calculator","微积分之争","牛顿与莱布尼茨发展了不同表述；现代记号仍保留两种传统的痕迹。"],["ph-infinity","严格化分析","十九世纪的极限与实数理论，为直觉性的无穷过程建立了可靠地基。"],["ph-git-branch","从桥到图论","欧拉的柯尼斯堡七桥问题把位置细节抽去，只保留连接关系。"]], sources: [["MacTutor History of Mathematics","https://mathshistory.st-andrews.ac.uk/"],["AMS History resources","https://www.ams.org/learning-careers/students/math-history"]] },
      resources: { label: "资料", kicker: "Problem Library", title: "从定义、例子、反例，到一份真正能复习的笔记。", deck: "建立数学资料库时，最有价值的不是收集最多链接，而是让每个概念都有定义、最小例子、典型反例与一条可运行的计算实验。", quote: "如果不能给出反例，就还没有摸到定义的边界。", facts: [["ph-list-checks","定义卡片","记录量词、条件与结论，并写下删除任一条件会发生什么。"],["ph-warning-circle","反例库","反例能快速校正过度概括，是数学直觉最有效的压力测试。"],["ph-notebook","证明日志","保存尝试失败的路径，它们往往揭示真正需要的新引理。"],["ph-terminal-window","计算工具","SymPy、SageMath 与可视化软件适合验证例子，但输出仍需解释。"]], sources: [["SageMath Documentation","https://doc.sagemath.org/"],["SymPy Documentation","https://docs.sympy.org/latest/"]] }
    }
  },
  physics: {
    number: "03", name: "物理", en: "Physics", icon: "ph-wave-sine",
    intro: "物理用模型连接可观测量。真正重要的不只是方程形式，而是近似何时成立、尺度怎样改变描述、实验如何区分相似的解释。",
    note: "模型不是世界本身，而是一种可被实验推翻的压缩。",
    branches: {
      concepts: { label: "概念", kicker: "Models & Scales", title: "从守恒律出发，让变化有迹可循。", deck: "能量、动量与角动量守恒把许多现象连接起来；场把相互作用分布到空间；尺度分析则帮助我们判断哪些项可以忽略。", quote: "先问什么不会改变，再问变化以什么方式发生。", facts: [["ph-arrows-left-right","守恒律","守恒量为动力学提供强约束，常与系统的对称性紧密相连。"],["ph-circles-four","场","场为每个时空位置赋予物理量，使作用不必被想象成瞬时跨越距离。"],["ph-ruler","尺度分析","无量纲组合能揭示主导机制，并让不同尺寸的系统可被比较。"],["ph-wave-sine","波与叠加","在线性近似下，波可以叠加、干涉和形成驻波；边界条件决定允许模式。"]], sources: [["CERN · The Standard Model","https://home.cern/science/physics/standard-model"],["HyperPhysics","http://hyperphysics.phy-astr.gsu.edu/hbase/index.html"]] },
      experiments: { label: "实验", kicker: "Measure the Invisible", title: "让光、时间与噪声替自然说话。", deck: "物理实验的核心是把理论量转换成仪器读数，同时控制系统误差。重复测量只能降低随机误差，不能自动修正偏置。", quote: "精密不是小数位更多，而是知道每一位来自哪里。", facts: [["ph-lightbulb-filament","光谱","物质与光相互作用留下离散或连续谱线，可用于识别成分、温度与运动。"],["ph-timer","时间测量","从摆钟到原子钟，计时精度提高会直接打开新的物理可见范围。"],["ph-waveform","信号与噪声","滤波能提高可见度，但也可能改变信号；处理步骤必须与原始数据一起保存。"],["ph-scales","不确定度","误差条不是失败声明，而是结论可信范围的一部分。"]], sources: [["NIST · Measurement Science","https://www.nist.gov/topics/measurement-science"],["NASA · Electromagnetic Spectrum","https://science.nasa.gov/ems/"]] },
      history: { label: "人物与历史", kicker: "Revolutions in Description", title: "物理革命，常从旧模型解释不了的小差异开始。", deck: "经典力学、热力学、电磁学、相对论与量子理论并不是简单替换，而是在不同尺度与条件下形成层层嵌套的描述。", quote: "新理论的力量，在于解释旧理论成功之处，也指出它失效的边界。", facts: [["ph-planet","经典力学","牛顿体系把天体与地面运动纳入同一组规律，建立可预测的机械世界图景。"],["ph-thermometer-hot","热与统计","统计力学把温度与熵连接到大量微观自由度的集体行为。"],["ph-radio","电磁统一","麦克斯韦方程把电、磁与光统一为场的传播。"],["ph-atom","量子与相对论","二十世纪的两大框架分别重写微观与高速、强引力尺度的直觉。"]], sources: [["CERN · Physics","https://home.cern/science/physics"],["NASA · Basics of Space Flight","https://science.nasa.gov/learn/basics-of-space-flight/"]] },
      resources: { label: "资料", kicker: "Workbench", title: "把公式、实验与模拟放在同一张工作台。", deck: "好的物理学习路径会在推导、数量级估算、实验案例和数值模拟之间来回切换，避免只会代公式却失去模型感。", quote: "先估算，再计算；先检查量纲，再相信答案。", facts: [["ph-pencil-line","推导笔记","每一步写出使用的近似与边界条件，避免把特殊结论误当普遍规律。"],["ph-gauge","数量级估算","费米估算用少数合理假设快速判断结果是否可能。"],["ph-code-block","数值模拟","离散化会引入步长与稳定性问题，收敛测试是结果可信的前提。"],["ph-book-open","开放课程","结合讲义、习题与实验视频，比单独观看概念解释更完整。"]], sources: [["MIT OpenCourseWare · Physics","https://ocw.mit.edu/search/?d=Physics"],["PhET Interactive Simulations","https://phet.colorado.edu/"]] }
    }
  },
  networks: {
    number: "04", name: "网络", en: "Networks", icon: "ph-graph",
    intro: "网络把局部规则放大成整体行为。从数据包寻找路径，到人群形成社区，连接方式往往比单个节点的属性更能决定系统表现。",
    note: "互联网的韧性并非来自一个中心，而来自许多独立网络愿意遵守共同协议。",
    branches: {
      concepts: { label: "概念", kicker: "Nodes & Protocols", title: "连接不是背景，它本身就是结构。", deck: "图用节点和边描述关系；协议规定彼此如何理解；分层让复杂系统可以独立演化。网络科学与互联网工程在这里共享一套语言。", quote: "协议的价值，不在于让所有人一样，而在于让不同系统仍能合作。", facts: [["ph-share-network","节点与边","方向、权重和容量会改变路径含义；同一批节点可以组成完全不同的系统。"],["ph-stack","分层","分层隐藏局部复杂性，让应用不必知道每条物理链路的细节。"],["ph-route","路由","路由器依据可达信息逐跳转发，不需要保存整个通信的全局状态。"],["ph-shield-check","可靠性","冗余、重传与拥塞控制共同决定网络在故障与高负载下的行为。"]], sources: [["Internet Society · How the Internet works","https://www.internetsociety.org/internet/"],["IETF Datatracker","https://datatracker.ietf.org/"]] },
      experiments: { label: "实验", kicker: "Trace & Observe", title: "跟随一个数据包，看见隐藏的基础设施。", deck: "网络实验可以从浏览器开发工具、ping 与 traceroute 开始。关键不是记住命令，而是理解每个观测值位于哪一层、受哪些缓存和策略影响。", quote: "一次请求的路径，既是技术路线，也是现实世界的地理与组织关系。", facts: [["ph-timer","延迟分解","传播、传输、排队与处理延迟共同构成往返时间。"],["ph-path","路径追踪","traceroute 通过逐步改变生存时间，观察数据包沿途经过的路由节点。"],["ph-browsers","请求瀑布","DNS、连接、TLS、服务器等待与下载阶段可以在浏览器里被分别观察。"],["ph-chart-scatter","网络测量","单次结果容易误导；跨时间、地点与协议的重复测量更接近真实情况。"]], sources: [["RIPE Atlas","https://atlas.ripe.net/"],["MDN · Network requests","https://developer.mozilla.org/en-US/docs/Web/Performance"]] },
      history: { label: "人物与历史", kicker: "From Packets to the Web", title: "互联网不是一次发明，而是一场长期协作。", deck: "分组交换、ARPANET、TCP/IP、DNS 与万维网来自不同阶段和团队。开放架构让不同网络保持自主，同时通过共同协议互联。", quote: "互联网最早分享的不只是信息，也分享关于互联网自身如何工作的文档。", facts: [["ph-package","分组交换","信息被拆成数据包独立转发，使链路能够被许多通信共享。"],["ph-globe-hemisphere-west","开放网络架构","独立网络不必内部改造，只需通过网关与共同协议实现互联。"],["ph-calendar-check","1983 的切换","ARPANET 在 1983 年切换到 TCP/IP，成为互联网史上的关键协议节点。"],["ph-file-text","RFC 文化","1969 年开始的 RFC 系列用开放、快速的文档推动协议讨论与实现。"]], sources: [["Internet Society · A Brief History of the Internet","https://www.internetsociety.org/resources/doc/2017/brief-history-internet/"],["RFC Editor","https://www.rfc-editor.org/"]] },
      resources: { label: "资料", kicker: "Open Standards", title: "从浏览器的一次请求，读到协议的原始文本。", deck: "网络资料最好按“现象—工具—协议”组织：先观察可见问题，再用工具定位层次，最后回到标准文档理解设计约束。", quote: "最有生命力的网络知识，往往以可公开实现的标准存在。", facts: [["ph-file-code","RFC","RFC 包含标准、最佳实践和背景资料；阅读前先确认文档类别与更新关系。"],["ph-bookmarks","MDN","MDN 适合连接 Web API、HTTP 行为与浏览器实现。"],["ph-terminal","命令行工具","curl、dig、ping 与 traceroute 分别观察应用、名称解析与路径层面。"],["ph-activity","公共测量平台","RIPE Atlas 等平台让个人实验扩展到全球视角。"]], sources: [["RFC Editor","https://www.rfc-editor.org/"],["MDN · HTTP","https://developer.mozilla.org/en-US/docs/Web/HTTP"],["RIPE Atlas","https://atlas.ripe.net/"]] }
    }
  },
  letters: {
    number: "05", name: "文字", en: "Letters", icon: "ph-text-aa",
    intro: "文字把声音、意义和视觉形式固定在可传递的媒介上。从刻痕到活字、从编码到屏幕，它一直在技术与文化之间变形。",
    note: "字符不是字形：编码决定身份，字体决定它在具体环境里的样子。",
    branches: {
      concepts: { label: "概念", kicker: "Sign, Sound & Meaning", title: "文字不是语言本身，而是语言的技术。", deck: "书写系统可以主要记录语音单位、音节或语素，也常混合多种机制。字形、字符与编码属于不同层次，混淆它们会造成排版与数据问题。", quote: "同一个字符可以拥有许多字形；相似的字形也可能代表不同字符。", facts: [["ph-chat-text","语言与文字","语言先于书写而存在；文字是记录语言的一组视觉约定。"],["ph-text-t","字符与字形","字符是抽象信息单位，字形是它在某种字体、尺寸和语境中的具体呈现。"],["ph-brackets-curly","编码","字符编码把抽象字符映射到可存储、交换和处理的数值。"],["ph-paragraph","排版","字距、行距、行长与层级共同影响阅读节奏，而不是单纯的装饰。"]], sources: [["Unicode · Writing Systems and Punctuation","https://www.unicode.org/versions/latest/ch06.pdf"],["Unicode · Technical Introduction","https://www.unicode.org/standard/principles.html"]] },
      experiments: { label: "实验", kicker: "See the System", title: "换一个字体、方向或宽度，观察阅读如何改变。", deck: "文字实验可以很小：比较等宽与比例字体、改变行长、混排不同脚本、检查双向文本。每次只改变一个变量，感受形式怎样影响理解。", quote: "排版实验的目标不是制造奇观，而是让信息关系更清楚。", facts: [["ph-columns","行长测试","过长的行增加回视成本；过短的行则频繁打断阅读节奏。"],["ph-arrows-horizontal","双向文本","阿拉伯文、希伯来文与拉丁字母混排时，需要算法决定视觉顺序。"],["ph-textbox","字形替换","连字、上下文替换和可变字体轴让同一字符序列拥有不同视觉表现。"],["ph-eye","可读性检查","对比度、字号、字重与屏幕环境共同决定文字是否容易辨认。"]], sources: [["W3C · Internationalization","https://www.w3.org/International/"],["Unicode Bidirectional Algorithm","https://unicode.org/reports/tr9/"]] },
      history: { label: "人物与历史", kicker: "Marks Across Media", title: "每一种媒介，都重新塑造文字。", deck: "泥板、竹简、纸张、活字、电报、打字机与计算机并非中性的容器。它们改变字符形态、传播速度，也改变谁能书写和阅读。", quote: "文字史既是符号史，也是材料、工具与制度的历史。", facts: [["ph-scroll","早期记录","刻写与压印需要适应材料阻力，符号形态因此与书写工具共同演化。"],["ph-newspaper","印刷复制","活字与印刷把文本复制变成可规模化流程，也推动拼写与版式趋于稳定。"],["ph-keyboard","机械输入","打字机和电报码把字符集合压缩到机器可处理的范围。"],["ph-globe","统一编码","Unicode 从 1990 年代起推动跨平台文本交换，并持续纳入现代与历史文字。"]], sources: [["Unicode · Supported Scripts","https://www.unicode.org/standard/supported.html"],["The Unicode Standard","https://www.unicode.org/standard/standard.html"]] },
      resources: { label: "资料", kicker: "Type & Encoding", title: "把一段文字，从源码追到屏幕。", deck: "真正理解数字文字，需要同时观察编码、字体回退、排版引擎与浏览器。资料分支把规范、字符数据库和实际调试工具连在一起。", quote: "当屏幕出现方框时，问题可能在字符、字体、编码或渲染链的任何一层。", facts: [["ph-database","字符数据库","Unicode Character Database 提供字符类别、脚本、方向性等机器可读属性。"],["ph-file-search","代码点查询","代码点不是字形编号；查询时同时记录名称、脚本与规范版本。"],["ph-fonts","字体回退","缺字时系统会寻找其他字体，结果可能造成字面大小与风格不一致。"],["ph-bug","调试文本","检查实际字节、规范化形式、CSS 字体栈与渲染引擎，而不是只截图猜测。"]], sources: [["Unicode Character Database","https://www.unicode.org/ucd/"],["W3C · Fonts","https://www.w3.org/Fonts/"]] }
    }
  }
};

const TOPIC_PATHS = {
  materials: "materials.html",
  mathematics: "mathematics.html",
  physics: "physics.html",
  networks: "networks.html",
  letters: "letters.html"
};

const NOTE_PATHS = {
  materials: "materials.html",
  mathematics: "math.html",
  physics: "physics.html",
  networks: "networks.html",
  letters: "letters.html"
};

const NOTE_TITLES = {
  materials: "高熵合金，与一条裂纹的选择。",
  mathematics: "从 Hessian，到晶格里的声子。",
  physics: "夸克从不单独出场。",
  networks: "洋葱有三层皮。",
  letters: "《野草》：地火与一台仪器。"
};

const BRANCH_ICONS = {
  concepts: "ph-lightbulb-filament",
  experiments: "ph-flask",
  history: "ph-user-focus",
  resources: "ph-folder-open"
};

function currentBase() {
  return document.body.dataset.topic ? "" : "topics/";
}

function setupLiquidIsland() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;
  const topicKey = document.body.dataset.topic;
  const isTopic = Boolean(topicKey && TOPICS[topicKey]);
  const root = isTopic ? "../" : "";
  const current = isTopic ? TOPICS[topicKey].name : "五展厅";
  const triggerId = "liquid-island-trigger";
  const sheetId = "liquid-control-center";

  topbar.classList.add("liquid-island");
  topbar.innerHTML = `<button class="island-trigger" id="${triggerId}" type="button" aria-expanded="false" aria-controls="${sheetId}" aria-label="打开液态玻璃控制中心"><span class="island-dot" aria-hidden="true"></span><span class="island-brand">格物志</span><span class="island-current" id="island-current">${current}</span><span class="island-chevron" aria-hidden="true"><i class="ph ph-caret-down"></i></span></button>`;

  const actions = isTopic ? `
    <a class="liquid-action" href="${root}index.html" data-sheet-close><i class="ph ph-house"></i><span>返回主页</span></a>
    <a class="liquid-action" href="#chapters" data-sheet-close><i class="ph ph-compass"></i><span>主题分支</span></a>
    <a class="liquid-action" href="${root}notes/${NOTE_PATHS[topicKey]}" data-sheet-close><i class="ph ph-book-open-text"></i><span>专题长读</span></a>
    <a class="liquid-action" href="#topic-switcher" data-sheet-close><i class="ph ph-squares-four"></i><span>切换展厅</span></a>
    <a class="liquid-action" href="${root}story.html" data-sheet-close><i class="ph ph-scroll"></i><span>滚动长卷</span></a>
    <button class="liquid-action" type="button" data-open-search data-sheet-close><i class="ph ph-magnifying-glass"></i><span>搜索知识</span></button>` : `
    <a class="liquid-action" href="#routes" data-sheet-close><i class="ph ph-door-open"></i><span>五大展厅</span></a>
    <a class="liquid-action" href="#glass-atlas" data-sheet-close><i class="ph ph-stack"></i><span>材质图鉴</span></a>
    <a class="liquid-action" href="#motion-lab" data-sheet-close><i class="ph ph-wave-sine"></i><span>弹簧实验</span></a>
    <a class="liquid-action" href="#deep-dives" data-sheet-close><i class="ph ph-book-open-text"></i><span>专题长读</span></a>
    <a class="liquid-action" href="story.html" data-sheet-close><i class="ph ph-scroll"></i><span>滚动长卷</span></a>
    <button class="liquid-action" type="button" data-open-search data-sheet-close><i class="ph ph-magnifying-glass"></i><span>搜索知识</span></button>`;

  document.body.insertAdjacentHTML("beforeend", `<div class="liquid-sheet-backdrop" id="liquid-sheet-backdrop" aria-hidden="true"></div><section class="liquid-sheet" id="${sheetId}" role="dialog" aria-modal="true" aria-labelledby="liquid-sheet-title" aria-hidden="true" inert><div class="liquid-sheet-head" data-drag-surface><h2 id="liquid-sheet-title">控制中心</h2><span>Liquid Glass Navigation</span></div><div class="liquid-sheet-grid">${actions}</div><p class="liquid-sheet-hint">点击岛屿或空白处收起 · 也可以向上轻甩面板</p></section>`);

  const trigger = document.querySelector(`#${triggerId}`);
  const sheet = document.querySelector(`#${sheetId}`);
  const backdrop = document.querySelector("#liquid-sheet-backdrop");
  let lastFocus = null;
  let dragStartY = 0;
  let dragLastY = 0;
  let dragLastTime = 0;
  let dragging = false;

  const setOpen = open => {
    document.body.classList.toggle("island-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    trigger.setAttribute("aria-label", open ? "收起液态玻璃控制中心" : "打开液态玻璃控制中心");
    sheet.setAttribute("aria-hidden", String(!open));
    backdrop.setAttribute("aria-hidden", String(!open));
    sheet.inert = !open;
    sheet.style.transform = "";
    sheet.style.opacity = "";
    if (open) {
      lastFocus = document.activeElement;
      setTimeout(() => sheet.querySelector(".liquid-action")?.focus(), 180);
    } else if (lastFocus instanceof HTMLElement && !lastFocus.matches("[data-sheet-close]")) {
      lastFocus.focus();
    }
  };

  trigger.addEventListener("click", () => setOpen(!document.body.classList.contains("island-open")));
  backdrop.addEventListener("click", () => setOpen(false));
  sheet.querySelectorAll("[data-sheet-close]").forEach(action => action.addEventListener("click", () => setOpen(false)));
  addEventListener("keydown", event => { if (event.key === "Escape" && document.body.classList.contains("island-open")) setOpen(false); });

  sheet.addEventListener("pointerdown", event => {
    if (!event.target.closest("[data-drag-surface]")) return;
    dragging = true;
    dragStartY = dragLastY = event.clientY;
    dragLastTime = performance.now();
    sheet.setPointerCapture?.(event.pointerId);
  });
  sheet.addEventListener("pointermove", event => {
    if (!dragging) return;
    const delta = Math.min(0, event.clientY - dragStartY);
    sheet.style.transform = `translate(-50%, ${delta}px) scale(${1 + delta / 1800})`;
    sheet.style.opacity = String(Math.max(.42, 1 + delta / 220));
    dragLastY = event.clientY;
    dragLastTime = performance.now();
  });
  const finishDrag = event => {
    if (!dragging) return;
    const delta = event.clientY - dragStartY;
    const elapsed = Math.max(16, performance.now() - dragLastTime);
    const velocity = (event.clientY - dragLastY) / elapsed;
    dragging = false;
    if (delta < -64 || velocity < -.45) setOpen(false);
    else { sheet.style.transform = ""; sheet.style.opacity = ""; }
  };
  sheet.addEventListener("pointerup", finishDrag);
  sheet.addEventListener("pointercancel", finishDrag);

  if (!isTopic) {
    const labels = [["routes", "五展厅"], ["glass-atlas", "材质图鉴"], ["motion-lab", "调参台"], ["deep-dives", "专题长读"], ["notes", "今日切片"]];
    let ticking = false;
    const updateLabel = () => {
      let label = "五展厅";
      labels.forEach(([id, name]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 170) label = name; });
      document.querySelector("#island-current").textContent = label;
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(updateLabel); } }, { passive: true });
  }
}

function updateProgress() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const progress = max > 0 ? scrollY / max : 0;
  document.documentElement.style.setProperty("--page-progress", progress.toFixed(4));
  document.querySelector(".topbar")?.classList.toggle("is-scrolled", scrollY > 20);
}

function setupPointerLight() {
  const hero = document.querySelector(".hero, .topic-hero");
  if (!hero || matchMedia("(pointer: coarse)").matches) return;
  hero.addEventListener("pointermove", event => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 2;
    hero.style.setProperty("--mx", x.toFixed(3));
    hero.style.setProperty("--my", y.toFixed(3));
  });
  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--mx", 0);
    hero.style.setProperty("--my", 0);
  });
}

function setupReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .14 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}

function setupSearch() {
  const dialog = document.querySelector("#search-dialog");
  const input = document.querySelector("#search-input");
  const results = document.querySelector("#search-results");
  if (!dialog || !input || !results) return;
  const noteRoot = document.body.dataset.topic ? "../notes/" : "notes/";
  const entries = Object.entries(TOPICS).flatMap(([key, topic]) => [
    { label: topic.name, meta: topic.en, href: `${currentBase()}${TOPIC_PATHS[key]}` },
    ...Object.entries(topic.branches).map(([branchKey, branch]) => ({ label: `${topic.name} · ${branch.label}`, meta: branch.title, href: `${currentBase()}${TOPIC_PATHS[key]}#${branchKey}` })),
    { label: `${topic.name} · 专题长读`, meta: NOTE_TITLES[key], href: `${noteRoot}${NOTE_PATHS[key]}` }
  ]);
  const render = value => {
    const query = value.trim().toLowerCase();
    const matches = entries.filter(item => !query || `${item.label}${item.meta}`.toLowerCase().includes(query)).slice(0, 9);
    results.innerHTML = matches.length ? matches.map(item => `<a class="search-result" href="${item.href}"><strong>${item.label}</strong><span>${item.meta}</span><i class="ph ph-arrow-up-right"></i></a>`).join("") : `<div class="search-empty">没有找到，试试“实验”“网络”或“文字”。</div>`;
  };
  const open = () => { dialog.classList.add("is-open"); dialog.setAttribute("aria-hidden", "false"); document.body.classList.add("menu-open"); render(""); setTimeout(() => input.focus(), 80); };
  const close = () => { dialog.classList.remove("is-open"); dialog.setAttribute("aria-hidden", "true"); document.body.classList.remove("menu-open"); };
  document.querySelectorAll("[data-open-search]").forEach(button => button.addEventListener("click", open));
  dialog.querySelector("[data-close-search]")?.addEventListener("click", close);
  dialog.addEventListener("click", event => { if (event.target === dialog) close(); });
  input.addEventListener("input", () => render(input.value));
  addEventListener("keydown", event => { if (event.key === "Escape") close(); if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); open(); } });
}

function setupPortals() {
  const portals = [...document.querySelectorAll(".portal")];
  const popover = document.querySelector("#branch-popover");
  if (!portals.length || !popover) return;
  let active = "physics";
  const render = key => {
    active = key;
    portals.forEach(portal => portal.classList.toggle("is-active", portal.dataset.topicTarget === key));
    const topic = TOPICS[key];
    popover.innerHTML = `<div class="branch-popover-head"><strong>${topic.name}的四条路径</strong><span>直接进入分支</span></div><div class="branch-links">${Object.entries(topic.branches).map(([branchKey, branch]) => `<a href="topics/${TOPIC_PATHS[key]}#${branchKey}"><i class="ph ${BRANCH_ICONS[branchKey]}"></i><span>${branch.label}</span><i class="ph ph-arrow-up-right"></i></a>`).join("")}</div>`;
    popover.classList.add("is-visible");
  };
  portals.forEach(portal => {
    portal.addEventListener("pointerenter", () => render(portal.dataset.topicTarget));
    portal.addEventListener("focus", () => render(portal.dataset.topicTarget));
  });
  render(active);
}

function renderTopic() {
  const key = document.body.dataset.topic;
  const topic = TOPICS[key];
  if (!topic) return;
  document.title = `${topic.name}｜格物志`;
  document.querySelectorAll("[data-topic-name]").forEach(el => el.textContent = topic.name);
  document.querySelectorAll("[data-topic-en]").forEach(el => el.textContent = topic.en);
  document.querySelectorAll("[data-topic-number]").forEach(el => el.textContent = topic.number);
  document.querySelectorAll("[data-topic-intro]").forEach(el => el.textContent = topic.intro);
  document.querySelectorAll("[data-topic-note]").forEach(el => el.textContent = topic.note);
  document.querySelectorAll("[data-topic-icon]").forEach(el => el.className = `ph ${topic.icon}`);

  const tabWrap = document.querySelector("#chapter-tabs");
  const panel = document.querySelector("#chapter-panel");
  if (!tabWrap || !panel) return;
  tabWrap.innerHTML = Object.entries(topic.branches).map(([branchKey, branch]) => `<button class="chapter-tab" id="chapter-tab-${branchKey}" type="button" role="tab" aria-controls="chapter-panel" aria-selected="false" tabindex="-1" data-branch="${branchKey}"><i class="ph ${BRANCH_ICONS[branchKey]}"></i><span>${branch.label}</span><i class="ph ph-arrow-right"></i></button>`).join("");

  const show = keyName => {
    const branch = topic.branches[keyName] || topic.branches.concepts;
    tabWrap.querySelectorAll(".chapter-tab").forEach(tab => {
      const selected = tab.dataset.branch === keyName;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `chapter-tab-${keyName}`);
    panel.innerHTML = `<div class="chapter-kicker">${branch.kicker}</div><h2>${branch.title}</h2><p class="chapter-deck">${branch.deck}</p><div class="chapter-rule"></div><div class="fact-grid">${branch.facts.map(fact => `<article class="fact"><i class="ph ${fact[0]}"></i><h3>${fact[1]}</h3><p>${fact[2]}</p></article>`).join("")}</div><blockquote class="chapter-quote">${branch.quote}</blockquote><div class="source-bar"><span>继续阅读</span>${branch.sources.map(source => `<a class="source-link" href="${source[1]}" target="_blank" rel="noreferrer">${source[0]} <i class="ph ph-arrow-up-right"></i></a>`).join("")}</div><a class="deep-dive-cta" href="../notes/${NOTE_PATHS[key]}"><i class="ph ph-book-open-text"></i><span><strong>进入 ${topic.name} 专题长读</strong><span>${NOTE_TITLES[key]}</span></span><i class="ph ph-arrow-up-right"></i></a>`;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      panel.animate([{ opacity: .25, transform: "translateY(12px)" }, { opacity: 1, transform: "none" }], { duration: 460, easing: "cubic-bezier(.22,1,.36,1)" });
    }
    const nextHash = `#${keyName}`;
    if (location.hash !== nextHash) history.replaceState(null, "", nextHash);
  };
  tabWrap.addEventListener("click", event => {
    const button = event.target.closest(".chapter-tab");
    if (!button) return;
    show(button.dataset.branch);
  });
  tabWrap.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const tabs = [...tabWrap.querySelectorAll(".chapter-tab")];
    const current = tabs.indexOf(document.activeElement);
    if (current < 0) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    show(tabs[next].dataset.branch);
  });
  const initial = location.hash.slice(1);
  show(topic.branches[initial] ? initial : "concepts");
  addEventListener("hashchange", () => { const branch = location.hash.slice(1); if (topic.branches[branch]) show(branch); });

  const switcher = document.querySelector("#topic-switcher-list");
  if (switcher) switcher.innerHTML = Object.entries(TOPICS).map(([topicKey, item]) => `<a href="${TOPIC_PATHS[topicKey]}" ${topicKey === key ? 'aria-current="page"' : ""}><small>${item.number} · ${item.en}</small><strong>${item.name}</strong></a>`).join("");
}

function setupMobileMenu() {
  const button = document.querySelector(".menu-button");
  if (!button) return;
  button.addEventListener("click", () => {
    const target = document.querySelector("#topic-switcher, #routes");
    target?.scrollIntoView({ behavior: "smooth" });
  });
}

function setupSpringLab() {
  const damping = document.querySelector("#damping-range");
  const response = document.querySelector("#response-range");
  const release = document.querySelector("#spring-release");
  const puck = document.querySelector("#spring-puck");
  const track = document.querySelector(".spring-track");
  if (!damping || !response || !release || !puck || !track) return;
  const dampingOut = document.querySelector("#damping-output");
  const responseOut = document.querySelector("#response-output");
  const status = document.querySelector("#spring-status");
  const overshootOut = document.querySelector("#spring-overshoot");
  const settleOut = document.querySelector("#spring-settle");
  let frame = 0;

  const updateOutputs = () => {
    dampingOut.value = Number(damping.value).toFixed(2);
    responseOut.value = `${Number(response.value).toFixed(2)}s`;
  };
  damping.addEventListener("input", updateOutputs);
  response.addEventListener("input", updateOutputs);
  updateOutputs();

  release.addEventListener("click", () => {
    cancelAnimationFrame(frame);
    const zeta = Number(damping.value);
    const duration = Number(response.value);
    const target = Math.max(0, track.clientWidth - puck.offsetWidth - 36);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      puck.style.transform = `translateX(${target}px)`;
      status.textContent = "已到达";
      overshootOut.textContent = "0px";
      settleOut.textContent = "即时";
      return;
    }
    let x = 0;
    let velocity = 0;
    let last = performance.now();
    let started = last;
    let maxX = 0;
    let stableSince = 0;
    const omega = 4.6 / duration;
    status.textContent = "运动中";
    overshootOut.textContent = "计算中";
    settleOut.textContent = "计算中";
    puck.style.transform = "translateX(0)";

    const step = now => {
      const dt = Math.min(.032, (now - last) / 1000);
      last = now;
      const acceleration = -omega * omega * (x - target) - 2 * zeta * omega * velocity;
      velocity += acceleration * dt;
      x += velocity * dt;
      maxX = Math.max(maxX, x);
      puck.style.transform = `translateX(${x.toFixed(2)}px)`;
      const settled = Math.abs(x - target) < .7 && Math.abs(velocity) < 4;
      stableSince = settled ? (stableSince || now) : 0;
      if ((stableSince && now - stableSince > 220) || now - started > 5200) {
        puck.style.transform = `translateX(${target}px)`;
        status.textContent = "已稳定";
        overshootOut.textContent = `${Math.max(0, maxX - target).toFixed(1)}px`;
        settleOut.textContent = `${((now - started) / 1000).toFixed(2)}s`;
        return;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
  });
}

addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
setupLiquidIsland();
setupPointerLight();
setupReveals();
setupSearch();
setupPortals();
renderTopic();
setupMobileMenu();
setupSpringLab();
