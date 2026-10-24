import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Award,
  ShieldCheck,
  Globe2,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PARTNERS, WHY_CHOOSE_US, COMPANY_INFO } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Đối tác chiến lược</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5" />
              Mạng Lưới Đối Tác Toàn Cầu
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Đồng Hành Cùng Các Hãng Y Tế Hàng Đầu Thế Giới
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              HSI Corp tự hào là đại diện phân phối chính hãng và đối tác chiến lược tại Việt Nam của các tập đoàn sản xuất thiết bị y tế, vật tư can thiệp kỹ thuật cao đạt chuẩn CE, FDA và ISO 13485 từ Anh, Đức, Thụy Sĩ, Nhật Bản, Pháp và quốc tế.
            </p>
          </div>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006543] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">100% Chính Hãng & CO/CQ</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Nhập khẩu trực tiếp từ nhà máy sản xuất, có giấy ủy quyền chính thức và hồ sơ pháp lý Bộ Y Tế.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006543] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Tiêu Chuẩn Quốc Tế</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Toàn bộ sản phẩm đạt tiêu chuẩn chất lượng khắt khe nhất của châu Âu (CE) và Hoa Kỳ (FDA).
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006543] flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Đào Tạo & Chuyển Giao</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Đội ngũ kỹ sư y sinh được đào tạo chuyên sâu bởi chuyên gia quốc tế của hãng tại nước ngoài.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                Hồ Sơ Hãng Sản Xuất
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Danh Sách Đối Tác Chiến Lược Toàn Cầu
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
            >
              Xem danh mục sản phẩm cung ứng <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PARTNERS.map((p, idx) => (
              <div
                key={idx}
                id={`partner-${idx}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#006543]/40 transition-all duration-300 flex flex-col justify-between scroll-mt-24"
              >
                <div>
                  {/* Logo Banner & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                    <div className="h-16 w-48 bg-slate-50 rounded-2xl p-2.5 flex items-center justify-center border border-slate-100/80">
                      <Image
                        src={p.logo}
                        alt={p.name}
                        width={180}
                        height={55}
                        className="max-h-12 max-w-[160px] w-auto h-auto object-contain"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-[#006543] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/80">
                        {p.country}
                      </span>
                      {p.featured && (
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/60 px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#006543]" /> Chiến lược
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-1.5">
                    {p.name}
                  </h3>
                  <div className="inline-block text-xs font-bold text-[#006543] mb-3">
                    {p.category}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {p.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
                  >
                    Xem thiết bị của hãng <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <ConsultationButton
                    label="Tư vấn cấu hình"
                    variant="outline"
                    className="py-1.5 px-3 text-xs"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Partners Choose HSI Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-2">
              Năng Lực Triển Khai
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              LÝ DO CHỌN HSI CORP
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Cam kết đồng hành lâu dài cùng đối tác quốc tế và hệ thống y tế Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[16/11] bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-[#006543] text-white text-xs font-black flex items-center justify-center shadow">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 text-[#006543]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-gradient-to-r from-[#003825] via-[#005237] to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Hợp Tác Phân Phối Cùng HSI Corp
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              HSI Corp luôn chào đón các nhà sản xuất trang thiết bị y tế kỹ thuật cao quốc tế mong muốn mở rộng thị phần và phát triển giải pháp y khoa tại Việt Nam.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <ConsultationButton
                label="Đăng Ký Hợp Tác Phân Phối"
                variant="white"
                className="py-3 px-6 text-xs font-bold"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Liên Hệ Văn Phòng HSI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
