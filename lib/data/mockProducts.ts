import { MedicalProduct, ProductCategory } from '../types/product';

export const MOCK_CATEGORIES: ProductCategory[] = [
  {
    id: 1,
    name: 'Nội soi can thiệp & Phẫu thuật',
    slug: 'noi-soi-can-thiep',
    count: 12,
    description: 'Dụng cụ và thiết bị phục vụ nội soi tiêu hóa, ERCP, tán sỏi mật và can thiệp mạch.',
  },
  {
    id: 2,
    name: 'Chấn thương chỉnh hình & Ngoại khoa',
    slug: 'chan-thuong-chinh-hinh',
    count: 8,
    description: 'Vật tư thay thế khớp, dụng cụ kết hợp xương và dao mổ siêu âm công nghệ cao.',
  },
  {
    id: 3,
    name: 'Chẩn đoán hình ảnh & Thăm dò chức năng',
    slug: 'chan-doan-hinh-anh',
    count: 6,
    description: 'Hệ thống máy siêu âm Doppler màu, X-quang kỹ thuật số và thiết bị nội soi tai mũi họng.',
  },
  {
    id: 4,
    name: 'Hồi sức cấp cứu & Gây mê',
    slug: 'hoi-suc-cap-cuu',
    count: 5,
    description: 'Máy thở đa năng, máy gây mê kèm thở và hệ thống monitor theo dõi bệnh nhân ICU.',
  },
];

export const MOCK_PRODUCTS: MedicalProduct[] = [
  {
    id: 101,
    name: 'Bộ dụng cụ lấy sỏi đường mật ERCP (Dormia Basket)',
    slug: 'bo-dung-cu-lay-soi-duong-mat-ercp',
    sku: 'HSI-ERCP-01',
    short_description: 'Giỏ lấy sỏi Nitinol độ bền cao, điều khiển xoay 360 độ linh hoạt trong can thiệp nội soi mật tụy.',
    description:
      'Dụng cụ lấy sỏi đường mật qua nội soi ngược dòng (ERCP) được chế tạo từ hợp kim Nitinol siêu đàn hồi, có khả năng nhớ hình dạng xuất sắc. Giúp bác sĩ dễ dàng thao tác gắp và nghiền sỏi kích thước lớn trong ống mật chủ, giảm thiểu tối đa tổn thương niêm mạc.',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
        alt: 'Bộ dụng cụ lấy sỏi ERCP',
      },
    ],
    categories: [{ id: 1, name: 'Nội soi can thiệp & Phẫu thuật', slug: 'noi-soi-can-thiep' }],
    attributes: [
      { name: 'Vật liệu rọ', options: ['Hợp kim Nitinol cao cấp'] },
      { name: 'Đường kính mở rọ', options: ['15mm', '20mm', '25mm', '30mm'] },
      { name: 'Đường kính vỏ dẫn', options: ['1.8mm (5.4 Fr)'] },
      { name: 'Chiều dài làm việc', options: ['1950 mm'] },
      { name: 'Khả năng xoay', options: ['360 độ hai chiều'] },
      { name: 'Tiêu chuẩn chất lượng', options: ['CE 0123, ISO 13485, FDA'] },
    ],
    manufacturer: 'Otopront / G-Flex',
    origin: 'CHLB Đức',
    warranty: '12 tháng chính hãng',
    featured: true,
  },
  {
    id: 102,
    name: 'Hệ thống Máy nội soi Tai Mũi Họng công nghệ cao PES 2',
    slug: 'may-noi-soi-tai-mui-hong-pes-2',
    sku: 'HSI-ENT-PES2',
    short_description: 'Hệ thống nội soi ENT tích hợp nguồn sáng LED độ sáng 5000K, camera Full HD độ nét cao.',
    description:
      'Máy nội soi Tai Mũi Họng chuyên sâu mang thương hiệu Otopront (Đức), tích hợp nguồn sáng lạnh LED tuổi thọ trên 50.000 giờ, màn hình hiển thị trung thực màu sắc mô tổn thương, hỗ trợ đắc lực cho chẩn đoán và tiểu phẫu phòng khám.',
    images: [
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
        alt: 'Máy nội soi Tai Mũi Họng PES 2',
      },
    ],
    categories: [{ id: 3, name: 'Chẩn đoán hình ảnh & Thăm dò chức năng', slug: 'chan-doan-hinh-anh' }],
    attributes: [
      { name: 'Cảm biến hình ảnh', options: ['CMOS Full HD 1080p'] },
      { name: 'Nguồn sáng', options: ['LED công suất cao 50W, nhiệt độ màu 5500K'] },
      { name: 'Ống soi đi kèm', options: ['Ống soi cứng 0°, 30°, 70° (Đường kính 4mm)'] },
      { name: 'Cổng xuất tín hiệu', options: ['HDMI, DVI, USB ghi hình'] },
      { name: 'Nguồn điện', options: ['100-240V AC, 50/60Hz'] },
    ],
    manufacturer: 'Otopront',
    origin: 'CHLB Đức',
    warranty: '24 tháng',
    featured: true,
  },
  {
    id: 103,
    name: 'Máy thở hồi sức cấp cứu ICU cao cấp',
    slug: 'may-tho-hoi-suc-cap-cuu-icu',
    sku: 'HSI-VENT-ICU',
    short_description: 'Dòng máy thở cao cấp dùng cho cả người lớn, trẻ em và trẻ sơ sinh với đầy đủ các chế độ thở tiên tiến.',
    description:
      'Được thiết kế cho khoa Hồi sức tích cực (ICU) và Cấp cứu, hệ thống hỗ trợ thở xâm nhập và không xâm nhập, theo dõi cơ học phổi thời gian thực, tích hợp pin dự phòng hoạt động liên tục 4 giờ.',
    images: [
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
        alt: 'Máy thở hồi sức cấp cứu ICU',
      },
    ],
    categories: [{ id: 4, name: 'Hồi sức cấp cứu & Gây mê', slug: 'hoi-suc-cap-cuu' }],
    attributes: [
      { name: 'Đối tượng sử dụng', options: ['Người lớn, Trẻ em, Sơ sinh'] },
      { name: 'Chế độ thở', options: ['VCV, PCV, SIMV, PSV, BiLevel, PRVC, CPAP'] },
      { name: 'Màn hình hiển thị', options: ['Cảm ứng 15 inch chống lóa'] },
      { name: 'Dung tích thở Vt', options: ['2 - 2000 ml'] },
      { name: 'Áp lực thở tối đa', options: ['Lên tới 100 cmH2O'] },
    ],
    manufacturer: 'Löwenstein Medical',
    origin: 'CHLB Đức',
    warranty: '24 tháng',
    featured: true,
  },
  {
    id: 104,
    name: 'Bộ vít nén xốp và nẹp khóa kết hợp xương titan',
    slug: 'bo-vit-nen-xop-nep-khoa-titan',
    sku: 'HSI-ORTHO-TITAN',
    short_description: 'Vật tư cấy ghép chấn thương chỉnh hình hợp kim Titanium y tế tương thích sinh học tuyệt đối.',
    description:
      'Hệ thống nẹp vít chấn thương chỉnh hình đạt chuẩn chất lượng quốc tế, cung cấp độ cố định vững chắc, hỗ trợ xương liền nhanh và giảm nguy cơ đào thải sinh học.',
    images: [
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
        alt: 'Nẹp vít chấn thương chỉnh hình',
      },
    ],
    categories: [{ id: 2, name: 'Chấn thương chỉnh hình & Ngoại khoa', slug: 'chan-thuong-chinh-hinh' }],
    attributes: [
      { name: 'Chất liệu', options: ['Titanium Grade 5 (Ti-6Al-4V ELI)'] },
      { name: 'Độ dày nẹp', options: ['1.5mm - 4.5mm'] },
      { name: 'Quy cách', options: ['Đa dạng chiều dài theo giải phẫu xương'] },
      { name: 'Đóng gói', options: ['Tiệt trùng từng chiếc bằng khí EO'] },
    ],
    manufacturer: 'MedTech Solution',
    origin: 'Hàn Quốc / Thụy Sĩ',
    warranty: 'Theo tiêu chuẩn cấy ghép y tế',
    featured: true,
  },
  {
    id: 105,
    name: 'Kìm sinh thiết dạ dày - đại tràng dùng một lần',
    slug: 'kim-sinh-thiet-da-day-dai-trang',
    sku: 'HSI-BIOPSY-50',
    short_description: 'Kìm lấy mẫu sinh thiết nội soi tiêu hóa đường kính 2.3mm có kim định vị chính xác.',
    description:
      'Kìm sinh thiết tiệt trùng đóng gói riêng biệt giúp lấy mẫu bệnh phẩm mô học chuẩn xác, vết cắt ngọt không gây bầm dập mô xung quanh, an toàn tuyệt đối tránh lây nhiễm chéo.',
    images: [
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        alt: 'Kìm sinh thiết nội soi',
      },
    ],
    categories: [{ id: 1, name: 'Nội soi can thiệp & Phẫu thuật', slug: 'noi-soi-can-thiep' }],
    attributes: [
      { name: 'Đường kính vỏ', options: ['2.3 mm'] },
      { name: 'Chiều dài thao tác', options: ['1600mm / 2300mm'] },
      { name: 'Cấu tạo lưỡi', options: ['Có kim định vị, răng cưa chống trượt'] },
      { name: 'Quy cách đóng gói', options: ['Hộp 10 cái / Tiệt trùng EO'] },
    ],
    manufacturer: 'G-Flex Europe',
    origin: 'Bỉ',
    warranty: 'Hạn sử dụng 3 năm',
    featured: false,
  },
  {
    id: 106,
    name: 'Máy gây mê kèm thở kỹ thuật số chuyên sâu',
    slug: 'may-gay-me-kem-tho-ky-thuat-so',
    sku: 'HSI-ANES-PRO',
    short_description: 'Trạm gây mê hồi sức hiện đại với bình bốc hơi bù nhiệt độ, tích hợp phân tích khí mê tự động.',
    description:
      'Thiết bị trạm làm việc gây mê hoàn chỉnh cho phòng mổ tiêu chuẩn và phòng mổ ghép tạng. Đo lường chính xác nồng độ khí mê Isoflurane, Sevoflurane, N2O và CO2 cuối kỳ thở ra (EtCO2).',
    images: [
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
        alt: 'Máy gây mê kèm thở kỹ thuật số',
      },
    ],
    categories: [{ id: 4, name: 'Hồi sức cấp cứu & Gây mê', slug: 'hoi-suc-cap-cuu' }],
    attributes: [
      { name: 'Số vị trí bình bốc hơi', options: ['2 vị trí chuẩn Selectatec'] },
      { name: 'Bộ đo lưu lượng khí', options: ['Điện tử màn hình màu hiển thị đồ họa'] },
      { name: 'Chế độ thở gây mê', options: ['VCV, PCV, SIMV-V, SIMV-P, PSV'] },
      { name: 'Mô-đun khí mê', options: ['Tích hợp tự động nhận diện 5 loại khí'] },
    ],
    manufacturer: 'Löwenstein Medical',
    origin: 'CHLB Đức',
    warranty: '24 tháng',
    featured: false,
  },
];

