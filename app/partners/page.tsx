'use client';

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
} from 'lucide-react';
import { PARTNERS } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PartnersPage() {
  const { language, dict } = useLanguage();

  const getPartnerDisplay = (partner: typeof PARTNERS[0]) => {
    if (language === 'en') {
      const enMap: Record<string, { country: string; category: string; description: string }> = {
        'Surtex Instruments Ltd.': {
          country: 'United Kingdom',
          category: 'Premium Surgical & Microsurgical Instruments',
          description:
            'Surtex Instruments is a privately-owned medical technology company with key investments in innovation and precision craftsmanship. Every instrument is meticulously handcrafted by senior artisans, complying with CE, FDA, and ISO 13485 standards for cardiovascular, orthopedics, neurosurgery, and ENT.',
        },
        'Pentax Medical': {
          country: 'Japan',
          category: 'Interventional Endoscopy & 4K Imaging Processors',
          description:
            'A division of HOYA Group (Japan), Pentax Medical is a global leader in flexible endoscopy and respiratory equipment. Known for its 4K video processors (EPK-i8020c) and i-scan digital chromoendoscopy technology for early detection and intervention of gastrointestinal tumors.',
        },
        'Roche Diagnostics': {
          country: 'Switzerland',
          category: 'In-Vitro Diagnostics (IVD) & Biopharmaceuticals',
          description:
            'Founded in Basel, Switzerland in 1896, Roche is a world-leading healthcare group delivering advanced diagnostics and pharmaceutical solutions to millions of patients across more than 150 countries.',
        },
        'SonoScape Medical Corp.': {
          country: 'International',
          category: 'Color Doppler Ultrasound & Minimally Invasive Surgery',
          description:
            'SonoScape Medical is a pioneer in healthcare technology, specializing in Color Doppler ultrasound imaging, endoscopy diagnosis and therapy, minimally invasive surgery (MIS), and cardiovascular intervention in 170+ countries.',
        },
        'pfm medical': {
          country: 'Germany',
          category: 'Congenital Cardiology Interventions & Surgery',
          description:
            'Established in Cologne, Germany in 1971, pfm medical has over 20 years of experience in structural heart technologies, highlighted by personalized occlusion devices such as Nit-Occlud Lê VSD eliminating heart block complications.',
        },
        'Translumina Therapeutics': {
          country: 'Germany / India',
          category: 'Coronary Drug-Eluting Stents & Angioplasty',
          description:
            'Founded in Germany in 2000, Translumina is a multinational manufacturer specializing in interventional cardiology devices, recognized for its dual-drug-eluting stent Vivo Isar and advanced coronary balloon catheters.',
        },
        'Fenghua Biotech': {
          country: 'China',
          category: 'IVD Reagents for Neonatal Screening',
          description:
            'Founded in 1999, Guangzhou Fenghua Biotech commands approximately 80% market share in China for neonatal dried-blood-spot screening, enabling early detection of congenital metabolic diseases and genetic defects.',
        },
        'Tipmed / APT Medical': {
          country: 'International',
          category: 'Cardiac Electrophysiology & Endovascular Intervention',
          description:
            'APT Medical is a premier developer of cardiac electrophysiology (EP) mapping catheters and interventional vascular accessories, delivering micro-precision and safety to clinical interventionists.',
        },
        'Hexacath': {
          country: 'France',
          category: 'Vascular Interventions & Bio-Active Stents',
          description:
            'Founded in 1994 near Paris, Hexacath develops and manufactures proprietary bio-active stents (BAS) and PTCA/PTA dilation catheters for coronary and peripheral vascular procedures.',
        },
        'Anrei Medical (HZ) Co., Ltd.': {
          country: 'China',
          category: 'ERCP & GI Endoscopy Consumables',
          description:
            'Anrei Medical manufactures premium disposable endoscopic instruments, nitinol guidewires, biopsy forceps, and dilation balloons certified under CE mark and ISO 13485.',
        },
      };

      if (enMap[partner.name]) {
        return {
          ...partner,
          country: enMap[partner.name].country,
          category: enMap[partner.name].category,
          description: enMap[partner.name].description,
        };
      }
    }
    return partner;
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            {dict.nav.home}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">{dict.nav.partners}</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <Globe2 className="w-3.5 h-3.5" />
              {dict.partners.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {dict.partners.heroTitle}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {dict.partners.heroDesc}
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
              <h3 className="font-bold text-slate-900 text-sm mb-1">{dict.partners.trust1Title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{dict.partners.trust1Desc}</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006543] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{dict.partners.trust2Title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{dict.partners.trust2Desc}</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#006543] flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{dict.partners.trust3Title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{dict.partners.trust3Desc}</p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                {dict.partners.listBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {dict.partners.listTitle}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
            >
              {dict.partners.viewCatalog} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PARTNERS.map((rawPartner, idx) => {
              const p = getPartnerDisplay(rawPartner);
              return (
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#006543]" /> {dict.partners.strategicBadge}
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
                      {dict.partners.viewProducts} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <ConsultationButton
                      label={dict.partners.consultConfig}
                      variant="outline"
                      className="py-1.5 px-3 text-xs"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Partners Choose HSI Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-2">
              {dict.partners.whyBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {dict.partners.whyTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {dict.partners.whyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.home.whyChooseItems.map((item, index) => (
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
              {dict.partners.ctaTitle}
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {dict.partners.ctaDesc}
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <ConsultationButton
                label={dict.partners.ctaBtn}
                variant="white"
                className="py-3 px-6 text-xs font-bold"
              />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                {dict.partners.contactOffice}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
