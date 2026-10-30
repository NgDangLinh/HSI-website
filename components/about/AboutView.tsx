'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConsultationButton from '@/components/common/ConsultationButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { COMPANY_INFO } from '@/lib/data/companyInfo';
import {
  Sparkles,
  ChevronRight,
  Landmark,
  Quote,
  ShieldCheck,
  Building2,
  Phone,
} from 'lucide-react';

export default function AboutView() {
  const { dict } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            {dict.nav.home}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-900">{dict.nav.about}</span>
        </nav>

        {/* 1. Hero Header */}
        <section className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl border border-emerald-950">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              {dict.about.heroBadge}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
              {dict.about.heroTitle}
            </h1>

            <p className="text-emerald-400 text-sm sm:text-base font-bold uppercase tracking-wider">
              {dict.about.heroSubtitle}
            </p>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl pt-1">
              {dict.about.heroDesc}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white">{dict.about.statExp}</div>
                  <div className="text-[11px] text-slate-300">{dict.about.statExpLabel}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white">{dict.about.statScope}</div>
                  <div className="text-[11px] text-slate-300">{dict.about.statScopeLabel}</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white">{dict.about.statModel}</div>
                  <div className="text-[11px] text-slate-300">{dict.about.statModelLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Main Story: Split Editorial Showcase */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Official Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-2">
                  {dict.about.sectionBadge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                  {dict.about.sectionTitle}
                </h2>
              </div>

              {/* Highlight Lead Paragraph */}
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 border-l-4 border-[#006543] text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                {dict.about.p1}
              </div>

              {/* Extended Official Description */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{dict.about.p2}</p>
                <p>{dict.about.p3}</p>
              </div>

              {/* Slogan Quote Box */}
              <div className="pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Quote className="w-5 h-5 text-[#006543] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#006543] italic leading-snug">
                    &ldquo;{dict.about.p4}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Card Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="HSI Corp thiết bị y tế kỹ thuật cao"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                    Tiên phong công nghệ y tế
                  </span>
                  <p className="text-sm font-bold leading-snug">
                    Giải pháp thiết bị chuyên sâu & Nâng tầm hệ thống y tế toàn quốc
                  </p>
                </div>
              </div>

              {/* Feature Highlights Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">Đối tác tin cậy</span>
                  <span className="font-bold text-slate-900 mt-1">Bệnh Viện & Phòng Khám</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase">Định hướng y khoa</span>
                  <span className="font-bold text-[#006543] mt-1">Nghiên Cứu Telemedicine</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 3. Full-width Commitment Strip */}
        <section className="bg-gradient-to-r from-slate-900 via-[#003825] to-slate-950 text-white rounded-3xl p-8 sm:p-10 mb-12 shadow-lg border border-emerald-950 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4">
            <Quote className="w-8 h-8 text-emerald-400 mx-auto opacity-75" />
            <p className="text-base sm:text-xl font-bold leading-relaxed text-slate-100 italic">
              &ldquo;{dict.about.commitmentQuote}&rdquo;
            </p>
            <div className="pt-1">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                — HSI Corp • Together for life —
              </span>
            </div>
          </div>
        </section>

        {/* 4. Bottom Call-to-Action */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center">
          <div className="max-w-3xl mx-auto space-y-5">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {dict.about.ctaTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              {dict.about.ctaDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <ConsultationButton
                label={dict.about.ctaBtn}
                className="py-3 px-6 text-xs sm:text-sm font-bold shadow-md"
              />
              <a
                href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#006543]" />
                <span>Hotline: {COMPANY_INFO.hotline}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
