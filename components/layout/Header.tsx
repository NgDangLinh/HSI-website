'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hotline Kỹ Thuật: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* National branches indicator */}
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
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
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image
            src="/images/logo.png"
            alt="HSI Corp - Together for life"
            width={160}
            height={55}
            priority
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            Trang Chủ
          </Link>
          <Link href="/about" className="hover:text-[#006543] transition-colors">
            Về HSI Corp
          </Link>
          <Link href="/products" className="hover:text-[#006543] transition-colors flex items-center gap-1">
            Thiết Bị Y Tế
          </Link>
          <Link href="/solutions" className="hover:text-[#006543] transition-colors">
            Giải Pháp Đầu Tư
          </Link>
          <Link href="/news" className="hover:text-[#006543] transition-colors">
            Tin Tức Y Khoa
          </Link>
          <Link href="/contact" className="hover:text-[#006543] transition-colors">
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
              className="w-48 xl:w-56 pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-800 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] transition-all placeholder:text-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </form>

          {/* Consultation Button */}
          <button
            onClick={() => openConsultation()}
            className="py-2 px-4 rounded-full text-xs font-bold text-white bg-[#006543] hover:bg-[#055b38] shadow-sm hover:shadow transition-all"
          >
            Tư Vấn Dự Án
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => openConsultation()}
            className="sm:hidden py-1.5 px-3 rounded-full text-xs font-bold text-white bg-[#006543] hover:bg-[#055b38]"
          >
            Tư Vấn
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#006543] focus:outline-none"
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
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#006543]"
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
              className="w-full py-3 bg-[#006543] hover:bg-[#055b38] text-white font-bold rounded-xl text-center text-sm shadow-md"
            >
              Yêu Cầu Tư Vấn & Báo Giá
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

