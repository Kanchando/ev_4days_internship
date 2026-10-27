window.INTERN_DATA = {
  site: {
    title: "East Ventures",
    subtitle: "4-Days Winter Internship Portal",
    program_name: "East Ventures 4日間インターンシップ プログラム（2026年12月）",
    welcome_message: "VC・スタートアップの歴史から、4大ロープレ＆法人設立実習、新規・既存投資先アポ面談への同席、創志荘イベント・投資先2社訪問まで、4日間の全スケジュールと資料をまとめたポータルです。",
    duration: "全4日間｜12/8(火)・12/10(木)・12/15(火)・12/17(木)",
    location: "六本木オフィス ／ 本郷・創志荘 ／ 投資先各社",
    hours_summary: "DAY 1：10:45〜18:00 ／ DAY 2・4：9:00〜18:00 ／ DAY 3：14:00〜18:00",
    pillars: [
      {
        keyword: "DAY 1｜12/8 (Tue)",
        title: "座学DAY：VC・スタートアップの歴史とEV",
        description: "世界と日本のスタートアップ史、村上さん担当のリアルMTG同席、シードVC実務の全体像を習得します。"
      },
      {
        keyword: "DAY 2｜12/10 (Thu)",
        title: "ロープレ＆法人設立DAY",
        description: "午前は「新規投資面談」「既存投資先支援」の2大ロープレを実施。午後は株式会社の設立基礎（定款・登記）と初期資本政策シミュレーションを実習します。"
      },
      {
        keyword: "DAY 3｜12/15 (Tue)",
        title: "アポ面談同席DAY：新規・既存投資先のアポ面談に参加",
        description: "午前中はプログラムなし。14:00〜18:00の大枠で、新規・既存投資先との実際のアポ面談に同席・参加します（詳細は順次確定）。"
      },
      {
        keyword: "DAY 4｜12/17 (Thu)",
        title: "VC実務＆投資先訪問DAY：創志荘・Meltly・トレカ",
        description: "LP会議・投資委員会ロープレの後、本郷・創志荘でのロールアップ経営パネル、Meltly・日本トレカセンターの2社連続訪問と4日間の総括。"
      }
    ]
  },

  // 4日間の詳細スケジュール
  schedule: [
    {
      day: 1,
      day_code: "DAY 1",
      date: "12月8日（火）",
      hours: "10:45〜18:00",
      meeting_time: "10:45 六本木オフィス集合",
      title: "座学DAY：VC・スタートアップの歴史とEast Ventures",
      theme: "世界・日本のスタートアップ史とシードVC実務の全体像を掴む",
      badge: "座学＆面談同席",
      badge_type: "lecture",
      location: "六本木オフィス（ランチ：ソウルフード巡り①）",
      short_desc: "世界・日本のVC史 ／ 村上さんMTG同席 ／ 日本のスタートアップと産業 ／ シードVC実務解説",
      summary: "世界・日本のスタートアップ史とEVの投資スタイルを学び、実際の面談同席や講義でシードVCの全体像を掴みます。",
      timeline: [
        {
          time: "10:45〜11:15",
          title: "六本木オフィス集合／オリエンテーション、自己紹介、4日間のゴール設定",
          tag: "オリエン",
          details: []
        },
        {
          time: "11:15〜12:15",
          title: "世界のスタートアップとVCの歴史",
          tag: "座学",
          doc_id: "doc-day1-1",
          details: []
        },
        {
          time: "12:15〜13:15",
          title: "ランチ：ソウルフード巡り①",
          tag: "ランチ",
          details: ["みんなで"]
        },
        {
          time: "13:15〜14:00",
          title: "世界における日本の立ち位置／日本のスタートアップ・VCの歴史",
          tag: "座学",
          doc_id: "doc-day1-2",
          details: []
        },
        {
          time: "14:00〜14:45",
          title: "投資先または新規検討先とのMTG",
          tag: "実務同席",
          highlight: true,
          details: [
            "担当：村上さん",
            "実際の面談スタイルを見てもらう"
          ]
        },
        {
          time: "14:45〜15:00",
          title: "休憩",
          tag: "休憩",
          details: []
        },
        {
          time: "15:00〜15:45",
          title: "日本を代表するスタートアップと日本のVC・産業",
          tag: "座学",
          doc_id: "doc-day1-3",
          details: []
        },
        {
          time: "15:45〜16:45",
          title: "East Venturesの歴史・役割・投資スタイル",
          tag: "座学",
          doc_id: "doc-day1-4",
          details: []
        },
        {
          time: "16:45〜17:45",
          title: "シードVCの実務説明",
          tag: "実務解説",
          doc_id: "doc-day1-5",
          details: [
            "ソーシング",
            "投資判断",
            "投資後支援",
            "次回ラウンド支援"
          ]
        },
        {
          time: "17:45〜18:00",
          title: "振り返り／次回プログラムの事前説明",
          tag: "振り返り",
          details: []
        }
      ],
      key_outputs: [
        "4日間の個人ゴール設定",
        "世界・日本のVC史とEVの投資スタイルの理解",
        "DAY 2 ロープレ・法人設立実習に向けた視点の整理"
      ],
      people: "村上さん"
    },
    {
      day: 2,
      day_code: "DAY 2",
      date: "12月10日（木）",
      hours: "9:00〜18:00",
      meeting_time: "9:00 集合",
      title: "ロープレ＆法人設立DAY：新規投資面談・既存投資先支援・法人設立実習",
      theme: "午前は新規投資・既存投資先支援の2大面談ロープレ、午後は法人設立の基礎と初期資本政策シミュレーション実習",
      badge: "ロープレ＆法人設立実習",
      badge_type: "work",
      location: "六本木オフィス（ランチ：ソウルフード巡り②）",
      short_desc: "ロープレ①新規投資面談 ／ ロープレ②既存投資先支援 ／ 法人設立の基礎・初期資本政策実習",
      summary: "午前は新規投資面談・既存投資先支援の2大ロープレを実践し、午後は株式会社の設立基礎（定款・登記）と初期資本政策シミュレーションを実習します。",
      timeline: [
        {
          time: "9:00〜10:15",
          title: "集合／ロープレ①：新規投資面談",
          tag: "ロープレ①",
          highlight: true,
          details: [
            "起業家への質問",
            "事業、市場、チームの評価",
            "投資判断に必要な論点の整理"
          ]
        },
        {
          time: "10:15〜12:00",
          title: "ロープレ②：既存投資先支援",
          tag: "ロープレ②",
          highlight: true,
          details: [
            "投資後の事業進捗確認",
            "経営課題の整理",
            "次回ラウンドに向けた支援",
            "起業家とのコミュニケーション"
          ]
        },
        {
          time: "12:00〜13:15",
          title: "ランチ：ソウルフード巡り②",
          tag: "ランチ",
          details: []
        },
        {
          time: "13:15〜14:00",
          title: "法人設立の基礎",
          tag: "座学",
          doc_id: "doc-day2-1",
          details: [
            "株式会社",
            "資本金",
            "株主構成",
            "機関設計",
            "定款",
            "登記"
          ]
        },
        {
          time: "14:00〜16:00",
          title: "法人設立実習",
          tag: "実践ワーク",
          highlight: true,
          details: [
            "会社名、事業内容、所在地、資本金、発起人の決定",
            "株主構成、機関設計、定款主要項目の検討",
            "初期資本政策の簡易シミュレーション"
          ]
        },
        {
          time: "16:00〜16:15",
          title: "休憩",
          tag: "休憩",
          details: []
        },
        {
          time: "16:15〜17:30",
          title: "夏のインターンプログラム・ダイジェスト版",
          tag: "座学",
          doc_id: "doc-day2-2",
          details: []
        },
        {
          time: "17:30〜18:00",
          title: "ロープレ・実習のフィードバック／1日の振り返り",
          tag: "振り返り",
          details: []
        }
      ],
      key_outputs: [
        "新規投資面談・既存投資先支援ロープレの実践と振り返り",
        "仮想企業の定款主要項目・機関設計・株主構成案",
        "初期資本政策の簡易シミュレーションシート"
      ],
      people: "EVメンター陣"
    },
    {
      day: 3,
      day_code: "DAY 3",
      date: "12月15日（火）",
      hours: "14:00〜18:00",
      meeting_time: "14:00 集合（午前中はプログラムなし）",
      title: "アポ面談同席DAY：新規・既存投資先のアポ面談に参加",
      theme: "14:00〜18:00の大枠で新規投資検討先・既存投資先とのリアルなアポ面談に同席・参加",
      badge: "リアル面談参加",
      badge_type: "milestone",
      location: "六本木オフィス ／ 各面談先",
      short_desc: "午前なし ／ 14:00〜18:00 新規・既存投資先のアポ面談に実際に参加",
      summary: "午前中はプログラムなし。14:00〜18:00の大枠で、新規・既存投資先との実際のアポ面談に参加します（何時にどの企業と面談するかの詳細は順次確定）。",
      timeline: [
        {
          time: "14:00〜18:00",
          title: "新規・既存投資先のアポ面談に実際に参加",
          tag: "アポ面談参加",
          highlight: true,
          details: [
            "14:00〜18:00の大枠を確保し、新規投資検討先・既存投資先との実際の面談に同席・参加",
            "※何時にどこと話すかの詳細スケジュールは今後確定します"
          ]
        }
      ],
      key_outputs: [
        "新規・既存投資先とのリアルなアポ面談への同席・体感",
        "実際の起業家との議論を通じた投資評価・支援の視点整理"
      ],
      people: "EV投資担当メンバー"
    },
    {
      day: 4,
      day_code: "DAY 4",
      date: "12月17日（木）",
      hours: "9:00〜18:00",
      meeting_time: "9:00 集合",
      title: "VC実務＆投資先訪問DAY：創志荘イベント・Meltly・日本トレカセンター訪問",
      theme: "LP会議・投資委員会ロープレ、創志荘ロールアップ議論、Meltly＆日本トレカセンター訪問と総括",
      badge: "最終日・創志荘＆訪問2社",
      badge_type: "milestone",
      location: "六本木 → 本郷・創志荘 → Meltly → 日本トレカセンター → 六本木オフィス",
      short_desc: "ロープレ③LP会議・④投資委員会 ／ 創志荘パネル ／ Meltly・日本トレカセンター訪問＆比較総括",
      summary: "LP会議・投資委員会ロープレの後、創志荘イベントと投資先2社（Meltly・日本トレカセンター）を訪問し4日間を総括します。",
      timeline: [
        {
          time: "9:00〜10:00",
          title: "ロープレ③：LP会議",
          tag: "ロープレ③",
          highlight: true,
          details: [
            "ファンド戦略",
            "投資方針",
            "運用状況",
            "投資実績の説明",
            "資料なしで実施"
          ]
        },
        {
          time: "10:00〜11:15",
          title: "ロープレ④：投資委員会",
          tag: "ロープレ④",
          doc_id: "doc-day4-1",
          highlight: true,
          details: [
            "ポイ活事業案を題材に実施",
            "事前に投資委員会資料を作成",
            "投資賛成・反対の議論",
            "リスクとリターンの整理",
            "最終的な投資判断"
          ]
        },
        {
          time: "11:15〜11:30",
          title: "休憩",
          tag: "休憩",
          details: []
        },
        {
          time: "11:30〜12:00",
          title: "本郷・創志荘へ移動",
          tag: "移動",
          details: []
        },
        {
          time: "12:00〜13:00",
          title: "創志荘イベント／パネルディスカッション",
          tag: "創志荘イベント",
          highlight: true,
          details: [
            "テーマ：「ロールアップ起業家が語る『買って、束ねて、伸ばす』経営」",
            "ゼロからつくる起業との違い、案件の見つけ方、買収後の経営、資金のつくり方について聞く",
            "登壇者：深澤雄大さん（AI経営技研）",
            "登壇者：福村圭祐さん（日本医療連合）",
            "モデレーター：金子剛士さん",
            "主な論点：①なぜロールアップなのか ／ ②案件の見つけ方、口説き方 ／ ③買収後に何を変えるのか ／ ④資金とガバナンス ／ ⑤次に狙う業界"
          ]
        },
        {
          time: "13:00〜14:00",
          title: "ランチ／Meltlyへ移動",
          tag: "ランチ・移動",
          details: [
            "イベント内容についての簡単な振り返り",
            "移動中にMeltlyの事業・市場・投資背景を確認"
          ]
        },
        {
          time: "14:00〜15:00",
          title: "投資先① Meltly訪問",
          tag: "投資先訪問①",
          highlight: true,
          details: [
            "事業説明",
            "オフィスツアー",
            "AI事業、プロダクト、成長戦略についての質疑応答"
          ]
        },
        {
          time: "15:00〜15:30",
          title: "日本トレカセンターへ移動",
          tag: "移動",
          details: [
            "移動時間は30分で仮置き"
          ]
        },
        {
          time: "15:30〜16:30",
          title: "投資先② 日本トレカセンター訪問",
          tag: "投資先訪問②",
          highlight: true,
          details: [
            "事業説明",
            "オフィスツアー",
            "経営陣との質疑応答",
            "市場規模、競争優位性、成長戦略の確認"
          ]
        },
        {
          time: "16:30〜17:00",
          title: "六本木オフィスへ移動",
          tag: "移動",
          details: []
        },
        {
          time: "17:00〜18:00",
          title: "4日間の総括",
          tag: "最終総括",
          highlight: true,
          details: []
        }
      ],
      key_outputs: [
        "LP会議（資料なし）＆ 投資委員会（ポイ活事業案）での意思決定",
        "Meltly と 日本トレカセンター の比較分析・投資判断",
        "4日間を通じたVCへの理解の変化と今後の問いの言語化"
      ],
      people: "深澤雄大さん、福村圭祐さん、金子剛士さん ／ Meltly経営陣 ／ 日本トレカセンター経営陣"
    }
  ],

  // 各日の座学・レクチャー資料一覧（全日程の座学コマと連動）
  workshops: [
    {
      id: "doc-day1-1",
      day: 1,
      category: "DAY 1｜座学資料①",
      day_label: "12月8日（火）11:15〜12:15",
      title: "世界のスタートアップとVCの歴史",
      topics: [
        "米国・世界のベンチャーキャピタル誕生から現代までの変遷",
        "テクノロジーの波とスタートアップエコシステムの拡大"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day1-2",
      day: 1,
      category: "DAY 1｜座学資料②",
      day_label: "12月8日（火）13:15〜14:00",
      title: "世界における日本の立ち位置／日本のスタートアップ・VCの歴史",
      topics: [
        "グローバル市場における日本のスタートアップエコシステムの現在地",
        "日本のスタートアップ・VC史の変遷と今後の成長機会"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day1-3",
      day: 1,
      category: "DAY 1｜座学資料③",
      day_label: "12月8日（火）15:00〜15:45",
      title: "日本を代表するスタートアップと日本のVC・産業",
      topics: [
        "日本を代表するスタートアップの軌跡とVC・産業の関わり"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day1-4",
      day: 1,
      category: "DAY 1｜座学資料④",
      day_label: "12月8日（火）15:45〜16:45",
      title: "East Venturesの歴史・役割・投資スタイル",
      topics: [
        "East Venturesの創業背景とこれまでの歩み",
        "シードVCとしての役割とEVの投資フィロソフィー"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day1-5",
      day: 1,
      category: "DAY 1｜実務解説資料",
      day_label: "12月8日（火）16:45〜17:45",
      title: "シードVCの実務説明",
      topics: [
        "ソーシング",
        "投資判断",
        "投資後支援",
        "次回ラウンド支援"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day2-1",
      day: 2,
      category: "DAY 2｜座学資料①",
      day_label: "12月10日（木）13:15〜14:00",
      title: "法人設立の基礎（株式会社・資本金・株主構成・機関設計・定款・登記）",
      topics: [
        "株式会社の仕組み・資本金・株主構成・機関設計・定款・登記の基礎",
        "14:00〜16:00「法人設立実習（初期資本政策シミュレーション）」で使用"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day2-2",
      day: 2,
      category: "DAY 2｜座学資料②",
      day_label: "12月10日（木）16:15〜17:30",
      title: "夏のインターンプログラム・ダイジェスト版",
      topics: [
        "サマーインターンプログラムの主要コンテンツ・エッセンス共有"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    },
    {
      id: "doc-day4-1",
      day: 4,
      category: "DAY 4｜投資委員会資料",
      day_label: "12月17日（木）10:00〜11:15",
      title: "投資委員会 事前資料（題材：ポイ活事業案）",
      topics: [
        "ポイ活事業案の事業概要・市場性・リスクとリターン整理資料"
      ],
      embed_url: "",
      file_url: "",
      slides: []
    }
  ],

  // 創志荘イベント・投資先訪問2社一覧
  visits: [
    {
      id: "visit-soshiso",
      type: "創志荘イベント・パネルディスカッション",
      day_label: "DAY 4｜12/17（木）12:00〜13:00",
      location: "本郷・創志荘（11:30移動開始）",
      name: "ロールアップ起業家が語る『買って、束ねて、伸ばす』経営",
      image_url: "soshiso-event.png",
      embed_url: "",
      materials: []
    },
    {
      id: "visit-meltly",
      type: "投資先訪問①（AI×サブカルチャー）",
      day_label: "DAY 4｜12/17（木）14:00〜15:00",
      location: "東京都文京区本郷2-26-9 NOVEL WORK Hongo 3階（創志荘からランチ兼移動）",
      name: "Meltly株式会社（メルトリー）",
      company_profile: [
        { label: "会社名", value: "Meltly株式会社（Meltly Inc.）" },
        { label: "設立", value: "2022年2月（東京大学発AIスタートアップ）" },
        { label: "代表者", value: "代表取締役CEO 髙橋 侑志" },
        { label: "所在地", value: "東京都文京区本郷2-26-9 NOVEL WORK Hongo 3階" },
        { label: "ミッション", value: "「心の琴線に触れるサービスを通じて、日常に感動と価値を提供する」" }
      ],
      business_summary: [
        "AI×サブカルチャー領域に特化し、独自の画像・動画生成AIモデルの研究開発からアプリ開発までをインハウスで一貫展開",
        "主力プロダクト：AIキャラクターアプリ「Days AI」（理想のオリジナルキャラクター“うちの子”をデザインし、AIイラスト生成・動画制作・チャット・ユーザー間交流を楽しめるエンタメアプリ）",
        "アニメイラストに特化した独自開発の画像生成AIモデル（「Days AI V3」等）を搭載し、グローバルで累計数十万DLを突破"
      ],
      embed_url: "",
      materials: [
        {
          title: "Meltly コーポレートサイト",
          badge: "OFFICIAL HP",
          url: "https://meltly.co.jp/",
          description: "https://meltly.co.jp/ — 会社概要・事業・採用情報"
        },
        {
          title: "AIキャラクターアプリ「Days AI」公式サイト",
          badge: "PRODUCT",
          url: "https://www.days-ai.com/",
          description: "https://www.days-ai.com/ — 主力プロダクト紹介"
        }
      ]
    },
    {
      id: "visit-toreca",
      type: "投資先訪問②（トレカ・エンタメ型EC）",
      day_label: "DAY 4｜12/17（木）15:30〜16:30",
      location: "東京都中央区日本橋大伝馬町13-7 日本橋大富ビル 2F/3F（Meltlyから移動）",
      name: "株式会社日本トレカセンター",
      company_profile: [
        { label: "会社名", value: "株式会社日本トレカセンター" },
        { label: "設立", value: "2023年4月" },
        { label: "代表者", value: "代表取締役CEO 大山 敏浩" },
        { label: "所在地", value: "東京都中央区日本橋大伝馬町13-7 日本橋大富ビル 2F/3F" },
        { label: "事業領域", value: "ネットオリパ・トレーディングカードのエンタメ型ECプラットフォーム" }
      ],
      business_summary: [
        "スマホ・PCから24時間365日いつでもトレーディングカードのオリジナルパック（オリパ）を引いて、その場で開封演出を楽しめる国内最大級のオンラインオリパサービス「日本トレカセンター」を企画・開発・運営",
        "獲得したカードは自宅へのスピード配送（原則24時間以内発送体制）またはサイト内ポイント（コイン）への即時還元が可能。秋葉原での実店舗運営や自社買取・鑑定検品体制により高い信頼性を構築",
        "ポケモンカード・ワンピースカード・遊戯王等を軸に急成長し、台湾・香港・アメリカなどグローバル展開も推進"
      ],
      embed_url: "",
      materials: [
        {
          title: "日本トレカセンター 公式サイト",
          badge: "OFFICIAL HP",
          url: "https://japan-toreca.com/",
          description: "https://japan-toreca.com/ — オンラインオリパサービスサイト"
        }
      ]
    }
  ],

  // East Ventures メンバー（全6名）
  key_people: [
    {
      name: "金子 剛士",
      x_url: "https://x.com/evkaneko",
      x_handle: "@evkaneko",
      roles: ["East Ventures代表", "パートナー"]
    },
    {
      name: "毛利 洵平",
      x_url: "https://x.com/mouriQQ",
      x_handle: "@mouriQQ",
      roles: ["パートナー", "バックオフィス担当"]
    },
    {
      name: "村上 雄也",
      x_url: "https://x.com/yu8muraka3",
      x_handle: "@yu8muraka3",
      roles: ["パートナー", "投資担当"]
    },
    {
      name: "大柴 貴紀",
      x_url: "https://x.com/takanori1976",
      x_handle: "@takanori1976",
      roles: ["フェロー"]
    },
    {
      name: "平田 智基",
      x_url: "https://x.com/t_10_a",
      x_handle: "@t_10_a",
      roles: ["投資担当"]
    },
    {
      name: "神門 崇晶",
      x_url: "https://x.com/takaaki_kando",
      x_handle: "@takaaki_kando",
      roles: ["投資担当"]
    }
  ],

  // 事前に確認・調整する事項（チェックリスト）
  checklist: [
    {
      id: "chk-day3",
      target_date: "12月15日（DAY 3）10:45〜16:00",
      category: "プログラム調整",
      title: "12月15日（DAY 3）前半（10:45〜16:00）のHIVE・代替プログラム内容の確定",
      note: "日本海洋重工業への訪問取りやめに伴う、DAY 3前半のHIVEセッション・ワーク内容の確定",
      priority: "高"
    },
    {
      id: "chk-1",
      target_date: "12月17日（DAY 4）14:00〜15:00",
      category: "アポ・訪問調整",
      title: "12月17日 14:00〜15:00 の Meltly 訪問可否",
      note: "訪問人数・オフィスツアーおよび質疑応答の時間枠の確定",
      priority: "高"
    },
    {
      id: "chk-2",
      target_date: "12月17日（DAY 4）15:30〜16:30",
      category: "アポ・訪問調整",
      title: "12月17日 15:30〜16:30 の 日本トレカセンター 訪問可否",
      note: "訪問人数・オフィスツアーおよび経営陣質疑応答の時間枠の確定",
      priority: "高"
    },
    {
      id: "chk-3",
      target_date: "12月17日（DAY 4）15:00〜15:30",
      category: "移動ルート検証",
      title: "Meltly から 日本トレカセンター まで30分で移動できるか",
      note: "現在15:00〜15:30（30分）で仮置き中。タクシーまたは電車の所要時間・乗換を確認",
      priority: "中"
    },
    {
      id: "chk-4",
      target_date: "12月17日（DAY 4）13:00〜14:00",
      category: "移動・ランチ検証",
      title: "創志荘（本郷）から Meltly まで、ランチを含めて1時間で移動できるか",
      note: "13:00イベント終了→14:00 Meltly着。移動手段とランチ場所（または移動前後の軽食手配）の確認",
      priority: "高"
    },
    {
      id: "chk-5",
      target_date: "12月10日（DAY 2）9:30〜11:30",
      category: "ソーシング準備",
      title: "12月10日に送信するDMの対象企業と送信アカウント",
      note: "重複送信防止のルール確認、インターン生が使用する送信アカウント（X / LinkedIn / メール等）の準備",
      priority: "高"
    },
    {
      id: "chk-6",
      target_date: "12月17日（DAY 4）10:00〜11:15",
      category: "ロープレ準備",
      title: "12月17日の投資委員会資料（題材：ポイ活事業案）の事前作成担当",
      note: "ロープレ④で使用する「ポイ活事業案」の投資委員会資料を誰がいつまでに作成・共有するか決定",
      priority: "高"
    }
  ]
};
