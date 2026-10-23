'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Stethoscope,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';
import { useConsultation } from '@/components/common/ConsultationProvider';

export default function Header() {
  const router = useRouter();
  const { openConsultation } = useConsultation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Contact details */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hotline Kỹ Thuật: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* National branches indicator */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>4 Chi nhánh:</span>
            <span className="text-slate-200">Hà Nội</span> •
            <span className="text-slate-200">TP. Hồ Chí Minh</span> •
            <span className="text-slate-200">Đà Nẵng</span> •
            <span className="text-slate-200">Cần Thơ</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-950 via-blue-900 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
            <Stethoscope className="w-6 h-6 text-cyan-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-blue-950 leading-none">
              HSI<span className="text-cyan-600">CORP</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mt-1">
              Giải Pháp Y Tế Toàn Diện
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-blue-900 transition-colors">
            Trang Chủ
          </Link>
          <Link href="/about" className="hover:text-blue-900 transition-colors">
            Về HSI Corp
          </Link>
          <Link href="/products" className="hover:text-blue-900 transition-colors flex items-center gap-1">
            Thiết Bị Y Tế
          </Link>
          <Link href="/solutions" className="hover:text-blue-900 transition-colors">
            Giải Pháp Đầu Tư
          </Link>
          <Link href="/news" className="hover:text-blue-900 transition-colors">
            Tin Tức Y Khoa
          </Link>
          <Link href="/contact" className="hover:text-blue-900 transition-colors">
            Liên Hệ
          </Link>
        </nav>

        {/* Right Actions: Search + Consultation CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Search */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Tìm tên máy, mã SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 xl:w-56 pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-800 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all placeholder:text-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </form>

          {/* Consultation Button */}
          <button
            onClick={() => openConsultation()}
            className="py-2 px-4 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-900 to-cyan-700 hover:from-blue-800 hover:to-cyan-600 shadow-sm hover:shadow transition-all"
          >
            Tư Vấn Dự Án
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => openConsultation()}
            className="sm:hidden py-1.5 px-3 rounded-full text-xs font-bold text-white bg-blue-900"
          >
            Tư Vấn
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-blue-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm thiết bị y tế, mã model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Trang Chủ
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Về HSI Corp
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Danh Mục Thiết Bị Y Tế
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Giải Pháp Đầu Tư & Xã Hội Hóa
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Tin Tức & Chuyển Giao Công Nghệ
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-100"
            >
              Liên Hệ & Chi Nhánh
            </Link>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="w-full py-3 bg-blue-900 text-white font-bold rounded-xl text-center text-sm shadow-md"
            >
              Yêu Cầu Tư Vấn & Báo Giá
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

