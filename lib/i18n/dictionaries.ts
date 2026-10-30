export type Language = 'vi' | 'en';

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    partners: string;
    products: string;
    careers: string;
    news: string;
    contact: string;
    searchPlaceholder: string;
    searchBtn: string;
    consultBtn: string;
    techHotline: string;
    branchesCount: string;
  };
  footer: {
    expTitle: string;
    expDesc: string;
    genuineTitle: string;
    genuineDesc: string;
    supportTitle: string;
    supportDesc: string;
    explore: string;
    solutions: string;
    branches: string;
    copyright: string;
  };
  home: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroDesc: string;
    coCq: string;
    training: string;
    engineers: string;
    exploreBtn: string;
    consultProjectBtn: string;
    highlightTech: string;
    highlightDesc: string;
    partnerMfrs: string;
    distributionNetwork: string;
    branchesCountLabel: string;
    statExp: string;
    statHospitals: string;
    statBranches: string;
    statStandard: string;
    missionBadge: string;
    missionTitle: string;
    missionQuote: string;
    missionPillars: Array<{
      title: string;
      desc: string;
    }>;
    suppliesBadge: string;
    suppliesTitle: string;
    suppliesDesc: string;
    categoriesBadge: string;
    categoriesTitle: string;
    viewAllCategories: string;
    exploreDevices: string;
    showroomBadge: string;
    showroomTitle: string;
    showroomDesc: string;
    viewAllProducts: string;
    solutionsBadge: string;
    solutionsTitle: string;
    solutionsDesc: string;
    learnModel: string;
    whyChooseUsBadge: string;
    whyChooseUsTitle: string;
    whyChooseUsDesc: string;
    whyChooseItems: Array<{
      title: string;
      description: string;
      image: string;
    }>;
    partnersBadge: string;
    partnersTitle: string;
    partnersDesc: string;
    viewAllPartners: string;
    newsBadge: string;
    newsTitle: string;
    viewAllNews: string;
    readMore: string;
    bottomCtaTitle: string;
    bottomCtaDesc: string;
    bottomCtaBtn: string;
  };
  partners: {
    badge: string;
    heroTitle: string;
    heroDesc: string;
    trust1Title: string;
    trust1Desc: string;
    trust2Title: string;
    trust2Desc: string;
    trust3Title: string;
    trust3Desc: string;
    listBadge: string;
    listTitle: string;
    viewCatalog: string;
    strategicBadge: string;
    viewProducts: string;
    consultConfig: string;
    whyBadge: string;
    whyTitle: string;
    whyDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    contactOffice: string;
  };
  about: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    statExp: string;
    statExpLabel: string;
    statScope: string;
    statScopeLabel: string;
    statModel: string;
    statModelLabel: string;
    sectionBadge: string;
    sectionTitle: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    card1Badge: string;
    card1Title: string;
    card1Desc: string;
    card1Point1: string;
    card1Point2: string;
    card1Point3: string;
    card2Badge: string;
    card2Title: string;
    card2Desc: string;
    card2Point1: string;
    card2Point2: string;
    card2Point3: string;
    card3Badge: string;
    card3Title: string;
    card3Desc: string;
    card3Point1: string;
    card3Point2: string;
    card3Point3: string;
    commitmentQuote: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  consultation: {
    modalTitle: string;
    modalSubtitle: string;
    interestedDevice: string;
    modelSku: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    organization: string;
    organizationPlaceholder: string;
    notes: string;
    notesPlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    emergencySupport: string;
    projectHotline: string;
    close: string;
    buttonDefault: string;
  };
}

export const DICTIONARY: Record<Language, Dictionary> = {
  vi: {
    nav: {
      home: 'TRANG CHỦ',
      about: 'GIỚI THIỆU',
      partners: 'ĐỐI TÁC',
      products: 'SẢN PHẨM',
      careers: 'TUYỂN DỤNG',
      news: 'TRUYỀN THÔNG',
      contact: 'LIÊN HỆ',
      searchPlaceholder: 'Nhập tên thiết bị y tế (Surtex, Pentax, Stent...)...',
      searchBtn: 'Tìm Kiếm',
      consultBtn: 'Tư Vấn',
      techHotline: 'Hotline Kỹ Thuật:',
      branchesCount: '4 Chi nhánh:',
    },
    footer: {
      expTitle: '15+ Năm Kinh Nghiệm Y Tế',
      expDesc: 'Tiên phong xã hội hóa & đầu tư trang thiết bị bệnh viện từ năm 2010.',
      genuineTitle: 'Thiết Bị Chính Hãng 100%',
      genuineDesc: 'Đầy đủ chứng chỉ xuất xứ CO/CQ, đạt tiêu chuẩn CE, FDA, ISO 13485.',
      supportTitle: 'Kỹ Sư Y Sinh Hỗ Trợ 24/7',
      supportDesc: 'Mạng lưới kỹ thuật tại 4 chi nhánh sẵn sàng ứng cứu và bảo trì thiết bị.',
      explore: 'Khám Phá',
      solutions: 'Giải Pháp & Dịch Vụ',
      branches: 'Mạng Lưới Chi Nhánh',
      copyright: 'Bản quyền thuộc về Công ty Cổ phần Đầu tư Giải pháp Y tế (HSI Corp). Bảo lưu mọi quyền.',
    },
    home: {
      badge: 'Tiên phong từ năm 2010 • Đối tác y tế toàn quốc',
      heroTitle1: 'Giải Pháp Đầu Tư Y Tế &',
      heroTitle2: 'Thiết Bị Y Tế Kỹ Thuật Cao',
      heroDesc: 'Được thành lập từ năm 2010, HSI Corp tự hào là đơn vị tiên phong trong lĩnh vực tư vấn giải pháp tài chính y tế, xã hội hóa y tế và phân phối các trang thiết bị y tế kỹ thuật cao phục vụ các bệnh viện, phòng khám trên toàn quốc.',
      coCq: '100% Chính hãng CO/CQ',
      training: 'Đào tạo & Chuyển giao',
      engineers: 'Kỹ sư hỗ trợ 24/7',
      exploreBtn: 'Khám Phá Thiết Bị Y Tế',
      consultProjectBtn: 'Yêu Cầu Tư Vấn Dự Án',
      highlightTech: 'Công nghệ nổi bật',
      highlightDesc: 'Hệ thống nội soi can thiệp & Phẫu thuật ERCP thế hệ mới',
      partnerMfrs: 'Hãng sản xuất đối tác:',
      distributionNetwork: 'Mạng lưới phân phối: Toàn quốc',
      branchesCountLabel: '4 Chi nhánh',
      statExp: 'Năm Kinh Nghiệm (Từ 2010)',
      statHospitals: 'Bệnh Viện & Phòng Khám Đối Tác',
      statBranches: 'Chi Nhánh Toàn Quốc',
      statStandard: 'Thiết Bị Tiêu Chuẩn CE/FDA',
      missionBadge: 'SỨ MỆNH DOANH NGHIỆP',
      missionTitle: 'Đồng Hành Nâng Tầm Chất Lượng Y Tế Việt Nam',
      missionQuote: 'HSI cung cấp sản phẩm, dịch vụ y tế an toàn, hiệu quả nhằm nâng cao chất lượng khám chữa bệnh và cuộc sống cho người dân, đồng thời giảm gánh nặng cho Chính phủ và phát triển hệ thống y tế Việt Nam.',
      missionPillars: [
        {
          title: 'Vì Người Bệnh & Đời Sống',
          desc: 'Cung cấp trang thiết bị và vật tư can thiệp an toàn, chuẩn xác, giúp người dân tiếp cận kỹ thuật y sinh tiên tiến hàng đầu ngay tại Việt Nam.',
        },
        {
          title: 'Vì Bệnh Viện & Cơ Sở Y Tế',
          desc: 'Đồng hành tháo gỡ áp lực ngân sách thông qua các giải pháp tài chính linh hoạt, đặt máy xã hội hóa, chuyển giao kỹ thuật và dịch vụ bảo trì 24/7.',
        },
        {
          title: 'Vì Hệ Thống Y Tế Quốc Gia',
          desc: 'Góp phần giảm gánh nặng chi ngân sách công, thúc đẩy hiện đại hóa công nghệ y khoa và phát triển mạng lưới chăm sóc sức khỏe bền vững.',
        },
      ],
      suppliesBadge: 'DANH MỤC VẬT TƯ TIÊU HAO',
      suppliesTitle: 'Vật Tư Y Tế Chuyên Khoa',
      suppliesDesc: 'Hệ thống vật tư tiêu hao, can thiệp phẫu thuật và chăm sóc điều trị chất lượng cao do HSI Corp phân phối.',
      categoriesBadge: 'Lĩnh Vực Chuyên Môn',
      categoriesTitle: 'Danh Mục Thiết Bị Y Tế Chủ Lực',
      viewAllCategories: 'Xem toàn bộ danh mục',
      exploreDevices: 'Tra cứu thiết bị',
      showroomBadge: 'Showroom Thiết Bị',
      showroomTitle: 'Thiết Bị Tiêu Biểu & Phổ Biến',
      showroomDesc: 'Toàn bộ sản phẩm được nhập khẩu chính hãng với đầy đủ giấy phép lưu hành của Bộ Y Tế.',
      viewAllProducts: 'Xem Tất Cả Sản Phẩm',
      solutionsBadge: 'GIẢI PHÁP ĐẦU TƯ TỔNG THỂ',
      solutionsTitle: 'Giải Pháp Đầu Tư Tổng Thể',
      solutionsDesc: 'HSI Corp đồng hành cùng các bệnh viện, phòng khám tiếp cận giải pháp tài chính, trang thiết bị công nghệ cao và mô hình quản trị hiệu quả.',
      learnModel: 'Tìm hiểu chi tiết',
      whyChooseUsBadge: 'Giá Trị Cốt Lõi & Cam Kết',
      whyChooseUsTitle: 'LÝ DO CHỌN HSI CORP',
      whyChooseUsDesc: 'HSI Corp luôn đồng hành cùng các bệnh viện, trung tâm y tế với công nghệ hiện đại bậc nhất, quy trình chuẩn mực và dịch vụ tận tâm.',
      whyChooseItems: [
        {
          title: 'Công nghệ hiện đại',
          description: 'Cung cấp những thiết bị tân tiến nhất, hợp tác cùng những nhà sản xuất thiết bị y tế hàng đầu thế giới như Philips, Lowenstein, Otopront, Pentax, Surtex.',
          image: '/images/partners/LD1.jpg',
        },
        {
          title: 'Quy trình chuyên nghiệp',
          description: 'Đội ngũ chuyên viên của chúng tôi sẽ lên kế hoạch, điều phối, dự toán và giám sát tiến trình dự án đảm bảo tiến độ chặt chẽ.',
          image: '/images/partners/LD2.jpg',
        },
        {
          title: 'Dịch vụ tốt nhất',
          description: 'Chúng tôi luôn lắng nghe khách hàng. Chúng tôi tiếp nhận vấn đề, tôn trọng và làm mọi thứ trong khả năng để hỗ trợ các bệnh viện, phòng khám tối đa.',
          image: '/images/partners/LD3.jpg',
        },
        {
          title: 'Hồ sơ thủ tục đơn giản',
          description: 'Chúng tôi sẽ chuyển thông tin dự án của khách hàng tới các chuyên gia ngay khi nhận được, giúp chuẩn bị và hoàn thiện hồ sơ thầu, pháp lý trong thời gian nhanh nhất.',
          image: '/images/partners/LD4.jpg',
        },
      ],
      partnersBadge: 'Mạng Lưới Quốc Tế',
      partnersTitle: 'Đối Tác Sản Xuất Thiết Bị Y Tế Toàn Cầu',
      partnersDesc: 'HSI Corp là đại diện phân phối chính hãng và đối tác chiến lược tại Việt Nam của các tập đoàn y sinh hàng đầu thế giới.',
      viewAllPartners: 'Xem chi tiết mạng lưới đối tác',
      newsBadge: 'Bản Tin Y Sinh',
      newsTitle: 'Tin Tức & Hoạt Động Chuyển Giao',
      viewAllNews: 'Xem tất cả tin tức',
      readMore: 'Đọc chi tiết',
      bottomCtaTitle: 'Quý Đơn Vị Cần Đề Xuất Cấu Hình Thiết Bị Hoặc Phương Án Hợp Tác Đầu Tư?',
      bottomCtaDesc: 'Đội ngũ chuyên viên y sinh và cố vấn đầu tư y tế của HSI Corp sẵn sàng lắng nghe, khảo sát nhu cầu khoa phòng và gửi đề xuất tối ưu nhất.',
      bottomCtaBtn: 'Gửi Yêu Cầu Tư Vấn & Báo Giá',
    },
    partners: {
      badge: 'Mạng Lưới Đối Tác Toàn Cầu',
      heroTitle: 'Đồng Hành Cùng Các Hãng Y Tế Hàng Đầu Thế Giới',
      heroDesc: 'HSI Corp là đại diện phân phối chính hãng và đối tác chiến lược tại Việt Nam của các nhãn hàng uy tín.',
      trust1Title: '100% Chính Hãng & CO/CQ',
      trust1Desc: 'Nhập khẩu trực tiếp từ nhà máy sản xuất, có giấy ủy quyền chính thức và hồ sơ pháp lý Bộ Y Tế.',
      trust2Title: 'Tiêu Chuẩn Quốc Tế',
      trust2Desc: 'Toàn bộ sản phẩm đạt tiêu chuẩn chất lượng khắt khe nhất của châu Âu (CE) và Hoa Kỳ (FDA).',
      trust3Title: 'Đào Tạo & Chuyển Giao',
      trust3Desc: 'Đội ngũ kỹ sư y sinh được đào tạo chuyên sâu bởi chuyên gia quốc tế của hãng tại nước ngoài.',
      listBadge: 'Hồ Sơ Hãng Sản Xuất',
      listTitle: 'Danh Sách Đối Tác Chiến Lược Toàn Cầu',
      viewCatalog: 'Xem danh mục sản phẩm cung ứng',
      strategicBadge: 'Chiến lược',
      viewProducts: 'Xem thiết bị, sản phẩm của hãng',
      consultConfig: 'Tư vấn cấu hình',
      whyBadge: 'Năng Lực Triển Khai',
      whyTitle: 'LÝ DO CHỌN HSI CORP',
      whyDesc: 'Cam kết đồng hành lâu dài cùng đối tác quốc tế và hệ thống y tế Việt Nam',
      ctaTitle: 'Hợp Tác Phân Phối Cùng HSI Corp',
      ctaDesc: 'HSI Corp luôn chào đón các nhà sản xuất trang thiết bị y tế kỹ thuật cao quốc tế mong muốn mở rộng thị phần và phát triển giải pháp y khoa tại Việt Nam.',
      ctaBtn: 'Đăng Ký Hợp Tác Phân Phối',
      contactOffice: 'Liên Hệ Văn Phòng HSI',
    },
    about: {
      heroBadge: 'TIÊN PHONG TỪ NĂM 2010 • ĐỐI TÁC Y TẾ TOÀN QUỐC',
      heroTitle: 'Đồng Hành Cùng Sự Phát Triển Của Ngành Y Tế Việt Nam',
      heroSubtitle: 'Công Ty Cổ Phần Đầu Tư Giải Pháp Y Tế HSI (HSI Corp)',
      heroDesc: 'Đơn vị chuyên tư vấn, cung cấp các gói giải pháp đầu tư cho bệnh viện, phòng khám, thực hiện các dự án xã hội hóa y tế và tiên phong nghiên cứu giải pháp y tế từ xa trên phạm vi toàn quốc.',
      statExp: '15+ Năm',
      statExpLabel: 'Kinh nghiệm đồng hành y tế',
      statScope: 'Toàn Quốc',
      statScopeLabel: 'Phạm vi triển khai dự án',
      statModel: 'PPP & Thuê máy',
      statModelLabel: 'Mô hình đầu tư linh hoạt',
      sectionBadge: 'GIỚI THIỆU CÔNG TY',
      sectionTitle: 'Tiên Phong Tư Vấn & Cung Cấp Giải Pháp Đầu Tư Y Tế Toàn Diện',
      p1: 'Công ty Cổ phần Đầu tư Giải pháp y tế HSI thành lập vào năm 2010 là một đơn vị chuyên tư vấn, cung cấp các gói giải pháp đầu tư cho bệnh viện, phòng khám và thực hiện các dự án xã hội hóa y tế trên phạm vi toàn quốc.',
      p2: 'Chúng tôi luôn cố gắng nỗ lực đem đến những giải pháp đầu tư hiệu quả nhất cho các bệnh viện, cơ sở y tế thông qua việc cho thuê máy, liên doanh liên kết đặt máy và hợp tác công tư. Ngoài ra, với phạm vi tiếp cận toàn quốc và mục tiêu kết nối sản phẩm và dịch vụ hỗ trợ sức khỏe con người, chúng tôi đã và đang tiến hành nghiên cứu các giải pháp y tế từ xa cho dịch vụ chăm sóc sức khỏe tại Việt Nam. Công nghệ y tế từ xa được tạo ra như một cách điều trị bệnh nhân ở những vùng xa xôi, cách xa các cơ sở y tế địa phương hay trong những khu vực có sự thiếu hụt của các chuyên gia y tế.',
      p3: 'Để tiếp cận dự án chính xác, chúng tôi luôn đặt mình là chuyên viên đầu tư và tài chính cá nhân của bệnh viện và quản lý hiệu quả mọi khía cạnh trong công việc đầu tư của họ. Đội ngũ chuyên gia của chúng tôi cung cấp cho khách hàng kiến thức và kỹ năng về các khía cạnh quan trọng của vấn đề đầu tư vào các dự án để tối ưu hóa lợi ích cho cả người bệnh và bệnh viện.',
      p4: 'Với tinh thần luôn đổi mới để phát triển, HSI tự tin sẽ là đối tác đáng tin cậy của khách hàng.',
      card1Badge: 'MÔ HÌNH HỢP TÁC ĐẦU TƯ',
      card1Title: 'Cho Thuê Máy, Đặt Máy & Hợp Tác Công Tư (PPP)',
      card1Desc: 'Đem đến những giải pháp đầu tư hiệu quả nhất cho các bệnh viện, cơ sở y tế thông qua việc cho thuê máy, liên doanh liên kết đặt máy và hợp tác công tư, tối ưu hóa bài toán nguồn vốn và giảm áp lực ngân sách.',
      card1Point1: 'Cho thuê trang thiết bị y tế hiện đại, linh hoạt thời hạn',
      card1Point2: 'Liên doanh liên kết đặt máy, không lo rủi ro vốn ban đầu',
      card1Point3: 'Hợp tác công tư (PPP) minh bạch theo quy chuẩn Bộ Y Tế',
      card2Badge: 'CÔNG NGHỆ ĐỘT PHÁ',
      card2Title: 'Tiên Phong Nghiên Cứu Giải Pháp Y Tế Từ Xa (Telemedicine)',
      card2Desc: 'Nghiên cứu các giải pháp y tế từ xa cho dịch vụ chăm sóc sức khỏe tại Việt Nam, kết nối sản phẩm và dịch vụ hỗ trợ sức khỏe con người, mở rộng cơ hội tiếp cận y tế chất lượng cao.',
      card2Point1: 'Hỗ trợ điều trị và hội chẩn bệnh nhân ở vùng xa xôi',
      card2Point2: 'Xóa nhòa khoảng cách địa lý giữa các tuyến y tế',
      card2Point3: 'Bù đắp sự thiếu hụt của các chuyên gia y tế tuyến cơ sở',
      card3Badge: 'ĐỒNG HÀNH CHUYÊN SÂU',
      card3Title: 'Chuyên Viên Tài Chính & Quản Lý Đầu Tư Cho Bệnh Viện',
      card3Desc: 'Luôn đặt mình là chuyên viên đầu tư và tài chính cá nhân của bệnh viện, quản lý hiệu quả mọi khía cạnh đầu tư và cung cấp kiến thức, kỹ năng tối ưu hóa lợi ích cao nhất.',
      card3Point1: 'Quản lý bài bản và hiệu quả mọi khía cạnh dự án đầu tư',
      card3Point2: 'Cung cấp kiến thức và kỹ năng tài chính y tế chuyên sâu',
      card3Point3: 'Tối ưu hóa lợi ích hài hòa cho cả bệnh viện và người bệnh',
      commitmentQuote: 'Với tinh thần luôn đổi mới để phát triển, HSI tự tin sẽ là đối tác đáng tin cậy của khách hàng.',
      ctaTitle: 'Hợp Tác Cùng HSI Corp Nâng Cao Năng Lực Y Tế',
      ctaDesc: 'Chúng tôi luôn sẵn sàng lắng nghe và xây dựng các phương án đầu tư trang thiết bị tối ưu nhất cho từng bệnh viện và cơ sở y tế.',
      ctaBtn: 'Liên Hệ Cố Vấn Dự Án',
    },
    consultation: {
      modalTitle: 'Yêu Cầu Tư Vấn Kỹ Thuật & Báo Giá',
      modalSubtitle: 'Chuyên viên y sinh HSI Corp sẽ phản hồi trong vòng 15-30 phút',
      interestedDevice: 'Thiết bị quan tâm:',
      modelSku: 'Mã thiết bị / Model:',
      fullName: 'Họ và tên người liên hệ',
      fullNamePlaceholder: 'Ví dụ: BS. Nguyễn Văn An hoặc DS. Trần Thị Mai',
      phone: 'Số điện thoại liên hệ',
      phonePlaceholder: 'Ví dụ: 0912 345 678',
      email: 'Địa chỉ Email nhận báo giá',
      emailPlaceholder: 'bacsi@benhvien.vn',
      organization: 'Bệnh viện / Cơ sở y tế công tác',
      organizationPlaceholder: 'Ví dụ: Bệnh viện Đa khoa Tỉnh, Phòng khám...',
      notes: 'Nội dung cần tư vấn hoặc cấu hình mong muốn',
      notesPlaceholder: 'Vui lòng ghi rõ nhu cầu cấu hình thiết bị, phương án đầu tư thuê/mua hoặc thầu...',
      submit: 'Gửi Yêu Cầu Tư Vấn & Báo Giá',
      submitting: 'Đang gửi thông tin...',
      successTitle: 'Đã Gửi Yêu Cầu Thành Công!',
      successDesc: 'Cảm ơn Quý đơn vị đã quan tâm đến giải pháp thiết bị y tế của HSI Corp. Chuyên viên kỹ thuật phụ trách khu vực sẽ sớm liên hệ trực tiếp.',
      emergencySupport: 'Hỗ trợ khẩn cấp 24/7:',
      projectHotline: 'Hotline Dự Án:',
      close: 'Đóng thông báo',
      buttonDefault: 'Yêu Cầu Tư Vấn',
    },
  },
  en: {
    nav: {
      home: 'HOME',
      about: 'ABOUT US',
      partners: 'PARTNERS',
      products: 'PRODUCTS',
      careers: 'CAREERS',
      news: 'NEWS',
      contact: 'CONTACT',
      searchPlaceholder: 'Search medical equipment (Surtex, Pentax, Stent...)...',
      searchBtn: 'Search',
      consultBtn: 'Consultation',
      techHotline: 'Technical Hotline:',
      branchesCount: '4 Branches:',
    },
    footer: {
      expTitle: '15+ Years Medical Experience',
      expDesc: 'Pioneering healthcare socialization and hospital equipment investment since 2010.',
      genuineTitle: '100% Genuine Equipment',
      genuineDesc: 'Full CO/CQ certification, compliant with CE, FDA, and ISO 13485 standards.',
      supportTitle: '24/7 Biomedical Support',
      supportDesc: 'Engineering network across 4 branches ready for emergency response and maintenance.',
      explore: 'Explore',
      solutions: 'Solutions & Services',
      branches: 'Branch Network',
      copyright: 'Copyright © Medical Solutions Investment Joint Stock Company (HSI Corp). All rights reserved.',
    },
    home: {
      badge: 'Pioneering since 2010 • Nationwide Healthcare Partner',
      heroTitle1: 'Medical Investment Solutions &',
      heroTitle2: 'High-Tech Medical Equipment',
      heroDesc: 'Established in 2010, HSI Corp is proud to be a pioneer in healthcare financial advisory, medical socialization, and the distribution of high-tech biomedical equipment serving hospitals and clinics nationwide.',
      coCq: '100% Genuine CO/CQ',
      training: 'Training & Tech Transfer',
      engineers: '24/7 Engineering Support',
      exploreBtn: 'Explore Medical Equipment',
      consultProjectBtn: 'Request Project Consultation',
      highlightTech: 'Featured Technology',
      highlightDesc: 'Next-Gen Interventional Endoscopy & ERCP Surgical Systems',
      partnerMfrs: 'Partner Manufacturers:',
      distributionNetwork: 'Distribution Network: Nationwide',
      branchesCountLabel: '4 Branches',
      statExp: 'Years of Experience (Since 2010)',
      statHospitals: 'Partner Hospitals & Clinics',
      statBranches: 'Nationwide Branches',
      statStandard: 'CE/FDA Certified Equipment',
      missionBadge: 'OUR CORPORATE MISSION',
      missionTitle: 'Empowering Healthcare Excellence in Vietnam',
      missionQuote: 'HSI delivers safe and effective medical products and services to elevate diagnostic quality and public well-being, while relieving public fiscal burdens and advancing Vietnam’s healthcare infrastructure.',
      missionPillars: [
        {
          title: 'For Patients & Quality of Life',
          desc: 'Delivering authentic, high-precision biomedical devices and surgical consumables to ensure safe, superior clinical outcomes for patients.',
        },
        {
          title: 'For Hospitals & Clinics',
          desc: 'Overcoming capital constraints through flexible leasing and socialization models, on-site tech transfer, and 24/7 dedicated engineering support.',
        },
        {
          title: 'For National Healthcare Progress',
          desc: 'Relieving public budget pressures and advancing high-tech medical infrastructure to support sustainable nationwide healthcare development.',
        },
      ],
      suppliesBadge: 'MEDICAL CONSUMABLES & SUPPLIES',
      suppliesTitle: 'Specialized Medical Supplies',
      suppliesDesc: 'High-tech medical consumables, surgical and specialized intervention supplies distributed by HSI Corp.',
      categoriesBadge: 'Clinical Specialties',
      categoriesTitle: 'Key Medical Equipment Categories',
      viewAllCategories: 'View all categories',
      exploreDevices: 'Explore devices',
      showroomBadge: 'Equipment Showroom',
      showroomTitle: 'Featured & Popular Equipment',
      showroomDesc: 'All products are officially imported with full circulation permits from the Ministry of Health.',
      viewAllProducts: 'View All Products',
      solutionsBadge: 'COMPREHENSIVE INVESTMENT SOLUTIONS',
      solutionsTitle: 'Comprehensive Investment Solutions',
      solutionsDesc: 'HSI Corp accompanies hospitals and clinics in accessing financial solutions, high-tech medical equipment, and efficient governance models.',
      learnModel: 'Learn more',
      whyChooseUsBadge: 'Core Values & Commitment',
      whyChooseUsTitle: 'WHY CHOOSE HSI CORP',
      whyChooseUsDesc: 'HSI Corp consistently supports hospitals and medical centers with state-of-the-art technology, standardized workflows, and dedicated services.',
      whyChooseItems: [
        {
          title: 'Modern Technology',
          description: 'Supplying advanced equipment from leading global healthcare manufacturers such as Philips, Lowenstein, Otopront, Pentax, and Surtex.',
          image: '/images/partners/LD1.jpg',
        },
        {
          title: 'Professional Workflow',
          description: 'Our team plans, coordinates, estimates, and supervises project progress to strictly ensure milestones and medical standards.',
          image: '/images/partners/LD2.jpg',
        },
        {
          title: 'Best-in-class Service',
          description: 'We listen to our healthcare clients, address concerns promptly, respect clinical requirements, and provide maximum support to hospitals.',
          image: '/images/partners/LD3.jpg',
        },
        {
          title: 'Streamlined Procedures',
          description: 'We transfer project requirements to specialized consultants promptly, expediting bidding documentation, regulatory dossiers, and legal procedures.',
          image: '/images/partners/LD4.jpg',
        },
      ],
      partnersBadge: 'International Network',
      partnersTitle: 'Global Medical Equipment Partners',
      partnersDesc: 'HSI Corp is the authorized distributor and strategic partner in Vietnam for world-leading biomedical manufacturers.',
      viewAllPartners: 'View all partner profiles',
      newsBadge: 'Biomedical News',
      newsTitle: 'News & Technology Transfer Activities',
      viewAllNews: 'View all news',
      readMore: 'Read details',
      bottomCtaTitle: 'Need Equipment Configuration Proposals or Investment Plans?',
      bottomCtaDesc: 'HSI Corp biomedical specialists and healthcare investment consultants are ready to inspect departmental needs and deliver optimal proposals.',
      bottomCtaBtn: 'Request Consultation & Price Quotation',
    },
    partners: {
      badge: 'Global Partner Network',
      heroTitle: 'Partnering With World-Leading Healthcare Brands',
      heroDesc: 'HSI Corp is the authorized distributor and strategic partner in Vietnam of reputable healthcare brands.',
      trust1Title: '100% Genuine & CO/CQ',
      trust1Desc: 'Directly imported from manufacturers with official authorization letters and Ministry of Health regulatory files.',
      trust2Title: 'International Standards',
      trust2Desc: 'All products adhere to stringent quality standards of Europe (CE mark) and the United States (FDA).',
      trust3Title: 'Training & Knowledge Transfer',
      trust3Desc: 'Biomedical engineering team rigorously trained by international manufacturer experts overseas.',
      listBadge: 'Manufacturer Profiles',
      listTitle: 'Global Strategic Partner Directory',
      viewCatalog: 'View supplied product catalog',
      strategicBadge: 'Strategic Partner',
      viewProducts: 'View manufacturer equipment & products',
      consultConfig: 'Request Config',
      whyBadge: 'Deployment Capabilities',
      whyTitle: 'WHY CHOOSE HSI CORP',
      whyDesc: 'Committed to long-term partnerships with global manufacturers and the Vietnamese healthcare system',
      ctaTitle: 'Distribute With HSI Corp',
      ctaDesc: 'HSI Corp warmly welcomes high-tech international medical equipment manufacturers seeking to expand market share and healthcare solutions in Vietnam.',
      ctaBtn: 'Register For Distribution Partnership',
      contactOffice: 'Contact HSI Office',
    },
    about: {
      heroBadge: 'PIONEERING SINCE 2010 • NATIONWIDE HEALTHCARE PARTNER',
      heroTitle: 'Advancing Healthcare Development in Vietnam',
      heroSubtitle: 'Medical Solutions Investment JSC (HSI Corp)',
      heroDesc: 'Specializing in advisory and investment solution packages for hospitals and clinics, executing healthcare socialization projects, and pioneering telemedicine solutions nationwide.',
      statExp: '15+ Years',
      statExpLabel: 'Healthcare partnership experience',
      statScope: 'Nationwide',
      statScopeLabel: 'Project implementation reach',
      statModel: 'PPP & Leasing',
      statModelLabel: 'Flexible investment models',
      sectionBadge: 'COMPANY OVERVIEW',
      sectionTitle: 'Pioneering Advisory & Comprehensive Healthcare Investment Solutions',
      p1: 'Medical Solutions Investment JSC (HSI Corp), established in 2010, is a specialized enterprise providing consultancy and investment solutions packages for hospitals and clinics, executing healthcare socialization projects nationwide.',
      p2: 'We constantly strive to deliver the most effective investment solutions to hospitals and medical facilities through machine leasing, joint-venture machine placement, and public-private partnerships (PPP). In addition, with a nationwide reach and the goal of connecting human health products and services, we have been actively researching telemedicine solutions for healthcare in Vietnam. Telemedicine technology is created as a means of treating patients in remote areas, far from local medical facilities, or in areas facing a shortage of specialized medical personnel.',
      p3: 'To ensure accurate project approach, we always position ourselves as the dedicated investment and financial advisory specialist for the hospital, managing all aspects of their investment efficiently. Our team of experts equips clients with knowledge and skills on critical facets of project investment to optimize benefits for both patients and healthcare facilities.',
      p4: 'With a persistent spirit of innovation for development, HSI is confident to be a trustworthy partner for our clients.',
      card1Badge: 'INVESTMENT & PARTNERSHIP MODELS',
      card1Title: 'Equipment Leasing, Placement & PPP Collaboration',
      card1Desc: 'Delivering the most effective investment solutions for hospitals and clinics through machine leasing, joint-venture placement, and public-private partnerships, optimizing capital budget constraints.',
      card1Point1: 'Flexible modern medical equipment leasing terms',
      card1Point2: 'Joint-venture placement with zero upfront capital risk',
      card1Point3: 'Standardized Public-Private Partnership (PPP) compliance',
      card2Badge: 'BREAKTHROUGH TECHNOLOGY',
      card2Title: 'Pioneering Telemedicine Solutions in Vietnam',
      card2Desc: 'Researching and deploying remote healthcare solutions to connect products and health services, broadening access for patients in remote areas far from medical facilities or specialist doctors.',
      card2Point1: 'Remote patient diagnosis and specialized consultation',
      card2Point2: 'Bridging geographical healthcare divides nationwide',
      card2Point3: 'Compensating for local shortage of medical specialists',
      card3Badge: 'SPECIALIZED ADVISORY',
      card3Title: 'Personalized Financial Advisory & Investment Management',
      card3Desc: 'Acting as dedicated hospital financial specialists, managing all facets of healthcare investment and equipping partners with essential skills to maximize benefits for both patients and healthcare facilities.',
      card3Point1: 'Comprehensive healthcare investment project management',
      card3Point2: 'In-depth medical financial expertise and capabilities',
      card3Point3: 'Balancing patient outcomes with hospital sustainability',
      commitmentQuote: 'With a persistent spirit of innovation for development, HSI is confident to be a trustworthy partner for our clients.',
      ctaTitle: 'Partner with HSI Corp to Elevate Healthcare',
      ctaDesc: 'We are ready to construct optimal equipment investment proposals customized for each healthcare facility.',
      ctaBtn: 'Contact Project Advisors',
    },
    consultation: {
      modalTitle: 'Technical Consultation & Price Quotation',
      modalSubtitle: 'HSI Corp biomedical specialists will respond within 15-30 minutes',
      interestedDevice: 'Device of interest:',
      modelSku: 'Device Code / Model:',
      fullName: 'Contact Person Full Name',
      fullNamePlaceholder: 'e.g., Dr. John Doe or Pharmacist Mary Smith',
      phone: 'Phone Number',
      phonePlaceholder: 'e.g., +84 912 345 678',
      email: 'Email for Quotation',
      emailPlaceholder: 'doctor@hospital.org',
      organization: 'Hospital / Healthcare Facility',
      organizationPlaceholder: 'e.g., Provincial General Hospital, Clinic...',
      notes: 'Consultation Needs or Desired Configuration',
      notesPlaceholder: 'Please specify desired equipment configuration, lease/purchase or bidding requirements...',
      submit: 'Submit Consultation Request',
      submitting: 'Submitting information...',
      successTitle: 'Request Submitted Successfully!',
      successDesc: 'Thank you for your interest in HSI Corp medical equipment solutions. Our regional technical specialist will contact you directly shortly.',
      emergencySupport: '24/7 Emergency Support:',
      projectHotline: 'Project Hotline:',
      close: 'Close notification',
      buttonDefault: 'Request Consultation',
    },
  },
};

