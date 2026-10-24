import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, BRANCHES } from '@/lib/data/companyInfo';
import { Phone, Mail, Stethoscope, ShieldCheck, Award, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* Upper Footer: Value Proposition / Trust Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006543]/20 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">15+ Năm Kinh Nghiệm Y Tế</h4>
              <p className="text-xs text-slate-400 mt-0.5">Tiên phong xã hội hóa & đầu tư trang thiết bị bệnh viện từ năm 2010.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006543]/20 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Thiết Bị Chính Hãng 100%</h4>
              <p className="text-xs text-slate-400 mt-0.5">Đầy đủ chứng chỉ xuất xứ CO/CQ, đạt tiêu chuẩn CE, FDA, ISO 13485.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006543]/20 border border-emerald-800/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Kỹ Sư Y Sinh Hỗ Trợ 24/7</h4>
              <p className="text-xs text-slate-400 mt-0.5">Mạng lưới kỹ thuật tại 4 chi nhánh sẵn sàng ứng cứu và bảo trì thiết bị.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white px-3 py-1.5 rounded-xl shadow-sm">
              <Image
                src="/images/logo.png"
                alt="HSI Corp - Together for life"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hotline: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Khám Phá</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  Về HSI Corp
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors">
                  Danh mục thiết bị
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-emerald-400 transition-colors">
                  Giải pháp đầu tư y tế
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-emerald-400 transition-colors">
                  Tin tức & Chuyển giao
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Liên hệ báo giá
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Dòng Thiết Bị</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/products?category=noi-soi-can-thiep-tieu-hoa" className="hover:text-emerald-400 transition-colors">
                  Nội soi can thiệp & ERCP
                </Link>
              </li>
              <li>
                <Link href="/products?category=chan-thuong-chinh-hinh" className="hover:text-emerald-400 transition-colors">
                  Chấn thương chỉnh hình
                </Link>
              </li>
              <li>
                <Link href="/products?category=dung-cu-phau-thuat-surtex" className="hover:text-emerald-400 transition-colors">
                  Dụng cụ phẫu thuật Surtex
                </Link>
              </li>
              <li>
                <Link href="/products?category=duoc-my-pham" className="hover:text-emerald-400 transition-colors">
                  Dược Mỹ Phẩm Cell Fusion C
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches & Offices */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">Hệ Thống 4 Chi Nhánh</h4>
            <div className="space-y-3 text-xs">
              {BRANCHES.map((branch, index) => (
                <div key={index} className="border-l-2 border-emerald-500/50 pl-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-200">
                      {branch.name} ({branch.city})
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">{branch.phone}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5 line-clamp-1">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-4 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 {COMPANY_INFO.name}. Toàn quyền bảo lưu.</p>
          <p className="text-[11px]">Cổng thông tin & Trưng bày thiết bị y tế B2B (Headless Next.js Catalog).</p>
        </div>
      </div>
    </footer>
  );
}

