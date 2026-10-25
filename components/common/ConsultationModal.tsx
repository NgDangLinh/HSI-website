'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Building, User, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data/companyInfo';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
  const { dict } = useLanguage();
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
        <div className="bg-gradient-to-r from-[#003825] via-[#005237] to-[#006543] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{dict.consultation.modalTitle}</h3>
            <p className="text-emerald-100 text-xs mt-1">
              {dict.consultation.modalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {productName && (
            <div className="mb-5 p-3.5 bg-emerald-50/70 border border-emerald-100 rounded-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#006543] block mb-0.5">
                {dict.consultation.interestedDevice}
              </span>
              <p className="text-sm font-bold text-[#003825] line-clamp-1">{productName}</p>
              {sku && (
                <p className="text-xs text-slate-500 mt-0.5">
                  {dict.consultation.modelSku} <span className="font-mono text-[#006543]">{sku}</span>
                </p>
              )}
            </div>
          )}

          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{dict.consultation.successTitle}</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                {dict.consultation.successDesc}
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left mb-6">
                <p className="text-xs text-slate-500 mb-1 font-medium">{dict.consultation.emergencySupport}</p>
                <div className="flex items-center gap-2 text-[#006543] font-bold text-sm">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>{dict.consultation.projectHotline} {COMPANY_INFO.hotline}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-2.5 px-4 bg-[#006543] hover:bg-[#055b38] text-white font-medium rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                {dict.consultation.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#006543]" />
                  {dict.consultation.fullName} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={dict.consultation.fullNamePlaceholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#006543]" />
                    {dict.consultation.phone} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={dict.consultation.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#006543]" />
                    {dict.consultation.email}
                  </label>
                  <input
                    type="email"
                    placeholder={dict.consultation.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#006543]" />
                  {dict.consultation.organization} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={dict.consultation.organizationPlaceholder}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#006543]" />
                  {dict.consultation.notes}
                </label>
                <textarea
                  rows={3}
                  placeholder={dict.consultation.notesPlaceholder}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#006543]/20 focus:border-[#006543] text-slate-900 transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-[#006543] hover:bg-[#055b38] disabled:bg-slate-400 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? dict.consultation.submitting : dict.consultation.submit}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
