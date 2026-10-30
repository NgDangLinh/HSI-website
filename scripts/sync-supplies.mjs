import fs from 'fs';
import path from 'path';
import https from 'https';

const SUPPLIES = [
  { id: 'can-thiep-tim-mach', title: 'Can thiệp tim mạch', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Can-thiep-tim-mach.jpg', file: 'can-thiep-tim-mach.jpg' },
  { id: 'cham-soc-vet-thuong', title: 'Chăm sóc vết thương', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Cham-soc-vet-thuong.jpg', file: 'cham-soc-vet-thuong.jpg' },
  { id: 'tim-bam-sinh', title: 'Tim bẩm sinh', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Tim-bam-sinh-1.jpg', file: 'tim-bam-sinh.jpg' },
  { id: 'vat-tu-cay-ghep-chinh-hinh', title: 'Vật tư cấy ghép chấn thương chỉnh hình', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-cay-ghep-chan-thuong-chinh-hinh.jpg', file: 'vat-tu-cay-ghep-chinh-hinh.jpg' },
  { id: 'vat-tu-phau-thuat', title: 'Vật tư dùng trong phẫu thuật', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-dung-trong-phau-thuat-1.jpg', file: 'vat-tu-phau-thuat.jpg' },
  { id: 'vat-tu-loc-than', title: 'Vật tư lọc thận nhân tạo', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-loc-than-nhan-tao.jpg', file: 'vat-tu-loc-than.jpg' },
  { id: 'vat-tu-me-tho', title: 'Vật tư mê thở', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Vat-tu-me-tho.jpg', file: 'vat-tu-me-tho.jpg' },
  { id: 'lieu-phap-tiem-truyen', title: 'Liệu pháp tiêm truyền', url: 'https://hsicorp.com.vn/wp-content/uploads/2023/01/Lieu-phap-tiem-truyen.png', file: 'lieu-phap-tiem-truyen.png' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(fs.statSync(dest).size);
      });
    }).on('error', reject);
  });
}

async function syncSupplies() {
  const dir = path.resolve('public/images/supplies');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log(`📡 Syncing ${SUPPLIES.length} medical supplies images to ${dir}...`);
  for (const item of SUPPLIES) {
    const dest = path.join(dir, item.file);
    try {
      const size = await download(item.url, dest);
      console.log(`✅ [${item.title}] -> ${item.file} (${size} bytes)`);
    } catch (e) {
      console.error(`❌ Error downloading ${item.file}:`, e.message);
    }
  }
  console.log('🎉 Medical supplies images sync completed!');
}

syncSupplies().catch(console.error);

