import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/api/wordpress';
import { Calendar, ChevronRight, ArrowRight, User } from 'lucide-react';

export const metadata = {
  title: 'Tin Tức & Chuyển Giao Công Nghệ Y Sinh | HSI Corp',
  description:
    'Cập nhật tin tức chuyển giao thiết bị, hội thảo y khoa và kỹ thuật mới trong ngành thiết bị y tế.',
};

export default async function NewsPage() {
  const posts = await getPosts(12);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-900">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900">Tin tức & Chuyển giao công nghệ</span>
        </nav>

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Tin Tức & Hoạt Động Chuyên Môn
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Các hoạt động chuyển giao kỹ thuật y sinh, bàn giao thiết bị phòng mổ và tin tức chuyên ngành từ HSI Corp.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div
                className="relative aspect-[16/9] bg-slate-100"
                style={{ position: 'relative' }}
              >
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-950/80 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-cyan-600" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 hover:text-blue-900 transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-cyan-600 transition-colors">
                    Chi tiết bài viết <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

