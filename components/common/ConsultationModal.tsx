'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building, User, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  sku?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  productName,
  sku,
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request/submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-700 px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Yêu Cầu Tư Vấn Kỹ Thuật & Báo Giá</h3>
            <p className="text-blue-100 text-xs mt-1">
              Chuyên viên y sinh HSI Corp sẽ phản hồi trong vòng 15-30 phút
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-blue-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {productName && (
            <div className="mb-5 p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-0.5">
                Thiết bị quan tâm:
              </span>
              <p className="text-sm font-bold text-blue-950 line-clamp-1">{productName}</p>
              {sku && <p className="text-xs text-slate-500 mt-0.5">Mã thiết bị / Model: <span className="font-mono text-blue-700">{sku}</span></p>}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Đã Gửi Yêu Cầu Thành Công!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                Cảm ơn Quý đơn vị đã quan tâm đến giải pháp thiết bị y tế của HSI Corp. Chuyên viên kỹ thuật phụ trách khu vực sẽ sớm liên hệ trực tiếp.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left mb-6">
                <p className="text-xs text-slate-500 mb-1 font-medium">Hỗ trợ khẩn cấp 24/7:</p>
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Phone className="w-4 h-4 text-cyan-600" />
                  <span>Hotline Dự Án: {COMPANY_INFO.hotline}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-xl transition-colors shadow-sm"
              >
                Đóng thông báo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  Họ tên người đại diện <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bác sĩ Nguyễn Văn A / Trưởng khoa..."
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    Số điện thoại liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600" />
                    Email nhận tài liệu
                  </label>
                  <input
                    type="email"
                    placeholder="email@benhvien.vn"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-600" />
                  Bệnh viện / Phòng khám / Đơn vị <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Bệnh viện Đa khoa Tỉnh / Phòng khám..."
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  Nhu cầu chi tiết (Báo giá dự án, Thông số máy, Đào tạo...)
                </label>
                <textarea
                  rows={3}
                  placeholder="Quý đơn vị cần tài liệu kỹ thuật, đề xuất cấu hình máy hoặc tư vấn phương án thuê/mua thiết bị..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 text-slate-900 transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-900 to-cyan-700 hover:from-blue-800 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Gửi Yêu Cầu Tư Vấn Ngay
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  * Thông tin bảo mật 100%, chỉ sử dụng cho mục đích tư vấn kỹ thuật y tế.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

