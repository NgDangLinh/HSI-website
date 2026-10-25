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
      heroDesc: 'HSI Corp chuyên cung cấp giải pháp tài chính xã hội hóa y tế, cho thuê thiết bị và phân phối trực tiếp các trang thiết bị y sinh tiêu chuẩn quốc tế (CE, FDA, ISO 13485) cho các bệnh viện, phòng khám trên toàn quốc.',
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
      categoriesBadge: 'Lĩnh Vực Chuyên Môn',
      categoriesTitle: 'Danh Mục Thiết Bị Y Tế Chủ Lực',
      viewAllCategories: 'Xem toàn bộ danh mục',
      exploreDevices: 'Tra cứu thiết bị',
      showroomBadge: 'Showroom Thiết Bị',
      showroomTitle: 'Thiết Bị Tiêu Biểu & Phổ Biến',
      showroomDesc: 'Toàn bộ sản phẩm được nhập khẩu chính hãng với đầy đủ giấy phép lưu hành của Bộ Y Tế.',
      viewAllProducts: 'Xem Tất Cả Sản Phẩm',
      solutionsBadge: 'Giải Pháp Hợp Tác',
      solutionsTitle: 'Mô Hình Đầu Tư Y Tế Toàn Diện',
      solutionsDesc: 'Giúp các bệnh viện công lập và tư nhân tiếp cận công nghệ y khoa hiện đại nhất mà không chịu gánh nặng ngân sách.',
      learnModel: 'Tìm hiểu mô hình',
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
      heroDesc: 'HSI Corp tự hào là đại diện phân phối chính hãng và đối tác chiến lược tại Việt Nam của các tập đoàn sản xuất thiết bị y tế, vật tư can thiệp kỹ thuật cao đạt chuẩn CE, FDA và ISO 13485 từ Anh, Đức, Thụy Sĩ, Nhật Bản, Pháp và quốc tế.',
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
      viewProducts: 'Xem thiết bị của hãng',
      consultConfig: 'Tư vấn cấu hình',
      whyBadge: 'Năng Lực Triển Khai',
      whyTitle: 'LÝ DO CHỌN HSI CORP',
      whyDesc: 'Cam kết đồng hành lâu dài cùng đối tác quốc tế và hệ thống y tế Việt Nam',
      ctaTitle: 'Hợp Tác Phân Phối Cùng HSI Corp',
      ctaDesc: 'HSI Corp luôn chào đón các nhà sản xuất trang thiết bị y tế kỹ thuật cao quốc tế mong muốn mở rộng thị phần và phát triển giải pháp y khoa tại Việt Nam.',
      ctaBtn: 'Đăng Ký Hợp Tác Phân Phối',
      contactOffice: 'Liên Hệ Văn Phòng HSI',
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
      heroDesc: 'HSI Corp specializes in healthcare socialization financing, equipment leasing, and official distribution of international-standard biomedical equipment (CE, FDA, ISO 13485) for hospitals and clinics across Vietnam.',
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
      categoriesBadge: 'Clinical Specialties',
      categoriesTitle: 'Key Medical Equipment Categories',
      viewAllCategories: 'View all categories',
      exploreDevices: 'Explore devices',
      showroomBadge: 'Equipment Showroom',
      showroomTitle: 'Featured & Popular Equipment',
      showroomDesc: 'All products are officially imported with full circulation permits from the Ministry of Health.',
      viewAllProducts: 'View All Products',
      solutionsBadge: 'Partnership Solutions',
      solutionsTitle: 'Comprehensive Healthcare Investment Models',
      solutionsDesc: 'Helping public and private hospitals access cutting-edge medical technology without budgetary strain.',
      learnModel: 'Learn more about model',
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
      heroDesc: 'HSI Corp is proud to be the official distributor and strategic partner in Vietnam for high-tech medical device and interventional consumable manufacturers meeting CE, FDA, and ISO 13485 standards from the UK, Germany, Switzerland, Japan, France, and worldwide.',
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
      viewProducts: 'View brand equipment',
      consultConfig: 'Request Config',
      whyBadge: 'Deployment Capabilities',
      whyTitle: 'WHY CHOOSE HSI CORP',
      whyDesc: 'Committed to long-term partnerships with global manufacturers and the Vietnamese healthcare system',
      ctaTitle: 'Distribute With HSI Corp',
      ctaDesc: 'HSI Corp warmly welcomes high-tech international medical equipment manufacturers seeking to expand market share and healthcare solutions in Vietnam.',
      ctaBtn: 'Register For Distribution Partnership',
      contactOffice: 'Contact HSI Office',
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

