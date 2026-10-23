'use client';

import React from 'react';
import { useConsultation } from './ConsultationProvider';
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
  label = 'Yêu Cầu Báo Giá & Tư Vấn',
  variant = 'primary',
  className = '',
  icon = 'send',
}: ConsultationButtonProps) {
  const { openConsultation } = useConsultation();

  let baseStyle = 'inline-flex items-center justify-center gap-2 font-bold transition-all rounded-xl';
  if (variant === 'primary') {
    baseStyle += ' bg-gradient-to-r from-blue-900 to-cyan-700 hover:from-blue-800 hover:to-cyan-600 text-white shadow-md hover:shadow-lg';
  } else if (variant === 'white') {
    baseStyle += ' bg-white hover:bg-slate-100 text-blue-950 shadow-md';
  } else {
    baseStyle += ' border border-blue-900 text-blue-900 hover:bg-blue-50';
  }

  return (
    <button
      onClick={() => openConsultation(productName, sku)}
      className={`${baseStyle} ${className}`}
    >
      {icon === 'send' && <Send className="w-4 h-4" />}
      {icon === 'file' && <FileText className="w-4 h-4" />}
      {icon === 'phone' && <Phone className="w-4 h-4" />}
      <span>{label}</span>
    </button>
  );
}

