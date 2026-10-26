import React from 'react';
import Link from 'next/link';
import { getPaginatedProducts, getProductCategories } from '@/lib/api/products';
import ProductCard from '@/components/product/ProductCard';
import Pagination from '@/components/product/Pagination';
import { Search, Filter, Layers, X, Sparkles, ChevronRight } from 'lucide-react';

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || '';
  const currentSearch = resolvedParams.search || '';
  const currentPage = Math.max(1, parseInt(resolvedParams.page || '1', 10) || 1);

  const [paginatedResult, categories] = await Promise.all([
    getPaginatedProducts({
      category: currentCategory,
      search: currentSearch,
      page: currentPage,
      perPage: 6,
    }),
    getProductCategories(),
  ]);

  const { data: products, total, totalPages } = paginatedResult;
  const activeCategoryObj = categories.find((c) => c.slug === currentCategory);

  const startItem = total > 0 ? (currentPage - 1) * 6 + 1 : 0;
  const endItem = Math.min(currentPage * 6, total);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#006543]">
              Trang chủ
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-slate-900">Thiết bị y tế</span>
            {activeCategoryObj && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#006543] font-bold">{activeCategoryObj.name}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                {activeCategoryObj ? activeCategoryObj.name : 'Danh Mục Thiết Bị Y Tế'}
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                {activeCategoryObj?.description ||
                  'Hệ thống trang thiết bị, máy móc và vật tư y tế kỹ thuật cao phân phối chính hãng bởi HSI Corp.'}
              </p>
            </div>

            {/* Total items badge */}
            <div className="text-xs font-semibold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm shrink-0">
              Hiển thị:{' '}
              <strong className="text-[#006543]">
                {startItem} - {endItem}
              </strong>{' '}
              trên <strong className="text-[#006543]">{total}</strong> thiết bị{' '}
              {totalPages > 1 && (
                <span className="text-slate-400 font-normal ml-1">
                  (Trang {currentPage}/{totalPages})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Search & Active Filters Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search form */}
          <form method="GET" action="/products" className="w-full sm:w-80 relative">
            {currentCategory && <input type="hidden" name="category" value={currentCategory} />}
            <input
              type="text"
              name="search"
              defaultValue={currentSearch}
              placeholder="Tìm theo tên máy, mã SKU..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006543] text-slate-900"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </form>

          {/* Active Filter Tags */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {(currentCategory || currentSearch) && (
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Xóa tất cả bộ lọc
              </Link>
            )}
            {currentSearch && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-[#006543] border border-emerald-200">
                Từ khóa: &ldquo;{currentSearch}&rdquo;
              </span>
            )}
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar: Categories */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#006543]" />
                Phân Loại Thiết Bị
              </h3>

              <div className="space-y-1.5">
                <Link
                  href={currentSearch ? `/products?search=${encodeURIComponent(currentSearch)}` : '/products'}
                  className={`block px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    !currentCategory
                      ? 'bg-[#006543] text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Tất cả phân loại
                </Link>

                {categories.map((cat) => {
                  const isActive = currentCategory === cat.slug;
                  const targetUrl = currentSearch
                    ? `/products?category=${cat.slug}&search=${encodeURIComponent(currentSearch)}`
                    : `/products?category=${cat.slug}`;

                  return (
                    <Link
                      key={cat.id}
                      href={targetUrl}
                      className={`block px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isActive
                          ? 'bg-[#006543] text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quality Standard Notice Card */}
            <div className="bg-gradient-to-br from-[#003825] via-[#004d33] to-slate-900 text-white p-5 rounded-2xl shadow-sm">
              <Sparkles className="w-5 h-5 text-emerald-400 mb-3" />
              <h4 className="font-bold text-sm mb-1.5">Tiêu Chuẩn Thiết Bị</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Tất cả thiết bị đều có hồ sơ pháp lý, giấy phép Bộ Y Tế, chứng nhận ISO 13485 và CO/CQ gốc từ hãng sản xuất.
              </p>
              <div className="text-[11px] text-emerald-300 font-semibold border-t border-white/10 pt-3">
                Hotline Dự Án: 024 6685 0182
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            {products.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))}
                </div>

                {/* Pagination component */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  category={currentCategory}
                  search={currentSearch}
                />
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  Chưa tìm thấy thiết bị phù hợp
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                  Vui lòng thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc danh mục hiện tại.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center px-4 py-2 bg-[#006543] hover:bg-[#055b38] text-white text-xs font-semibold rounded-xl"
                >
                  Xem tất cả thiết bị
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
