'use client';

import React from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  Building2,
  Stethoscope,
  LineChart,
  Wrench,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';

export default function SolutionsView() {
  const { language, dict } = useLanguage();

  const icons: Record<string, React.ReactNode> = {
    xahoihoa: <Building2 className="w-8 h-8 text-[#006543]" />,
    chothue: <Stethoscope className="w-8 h-8 text-[#006543]" />,
    ppp: <LineChart className="w-8 h-8 text-[#006543]" />,
    baotri: <Wrench className="w-8 h-8 text-[#006543]" />,
  };

  const solutionsList = SOLUTIONS.map((sol) => {
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
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543]">
            {dict.nav.home}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">
            {language === 'en' ? 'Investment Solutions' : 'Giải pháp đầu tư y tế'}
          </span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              {language === 'en' ? 'Sustainable Partnership Models' : 'Mô Hình Hợp Tác Bền Vững'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {language === 'en'
                ? 'Financial Solutions & Medical Equipment Socialization'
                : 'Giải Pháp Tài Chính & Xã Hội Hóa Thiết Bị Y Tế'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'en'
                ? 'HSI Corp accompanies public and private hospitals to instantly access next-gen biomedical machinery, optimize cash flow, and relieve initial capital budget burdens.'
                : 'HSI Corp đồng hành cùng các bệnh viện công lập và tư nhân tiếp cận ngay hệ thống máy móc y sinh thế hệ mới nhất, tối ưu hóa dòng tiền và giải tỏa áp lực vốn đầu tư ban đầu.'}
            </p>
          </div>
        </div>

        {/* Detailed Solutions Grid */}
        <div className="space-y-8 mb-16">
          {solutionsList.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {icons[sol.id]}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#006543]">
                      {language === 'en' ? `Model 0${index + 1}` : `Mô hình 0${index + 1}`}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sol.title}</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{sol.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Transparent legal contracts complying with Ministry of Health regulations'
                        : 'Hợp đồng pháp lý minh bạch theo đúng quy chuẩn Bộ Y Tế'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Complimentary scheduled maintenance and calibration during cooperation'
                        : 'Bảo trì, sửa chữa định kỳ miễn phí trong thời gian hợp tác'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Technical training and operation certification for doctors and medical staff'
                        : 'Đào tạo kỹ thuật và cấp chứng nhận vận hành cho y bác sĩ'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Support with health insurance billing documentation and procedures'
                        : 'Hỗ trợ hồ sơ thanh toán bảo hiểm y tế thuận tiện'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center space-y-3">
                <h3 className="font-bold text-sm text-slate-900">
                  {language === 'en' ? 'Interested in this model?' : 'Quan tâm mô hình này?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'en'
                    ? 'Our specialists will assess your department’s needs and draft an optimal financial model.'
                    : 'Chuyên viên HSI Corp sẽ khảo sát nhu cầu khoa phòng và lên đề án tài chính tối ưu.'}
                </p>
                <div className="pt-2">
                  <ConsultationButton
                    label={language === 'en' ? 'Request Model Advice' : 'Đăng Ký Tư Vấn Mô Hình'}
                    className="w-full py-2.5 text-xs"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

