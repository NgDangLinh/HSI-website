import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/api/wordpress';
import { Calendar, ChevronRight, ArrowRight, User, Newspaper } from 'lucide-react';

export const metadata = {
  title: 'Truyền Thông & Hoạt Động Y Khoa | HSI Corp',
  description:
    'Cập nhật tin tức truyền thông, các kỳ hội nghị y khoa, chuyển giao thiết bị phòng mổ và công nghệ can thiệp tiêu hóa, tim mạch từ HSI Corp.',
};

export default async function NewsPage() {
  const posts = await getPosts(100);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Truyền thông & Hoạt động chuyên môn</span>
        </nav>

        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#006543] border border-emerald-200 mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Chuyên Mục Truyền Thông HSI</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Truyền Thông & Hoạt Động Chuyên Môn
            </h1>
            <p className="text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
              Các hoạt động chuyển giao kỹ thuật y sinh, tham dự hội nghị khoa học toàn quốc và tin tức hợp tác chuyên sâu từ HSI Corp.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs shrink-0">
            Tổng cộng: <strong className="text-[#006543]">{posts.length}</strong> bài viết truyền thông
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame with Link */}
              <Link
                href={`/news/${post.slug}`}
                className="relative aspect-[16/10] bg-slate-100 overflow-hidden block"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#003825]/90 text-white backdrop-blur-md shadow-xs">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <User className="w-3.5 h-3.5 text-emerald-600" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 group-hover:text-[#006543] transition-colors mb-2.5">
                    <Link href={`/news/${post.slug}`} className="focus:outline-hidden">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006543] group-hover:text-emerald-700 transition-colors"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-slate-400 font-medium">HSI Corp</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
