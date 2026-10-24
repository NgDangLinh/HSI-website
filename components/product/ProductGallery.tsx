'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/lib/types/product';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const mainImage = images[activeImageIndex] || images[0] || {
    id: 0,
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    alt: productName,
  };

  return (
    <div className="space-y-4">
      {/* Main Image View - Frame cao chuyên dụng để hiển thị trọn vẹn cả chai lọ đứng & thiết bị ngang */}
      <div
        className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex items-center justify-center p-6 sm:p-10"
        style={{ position: 'relative' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={mainImage.src}
            alt={mainImage.alt || productName}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'contain' }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Thumbnails (if multiple images) */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={img.id || index}
              onClick={() => setActiveImageIndex(index)}
              style={{ position: 'relative' }}
              className={`relative w-20 h-20 bg-white rounded-xl overflow-hidden border-2 shrink-0 transition-all p-1.5 ${
                activeImageIndex === index
                  ? 'border-[#006543] shadow-md ring-2 ring-[#006543]/20'
                  : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img.src}
                  alt={img.alt || `${productName} ${index + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
