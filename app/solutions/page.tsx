import React from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';
import {
  Building2,
  Stethoscope,
  LineChart,
  Wrench,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

export const metadata = {
  title: 'Giải Pháp Đầu Tư Y Tế & Xã Hội Hóa Bệnh Viện | HSI Corp',
  description:
    'Gói giải pháp đặt máy, liên doanh liên kết, cho thuê thiết bị y tế kỹ thuật cao và tư vấn tiếp cận nguồn vốn ưu đãi cho cơ sở y tế.',
};

export default function SolutionsPage() {
  const icons: Record<string, React.ReactNode> = {
    xahoihoa: <Building2 className="w-8 h-8 text-cyan-600" />,
    chothue: <Stethoscope className="w-8 h-8 text-cyan-600" />,
    ppp: <LineChart className="w-8 h-8 text-cyan-600" />,
    baotri: <Wrench className="w-8 h-8 text-cyan-600" />,
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-900">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Giải pháp đầu tư y tế</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
              Mô Hình Hợp Tác Bền Vững
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Giải Pháp Tài Chính & Xã Hội Hóa Thiết Bị Y Tế
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              HSI Corp đồng hành cùng các bệnh viện công lập và tư nhân tiếp cận ngay hệ thống máy móc y sinh thế hệ mới nhất, tối ưu hóa dòng tiền và giải tỏa áp lực vốn đầu tư ban đầu.
            </p>
          </div>
        </div>

        {/* Detailed Solutions Grid */}
        <div className="space-y-8 mb-16">
          {SOLUTIONS.map((sol, index) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {icons[sol.id]}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      Mô hình 0{index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{sol.title}</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{sol.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hợp đồng pháp lý minh bạch theo đúng quy chuẩn Bộ Y Tế</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bảo trì, sửa chữa định kỳ miễn phí trong thời gian hợp tác</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Đào tạo kỹ thuật và cấp chứng nhận vận hành cho y bác sĩ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hỗ trợ hồ sơ thanh toán bảo hiểm y tế thuận tiện</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-center space-y-3">
                <h3 className="font-bold text-sm text-slate-900">Quan tâm mô hình này?</h3>
                <p className="text-xs text-slate-500">
                  Chuyên viên HSI sẽ gửi bản phân tích hiệu quả tài chính và đề xuất máy phù hợp.
                </p>
                <ConsultationButton
                  productName={sol.title}
                  label="Đăng Ký Tư Vấn Phương Án"
                  variant="primary"
                  className="w-full py-2.5 text-xs"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits summary */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h4 className="font-bold text-base mb-1">Nâng Cao Năng Lực Bệnh Viện</h4>
              <p className="text-xs text-slate-300">Nhanh chóng triển khai các kỹ thuật điều trị mới, giữ chân bệnh nhân tại cơ sở.</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h4 className="font-bold text-base mb-1">Giảm Thiểu Rủi Ro Đầu Tư</h4>
              <p className="text-xs text-slate-300">Không phải bỏ vốn lớn ban đầu, chia sẻ rủi ro hỏng hóc máy móc cùng HSI.</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
              <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <h4 className="font-bold text-base mb-1">Phục Vụ Bệnh Nhân Tốt Hơn</h4>
              <p className="text-xs text-slate-300">Người dân được hưởng dịch vụ y tế kỹ thuật cao ngay tại tuyến cơ sở.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

