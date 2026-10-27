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
  categories?: number[];
  _embedded?: {
    'wp:featuredmedia'?: WpRawFeaturedMedia[];
    author?: Array<{ name?: string }>;
  };
}

let cachedPosts: NewsPost[] | null = null;

const COMMON_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  Accept: 'application/json',
};

function cleanHtmlText(text?: string): string {
  if (!text) return '';
  return text
    .replace(/<[^>]*>?/gm, '')
    .replace(/&amp;/g, '&')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&#8216;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\[&#8230;\]/g, '...')
    .replace(/\[\.\.\.\]/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatDate(isoString: string): string {
  if (!isoString) return '';
  try {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch {
    return isoString;
  }
}

export async function getPosts(perPage = 10): Promise<NewsPost[]> {
  if (cachedPosts) return cachedPosts.slice(0, perPage);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    // Fetch specifically category 45 ("Truyền thông")
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?categories=45&_embed&per_page=${perPage}`, {
      headers: COMMON_HEADERS,
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedPosts = (data as WpRawPost[]).map((item) => {
          const imageUrl = `/images/posts/post-${item.id}.jpg`;
          let remoteImageUrl = '';
          if (
            item._embedded &&
            item._embedded['wp:featuredmedia'] &&
            item._embedded['wp:featuredmedia'][0]
          ) {
            remoteImageUrl = item._embedded['wp:featuredmedia'][0].source_url || '';
          }

          const author = item._embedded?.author?.[0]?.name || 'Ban Truyền Thông HSI';

          return {
            id: item.id,
            title: cleanHtmlText(item.title?.rendered) || 'Truyền thông HSI Corp',
            slug: item.slug || `post-${item.id}`,
            excerpt: cleanHtmlText(item.excerpt?.rendered) || '',
            content: item.content?.rendered || '',
            date: formatDate(item.date),
            category: 'Truyền thông',
            imageUrl: imageUrl || remoteImageUrl || '/images/products/Surtex-Set.jpg',
            remoteImageUrl,
            author,
          };
        });
        return cachedPosts.slice(0, perPage);
      }
    }
  } catch {
    // Graceful fallback to MOCK_POSTS (which contains all 5 authentic posts)
  }

  return MOCK_POSTS.slice(0, perPage);
}

export async function getPostByIdOrSlug(idOrSlug: string | number): Promise<NewsPost | null> {
  const posts = await getPosts(100);
  const numId = Number(idOrSlug);

  const found = posts.find((p) => (!isNaN(numId) && p.id === numId) || p.slug === idOrSlug);
  if (found) return found;

  const foundMock = MOCK_POSTS.find((p) => (!isNaN(numId) && p.id === numId) || p.slug === idOrSlug);
  return foundMock || null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getPosts(100);
  return posts.map((p) => p.slug);
}

export type { NewsPost };
