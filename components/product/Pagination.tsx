import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
  search?: string;
  baseUrl?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  category,
  search,
  baseUrl = '/products',
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const buildUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (search) params.set('search', search);
    if (pageNumber > 1) params.set('page', pageNumber.toString());
    const qs = params.toString();
    return qs ? `${baseUrl}?${qs}` : baseUrl;
  };

  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pages = getPageNumbers();
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Điều hướng phân trang sản phẩm"
      className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-12 pt-8 border-t border-slate-200"
    >
      {/* Nút Trước (Prev) */}
      {hasPrev ? (
        <Link
          href={buildUrl(currentPage - 1)}
          className="inline-flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#006543] hover:border-[#006543]/40 transition-all shadow-xs"
          title="Trang trước"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Trước</span>
        </Link>
      ) : (
        <span
          className="inline-flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed select-none"
          aria-disabled="true"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Trước</span>
        </span>
      )}

      {/* Danh sách các số trang */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pages.map((p, idx) => {
          if (p === '...') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-400 select-none"
              >
                ...
              </span>
            );
          }

          const pageNum = p as number;
          const isActive = pageNum === currentPage;

          return isActive ? (
            <span
              key={pageNum}
              aria-current="page"
              className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-black rounded-xl bg-[#006543] text-white shadow-md shadow-[#006543]/20 select-none ring-2 ring-[#006543]/30"
            >
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={buildUrl(pageNum)}
              className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#006543] hover:border-[#006543]/40 transition-all shadow-xs"
              title={`Chuyển đến trang ${pageNum}`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Nút Sau (Next) */}
      {hasNext ? (
        <Link
          href={buildUrl(currentPage + 1)}
          className="inline-flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-[#006543] hover:border-[#006543]/40 transition-all shadow-xs"
          title="Trang sau"
        >
          <span className="hidden sm:inline">Sau</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <span
          className="inline-flex items-center gap-1 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed select-none"
          aria-disabled="true"
        >
          <span className="hidden sm:inline">Sau</span>
          <ChevronRight className="w-4 h-4" />
        </span>
      )}
    </nav>
  );
}

