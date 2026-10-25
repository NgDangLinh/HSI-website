'use client';

import React from 'react';
import { useConsultation } from './ConsultationProvider';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { Send, FileText, Phone } from 'lucide-react';

interface ConsultationButtonProps {
  productName?: string;
  sku?: string;
  label?: string;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  icon?: 'send' | 'file' | 'phone';
}

export default function ConsultationButton({
  productName,
  sku,
  label,
  variant = 'primary',
  className = '',
  icon = 'send',
}: ConsultationButtonProps) {
  const { openConsultation } = useConsultation();
  const { dict } = useLanguage();

  const displayLabel = label || dict.consultation.buttonDefault;

  let baseStyle = 'inline-flex items-center justify-center gap-2 font-bold transition-all rounded-xl cursor-pointer';
  if (variant === 'primary') {
    baseStyle += ' bg-[#006543] hover:bg-[#055b38] text-white shadow-md hover:shadow-lg';
  } else if (variant === 'white') {
    baseStyle += ' bg-white hover:bg-slate-100 text-[#006543] shadow-md';
  } else {
    baseStyle += ' border border-[#006543] text-[#006543] hover:bg-emerald-50';
  }

  return (
    <button
      onClick={() => openConsultation(productName, sku)}
      className={`${baseStyle} ${className}`}
    >
      {icon === 'send' && <Send className="w-4 h-4" />}
      {icon === 'file' && <FileText className="w-4 h-4" />}
      {icon === 'phone' && <Phone className="w-4 h-4" />}
      <span>{displayLabel}</span>
    </button>
  );
}
