import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, BRANCHES } from '@/lib/data/companyInfo';
import ContactForm from '@/components/contact/ContactForm';
import { Phone, Mail, Clock, ChevronRight, Headphones } from 'lucide-react';

export const metadata = {
  title: 'Liên Hệ & Chi Nhánh Toàn Quốc | HSI Corp',
  description:
    'Hệ thống trụ sở và chi nhánh HSI Corp tại Hà Nội, TP. Hồ Chí Minh, Đà Nẵng, Cần Thơ. Hỗ trợ kỹ thuật thiết bị y tế 24/7.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543]">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Liên hệ & Chi nhánh</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
            Kết Nối Cùng HSI Corp
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Liên Hệ Tư Vấn & Hỗ Trợ Kỹ Thuật
          </h1>
          <p className="text-sm text-slate-500 mt-2 max-w-2xl">
            Đội ngũ chuyên viên y sinh và cố vấn dự án luôn sẵn sàng hỗ trợ khảo sát thực địa, giải đáp thông số kỹ thuật và xây dựng phương án trang bị máy móc.
          </p>
        </div>

        {/* 2 Column Grid: Contact Form + Branch Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Quick info & Branches */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Hotline Box */}
            <div className="bg-gradient-to-br from-[#003825] to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                    Tổng đài hỗ trợ 24/7
                  </span>
                  <h3 className="text-lg font-bold">Hotline Dự Án & Kỹ Thuật</h3>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-white hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-base font-black tracking-tight">{COMPANY_INFO.hotline}</span>
                </a>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Branches Card List */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
                Hệ Thống 4 Chi Nhánh Toàn Quốc
              </h3>

              <div className="space-y-4 text-xs">
                {BRANCHES.map((b, idx) => (
                  <div key={idx} className="border-l-2 border-[#006543] pl-3">
                    <strong className="text-slate-900 block font-bold">
                      {b.name} ({b.city})
                    </strong>
                    <p className="text-slate-500 text-[11px] mt-0.5">{b.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

