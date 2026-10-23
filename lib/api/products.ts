import { MedicalProduct, ProductCategory, ProductAttribute, ProductImage } from '../types/product';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../data/mockProducts';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://hsicorp.com.vn';
const CONSUMER_KEY = process.env.WC_CONSUMER_KEY || '';
const CONSUMER_SECRET = process.env.WC_CONSUMER_SECRET || '';

interface WooRawImage {
  id?: number;
  src?: string;
  alt?: string;
}

interface WooRawCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
  description?: string;
}

interface WooRawAttribute {
  id?: number;
  name: string;
  options?: string[];
}

interface WooRawProduct {
  id: number;
  name: string;
  slug?: string;
  sku?: string;
  short_description?: string;
  description?: string;
  images?: WooRawImage[];
  categories?: WooRawCategory[];
  attributes?: WooRawAttribute[];
  featured?: boolean;
}

// In-memory cache for fast dev & SSR performance
let cachedProducts: MedicalProduct[] | null = null;
let cachedCategories: ProductCategory[] | null = null;

function getAuthHeader(): string {
  if (!CONSUMER_KEY || !CONSUMER_SECRET) return '';
  return `Basic ${Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64')}`;
}

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
    .replace(/\s+/g, ' ')
    .trim();
}

function extractAttributesFromText(rawText: string): {
  extraAttributes: ProductAttribute[];
  cleanSummary: string;
  manufacturer?: string;
  origin?: string;
} {
  const text = cleanHtmlText(rawText);
  const extraAttributes: ProductAttribute[] = [];
  let manufacturer: string | undefined;
  let origin: string | undefined;

  const patterns = [
    { key: 'Đơn giá tham khảo', regex: /Đơn giá[:\s]+(.*?)(?=\s*(?:Làn da phù hợp|Hãng sản xuất|Xuất xứ|Thành phần)|$)/i },
    { key: 'Làn da phù hợp', regex: /Làn da phù hợp[:\s]+(.*?)(?=\s*(?:Hãng sản xuất|Xuất xứ|Thành phần|Hướng dẫn)|$)/i },
    { key: 'Hãng sản xuất', regex: /Hãng sản xuất[:\s]+(.*?)(?=\s*(?:Xuất xứ|Thành phần|Hướng dẫn|Quy cách)|$)/i },
    { key: 'Xuất xứ', regex: /Xuất xứ[:\s]+(.*?)(?=\s*(?:Thành phần|Hướng dẫn|Quy cách)|$)/i },
    { key: 'Thành phần chính', regex: /Thành phần(?: chính)?[:\s]+(.*?)(?=\s*(?:Hướng dẫn sử dụng|Quy cách)|$)/i },
    { key: 'Hướng dẫn sử dụng', regex: /Hướng dẫn sử dụng[:\s]+(.*?)(?=$)/i },
  ];

  let hasExtracted = false;
  for (const item of patterns) {
    const match = text.match(item.regex);
    if (match && match[1]?.trim()) {
      const val = match[1].trim();
      extraAttributes.push({ name: item.key, options: [val] });
      hasExtracted = true;
      if (item.key === 'Hãng sản xuất') manufacturer = val;
      if (item.key === 'Xuất xứ') origin = val;
    }
  }

  let cleanSummary = text;
  if (hasExtracted) {
    const ingredientMatch = text.match(/Thành phần(?: chính)?[:\s]+(.*?)(?=\s*Hướng dẫn sử dụng|$)/i);
    if (ingredientMatch && ingredientMatch[1]?.trim()) {
      cleanSummary = `Sản phẩm chính hãng được cung ứng bởi HSI Corp. Thành phần nổi bật: ${ingredientMatch[1].trim().slice(0, 160)}...`;
    } else {
      cleanSummary = 'Sản phẩm y dược & thiết bị công nghệ cao được phân phối chính hãng bởi HSI Corp.';
    }
  }

  return { extraAttributes, cleanSummary, manufacturer, origin };
}

function mapWooProductToMedicalProduct(item: WooRawProduct): MedicalProduct {
  // Trích xuất ảnh
  const images: ProductImage[] =
    Array.isArray(item.images) && item.images.length > 0
      ? item.images.map((img, idx) => ({
          id: img.id || idx,
          src: img.src || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
          alt: img.alt || item.name || 'Thiết bị y tế',
        }))
      : [
          {
            id: 0,
            src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
            alt: item.name,
          },
        ];

  // Trích xuất danh mục
  const categories: ProductCategory[] = Array.isArray(item.categories)
    ? item.categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: c.count,
        description: c.description,
      }))
    : [];

  // Trích xuất thông số kỹ thuật (Attributes)
  const attributes: ProductAttribute[] = Array.isArray(item.attributes)
    ? item.attributes.map((attr) => ({
        id: attr.id,
        name: attr.name,
        options: attr.options || [],
      }))
    : [];

  // Tự động phân tích từ chuỗi mô tả ngắn
  const extracted = extractAttributesFromText(item.short_description || '');

  // Thêm các thuộc tính vừa bóc tách nếu chưa có trong mảng attributes
  for (const extra of extracted.extraAttributes) {
    if (!attributes.some((a) => a.name.toLowerCase() === extra.name.toLowerCase())) {
      attributes.push(extra);
    }
  }

  const originAttr = attributes.find(
    (a) =>
      a.name.toLowerCase().includes('xuất xứ') ||
      a.name.toLowerCase().includes('origin')
  );
  const origin = extracted.origin || (originAttr ? originAttr.options.join(', ') : 'Đức / Châu Âu');
  const manufacturer = extracted.manufacturer || 'Chính hãng HSI Phân phối';

  return {
    id: item.id,
    name: cleanHtmlText(item.name),
    slug: item.slug || `product-${item.id}`,
    sku: item.sku || `HSI-SP-${item.id}`,
    short_description: extracted.cleanSummary || cleanHtmlText(item.short_description),
    description:
      item.description ||
      '<p>Thông tin chi tiết thiết bị đang được cập nhật từ hệ thống chuyên môn HSI Corp.</p>',
    images,
    categories,
    attributes,
    manufacturer,
    origin,
    warranty: '12 - 24 tháng',
    featured: item.featured || false,
  };
}

export async function getProducts(options?: {
  category?: string;
  search?: string;
  perPage?: number;
  page?: number;
}): Promise<MedicalProduct[]> {
  const { category, search, perPage = 12, page = 1 } = options || {};

  // If already fetched and cached products, use cache
  if (cachedProducts && !search && !category) {
    return cachedProducts.slice(0, perPage);
  }

  try {
    const auth = getAuthHeader();
    if (!auth) {
      return filterMockProducts(category, search);
    }

    const params = new URLSearchParams();
    params.set('per_page', perPage.toString());
    params.set('page', page.toString());
    if (category) params.set('category', category);
    if (search) params.set('search', search);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${WP_URL}/wp-json/wc/v3/products?${params.toString()}`, {
      headers: {
        Authorization: auth,
        ...COMMON_HEADERS,
      },
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return filterMockProducts(category, search);
    }

    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const mapped = (data as WooRawProduct[]).map(mapWooProductToMedicalProduct);
      if (!category && !search) cachedProducts = mapped;
      return mapped;
    }

    return filterMockProducts(category, search);
  } catch {
    return filterMockProducts(category, search);
  }
}

export async function getProductById(id: number | string): Promise<MedicalProduct | null> {
  const numId = Number(id);

  // Check cache first
  if (cachedProducts) {
    const cachedItem = cachedProducts.find((p) => p.id === numId || p.slug === id);
    if (cachedItem) return cachedItem;
  }

  try {
    const auth = getAuthHeader();
    if (auth && !isNaN(numId)) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${WP_URL}/wp-json/wc/v3/products/${numId}`, {
        headers: {
          Authorization: auth,
          ...COMMON_HEADERS,
        },
        signal: controller.signal,
        next: { revalidate: 300 },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const item: WooRawProduct = await res.json();
        return mapWooProductToMedicalProduct(item);
      }
    }
  } catch {
    // Graceful fallback
  }

  const found = MOCK_PRODUCTS.find((p) => p.id === numId || p.slug === id);
  return found || MOCK_PRODUCTS[0];
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  if (cachedCategories) return cachedCategories;

  try {
    const auth = getAuthHeader();
    if (auth) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${WP_URL}/wp-json/wc/v3/products/categories?per_page=20`, {
        headers: {
          Authorization: auth,
          ...COMMON_HEADERS,
        },
        signal: controller.signal,
        next: { revalidate: 300 },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          cachedCategories = (data as WooRawCategory[]).map((c) => ({
            id: c.id,
            name: c.name,
            slug: c.slug,
            count: c.count,
            description: c.description,
          }));
          return cachedCategories;
        }
      }
    }
  } catch {
    // Graceful fallback
  }

  return MOCK_CATEGORIES;
}

function filterMockProducts(category?: string, search?: string): MedicalProduct[] {
  let list = [...MOCK_PRODUCTS];

  if (category) {
    list = list.filter((p) =>
      p.categories.some((c) => c.slug === category || c.id.toString() === category)
    );
  }

  if (search) {
    const term = search.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term) ||
        p.short_description.toLowerCase().includes(term)
    );
  }

  return list;
}
