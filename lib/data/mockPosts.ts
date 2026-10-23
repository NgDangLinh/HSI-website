export interface NewsPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
}

export const MOCK_POSTS: NewsPost[] = [
  {
    id: 1,
    title: 'HSI Corp chuyển giao hệ thống thiết bị nội soi can thiệp tiên tiến cho Bệnh viện Đa khoa',
    slug: 'chuyen-giao-thiet-bi-noi-soi-can-thiep',
    excerpt:
      'Vừa qua, đội ngũ chuyên gia kỹ thuật y sinh của HSI Corp đã hoàn tất công tác lắp đặt, hiệu chuẩn và hướng dẫn sử dụng hệ thống nội soi tiêu hóa can thiệp thế hệ mới.',
    content:
      '<p>Nhằm nâng cao năng lực chẩn đoán và điều trị các bệnh lý đường tiêu hóa - gan mật tụy, HSI Corp đã đồng hành cùng đối tác triển khai gói dự án cung cấp trang thiết bị hiện đại...</p>',
    date: '15/10/2026',
    category: 'Chuyển giao công nghệ',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    author: 'Ban Truyền Thông HSI',
  },
  {
    id: 2,
    title: 'Giải pháp xã hội hóa y tế: Hướng đi bền vững cho các cơ sở y tế nâng cấp trang thiết bị',
    slug: 'giai-phap-xa-hoi-hoa-y-te-ben-vung',
    excerpt:
      'Mô hình hợp tác công tư (PPP) và xã hội hóa y tế giúp bệnh viện tiếp cận ngay công nghệ chẩn đoán tiên tiến mà không phụ thuộc hoàn toàn vào ngân sách đầu tư công.',
    content:
      '<p>Tại các hội thảo chuyên đề y tế toàn quốc, HSI Corp đã chia sẻ những kinh nghiệm thực tiễn trong việc xây dựng phương án tài chính minh bạch cho các dự án đặt máy, thuê thiết bị...</p>',
    date: '08/10/2026',
    category: 'Giải pháp y tế',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    author: 'Khối Đầu Tư Y Tế',
  },
  {
    id: 3,
    title: 'Đào tạo kỹ thuật định kỳ: Nâng cao độ bền và tính chuẩn xác của thiết bị phòng mổ',
    slug: 'dao-tao-ky-thuat-dinh-ky-thiet-bi-phong-mo',
    excerpt:
      'Chương trình bảo dưỡng phòng ngừa (Preventive Maintenance) được HSI triển khai thường niên tại các bệnh viện đối tác trên toàn quốc nhằm đảm bảo an toàn phẫu thuật tối đa.',
    content:
      '<p>Các kỹ sư trưởng của HSI Corp cùng chuyên gia hãng sản xuất đã tổ chức khóa tập huấn chuyên sâu về bảo trì thiết bị gây mê hồi sức và hệ thống phẫu thuật nội soi...</p>',
    date: '28/09/2026',
    category: 'Kỹ thuật & Dịch vụ',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    author: 'Phòng Kỹ Thuật HSI',
  },
];

