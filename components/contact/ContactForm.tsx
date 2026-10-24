'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, Building, FileText } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    department: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center py-12 shadow-sm">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Đã Tiếp Nhận Thông Tin!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          Chuyên viên phụ trách khu vực của HSI Corp sẽ chủ động liên hệ Quý vị qua số điện thoại để trao đổi chi tiết về cấu hình thiết bị và báo giá.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="py-2.5 px-6 bg-[#006543] hover:bg-[#055b38] text-white font-semibold text-xs rounded-xl"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
      <div className="border-b border-slate-100 pb-4 mb-2">
        <h2 className="text-lg font-bold text-slate-900">Gửi Yêu Cầu Tư Vấn Thiết Bị Y Tế</h2>
        <p className="text-xs text-slate-500 mt-1">
          Vui lòng cung cấp thông tin liên hệ và nhu cầu thiết bị của bệnh viện / đơn vị.
        </p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-[#006543]" />
          Họ và tên người liên hệ <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Ví dụ: Bác sĩ Nguyễn Văn A"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#006543]" />
            Số điện thoại <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="0912 345 678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#006543]" />
            Email nhận báo giá
          </label>
          <input
            type="email"
            placeholder="bacsi@benhvien.vn"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#006543]" />
            Bệnh viện / Cơ sở y tế <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Tên bệnh viện hoặc phòng khám"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Khoa phòng / Chuyên khoa
          </label>
          <input
            type="text"
            placeholder="Khoa Thăm dò chức năng, Ngoại, ICU..."
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#006543]" />
          Nội dung yêu cầu (Dòng máy quan tâm, Phương án thuê/xã hội hóa...)
        </label>
        <textarea
          rows={4}
          placeholder="Mô tả nhu cầu cấu hình thiết bị, số lượng hoặc câu hỏi kỹ thuật..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400 resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-900 to-cyan-700 hover:from-blue-800 hover:to-cyan-600 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" />
              Gửi Thông Tin Cho HSI Corp
            </>
          )}
        </button>
      </div>
    </form>
  );
}

