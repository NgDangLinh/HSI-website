export interface MedicalSupplyItem {
  id: string;
  titleVi: string;
  titleEn: string;
  imageUrl: string;
  remoteImageUrl: string;
}

export const MEDICAL_SUPPLIES: MedicalSupplyItem[] = [
  {
    id: 'can-thiep-tim-mach',
    titleVi: 'Can thiệp tim mạch',
    titleEn: 'Cardiovascular Intervention',
    imageUrl: '/images/supplies/can-thiep-tim-mach.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Can-thiep-tim-mach.jpg',
  },
  {
    id: 'cham-soc-vet-thuong',
    titleVi: 'Chăm sóc vết thương',
    titleEn: 'Wound Care',
    imageUrl: '/images/supplies/cham-soc-vet-thuong.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Cham-soc-vet-thuong.jpg',
  },
  {
    id: 'tim-bam-sinh',
    titleVi: 'Tim bẩm sinh',
    titleEn: 'Congenital Heart Disease',
    imageUrl: '/images/supplies/tim-bam-sinh.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Tim-bam-sinh-1.jpg',
  },
  {
    id: 'vat-tu-cay-ghep-chinh-hinh',
    titleVi: 'Vật tư cấy ghép chấn thương chỉnh hình',
    titleEn: 'Orthopedic Implant Supplies',
    imageUrl: '/images/supplies/vat-tu-cay-ghep-chinh-hinh.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-cay-ghep-chan-thuong-chinh-hinh.jpg',
  },
  {
    id: 'vat-tu-phau-thuat',
    titleVi: 'Vật tư dùng trong phẫu thuật',
    titleEn: 'Surgical Consumables',
    imageUrl: '/images/supplies/vat-tu-phau-thuat.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-dung-trong-phau-thuat-1.jpg',
  },
  {
    id: 'vat-tu-loc-than',
    titleVi: 'Vật tư lọc thận nhân tạo',
    titleEn: 'Hemodialysis Supplies',
    imageUrl: '/images/supplies/vat-tu-loc-than.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-loc-than-nhan-tao.jpg',
  },
  {
    id: 'vat-tu-me-tho',
    titleVi: 'Vật tư mê thở',
    titleEn: 'Anesthesia & Respiratory Supplies',
    imageUrl: '/images/supplies/vat-tu-me-tho.jpg',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-me-tho.jpg',
  },
  {
    id: 'lieu-phap-tiem-truyen',
    titleVi: 'Liệu pháp tiêm truyền',
    titleEn: 'Infusion Therapy',
    imageUrl: '/images/supplies/lieu-phap-tiem-truyen.png',
    remoteImageUrl: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Lieu-phap-tiem-truyen.png',
  },
];

