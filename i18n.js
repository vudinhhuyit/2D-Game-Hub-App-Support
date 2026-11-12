// English lives in index.html (read from the DOM at load). The other 7 languages are below.
(function () {
  var MAIL = '<a href="mailto:vudinhhuyit@gmail.com?subject=2D%20Game%20Hub%20Support">vudinhhuyit@gmail.com</a>';
  var T = {
    vi: {
      title: "2D Game Hub – Trò chơi, Hỗ trợ & Quyền riêng tư",
      tagline: "Game 2D nhỏ, vui to",
      nav_games: "Trò chơi", nav_about: "Giới thiệu", nav_support: "Hỗ trợ", nav_privacy: "Quyền riêng tư",
      games_h: "Các trò chơi", support: "Hỗ trợ", soon: "Sắp ra mắt",
      g_comic: "Nhặt truyện, hoá siêu anh hùng", g_capy: "Cho capybara ăn, đập vỡ băng", g_red: "Lăn, nhảy và né gai nhọn",
      g_sugar: "Vẽ đường, đổ đầy cốc", g_snoring: "Chạm thú vật, hạ gục kẻ ngáy", g_ragdoll: "Phóng ragdoll bằng bập bênh", g_sheep: "Dẫn Rocky, Billy & Tiny về nhà",
      about_h: "Giới thiệu",
      about_p1: "<strong>2D Game Hub</strong> là nơi tập hợp các game 2D nhỏ gọn, làm thủ công cho iPhone và iPad: platformer, giải đố, game vật lý và nhiều hơn nữa.",
      about_h3: "Bạn nhận được gì",
      about_li1: "Game dễ chơi, mỗi lượt chơi ngắn", about_li2: "Đồ hoạ pixel và vẽ tay nhiều màu sắc",
      about_li3: "Không cần tài khoản; chơi được khi offline", about_li4: "Miễn phí, một số game có gói nâng cấp tuỳ chọn trả một lần",
      about_p2: "Game mới sẽ được bổ sung dần. Hãy quay lại sớm nhé!",
      support_h: "Hỗ trợ",
      support_p: "Cần giúp đỡ với một game? Hãy gửi email tới {mail} kèm theo:",
      support_li1: "Tên game và phiên bản", support_li2: "Dòng máy và phiên bản iOS / iPadOS", support_li3: "Mô tả ngắn về lỗi (kèm ảnh chụp màn hình càng tốt)",
      sup_h1: "Tiến trình chơi được lưu thế nào?", sup_p1: "Tiến trình chỉ lưu trên thiết bị của bạn. Xoá game cũng sẽ xoá các màn đã mở khoá và điểm cao nhất.",
      sup_h2: "Làm sao để tắt âm thanh?", sup_p2: "Mở cài đặt hoặc menu tạm dừng trong game và tắt âm thanh.",
      sup_h3: "Tôi đã mua gói nâng cấp nhưng không thấy", sup_p3: "Dùng nút \"Khôi phục giao dịch\" trong game. Giao dịch do Apple xử lý và gắn với Apple ID của bạn.",
      priv_h: "Chính sách quyền riêng tư", priv_updated: "Cập nhật lần cuối: 12/11/2026",
      priv_web_h: "Trang web này", priv_web_p: "Trang này không dùng cookie, trình theo dõi hay phân tích, và không thu thập dữ liệu cá nhân. Lựa chọn ngôn ngữ chỉ được lưu trong trình duyệt của bạn.",
      priv_app_h: "Các ứng dụng của chúng tôi", priv_app_p: "Các game không có tài khoản và không yêu cầu tên, email hay thông tin cá nhân khác. Tuỳ từng game, có thể sử dụng:",
      priv_li1: "<strong>Google AdMob</strong> – hiển thị quảng cáo; có thể dùng mã định danh quảng cáo của thiết bị nếu bạn cho phép theo dõi. Quảng cáo chỉ được cá nhân hoá khi bạn đồng ý và, nếu luật yêu cầu, có sự đồng thuận.",
      priv_li2: "<strong>Firebase Analytics, Crashlytics và Remote Config</strong> – sự kiện sử dụng ẩn danh, báo cáo lỗi và cài đặt game.",
      priv_li3: "<strong>Apple In-App Purchase</strong> – giao dịch do Apple xử lý; chúng tôi không thấy thông tin thanh toán của bạn.",
      priv_app_p2: "Trang Hỗ trợ & Quyền riêng tư của từng game liệt kê chính xác những gì game đó sử dụng.",
      priv_dev_h: "Dữ liệu lưu trên thiết bị", priv_dev_p: "Tiến trình, điểm cao, giao dịch và cài đặt được lưu trên thiết bị và bị xoá khi bạn xoá ứng dụng.",
      priv_kid_h: "Quyền riêng tư của trẻ em", priv_kid_p: "Game dành cho mọi đối tượng, không hướng tới trẻ dưới 13 tuổi. Chúng tôi không cố ý thu thập dữ liệu của trẻ em.",
      priv_chg_h: "Thay đổi chính sách", priv_chg_p: "Mọi thay đổi sẽ được đăng trên trang này kèm ngày cập nhật.",
      priv_contact_h: "Liên hệ"
    },
    zh: {
      title: "2D Game Hub – 游戏、支持与隐私",
      tagline: "小小2D游戏，大大乐趣",
      nav_games: "游戏", nav_about: "介绍", nav_support: "支持", nav_privacy: "隐私政策",
      games_h: "我们的游戏", support: "支持", soon: "即将推出",
      g_comic: "收集漫画，变身英雄", g_capy: "喂水豚，敲碎冰块", g_red: "滚动、跳跃、躲避尖刺",
      g_sugar: "画线条，装满杯子", g_snoring: "点击动物，推倒打鼾者", g_ragdoll: "用跷跷板抛出布娃娃", g_sheep: "带 Rocky、Billy 和 Tiny 回家",
      about_h: "介绍",
      about_p1: "<strong>2D Game Hub</strong> 汇集了不断增长的 iPhone 和 iPad 手工制作小型 2D 游戏：平台跳跃、益智、物理玩具等。",
      about_h3: "你将获得",
      about_li1: "简单易上手、适合短时间游玩的游戏", about_li2: "色彩缤纷的像素与手绘画面",
      about_li3: "无需账号，离线也能玩", about_li4: "免费游玩，部分游戏提供可选的一次性升级",
      about_p2: "我们会陆续加入新游戏，敬请期待！",
      support_h: "支持",
      support_p: "游戏遇到问题？请发送邮件至 {mail}，并附上：",
      support_li1: "游戏名称及版本", support_li2: "设备型号和 iOS / iPadOS 版本", support_li3: "问题的简短描述（附截图更好）",
      sup_h1: "我的游戏进度如何保存？", sup_p1: "进度仅保存在你的设备上。删除游戏也会删除已解锁的关卡和最佳成绩。",
      sup_h2: "如何关闭声音？", sup_p2: "在游戏内打开设置或暂停菜单，关闭声音即可。",
      sup_h3: "我购买了升级但没有生效", sup_p3: "请使用游戏内的“恢复购买”按钮。购买由 Apple 处理，并与你的 Apple ID 绑定。",
      priv_h: "隐私政策", priv_updated: "最后更新：2026年11月12日",
      priv_web_h: "本网站", priv_web_p: "本页面不使用 Cookie、跟踪器或分析工具，也不收集个人数据。你选择的语言仅保存在你的浏览器中。",
      priv_app_h: "我们的应用", priv_app_p: "游戏没有账号，也不会要求你提供姓名、电子邮件或其他个人信息。根据游戏不同，可能会使用：",
      priv_li1: "<strong>Google AdMob</strong> – 展示广告；如果你允许跟踪，可能会使用设备广告标识符。仅在你许可并（在需要时）同意后才会展示个性化广告。",
      priv_li2: "<strong>Firebase Analytics、Crashlytics 和 Remote Config</strong> – 匿名使用事件、崩溃报告和游戏设置。",
      priv_li3: "<strong>Apple App 内购买</strong> – 购买由 Apple 处理；我们不会看到你的付款信息。",
      priv_app_p2: "每款游戏自己的“支持与隐私”页面会详细列出该游戏使用的内容。",
      priv_dev_h: "存储在设备上的数据", priv_dev_p: "进度、最佳成绩、购买记录和设置都保存在你的设备上，删除应用后会一并删除。",
      priv_kid_h: "儿童隐私", priv_kid_p: "游戏面向一般受众，不针对 13 岁以下儿童。我们不会故意收集儿童的数据。",
      priv_chg_h: "政策变更", priv_chg_p: "任何变更都会连同更新日期发布在本页面。",
      priv_contact_h: "联系方式"
    },
    ja: {
      title: "2D Game Hub – ゲーム、サポート、プライバシー",
      tagline: "小さな2Dゲームで、大きな楽しみ",
      nav_games: "ゲーム", nav_about: "紹介", nav_support: "サポート", nav_privacy: "プライバシーポリシー",
      games_h: "ゲーム一覧", support: "サポート", soon: "近日公開",
      g_comic: "コミックを集めてヒーローに変身", g_capy: "カピバラに餌をあげて、氷を割ろう", g_red: "転がって、跳んで、トゲをよけよう",
      g_sugar: "線を描いてカップをいっぱいに", g_snoring: "動物をタップして、いびきの主を倒そう", g_ragdoll: "シーソーでラグドールを飛ばそう", g_sheep: "Rocky、Billy、Tinyを家まで導こう",
      about_h: "紹介",
      about_p1: "<strong>2D Game Hub</strong> は、iPhone と iPad 向けの小さな手作り 2D ゲームを集めたコレクションです。アクション、パズル、物理ゲームなどが増えていきます。",
      about_h3: "特長",
      about_li1: "短い時間で遊べる、簡単でわかりやすいゲーム", about_li2: "カラフルなピクセルアートと手描きグラフィック",
      about_li3: "アカウント不要、オフラインでも遊べます", about_li4: "基本無料。一部のゲームには買い切りのアップグレードがあります",
      about_p2: "新しいゲームを順次追加していきます。お楽しみに！",
      support_h: "サポート",
      support_p: "ゲームについてお困りの場合は、{mail} までメールでご連絡ください。次の情報をお書き添えください：",
      support_li1: "ゲーム名とバージョン", support_li2: "端末のモデルと iOS / iPadOS のバージョン", support_li3: "問題の簡単な説明（スクリーンショットがあると助かります）",
      sup_h1: "進行状況はどのように保存されますか？", sup_p1: "進行状況はお使いの端末にのみ保存されます。ゲームを削除すると、解放したステージとベスト記録も削除されます。",
      sup_h2: "音を消すには？", sup_p2: "ゲーム内の設定またはポーズメニューを開き、サウンドをオフにしてください。",
      sup_h3: "アップグレードを購入したのに反映されません", sup_p3: "ゲーム内の「購入を復元」ボタンを使ってください。購入は Apple が処理し、お使いの Apple ID に紐づきます。",
      priv_h: "プライバシーポリシー", priv_updated: "最終更新日：2026年11月12日",
      priv_web_h: "このウェブサイトについて", priv_web_p: "このページは Cookie、トラッカー、解析ツールを使用せず、個人データも収集しません。選択した言語はお使いのブラウザにのみ保存されます。",
      priv_app_h: "アプリについて", priv_app_p: "ゲームにはアカウントがなく、お名前、メールアドレスなどの個人情報は求めません。ゲームによっては、次のサービスを利用することがあります：",
      priv_li1: "<strong>Google AdMob</strong> – 広告を表示します。トラッキングを許可した場合、端末の広告識別子を使用することがあります。パーソナライズ広告は、許可があり、必要な場合は同意を得た場合にのみ表示されます。",
      priv_li2: "<strong>Firebase Analytics、Crashlytics、Remote Config</strong> – 匿名の利用イベント、クラッシュレポート、ゲーム設定。",
      priv_li3: "<strong>Apple アプリ内課金</strong> – 購入は Apple が処理します。お支払い情報が私たちに知らされることはありません。",
      priv_app_p2: "各ゲームのサポート＆プライバシーページに、そのゲームが利用するものを詳しく記載しています。",
      priv_dev_h: "端末に保存されるデータ", priv_dev_p: "進行状況、ベスト記録、購入情報、設定はお使いの端末に保存され、アプリを削除すると消去されます。",
      priv_kid_h: "お子様のプライバシー", priv_kid_p: "ゲームは一般の方向けで、13歳未満のお子様を対象としていません。お子様のデータを意図的に収集することはありません。",
      priv_chg_h: "本ポリシーの変更", priv_chg_p: "変更はこのページに更新日とともに掲載します。",
      priv_contact_h: "お問い合わせ"
    },
    ko: {
      title: "2D Game Hub – 게임, 지원 및 개인정보",
      tagline: "작은 2D 게임, 큰 즐거움",
      nav_games: "게임", nav_about: "소개", nav_support: "지원", nav_privacy: "개인정보 처리방침",
      games_h: "게임 목록", support: "지원", soon: "곧 출시",
      g_comic: "만화책을 모아 히어로로 변신", g_capy: "카피바라에게 먹이를 주고 얼음을 깨자", g_red: "구르고, 점프하고, 가시를 피하자",
      g_sugar: "선을 그려 컵을 가득 채우자", g_snoring: "동물을 탭해 코 고는 녀석을 쓰러뜨리자", g_ragdoll: "시소로 래그돌을 날려 보내자", g_sheep: "Rocky, Billy, Tiny를 집으로 데려다주자",
      about_h: "소개",
      about_p1: "<strong>2D Game Hub</strong>는 iPhone과 iPad용 작고 정성껏 만든 2D 게임 모음입니다. 플랫폼, 퍼즐, 물리 게임 등 점점 늘어나고 있어요.",
      about_h3: "특징",
      about_li1: "짧게 즐기기 좋은 쉽고 간단한 게임", about_li2: "알록달록한 픽셀 및 손그림 아트",
      about_li3: "계정이 필요 없고 오프라인에서도 플레이 가능", about_li4: "무료 플레이, 일부 게임은 선택 가능한 1회성 업그레이드 제공",
      about_p2: "새로운 게임이 계속 추가됩니다. 곧 다시 방문해 주세요!",
      support_h: "지원",
      support_p: "게임에 도움이 필요하신가요? {mail} 로 이메일을 보내 주시고 다음 내용을 포함해 주세요:",
      support_li1: "게임 이름과 버전", support_li2: "기기 모델과 iOS / iPadOS 버전", support_li3: "문제에 대한 간단한 설명 (스크린샷이 있으면 도움이 됩니다)",
      sup_h1: "진행 상황은 어떻게 저장되나요?", sup_p1: "진행 상황은 기기에만 저장됩니다. 게임을 삭제하면 잠금 해제한 레벨과 최고 기록도 함께 삭제됩니다.",
      sup_h2: "소리를 끄려면 어떻게 하나요?", sup_p2: "게임 안의 설정 또는 일시정지 메뉴를 열어 소리를 끄세요.",
      sup_h3: "업그레이드를 구매했는데 적용되지 않아요", sup_p3: "게임 안의 \"구입 복원\" 버튼을 사용하세요. 구매는 Apple에서 처리하며 Apple ID에 연결됩니다.",
      priv_h: "개인정보 처리방침", priv_updated: "최종 업데이트: 2026년 11월 12일",
      priv_web_h: "이 웹사이트", priv_web_p: "이 페이지는 쿠키, 추적기, 분석 도구를 사용하지 않으며 개인 데이터를 수집하지 않습니다. 선택한 언어는 브라우저에만 저장됩니다.",
      priv_app_h: "우리의 앱", priv_app_p: "게임에는 계정이 없으며 이름, 이메일 등 개인 정보를 요구하지 않습니다. 게임에 따라 다음을 사용할 수 있습니다:",
      priv_li1: "<strong>Google AdMob</strong> – 광고를 표시합니다. 추적을 허용하면 기기 광고 식별자를 사용할 수 있습니다. 맞춤 광고는 사용자의 허용과, 필요한 경우 동의가 있을 때만 제공됩니다.",
      priv_li2: "<strong>Firebase Analytics, Crashlytics, Remote Config</strong> – 익명 사용 이벤트, 충돌 보고서, 게임 설정.",
      priv_li3: "<strong>Apple 앱 내 구입</strong> – 구매는 Apple에서 처리하며, 결제 정보는 저희에게 전달되지 않습니다.",
      priv_app_p2: "각 게임의 지원 및 개인정보 페이지에서 해당 게임이 사용하는 항목을 자세히 확인할 수 있습니다.",
      priv_dev_h: "기기에 저장되는 데이터", priv_dev_p: "진행 상황, 최고 기록, 구매 내역, 설정은 기기에 저장되며 앱을 삭제하면 함께 삭제됩니다.",
      priv_kid_h: "어린이 개인정보", priv_kid_p: "게임은 일반 사용자를 대상으로 하며 13세 미만 어린이를 대상으로 하지 않습니다. 어린이의 데이터를 의도적으로 수집하지 않습니다.",
      priv_chg_h: "정책 변경", priv_chg_p: "변경 사항은 업데이트 날짜와 함께 이 페이지에 게시됩니다.",
      priv_contact_h: "문의"
    },
    es: {
      title: "2D Game Hub – Juegos, soporte y privacidad",
      tagline: "Pequeños juegos 2D, gran diversión",
      nav_games: "Juegos", nav_about: "Acerca de", nav_support: "Soporte", nav_privacy: "Política de privacidad",
      games_h: "Nuestros juegos", support: "Soporte", soon: "Próximamente",
      g_comic: "Cómics que te hacen héroe", g_capy: "Alimenta al capibara, rompe el hielo", g_red: "Rueda, salta y esquiva los pinchos",
      g_sugar: "Dibuja líneas, llena los vasos", g_snoring: "Toca a los animales, derriba al roncador", g_ragdoll: "Lanza muñecos con un balancín", g_sheep: "Guía a Rocky, Billy y Tiny a casa",
      about_h: "Acerca de",
      about_p1: "<strong>2D Game Hub</strong> es el hogar de una colección creciente de pequeños juegos 2D hechos a mano para iPhone y iPad: plataformas, puzles, juguetes de física y más.",
      about_h3: "Lo que ofrecemos",
      about_li1: "Juegos rápidos y fáciles de aprender para partidas cortas", about_li2: "Arte pixelado y dibujado a mano lleno de color",
      about_li3: "No necesitas cuenta; los juegos funcionan sin conexión", about_li4: "Gratis, con mejoras opcionales de pago único en algunos juegos",
      about_p2: "Iremos añadiendo juegos nuevos. ¡Vuelve pronto!",
      support_h: "Soporte",
      support_p: "¿Necesitas ayuda con un juego? Escribe a {mail} e incluye:",
      support_li1: "El nombre del juego y su versión", support_li2: "El modelo de tu dispositivo y la versión de iOS / iPadOS", support_li3: "Una breve descripción del problema (una captura de pantalla ayuda)",
      sup_h1: "¿Cómo se guarda mi progreso?", sup_p1: "El progreso se guarda solo en tu dispositivo. Al borrar un juego también se borran sus niveles desbloqueados y mejores puntuaciones.",
      sup_h2: "¿Cómo desactivo el sonido?", sup_p2: "Abre los ajustes o el menú de pausa dentro del juego y desactiva el sonido.",
      sup_h3: "Compré una mejora pero no aparece", sup_p3: "Usa el botón \"Restaurar compras\" del juego. Las compras las gestiona Apple y están vinculadas a tu Apple ID.",
      priv_h: "Política de privacidad", priv_updated: "Última actualización: 12 de noviembre de 2026",
      priv_web_h: "Este sitio web", priv_web_p: "Esta página no usa cookies, rastreadores ni analíticas, y no recopila datos personales. Tu elección de idioma se guarda solo en tu navegador.",
      priv_app_h: "Nuestras aplicaciones", priv_app_p: "Los juegos no tienen cuentas y no piden tu nombre, correo electrónico ni otros datos personales. Según el juego, pueden usar:",
      priv_li1: "<strong>Google AdMob</strong> – muestra anuncios; puede usar el identificador de publicidad del dispositivo si permites el seguimiento. Los anuncios solo se personalizan con tu permiso y, cuando sea necesario, tu consentimiento.",
      priv_li2: "<strong>Firebase Analytics, Crashlytics y Remote Config</strong> – eventos de uso anónimos, informes de fallos y ajustes del juego.",
      priv_li3: "<strong>Compras dentro de la app de Apple</strong> – las compras las gestiona Apple; nunca vemos tus datos de pago.",
      priv_app_p2: "La página de Soporte y privacidad de cada juego detalla exactamente qué usa ese juego.",
      priv_dev_h: "Datos almacenados en tu dispositivo", priv_dev_p: "El progreso, las mejores puntuaciones, las compras y los ajustes se guardan en tu dispositivo y se eliminan al borrar la app.",
      priv_kid_h: "Privacidad de los niños", priv_kid_p: "Los juegos son para público general y no están dirigidos a menores de 13 años. No recopilamos a sabiendas datos de niños.",
      priv_chg_h: "Cambios en esta política", priv_chg_p: "Los cambios se publicarán en esta página con la fecha actualizada.",
      priv_contact_h: "Contacto"
    },
    pt: {
      title: "2D Game Hub – Jogos, suporte e privacidade",
      tagline: "Pequenos jogos 2D, muita diversão",
      nav_games: "Jogos", nav_about: "Sobre", nav_support: "Suporte", nav_privacy: "Política de privacidade",
      games_h: "Nossos jogos", support: "Suporte", soon: "Em breve",
      g_comic: "Colecione quadrinhos e vire herói", g_capy: "Alimente a capivara, quebre o gelo", g_red: "Role, pule e desvie dos espinhos",
      g_sugar: "Desenhe linhas, encha os copos", g_snoring: "Toque nos animais, derrube o roncador", g_ragdoll: "Arremesse bonecos com uma gangorra", g_sheep: "Leve Rocky, Billy e Tiny para casa",
      about_h: "Sobre",
      about_p1: "<strong>2D Game Hub</strong> é a casa de uma coleção crescente de pequenos jogos 2D feitos à mão para iPhone e iPad: plataforma, quebra-cabeças, brinquedos de física e muito mais.",
      about_h3: "O que você encontra",
      about_li1: "Jogos rápidos e fáceis de aprender, para partidas curtas", about_li2: "Arte em pixel e desenhada à mão, cheia de cor",
      about_li3: "Não precisa de conta; os jogos funcionam offline", about_li4: "Grátis, com upgrades opcionais de compra única em alguns jogos",
      about_p2: "Novos jogos serão adicionados com o tempo. Volte em breve!",
      support_h: "Suporte",
      support_p: "Precisa de ajuda com um jogo? Envie um e-mail para {mail} e inclua:",
      support_li1: "O nome do jogo e a versão", support_li2: "O modelo do seu dispositivo e a versão do iOS / iPadOS", support_li3: "Uma breve descrição do problema (uma captura de tela ajuda)",
      sup_h1: "Como meu progresso é salvo?", sup_p1: "O progresso é salvo apenas no seu dispositivo. Excluir um jogo também apaga as fases desbloqueadas e as melhores pontuações.",
      sup_h2: "Como desativo o som?", sup_p2: "Abra as configurações ou o menu de pausa dentro do jogo e desative o som.",
      sup_h3: "Comprei um upgrade, mas ele não aparece", sup_p3: "Use o botão \"Restaurar compras\" no jogo. As compras são processadas pela Apple e vinculadas ao seu Apple ID.",
      priv_h: "Política de privacidade", priv_updated: "Última atualização: 12 de novembro de 2026",
      priv_web_h: "Este site", priv_web_p: "Esta página não usa cookies, rastreadores nem ferramentas de análise, e não coleta dados pessoais. Sua escolha de idioma é salva apenas no seu navegador.",
      priv_app_h: "Nossos aplicativos", priv_app_p: "Os jogos não têm contas e não pedem seu nome, e-mail ou outros dados pessoais. Dependendo do jogo, podem usar:",
      priv_li1: "<strong>Google AdMob</strong> – exibe anúncios; pode usar o identificador de publicidade do dispositivo se você permitir o rastreamento. Os anúncios só são personalizados com a sua permissão e, quando exigido, consentimento.",
      priv_li2: "<strong>Firebase Analytics, Crashlytics e Remote Config</strong> – eventos de uso anônimos, relatórios de falhas e configurações do jogo.",
      priv_li3: "<strong>Compras no app da Apple</strong> – as compras são processadas pela Apple; nunca vemos seus dados de pagamento.",
      priv_app_p2: "A página de Suporte e privacidade de cada jogo lista exatamente o que ele usa.",
      priv_dev_h: "Dados armazenados no seu dispositivo", priv_dev_p: "Progresso, melhores pontuações, compras e configurações ficam no seu dispositivo e são removidos quando você exclui o app.",
      priv_kid_h: "Privacidade de crianças", priv_kid_p: "Os jogos são para o público geral e não são direcionados a menores de 13 anos. Não coletamos conscientemente dados de crianças.",
      priv_chg_h: "Alterações nesta política", priv_chg_p: "As alterações serão publicadas nesta página com a data atualizada.",
      priv_contact_h: "Contato"
    },
    ru: {
      title: "2D Game Hub – Игры, поддержка и конфиденциальность",
      tagline: "Маленькие 2D-игры, большое веселье",
      nav_games: "Игры", nav_about: "Об играх", nav_support: "Поддержка", nav_privacy: "Политика конфиденциальности",
      games_h: "Наши игры", support: "Поддержка", soon: "Скоро",
      g_comic: "Собери комиксы, стань героем", g_capy: "Накорми капибару, разбей лёд", g_red: "Катись, прыгай и уворачивайся от шипов",
      g_sugar: "Рисуй линии, наполняй стаканы", g_snoring: "Тапай зверей, сбрось храпуна", g_ragdoll: "Запускай тряпичных кукол качелями", g_sheep: "Проведи Rocky, Billy и Tiny домой",
      about_h: "Об играх",
      about_p1: "<strong>2D Game Hub</strong> — дом для растущей коллекции небольших 2D-игр ручной работы для iPhone и iPad: платформеры, головоломки, физические игрушки и многое другое.",
      about_h3: "Что вас ждёт",
      about_li1: "Быстрые и простые игры для коротких сессий", about_li2: "Яркая пиксельная и рисованная графика",
      about_li3: "Аккаунт не нужен; игры работают офлайн", about_li4: "Бесплатно, в некоторых играх есть необязательные разовые улучшения",
      about_p2: "Новые игры будут добавляться. Заглядывайте почаще!",
      support_h: "Поддержка",
      support_p: "Нужна помощь с игрой? Напишите на {mail} и укажите:",
      support_li1: "Название игры и её версию", support_li2: "Модель устройства и версию iOS / iPadOS", support_li3: "Краткое описание проблемы (скриншот поможет)",
      sup_h1: "Как сохраняется мой прогресс?", sup_p1: "Прогресс хранится только на вашем устройстве. При удалении игры открытые уровни и лучшие результаты тоже удаляются.",
      sup_h2: "Как выключить звук?", sup_p2: "Откройте настройки или меню паузы в игре и выключите звук.",
      sup_h3: "Я купил улучшение, но оно не появилось", sup_p3: "Нажмите кнопку «Восстановить покупки» в игре. Покупки обрабатывает Apple, и они привязаны к вашему Apple ID.",
      priv_h: "Политика конфиденциальности", priv_updated: "Последнее обновление: 12 ноября 2026 г.",
      priv_web_h: "Этот сайт", priv_web_p: "Эта страница не использует cookie, трекеры и аналитику и не собирает персональные данные. Выбранный язык сохраняется только в вашем браузере.",
      priv_app_h: "Наши приложения", priv_app_p: "В играх нет аккаунтов, и они не запрашивают ваше имя, e-mail или другие личные данные. В зависимости от игры могут использоваться:",
      priv_li1: "<strong>Google AdMob</strong> — показывает рекламу; может использовать рекламный идентификатор устройства, если вы разрешили отслеживание. Персонализированная реклама показывается только с вашего разрешения и, где требуется, согласия.",
      priv_li2: "<strong>Firebase Analytics, Crashlytics и Remote Config</strong> — анонимные события использования, отчёты о сбоях и настройки игры.",
      priv_li3: "<strong>Встроенные покупки Apple</strong> — покупки обрабатывает Apple; мы не видим ваши платёжные данные.",
      priv_app_p2: "На странице «Поддержка и конфиденциальность» каждой игры подробно указано, что она использует.",
      priv_dev_h: "Данные на вашем устройстве", priv_dev_p: "Прогресс, лучшие результаты, покупки и настройки хранятся на вашем устройстве и удаляются вместе с приложением.",
      priv_kid_h: "Конфиденциальность детей", priv_kid_p: "Игры рассчитаны на широкую аудиторию и не предназначены для детей младше 13 лет. Мы сознательно не собираем данные детей.",
      priv_chg_h: "Изменения политики", priv_chg_p: "Изменения публикуются на этой странице с обновлённой датой.",
      priv_contact_h: "Контакты"
    }
  };

  var root = document.documentElement;
  var select = document.getElementById("lang-select");
  var els = Array.prototype.slice.call(document.querySelectorAll("[data-i18n],[data-i18n-html]"));

  // Capture English from the DOM.
  var EN = { title: document.title };
  els.forEach(function (el) {
    if (el.hasAttribute("data-i18n-html")) EN[el.getAttribute("data-i18n-html")] = el.innerHTML;
    else EN[el.getAttribute("data-i18n")] = el.textContent;
  });
  T.en = EN;

  function apply(lang) {
    var d = T[lang] || EN;
    root.lang = lang;
    document.title = d.title || EN.title;
    els.forEach(function (el) {
      var h = el.hasAttribute("data-i18n-html");
      var k = el.getAttribute(h ? "data-i18n-html" : "data-i18n");
      var v = d[k] != null ? d[k] : EN[k];
      if (h) el.innerHTML = v.replace("{mail}", MAIL); else el.textContent = v;
    });
    select.value = lang;
  }

  select.addEventListener("change", function () {
    apply(select.value);
    try { localStorage.setItem("lang", select.value); } catch (e) {}
  });
  apply(root.lang);
})();
