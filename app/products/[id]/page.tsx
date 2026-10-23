import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, getProducts } from '@/lib/api/products';
import ProductGallery from '@/components/product/ProductGallery';
import ProductCard from '@/components/product/ProductCard';
import ConsultationButton from '@/components/common/ConsultationButton';
import DownloadCatalogueButton from '@/components/product/DownloadCatalogueButton';
import { COMPANY_INFO } from '@/lib/data/companyInfo';
import {
  ChevronRight,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Wrench,
  Award,
  Sparkles,
} from 'lucide-react';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  // Get related products in the same category
  const categorySlug = product.categories?.[0]?.slug;
  const relatedProducts = (await getProducts({ category: categorySlug, perPage: 4 })).filter(
    (p) => p.id !== product.id
  );

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-blue-900">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/products" className="hover:text-blue-900">
            Thiết bị y tế
          </Link>
          {product.categories?.[0] && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link
                href={`/products?category=${product.categories[0].slug}`}
                className="hover:text-blue-900"
              >
                {product.categories[0].name}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product Overview Card (Gallery + Quick Info + Consultation CTA) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Gallery */}
            <div className="lg:col-span-6">
              <ProductGallery images={product.images} productName={product.name} />

              {/* Quality Highlights below gallery */}
              <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-slate-700">Chính hãng 100%</p>
                  <p className="text-[10px] text-slate-400">Đầy đủ CO/CQ</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Award className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-slate-700">Đạt chuẩn CE/FDA</p>
                  <p className="text-[10px] text-slate-400">ISO 13485</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Wrench className="w-5 h-5 text-cyan-600 mx-auto mb-1" />
                  <p className="text-[11px] font-semibold text-slate-700">Kỹ thuật 24/7</p>
                  <p className="text-[10px] text-slate-400">Chuyển giao tận nơi</p>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Status */}
                <div className="flex items-center gap-2 mb-3">
                  {product.categories?.[0] && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                      {product.categories[0].name}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Sẵn sàng bàn giao dự án
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight mb-3">
                  {product.name}
                </h1>

                {/* SKU & Brand specifications */}
                <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block">Mã Model / SKU:</span>
                    <strong className="text-slate-900 font-mono text-sm">{product.sku}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Hãng sản xuất:</span>
                    <strong className="text-slate-900">{product.manufacturer || 'Đối tác chính hãng'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Xuất xứ:</span>
                    <strong className="text-slate-900">{product.origin || 'CHLB Đức / Châu Âu'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Thời gian bảo hành:</span>
                    <strong className="text-emerald-700">{product.warranty || '12 - 24 tháng'}</strong>
                  </div>
                </div>

                {/* Short Overview */}
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {product.short_description}
                </div>
              </div>

              {/* Action Box: Pure Showcase Consultation (No Cart/No Checkout) */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950 to-slate-900 text-white space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wider block">
                      Hình thức phân phối
                    </span>
                    <span className="text-base font-bold text-white">
                      Báo giá dự án & Tư vấn kỹ thuật
                    </span>
                  </div>
                  <span className="text-xs bg-cyan-900/50 text-cyan-300 border border-cyan-500/40 px-2.5 py-1 rounded-md font-medium">
                    Giá theo cấu hình
                  </span>
                </div>

                <div className="space-y-3">
                  <ConsultationButton
                    productName={product.name}
                    sku={product.sku}
                    label="Yêu Cầu Tư Vấn Kỹ Thuật & Báo Giá"
                    variant="primary"
                    className="w-full py-3.5 text-sm"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Hotline: {COMPANY_INFO.hotline}</span>
                    </a>

                    <DownloadCatalogueButton
                      productName={product.name}
                      sku={product.sku}
                    />
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 text-center">
                  * HSI Corp hỗ trợ demo máy trực tiếp tại bệnh viện và xây dựng phương án xã hội hóa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications & Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Specs Table + Detailed Description */}
          <div className="lg:col-span-8 space-y-8">
            {/* Specifications Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-900" />
                Thông Số Kỹ Thuật Chi Tiết
              </h2>

              {product.attributes && product.attributes.length > 0 ? (
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-slate-200">
                      {product.attributes.map((attr, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}
                        >
                          <td className="px-4 py-3 font-semibold text-slate-700 w-2/5 sm:w-1/3">
                            {attr.name}
                          </td>
                          <td className="px-4 py-3 text-slate-900 font-medium">
                            {attr.options.join(', ')}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50/60">
                        <td className="px-4 py-3 font-semibold text-slate-700">Mã thiết bị</td>
                        <td className="px-4 py-3 font-mono text-blue-900 font-bold">{product.sku}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-700">Chế độ bảo hành</td>
                        <td className="px-4 py-3 text-slate-900 font-medium">{product.warranty}</td>
                      </tr>
                      <tr className="bg-slate-50/60">
                        <td className="px-4 py-3 font-semibold text-slate-700">Chứng nhận chất lượng</td>
                        <td className="px-4 py-3 text-slate-900 font-medium">ISO 13485, CE 0123, FDA, Giấy phép Bộ Y Tế</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-xs text-slate-500">
                  Thông số chi tiết đang được đồng bộ từ tài liệu kỹ thuật của hãng. Vui lòng liên hệ chuyên viên để nhận Catalogue PDF đầy đủ.
                </p>
              )}
            </div>

            {/* Clinical Applications & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Đặc Điểm & Ứng Dụng Lâm Sàng
              </h2>
              <div
                className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4 prose prose-blue max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>

          {/* Right: Technical Support & Branch Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-5">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
                Dịch Vụ & Hỗ Trợ Kỹ Thuật HSI
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800">Lắp đặt & Hiệu chuẩn tận nơi</h4>
                    <p className="text-slate-500 mt-0.5">Thực hiện bởi đội ngũ kỹ sư y sinh giàu kinh nghiệm.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800">Đào tạo vận hành lâm sàng</h4>
                    <p className="text-slate-500 mt-0.5">Hướng dẫn chi tiết cho các bác sĩ và điều dưỡng phòng mổ.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-800">Linh kiện thay thế sẵn sàng</h4>
                    <p className="text-slate-500 mt-0.5">Kho vật tư thay thế chính hãng tại Hà Nội, Đà Nẵng, TP.HCM và Cần Thơ.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <ConsultationButton
                  productName={product.name}
                  sku={product.sku}
                  label="Tư Vấn Thử Nghiệm Máy Tại Viện"
                  variant="outline"
                  className="w-full py-2.5 text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Equipment */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Thiết Bị Cùng Danh Mục
              </h2>
              <Link
                href="/products"
                className="text-xs font-bold text-blue-900 hover:text-cyan-600"
              >
                Xem tất cả thiết bị
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

