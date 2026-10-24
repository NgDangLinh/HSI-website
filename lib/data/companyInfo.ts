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

export const SOLUTIONS = [
  {
    id: 'xahoihoa',
    title: 'Xã hội hóa Y tế & Liên doanh liên kết',
    description:
      'Hợp tác đầu tư trang thiết bị y tế hiện đại cho các bệnh viện công lập theo hình thức đặt máy, chia sẻ doanh thu minh bạch và đúng quy chuẩn pháp lý.',
    icon: 'Building2',
  },
  {
    id: 'chothue',
    title: 'Cho thuê thiết bị y tế kỹ thuật cao',
    description:
      'Gói giải pháp thuê máy linh hoạt giúp các cơ sở y tế nhanh chóng tiếp cận công nghệ mới nhất mà không phải chịu áp lực vốn đầu tư ban đầu lớn.',
    icon: 'Stethoscope',
  },
  {
    id: 'ppp',
    title: 'Đối tác Công tư (PPP) & Tư vấn tài chính',
    description:
      'Tư vấn tiếp cận nguồn vốn ưu đãi từ các ngân hàng đối tác, xây dựng mô hình quản trị vận hành thiết bị hiệu quả cho khoa phòng.',
    icon: 'LineChart',
  },
  {
    id: 'baotri',
    title: 'Dịch vụ Kỹ thuật & Bảo hành 24/7',
    description:
      'Đội ngũ kỹ sư y sinh được đào tạo chính hãng, cung cấp dịch vụ bảo dưỡng định kỳ, hiệu chuẩn và cung cấp vật tư linh kiện thay thế chuẩn CO/CQ.',
    icon: 'Wrench',
  },
];
