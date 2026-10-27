'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MedicalProduct, ProductCategory } from '@/lib/types/product';
import { NewsPost } from '@/lib/data/mockPosts';
import { COMPANY_INFO, SOLUTIONS, PARTNERS } from '@/lib/data/companyInfo';
import ProductCard from '@/components/product/ProductCard';
import HeroActions from '@/components/home/HeroActions';
import ConsultationButton from '@/components/common/ConsultationButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';
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

interface HomeViewProps {
  products: MedicalProduct[];
  categories: ProductCategory[];
  posts: NewsPost[];
}

export default function HomeView({ products, categories, posts }: HomeViewProps) {
  const { language, dict } = useLanguage();

  const solutionIcons: Record<string, React.ReactNode> = {
    xahoihoa: <Building2 className="w-6 h-6 text-[#006543]" />,
    chothue: <Stethoscope className="w-6 h-6 text-[#006543]" />,
    ppp: <LineChart className="w-6 h-6 text-[#006543]" />,
    baotri: <Wrench className="w-6 h-6 text-[#006543]" />,
  };

  const solutionsData = SOLUTIONS.map((sol) => {
    if (language === 'en') {
      if (sol.id === 'xahoihoa') {
        return {
          ...sol,
          title: 'Healthcare Socialization & Joint Ventures',
          description:
            'Co-investing modern medical equipment for public hospitals with transparent revenue sharing and full regulatory compliance.',
        };
      }
      if (sol.id === 'chothue') {
        return {
          ...sol,
          title: 'High-Tech Medical Equipment Leasing',
          description:
            'Flexible device leasing plans enabling hospitals to adopt advanced technologies without heavy upfront capital expenditure.',
        };
      }
      if (sol.id === 'ppp') {
        return {
          ...sol,
          title: 'Public-Private Partnership (PPP) & Financial Advisory',
          description:
            'Consulting on preferential credit access from partner banks and establishing efficient operational governance models for medical departments.',
        };
      }
      if (sol.id === 'baotri') {
        return {
          ...sol,
          title: '24/7 Technical Service & Maintenance',
          description:
            'Factory-trained biomedical engineers providing periodic calibration, preventive maintenance, and authentic CO/CQ spare parts.',
        };
      }
    }
    return sol;
  });

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
                <span>{dict.home.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug">
                {dict.home.heroTitle1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-white">
                  {dict.home.heroTitle2}
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {dict.home.heroDesc}
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{dict.home.coCq}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{dict.home.training}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{dict.home.engineers}</span>
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
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block mb-0.5">
                      {dict.home.highlightTech}
                    </span>
                    <p className="text-sm font-bold text-white">
                      {dict.home.highlightDesc}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{dict.home.partnerMfrs}</span>
                    <span className="font-semibold text-white">Philips • Löwenstein • Otopront</span>
                  </div>
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-4/5" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{dict.home.distributionNetwork}</span>
                    <span className="text-emerald-300">{dict.home.branchesCountLabel}</span>
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
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{dict.home.statExp}</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">500+</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{dict.home.statHospitals}</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">04</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{dict.home.statBranches}</p>
            </div>
            <div className="p-4 border-l border-slate-200">
              <span className="text-3xl sm:text-4xl font-black text-[#006543] tracking-tight">100%</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{dict.home.statStandard}</p>
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
                {dict.home.categoriesBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {dict.home.categoriesTitle}
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
            >
              {dict.home.viewAllCategories} <ArrowRight className="w-3.5 h-3.5" />
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
                  <span>{dict.home.exploreDevices}</span>
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
                {dict.home.showroomBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {dict.home.showroomTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                {dict.home.showroomDesc}
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#006543] hover:bg-[#055b38] transition-all shadow-sm"
            >
              <span>{dict.home.viewAllProducts}</span>
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
              {dict.home.solutionsBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {dict.home.solutionsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {dict.home.solutionsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsData.map((sol) => (
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
                    {dict.home.learnModel} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE HSI CORP */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-2">
              {dict.home.whyChooseUsBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {dict.home.whyChooseUsTitle}
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-3 leading-relaxed">
              {dict.home.whyChooseUsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.home.whyChooseItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#006543]/40 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#006543] text-white text-xs font-black flex items-center justify-center shadow-md">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#006543] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL STRATEGIC PARTNERS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                {dict.home.partnersBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {dict.home.partnersTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                {dict.home.partnersDesc}
              </p>
            </div>
            <Link
              href="/partners"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
            >
              {dict.home.viewAllPartners} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {PARTNERS.map((partner, index) => (
              <Link
                key={index}
                href={`/partners#partner-${index}`}
                className="group p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[#006543]/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between text-center min-h-[140px]"
              >
                <div className="h-14 w-full flex items-center justify-center px-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={46}
                    className="max-h-11 max-w-[130px] w-auto h-auto object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-[#006543] transition-colors block">
                    {partner.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
                    {partner.country}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS & TECHNOLOGY TRANSFER */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                {dict.home.newsBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {dict.home.newsTitle}
              </h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] hover:text-[#055b38] transition-colors"
            >
              {dict.home.viewAllNews} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <Link
                  href={`/news/${post.slug || post.id}`}
                  className="relative aspect-[16/9] bg-slate-100 overflow-hidden block"
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#003825]/90 text-white backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-[#006543] transition-colors mb-2">
                      <Link href={`/news/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <Link
                      href={`/news/${post.slug || post.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#006543] hover:text-[#055b38] transition-colors"
                    >
                      {dict.home.readMore} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#003825] via-[#005237] to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
              {dict.home.bottomCtaTitle}
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {dict.home.bottomCtaDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <ConsultationButton
                label={dict.home.bottomCtaBtn}
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
