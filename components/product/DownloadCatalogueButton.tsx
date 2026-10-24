'use client';

import React from 'react';
import { FileDown } from 'lucide-react';
import { useConsultation } from '@/components/common/ConsultationProvider';

interface DownloadCatalogueButtonProps {
  productName: string;
  sku: string;
}

export default function DownloadCatalogueButton({
  productName,
  sku,
}: DownloadCatalogueButtonProps) {
  const { openConsultation } = useConsultation();

  return (
    <button
      onClick={() => openConsultation(`[Yêu Cầu Catalogue] ${productName}`, sku)}
      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
    >
      <FileDown className="w-3.5 h-3.5 text-emerald-400" />
      <span>Tải Brochure / Catalogue</span>
    </button>
  );
}

