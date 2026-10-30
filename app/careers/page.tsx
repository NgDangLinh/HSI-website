import React from 'react';
import Link from 'next/link';
import { ChevronRight, Briefcase, MapPin, Clock, ArrowRight, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';

const OPEN_POSITIONS = [
  {
    id: 1,
    title: 'Kỹ Sư Ứng Dụng Lâm Sàng & Thiết Bị Y Sinh (Field Application Specialist)',
    department: 'Khối Kỹ Thuật Y Sinh',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: 'Từ 1 - 3 năm kinh nghiệm',
    description: 'Chịu trách nhiệm demo, hướng dẫn vận hành hệ thống nội soi tiêu hóa 4K, máy thở ICU và hỗ trợ kỹ thuật trực tiếp cho bác sĩ tại phòng phẫu thuật.',
  },
  {
    id: 2,
    title: 'Chuyên Viên Kinh Doanh Thiết Bị Y Tế (Medical Sales Specialist)',
    department: 'Khối Phát Triển Dự Án B2B',
    location: 'Toàn quốc (Hà Nội, Đà Nẵng, TP.HCM, Cần Thơ)',
    type: 'Toàn thời gian',
    experience: 'Từ 2 năm trong ngành y tế/dược',
    description: 'Phát triển quan hệ đối tác với các bệnh viện công lập, tư nhân và trung tâm y tế; tư vấn giải pháp đầu tư thiết bị phẫu thuật và can thiệp tim mạch.',
  },
  {
    id: 3,
    title: 'Chuyên Viên Hồ Sơ Thầu & Pháp Lý Y Tế (Regulatory & Tender Specialist)',
    department: 'Khối Pháp Chế & Đấu Thầu',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    experience: 'Từ 1 năm kinh nghiệm đấu thầu y tế',
    description: 'Soạn thảo, quản lý hồ sơ kỹ thuật tham gia đấu thầu thiết bị y tế theo Luật Đấu thầu và thực hiện thủ tục đăng ký lưu hành trang thiết bị tại Bộ Y Tế.',
  },
  {
    id: 4,
    title: 'Chuyên Viên Đào Tạo & Tư Vấn Dược Mỹ Phẩm (Clinical Trainer - Cell Fusion C)',
    department: 'Khối Dược Mỹ Phẩm Chuyên Khoa',
    location: 'Hà Nội & TP. Hồ Chí Minh',
    type: 'Toàn thời gian',
    experience: 'Dược sĩ / Cử nhân Y Sinh / Da liễu',
    description: 'Đào tạo sản phẩm, phác đồ phục hồi da chuyên sâu cho các bệnh viện da liễu, phòng khám thẩm mỹ và đối tác phân phối của HSI Corp.',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Tuyển dụng</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-950 via-[#003825] to-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden mb-12 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              Cơ Hội Nghề Nghiệp Tại HSI Corp
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Cùng HSI Corp Kiến Tạo Giá Trị Y Sinh Bền Vững
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Với hơn 15 năm phát triển trong ngành y tế, HSI Corp mang đến môi trường làm việc chuyên nghiệp, cơ hội tiếp cận công nghệ y khoa tiên tiến thế giới và chế độ đãi ngộ vượt trội.
            </p>
          </div>
        </div>


        {/* Open Positions List */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006543] block mb-1">
                Gia Nhập Đội Ngũ HSI
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Vị Trí Đang Tuyển Dụng
              </h2>
            </div>
            <span className="text-xs font-medium text-slate-500">
              Đang mở: <strong className="text-[#006543]">{OPEN_POSITIONS.length}</strong> vị trí
            </span>
          </div>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[#006543] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 hover:text-[#006543] transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#006543]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#006543]" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Ứng tuyển: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#006543] hover:bg-[#055b38] transition-all shadow-sm"
                  >
                    <span>Nộp CV Ứng Tuyển</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact HR Box */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Chưa Tìm Thấy Vị Trí Phù Hợp?</h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6">
            Hãy gửi hồ sơ tự ứng tuyển của bạn về Phòng Nhân sự HSI Corp. Chúng tôi luôn sẵn sàng lưu trữ thông tin và kết nối khi có cơ hội phù hợp nhất!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-50 text-[#006543] border border-emerald-200 rounded-xl hover:bg-emerald-100 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#006543]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Hotline Nhân Sự: {COMPANY_INFO.hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

