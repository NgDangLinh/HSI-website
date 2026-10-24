import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getProducts, getProductCategories } from '@/lib/api/products';
import { getPosts } from '@/lib/api/wordpress';
import { COMPANY_INFO, SOLUTIONS, PARTNERS } from '@/lib/data/companyInfo';
import ProductCard from '@/components/product/ProductCard';
import HeroActions from '@/components/home/HeroActions';
import ConsultationButton from '@/components/common/ConsultationButton';
import {
  Sparkles,
  ArrowRight,
  Building2,
  Stethoscope,
  LineChart,
  Wrench,
  CheckCircle,
  Calendar,
  Layers,
  ChevronRight,
} from 'lucide-react';

export default async function Home() {
  const [products, categories, posts] = await Promise.all([
    getProducts({ perPage: 6 }),
    getProductCategories(),
    getPosts(3),
  ]);

  const solutionIcons: Record<string, React.ReactNode> = {
    xahoihoa: <Building2 className="w-6 h-6 text-[#006543]" />,
    chothue: <Stethoscope className="w-6 h-6 text-[#006543]" />,
    ppp: <LineChart className="w-6 h-6 text-[#006543]" />,
    baotri: <Wrench className="w-6 h-6 text-[#006543]" />,
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white py-20 lg:py-28">
        {/* Ambient glow effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#006543]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tiên phong từ năm 2010 • Đối tác y tế toàn quốc</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug">
                Giải Pháp Đầu Tư Y Tế &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                  Thiết Bị Y Tế Kỹ Thuật Cao
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                HSI Corp chuyên cung cấp giải pháp tài chính xã hội hóa y tế, cho thuê thiết bị và phân phối trực tiếp các trang thiết bị y sinh tiêu chuẩn quốc tế (CE, FDA, ISO 13485) cho các bệnh viện, phòng khám trên toàn quốc.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Chính hãng CO/CQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Đào tạo & Chuyển giao</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kỹ sư hỗ trợ 24/7</span>
                </div>
              </div>

              {/* Action Buttons */}
              <HeroActions />
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-inner bg-slate-800"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                    alt="Thiết bị y tế kỹ thuật cao HSI Corp"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                      Công nghệ nổi bật
                    </span>
                    <p className="text-sm font-bold text-white">
                      Hệ thống nội soi can thiệp & Phẫu thuật ERCP thế hệ mới
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Hãng sản xuất đối tác:</span>
                    <span className="font-semibold text-white">Philips • Löwenstein • Otopront</span>
                  </div>
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-4/5" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Mạng lưới phân phối: Toàn quốc</span>
                    <span className="text-emerald-300">4 Chi nhánh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & TRUST STRIP */}
      <section className="bg-white border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">15+</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Năm Kinh Nghiệm (Từ 2010)</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">500+</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Bệnh Viện & Phòng Khám Đối Tác</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">04</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Chi Nhánh Toàn Quốc</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">100%</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Thiết Bị Tiêu Chuẩn CE/FDA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT CATEGORIES */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                Lĩnh Vực Chuyên Môn
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Danh Mục Thiết Bị Y Tế Chủ Lực
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#006543] transition-colors"
            >
              Xem toàn bộ danh mục <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#006543] flex items-center justify-center mb-4 group-hover:bg-[#006543] group-hover:text-white transition-colors">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#006543] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {cat.description || 'Trang thiết bị và dụng cụ y tế kỹ thuật cao phục vụ điều trị chuyên khoa.'}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#006543]">
                  <span>Tra cứu thiết bị</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SHOWCASE */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                Showroom Thiết Bị
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Thiết Bị Tiêu Biểu & Phổ Biến
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Toàn bộ sản phẩm được nhập khẩu chính hãng với đầy đủ giấy phép lưu hành của Bộ Y Tế.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#006543] hover:bg-[#055b38] transition-all shadow-sm"
            >
              <span>Xem Tất Cả Sản Phẩm</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT SOLUTIONS & SERVICES */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Giải Pháp Hợp Tác
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Mô Hình Đầu Tư Y Tế Toàn Diện
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Giúp các bệnh viện công lập và tư nhân tiếp cận công nghệ y khoa hiện đại nhất mà không chịu gánh nặng ngân sách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-5">
                    {solutionIcons[sol.id]}
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{sol.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{sol.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Tìm hiểu mô hình <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL STRATEGIC PARTNERS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Đối Tác Sản Xuất Thiết Bị Y Tế Toàn Cầu
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {PARTNERS.map((partner, index) => (
              <div key={index} className="flex flex-col items-center group">
                <span className="text-base sm:text-lg font-black text-slate-700 tracking-tight group-hover:text-[#006543] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  {partner.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS & TECHNOLOGY TRANSFER */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                Bản Tin Y Sinh
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Tin Tức & Hoạt Động Chuyển Giao
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#006543] transition-colors"
            >
              Xem tất cả tin tức <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative aspect-[16/9] bg-slate-100"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#003825]/90 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 hover:text-[#006543] transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <Link
                      href={`/news/${post.slug || post.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#006543] hover:text-[#006543] transition-colors"
                    >
                      Đọc chi tiết <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#003825] via-[#005237] to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              Quý Đơn Vị Cần Đề Xuất Cấu Hình Thiết Bị Hoặc Phương Án Hợp Tác Đầu Tư?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Đội ngũ chuyên viên y sinh và cố vấn đầu tư y tế của HSI Corp sẵn sàng lắng nghe, khảo sát nhu cầu khoa phòng và gửi đề xuất tối ưu nhất.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <ConsultationButton
                label="Gửi Yêu Cầu Tư Vấn & Báo Giá"
                variant="white"
                className="py-3 px-6 text-sm"
              />
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-colors"
              >
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}