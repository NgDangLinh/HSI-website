export interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
  description?: string;
  image?: string;
}

export interface ProductAttribute {
  id?: number;
  name: string;
  options: string[];
}

export interface MedicalProduct {
  id: number;
  name: string;
  slug: string;
  sku: string;
  short_description: string;
  description: string;
  images: ProductImage[];
  categories: ProductCategory[];
  attributes: ProductAttribute[];
  manufacturer?: string; // Hãng sản xuất (Philips, Löwenstein, Otopront, ...)
  origin?: string; // Xuất xứ (Đức, Nhật Bản, Mỹ, ...)
  warranty?: string; // Bảo hành (24 tháng, ...)
  catalog_pdf_url?: string; // Tải catalogue PDF
  featured?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email?: string;
  organization: string; // Tên Bệnh viện / Phòng khám / Đơn vị
  productId?: number;
  productName?: string;
  message?: string;
}

export interface BranchOffice {
  city: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  isHeadquarter?: boolean;
}

