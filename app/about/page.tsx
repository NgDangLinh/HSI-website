import React from 'react';
import Link from 'next/link';
import { BRANCHES, PARTNERS } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';
import {
  Award,
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'Về HSI Corp | Tiên Phong Đầu Tư & Cung Cấp Thiết Bị Y Tế Kỹ Thuật Cao',
  description:
    'Lịch sử hình thành từ năm 2010, mạng lưới 4 chi nhánh toàn quốc và sứ mệnh phụng sự ngành y tế Việt Nam của HSI Corp.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-900">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Về HSI Corp</span>
        </nav>

        {/* Hero Banner About */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="max-w-3xl space-y-5 relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Thành lập từ năm 2010
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Đồng Hành Cùng Sự Phát Triển Của Ngành Y Tế Việt Nam
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Công ty Cổ phần Đầu tư Giải pháp Y tế (HSI) là một trong những đơn vị tiên phong cung cấp giải pháp tài chính y tế, xã hội hóa bệnh viện và phân phối trang thiết bị y tế công nghệ cao trên phạm vi cả nước.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Chất Lượng Chuẩn Quốc Tế</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mọi thiết bị y tế do HSI cung cấp đều có xuất xứ rõ ràng từ các quốc gia tiên tiến (Đức, Nhật Bản, Mỹ) với chứng nhận CE, FDA, ISO 13485 và giấy phép lưu hành của Bộ Y Tế.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Giải Pháp Đầu Tư Linh Hoạt</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Thấu hiểu bài toán ngân sách của các bệnh viện, HSI tiên phong trong việc thiết kế các mô hình đầu tư xã hội hóa, cho thuê thiết bị và hợp tác PPP minh bạch, bền vững.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">Hỗ Trợ Kỹ Thuật Tận Tâm</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Đội ngũ kỹ sư y sinh được đào tạo bài bản trực tiếp từ chính hãng, luôn túc trực hỗ trợ hiệu chuẩn, chuyển giao và xử lý sự cố kỹ thuật 24/7.
            </p>
          </div>
        </div>

        {/* 4 Branch Offices */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block mb-1">
              Mạng Lưới Toàn Quốc
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Hệ Thống 4 Chi Nhánh Bắc - Trung - Nam
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Đảm bảo khả năng tiếp cận, cung ứng trang thiết bị và hỗ trợ kỹ thuật kịp thời nhất tới mọi cơ sở y tế trên toàn quốc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BRANCHES.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900 text-base">
                    {b.name} <span className="text-blue-900 font-semibold">({b.city})</span>
                  </h3>
                  {b.isHeadquarter && (
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-900 text-white">
                      Trụ sở chính
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span className="font-mono font-medium text-slate-800">{b.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>{b.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Partners */}
        <div className="text-center bg-slate-100 rounded-3xl p-8 mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
            Đối Tác Cung Ứng Toàn Cầu
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-slate-700 font-bold text-base">
            {PARTNERS.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <span>{p.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">{p.country}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-950 to-cyan-900 text-white rounded-3xl p-8 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Hợp Tác Cùng HSI Corp Nâng Cao Năng Lực Y Tế
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6">
            Chúng tôi luôn sẵn sàng lắng nghe và xây dựng các phương án đầu tư trang thiết bị tối ưu nhất cho từng bệnh viện và cơ sở y tế.
          </p>
          <ConsultationButton label="Liên Hệ Cố Vấn Dự Án" variant="white" className="py-3 px-6 text-xs" />
        </div>
      </div>
    </main>
  );
}

