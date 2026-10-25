'use client';

import React from 'react';
import Link from 'next/link';
import { useConsultation } from '@/components/common/ConsultationProvider';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ArrowRight, FileCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';

export default function HeroActions() {
  const { openConsultation } = useConsultation();
  const { dict } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-4 pt-2">
      <Link
        href="/products"
        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#006543] hover:bg-[#055b38] text-white shadow-lg shadow-emerald-950/30 transition-all hover:scale-[1.02]"
      >
        <span>{dict.home.exploreBtn}</span>
        <ArrowRight className="w-4 h-4" />
      </Link>

      <button
        onClick={() => openConsultation()}
        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
      >
        <FileCheck className="w-4 h-4 text-emerald-300" />
        <span>{dict.home.consultProjectBtn}</span>
      </button>

      <a
        href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
        className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
      >
        <PhoneCall className="w-4 h-4 text-emerald-400" />
        <span>Hotline: {COMPANY_INFO.hotline}</span>
      </a>
    </div>
  );
}
