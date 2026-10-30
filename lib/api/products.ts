import { MedicalProduct, ProductCategory, ProductAttribute, ProductImage } from '../types/product';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../data/mockProducts';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://hsicorp.com.vn';

interface WooStoreRawImage {
  id?: number;
  src?: string;
  alt?: string;
  name?: string;
}

interface WooStoreRawCategory {
  id: number;
  name: string;
  slug: string;
  count?: number;
  description?: string;
  parent?: number;
}

interface WooStoreRawAttribute {
  id?: number;
  name: string;
  options?: string[];
}

interface WooStoreRawProduct {
  id: number;
  name: string;
  slug?: string;
  sku?: string;
  short_description?: string;
  description?: string;
  images?: WooStoreRawImage[];
  categories?: WooStoreRawCategory[];
  attributes?: WooStoreRawAttribute[];
  featured?: boolean;
}

// In-memory cache for fast dev & SSR performance
let cachedProducts: MedicalProduct[] | null = null;
let cachedCategories: ProductCategory[] | null = null;

const COMMON_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  Accept: 'application/json',
};

// Known local images downloaded in /public/images/products/
const KNOWN_LOCAL_IMAGES = new Set([
  'Surtex-Set.jpg',
  'Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-4.png',
  'Tach-Nen-Time-Reverse-Concentrate-Essence-130ml-1.png',
  'Tach-Nen-Vita.CEB12-Cream-50ml-1-scaled.png',
  'Tach-Nen-Vita.CEB12-Effector-50ml-1-scaled.png',
  'Tach-Nen-Purifying-Cleansing-Gel-200ml.png',
  'Tach-Nen-Intensive-Cream-100ml.png',
  'Tach-Nen-Intensive-Lotion-200ml.png',
  'Tach-Nen-Cica-Soothing-Ampoule-100ml-scaled.png',
  'Tach-Nen-Biome-Serum-50ml-scaled.png',
  'Tach-Nen-Toning-Peel-Set-5-Week-2-scaled.png',
  'Tach-Nen-Biome-Gel-Cleanser-210ml-1.png',
  'Tach-Nen-Rejuve-Sunscreen-100-50ml-1.png',
  'Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-5.png',
  'Tach-nen-Low-Mask-27g-scaled.png',
  'stents-drug-eluting.webp',
  'csm_nit-occlud-le-vsd_39de571f74.jpg',
  '5500-1-scaled.jpg',
  '8020-1.png',
  'Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-1.png',
  '16848056156926ioac9.jpeg',
  'Group-1597883390.png',
]);

/**
 * Smart image resolver:
 * - If image was downloaded locally in /images/products/, use local for 0ms load
 * - If image is new from WordPress, use the live remote URL
 */
export function resolveProductImage(remoteUrl?: string): string {
  if (!remoteUrl) return '/images/products/Surtex-Set.jpg';
  try {
    const filename = decodeURIComponent(new URL(remoteUrl).pathname.split('/').pop() || '');
    if (KNOWN_LOCAL_IMAGES.has(filename)) {
      return `/images/products/${filename}`;
    }
  } catch {
    // Keep remote url
  }
  return remoteUrl;
}

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

function extractAttributesFromText(rawText: string, fullDesc?: string): {
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
    { key: 'Đơn giá tham khảo', regex: /Đơn giá[:\s]+(.*?)(?=\s*(?:Làn da phù hợp|Hãng sản xuất|Xuất xứ|Thành phần|Model)|$)/i },
    { key: 'Làn da phù hợp', regex: /Làn da phù hợp[:\s]+(.*?)(?=\s*(?:Hãng sản xuất|Xuất xứ|Thành phần|Hướng dẫn)|$)/i },
    { key: 'Hãng sản xuất', regex: /Hãng sản xuất[:\s]+(.*?)(?=\s*(?:Xuất xứ|Thành phần|Hướng dẫn|Quy cách)|$)/i },
    { key: 'Xuất xứ', regex: /Xuất xứ[:\s]+(.*?)(?=\s*(?:Thành phần|Hướng dẫn|Quy cách)|$)/i },
    { key: 'Thành phần chính', regex: /Thành phần(?: chính)?[:\s]+(.*?)(?=\s*(?:Hướng dẫn sử dụng|Quy cách)|$)/i },
    { key: 'Hướng dẫn sử dụng', regex: /Hướng dẫn sử dụng[:\s]+(.*?)(?=$)/i },
    { key: 'Quy cách', regex: /Quy cách[:\s]+(.*?)(?=\s*(?:Hãng sản xuất|Xuất xứ)|$)/i },
  ];

  for (const item of patterns) {
    const match = text.match(item.regex);
    if (match && match[1]?.trim()) {
      const val = match[1].trim();
      extraAttributes.push({ name: item.key, options: [val] });
      if (item.key === 'Hãng sản xuất') manufacturer = val;
      if (item.key === 'Xuất xứ') origin = val;
    }
  }

  let cleanSummary = text;
  if (!cleanSummary || cleanSummary.includes('Đơn giá: Liên hệ')) {
    const fullClean = cleanHtmlText(fullDesc || '');
    if (fullClean) {
      cleanSummary = fullClean.slice(0, 160) + '...';
    } else {
      cleanSummary = 'Sản phẩm y tế & dược phẩm kỹ thuật cao được phân phối chính hãng bởi HSI Corp.';
    }
  } else if (cleanSummary.includes('Thành phần:')) {
    const ingredientMatch = cleanSummary.match(/Thành phần(?: chính)?[:\s]+(.*?)(?=\s*Hướng dẫn sử dụng|$)/i);
    if (ingredientMatch && ingredientMatch[1]?.trim()) {
      cleanSummary = `Thành phần chính: ${ingredientMatch[1].trim().slice(0, 150)}...`;
    }
  }

  return { extraAttributes, cleanSummary, manufacturer, origin };
}

function mapWooStoreProductToMedicalProduct(item: WooStoreRawProduct): MedicalProduct {
  // Trích xuất ảnh kèm Smart Resolver
  const images: ProductImage[] =
    Array.isArray(item.images) && item.images.length > 0
      ? item.images.map((img, idx) => ({
          id: img.id || idx,
          src: resolveProductImage(img.src),
          alt: img.alt || img.name || item.name || 'Thiết bị y tế',
        }))
      : [
          {
            id: 0,
            src: '/images/products/Surtex-Set.jpg',
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
  const extracted = extractAttributesFromText(item.short_description || '', item.description);

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
  const origin = extracted.origin || (originAttr ? originAttr.options.join(', ') : 'Chính hãng');
  const manufacturer = extracted.manufacturer || 'HSI Corp Phân Phối';

  let sku = item.sku;
  if (!sku || sku.trim() === '') {
    if (item.name.includes('EPK-i8020c')) sku = 'EPK-i8020c';
    else if (item.name.includes('EPK-i5500c')) sku = 'EPK-i5500c';
    else if (item.name.includes('Vivo Isar')) sku = 'VIVO-ISAR';
    else if (item.name.includes('Nit-Occlud')) sku = 'NIT-OCCLUD';
    else sku = `HSI-${item.id}`;
  }

  return {
    id: item.id,
    name: cleanHtmlText(item.name),
    slug: item.slug || `product-${item.id}`,
    sku: sku,
    short_description: extracted.cleanSummary || cleanHtmlText(item.short_description),
    description:
      item.description ||
      '<p>Thông tin chi tiết sản phẩm đang được cập nhật từ hệ thống chuyên môn HSI Corp.</p>',
    images,
    categories,
    attributes,
    manufacturer,
    origin,
    warranty: '12 - 24 tháng',
    featured: item.featured || false,
  };
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
}

export async function getPaginatedProducts(options?: {
  category?: string;
  search?: string;
  brand?: string;
  page?: number;
  perPage?: number;
}): Promise<PaginatedResult<MedicalProduct>> {
  const { category, search, brand, page = 1, perPage = 6 } = options || {};

  let allProducts: MedicalProduct[] = [];
  if (cachedProducts) {
    allProducts = cachedProducts;
  } else {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${WP_URL}/wp-json/wc/store/v1/products?per_page=100`, {
        headers: COMMON_HEADERS,
        signal: controller.signal,
        next: { revalidate: 60 },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const mapped = (data as WooStoreRawProduct[]).map(mapWooStoreProductToMedicalProduct);
          cachedProducts = mapped;
          allProducts = mapped;
        }
      }
    } catch {
      // Fallback
    }

    if (allProducts.length === 0) {
      allProducts = MOCK_PRODUCTS;
    }
  }

  const filtered = filterProductsList(allProducts, category, search, brand);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const validPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (validPage - 1) * perPage;
  const data = filtered.slice(startIndex, startIndex + perPage);

  return {
    data,
    total,
    totalPages,
    currentPage: validPage,
    perPage,
  };
}

export async function getProducts(options?: {
  category?: string;
  search?: string;
  brand?: string;
  perPage?: number;
  page?: number;
}): Promise<MedicalProduct[]> {
  const { category, search, brand, perPage = 24, page = 1 } = options || {};
  const startIndex = (page - 1) * perPage;

  // If already fetched and cached products, use cache
  if (cachedProducts && !search && !category && !brand) {
    return cachedProducts.slice(startIndex, startIndex + perPage);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${WP_URL}/wp-json/wc/store/v1/products?per_page=100`, {
      headers: COMMON_HEADERS,
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        const mapped = (data as WooStoreRawProduct[]).map(mapWooStoreProductToMedicalProduct);
        cachedProducts = mapped;
        return filterProductsList(mapped, category, search, brand).slice(startIndex, startIndex + perPage);
      }
    }
  } catch {
    // Graceful fallback to static data
  }

  return filterProductsList(MOCK_PRODUCTS, category, search, brand).slice(startIndex, startIndex + perPage);
}

export async function getProductById(id: number | string): Promise<MedicalProduct | null> {
  const numId = Number(id);

  // Check in-memory cache first
  if (cachedProducts) {
    const cachedItem = cachedProducts.find((p) => p.id === numId || p.slug === id);
    if (cachedItem) return cachedItem;
  }

  try {
    if (!isNaN(numId)) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const res = await fetch(`${WP_URL}/wp-json/wc/store/v1/products/${numId}`, {
        headers: COMMON_HEADERS,
        signal: controller.signal,
        next: { revalidate: 60 },
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const item: WooStoreRawProduct = await res.json();
        return mapWooStoreProductToMedicalProduct(item);
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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch(`${WP_URL}/wp-json/wc/store/v1/products/categories?per_page=100`, {
      headers: COMMON_HEADERS,
      signal: controller.signal,
      next: { revalidate: 300 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        cachedCategories = (data as WooStoreRawCategory[])
          .filter((c) => c.count && c.count > 0)
          .map((c) => ({
            id: c.id,
            name: c.name,
            slug: c.slug,
            count: c.count,
            description: c.description || `Sản phẩm và thiết bị chuyên khoa thuộc danh mục ${c.name}.`,
          }));
        return cachedCategories;
      }
    }
  } catch {
    // Graceful fallback
  }

  return MOCK_CATEGORIES;
}

function extractBrandKeywords(brand: string): string[] {
  const b = brand.toLowerCase();
  if (b.includes('surtex')) return ['surtex'];
  if (b.includes('pentax')) return ['pentax', 'epk-i8020c', 'epk-i5500c', 'imagina'];
  if (b.includes('roche')) return ['roche'];
  if (b.includes('sonoscape')) return ['sonoscape'];
  if (b.includes('pfm')) return ['pfm', 'nit-occlud'];
  if (b.includes('translumina')) return ['translumina', 'vivo isar'];
  if (b.includes('cell fusion')) return ['cell fusion', 'cica', 'biome', 'toning peel'];
  if (b.includes('fenghua')) return ['fenghua'];
  if (b.includes('apt') || b.includes('tipmed')) return ['apt', 'tipmed'];
  if (b.includes('hexacath')) return ['hexacath'];
  if (b.includes('anrei')) return ['anrei'];

  const words = brand.split(/[\s,./-]+/).filter((w) => w.length > 2);
  return words.length > 0 ? words.map((w) => w.toLowerCase()) : [b];
}

function filterProductsList(
  products: MedicalProduct[],
  category?: string,
  search?: string,
  brand?: string
): MedicalProduct[] {
  let list = [...products];

  if (category) {
    const catLower = category.toLowerCase();
    list = list.filter((p) =>
      p.categories.some((c) => {
        const slug = c.slug.toLowerCase();
        // Match exact slug or related sub-category
        if (slug === catLower) return true;
        if (catLower === 'noi-soi-can-thiep-tieu-hoa' && slug === 'dung-cu-can-thiep-ercp') return true;
        if (catLower === 'dung-cu-phau-thuat-surtex' && slug === 'surtex_general-vn') return true;
        return false;
      })
    );
  }

  if (brand) {
    const keywords = extractBrandKeywords(brand);
    list = list.filter((p) => {
      const pMfg = (p.manufacturer || '').toLowerCase();
      const pName = p.name.toLowerCase();
      const pSku = p.sku.toLowerCase();
      const pShortDesc = (p.short_description || '').toLowerCase();
      const pDesc = (p.description || '').toLowerCase();

      return keywords.some(
        (kw) =>
          pMfg.includes(kw) ||
          pName.includes(kw) ||
          pSku.includes(kw) ||
          pShortDesc.includes(kw) ||
          pDesc.includes(kw) ||
          p.categories.some((c) => c.name.toLowerCase().includes(kw) || c.slug.toLowerCase().includes(kw))
      );
    });
  }

  if (search) {
    const term = search.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.sku.toLowerCase().includes(term) ||
        p.short_description.toLowerCase().includes(term) ||
        p.categories.some((c) => c.name.toLowerCase().includes(term))
    );
  }

  return list;
}
