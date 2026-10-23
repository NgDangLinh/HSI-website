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

export const PARTNERS = [
  { name: 'Philips Healthcare', logo: 'Philips', country: 'Hà Lan' },
  { name: 'Löwenstein Medical', logo: 'Löwenstein', country: 'CHLB Đức' },
  { name: 'Otopront', logo: 'Otopront', country: 'CHLB Đức' },
  { name: 'Richard Wolf', logo: 'Richard Wolf', country: 'CHLB Đức' },
  { name: 'Mindray Medical', logo: 'Mindray', country: 'Toàn cầu' },
  { name: 'Olympus Medical', logo: 'Olympus', country: 'Nhật Bản' },
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

