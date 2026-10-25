'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Phone, Mail, Building, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactForm() {
  const { language } = useLanguage();
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
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {language === 'en' ? 'Inquiry Received Successfully!' : 'Đã Tiếp Nhận Thông Tin!'}
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
          {language === 'en'
            ? 'HSI Corp regional specialists will contact you directly via phone to discuss equipment configuration and commercial quotations.'
            : 'Chuyên viên phụ trách khu vực của HSI Corp sẽ chủ động liên hệ Quý vị qua số điện thoại để trao đổi chi tiết về cấu hình thiết bị và báo giá.'}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="py-2.5 px-6 bg-[#006543] hover:bg-[#055b38] text-white font-semibold text-xs rounded-xl cursor-pointer"
        >
          {language === 'en' ? 'Submit Another Inquiry' : 'Gửi yêu cầu khác'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
      <div className="border-b border-slate-100 pb-4 mb-2">
        <h2 className="text-lg font-bold text-slate-900">
          {language === 'en' ? 'Request Medical Equipment Consultation' : 'Gửi Yêu Cầu Tư Vấn Thiết Bị Y Tế'}
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          {language === 'en'
            ? 'Please provide contact information and hospital department requirements.'
            : 'Vui lòng cung cấp thông tin liên hệ và nhu cầu thiết bị của bệnh viện / đơn vị.'}
        </p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-[#006543]" />
          {language === 'en' ? 'Contact Person Full Name' : 'Họ và tên người liên hệ'}{' '}
          <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder={language === 'en' ? 'e.g., Dr. John Doe / Department Head' : 'Ví dụ: Bác sĩ Nguyễn Văn A'}
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#006543]" />
            {language === 'en' ? 'Phone Number' : 'Số điện thoại'} <span className="text-rose-500">*</span>
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
            {language === 'en' ? 'Email for Quotation' : 'Email nhận báo giá'}
          </label>
          <input
            type="email"
            placeholder="doctor@hospital.org"
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
            {language === 'en' ? 'Hospital / Healthcare Center' : 'Bệnh viện / Cơ sở y tế'}{' '}
            <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder={language === 'en' ? 'e.g. Provincial General Hospital' : 'Ví dụ: Bệnh viện Đa khoa Tỉnh'}
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-[#006543]" />
            {language === 'en' ? 'Department / Unit' : 'Khoa phòng chuyên môn'}
          </label>
          <input
            type="text"
            placeholder={language === 'en' ? 'e.g. Endoscopy / Cardiology' : 'Ví dụ: Khoa Tiêu hóa / Hồi sức'}
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#006543]" />
          {language === 'en' ? 'Detailed Equipment Requirements' : 'Nhu cầu thiết bị chi tiết'}
        </label>
        <textarea
          rows={4}
          placeholder={
            language === 'en'
              ? 'Please specify needed devices, required quantities, bidding dossiers or equipment rental models...'
              : 'Ghi rõ tên thiết bị quan tâm, cấu hình dự kiến hoặc nhu cầu mua sắm/thuê thiết bị...'
          }
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900 placeholder:text-slate-400 resize-none"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-[#006543] hover:bg-[#055b38] disabled:bg-slate-400 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? (language === 'en' ? 'Submitting...' : 'Đang gửi...') : (language === 'en' ? 'Submit Consultation Request' : 'Gửi Yêu Cầu Báo Giá')}</span>
        </button>
      </div>
    </form>
  );
}
