import type { Locale } from './types';

type TranslationDict = Record<string, string>;

const zh: TranslationDict = {
  // Site
  'site.name': '柴火创客学院',
  'site.description': '柴火创客学院 · 从第一次点亮 LED，到独立交付智能系统',
  'site.skipLink': '跳到主要内容',

  // Nav
  'nav.home': '首页',
  'nav.courses': '学习体系',
  'nav.contact': '合作咨询',
  'nav.about': '关于学院',
  'nav.chaihuo': '柴火创客空间',
  'nav.toggle': '打开或关闭导航菜单',
  'nav.brand': '柴火',
  'nav.homeAria': '柴火创客学院首页',
  // Footer
  'footer.tagline':
    '柴火创客学院把真实硬件、场景项目和交付经验整理成 M0–M6 学习体系，帮助学习者从动手基础走向可交付系统。',
  'nav.pioneerBase': '先锋官 · 基地',
  'nav.ecosystem': '柴火生态',
  'nav.mcv': '柴火基地车',
  'chip.tabsAria': '在先锋官计划与基地计划之间切换',
  'footer.contact': '联系我们',
  'footer.nav': '站内导航',
  'footer.social': '关注我们',
  'footer.social.wechat': '微信公众号',
  'footer.social.xiaohongshu': '小红书',
  'footer.copyright': '© {year} Chaihuo Maker Academy. All rights reserved.',
  'footer.ecosystem': '柴火生态',
  'footer.ecosystemMap': '创客生态分布图',
  'footer.pioneer': '先锋官计划',
  'footer.base': '基地计划',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': '先锋官计划',
  'page.pioneer.description':
    '先锋官是柴火在各地的教学合作者：掌握柴火课程后，在本地组织授课、交付工作坊或拓展合作。柴火提供套件、逐课时讲义和认证支持，常年开放申请。',
  'page.base.title': '基地计划',
  'page.base.description':
    '面向拥有固定教学场地与日常运营能力的机构。首批 10 家基地已签约交付教具，目前常年开放新基地申请。柴火提供教学套件、成套讲义与委托派单，基地在本地常态开课。',

  // Home Hero
  'home.hero.title': '七门智能硬件课，\n套件、教案、讲师一次配齐',
  'home.hero.description':
    'M0 到 M6，每门课都配真实在售硬件、逐课时教案和验收标准。学校拿去开课，集成商拿去练交付团队。M0 零基础可进，其余六门按方向独立选学。',

  // Courses
  'courses.title': '学习体系',
  'courses.description':
    '七个模块（M0–M6），每个模块分 L1 / L2 / L3 三档深度。每行是一个模块，每列是一档深度；格子里写的是这一档的课名、天数和学完的产出。',

  // Course detail
  'course.complianceBoundary': '能力边界与合规约束',
  'course.compliance.applicable': '适用范围',
  'course.compliance.notApplicable': '不适用范围',

  // About
  'about.title': '关于学院',
  'about.hero.title': '柴火创客学院',
  'about.hero.description':
    '我们培养人掌握新技术整合能力，不提供解决方案。课程从柴火创客空间十多年的项目和社区经验里整理出来，面向院校、集成商和企业。学院隶属于柴火创客空间，空间由 Seeed 创办——课上用的硬件就是这个体系自己在售的产品，按 SKU 就能买到。',

  // Contact
  'contact.title': '合作咨询',
  'contact.hero.title': '三类机构，四种合作形态',
  'contact.hero.description':
    '根据开课人数、目标模块与配套硬件核算预算，不设单一标价。发邮件说明机构类型与预期排期，教研团队在 3 个工作日内答复具体方案与清单。',

  // 404
  '404.title': '页面未找到',
  '404.heading': '404',
  '404.message': '页面未找到',
  '404.submessage': '您访问的页面不存在或已被移动',
  '404.backHome': '返回首页',

  // Language switcher
  'lang.switcher': '切换语言',

  // Footer
  'footer.since': 'since 2011',
  'cta.contact': '合作咨询',
  'cta.courses': '查看学习体系',
  'cta.about': '关于学院',
  'course.viewSyllabus': '看大纲与排课',
  'course.direction': '所属方向',
  'course.prerequisite': '学员基础',
  'course.equipmentTitle': '设备与工具链',
  'course.hardwareDetails': '展开 {n} 件设备的图文清单',
  'course.kitsDetails': '展开 {n} 套子套件与备料池',
  'course.syllabusTitle': '大纲与排课',
  'course.syllabusSubtitle': '共 {n} 个教学模块。先看有哪几种排课形态，完整大纲在下面展开。',
  'course.syllabusDetails': '展开 {n} 个教学模块的完整大纲与各形态日程',
  'about.history.title': '从一间创客空间到七门课',
  'contact.mailCta': '发邮件联系',
};

const en: TranslationDict = {
  'site.name': 'Chaihuo Maker Academy',
  'site.description':
    'Chaihuo Maker Academy · From lighting your first LED to delivering intelligent systems independently',
  'site.skipLink': 'Skip to main content',

  'nav.home': 'Home',
  'nav.courses': 'Courses',
  'nav.contact': 'Partnership',
  'nav.about': 'About',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Toggle navigation menu',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Chaihuo Maker Academy Home',
  'nav.pioneerBase': 'Pioneer · Base',
  'nav.ecosystem': 'Chaihuo Ecosystem',
  'nav.mcv': 'Chaihuo Mobile Base Vehicle',
  'chip.tabsAria': 'Switch between the Pioneer and Base programs',

  'footer.tagline':
    'Chaihuo Maker Academy organizes real hardware, real-world projects, and delivery experience into the M0–M6 learning system, helping learners progress from hands-on fundamentals to deliverable systems.',
  'footer.contact': 'Contact Us',
  'footer.nav': 'Site Navigation',
  'footer.social': 'Follow Us',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Maker Academy. All rights reserved.',
  'footer.ecosystem': 'Chaihuo Ecosystem',
  'footer.ecosystemMap': 'Maker Ecosystem Map',
  'footer.pioneer': 'Pioneer Program',
  'footer.base': 'Base Program',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Pioneer Program',
  'page.pioneer.description':
    'Pioneers are Igniters recruited by Chaihuo: they learn the courses, then teach and promote them in their own city, carrying the maker-education flame to more places. Chaihuo provides the course pack, teaching kits and certification.',
  'page.base.title': 'Base Program',
  'page.base.description':
    'Bases are Chaihuo-certified local teaching sites: Chaihuo provides teaching kits, courses and dispatched work; the Base runs classes locally and gives Pioneers a place to teach.',

  'home.hero.title':
    'Seven smart-hardware courses,\neach with its kit, lesson plans and instructors',
  'home.hero.description':
    'From M0 to M6, every course comes with real, commercially available hardware, lesson-by-lesson teaching plans and acceptance criteria. Schools use them to run classes; integrators use them to train delivery teams. M0 needs no prior experience, and the other six can be taken independently by direction.',

  'courses.title': 'Learning System',
  'courses.description':
    "Seven modules (M0–M6), each offered at three depths: L1, L2 and L3. Each row is a module and each column a depth; a cell gives that level's course title, length in days and what learners produce.",

  'course.complianceBoundary': 'Scope Boundaries & Compliance',
  'course.compliance.applicable': 'In Scope',
  'course.compliance.notApplicable': 'Out of Scope',

  'about.title': 'About the Academy',
  'about.hero.title': 'Chaihuo Maker Academy',
  'about.hero.description':
    'We train people to integrate new technology; we do not sell solutions. The courses are distilled from more than a decade of projects and community work at Chaihuo Makerspace and are offered to schools, integrators and enterprises. The Academy is part of Chaihuo Makerspace, which was founded by Seeed — the hardware used in class is that ecosystem\u2019s own product line, orderable by SKU.',

  'contact.title': 'Partnership',
  'contact.hero.title': 'Three kinds of organisation, four ways to work together',
  'contact.hero.description':
    'Pricing depends on class format and size, so there is no list price. Email us what kind of organisation you are and which module you want, and we will send a proposal within 3 working days.',

  '404.title': 'Page Not Found',
  '404.heading': '404',
  '404.message': 'Page Not Found',
  '404.submessage': 'The page you are looking for does not exist or has been moved',
  '404.backHome': 'Back to Home',

  'lang.switcher': 'Switch Language',

  // Footer
  'footer.since': 'since 2011',
  'cta.contact': 'Partnership Inquiry',
  'cta.courses': 'View Courses',
  'cta.about': 'About the Academy',
  'course.viewSyllabus': 'View syllabus & formats',
  'course.direction': 'Direction',
  'course.prerequisite': 'Prerequisites',
  'course.equipmentTitle': 'Hardware and toolchain',
  'course.hardwareDetails': 'Show the illustrated list of {n} devices',
  'course.kitsDetails': 'Show the {n} sub-kits and the parts pool',
  'course.syllabusTitle': 'Syllabus and formats',
  'course.syllabusSubtitle':
    '{n} teaching units in total. The delivery formats come first; the full syllabus expands below.',
  'course.syllabusDetails': 'Show the full syllabus of {n} units and the schedule for each format',
  'about.history.title': 'From a makerspace to seven courses',
  'contact.mailCta': 'Email us',
};

const ja: TranslationDict = {
  'site.name': '柴火創客学院',
  'site.description': '柴火創客学院 · 初めてのLED点灯から、インテリジェントシステムの独立納品まで',
  'site.skipLink': 'メインコンテンツへスキップ',

  'nav.home': 'ホーム',
  'nav.courses': '学習体系',
  'nav.contact': 'パートナーシップ',
  'nav.about': '学院概要',
  'nav.chaihuo': '柴火創客空間',
  'nav.toggle': 'ナビゲーションメニューを切り替え',
  'nav.brand': '柴火',
  'nav.homeAria': '柴火創客学院ホーム',
  'nav.pioneerBase': 'パイオニア · 拠点',
  'nav.ecosystem': '柴火エコシステム',
  'nav.mcv': '柴火基地車',
  'chip.tabsAria': 'パイオニア計画と拠点計画を切り替え',

  'footer.tagline':
    '柴火創客学院は、実際のハードウェア、現場プロジェクト、納品経験をM0〜M6の学習体系に整理し、学習者が実践的な基礎から納品可能なシステムへと進めるよう支援します。',
  'footer.contact': 'お問い合わせ',
  'footer.nav': 'サイトナビゲーション',
  'footer.social': 'フォローする',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': '小紅書',
  'footer.copyright': '© {year} Chaihuo Maker Academy. All rights reserved.',
  'footer.ecosystem': '柴火エコシステム',
  'footer.ecosystemMap': 'メーカーエコシステムマップ',
  'footer.pioneer': 'パイオニア計画',
  'footer.base': '拠点計画',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'パイオニア計画',
  'page.pioneer.description':
    'パイオニアは柴火が募集する点火人です。講座を学び、自分の都市で開講・普及を行い、メーカー教育の火をより多くの場所へ届けます。柴火は講座パック、教具、認定を提供します。',
  'page.base.title': '拠点計画',
  'page.base.description':
    '拠点は柴火が認定する地域の授業拠点です。柴火は教具、講座、本部からの案件紹介を提供し、拠点は地域で開講するとともに、パイオニアに授業の場を提供します。',

  'home.hero.title': 'スマートハードウェア7講座。\nキット・教案・講師をまとめて提供',
  'home.hero.description':
    'M0からM6まで、どの講座にも現行販売中の実機ハードウェア、授業ごとの教案、検収基準が付きます。学校は授業の開講に、インテグレーターは納品チームの育成に使えます。M0は未経験から受講でき、残り6講座は分野ごとに単独で選べます。',

  'courses.title': '学習体系',
  'courses.description':
    '7つのモジュール（M0〜M6）を、それぞれL1・L2・L3の3段階の深さで提供します。行がモジュール、列が深さで、各セルにはそのレベルの講座名、日数、修了時の成果物を記載しています。',

  'course.complianceBoundary': '能力範囲とコンプライアンス',
  'course.compliance.applicable': '適用範囲',
  'course.compliance.notApplicable': '不適用範囲',

  'about.title': '学院について',
  'about.hero.title': '柴火創客学院',
  'about.hero.description':
    '私たちは新しい技術を統合する力を持つ人材を育てます。ソリューションを提供する事業ではありません。講座は柴火創客空間が10年以上積み重ねてきたプロジェクトとコミュニティの経験を整理して作り、学校、インテグレーター、企業向けに提供しています。学院は柴火創客空間に属し、空間はSeeedによって設立されました。授業で使うハードウェアはその製品体系の現行製品で、SKUで購入できます。',

  'contact.title': 'パートナーシップ',
  'contact.hero.title': '3種類の機関、4つの協業形態',
  'contact.hero.description':
    '料金はクラス形態と規模に応じてお見積りするため、定価は設けていません。機関の種類と希望するモジュールをメールでお知らせいただければ、3営業日以内にご提案をお送りします。',

  '404.title': 'ページが見つかりません',
  '404.heading': '404',
  '404.message': 'ページが見つかりません',
  '404.submessage': 'お探しのページは存在しないか、移動されました',
  '404.backHome': 'ホームに戻る',

  'lang.switcher': '言語切替',

  // Footer
  'footer.since': 'since 2011',
  'cta.contact': '協業のご相談',
  'cta.courses': '学習体系を見る',
  'cta.about': '学院について',
  'course.viewSyllabus': 'シラバスと開講形態を見る',
  'course.direction': '方向',
  'course.prerequisite': '受講の前提',
  'course.equipmentTitle': '機器とツールチェーン',
  'course.hardwareDetails': '機器{n}点の写真付きリストを表示',
  'course.kitsDetails': 'サブキット{n}種と部品プールを表示',
  'course.syllabusTitle': 'シラバスと開講形態',
  'course.syllabusSubtitle':
    '教育ユニットは全{n}個。まず開講形態を示し、シラバス全体は下で展開できます。',
  'course.syllabusDetails': '全{n}ユニットのシラバスと形態別の日程を表示',
  'about.history.title': '一つのメイカースペースから7つの講座へ',
  'contact.mailCta': 'メールで相談する',
};

const es: TranslationDict = {
  'site.name': 'Academia Chaihuo Maker',
  'site.description':
    'Academia Chaihuo Maker · Desde encender tu primer LED hasta entregar sistemas inteligentes de forma independiente',
  'site.skipLink': 'Saltar al contenido principal',

  'nav.home': 'Inicio',
  'nav.courses': 'Cursos',
  'nav.contact': 'Colaboración',
  'nav.about': 'Acerca de',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Alternar menú de navegación',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Inicio de Academia Chaihuo Maker',
  'nav.pioneerBase': 'Pioneros · Bases',
  'nav.ecosystem': 'Ecosistema Chaihuo',
  'nav.mcv': 'Vehículo Base Móvil Chaihuo',
  'chip.tabsAria': 'Alternar entre el programa de Pioneros y el de Bases',

  'footer.tagline':
    'La Academia Chaihuo Maker organiza hardware real, proyectos del mundo real y experiencia de entrega en el sistema de aprendizaje M0–M6, ayudando a los estudiantes a progresar desde fundamentos prácticos hasta sistemas entregables.',
  'footer.contact': 'Contáctanos',
  'footer.nav': 'Navegación del Sitio',
  'footer.social': 'Síguenos',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Maker Academy. Todos los derechos reservados.',
  'footer.ecosystem': 'Ecosistema Chaihuo',
  'footer.ecosystemMap': 'Mapa del Ecosistema Maker',
  'footer.pioneer': 'Programa de Pioneros',
  'footer.base': 'Programa de Bases',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Programa de Pioneros',
  'page.pioneer.description':
    'Los Pioneros son Ignitores que recluta Chaihuo: aprenden los cursos y después los imparten y promueven en su ciudad, llevando la llama de la educación maker a más lugares. Chaihuo aporta el paquete de cursos, los kits didácticos y la certificación.',
  'page.base.title': 'Programa de Bases',
  'page.base.description':
    'Las Bases son puntos de enseñanza locales certificados por Chaihuo: Chaihuo aporta kits didácticos, cursos y encargos derivados; la Base imparte clases en su zona y ofrece a los Pioneros un lugar donde enseñar.',

  'home.hero.title':
    'Siete cursos de hardware inteligente,\ncon kit, planes de clase e instructores',
  'home.hero.description':
    'De M0 a M6, cada curso incluye hardware real en catálogo, planes de clase sesión por sesión y criterios de aceptación. Los centros educativos los usan para impartir clases; los integradores, para formar a sus equipos de entrega. M0 no requiere experiencia previa y los otros seis se pueden cursar por separado según la orientación.',

  'courses.title': 'Sistema de Aprendizaje',
  'courses.description':
    'Siete módulos (M0–M6), cada uno en tres niveles de profundidad: L1, L2 y L3. Cada fila es un módulo y cada columna un nivel; la celda indica el título del curso, su duración en días y lo que produce el alumnado.',

  'course.complianceBoundary': 'Límites de Alcance y Cumplimiento',
  'course.compliance.applicable': 'Alcance',
  'course.compliance.notApplicable': 'Fuera de Alcance',

  'about.title': 'Acerca de la Academia',
  'about.hero.title': 'Academia Chaihuo Maker',
  'about.hero.description':
    'Formamos a personas para que sepan integrar nuevas tecnologías; no vendemos soluciones. Los cursos recogen más de una década de proyectos y trabajo comunitario en Chaihuo Makerspace y están dirigidos a centros educativos, integradores y empresas. La Academia forma parte de Chaihuo Makerspace, fundado por Seeed: el hardware que se usa en clase pertenece a la propia línea de productos de ese ecosistema y se puede pedir por SKU.',

  'contact.title': 'Colaboración',
  'contact.hero.title': 'Tres tipos de organización, cuatro formas de colaborar',
  'contact.hero.description':
    'El precio depende del formato y del tamaño de la clase, por lo que no hay tarifa fija. Escríbanos indicando qué tipo de organización es y qué módulo le interesa, y le enviaremos una propuesta en 3 días hábiles.',

  '404.title': 'Página No Encontrada',
  '404.heading': '404',
  '404.message': 'Página No Encontrada',
  '404.submessage': 'La página que buscas no existe o ha sido movida',
  '404.backHome': 'Volver al Inicio',

  'lang.switcher': 'Cambiar Idioma',

  // Footer
  'footer.since': 'since 2011',
  'cta.contact': 'Consultar colaboración',
  'cta.courses': 'Ver sistema curricular',
  'cta.about': 'Sobre la academia',
  'course.viewSyllabus': 'Ver temario y formatos',
  'course.direction': 'Orientación',
  'course.prerequisite': 'Requisitos previos',
  'course.equipmentTitle': 'Hardware y cadena de herramientas',
  'course.hardwareDetails': 'Ver la lista ilustrada de {n} dispositivos',
  'course.kitsDetails': 'Ver los {n} subkits y el fondo de componentes',
  'course.syllabusTitle': 'Temario y formatos',
  'course.syllabusSubtitle':
    '{n} unidades didácticas en total. Primero, los formatos de impartición; el temario completo se despliega abajo.',
  'course.syllabusDetails':
    'Ver el temario completo de {n} unidades y el calendario de cada formato',
  'about.history.title': 'De un makerspace a siete cursos',
  'contact.mailCta': 'Escríbanos',
};

const ptBR: TranslationDict = {
  'site.name': 'Academia Chaihuo Maker',
  'site.description':
    'Academia Chaihuo Maker · Do primeiro LED aceso à entrega independente de sistemas inteligentes',
  'site.skipLink': 'Pular para o conteúdo principal',

  'nav.home': 'Início',
  'nav.courses': 'Cursos',
  'nav.contact': 'Parceria',
  'nav.about': 'Sobre',
  'nav.chaihuo': 'Chaihuo Makerspace',
  'nav.toggle': 'Alternar menu de navegação',
  'nav.brand': 'Chaihuo',
  'nav.homeAria': 'Início da Academia Chaihuo Maker',
  'nav.pioneerBase': 'Pioneiros · Bases',
  'nav.ecosystem': 'Ecossistema Chaihuo',
  'nav.mcv': 'Veículo Base Móvel Chaihuo',
  'chip.tabsAria': 'Alternar entre o Programa de Pioneiros e o de Bases',

  'footer.tagline':
    'A Academia Chaihuo Maker organiza hardware real, projetos do mundo real e experiência de entrega no sistema de aprendizagem M0–M6, ajudando os alunos a progredir dos fundamentos práticos até sistemas entregáveis.',
  'footer.contact': 'Contate-nos',
  'footer.nav': 'Navegação do Site',
  'footer.social': 'Siga-nos',
  'footer.social.wechat': 'WeChat',
  'footer.social.xiaohongshu': 'Xiaohongshu',
  'footer.copyright': '© {year} Chaihuo Maker Academy. Todos os direitos reservados.',
  'footer.ecosystem': 'Ecossistema Chaihuo',
  'footer.ecosystemMap': 'Mapa do Ecossistema Maker',
  'footer.pioneer': 'Programa de Pioneiros',
  'footer.base': 'Programa de Bases',
  'footer.seeed': 'Seeed Studio',
  'page.pioneer.title': 'Programa de Pioneiros',
  'page.pioneer.description':
    'Os Pioneiros são Ignitores recrutados pela Chaihuo: aprendem os cursos e depois os ministram e divulgam na própria cidade, levando a chama da educação maker a mais lugares. A Chaihuo fornece o pacote de cursos, os kits didáticos e a certificação.',
  'page.base.title': 'Programa de Bases',
  'page.base.description':
    'As Bases são pontos de ensino locais certificados pela Chaihuo: a Chaihuo fornece kits didáticos, cursos e demandas encaminhadas; a Base ministra aulas na região e oferece aos Pioneiros um lugar para ensinar.',

  'home.hero.title': 'Sete cursos de hardware inteligente,\ncom kit, planos de aula e instrutores',
  'home.hero.description':
    'De M0 a M6, cada curso vem com hardware real em catálogo, planos de aula sessão por sessão e critérios de aceitação. Escolas usam para abrir turmas; integradores, para treinar equipes de entrega. O M0 não exige experiência prévia e os outros seis podem ser feitos separadamente, conforme a direção.',

  'courses.title': 'Sistema de Aprendizagem',
  'courses.description':
    'Sete módulos (M0–M6), cada um em três níveis de profundidade: L1, L2 e L3. Cada linha é um módulo e cada coluna um nível; a célula traz o título do curso, a duração em dias e o que os alunos produzem.',

  'course.complianceBoundary': 'Limites de Escopo e Conformidade',
  'course.compliance.applicable': 'No Escopo',
  'course.compliance.notApplicable': 'Fora do Escopo',

  'about.title': 'Sobre a Academia',
  'about.hero.title': 'Academia Chaihuo Maker',
  'about.hero.description':
    'Formamos pessoas para integrar novas tecnologias; não vendemos soluções. Os cursos reúnem mais de uma década de projetos e trabalho comunitário no Chaihuo Makerspace e são oferecidos a escolas, integradores e empresas. A Academia faz parte do Chaihuo Makerspace, fundado pela Seeed — o hardware usado em aula é da própria linha de produtos desse ecossistema e pode ser pedido por SKU.',

  'contact.title': 'Parceria',
  'contact.hero.title': 'Três tipos de organização, quatro formas de parceria',
  'contact.hero.description':
    'O preço depende do formato e do tamanho da turma, por isso não há tabela fixa. Envie um e-mail dizendo que tipo de organização você é e qual módulo deseja, e enviaremos uma proposta em até 3 dias úteis.',

  '404.title': 'Página Não Encontrada',
  '404.heading': '404',
  '404.message': 'Página Não Encontrada',
  '404.submessage': 'A página que você procura não existe ou foi movida',
  '404.backHome': 'Voltar ao Início',

  'lang.switcher': 'Mudar Idioma',

  // Footer
  'footer.since': 'since 2011',
  'cta.contact': 'Consultar parceria',
  'cta.courses': 'Ver grade curricular',
  'cta.about': 'Sobre a Academia',
  'course.viewSyllabus': 'Ver programa e formatos',
  'course.direction': 'Direção',
  'course.prerequisite': 'Pré-requisitos',
  'course.equipmentTitle': 'Hardware e cadeia de ferramentas',
  'course.hardwareDetails': 'Ver a lista ilustrada de {n} dispositivos',
  'course.kitsDetails': 'Ver os {n} subkits e o conjunto de peças',
  'course.syllabusTitle': 'Programa e formatos',
  'course.syllabusSubtitle':
    '{n} unidades de ensino no total. Primeiro, os formatos de oferta; o programa completo se expande abaixo.',
  'course.syllabusDetails':
    'Ver o programa completo de {n} unidades e o cronograma de cada formato',
  'about.history.title': 'De um makerspace a sete cursos',
  'contact.mailCta': 'Envie um e-mail',
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
