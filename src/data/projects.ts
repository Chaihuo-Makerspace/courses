import type { Locale } from '../i18n/types';
import type { ModuleId } from './modules';

/**
 * 学完能复现的开源项目，按模块挂在课程详情页。
 *
 * 出处：github.com/suharvest/sensecraft-solutions（Apache-2.0），`solutions/<id>/solution.yaml`
 * 的 name / summary，2026-10-03 取用。zh 与 en 取自原文并按本站文案声音压缩，ja / es / pt-BR 为本站翻译。
 * 文中的数字（180 ms、约 11 秒）均来自原文；原文更新后在这里同步。
 * 介绍只写原文说了的事，不添加原文没有的指标或功能。
 * 项目按能力类型归类，每类能力对应一门课（见 `capabilityModule`）；新增项目只需标出它的能力类型。
 */
export type ProjectCapability =
  | 'device-integration' // 设备互联与控制
  | 'voice-interaction' // 语音与多模态交互
  | 'offgrid-comms' // 离网通信
  | 'edge-vision' // 边缘视觉
  | 'env-sensing' // 环境感知
  | 'robot-control'; // 机器人控制

export const capabilityModule: Record<ProjectCapability, ModuleId> = {
  'device-integration': 'm1',
  'voice-interaction': 'm2',
  'offgrid-comms': 'm3',
  'edge-vision': 'm4',
  'env-sensing': 'm5',
  'robot-control': 'm6',
};

export interface CourseProject {
  /** 与来源仓库 `solutions/<id>` 同名。 */
  id: string;
  capability: ProjectCapability;
  name: Record<Locale, string>;
  summary: Record<Locale, string>;
}

export const courseProjects: CourseProject[] = [
  {
    id: 'multi_protocol_gateway',
    capability: 'device-integration',
    name: {
      'zh-CN': '多协议工业网关',
      en: 'Multi-protocol industrial gateway',
      ja: 'マルチプロトコル産業用ゲートウェイ',
      es: 'Pasarela industrial multiprotocolo',
      'pt-BR': 'Gateway industrial multiprotocolo',
    },
    summary: {
      'zh-CN':
        '把 OPC UA、Modbus、BACnet/IP 和 MQTT 设备汇入一套点位模型，再通过统一的 MQTT 接口读取与控制。',
      en: 'Bring OPC UA, Modbus, BACnet/IP and MQTT devices into one point model, then read and control them through a single MQTT interface.',
      ja: 'OPC UA、Modbus、BACnet/IP、MQTT の機器を一つのポイントモデルにまとめ、単一の MQTT インターフェースから読み取り・制御します。',
      es: 'Integra dispositivos OPC UA, Modbus, BACnet/IP y MQTT en un único modelo de puntos y los lee y controla desde una sola interfaz MQTT.',
      'pt-BR':
        'Reúne dispositivos OPC UA, Modbus, BACnet/IP e MQTT em um único modelo de pontos e os lê e controla por uma só interface MQTT.',
    },
  },
  {
    id: 'smart_hvac_control',
    capability: 'device-integration',
    name: {
      'zh-CN': '暖通自动化控制',
      en: 'HVAC automation control',
      ja: '空調自動制御',
      es: 'Control automático de climatización',
      'pt-BR': 'Controle automático de climatização',
    },
    summary: {
      'zh-CN':
        '把暖通控制器点位与电能表汇入同一套点位模型，用历史数据预测设定值；写入后读回核对才算生效，现场不一致时自动回滚并告警。',
      en: 'Bring HVAC controller points and an energy meter into one point model and predict setpoints from historical data. A write only counts after a verified readback; if the field disagrees, it rolls back and raises an alarm.',
      ja: '空調コントローラのポイントと電力量計を一つのポイントモデルにまとめ、履歴データから設定値を予測します。書き込みは読み戻しで確認できて初めて有効とし、現場と食い違えば自動でロールバックして警報を出します。',
      es: 'Integra los puntos del controlador de climatización y un medidor de energía en un único modelo y predice consignas a partir del histórico. Una escritura solo es válida tras verificar la lectura de vuelta; si el campo no coincide, se revierte y se genera una alarma.',
      'pt-BR':
        'Reúne os pontos do controlador de climatização e um medidor de energia em um único modelo e prevê setpoints a partir do histórico. Uma escrita só vale após a leitura de verificação; se o campo divergir, é revertida e um alarme é gerado.',
    },
  },
  {
    id: 'smart_warehouse',
    capability: 'voice-interaction',
    name: {
      'zh-CN': '语音仓管',
      en: 'Voice-operated warehouse',
      ja: '音声操作の倉庫管理',
      es: 'Almacén operado por voz',
      'pt-BR': 'Armazém operado por voz',
    },
    summary: {
      'zh-CN':
        '对着 Watcher 说一句就能入库、出库、查库存，屏幕回报本次数量与当前库存；可以整套部署在本地。',
      en: 'Speak to a Watcher to stock in, stock out or check inventory; the screen reports the quantity and the running total. The whole stack can be deployed locally.',
      ja: 'Watcher に話しかけるだけで入庫・出庫・在庫照会ができ、画面に今回の数量と現在の在庫が表示されます。システム全体をローカルに配置できます。',
      es: 'Basta hablarle a un Watcher para registrar entradas, salidas o consultar existencias; la pantalla informa la cantidad y el total actual. Todo el sistema puede desplegarse en local.',
      'pt-BR':
        'Basta falar com um Watcher para registrar entradas, saídas ou consultar o estoque; a tela informa a quantidade e o total atual. Todo o sistema pode ser implantado localmente.',
    },
  },
  {
    id: 'jetson_voice_assistant',
    capability: 'voice-interaction',
    name: {
      'zh-CN': '本地语音服务',
      en: 'Local voice service',
      ja: 'ローカル音声サービス',
      es: 'Servicio de voz local',
      'pt-BR': 'Serviço de voz local',
    },
    summary: {
      'zh-CN':
        '在 Jetson Orin、RK3576、RK3588 和树莓派上运行流式语音识别与语音合成，Jetson 上延迟低于 180 ms，完全离线。',
      en: 'Streaming speech recognition and synthesis on Jetson Orin, RK3576, RK3588 and Raspberry Pi, with under 180 ms latency on Jetson and no cloud dependency.',
      ja: 'Jetson Orin、RK3576、RK3588、Raspberry Pi 上でストリーミング音声認識と音声合成を実行します。Jetson では遅延 180 ms 未満、完全オフラインで動作します。',
      es: 'Reconocimiento y síntesis de voz en streaming sobre Jetson Orin, RK3576, RK3588 y Raspberry Pi, con latencia inferior a 180 ms en Jetson y sin depender de la nube.',
      'pt-BR':
        'Reconhecimento e síntese de voz em streaming em Jetson Orin, RK3576, RK3588 e Raspberry Pi, com latência abaixo de 180 ms no Jetson e sem depender da nuvem.',
    },
  },
  {
    id: 'recamera_sheep_counter_lora',
    capability: 'offgrid-comms',
    name: {
      'zh-CN': 'LoRa 绵羊计数器',
      en: 'Sheep counter over LoRa',
      ja: 'LoRa 羊カウンター',
      es: 'Contador de ovejas por LoRa',
      'pt-BR': 'Contador de ovelhas por LoRa',
    },
    summary: {
      'zh-CN':
        '摄像头统计穿过围栏口的绵羊，把进、出、在栏数量通过 LoRa / Meshtastic 实时发到手机和 Home Assistant 看板，现场不需要 Wi-Fi。',
      en: 'A camera counts sheep passing a gate and sends live in, out and inside totals over LoRa / Meshtastic to a phone and a Home Assistant dashboard, with no Wi-Fi in the field.',
      ja: 'カメラが柵の出入口を通る羊を数え、入・出・柵内の頭数を LoRa / Meshtastic 経由でスマートフォンと Home Assistant のダッシュボードへリアルタイムに送ります。現場に Wi-Fi は不要です。',
      es: 'Una cámara cuenta las ovejas que cruzan una puerta y envía en tiempo real los totales de entrada, salida y dentro del corral por LoRa / Meshtastic a un teléfono y a un panel de Home Assistant, sin Wi-Fi en el campo.',
      'pt-BR':
        'Uma câmera conta as ovelhas que passam por uma porteira e envia em tempo real os totais de entrada, saída e dentro do curral por LoRa / Meshtastic para um celular e um painel do Home Assistant, sem Wi-Fi no campo.',
    },
  },
  {
    id: 'edge_security',
    capability: 'edge-vision',
    name: {
      'zh-CN': '闯入与滞留告警',
      en: 'Intrusion and loitering alerts',
      ja: '侵入・滞留アラート',
      es: 'Alertas de intrusión y permanencia',
      'pt-BR': 'Alertas de intrusão e permanência',
    },
    summary: {
      'zh-CN':
        '一路 RTSP 摄像头判出禁区入侵、越线和滞留，在浏览器里逐条处理；判定在边缘盒子上完成，Jetson 或 RK3588 一台机器跑完整套。',
      en: 'One RTSP camera yields restricted-zone, line-crossing and loitering alerts, worked through in a browser. Detection runs on the edge box itself; a single Jetson or RK3588 runs the whole stack.',
      ja: 'RTSP カメラ 1 台で立入禁止エリアへの侵入、ライン越え、滞留を検知し、ブラウザで 1 件ずつ対応します。判定はエッジボックス上で行い、Jetson または RK3588 の 1 台で全体が動きます。',
      es: 'Una cámara RTSP genera alertas de zona restringida, cruce de línea y permanencia, que se gestionan desde el navegador. La detección corre en el propio equipo de borde; un solo Jetson o RK3588 ejecuta todo el sistema.',
      'pt-BR':
        'Uma câmera RTSP gera alertas de zona restrita, cruzamento de linha e permanência, tratados no navegador. A detecção roda no próprio equipamento de borda; um único Jetson ou RK3588 executa todo o sistema.',
    },
  },
  {
    id: 'recamera_parking_monitor',
    capability: 'edge-vision',
    name: {
      'zh-CN': '停车位监控',
      en: 'Parking slot monitor',
      ja: '駐車スペース監視',
      es: 'Monitor de plazas de aparcamiento',
      'pt-BR': 'Monitor de vagas de estacionamento',
    },
    summary: {
      'zh-CN': '实时看到哪些车位有车、哪些空闲，一台 reCamera 即可运行，不需要额外服务器。',
      en: 'See which parking slots are taken and which are free in real time. It runs on a single reCamera with no extra server.',
      ja: 'どの駐車スペースが埋まり、どこが空いているかをリアルタイムに把握できます。reCamera 1 台で動作し、追加のサーバーは不要です。',
      es: 'Muestra en tiempo real qué plazas están ocupadas y cuáles libres. Funciona con una sola reCamera, sin servidor adicional.',
      'pt-BR':
        'Mostra em tempo real quais vagas estão ocupadas e quais estão livres. Funciona com uma única reCamera, sem servidor adicional.',
    },
  },
  {
    id: 'recamera_heatmap_grafana',
    capability: 'edge-vision',
    name: {
      'zh-CN': '零售人流热力图',
      en: 'Retail people-flow heatmap',
      ja: '小売店の人流ヒートマップ',
      es: 'Mapa de calor de afluencia en tienda',
      'pt-BR': 'Mapa de calor de fluxo em loja',
    },
    summary: {
      'zh-CN': '看清哪个货架前人多、哪条过道没人走；可用 reCamera，也可用 IP 摄像头加 AI 盒子。',
      en: 'See which shelves draw customers and which aisles are ignored. Works with reCamera or with IP cameras plus an AI box.',
      ja: 'どの棚の前に人が集まり、どの通路が通られていないかを可視化します。reCamera でも、IP カメラと AI ボックスの組み合わせでも使えます。',
      es: 'Muestra qué estanterías atraen clientes y qué pasillos se ignoran. Funciona con reCamera o con cámaras IP y una caja de IA.',
      'pt-BR':
        'Mostra quais prateleiras atraem clientes e quais corredores são ignorados. Funciona com reCamera ou com câmeras IP e uma caixa de IA.',
    },
  },
  {
    id: 'agri_env_monitor',
    capability: 'env-sensing',
    name: {
      'zh-CN': '农业环境监测',
      en: 'Agricultural environment monitoring',
      ja: '農業環境モニタリング',
      es: 'Monitoreo ambiental agrícola',
      'pt-BR': 'Monitoramento ambiental agrícola',
    },
    summary: {
      'zh-CN':
        '在 Home Assistant 看板上查看 SenseCAP 土壤和空气读数，数值越界自动告警；可以走 SenseCAP 云，也可以完全不联外网。',
      en: 'View SenseCAP soil and air readings on a Home Assistant dashboard, with alerts when a value crosses a threshold. Works through the SenseCAP cloud or fully offline.',
      ja: 'SenseCAP の土壌・大気の測定値を Home Assistant のダッシュボードで確認でき、しきい値を超えると自動で通知します。SenseCAP クラウド経由でも、完全オフラインでも動作します。',
      es: 'Consulta las lecturas de suelo y aire de SenseCAP en un panel de Home Assistant, con alertas cuando un valor supera el umbral. Funciona a través de la nube de SenseCAP o totalmente sin conexión.',
      'pt-BR':
        'Consulta as leituras de solo e ar do SenseCAP em um painel do Home Assistant, com alertas quando um valor ultrapassa o limite. Funciona pela nuvem SenseCAP ou totalmente offline.',
    },
  },
  {
    id: 'sensecraft_data_mcp',
    capability: 'env-sensing',
    name: {
      'zh-CN': '设备数据语音播报',
      en: 'Spoken device reports via MCP',
      ja: 'MCP によるデバイス状況の音声報告',
      es: 'Informes de dispositivos por voz vía MCP',
      'pt-BR': 'Relatórios de dispositivos por voz via MCP',
    },
    summary: {
      'zh-CN':
        '让兼容 MCP 的语音助手或大模型直接读出 SenseCAP 设备的情况：问一句「大棚现在读数多少」就有答案，异常优先播报，不用打开 App 或仪表盘。',
      en: 'Let any MCP-compatible voice assistant or LLM report on a SenseCAP device fleet: ask "what is the greenhouse reading right now" and get an answer, anomalies first, with no app or dashboard.',
      ja: 'MCP 対応の音声アシスタントや LLM が SenseCAP デバイスの状況を直接読み上げます。「温室の今の値は？」と尋ねれば答えが返り、異常を優先して報告します。アプリやダッシュボードは不要です。',
      es: 'Permite que cualquier asistente de voz o LLM compatible con MCP informe sobre los dispositivos SenseCAP: pregunte «¿cuál es la lectura del invernadero ahora?» y obtendrá la respuesta, con las anomalías primero, sin aplicación ni panel.',
      'pt-BR':
        'Permite que qualquer assistente de voz ou LLM compatível com MCP relate a situação dos dispositivos SenseCAP: pergunte «qual é a leitura da estufa agora?» e receba a resposta, com anomalias primeiro, sem aplicativo nem painel.',
    },
  },
  {
    id: 'voice_rebot_arm',
    capability: 'robot-control',
    name: {
      'zh-CN': '语音抓取机械臂',
      en: 'Voice-controlled grasping arm',
      ja: '音声操作の把持アーム',
      es: 'Brazo de agarre controlado por voz',
      'pt-BR': 'Braço de preensão controlado por voz',
    },
    summary: {
      'zh-CN':
        '说一句 "Hey Jarvis, grab the water bottle"，reBot B601-DM 机械臂用腕部 RGB-D 相机找到目标，约 11 秒抓起；可抓纸盒、瓶子、香蕉、水杯和橙子，语音链路全部在 Jetson Orin NX 本地运行。',
      en: 'Say "Hey Jarvis, grab the water bottle" and a reBot B601-DM arm finds the object with an RGB-D wrist camera and picks it up in about 11 seconds. It grasps boxes, bottles, bananas, cups and oranges, with the whole voice stack running locally on a Jetson Orin NX.',
      ja: '"Hey Jarvis, grab the water bottle" と話しかけると、reBot B601-DM アームが手首の RGB-D カメラで対象を見つけ、約 11 秒で把持します。箱、ボトル、バナナ、カップ、オレンジを把持でき、音声処理はすべて Jetson Orin NX 上でローカルに動作します。',
      es: 'Diga "Hey Jarvis, grab the water bottle" y un brazo reBot B601-DM localiza el objeto con una cámara RGB-D en la muñeca y lo recoge en unos 11 segundos. Agarra cajas, botellas, plátanos, vasos y naranjas; toda la cadena de voz corre en local sobre un Jetson Orin NX.',
      'pt-BR':
        'Diga "Hey Jarvis, grab the water bottle" e um braço reBot B601-DM localiza o objeto com uma câmera RGB-D no punho e o pega em cerca de 11 segundos. Pega caixas, garrafas, bananas, copos e laranjas; toda a cadeia de voz roda localmente em um Jetson Orin NX.',
    },
  },
  {
    id: 'respeaker_flex_soarm',
    capability: 'robot-control',
    name: {
      'zh-CN': '语音控制 SO-ARM 机械臂',
      en: 'Voice-controlled SO-ARM arm',
      ja: '音声操作の SO-ARM アーム',
      es: 'Brazo SO-ARM controlado por voz',
      'pt-BR': 'Braço SO-ARM controlado por voz',
    },
    summary: {
      'zh-CN':
        '用自然语言指挥 SO-ARM101 六自由度机械臂，语音识别、合成与大模型全部在 Jetson Orin NX 本地运行；提供 HTTP 接口读取机械臂实时关节状态。',
      en: 'Control a SO-ARM101 6-DoF arm with natural-language commands; speech recognition, synthesis and the LLM all run locally on a Jetson Orin NX. An HTTP endpoint exposes live joint state.',
      ja: '自然言語の指示で SO-ARM101 6 自由度アームを操作します。音声認識・音声合成・LLM はすべて Jetson Orin NX 上でローカルに動作し、HTTP エンドポイントから関節のリアルタイム状態を取得できます。',
      es: 'Controla un brazo SO-ARM101 de 6 grados de libertad con órdenes en lenguaje natural; el reconocimiento y la síntesis de voz y el LLM corren en local sobre un Jetson Orin NX. Un endpoint HTTP expone el estado de las articulaciones en tiempo real.',
      'pt-BR':
        'Controla um braço SO-ARM101 de 6 graus de liberdade com comandos em linguagem natural; o reconhecimento e a síntese de voz e o LLM rodam localmente em um Jetson Orin NX. Um endpoint HTTP expõe o estado das juntas em tempo real.',
    },
  },
];

export function getProjectsForModule(moduleId: string): CourseProject[] {
  return courseProjects.filter((p) => capabilityModule[p.capability] === moduleId);
}
