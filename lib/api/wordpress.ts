import { MOCK_POSTS, NewsPost } from '../data/mockPosts';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://hsicorp.com.vn';

interface WpRawFeaturedMedia {
  source_url?: string;
}

interface WpRawPost {
  id: number;
  title?: { rendered?: string };
  slug?: string;
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: WpRawFeaturedMedia[];
  };
}

let cachedPosts: NewsPost[] | null = null;

const COMMON_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  Accept: 'application/json',
};

export async function getPosts(perPage = 6): Promise<NewsPost[]> {
  if (cachedPosts) return cachedPosts.slice(0, perPage);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${perPage}`, {
      headers: COMMON_HEADERS,
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedPosts = (data as WpRawPost[]).map((item) => {
          let imageUrl = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80';
          if (
            item._embedded &&
            item._embedded['wp:featuredmedia'] &&
            item._embedded['wp:featuredmedia'][0]
          ) {
            imageUrl = item._embedded['wp:featuredmedia'][0].source_url || imageUrl;
          }

          return {
            id: item.id,
            title: item.title?.rendered || 'Tin tức HSI Corp',
            slug: item.slug || `post-${item.id}`,
            excerpt: item.excerpt?.rendered?.replace(/<[^>]*>?/gm, '').trim() || '',
            content: item.content?.rendered || '',
            date: new Date(item.date).toLocaleDateString('vi-VN'),
            category: 'Tin tức & Hoạt động',
            imageUrl,
            author: 'HSI Corp',
          };
        });
        return cachedPosts;
      }
    }
  } catch {
    // Graceful fallback
  }

  return MOCK_POSTS;
}

export async function getPostByIdOrSlug(idOrSlug: string | number): Promise<NewsPost | null> {
  const posts = await getPosts(10);
  const found = posts.find((p) => p.id === Number(idOrSlug) || p.slug === idOrSlug);
  return found || MOCK_POSTS[0];
}
