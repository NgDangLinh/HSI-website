'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';
import { useConsultation } from '@/components/common/ConsultationProvider';

const NAV_ITEMS = [
  { label: 'TRANG CHỦ', href: '/' },
  { label: 'GIỚI THIỆU', href: '/about' },
  { label: 'ĐỐI TÁC', href: '/partners' },
  { label: 'SẢN PHẨM', href: '/products' },
  { label: 'TUYỂN DỤNG', href: '/careers' },
  { label: 'TRUYỀN THÔNG', href: '/news' },
  { label: 'LIÊN HỆ', href: '/contact' },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { openConsultation } = useConsultation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLang, setCurrentLang] = useState<'vi' | 'en'>('vi');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when search is opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
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

      {/* Main navigation matching hsicorp.com.vn */}
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

        {/* Desktop Nav Links (In hoa chuẩn HSI Corp) */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-7 text-[13px] font-bold tracking-wide">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  active
                    ? 'text-[#006543] font-black border-b-2 border-[#006543]'
                    : 'text-slate-700 hover:text-[#006543]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Medium screens (lg to xl) */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-bold tracking-wide">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  active
                    ? 'text-[#006543] font-black border-b-2 border-[#006543]'
                    : 'text-slate-700 hover:text-[#006543]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Language Switcher + Minimalist Search Icon */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language flags */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
            <button
              onClick={() => setCurrentLang('en')}
              title="English"
              className={`p-0.5 rounded transition-all ${
                currentLang === 'en'
                  ? 'ring-2 ring-[#006543] opacity-100 scale-105'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src="/images/flags/en.png"
                alt="English"
                width={20}
                height={14}
                className="w-5 h-auto rounded-sm object-cover shadow-xs"
              />
            </button>
            <button
              onClick={() => setCurrentLang('vi')}
              title="Tiếng Việt"
              className={`p-0.5 rounded transition-all ${
                currentLang === 'vi'
                  ? 'ring-2 ring-[#006543] opacity-100 scale-105'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src="/images/flags/vi.png"
                alt="Tiếng Việt"
                width={20}
                height={14}
                className="w-5 h-auto rounded-sm object-cover shadow-xs"
              />
            </button>
          </div>

          {/* Minimalist Search Icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={`p-2 rounded-full transition-colors ${
              searchOpen
                ? 'bg-emerald-50 text-[#006543]'
                : 'text-slate-600 hover:text-[#006543] hover:bg-slate-100'
            }`}
            aria-label="Tìm kiếm sản phẩm"
            title="Tìm kiếm thiết bị y tế"
          >
            {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Language flags on mobile */}
          <div className="flex items-center gap-1.5 mr-1">
            <button
              onClick={() => setCurrentLang('vi')}
              className={`p-0.5 rounded ${currentLang === 'vi' ? 'ring-1 ring-[#006543]' : 'opacity-70'}`}
            >
              <Image src="/images/flags/vi.png" alt="VI" width={18} height={12} className="w-4 h-auto" />
            </button>
            <button
              onClick={() => setCurrentLang('en')}
              className={`p-0.5 rounded ${currentLang === 'en' ? 'ring-1 ring-[#006543]' : 'opacity-70'}`}
            >
              <Image src="/images/flags/en.png" alt="EN" width={18} height={12} className="w-4 h-auto" />
            </button>
          </div>

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

      {/* Expandable Search Bar on Desktop */}
      {searchOpen && (
        <div className="hidden lg:block border-t border-slate-100 bg-slate-50/90 backdrop-blur-md px-4 py-3 animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="relative flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Nhập tên thiết bị y tế, mã model (ví dụ: Surtex, EPK-i8020c, Stent, Suncream...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-white text-slate-900 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] shadow-inner"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#006543] hover:bg-[#055b38] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-sm"
              >
                Tìm Kiếm
              </button>
            </form>
          </div>
        </div>
      )}

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

          <nav className="flex flex-col space-y-1 text-[13px] font-bold tracking-wide text-slate-800">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2.5 rounded-lg transition-colors ${
                    active
                      ? 'bg-emerald-50 text-[#006543] font-black'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
