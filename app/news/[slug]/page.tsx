import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPosts, getPostByIdOrSlug, getAllPostSlugs } from '@/lib/api/wordpress';
import { Calendar, ChevronRight, User, ArrowLeft, Phone, Mail, MapPin, Tag } from 'lucide-react';
import ConsultationButton from '@/components/common/ConsultationButton';

interface PostDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostDetailPageProps) {
  const resolvedParams = await params;
  const post = await getPostByIdOrSlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết | HSI Corp',
    };
  }

  return {
    title: `${post.title} | Truyền Thông HSI Corp`,
    description: post.excerpt || 'Tin tức chuyển giao kỹ thuật y sinh và hoạt động chuyên môn từ HSI Corp.',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.imageUrl],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const resolvedParams = await params;
  const post = await getPostByIdOrSlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get other posts for related sidebar
  const allPosts = await getPosts(10);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#006543] transition-colors">
            Trang chủ
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/news" className="hover:text-[#006543] transition-colors">
            Truyền thông
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-900 truncate max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#006543] hover:text-emerald-700 transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại tất cả bài viết</span>
          </Link>
        </div>

        {/* Layout: Main Article (col-span-8) + Sidebar (col-span-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#006543] border border-emerald-200">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4 text-emerald-600" />
                {post.author}
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Post Excerpt */}
            {post.excerpt && (
              <div className="bg-slate-50 border-l-4 border-[#006543] p-4 rounded-r-2xl mb-8 text-sm text-slate-700 italic leading-relaxed">
                {post.excerpt}
              </div>
            )}

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 shadow-sm bg-slate-100">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Article Body Content */}
            <div
              className="prose prose-slate max-w-none text-slate-700 leading-relaxed
                [&_p]:mb-5 [&_p]:text-sm sm:[&_p]:text-base [&_p]:leading-relaxed
                [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-b [&_h2]:border-slate-100 [&_h2]:pb-2
                [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mt-6 [&_h3]:mb-3
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:text-sm sm:[&_li]:text-base [&_li]:text-slate-700
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2
                [&_img]:rounded-2xl [&_img]:my-6 [&_img]:mx-auto [&_img]:max-w-full [&_img]:h-auto [&_img]:shadow-md
                [&_a]:text-[#006543] [&_a]:underline [&_a]:font-semibold hover:[&_a]:text-emerald-700
                [&_strong]:font-bold [&_strong]:text-slate-900
                [&_blockquote]:border-l-4 [&_blockquote]:border-[#006543] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Bottom Actions & Tags */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#006543]" />
                <span className="text-xs font-semibold text-slate-700">Chủ đề:</span>
                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-lg font-medium">
                  Hội nghị y khoa
                </span>
                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-lg font-medium">
                  Chuyển giao công nghệ
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Nguồn: Ban Truyền Thông HSI Corp</span>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Project Consultation CTA */}
            <div className="bg-gradient-to-br from-[#003825] via-[#004d33] to-slate-900 text-white p-6 sm:p-7 rounded-3xl shadow-sm">
              <h3 className="font-bold text-lg mb-2">Hợp Tác Dự Án Y Tế</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                HSI Corp chuyên cung cấp giải pháp chuyển giao kỹ thuật, lắp đặt thiết bị phòng mổ và hợp tác xã hội hóa y tế cho các bệnh viện trên toàn quốc.
              </p>

              <div className="space-y-3 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hotline Dự Án: <strong>024 6685 0182</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email: <strong>info.hsi@hsicorp.com.vn</strong></span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hà Nội • TP. Hồ Chí Minh • Đà Nẵng • Cần Thơ</span>
                </div>
              </div>

              <ConsultationButton
                productName={post.title}
                label="Đăng Ký Tư Vấn Chuyển Giao"
                variant="white"
                className="w-full py-3 text-xs"
              />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Bài Viết Truyền Thông Khác</span>
                  <Link href="/news" className="text-xs text-[#006543] font-semibold hover:underline">
                    Xem tất cả
                  </Link>
                </h3>

                <div className="space-y-5">
                  {relatedPosts.map((item) => (
                    <article key={item.id} className="group flex items-start gap-3.5">
                      <Link
                        href={`/news/${item.slug}`}
                        className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100"
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-1">
                          <Calendar className="w-3 h-3 text-emerald-600" />
                          <span>{item.date}</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-[#006543] transition-colors leading-snug">
                          <Link href={`/news/${item.slug}`}>
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}

