'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, BRANCHES } from '@/lib/data/companyInfo';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
  const { language, dict } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Summary */}
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-block bg-white px-3 py-1.5 rounded-xl shadow-sm">
              <Image
                src="/images/logo.png"
                alt="HSI Corp - Together for life"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>

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
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">{dict.footer.explore}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.partners}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-emerald-400 transition-colors">
                  {language === 'en' ? 'Comprehensive Investment Solutions' : 'Giải pháp đầu tư tổng thể'}
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches & Offices */}
          <div className="lg:col-span-6 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">{dict.footer.branches}</h4>
            <div className="space-y-3 text-xs">
              {BRANCHES.map((branch, index) => (
                <div key={index} className="border-l-2 border-emerald-500/50 pl-3">
                  <span className="font-semibold text-slate-200 block text-xs">
                    {branch.name} ({branch.city})
                  </span>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/60 py-4 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 {COMPANY_INFO.name}. {dict.footer.copyright}</p>
          <p className="text-[11px]">
            {language === 'en'
              ? 'B2B Medical Equipment Portal (Headless Next.js).'
              : 'Cổng thông tin & Trưng bày thiết bị y tế B2B (Headless Next.js Catalog).'}
          </p>
        </div>
      </div>
    </footer>
  );
}
