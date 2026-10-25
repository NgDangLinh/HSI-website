'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MedicalProduct } from '@/lib/types/product';
import { useConsultation } from '@/components/common/ConsultationProvider';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { FileText, ShieldCheck, Cpu } from 'lucide-react';

interface ProductCardProps {
  product: MedicalProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openConsultation } = useConsultation();
  const { language } = useLanguage();
  const imageSrc = product.images?.[0]?.src || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80';
  const categoryName = product.categories?.[0]?.name || (language === 'en' ? 'Medical Equipment' : 'Thiết bị y tế');

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image & Badges */}
      <div
        className="relative aspect-square bg-slate-50/60 p-4 overflow-hidden rounded-t-2xl flex items-center justify-center"
        style={{ position: 'relative' }}
      >
        <Link href={`/products/${product.id}`} className="block w-full h-full relative">
          <Image
            src={imageSrc}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            className="p-3 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#006543]/90 backdrop-blur-md text-white shadow-sm">
            {categoryName}
          </span>
        </div>

        {/* Quality Standard Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-sm">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            {language === 'en' ? 'Genuine' : 'Chính hãng'}
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* SKU & Origin */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
              {product.sku}
            </span>
            {product.origin && (
              <span className="text-slate-500 font-medium">{product.origin}</span>
            )}
          </div>

          {/* Product Title */}
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-[#006543] transition-colors mb-2">
              {product.name}
            </h3>
          </Link>

          {/* Short specs / description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {product.short_description}
          </p>
        </div>

        {/* Action Buttons (Showcase & Inquiry) */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 mt-auto">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-slate-500" />
            {language === 'en' ? 'Specs' : 'Thông số'}
          </Link>

          <button
            onClick={() => openConsultation(product.name, product.sku)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-[#006543] hover:bg-[#055b38] rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            {language === 'en' ? 'Inquire' : 'Nhận tư vấn'}
          </button>
        </div>
      </div>
    </div>
  );
}
