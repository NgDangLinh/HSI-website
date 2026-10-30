'use client';

import React from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '@/lib/data/companyInfo';
import ConsultationButton from '@/components/common/ConsultationButton';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import {
  Landmark,
  Stethoscope,
  CalendarClock,
  Handshake,
  ShieldCheck,
  Building2,
  ChevronRight,
  FileText,
} from 'lucide-react';

export default function SolutionsView() {
  const { language, dict } = useLanguage();

  const icons: Record<string, React.ReactNode> = {
    taichinh: <Landmark className="w-8 h-8 text-[#006543]" />,
    chothue: <Stethoscope className="w-8 h-8 text-[#006543]" />,
    tracham: <CalendarClock className="w-8 h-8 text-[#006543]" />,
    ppp: <Handshake className="w-8 h-8 text-[#006543]" />,
    thietbi: <ShieldCheck className="w-8 h-8 text-[#006543]" />,
    xaydung: <Building2 className="w-8 h-8 text-[#006543]" />,
  };

  const fallbackDetails: Record<
    string,
    {
      descVi: string;
      descEn: string;
      subVi: Array<{ title: string; desc: string }>;
      subEn: Array<{ title: string; desc: string }>;
    }
  > = {
    taichinh: {
      descVi:
        'Đội ngũ chuyên gia tài chính của HSI Corp đồng hành cùng các bệnh viện, phòng khám nghiên cứu hồ sơ, thẩm định tính khả thi và cấu trúc phương án tài chính toàn diện nhằm tối ưu hóa chi phí đầu tư ban đầu.',
      descEn:
        'HSI Corp’s financial specialists collaborate with hospitals and clinics to evaluate feasibility and structure comprehensive capital plans, minimizing upfront capital investment stress.',
      subVi: [
        {
          title: 'Tư vấn giải pháp tài chính chuyên sâu',
          desc: 'Đội ngũ chuyên gia tài chính sẽ nghiên cứu hồ sơ, khảo sát, phân tích lợi ích và rủi ro và đưa ra những phương án tài chính tốt nhất cho từng hạng mục dự án.',
        },
        {
          title: 'Liên kết ngân hàng đối tác hỗ trợ vốn vay ưu đãi',
          desc: 'Ngân hàng liên kết với HSI sẽ hỗ trợ khách hàng vay vốn mở phòng khám, bệnh viện với mức lãi suất ưu đãi nhất thị trường và thời hạn giải ngân nhanh chóng.',
        },
      ],
      subEn: [
        {
          title: 'In-Depth Financial Advisory',
          desc: 'Our financial experts thoroughly analyze project feasibility, ROI, and risk profiles to formulate optimal funding strategies for each investment phase.',
        },
        {
          title: 'Preferential Credit Lines with Partner Banks',
          desc: 'HSI-partnered commercial banks provide preferential credit packages and streamlined disbursement procedures for clinic and hospital establishment.',
        },
      ],
    },
    chothue: {
      descVi:
        'HSI Corp cung cấp mô hình hợp tác linh hoạt giữa công lập và tư nhân, tạo điều kiện cho các cơ sở y tế nhanh chóng sở hữu máy móc kỹ thuật cao mà không bị áp lực ngân sách nhà nước.',
      descEn:
        'HSI Corp offers flexible public-private cooperation models, enabling medical facilities to rapidly deploy advanced medical machinery without public budget strain.',
      subVi: [
        {
          title: 'Cho thuê máy móc thiết bị',
          desc: 'Đội ngũ chuyên viên HSI sẽ đưa ra nhiều phương án cho thuê thiết bị y tế linh hoạt theo ca, theo tháng hoặc dài hạn tùy thuộc vào nhu cầu thực tế của khách hàng.',
        },
        {
          title: 'Góp tài sản liên doanh liên kết',
          desc: 'Chúng tôi hợp tác với các bệnh viện, cơ sở y tế, sử dụng tài sản là trang thiết bị, nhà cửa, cơ sở hạ tầng sẵn có để liên doanh, liên kết tổ chức các hoạt động dịch vụ.',
        },
        {
          title: 'Góp vốn đầu tư mua sắm',
          desc: 'Cơ sở y tế công lập và phía đối tác liên doanh cùng góp vốn bằng tiền mặt để mua sắm trang thiết bị kỹ thuật cao phục vụ hoạt động dịch vụ.',
        },
      ],
      subEn: [
        {
          title: 'Flexible Medical Equipment Leasing',
          desc: 'Customized device leasing plans per procedure, monthly, or multi-year terms adapted to hospital clinical demand and cash flow.',
        },
        {
          title: 'Asset Contribution & Facility Partnership',
          desc: 'Cooperating with hospitals using existing physical infrastructure, real estate, and facilities to establish specialized diagnostic joint services.',
        },
        {
          title: 'Cash Capital Co-Investment',
          desc: 'Joint equity participation between public hospitals and private investors to procure state-of-the-art diagnostic and surgical machinery.',
        },
      ],
    },
    tracham: {
      descVi:
        'Chính sách tài chính đột phá hỗ trợ các cơ sở y tế mua sắm thiết bị công nghệ cao và thanh toán linh hoạt nhiều đợt, đưa máy móc vào vận hành khai thác tạo dòng tiền trước khi tất toán.',
      descEn:
        'Innovative financing policies enabling medical centers to deploy next-gen equipment immediately and stagger payments over time based on actual clinical revenue.',
      subVi: [
        {
          title: 'Thanh toán linh hoạt từ 3 tháng đến 2 năm',
          desc: 'Chúng tôi hỗ trợ các bệnh viện, cơ sở y tế mua thiết bị và thanh toán làm nhiều đợt trong vòng từ 3 tháng đến 2 năm tùy quy mô dự án.',
        },
        {
          title: 'Lãi suất ưu đãi so với thị trường',
          desc: 'Mức lãi suất ưu đãi đặc biệt hỗ trợ tối đa cho cơ sở y tế, giảm thiểu áp lực dòng tiền trong giai đoạn đầu đi vào hoạt động.',
        },
        {
          title: 'Bàn giao thiết bị và đào tạo tức thì',
          desc: 'Thiết bị được bàn giao, lắp đặt, hiệu chuẩn và chuyển giao kỹ thuật vận hành đầy đủ ngay từ đợt thanh toán đầu tiên.',
        },
      ],
      subEn: [
        {
          title: 'Flexible Installments (3 to 24 Months)',
          desc: 'Supporting hospitals and healthcare centers with structured payment tranches spanning 3 to 24 months based on equipment category.',
        },
        {
          title: 'Preferential Market Rates',
          desc: 'Significantly subsidized interest rates compared to standard commercial loans, protecting operating cash flows during ramp-up.',
        },
        {
          title: 'Immediate Delivery & Clinical Training',
          desc: 'Devices are immediately installed, calibrated, and staff-certified upon initial installment tranche execution.',
        },
      ],
    },
    ppp: {
      descVi:
        'Đầu tư theo hình thức đối tác công tư giúp đa dạng hóa nguồn tài chính y tế, nâng cao năng lực phục vụ bệnh nhân và giảm gánh nặng chi ngân sách nhà nước.',
      descEn:
        'Public-Private Partnerships diversify healthcare funding, expand patient access to high-end medical treatments, and relieve public expenditure constraints.',
      subVi: [
        {
          title: 'Linh hoạt về nguồn tài chính',
          desc: 'Huy động hiệu quả nguồn vốn ngoài ngân sách nhằm phát triển cơ sở hạ tầng và công nghệ y tế hiện đại phục vụ nhân dân.',
        },
        {
          title: 'Nâng cao hiệu quả đầu tư và chất lượng dịch vụ',
          desc: 'Cung cấp hệ thống dịch vụ y tế kỹ thuật cao, thúc đẩy cải cách thể chế và chuẩn hóa quy trình điều trị tại bệnh viện.',
        },
        {
          title: 'Chia sẻ rủi ro & Đồng hành bền vững',
          desc: 'Cơ chế hợp tác minh bạch, phân chia trách nhiệm và lợi ích hài hòa, tuân thủ nghiêm ngặt khung pháp lý của Nhà nước.',
        },
      ],
      subEn: [
        {
          title: 'Capital Resource Flexibility',
          desc: 'Mobilizing private investment capital to modernize hospital infrastructure and diagnostic technologies for the community.',
        },
        {
          title: 'Elevated Clinical Standards & Service Quality',
          desc: 'Delivering international-standard medical services, promoting institutional reform, and modernizing patient care workflows.',
        },
        {
          title: 'Transparent Risk & Revenue Sharing',
          desc: 'Equitable partnership framework compliant with healthcare regulatory standards, ensuring sustainable long-term public benefit.',
        },
      ],
    },
    thietbi: {
      descVi:
        'HSI Corp là đại diện phân phối chính thức của các thương hiệu y sinh hàng đầu thế giới, mang đến giải pháp công nghệ đồng bộ và vật tư can thiệp đạt chuẩn quốc tế.',
      descEn:
        'HSI Corp serves as the official distributor of premier global medical manufacturers, delivering integrated technological systems and certified surgical instruments.',
      subVi: [
        {
          title: 'Sản phẩm y tế công nghệ cao',
          desc: 'Chúng tôi cung cấp những sản phẩm y tế công nghệ cao nhằm hỗ trợ tối đa và nâng cao hiệu quả trong quá trình chăm sóc sức khỏe và điều trị của bệnh nhân.',
        },
        {
          title: '100% Chính hãng & Đầy đủ CO/CQ',
          desc: 'Tất cả thiết bị đều đạt chứng chỉ CE, FDA, ISO 13485 và có đầy đủ hồ sơ pháp lý lưu hành của Bộ Y Tế phục vụ công tác đấu thầu.',
        },
        {
          title: 'Chuyển giao kỹ thuật & Bảo dưỡng định kỳ',
          desc: 'Đội ngũ kỹ sư y sinh chuyên môn cao thực hiện lắp đặt, hướng dẫn vận hành chuyên sâu và bảo trì bảo dưỡng phòng ngừa thường niên.',
        },
      ],
      subEn: [
        {
          title: 'Advanced Biomedical Technologies',
          desc: 'Supplying top-tier medical innovations to empower clinicians, maximize surgical accuracy, and accelerate patient recovery.',
        },
        {
          title: '100% Authentic with Full CO/CQ',
          desc: 'Fully certified with CE, FDA, ISO 13485, and Ministry of Health distribution licenses compliant with hospital bidding standards.',
        },
        {
          title: 'Clinical Tech Transfer & 24/7 Support',
          desc: 'Dedicated biomedical engineers provide turnkey installation, clinical training, and preventative maintenance schedules.',
        },
      ],
    },
    xaydung: {
      descVi:
        'HSI Corp cung cấp các gói xây dựng cơ sở hạ tầng bệnh viện – phòng khám toàn diện, đảm bảo tiêu chuẩn y tế khắt khe, chất lượng và uy tín vững bền.',
      descEn:
        'HSI Corp delivers turnkey hospital and medical clinic infrastructure solutions, adhering to rigorous healthcare building codes, safety, and operational excellence.',
      subVi: [
        {
          title: 'Quy hoạch và xây dựng cơ sở hạ tầng toàn diện',
          desc: 'Chúng tôi cung cấp các gói xây dựng cơ sở hạ tầng bệnh viện toàn diện, từ thiết kế mặt bằng khoa phòng, phòng mổ vô khuẩn đến hệ thống phụ trợ y tế.',
        },
        {
          title: 'Cam kết chất lượng và uy tín tiến độ',
          desc: 'Quy trình thi công được kiểm soát nghiêm ngặt theo quy chuẩn Bộ Y Tế, đảm bảo độ bền vững, công năng sử dụng tối ưu và đúng tiến độ cam kết.',
        },
        {
          title: 'Tư vấn mô hình quản trị vận hành',
          desc: 'Hỗ trợ thiết lập quy trình quản lý chất lượng bệnh viện, tối ưu hóa lưu đồ luân chuyển bệnh nhân và đào tạo nhân sự điều hành cơ sở y tế.',
        },
      ],
      subEn: [
        {
          title: 'Comprehensive Healthcare Infrastructure Packages',
          desc: 'Complete turnkey architectural planning, sterile operating theater construction, ICU layouts, and centralized medical gas pipelines.',
        },
        {
          title: 'Strict Quality & Timeline Commitments',
          desc: 'Rigorous engineering standards meeting healthcare safety regulations, optimizing departmental functional ergonomics and delivery milestones.',
        },
        {
          title: 'Hospital Operational Governance Consulting',
          desc: 'Assisting facility management in establishing standardized operating procedures, patient flow optimization, and medical administrative excellence.',
        },
      ],
    },
  };

  const solutionsList = SOLUTIONS.map((sol) => {
    const fallback = fallbackDetails[sol.id];
    const isEn = language === 'en';

    const title = (isEn ? sol.titleEn : sol.title) || sol.title;

    const description =
      (isEn
        ? (sol.fullDescriptionEn || sol.descriptionEn || fallback?.descEn || sol.shortDescriptionEn)
        : (sol.fullDescription || sol.description || fallback?.descVi || sol.shortDescription)) ||
      fallback?.descVi ||
      '';

    const subPoints =
      (isEn
        ? (sol.subPointsEn && sol.subPointsEn.length > 0 ? sol.subPointsEn : fallback?.subEn)
        : (sol.subPoints && sol.subPoints.length > 0 ? sol.subPoints : fallback?.subVi)) ||
      fallback?.subVi ||
      [];

    return {
      ...sol,
      title,
      description,
      subPoints,
    };
  });

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            {dict.nav.home}
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">
            {language === 'en' ? 'Comprehensive Investment Solutions' : 'Giải pháp đầu tư tổng thể'}
          </span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              {language === 'en' ? 'Sustainable Investment Models' : 'Mô Hình Đầu Tư Bền Vững'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {language === 'en'
                ? 'Comprehensive Investment Solutions'
                : 'Giải Pháp Đầu Tư Tổng Thể'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === 'en'
                ? 'HSI Corp accompanies public and private hospitals to access cutting-edge biomedical equipment, financial structuring, and turnkey medical infrastructure development.'
                : 'HSI Corp đồng hành cùng các bệnh viện công lập và tư nhân tiếp cận giải pháp tài chính toàn diện, trang thiết bị y sinh kỹ thuật cao và mô hình quản trị hiệu quả.'}
            </p>
          </div>
        </div>

        {/* Detailed Solutions Grid */}
        <div className="space-y-10 mb-16">
          {solutionsList.map((sol) => (
            <section
              key={sol.id}
              id={sol.id}
              className="scroll-mt-24 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Solution Details & Sub-pillars */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {icons[sol.id]}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">{sol.title}</h2>
                </div>

                {/* Comprehensive Description */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {sol.description}
                </p>

                {/* Sub-Pillars from HSI Official Website */}
                {sol.subPoints && sol.subPoints.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#006543]" />
                      <span>{language === 'en' ? 'Core Sub-Pillars' : 'Các Hạng Mục Chi Tiết'}</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {sol.subPoints.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-emerald-300 transition-colors"
                        >
                          <h4 className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#006543] shrink-0" />
                            <span>{sub.title}</span>
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: CTA Box */}
              <div className="lg:col-span-4 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/80 text-center space-y-3.5 self-start lg:sticky lg:top-28">
                <h3 className="font-bold text-sm text-slate-900">
                  {language === 'en' ? 'Interested in this model?' : 'Quan tâm mô hình này?'}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'en'
                    ? 'Our specialists will assess your department’s needs and draft an optimal financial model.'
                    : 'Chuyên viên HSI Corp sẽ khảo sát nhu cầu khoa phòng và lên đề án tài chính tối ưu.'}
                </p>
                <div className="pt-2">
                  <ConsultationButton
                    productName={sol.title}
                    label={language === 'en' ? 'Request Model Advice' : 'Đăng Ký Tư Vấn Mô Hình'}
                    className="w-full py-2.5 text-xs font-bold"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
