import fs from 'fs';
import path from 'path';
import https from 'https';

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://hsicorp.com.vn';
const TARGET_IMG_DIR = path.resolve('public/images/products');

if (!fs.existsSync(TARGET_IMG_DIR)) {
  fs.mkdirSync(TARGET_IMG_DIR, { recursive: true });
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept: 'application/json',
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchJson(res.headers.location).then(resolve).catch(reject);
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Failed to parse JSON from ${url}: ${e.message}`));
          }
        });
      }
    ).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

function cleanHtmlText(text) {
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

function extractAttributes(shortDesc, fullDesc) {
  const text = cleanHtmlText(shortDesc || '');
  const attributes = [];
  let manufacturer = 'HSI Corp Phân Phối';
  let origin = 'Chính hãng';
  let warranty = '12 - 24 tháng';

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
      attributes.push({ name: item.key, options: [val] });
      if (item.key === 'Hãng sản xuất') manufacturer = val;
      if (item.key === 'Xuất xứ') origin = val;
    }
  }

  return { attributes, manufacturer, origin, warranty };
}

async function run() {
  console.log('🔄 Đang kết nối tới WordPress HSI Corp...');

  const [rawProducts, rawCategories] = await Promise.all([
    fetchJson(`${WP_URL}/wp-json/wc/store/v1/products?per_page=100`),
    fetchJson(`${WP_URL}/wp-json/wc/store/v1/products/categories?per_page=100`),
  ]);

  console.log(`📦 Tìm thấy ${rawProducts.length} sản phẩm và ${rawCategories.length} danh mục.`);

  // 1. Tải ảnh mới nếu chưa có
  let downloadedImagesCount = 0;
  for (const p of rawProducts) {
    for (const img of p.images || []) {
      if (!img.src) continue;
      const filename = decodeURIComponent(new URL(img.src).pathname.split('/').pop() || '');
      const localFilePath = path.join(TARGET_IMG_DIR, filename);

      if (!fs.existsSync(localFilePath) || fs.statSync(localFilePath).size === 0) {
        try {
          console.log(`⬇️ Đang tải ảnh mới: ${filename}...`);
          await downloadImage(img.src, localFilePath);
          downloadedImagesCount++;
        } catch (err) {
          console.warn(`⚠️ Không thể tải ảnh ${img.src}: ${err.message}`);
        }
      }
    }
  }
  console.log(`✅ Hoàn tất tải ảnh: ${downloadedImagesCount} ảnh mới được lưu vào public/images/products/.`);

  // 2. Chuyển đổi categories
  const categories = rawCategories.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    count: c.count,
    description: c.description || `Sản phẩm và thiết bị chuyên khoa thuộc danh mục ${c.name}.`,
  }));

  // 3. Chuyển đổi products
  const products = rawProducts.map((p, idx) => {
    const { attributes, manufacturer, origin, warranty } = extractAttributes(
      p.short_description,
      p.description
    );

    const images = (p.images || []).map((img, imgIdx) => {
      const filename = decodeURIComponent(new URL(img.src).pathname.split('/').pop() || '');
      const localFilePath = path.join(TARGET_IMG_DIR, filename);
      const src = fs.existsSync(localFilePath) ? `/images/products/${filename}` : img.src;

      return {
        id: img.id || imgIdx + 1,
        src,
        alt: cleanHtmlText(p.name),
      };
    });

    if (images.length === 0) {
      images.push({
        id: 1,
        src: '/images/products/Surtex-Set.jpg',
        alt: cleanHtmlText(p.name),
      });
    }

    let summary = cleanHtmlText(p.short_description || '');
    if (!summary || summary.includes('Đơn giá: Liên hệ')) {
      const descClean = cleanHtmlText(p.description || '');
      summary = descClean ? `${descClean.slice(0, 160)}...` : 'Sản phẩm y tế chính hãng HSI Corp.';
    } else if (summary.includes('Thành phần:')) {
      const match = summary.match(/Thành phần(?: chính)?[:\s]+(.*?)(?=\s*Hướng dẫn sử dụng|$)/i);
      if (match && match[1]?.trim()) {
        summary = `Thành phần chính: ${match[1].trim().slice(0, 150)}...`;
      }
    }

    let sku = p.sku;
    if (!sku || sku.trim() === '') {
      if (p.name.includes('EPK-i8020c')) sku = 'EPK-i8020c';
      else if (p.name.includes('EPK-i5500c')) sku = 'EPK-i5500c';
      else if (p.name.includes('Vivo Isar')) sku = 'VIVO-ISAR';
      else if (p.name.includes('Nit-Occlud')) sku = 'NIT-OCCLUD';
      else sku = `HSI-${p.id}`;
    }

    return {
      id: p.id,
      name: cleanHtmlText(p.name),
      slug: p.slug || `product-${p.id}`,
      sku,
      short_description: summary,
      description:
        p.description ||
        p.short_description ||
        '<p>Thông tin sản phẩm đang được cập nhật từ hệ thống chuyên môn HSI Corp.</p>',
      images,
      categories: (p.categories || []).map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
      })),
      attributes,
      manufacturer,
      origin,
      warranty,
      featured: idx < 6,
    };
  });

  // 4. Ghi đè vào mockProducts.ts
  const fileContent = `import { MedicalProduct, ProductCategory } from '../types/product';

export const MOCK_CATEGORIES: ProductCategory[] = ${JSON.stringify(categories, null, 2)};

export const MOCK_PRODUCTS: MedicalProduct[] = ${JSON.stringify(products, null, 2)};
`;

  fs.writeFileSync('lib/data/mockProducts.ts', fileContent, 'utf8');
  console.log('🎉 Đồng bộ dữ liệu thành công! File lib/data/mockProducts.ts đã được làm mới.');
}

run().catch((err) => {
  console.error('❌ Lỗi khi đồng bộ:', err);
  process.exit(1);
});

