export default async function Home() {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://hsicorp.com.vn';
  const consumerKey = process.env.WC_CONSUMER_KEY || '';
  const consumerSecret = process.env.WC_CONSUMER_SECRET || '';

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

  const res = await fetch(`${wpUrl}/wp-json/wc/v3/products?per_page=6`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    next: { revalidate: 60 },
  });

  const products = await res.json();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Danh sách sản phẩm HSI Corp (Giao diện Code mới)
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((item: any) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-sm bg-white">
              {item.images && item.images[0] && (
                <img
                  src={item.images[0].src}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-500 text-sm mt-1">Mã SP: {item.sku || 'Đang cập nhật'}</p>
            </div>
          ))
        ) : (
          <p className="text-red-500">
            {products?.message || 'Chưa tải được sản phẩm. Vui lòng kiểm tra lại file .env.local!'}
          </p>
        )}
      </div>
    </main>
  );
}