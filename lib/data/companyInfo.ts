import { BranchOffice } from '../types/product';

export const COMPANY_INFO = {
  name: 'Công ty Cổ phần Đầu tư Giải pháp Y tế (HSI)',
  shortName: 'HSI Corp',
  slogan: 'Giải Pháp Đầu Tư Toàn Diện & Phân Phối Thiết Bị Y Tế Công Nghệ Cao',
  description:
    'Được thành lập từ năm 2010, HSI Corp tự hào là đơn vị tiên phong trong lĩnh vực tư vấn giải pháp tài chính y tế, xã hội hóa y tế và phân phối các trang thiết bị y tế kỹ thuật cao phục vụ các bệnh viện, phòng khám trên toàn quốc.',
  establishedYear: 2010,
  hotline: '024 6685 0182',
  email: 'info.hsi@hsicorp.com.vn',
  website: 'https://hsicorp.com.vn',
  workingHours: 'Thứ Hai - Thứ Sáu: 08:00 - 17:30',
};

export const BRANCHES: BranchOffice[] = [
  {
    city: 'Hà Nội',
    name: 'Trụ sở chính',
    address: 'Tầng 29, Tòa Đông, Trung tâm Lotte, 54 Liễu Giai, P. Giảng Võ, Q. Ba Đình, Hà Nội',
    phone: '024 6685 0182',
    email: 'info.hsi@hsicorp.com.vn',
    isHeadquarter: true,
  },
  {
    city: 'Hà Nội',
    name: 'Văn phòng giao dịch',
    address: 'B12A-05A Khu đô thị Vinhomes Hàm Nghi, P. Mỹ Đình, Q. Nam Từ Liêm, Hà Nội',
    phone: '024 6685 0182',
    email: 'hanoi@hsicorp.com.vn',
  },
  {
    city: 'TP. Hồ Chí Minh',
    name: 'Chi nhánh Miền Nam',
    address: '135/1 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh',
    phone: '028 6294 8833',
    email: 'hcm@hsicorp.com.vn',
  },
  {
    city: 'Đà Nẵng',
    name: 'Chi nhánh Miền Trung',
    address: '12 Trịnh Công Sơn, Phường Hòa Cường Nam, Quận Hải Châu, TP. Đà Nẵng',
    phone: '0236 362 8999',
    email: 'danang@hsicorp.com.vn',
  },
  {
    city: 'Cần Thơ',
    name: 'Chi nhánh Tây Nam Bộ',
    address: '323-325 Đường Xuân Thủy, KDC Hồng Phát, P. An Bình, Q. Ninh Kiều, TP. Cần Thơ',
    phone: '0292 388 9119',
    email: 'cantho@hsicorp.com.vn',
  },
];

export interface PartnerInfo {
  name: string;
  country: string;
  category: string;
  logo: string;
  description: string;
  featured?: boolean;
}

export const PARTNERS: PartnerInfo[] = [
  {
    name: 'Surtex Instruments Ltd.',
    country: 'Vương quốc Anh',
    category: 'Dụng cụ phẫu thuật cao cấp',
    logo: '/images/partners/Surtex_Color-Logo.png',
    description: 'Surtex Instruments Ltd. là công ty công nghệ y tế tư nhân với sự đầu tư mũi nhọn vào sự đổi mới và sự tinh xảo trong chế tạo dụng cụ phẫu thuật. Tại Surtex, mỗi dụng cụ đều được chế tác thủ công tỉ mỉ bởi nghệ nhân tay nghề cao nhất, đáp ứng các tiêu chuẩn CE, FDA và ISO 13485 cho nhiều chuyên khoa phẫu thuật: tim mạch, chấn thương chỉnh hình, thần kinh, vi phẫu, tai mũi họng.',
    featured: true,
  },
  {
    name: 'Pentax Medical',
    country: 'Nhật Bản',
    category: 'Nội soi can thiệp & Xử lý hình ảnh 4K',
    logo: '/images/partners/Pentax_Color-Logo.png',
    description: 'Trực thuộc Tập đoàn HOYA (Nhật Bản), Pentax Medical là một trong những nhà sản xuất thiết bị nội soi tiêu hóa và hô hấp hàng đầu thế giới. Nổi bật với hệ thống bộ xử lý hình ảnh 4K (EPK-i8020c), IMAGINA (EPK-i5500c), công nghệ nhuộm màu quang học i-scan hỗ trợ chẩn đoán sớm và can thiệp tổn thương ung thư đường tiêu hóa.',
    featured: true,
  },
  {
    name: 'Roche Diagnostics',
    country: 'Thụy Sĩ',
    category: 'Chẩn đoán in-vitro (IVD) & Dược phẩm sinh học',
    logo: '/images/partners/Roche-1.png',
    description: 'Được thành lập tại Basel, Thụy Sĩ vào năm 1896, Roche hiện là tập đoàn chăm sóc sức khỏe toàn cầu hàng đầu về các giải pháp chẩn đoán và dược phẩm tiên tiến cho hàng triệu người tại hơn 150 quốc gia. Đi đầu trong phòng chống và chữa khỏi bệnh tật bằng kết hợp tiến bộ khoa học trong ngành chẩn đoán, dược phẩm và kỹ thuật số.',
    featured: true,
  },
  {
    name: 'SonoScape Medical Corp.',
    country: 'Quốc tế',
    category: 'Siêu âm Doppler màu & Phẫu thuật xâm lấn tối thiểu',
    logo: '/images/partners/SonoScape.png',
    description: 'SonoScape Medical Corp. là nhà tiên phong hàng đầu trong lĩnh vực công nghệ y tế, chuyên về hình ảnh y tế siêu âm Doppler màu, chẩn đoán và điều trị nội soi, phẫu thuật xâm lấn tối thiểu (MIS) và các giải pháp can thiệp nội mạch tại hơn 170 quốc gia trên thế giới.',
    featured: true,
  },
  {
    name: 'pfm medical',
    country: 'CHLB Đức',
    category: 'Can thiệp tim mạch bẩm sinh & Phẫu thuật',
    logo: '/images/partners/Logo_pfm-1.png',
    description: 'Được thành lập tại Cologne, Đức từ năm 1971, pfm medical có hơn 20 năm kinh nghiệm phát triển công nghệ can thiệp tim mạch. Triết lý của hãng tập trung vào thiết kế cá nhân hóa theo từng hình thái tổn thương của bệnh nhân (dụng cụ bít dù vách liên thất Nit-Occlud Lê VSD), triệt tiêu hoàn toàn nguy cơ rối loạn dẫn truyền nguy hiểm.',
    featured: true,
  },
  {
    name: 'Translumina Therapeutics',
    country: 'CHLB Đức / Ấn Độ',
    category: 'Stent phủ thuốc can thiệp mạch vành',
    logo: '/images/partners/Translumina-Logo.png',
    description: 'Được thành lập vào năm 2000 tại Đức, Translumina là tập đoàn sản xuất và phân phối toàn cầu chuyên về thiết bị, vật tư y tế can thiệp tim mạch. Nổi bật với khung giá đỡ (Stent) phủ thuốc sinh học Vivo Isar, bóng nong mạch vành, bóng nong phủ thuốc và phụ kiện can thiệp tim mạch tiên tiến.',
    featured: true,
  },
  {
    name: 'Fenghua Biotech',
    country: 'Trung Quốc',
    category: 'Sinh phẩm IVD sàng lọc sơ sinh',
    logo: '/images/partners/Fenghua.png',
    description: 'Thành lập năm 1999, Guangzhou Fenghua Biotech là nhà sản xuất hàng đầu chiếm khoảng 80% thị phần tại Trung Quốc trong lĩnh vực sàng lọc sơ sinh (Neonatal Screening) để phát hiện sớm các bệnh lý dị tật bẩm sinh hoặc rối loạn chuyển hóa ở trẻ sơ sinh thông qua mẫu máu gót chân.',
    featured: true,
  },
  {
    name: 'Tipmed / APT Medical',
    country: 'Quốc tế',
    category: 'Điện sinh lý tim & Can thiệp nội mạch',
    logo: '/images/partners/Tipmed_Logo.png',
    description: 'APT Medical là nhà sản xuất và cung cấp hàng đầu về điện sinh lý tim (EP) và các thiết bị y tế can thiệp nội mạch ngoại vi, thần kinh, mang lại giải pháp công nghệ chính xác và an toàn cho các bác sĩ can thiệp lâm sàng.',
    featured: true,
  },
  {
    name: 'Hexacath',
    country: 'Pháp',
    category: 'Can thiệp mạch máu & Stent hoạt tính sinh học',
    logo: '/images/partners/hexacath.svg',
    description: 'Được thành lập vào năm 1994 gần Paris (Pháp), Hexacath chuyên phát triển, sản xuất và phân phối các sản phẩm can thiệp mạch máu tiên tiến như Stent hoạt tính sinh học (BAS), đa dạng ống thông PTCA & PTA cho mạch vành và ngoại biên.',
    featured: false,
  },
  {
    name: 'Anrei Medical (HZ) Co., Ltd.',
    country: 'Trung Quốc',
    category: 'Vật tư can thiệp đường mật tụy ERCP',
    logo: '/images/partners/anrei.svg',
    description: 'Anrei Medical chuyên cung cấp dụng cụ tiêu hao phục vụ can thiệp nội soi đường tiêu hóa và mật tụy ngược dòng (ERCP), bao gồm dây dẫn hướng nitinol guidewire, kẹp clip, bóng nong đạt chứng nhận CE và ISO 13485.',
    featured: false,
  },
];

export const WHY_CHOOSE_US = [
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
];

export interface InvestmentSolution {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  fullDescription: string;
  fullDescriptionEn: string;
  subPoints: Array<{ title: string; desc: string }>;
  subPointsEn: Array<{ title: string; desc: string }>;
  icon: string;
}

export const SOLUTIONS: InvestmentSolution[] = [
  {
    id: 'taichinh',
    title: 'Tư vấn giải pháp tài chính & Hỗ trợ vốn vay',
    titleEn: 'Financial Advisory & Credit Support',
    description:
      'Đội ngũ chuyên gia tài chính của HSI Corp đồng hành cùng các bệnh viện, phòng khám nghiên cứu hồ sơ, thẩm định tính khả thi và cấu trúc phương án tài chính toàn diện nhằm tối ưu hóa chi phí đầu tư ban đầu.',
    descriptionEn:
      'HSI Corp’s financial specialists collaborate with hospitals and clinics to evaluate feasibility and structure comprehensive capital plans, minimizing upfront capital investment stress.',
    shortDescription:
      'Khảo sát dự án, phân tích phương án tài chính và liên kết ngân hàng hỗ trợ vốn vay ưu đãi.',
    shortDescriptionEn:
      'Project appraisal, optimal financial structuring, and preferential bank loan support.',
    fullDescription:
      'Đội ngũ chuyên gia tài chính của HSI Corp đồng hành cùng các bệnh viện, phòng khám nghiên cứu hồ sơ, thẩm định tính khả thi và cấu trúc phương án tài chính toàn diện nhằm tối ưu hóa chi phí đầu tư ban đầu.',
    fullDescriptionEn:
      'HSI Corp’s financial specialists collaborate with hospitals and clinics to evaluate feasibility and structure comprehensive capital plans, minimizing upfront capital investment stress.',
    subPoints: [
      {
        title: 'Tư vấn giải pháp tài chính chuyên sâu',
        desc: 'Đội ngũ chuyên gia tài chính sẽ nghiên cứu hồ sơ, khảo sát, phân tích lợi ích và rủi ro và đưa ra những phương án tài chính tốt nhất cho từng hạng mục dự án.',
      },
      {
        title: 'Liên kết ngân hàng đối tác hỗ trợ vốn vay ưu đãi',
        desc: 'Ngân hàng liên kết với HSI sẽ hỗ trợ khách hàng vay vốn mở phòng khám, bệnh viện với mức lãi suất ưu đãi nhất thị trường và thời hạn giải ngân nhanh chóng.',
      },
    ],
    subPointsEn: [
      {
        title: 'In-Depth Financial Advisory',
        desc: 'Our financial experts thoroughly analyze project feasibility, ROI, and risk profiles to formulate optimal funding strategies for each investment phase.',
      },
      {
        title: 'Preferential Credit Lines with Partner Banks',
        desc: 'HSI-partnered commercial banks provide preferential credit packages and streamlined disbursement procedures for clinic and hospital establishment.',
      },
    ],
    icon: 'Landmark',
  },
  {
    id: 'chothue',
    title: 'Cho thuê & Đặt máy xã hội hóa',
    titleEn: 'Equipment Leasing & Socialization Placement',
    description:
      'HSI Corp cung cấp mô hình hợp tác linh hoạt giữa công lập và tư nhân, tạo điều kiện cho các cơ sở y tế nhanh chóng sở hữu máy móc kỹ thuật cao mà không bị áp lực ngân sách nhà nước.',
    descriptionEn:
      'HSI Corp offers flexible public-private cooperation models, enabling medical facilities to rapidly deploy advanced medical machinery without public budget strain.',
    shortDescription:
      'Linh hoạt thuê máy theo nhu cầu hoặc liên doanh góp vốn, chia sẻ doanh thu minh bạch.',
    shortDescriptionEn:
      'Flexible device leasing or joint venture partnerships with transparent revenue sharing.',
    fullDescription:
      'HSI Corp cung cấp mô hình hợp tác linh hoạt giữa công lập và tư nhân, tạo điều kiện cho các cơ sở y tế nhanh chóng sở hữu máy móc kỹ thuật cao mà không bị áp lực ngân sách nhà nước.',
    fullDescriptionEn:
      'HSI Corp offers flexible public-private cooperation models, enabling medical facilities to rapidly deploy advanced medical machinery without public budget strain.',
    subPoints: [
      {
        title: 'Cho thuê máy móc thiết bị',
        desc: 'Đội ngũ chuyên viên HSI sẽ đưa ra nhiều phương án cho thuê thiết bị y tế linh hoạt theo ca, theo tháng hoặc dài hạn tùy thuộc vào nhu cầu thực tế của khách hàng.',
      },
      {
        title: 'Góp tài sản liên doanh liên kết',
        desc: 'Chúng tôi hợp tác với các bệnh viện, cơ sở y tế, sử dụng tài sản là trang thiết bị, nhà cửa, cơ sở hạ tầng sẵn có để liên doanh, liên kết tổ chức các hoạt động dịch vụ.',
      },
      {
        title: 'Góp vốn đầu tư mua sắm',
        desc: 'Cơ sở y tế công lập và phía đối tác liên doanh cùng góp vốn bằng tiền mặt để mua sắm trang thiết bị kỹ thuật cao phục vụ hoạt động dịch vụ.',
      },
    ],
    subPointsEn: [
      {
        title: 'Flexible Medical Equipment Leasing',
        desc: 'Customized device leasing plans per procedure, monthly, or multi-year terms adapted to hospital clinical demand and cash flow.',
      },
      {
        title: 'Asset Contribution & Facility Partnership',
        desc: 'Cooperating with hospitals using existing physical infrastructure, real estate, and facilities to establish specialized diagnostic joint services.',
      },
      {
        title: 'Cash Capital Co-Investment',
        desc: 'Joint equity participation between public hospitals and private investors to procure state-of-the-art diagnostic and surgical machinery.',
      },
    ],
    icon: 'Stethoscope',
  },
  {
    id: 'tracham',
    title: 'Bán thiết bị trả chậm',
    titleEn: 'Deferred Payment Equipment Supply',
    description:
      'Chính sách tài chính đột phá hỗ trợ các cơ sở y tế mua sắm thiết bị công nghệ cao và thanh toán linh hoạt nhiều đợt, đưa máy móc vào vận hành khai thác tạo dòng tiền trước khi tất toán.',
    descriptionEn:
      'Innovative financing policies enabling medical centers to deploy next-gen equipment immediately and stagger payments over time based on actual clinical revenue.',
    shortDescription:
      'Hỗ trợ mua sắm thiết bị và trả góp linh hoạt từ 3 tháng đến 2 năm với lãi suất ưu đãi.',
    shortDescriptionEn:
      'Procure high-tech medical devices with installment plans from 3 to 24 months at preferential rates.',
    fullDescription:
      'Chính sách tài chính đột phá hỗ trợ các cơ sở y tế mua sắm thiết bị công nghệ cao và thanh toán linh hoạt nhiều đợt, đưa máy móc vào vận hành khai thác tạo dòng tiền trước khi tất toán.',
    fullDescriptionEn:
      'Innovative financing policies enabling medical centers to deploy next-gen equipment immediately and stagger payments over time based on actual clinical revenue.',
    subPoints: [
      {
        title: 'Thanh toán linh hoạt từ 3 tháng đến 2 năm',
        desc: 'Chúng tôi hỗ trợ các bệnh viện, cơ sở y tế mua thiết bị và thanh toán làm nhiều đợt trong vòng từ 3 tháng đến 2 năm tùy quy mô dự án.',
      },
      {
        title: 'Lãi suất ưu đãi so với thị trường',
        desc: 'Mức lãi suất ưu đãi đặc biệt hỗ trợ tối đa cho cơ sở y tế, giảm thiểu áp lực dòng tiền trong giai đoạn đầu đi vào hoạt động.',
      },
      {
        title: 'Bàn giao thiết bị và đào tạo tức thì',
        desc: 'Thiết bị được bàn giao, lắp đặt, hiệu chuẩn và chuyển giao kỹ thuật vận hành đầy đủ ngay từ đợt thanh toán đầu tiên.',
      },
    ],
    subPointsEn: [
      {
        title: 'Flexible Installments (3 to 24 Months)',
        desc: 'Supporting hospitals and healthcare centers with structured payment tranches spanning 3 to 24 months based on equipment category.',
      },
      {
        title: 'Preferential Market Rates',
        desc: 'Significantly subsidized interest rates compared to standard commercial loans, protecting operating cash flows during ramp-up.',
      },
      {
        title: 'Immediate Delivery & Clinical Training',
        desc: 'Devices are immediately installed, calibrated, and staff-certified upon initial installment tranche execution.',
      },
    ],
    icon: 'CalendarClock',
  },
  {
    id: 'ppp',
    title: 'Đầu tư đối tác công tư (PPP)',
    titleEn: 'Public-Private Partnership (PPP)',
    description:
      'Đầu tư theo hình thức đối tác công tư giúp đa dạng hóa nguồn tài chính y tế, nâng cao năng lực phục vụ bệnh nhân và giảm gánh nặng chi ngân sách nhà nước.',
    descriptionEn:
      'Public-Private Partnerships diversify healthcare funding, expand patient access to high-end medical treatments, and relieve public expenditure constraints.',
    shortDescription:
      'Tối ưu hóa nguồn tài chính, nâng cao hiệu quả đầu tư và chất lượng dịch vụ y tế.',
    shortDescriptionEn:
      'Optimize capital resources, elevate investment efficiency, and upgrade clinical service standards.',
    fullDescription:
      'Đầu tư theo hình thức đối tác công tư giúp đa dạng hóa nguồn tài chính y tế, nâng cao năng lực phục vụ bệnh nhân và giảm gánh nặng chi ngân sách nhà nước.',
    fullDescriptionEn:
      'Public-Private Partnerships diversify healthcare funding, expand patient access to high-end medical treatments, and relieve public expenditure constraints.',
    subPoints: [
      {
        title: 'Linh hoạt về nguồn tài chính',
        desc: 'Huy động hiệu quả nguồn vốn ngoài ngân sách nhằm phát triển cơ sở hạ tầng và công nghệ y tế hiện đại phục vụ nhân dân.',
      },
      {
        title: 'Nâng cao hiệu quả đầu tư và chất lượng dịch vụ',
        desc: 'Cung cấp hệ thống dịch vụ y tế kỹ thuật cao, thúc đẩy cải cách thể chế và chuẩn hóa quy trình điều trị tại bệnh viện.',
      },
      {
        title: 'Chia sẻ rủi ro & Đồng hành bền vững',
        desc: 'Cơ chế hợp tác minh bạch, phân chia trách nhiệm và lợi ích hài hòa, tuân thủ nghiêm ngặt khung pháp lý của Nhà nước.',
      },
    ],
    subPointsEn: [
      {
        title: 'Capital Resource Flexibility',
        desc: 'Mobilizing private investment capital to modernize hospital infrastructure and diagnostic technologies for the community.',
      },
      {
        title: 'Elevated Clinical Standards & Service Quality',
        desc: 'Delivering international-standard medical services, promoting institutional reform, and modernizing patient care workflows.',
      },
      {
        title: 'Transparent Risk & Revenue Sharing',
        desc: 'Equitable partnership framework compliant with healthcare regulatory standards, ensuring sustainable long-term public benefit.',
      },
    ],
    icon: 'Handshake',
  },
  {
    id: 'thietbi',
    title: 'Cung cấp thiết bị và dụng cụ y tế',
    titleEn: 'High-Tech Medical Equipment Supply',
    description:
      'HSI Corp là đại diện phân phối chính thức của các thương hiệu y sinh hàng đầu thế giới, mang đến giải pháp công nghệ đồng bộ và vật tư can thiệp đạt chuẩn quốc tế.',
    descriptionEn:
      'HSI Corp serves as the official distributor of premier global medical manufacturers, delivering integrated technological systems and certified surgical instruments.',
    shortDescription:
      'Phân phối thiết bị y tế công nghệ cao chuẩn CE/FDA cho phòng mổ và chuyên khoa.',
    shortDescriptionEn:
      'Distributing CE/FDA-certified biomedical devices and surgical instruments for specialized departments.',
    fullDescription:
      'HSI Corp là đại diện phân phối chính thức của các thương hiệu y sinh hàng đầu thế giới, mang đến giải pháp công nghệ đồng bộ và vật tư can thiệp đạt chuẩn quốc tế.',
    fullDescriptionEn:
      'HSI Corp serves as the official distributor of premier global medical manufacturers, delivering integrated technological systems and certified surgical instruments.',
    subPoints: [
      {
        title: 'Sản phẩm y tế công nghệ cao',
        desc: 'Chúng tôi cung cấp những sản phẩm y tế công nghệ cao nhằm hỗ trợ tối đa và nâng cao hiệu quả trong quá trình chăm sóc sức khỏe và điều trị của bệnh nhân.',
      },
      {
        title: '100% Chính hãng & Đầy đủ CO/CQ',
        desc: 'Tất cả thiết bị đều đạt chứng chỉ CE, FDA, ISO 13485 và có đầy đủ hồ sơ pháp lý lưu hành của Bộ Y Tế phục vụ công tác đấu thầu.',
      },
      {
        title: 'Chuyển giao kỹ thuật & Bảo dưỡng định kỳ',
        desc: 'Đội ngũ kỹ sư y sinh chuyên môn cao thực hiện lắp đặt, hướng dẫn vận hành chuyên sâu và bảo trì bảo dưỡng phòng ngừa thường niên.',
      },
    ],
    subPointsEn: [
      {
        title: 'Advanced Biomedical Technologies',
        desc: 'Supplying top-tier medical innovations to empower clinicians, maximize surgical accuracy, and accelerate patient recovery.',
      },
      {
        title: '100% Authentic with Full CO/CQ',
        desc: 'Fully certified with CE, FDA, ISO 13485, and Ministry of Health distribution licenses compliant with hospital bidding standards.',
      },
      {
        title: 'Clinical Tech Transfer & 24/7 Support',
        desc: 'Dedicated biomedical engineers provide turnkey installation, clinical training, and preventative maintenance schedules.',
      },
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'xaydung',
    title: 'Hợp tác đầu tư xây dựng & Quản lý bệnh viện',
    titleEn: 'Hospital Construction & Management',
    description:
      'HSI Corp cung cấp các gói xây dựng cơ sở hạ tầng bệnh viện – phòng khám toàn diện, đảm bảo tiêu chuẩn y tế khắt khe, chất lượng và uy tín vững bền.',
    descriptionEn:
      'HSI Corp delivers turnkey hospital and medical clinic infrastructure solutions, adhering to rigorous healthcare building codes, safety, and operational excellence.',
    shortDescription:
      'Tư vấn quy hoạch, thi công hạ tầng phòng khám – bệnh viện toàn diện và chuẩn y khoa.',
    shortDescriptionEn:
      'Turnkey planning, medical infrastructure development, and hospital management consulting.',
    fullDescription:
      'HSI Corp cung cấp các gói xây dựng cơ sở hạ tầng bệnh viện – phòng khám toàn diện, đảm bảo tiêu chuẩn y tế khắt khe, chất lượng và uy tín vững bền.',
    fullDescriptionEn:
      'HSI Corp delivers turnkey hospital and medical clinic infrastructure solutions, adhering to rigorous healthcare building codes, safety, and operational excellence.',
    subPoints: [
      {
        title: 'Quy hoạch và xây dựng cơ sở hạ tầng toàn diện',
        desc: 'Chúng tôi cung cấp các gói xây dựng cơ sở hạ tầng bệnh viện toàn diện, từ thiết kế mặt bằng khoa phòng, phòng mổ vô khuẩn đến hệ thống phụ trợ y tế.',
      },
      {
        title: 'Cam kết chất lượng và uy tín tiến độ',
        desc: 'Quy trình thi công được kiểm soát nghiêm ngặt theo quy chuẩn Bộ Y Tế, đảm bảo độ bền vững, công năng sử dụng tối ưu và đúng tiến độ cam kết.',
      },
      {
        title: 'Tư vấn mô hình quản trị vận hành',
        desc: 'Hỗ trợ thiết lập quy trình quản lý chất lượng bệnh viện, tối ưu hóa lưu đồ luân chuyển bệnh nhân và đào tạo nhân sự điều hành cơ sở y tế.',
      },
    ],
    subPointsEn: [
      {
        title: 'Comprehensive Healthcare Infrastructure Packages',
        desc: 'Complete turnkey architectural planning, sterile operating theater construction, ICU layouts, and centralized medical gas pipelines.',
      },
      {
        title: 'Strict Quality & Timeline Commitments',
        desc: 'Rigorous engineering standards meeting healthcare safety regulations, optimizing departmental functional ergonomics and delivery milestones.',
      },
      {
        title: 'Hospital Operational Governance Consulting',
        desc: 'Assisting facility management in establishing standardized operating procedures, patient flow optimization, and medical administrative excellence.',
      },
    ],
    icon: 'Building2',
  },
];
