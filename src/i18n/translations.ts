import type { Locale } from './types';

type TranslationDict = Record<string, string>;

const zh: TranslationDict = {
  // Site
  'site.name': '柴火创客学园',
  'site.description': '柴火创客学园 · 从第一次点亮 LED，到独立交付智能系统',
  'site.skipLink': '跳到主要内容',

  // Nav
  'nav.home': '首页',
  'nav.courses': '学习体系',
  'nav.paths': '路径指南',
  'nav.contact': '合作咨询',
  'nav.about': '关于学园',
  'nav.chaihuo': '柴火创客空间',
  'nav.toggle': '打开或关闭导航菜单',
  'nav.brand': '柴火',
  'nav.homeAria': '柴火创客学园首页',
  'nav.pioneerBase': '先锋官 · 基地',
  'nav.map': '创客生态',
  'nav.ecosystem': '柴火生态',
  'nav.mcv': '柴火基地车',
  'chip.tabsAria': '在先锋官计划与基地计划之间切换',

  // Footer
  'footer.tagline':
    '柴火创客学园把真实硬件、场景项目和交付经验整理成 M0–M5 学习体系，帮助学习者从动手基础走向可交付系统。',
  'footer.contact': '联系我们',
  'footer.nav': '站内导航',
  'footer.social': '关注我们',
  'footer.social.wechat': '微信公众号',
  'footer.social.xiaohongshu': '小红书',
  'footer.copyright': '© {year} Chaihuo Makerspace Academy. All rights reserved.',
  'footer.chaihuo': '柴火创客空间',
  'footer.mcv': '柴火数字基地车',
  'footer.ecosystem': '柴火生态',
  'footer.ecosystemMap': '创客生态分布图',
  'footer.pioneer': '先锋官计划',
  'footer.base': '基地计划',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': '先锋官计划',
  'page.pioneer.description':
    '先锋官——在你的城市，做 AI 时代的点火人。柴火给你学习体系、教具和认证，你把 AI 创客教育带到你的城市。',
  'page.base.title': '基地计划',
  'page.base.description':
    '基地——城市里看得见的柴火。有固定场地、有持续运营意愿，柴火给你教具、学习体系、品牌背书和派单流量。',

  // Home Hero
  'home.hero.eyebrow': '柴火创客学园',
  'home.hero.title': '面向真实硬件与现场交付的',
  'home.hero.titleHighlight': '系统学习',
  'home.hero.subtitle': '柴火创客学园',
  'home.hero.description':
    '围绕 M0–M5 六个学习模块，把零基础智能硬件入门、设备互联、多模态 AI、自组网通信、边缘视觉与环境感知整理成可引入、可授课、可共建的学习体系。',
  'home.hero.ctaPrimary': '查看学习体系',
  'home.hero.ctaSecondary': '申请合作咨询',

  // Home sections
  'home.familiarObjects.title': '你能从这里做出来的东西',
  'home.familiarObjects.subtitle': '从第一天开始，用真实硬件做出看得见摸得着的作品',
  'home.outcomes.title': '从这里，你将获得什么',
  'home.outcomes.subtitle': '不只是技术，更是交付能力',
  'home.goalPaths.title': '三大学习方向',
  'home.goalPaths.subtitle': '无论你想用 AI 造物、造 AI 的物，还是交付解决方案，都能找到起点',
  'home.mapPreview.title': '学习矩阵预览',
  'home.mapPreview.subtitle': 'M0–M5 六大模块 × L1/L2/L3 三阶递进',

  // Home CTA
  'home.cta.eyebrow': '开启学习之旅',
  'home.cta.title': '准备好动手了吗？',
  'home.cta.description': '从零基础到独立交付，选择你的起点，立即开始。',
  'home.cta.primary': '查看学习体系',
  'home.cta.secondary': '联系我们',

  // Courses
  'courses.title': '学习体系',
  'courses.description': 'M0–M5 六大学习模块，覆盖从硬件入门到行业交付的完整技术栈',
  'courses.overview': '学习总览',
  'courses.matrix': '学习矩阵',
  'courses.tracks': '学习路径',
  'courses.cta.eyebrow': '找到你的方向',
  'courses.cta.title': '不确定从哪里开始？',
  'courses.cta.description': '查看三大学习方向，找到最适合你的学习路径',
  'courses.cta.primary': '查看路径指南',
  'courses.cta.secondary': '咨询学习顾问',

  // Course detail
  'course.audience': '适合人群',
  'course.capabilities': '你将获得的能力',
  'course.deliverables': '学习交付物',
  'course.formats': '教学形式',
  'course.kits': '硬件套件',
  'course.toolchain': '技术栈',
  'course.curriculum': '学习大纲',
  'course.teacherNotes': '讲师须知',
  'course.relatedTracks': '相关学习路径',
  'course.levels': '学习层级',
  'course.level.l1': '入门',
  'course.level.l2': '进阶',
  'course.level.l3': '实战',
  'course.backToCourses': '返回学习体系',
  'course.cta.primary': '咨询合作',
  'course.cta.secondary': '查看其他模块',

  // Paths
  'paths.title': '路径指南',
  'paths.description': '根据你的目标选择最适合的学习路径',
  'paths.cta.eyebrow': '选择你的方向',
  'paths.cta.title': '准备好开始了吗？',
  'paths.cta.description': '选择一条学习路径，开始你的 AIoT 实战之旅',
  'paths.cta.primary': '查看学习体系',
  'paths.cta.secondary': '合作咨询',

  // About
  'about.title': '关于学园',
  'about.description': '柴火创客学园是柴火创客生态的技术赋能平台',
  'about.hero.eyebrow': '关于我们',
  'about.hero.title': '柴火创客',
  'about.hero.titleHighlight': '学园',
  'about.hero.subtitle': 'Chaihuo Makerspace Academy',
  'about.hero.description':
    '背靠 Seeed Studio 与柴火创客空间，我们相信每个人都应该有能力\\"一个人也能上场\\"——把想法变成可交付的智能系统。柴火创客学园面向机构提供可引入、可授课、可共建的学习体系。',
  'about.ecosystem.title': '柴火创客生态',
  'about.ecosystem.subtitle': '三大支柱支撑创客教育体系',
  'about.values.title': '我们的理念',
  'about.values.subtitle': '做对的事，做难的事，做需要时间积累的事',
  'about.stats.title': '数据说',
  'about.stats.subtitle': '用数字说话',
  'about.cta.eyebrow': '加入我们',
  'about.cta.title': '想了解更多？',
  'about.cta.description': '联系我们，了解柴火创客学园的学习与合作机会',
  'about.cta.primary': '查看学习体系',
  'about.cta.secondary': '联系我们',

  // Contact
  'contact.title': '合作咨询',
  'contact.description': '高校、集成商、企业 —— 找到适合你的合作方式',
  'contact.hero.eyebrow': '合作咨询',
  'contact.hero.title': '找到适合你的',
  'contact.hero.titleHighlight': '合作方式',
  'contact.hero.description': '三种合作场景 × 四种销售形态，匹配你的需求',
  'contact.scenarios.title': '合作场景',
  'contact.scenarios.subtitle': '选择你的角色，找到最适合的合作方式',
  'contact.forms.title': '合作形态',
  'contact.forms.subtitle': '四种销售形态，从裸硬件到全托交付',
  'contact.faq.title': '常见问题',
  'contact.faq.subtitle': '关于合作的常见问题',
  'contact.cta.eyebrow': '开始合作',
  'contact.cta.title': '准备好合作了吗？',
  'contact.cta.description': '扫描二维码或联系我们，找到最适合你的合作方式',
  'contact.cta.primary': '联系我们',
  'contact.cta.secondary': '查看学习体系',

  // 404
  '404.title': '页面未找到',
  '404.description': '您访问的页面不存在或已被移动',
  '404.heading': '404',
  '404.message': '页面未找到',
  '404.submessage': '您访问的页面不存在或已被移动',
  '404.backHome': '返回首页',

  // Styleguide
  'styleguide.title': '设计系统',

  // Language switcher
  'lang.switcher': '切换语言',

  // Hero
  'hero.courseMap': '学习地图 · M0–M5',
  'hero.levels': 'L1 · L2 · L3',

  // Home
  'home.mapPreview.eyebrow': '学习结构',

  // About
  'about.ecosystem.eyebrow': '生态系统',

  // Courses
  'course.illustration': '插画',
  'course.coreHardwareHeading': 'Core Hardware / 核心硬件',
  'course.keyCapabilitiesHeading': 'KEY CAPABILITIES /',
  'courses.matrix.eyebrow': '学习矩阵',

  // Paths
  'paths.tracks.eyebrow': '学习组合',

  // Contact
  'contact.faq.eyebrow': 'FAQ',
  'contact.forms.eyebrow': '合作咨询',
  'contact.forms.qrAlt': '合作咨询二维码',

  // Scenario
  'scenario.formAria': '合作形态',

  // 404
  '404.offline': 'Offline',
  '404.terminal': 'ERROR_CODE: 0x404_ROUTER_LOST · CHAIHUO ACADEMY OS',

  // Footer
  'footer.since': 'since 2011',
};

const en: TranslationDict = {
  'site.name': 'Chaihuo Maker Academy',
  'site.description':
    'Chaihuo Maker Academy · From lighting your first LED to delivering intelligent systems independently',
  'site.skipLink': 'Skip to main content',

  'nav.home': 'Home',
  'nav.courses': 'Courses',
  'nav.paths': 'Learning Paths',
  'nav.contact': 'Partnership',
  'nav.about': 'About',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Toggle navigation menu',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Chaihuo Maker Academy Home',
  'nav.pioneerBase': 'Pioneer · Base',
  'nav.map': 'Maker Ecosystem',
  'nav.ecosystem': 'Chaihuo Ecosystem',
  'nav.mcv': 'Chaihuo Mobile Base (MCV)',
  'chip.tabsAria': 'Switch between the Pioneer and Base programs',

  'footer.tagline':
    'Chaihuo Maker Academy organizes real hardware, real-world projects, and delivery experience into the M0–M5 course system, helping learners progress from hands-on fundamentals to deliverable systems.',
  'footer.contact': 'Contact Us',
  'footer.nav': 'Site Navigation',
  'footer.social': 'Follow Us',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Makerspace Academy. All rights reserved.',
  'footer.chaihuo': 'Chaihuo Makerspace',
  'footer.mcv': 'Chaihuo Mobile Base Vehicle',
  'footer.ecosystem': 'Chaihuo Ecosystem',
  'footer.ecosystemMap': 'Maker Ecosystem Map',
  'footer.pioneer': 'Pioneer Program',
  'footer.base': 'Base Program',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Pioneer Program',
  'page.pioneer.description':
    'Pioneer Program — In your city, be the spark of the AI era. Chaihuo provides courses, kits, and certification so you can bring AI maker education to your city.',
  'page.base.title': 'Base Program',
  'page.base.description':
    'Base Program — Chaihuo you can see in the city. With a fixed venue and commitment to ongoing operation, Chaihuo provides kits, courses, brand backing, and work-order flow.',

  'home.hero.eyebrow': 'Chaihuo Maker Academy',
  'home.hero.title': 'Real Hardware, Real Delivery —',
  'home.hero.titleHighlight': 'Systematic Courses',
  'home.hero.subtitle': 'Chaihuo Maker Academy',
  'home.hero.description':
    'Six course modules (M0–M5) covering zero-to-hero hardware fundamentals, device interconnectivity, multimodal AI, mesh networking, edge vision, and environmental sensing — organized into a teachable, adoptable, and co-buildable curriculum.',
  'home.hero.ctaPrimary': 'Explore Courses',
  'home.hero.ctaSecondary': 'Partner With Us',

  'home.familiarObjects.title': 'What You Can Build Here',
  'home.familiarObjects.subtitle': 'From day one, create tangible projects with real hardware',
  'home.outcomes.title': 'What You Will Gain',
  'home.outcomes.subtitle': 'Beyond technology — real delivery capability',
  'home.goalPaths.title': 'Three Learning Tracks',
  'home.goalPaths.subtitle':
    'Whether you want to build with AI, build AI products, or deliver solutions — find your starting point',
  'home.mapPreview.title': 'Course Matrix Preview',
  'home.mapPreview.subtitle': '6 Modules (M0–M5) × 3 Levels (L1/L2/L3)',

  'home.cta.eyebrow': 'Start Your Journey',
  'home.cta.title': 'Ready to get hands-on?',
  'home.cta.description':
    'From zero to independent delivery — choose your starting point and begin now.',
  'home.cta.primary': 'Explore Courses',
  'home.cta.secondary': 'Contact Us',

  'courses.title': 'Course System',
  'courses.description':
    'Six course modules (M0–M5) covering the complete tech stack from hardware basics to industry delivery',
  'courses.overview': 'Course Overview',
  'courses.matrix': 'Course Matrix',
  'courses.tracks': 'Learning Paths',
  'courses.cta.eyebrow': 'Find Your Direction',
  'courses.cta.title': 'Not sure where to start?',
  'courses.cta.description': 'Explore the three learning tracks and find the best path for you',
  'courses.cta.primary': 'View Learning Paths',
  'courses.cta.secondary': 'Consult an Advisor',

  'course.audience': 'Target Audience',
  'course.capabilities': 'Capabilities You Will Gain',
  'course.deliverables': 'Course Deliverables',
  'course.formats': 'Teaching Formats',
  'course.kits': 'Hardware Kits',
  'course.toolchain': 'Tech Stack',
  'course.curriculum': 'Curriculum',
  'course.teacherNotes': 'Instructor Notes',
  'course.relatedTracks': 'Related Learning Paths',
  'course.levels': 'Course Levels',
  'course.level.l1': 'Beginner',
  'course.level.l2': 'Intermediate',
  'course.level.l3': 'Advanced',
  'course.backToCourses': 'Back to Courses',
  'course.cta.primary': 'Partner With Us',
  'course.cta.secondary': 'View Other Courses',

  'paths.title': 'Learning Paths',
  'paths.description': 'Find the best learning path based on your goals',
  'paths.cta.eyebrow': 'Choose Your Path',
  'paths.cta.title': 'Ready to start?',
  'paths.cta.description': 'Choose a learning path and begin your AIoT hands-on journey',
  'paths.cta.primary': 'Explore Courses',
  'paths.cta.secondary': 'Partner With Us',

  'about.title': 'About the Academy',
  'about.description':
    'Chaihuo Maker Academy is the technology empowerment platform of the Chaihuo Maker ecosystem',
  'about.hero.eyebrow': 'About Us',
  'about.hero.title': 'Chaihuo Maker',
  'about.hero.titleHighlight': 'Academy',
  'about.hero.subtitle': 'Chaihuo Makerspace Academy',
  'about.hero.description':
    'Backed by Seeed Studio and Chaihuo Makerspace, we believe everyone should have the ability to "go solo" — turning ideas into deliverable intelligent systems.',
  'about.ecosystem.title': 'Chaihuo Maker Ecosystem',
  'about.ecosystem.subtitle': 'Three pillars supporting maker education',
  'about.values.title': 'Our Philosophy',
  'about.values.subtitle': 'Do the right thing, do the hard thing, do what takes time to build',
  'about.stats.title': 'By the Numbers',
  'about.stats.subtitle': 'Let the numbers speak',
  'about.cta.eyebrow': 'Join Us',
  'about.cta.title': 'Want to learn more?',
  'about.cta.description':
    'Contact us to learn about Chaihuo Maker Academy courses and partnership opportunities',
  'about.cta.primary': 'Explore Courses',
  'about.cta.secondary': 'Contact Us',

  'contact.title': 'Partnership',
  'contact.description':
    'Universities, integrators, enterprises — find the right collaboration model for you',
  'contact.hero.eyebrow': 'Partnership Inquiry',
  'contact.hero.title': 'Find Your',
  'contact.hero.titleHighlight': 'Collaboration Model',
  'contact.hero.description':
    '3 partnership scenarios × 4 course delivery formats, tailored to your needs',
  'contact.scenarios.title': 'Partnership Scenarios',
  'contact.scenarios.subtitle': 'Choose your role and find the best collaboration approach',
  'contact.forms.title': 'Collaboration Formats',
  'contact.forms.subtitle':
    'Four course delivery formats, from bare hardware to full-service delivery',
  'contact.faq.title': 'FAQ',
  'contact.faq.subtitle': 'Common questions about course partnerships',
  'contact.cta.eyebrow': 'Start Collaborating',
  'contact.cta.title': 'Ready to partner?',
  'contact.cta.description':
    'Scan the QR code or contact us to find the best collaboration model for you',
  'contact.cta.primary': 'Contact Us',
  'contact.cta.secondary': 'Explore Courses',

  '404.title': 'Page Not Found',
  '404.description': 'The page you are looking for does not exist or has been moved',
  '404.heading': '404',
  '404.message': 'Page Not Found',
  '404.submessage': 'The page you are looking for does not exist or has been moved',
  '404.backHome': 'Back to Home',

  'styleguide.title': 'Design System',

  'lang.switcher': 'Switch Language',

  // Hero
  'hero.courseMap': 'Course Map · M0–M5',
  'hero.levels': 'L1 · L2 · L3',

  // Home
  'home.mapPreview.eyebrow': 'Course Structure',

  // About
  'about.ecosystem.eyebrow': 'Ecosystem',

  // Courses
  'course.illustration': 'Illustration',
  'course.coreHardwareHeading': 'Core Hardware',
  'course.keyCapabilitiesHeading': 'Key Capabilities',
  'courses.matrix.eyebrow': 'Course Matrix',

  // Paths
  'paths.tracks.eyebrow': 'Course Packages',

  // Contact
  'contact.faq.eyebrow': 'FAQ',
  'contact.forms.eyebrow': 'Partnership Inquiry',
  'contact.forms.qrAlt': 'Course Partnership QR Code',

  // Scenario
  'scenario.formAria': 'Partnership Format',

  // 404
  '404.offline': 'Offline',
  '404.terminal': 'ERROR_CODE: 0x404_ROUTER_LOST · CHAIHUO ACADEMY OS',

  // Footer
  'footer.since': 'since 2011',
};

const ja: TranslationDict = {
  'site.name': '柴火創客学院',
  'site.description': '柴火創客学院 · 初めてのLED点灯から、インテリジェントシステムの独立納品まで',
  'site.skipLink': 'メインコンテンツへスキップ',

  'nav.home': 'ホーム',
  'nav.courses': 'コース体系',
  'nav.paths': '学習ガイド',
  'nav.contact': 'パートナーシップ',
  'nav.about': '学院概要',
  'nav.chaihuo': '柴火創客空間',
  'nav.toggle': 'ナビゲーションメニューを切り替え',
  'nav.brand': '柴火',
  'nav.homeAria': '柴火創客学院ホーム',
  'nav.pioneerBase': 'パイオニア · 拠点',
  'nav.map': 'メーカーエコシステム',
  'nav.ecosystem': '柴火エコシステム',
  'nav.mcv': '柴火基地車',
  'chip.tabsAria': 'パイオニア計画と拠点計画を切り替え',

  'footer.tagline':
    '柴火創客学院は、実際のハードウェア、現場プロジェクト、納品経験をM0〜M5のコース体系に整理し、学習者が実践的な基礎から納品可能なシステムへと進めるよう支援します。',
  'footer.contact': 'お問い合わせ',
  'footer.nav': 'サイトナビゲーション',
  'footer.social': 'フォローする',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': '小紅書',
  'footer.copyright': '© {year} Chaihuo Makerspace Academy. All rights reserved.',
  'footer.chaihuo': '柴火創客空間',
  'footer.mcv': '柴火デジタル基地車',
  'footer.ecosystem': '柴火エコシステム',
  'footer.ecosystemMap': 'メーカーエコシステムマップ',
  'footer.pioneer': 'パイオニア計画',
  'footer.base': '拠点計画',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'パイオニア計画',
  'page.pioneer.description':
    'パイオニア計画——あなたの街で、AI時代の火を灯す人に。柴火がコース・教材・認定を提供します。',
  'page.base.title': '拠点計画',
  'page.base.description':
    '拠点計画——街に現れる柴火。固定の場と継続運営の意志があれば、柴火が教材・コース・ブランド・受注フローを提供します。',

  'home.hero.eyebrow': '柴火創客学院',
  'home.hero.title': '実機による現場納品のための',
  'home.hero.titleHighlight': '体系的なコース',
  'home.hero.subtitle': '柴火創客学院',
  'home.hero.description':
    'M0〜M5の6つのコースモジュールで、ゼロからのハードウェア入門、デバイス連携、マルチモーダルAI、メッシュネットワーク、エッジビジョン、環境センシングを、導入・授業・共同構築可能なカリキュラムに体系化。',
  'home.hero.ctaPrimary': 'コースを見る',
  'home.hero.ctaSecondary': 'パートナーシップを申し込む',

  'home.familiarObjects.title': 'ここで作れるもの',
  'home.familiarObjects.subtitle': '初日から実際のハードウェアで形のある作品を作る',
  'home.outcomes.title': 'ここで得られるもの',
  'home.outcomes.subtitle': '技術だけでなく、真の納品力を',
  'home.goalPaths.title': '3つの学習トラック',
  'home.goalPaths.subtitle':
    'AIで創る、AIを創る、ソリューションを納品する — あなたの目標に合った道を見つけよう',
  'home.mapPreview.title': 'コースマトリックス',
  'home.mapPreview.subtitle': '6モジュール（M0〜M5）× 3レベル（L1/L2/L3）',

  'home.cta.eyebrow': '学習の旅を始めよう',
  'home.cta.title': '準備はいいですか？',
  'home.cta.description': 'ゼロから独立納品まで、あなたの出発点を選んで今すぐ始めましょう。',
  'home.cta.primary': 'コースを見る',
  'home.cta.secondary': 'お問い合わせ',

  'courses.title': 'コース体系',
  'courses.description':
    'ハードウェア基礎から業界納品までの完全な技術スタックをカバーする6つのコースモジュール（M0〜M5）',
  'courses.overview': 'コース概要',
  'courses.matrix': 'コースマトリックス',
  'courses.tracks': '学習パス',
  'courses.cta.eyebrow': '方向性を見つける',
  'courses.cta.title': 'どこから始めればいいか分からない？',
  'courses.cta.description': '3つの学習トラックを探索して、最適なパスを見つけましょう',
  'courses.cta.primary': '学習ガイドを見る',
  'courses.cta.secondary': 'アドバイザーに相談',

  'course.audience': '対象者',
  'course.capabilities': '習得できる能力',
  'course.deliverables': 'コース納品物',
  'course.formats': '授業形式',
  'course.kits': 'ハードウェアキット',
  'course.toolchain': '技術スタック',
  'course.curriculum': 'カリキュラム',
  'course.teacherNotes': '講師向けノート',
  'course.relatedTracks': '関連学習パス',
  'course.levels': 'コースレベル',
  'course.level.l1': '初級',
  'course.level.l2': '中級',
  'course.level.l3': '実践',
  'course.backToCourses': 'コース一覧に戻る',
  'course.cta.primary': 'パートナーシップ',
  'course.cta.secondary': '他のコースを見る',

  'paths.title': '学習ガイド',
  'paths.description': 'あなたの目標に基づいて最適な学習パスを見つける',
  'paths.cta.eyebrow': 'パスを選択',
  'paths.cta.title': '始める準備はいいですか？',
  'paths.cta.description': '学習パスを選んで、AIoT実践の旅を始めましょう',
  'paths.cta.primary': 'コースを見る',
  'paths.cta.secondary': 'パートナーシップ',

  'about.title': '学院について',
  'about.description': '柴火創客学院は柴火創客エコシステムの技術力強化プラットフォームです',
  'about.hero.eyebrow': '私たちについて',
  'about.hero.title': '柴火創客',
  'about.hero.titleHighlight': '学院',
  'about.hero.subtitle': 'Chaihuo Makerspace Academy',
  'about.hero.description':
    'Seeed Studioと柴火創客空間を背景に、私たちは誰もが「一人で現場に立てる」能力を持つべきだと信じています — アイデアを納品可能なインテリジェントシステムに変える力を。',
  'about.ecosystem.title': '柴火創客エコシステム',
  'about.ecosystem.subtitle': '創客教育を支える3つの柱',
  'about.values.title': '私たちの理念',
  'about.values.subtitle': '正しいことを、難しいことを、時間をかけて積み上げることを',
  'about.stats.title': '数字で見る',
  'about.stats.subtitle': '数字が物語る',
  'about.cta.eyebrow': '参加する',
  'about.cta.title': 'もっと詳しく知りたいですか？',
  'about.cta.description':
    '柴火創客学院のコースとパートナーシップの機会についてお問い合わせください',
  'about.cta.primary': 'コースを見る',
  'about.cta.secondary': 'お問い合わせ',

  'contact.title': 'パートナーシップ',
  'contact.description': '大学、インテグレーター、企業 — あなたに合った連携モデルを見つける',
  'contact.hero.eyebrow': 'パートナーシップ inquiry',
  'contact.hero.title': 'あなたに合った',
  'contact.hero.titleHighlight': '連携モデル',
  'contact.hero.description': '3つの連携シナリオ × 4つのコース提供形態、あなたのニーズに合わせて',
  'contact.scenarios.title': '連携シナリオ',
  'contact.scenarios.subtitle': 'あなたの役割を選び、最適な連携方法を見つける',
  'contact.forms.title': '連携形態',
  'contact.forms.subtitle': 'ベアハードウェアからフルサービス納品までの4つのコース提供形態',
  'contact.faq.title': 'よくある質問',
  'contact.faq.subtitle': 'コースパートナーシップに関するよくある質問',
  'contact.cta.eyebrow': '連携を始める',
  'contact.cta.title': 'パートナーシップの準備はできましたか？',
  'contact.cta.description': 'QRコードをスキャンするか、お問い合わせください',
  'contact.cta.primary': 'お問い合わせ',
  'contact.cta.secondary': 'コースを見る',

  '404.title': 'ページが見つかりません',
  '404.description': 'お探しのページは存在しないか、移動されました',
  '404.heading': '404',
  '404.message': 'ページが見つかりません',
  '404.submessage': 'お探しのページは存在しないか、移動されました',
  '404.backHome': 'ホームに戻る',

  'styleguide.title': 'デザインシステム',

  'lang.switcher': '言語切替',

  // Hero
  'hero.courseMap': 'コースマップ · M0–M5',
  'hero.levels': 'L1 · L2 · L3',

  // Home
  'home.mapPreview.eyebrow': 'コース構成',

  // About
  'about.ecosystem.eyebrow': 'エコシステム',

  // Courses
  'course.illustration': 'イラスト',
  'course.coreHardwareHeading': 'コアハードウェア',
  'course.keyCapabilitiesHeading': 'キーケイパビリティ',
  'courses.matrix.eyebrow': 'コースマトリックス',

  // Paths
  'paths.tracks.eyebrow': 'コースパッケージ',

  // Contact
  'contact.faq.eyebrow': 'FAQ',
  'contact.forms.eyebrow': 'パートナーシップ inquiry',
  'contact.forms.qrAlt': 'コースパートナーシップQRコード',

  // Scenario
  'scenario.formAria': 'パートナーシップ形態',

  // 404
  '404.offline': 'Offline',
  '404.terminal': 'ERROR_CODE: 0x404_ROUTER_LOST · CHAIHUO ACADEMY OS',

  // Footer
  'footer.since': 'since 2011',
};

const es: TranslationDict = {
  'site.name': 'Academia Chaihuo Maker',
  'site.description':
    'Academia Chaihuo Maker · Desde encender tu primer LED hasta entregar sistemas inteligentes de forma independiente',
  'site.skipLink': 'Saltar al contenido principal',

  'nav.home': 'Inicio',
  'nav.courses': 'Cursos',
  'nav.paths': 'Rutas de Aprendizaje',
  'nav.contact': 'Colaboración',
  'nav.about': 'Acerca de',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Alternar menú de navegación',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Inicio de Academia Chaihuo Maker',
  'nav.pioneerBase': 'Pioneros · Bases',
  'nav.map': 'Ecosistema Maker',
  'nav.ecosystem': 'Ecosistema Chaihuo',
  'nav.mcv': 'Vehículo Base Móvil Chaihuo',
  'chip.tabsAria': 'Alternar entre el programa de Pioneros y el de Bases',

  'footer.tagline':
    'La Academia Chaihuo Maker organiza hardware real, proyectos del mundo real y experiencia de entrega en el sistema de cursos M0–M5, ayudando a los estudiantes a progresar desde fundamentos prácticos hasta sistemas entregables.',
  'footer.contact': 'Contáctanos',
  'footer.nav': 'Navegación del Sitio',
  'footer.social': 'Síguenos',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Makerspace Academy. Todos los derechos reservados.',
  'footer.chaihuo': 'Chaihuo Makerspace',
  'footer.mcv': 'Vehículo Base Móvil Chaihuo',
  'footer.ecosystem': 'Ecosistema Chaihuo',
  'footer.ecosystemMap': 'Mapa del Ecosistema Maker',
  'footer.pioneer': 'Programa de Pioneros',
  'footer.base': 'Programa de Bases',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Programa de Pioneros',
  'page.pioneer.description':
    'Programa de Pioneros — Sé la chispa de la era de la IA en tu ciudad. Chaihuo te da cursos, kits y certificación para llevar la educación maker a tu ciudad.',
  'page.base.title': 'Programa de Bases',
  'page.base.description':
    'Programa de Bases — Chaihuo visible en tu ciudad. Con un espacio fijo y voluntad de operación continua, Chaihuo aporta kits, cursos, marca y pedidos.',

  'home.hero.eyebrow': 'Academia Chaihuo Maker',
  'home.hero.title': 'Hardware Real, Entrega Real —',
  'home.hero.titleHighlight': 'Cursos Sistemáticos',
  'home.hero.subtitle': 'Academia Chaihuo Maker',
  'home.hero.description':
    'Seis módulos de curso (M0–M5) que cubren desde fundamentos de hardware, interconectividad de dispositivos, IA multimodal, redes mesh, visión edge y detección ambiental — organizados en un plan de estudios enseñable, adoptable y co-construible.',
  'home.hero.ctaPrimary': 'Explorar Cursos',
  'home.hero.ctaSecondary': 'Colabora con Nosotros',

  'home.familiarObjects.title': 'Lo Que Puedes Construir Aquí',
  'home.familiarObjects.subtitle':
    'Desde el primer día, crea proyectos tangibles con hardware real',
  'home.outcomes.title': 'Lo Que Obtendrás',
  'home.outcomes.subtitle': 'Más allá de la tecnología — capacidad real de entrega',
  'home.goalPaths.title': 'Tres Rutas de Aprendizaje',
  'home.goalPaths.subtitle':
    'Ya sea que quieras construir con IA, construir productos de IA o entregar soluciones — encuentra tu punto de partida',
  'home.mapPreview.title': 'Vista Previa de la Matriz de Cursos',
  'home.mapPreview.subtitle': '6 Módulos (M0–M5) × 3 Niveles (L1/L2/L3)',

  'home.cta.eyebrow': 'Comienza tu Viaje',
  'home.cta.title': '¿Listo para empezar?',
  'home.cta.description':
    'Desde cero hasta la entrega independiente — elige tu punto de partida y comienza ahora.',
  'home.cta.primary': 'Explorar Cursos',
  'home.cta.secondary': 'Contáctanos',

  'courses.title': 'Sistema de Cursos',
  'courses.description':
    'Seis módulos de curso (M0–M5) que cubren la pila tecnológica completa desde fundamentos de hardware hasta entrega industrial',
  'courses.overview': 'Resumen del Curso',
  'courses.matrix': 'Matriz de Cursos',
  'courses.tracks': 'Rutas de Aprendizaje',
  'courses.cta.eyebrow': 'Encuentra tu Dirección',
  'courses.cta.title': '¿No sabes por dónde empezar?',
  'courses.cta.description':
    'Explora las tres rutas de aprendizaje y encuentra el mejor camino para ti',
  'courses.cta.primary': 'Ver Rutas de Aprendizaje',
  'courses.cta.secondary': 'Consultar a un Asesor',

  'course.audience': 'Público Objetivo',
  'course.capabilities': 'Capacidades que Obtendrás',
  'course.deliverables': 'Entregables del Curso',
  'course.formats': 'Formatos de Enseñanza',
  'course.kits': 'Kits de Hardware',
  'course.toolchain': 'Stack Tecnológico',
  'course.curriculum': 'Plan de Estudios',
  'course.teacherNotes': 'Notas para Instructores',
  'course.relatedTracks': 'Rutas de Aprendizaje Relacionadas',
  'course.levels': 'Niveles del Curso',
  'course.level.l1': 'Principiante',
  'course.level.l2': 'Intermedio',
  'course.level.l3': 'Avanzado',
  'course.backToCourses': 'Volver a Cursos',
  'course.cta.primary': 'Colabora con Nosotros',
  'course.cta.secondary': 'Ver Otros Cursos',

  'paths.title': 'Rutas de Aprendizaje',
  'paths.description': 'Encuentra la mejor ruta de aprendizaje según tus objetivos',
  'paths.cta.eyebrow': 'Elige tu Ruta',
  'paths.cta.title': '¿Listo para comenzar?',
  'paths.cta.description': 'Elige una ruta de aprendizaje y comienza tu viaje práctico en AIoT',
  'paths.cta.primary': 'Explorar Cursos',
  'paths.cta.secondary': 'Colabora con Nosotros',

  'about.title': 'Acerca de la Academia',
  'about.description':
    'La Academia Chaihuo Maker es la plataforma de empoderamiento tecnológico del ecosistema Chaihuo Maker',
  'about.hero.eyebrow': 'Sobre Nosotros',
  'about.hero.title': 'Chaihuo Maker',
  'about.hero.titleHighlight': 'Academy',
  'about.hero.subtitle': 'Chaihuo Makerspace Academy',
  'about.hero.description':
    'Respaldados por Seeed Studio y Chaihuo Makerspace, creemos que todos deberían tener la capacidad de "ir en solitario" — convirtiendo ideas en sistemas inteligentes entregables.',
  'about.ecosystem.title': 'Ecosistema Chaihuo Maker',
  'about.ecosystem.subtitle': 'Tres pilares que sostienen la educación maker',
  'about.values.title': 'Nuestra Filosofía',
  'about.values.subtitle':
    'Hacer lo correcto, hacer lo difícil, hacer lo que requiere tiempo para construir',
  'about.stats.title': 'En Números',
  'about.stats.subtitle': 'Deja que los números hablen',
  'about.cta.eyebrow': 'Únete',
  'about.cta.title': '¿Quieres saber más?',
  'about.cta.description':
    'Contáctanos para conocer los cursos y oportunidades de colaboración de la Academia Chaihuo Maker',
  'about.cta.primary': 'Explorar Cursos',
  'about.cta.secondary': 'Contáctanos',

  'contact.title': 'Colaboración',
  'contact.description':
    'Universidades, integradores, empresas — encuentra el modelo de colaboración adecuado para ti',
  'contact.hero.eyebrow': 'Consulta de Colaboración',
  'contact.hero.title': 'Encuentra tu',
  'contact.hero.titleHighlight': 'Modelo de Colaboración',
  'contact.hero.description':
    '3 escenarios de colaboración × 4 formatos de entrega de cursos, adaptados a tus necesidades',
  'contact.scenarios.title': 'Escenarios de Colaboración',
  'contact.scenarios.subtitle': 'Elige tu rol y encuentra el mejor enfoque de colaboración',
  'contact.forms.title': 'Formatos de Colaboración',
  'contact.forms.subtitle':
    'Cuatro formatos de entrega de cursos, desde hardware básico hasta entrega de servicio completo',
  'contact.faq.title': 'Preguntas Frecuentes',
  'contact.faq.subtitle': 'Preguntas comunes sobre colaboraciones de cursos',
  'contact.cta.eyebrow': 'Comienza a Colaborar',
  'contact.cta.title': '¿Listo para colaborar?',
  'contact.cta.description':
    'Escanea el código QR o contáctanos para encontrar el mejor modelo de colaboración para ti',
  'contact.cta.primary': 'Contáctanos',
  'contact.cta.secondary': 'Explorar Cursos',

  '404.title': 'Página No Encontrada',
  '404.description': 'La página que buscas no existe o ha sido movida',
  '404.heading': '404',
  '404.message': 'Página No Encontrada',
  '404.submessage': 'La página que buscas no existe o ha sido movida',
  '404.backHome': 'Volver al Inicio',

  'styleguide.title': 'Sistema de Diseño',

  'lang.switcher': 'Cambiar Idioma',

  // Hero
  'hero.courseMap': 'Mapa de Cursos · M0–M5',
  'hero.levels': 'L1 · L2 · L3',

  // Home
  'home.mapPreview.eyebrow': 'Estructura del Curso',

  // About
  'about.ecosystem.eyebrow': 'Ecosistema',

  // Courses
  'course.illustration': 'Ilustración',
  'course.coreHardwareHeading': 'Hardware Principal',
  'course.keyCapabilitiesHeading': 'Capacidades Clave',
  'courses.matrix.eyebrow': 'Matriz de Cursos',

  // Paths
  'paths.tracks.eyebrow': 'Paquetes de Cursos',

  // Contact
  'contact.faq.eyebrow': 'FAQ',
  'contact.forms.eyebrow': 'Consulta de Colaboración',
  'contact.forms.qrAlt': 'Código QR de Colaboración',

  // Scenario
  'scenario.formAria': 'Formato de Colaboración',

  // 404
  '404.offline': 'Offline',
  '404.terminal': 'ERROR_CODE: 0x404_ROUTER_LOST · CHAIHUO ACADEMY OS',

  // Footer
  'footer.since': 'since 2011',
};

const ptBR: TranslationDict = {
  'site.name': 'Academia Chaihuo Maker',
  'site.description':
    'Academia Chaihuo Maker · Do primeiro LED aceso à entrega independente de sistemas inteligentes',
  'site.skipLink': 'Pular para o conteúdo principal',

  'nav.home': 'Início',
  'nav.courses': 'Cursos',
  'nav.paths': 'Trilhas de Aprendizado',
  'nav.contact': 'Parceria',
  'nav.about': 'Sobre',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Alternar menu de navegação',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Início da Academia Chaihuo Maker',
  'nav.pioneerBase': 'Pioneiros · Bases',
  'nav.map': 'Ecossistema Maker',
  'nav.ecosystem': 'Ecossistema Chaihuo',
  'nav.mcv': 'Veículo Base Móvel Chaihuo',
  'chip.tabsAria': 'Alternar entre o Programa de Pioneiros e o de Bases',

  'footer.tagline':
    'A Academia Chaihuo Maker organiza hardware real, projetos do mundo real e experiência de entrega no sistema de cursos M0–M5, ajudando os alunos a progredir dos fundamentos práticos até sistemas entregáveis.',
  'footer.contact': 'Contate-nos',
  'footer.nav': 'Navegação do Site',
  'footer.social': 'Siga-nos',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Makerspace Academy. Todos os direitos reservados.',
  'footer.chaihuo': 'Chaihuo Makerspace',
  'footer.mcv': 'Veículo Base Móvel Chaihuo',
  'footer.ecosystem': 'Ecossistema Chaihuo',
  'footer.ecosystemMap': 'Mapa do Ecossistema Maker',
  'footer.pioneer': 'Programa de Pioneiros',
  'footer.base': 'Programa de Bases',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Programa de Pioneiros',
  'page.pioneer.description':
    'Programa de Pioneiros — Seja a faísca da era da IA na sua cidade. A Chaihuo oferece cursos, kits e certificação para levar a educação maker à sua cidade.',
  'page.base.title': 'Programa de Bases',
  'page.base.description':
    'Programa de Bases — Chaihuo visível na cidade. Com espaço fixo e vontade de operação contínua, a Chaihuo fornece kits, cursos, marca e demanda.',

  'home.hero.eyebrow': 'Academia Chaihuo Maker',
  'home.hero.title': 'Hardware Real, Entrega Real —',
  'home.hero.titleHighlight': 'Cursos Sistemáticos',
  'home.hero.subtitle': 'Academia Chaihuo Maker',
  'home.hero.description':
    'Seis módulos de curso (M0–M5) cobrindo do zero aos fundamentos de hardware, interconectividade de dispositivos, IA multimodal, redes mesh, visão de borda e sensoriamento ambiental — organizados em um currículo ensinável, adotável e co-construível.',
  'home.hero.ctaPrimary': 'Explorar Cursos',
  'home.hero.ctaSecondary': 'Seja Nosso Parceiro',

  'home.familiarObjects.title': 'O Que Você Pode Construir Aqui',
  'home.familiarObjects.subtitle':
    'Desde o primeiro dia, crie projetos tangíveis com hardware real',
  'home.outcomes.title': 'O Que Você Vai Ganhar',
  'home.outcomes.subtitle': 'Além da tecnologia — capacidade real de entrega',
  'home.goalPaths.title': 'Três Trilhas de Aprendizado',
  'home.goalPaths.subtitle':
    'Seja para construir com IA, construir produtos de IA ou entregar soluções — encontre seu ponto de partida',
  'home.mapPreview.title': 'Prévia da Matriz de Cursos',
  'home.mapPreview.subtitle': '6 Módulos (M0–M5) × 3 Níveis (L1/L2/L3)',

  'home.cta.eyebrow': 'Comece Sua Jornada',
  'home.cta.title': 'Pronto para colocar a mão na massa?',
  'home.cta.description':
    'Do zero à entrega independente — escolha seu ponto de partida e comece agora.',
  'home.cta.primary': 'Explorar Cursos',
  'home.cta.secondary': 'Contate-nos',

  'courses.title': 'Sistema de Cursos',
  'courses.description':
    'Seis módulos de curso (M0–M5) cobrindo a stack tecnológica completa, dos fundamentos de hardware à entrega industrial',
  'courses.overview': 'Visão Geral do Curso',
  'courses.matrix': 'Matriz de Cursos',
  'courses.tracks': 'Trilhas de Aprendizado',
  'courses.cta.eyebrow': 'Encontre Sua Direção',
  'courses.cta.title': 'Não sabe por onde começar?',
  'courses.cta.description':
    'Explore as três trilhas de aprendizado e encontre o melhor caminho para você',
  'courses.cta.primary': 'Ver Trilhas de Aprendizado',
  'courses.cta.secondary': 'Consultar um Orientador',

  'course.audience': 'Público-Alvo',
  'course.capabilities': 'Capacidades que Você Vai Adquirir',
  'course.deliverables': 'Entregáveis do Curso',
  'course.formats': 'Formatos de Ensino',
  'course.kits': 'Kits de Hardware',
  'course.toolchain': 'Stack Tecnológica',
  'course.curriculum': 'Currículo',
  'course.teacherNotes': 'Notas para Instrutores',
  'course.relatedTracks': 'Trilhas de Aprendizado Relacionadas',
  'course.levels': 'Níveis do Curso',
  'course.level.l1': 'Iniciante',
  'course.level.l2': 'Intermediário',
  'course.level.l3': 'Avançado',
  'course.backToCourses': 'Voltar para Cursos',
  'course.cta.primary': 'Seja Nosso Parceiro',
  'course.cta.secondary': 'Ver Outros Cursos',

  'paths.title': 'Trilhas de Aprendizado',
  'paths.description': 'Encontre a melhor trilha de aprendizado com base nos seus objetivos',
  'paths.cta.eyebrow': 'Escolha Sua Trilha',
  'paths.cta.title': 'Pronto para começar?',
  'paths.cta.description': 'Escolha uma trilha de aprendizado e comece sua jornada prática em AIoT',
  'paths.cta.primary': 'Explorar Cursos',
  'paths.cta.secondary': 'Seja Nosso Parceiro',

  'about.title': 'Sobre a Academia',
  'about.description':
    'A Academia Chaihuo Maker é a plataforma de capacitação tecnológica do ecossistema Chaihuo Maker',
  'about.hero.eyebrow': 'Sobre Nós',
  'about.hero.title': 'Chaihuo Maker',
  'about.hero.titleHighlight': 'Academy',
  'about.hero.subtitle': 'Chaihuo Makerspace Academy',
  'about.hero.description':
    'Apoiados pela Seeed Studio e pelo Chaihuo Makerspace, acreditamos que todos devem ter a capacidade de "ir sozinho" — transformando ideias em sistemas inteligentes entregáveis.',
  'about.ecosystem.title': 'Ecossistema Chaihuo Maker',
  'about.ecosystem.subtitle': 'Três pilares que sustentam a educação maker',
  'about.values.title': 'Nossa Filosofia',
  'about.values.subtitle': 'Fazer o certo, fazer o difícil, fazer o que leva tempo para construir',
  'about.stats.title': 'Em Números',
  'about.stats.subtitle': 'Deixe os números falarem',
  'about.cta.eyebrow': 'Junte-se a Nós',
  'about.cta.title': 'Quer saber mais?',
  'about.cta.description':
    'Entre em contato para conhecer os cursos e oportunidades de parceria da Academia Chaihuo Maker',
  'about.cta.primary': 'Explorar Cursos',
  'about.cta.secondary': 'Contate-nos',

  'contact.title': 'Parceria',
  'contact.description':
    'Universidades, integradores, empresas — encontre o modelo de colaboração ideal para você',
  'contact.hero.eyebrow': 'Consulta de Parceria',
  'contact.hero.title': 'Encontre Seu',
  'contact.hero.titleHighlight': 'Modelo de Colaboração',
  'contact.hero.description':
    '3 cenários de parceria × 4 formatos de entrega de cursos, adaptados às suas necessidades',
  'contact.scenarios.title': 'Cenários de Parceria',
  'contact.scenarios.subtitle': 'Escolha seu papel e encontre a melhor abordagem de colaboração',
  'contact.forms.title': 'Formatos de Colaboração',
  'contact.forms.subtitle':
    'Quatro formatos de entrega de cursos, do hardware básico à entrega de serviço completo',
  'contact.faq.title': 'Perguntas Frequentes',
  'contact.faq.subtitle': 'Perguntas comuns sobre parcerias de cursos',
  'contact.cta.eyebrow': 'Comece a Colaborar',
  'contact.cta.title': 'Pronto para fazer parceria?',
  'contact.cta.description':
    'Escaneie o QR code ou entre em contato para encontrar o melhor modelo de colaboração para você',
  'contact.cta.primary': 'Contate-nos',
  'contact.cta.secondary': 'Explorar Cursos',

  '404.title': 'Página Não Encontrada',
  '404.description': 'A página que você procura não existe ou foi movida',
  '404.heading': '404',
  '404.message': 'Página Não Encontrada',
  '404.submessage': 'A página que você procura não existe ou foi movida',
  '404.backHome': 'Voltar ao Início',

  'styleguide.title': 'Sistema de Design',

  'lang.switcher': 'Mudar Idioma',

  // Hero
  'hero.courseMap': 'Mapa de Cursos · M0–M5',
  'hero.levels': 'L1 · L2 · L3',

  // Home
  'home.mapPreview.eyebrow': 'Estrutura do Curso',

  // About
  'about.ecosystem.eyebrow': 'Ecossistema',

  // Courses
  'course.illustration': 'Ilustração',
  'course.coreHardwareHeading': 'Hardware Principal',
  'course.keyCapabilitiesHeading': 'Competências-Chave',
  'courses.matrix.eyebrow': 'Matriz de Cursos',

  // Paths
  'paths.tracks.eyebrow': 'Pacotes de Cursos',

  // Contact
  'contact.faq.eyebrow': 'FAQ',
  'contact.forms.eyebrow': 'Consulta de Parceria',
  'contact.forms.qrAlt': 'QR Code de Parceria',

  // Scenario
  'scenario.formAria': 'Formato de Parceria',

  // 404
  '404.offline': 'Offline',
  '404.terminal': 'ERROR_CODE: 0x404_ROUTER_LOST · CHAIHUO ACADEMY OS',

  // Footer
  'footer.since': 'since 2011',
};

const dictionaries: Record<Locale, TranslationDict> = {
  'zh-CN': zh,
  en,
  ja,
  es,
  'pt-BR': ptBR,
};

export function t(locale: Locale, key: string, params?: Record<string, string>): string {
  const dict = dictionaries[locale];
  let value = dict[key];
  if (value === undefined) {
    value = dictionaries['zh-CN'][key] ?? key;
  }
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(`{${k}}`, v);
    }
  }
  return value;
}
