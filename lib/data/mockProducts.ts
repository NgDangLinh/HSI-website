import { MedicalProduct, ProductCategory } from '../types/product';

export const MOCK_CATEGORIES: ProductCategory[] = [
  {
    "id": 123,
    "name": "Dược Mỹ Phẩm",
    "slug": "duoc-my-pham",
    "count": 14,
    "description": "Sản phẩm dược mỹ phẩm chăm sóc & phục hồi chuyên sâu từ Cell Fusion C Expert."
  },
  {
    "id": 124,
    "name": "Dụng cụ phẫu thuật",
    "slug": "dung-cu-phau-thuat-surtex",
    "count": 3,
    "description": "Bộ dụng cụ phẫu thuật tổng quát và đại phẫu Surtex Instruments cao cấp (Anh)."
  },
  {
    "id": 78,
    "name": "Nội soi can thiệp tiêu hóa",
    "slug": "noi-soi-can-thiep-tieu-hoa",
    "count": 3,
    "description": "Hệ thống nội soi 4K, bộ xử lý hình ảnh và dụng cụ can thiệp ERCP."
  },
  {
    "id": 68,
    "name": "Chấn thương chỉnh hình",
    "slug": "chan-thuong-chinh-hinh",
    "count": 2,
    "description": "Giải pháp thay khớp nhân tạo và đinh nẹp vít kết hợp xương Titanium."
  },
  {
    "id": 122,
    "name": "Tim mạch",
    "slug": "tim-mach",
    "count": 2,
    "description": "Stent phủ thuốc mạch vành Translumina và dụng cụ can thiệp tim bẩm sinh."
  }
];

export const MOCK_PRODUCTS: MedicalProduct[] = [
  {
    "id": 905,
    "name": "Bộ dụng cụ phẫu thuật tổng quát (57 chi tiết)",
    "slug": "bo-dung-cu-phau-thuat-tong-quat-57-chi-tiet",
    "sku": "GS-002",
    "short_description": "Bộ dụng cụ phẫu thuật tổng quát, gồm 57 chi tiết Hãng sản xuất: Surtex Instruments Ltd. Xuất xứ: Vương quốc Anh",
    "description": "<p><strong>Bộ dụng cụ phẫu thuật tổng quát, gồm 57 chi tiết:</strong></p>\n<p>1. Ống hút Yankauer bộ hoàn chỉnh: 1 Cái<br />\n2. Vòng giữ dụng cụ Mayo chất liệu thép không gỉ: 2 Cái<br />\n3. Cán dao mổ số 3: 1 Cái<br />\n4. Cán dao mổ số 4: 1 Cái<br />\n5. Cán dao mổ số 7: 1 Cái<br />\n6. Kéo phẫu thuật thẳng: 1 Cái<br />\n7. Kéo phẫu tích Mayo TC thẳng: 1 Cái<br />\n8. Kéo phẫu tích Mayo TC cong: 1 Cái<br />\n9. Kéo phẫu tích Metzenbaum TC cong: 1 Cái<br />\n10. Kéo phẫu tích Metzenbaum TC thẳng: 1 Cái<br />\n11. Kéo phẫu tích Metzenbaum TC cong: 1 Cái<br />\n12. Kẹp phẫu tích loại tiêu chuẩn: 1 Cái<br />\n13. Kẹp phẫu tích loại tiêu chuẩn: 1 Cái<br />\n14. Kẹp phẫu tích Adson thẳng: 1 Cái<br />\n15. Kẹp phẫu tích Adson thẳng: 1 Cái<br />\n16. Kẹp phẫu tích Russian Modell thẳng: 1 Cái<br />\n17. Kẹp phẫu tích Cushing thẳng: 1 Cái<br />\n18. Kẹp phẫu tích Cushing thẳng: 1 Cái<br />\n19. Kẹp cầm máu Halsted-Mosquito thẳng: 6 Cái<br />\n20. Kẹp cầm máu Halsted-Mosquito cong: 6 Cái<br />\n21. Kẹp cầm máu Kelly thẳng: 6 Cái<br />\n22. Kẹp cầm máu Kelly cong: 12 Cái<br />\n23. Kẹp cầm máu Rochester-Pean cong: 6 Cái<br />\n24. Kẹp cầm máu Rochester-Pean cong: 2 Cái<br />\n25. Kẹp cầm máu Ochsner-Kocher thẳng: 4 Cái<br />\n26. Kẹp phẫu tích và gắp chỉ Mixter-Baby cong: 1 Cái<br />\n27. Kẹp phẫu tích và gắp chỉ Mixter cong: 1 Cái<br />\n28. Kẹp phẫu tích và gắp chỉ Mixter-Baby cong: 1 Cái<br />\n29. Kẹp săng Backhaus chất liệu thép không gỉ: 8 Cái<br />\n30. Kẹp giữ bông băng Foerster thẳng: 2 Cái<br />\n31. Kẹp kim Mayo-Hegar TC cán vàng: 1 Cái<br />\n32. Kẹp kim Mayo-Hegar TC cán vàng: 1 Cái<br />\n33. Kẹp kim Mayo-Hegar TC cán vàng: 1 Cái<br />\n34. Kẹp kim Mayo-Hegar TC cán vàng: 1 Cái<br />\n35. Ống hút Poole đường kính 10: 1 Cái<br />\n36. Banh Goelet kích thước lưỡi banh 40 x 40 mm &#8211; 30 x 30 mm: 2 Cái<br />\n37. Banh Parker-Langenbeck kiểu Mỹ: 1 Bộ<br />\n38. Banh bụng chiều rộng lưỡi banh 25 mm: 1 Cái<br />\n39. Banh bụng chiều rộng lưỡi banh 30 mm: 1 Cái<br />\n40. Banh bụng chiều rộng lưỡi banh 40 mm: 1 Cái<br />\n41. Banh bụng chiều rộng lưỡi banh 50 mm: 1 Cái<br />\n42. Banh Deaver kiểu 4: 1 Cái<br />\n43. Banh Deaver kiểu 8: 1 Cái<br />\n44. Banh Richardson chiều rộng lưỡi banh 25 x 21 mm: 1 Cái<br />\n45. Banh Richardson chiều rộng lưỡi banh 38 x 40 mm: 1 Cái<br />\n46. Banh Kelly chiều rộng lưỡi banh 62 x 50 mm: 1 Cái<br />\n47. Banh Balfour tiêu chuẩn: 1 Cái<br />\n48. Kẹp ống mật Lahey (Sweet) cong: 2 Cái<br />\n49. Kẹp ruột và mô Allis thẳng: 2 Cái<br />\n50. Kẹp ruột và mô Allis thẳng: 2 Cái<br />\n51. Kẹp kim Mayo-Hegar ngàm có khía: 2 Bộ<br />\n52. Kẹp ruột và mô Babcock thẳng: 2 Cái<br />\n53. Kẹp cầm máu Schnidt Tonsil hơi cong: 4 Cái<br />\n54. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n55. Hộp hấp tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 nắp hộp đục lỗ: 1 Cái<br />\n56. Khay tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 có nắp: 1 Cái<br />\n57. Nhãn nhận dạng hộp hấp tiệt trùng và bảo quản dụng cụ màu xanh lam: 1 Cái</p>",
    "images": [
      {
        "id": 900,
        "src": "/images/products/Surtex-Set.jpg",
        "alt": "Bộ dụng cụ phẫu thuật tổng quát (57 chi tiết)"
      },
      {
        "id": 900,
        "src": "/images/products/Surtex-Set.jpg",
        "alt": "Bộ dụng cụ phẫu thuật tổng quát (57 chi tiết)"
      }
    ],
    "categories": [
      {
        "id": 124,
        "name": "Dụng cụ phẫu thuật",
        "slug": "dung-cu-phau-thuat-surtex"
      },
      {
        "id": 130,
        "name": "Phẫu thuật tổng quát",
        "slug": "surtex_general-vn"
      }
    ],
    "attributes": [
      {
        "name": "Hãng sản xuất",
        "options": [
          "Surtex Instruments Ltd."
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Vương quốc Anh"
        ]
      }
    ],
    "manufacturer": "Surtex Instruments Ltd.",
    "origin": "Vương quốc Anh",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 904,
    "name": "Bộ dụng cụ đại phẫu (48 chi tiết)",
    "slug": "bo-dung-cu-dai-phau-48-chi-tiet",
    "sku": "GS-002.3",
    "short_description": "Bộ dụng cụ đại phẫu, gồm 48 chi tiết Hãng sản xuất: Surtex Instruments Ltd. Xuất xứ: Vương quốc Anh",
    "description": "<p><strong>Bộ dụng cụ đại phẫu, gồm 48 chi tiết:</strong></p>\n<p>1. Bát đựng dung dịch kích thước Ø 128 x 55 mm: 1 Cái<br />\n2. Kẹp săng Backhaus chất liệu thép không gỉ: 1 Cái<br />\n3. Kẹp giữ bông băng Foerster thẳng: 6 Cái<br />\n4. Cán dao mổ số 3: 1 Cái<br />\n5. Cán dao mổ số 4: 1 Cái<br />\n6. Kéo phẫu tích Mayo cong: 1 Cái<br />\n7. Kéo phẫu tích Mayo thẳng: 1 Cái<br />\n8. Kéo phẫu tích Mayo cong: 2 Cái<br />\n9. Kéo phẫu tích Metzenbaum-Fine TC loại nhỡ: 1 Cái<br />\n10. Kéo phẫu tích Metzenbaum-Fine TC loại nhỡ: 2 Cái<br />\n11. Ống hút Poole đường kính 10: 2 Cái<br />\n12. Ống hút Yankauer bộ hoàn chỉnh: 1 Cái<br />\n13. Kẹp cầm máu Crile cong: 1 Cái<br />\n14. Kẹp cầm máu Crile thẳng: 1 Cái<br />\n15. Kẹp cầm máu Crile-Rankin cong: 1 Cái<br />\n16. Kẹp cầm máu Crile-Rankin thẳng: 6 Cái<br />\n17. Kẹp ruột và mô Allis thẳng: 6 Cái<br />\n18. Kẹp ruột và mô Babcock thẳng: 4 Cái<br />\n19. Kẹp cầm máu không chấn thương DeBakey-Pean thẳng: 2 Cái<br />\n20. Kẹp cầm máu không chấn thương DeBakey-Pean cong: 4 Cái<br />\n21. Kẹp ruột Doyen thẳng: 2 Cái<br />\n22. Kẹp phẫu tích và gắp chỉ Gemini cong: 2 Cái<br />\n23. Kẹp phẫu tích và gắp chỉ Gemini cong: 2 Cái<br />\n24. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n25. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n26. Kẹp không chấn thương DeBakey thẳng: 2 Cái<br />\n27. Kẹp không chấn thương DeBakey thẳng: 2 Cái<br />\n28. Kẹp phẫu tích loại nhỡ: 1 Cái<br />\n29. Kẹp phẫu tích loại tiêu chuẩn: 2 Cái<br />\n30. Kẹp phẫu tích Cushing thẳng: 1 Bộ<br />\n31. Kẹp phẫu tích Waugh thẳng: 1 Bộ<br />\n32. Banh bụng chiều rộng lưỡi banh 30 mm: 1 Cái<br />\n33. Banh Parker-Langenbeck kiểu Mỹ: 1 Cái<br />\n34. Banh Richardson-Eastman bộ gồm 2 chiếc: 1 Cái<br />\n35. Banh Deaver kiểu 8: 1 Cái<br />\n36. Banh Deaver kiểu 4: 1 Cái<br />\n37. Banh Balfour tiêu chuẩn: 1 Cái<br />\n38. Kẹp kim Mayo-Hegar TC cán vàng: 2 Cái<br />\n39. Kẹp kim DeBakey TC cán vàng: 1 Cái<br />\n40. Kẹp kim Mayo-Hegar mảnh: 1 Cái<br />\n41. Kéo phẫu thuật thẳng: 1 Cái<br />\n42. Vòng giữ dụng cụ Mayo chất liệu thép không gỉ: 1 Cái<br />\n43. Kẹp cầm máu Crafoord cong: 1 Cái<br />\n44. Kẹp cầm máu Coller cong: 1 Cái<br />\n45. Bát tròn kích thước Ø 160 x 65 mm: 1 Cái<br />\n46. Kẹp cầm máu Ochsner-Kocher thẳng: 1 Cái<br />\n47. Hộp hấp tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 nắp hộp đục lỗ: 1 Cái<br />\n48. Khay lưới tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 không có nắp: 1 Cái</p>",
    "images": [
      {
        "id": 900,
        "src": "/images/products/Surtex-Set.jpg",
        "alt": "Bộ dụng cụ đại phẫu (48 chi tiết)"
      }
    ],
    "categories": [
      {
        "id": 124,
        "name": "Dụng cụ phẫu thuật",
        "slug": "dung-cu-phau-thuat-surtex"
      },
      {
        "id": 130,
        "name": "Phẫu thuật tổng quát",
        "slug": "surtex_general-vn"
      }
    ],
    "attributes": [
      {
        "name": "Hãng sản xuất",
        "options": [
          "Surtex Instruments Ltd."
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Vương quốc Anh"
        ]
      }
    ],
    "manufacturer": "Surtex Instruments Ltd.",
    "origin": "Vương quốc Anh",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 901,
    "name": "Bộ dụng cụ đại phẫu (64 chi tiết)",
    "slug": "bo-dung-cu-dai-phau-64-chi-tiet",
    "sku": "GS-002.2",
    "short_description": "Bộ dụng cụ đại phẫu, gồm 64 chi tiết Hãng sản xuất: Surtex Instruments Ltd. Xuất xứ: Vương quốc Anh",
    "description": "<p><strong>Bộ dụng cụ đại phẫu, gồm 64 chi tiết:</strong></p>\n<p>1. Cán dao mổ số 4: 1 Cái<br />\n2. Kẹp giữ bông băng Foerster thẳng: 1 Cái<br />\n3. Kẹp săng Backhaus chất liệu thép không gỉ: 6 Cái<br />\n4. Kéo phẫu tích Mayo TC thẳng: 1 Cái<br />\n5. Kéo phẫu tích Metzenbaum TC cong: 1 Cái<br />\n6. Kéo phẫu tích Metzenbaum-Fine TC loại nhỡ: 1 Cái<br />\n7. Kéo phẫu tích Metzenbaum-Fine TC loại nhỡ: 1 Cái<br />\n8. Kẹp phẫu tích loại mảnh: 2 Cái<br />\n9. Kẹp phẫu tích loại mảnh: 1 Cái<br />\n10. Kẹp phẫu tích loại tiêu chuẩn: 2 Cái<br />\n11. Kẹp phẫu tích loại tiêu chuẩn: 2 Cái<br />\n12. Kẹp phẫu tích Semken TC thẳng: 1 Cái<br />\n13. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n14. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n15. Kẹp không chấn thương DeBakey thẳng: 1 Cái<br />\n16. Kẹp cầm máu Halsted-Mosquito cong: 6 Cái<br />\n17. Kẹp cầm máu Crile-Rankin cong: 6 Cái<br />\n18. Kẹp cầm máu Rochester-Pean cong: 4 Cái<br />\n19. Kẹp cầm máu Rochester-Pean cong: 2 Cái<br />\n20. Kẹp cầm máu Ochsner-Kocher cong: 4 Cái<br />\n21. Kẹp ruột và mô Babcock thẳng: 2 Cái<br />\n22. Kẹp ruột và mô Thoms-Allis thẳng: 2 Cái<br />\n23. Kẹp ruột và mô Jud-Allis thẳng: 2 Cái<br />\n24. Kẹp ống mật Lahey (Sweet) cong: 1 Cái<br />\n25. Kẹp âm đạo Wertheim-Cullen chất liệu thép không gỉ: 1 Cái<br />\n26. Kẹp ruột không chấn thương Kocher cong: 2 Cái<br />\n27. Kẹp ruột không chấn thương Mayo-Robson cong: 2 Cái<br />\n28. Banh Balfour bộ hoàn chỉnh với lưỡi giữa kích thước 45 x 80 mm: 1 Cái<br />\n29. Móc khí quản Jackson chất liệu thép không gỉ: 2 Cái<br />\n30. Banh Farabeuf bộ 2 cái: 1 Bộ<br />\n31. Banh Parker-Langenbeck kiểu Mỹ: 1 Bộ<br />\n32. Banh âm đạo Doyen kiểu số 1: 1 Cái<br />\n33. Banh âm đạo Doyen kiểu số 2: 1 Cái<br />\n34. Banh âm đạo Doyen kiểu số 3: 1 Cái<br />\n35. Banh bụng chiều rộng lưỡi banh 30 mm: 1 Cái<br />\n36. Banh bụng chiều rộng lưỡi banh 40 mm: 1 Cái<br />\n37. Banh bụng chiều rộng lưỡi banh 50 mm: 1 Cái<br />\n38. Que thăm hình lá sim đường kính đầu 2: 2 Cái<br />\n39. Kẹp gắp sỏi mật Desjardins cong: 1 Cái<br />\n40. Kẹp gắp sỏi mật Desjardins cong: 1 Cái<br />\n41. Muỗng lấy sỏi mật Luer-Koerte thân dễ uốn: 1 Cái<br />\n42. Muỗng lấy sỏi mật Luer-Koerte thân dễ uốn: 1 Cái<br />\n43. Muỗng lấy sỏi mật Luer-Koerte thân dễ uốn: 1 Cái<br />\n44. Muỗng lấy sỏi mật Luer-Koerte thân dễ uốn: 1 Cái<br />\n45. Que thăm/Nong niệu đạo Van Buren đường kính 8 charr: 1 Cái<br />\n46. Que thăm/Nong niệu đạo Van Buren đường kính 10 charr: 1 Cái<br />\n47. Que thăm/Nong niệu đạo Van Buren đường kính 12 charr: 1 Cái<br />\n48. Que thăm/Nong niệu đạo Van Buren đường kính 14 charr: 1 Cái<br />\n49. Que thăm/Nong niệu đạo Van Buren đường kính 16 charr: 1 Cái<br />\n50. Que thăm/Nong niệu đạo Van Buren đường kính 18 charr: 1 Cái<br />\n51. Que thăm/Nong niệu đạo Van Buren đường kính 20 charr: 1 Cái<br />\n52. Que thăm/Nong niệu đạo Van Buren đường kính 22 charr: 1 Cái<br />\n53. Kẹp kim DeBakey TC cán vàng: 1 Cái<br />\n54. Kẹp kim Crile-Wood TC cán vàng: 2 Cái<br />\n55. Kẹp kim Mayo-Hegar TC cán vàng: 2 Cái<br />\n56. Kẹp phẫu tích và gắp chỉ Mixter gập về bên phải: 1 Cái<br />\n57. Kẹp phẫu tích và gắp chỉ Gemini cong: 1 Cái<br />\n58. Kéo phẫu thuật tử cung Sims TC cong: 1 Cái<br />\n59. Ống hút Yankauer bộ hoàn chỉnh: 2 Cái<br />\n60. Khay hình quả thận kích thước 250 x 140 x 40 mm: 1 Cái<br />\n61. Bát đựng dung dịch kích thước Ø 147 x 65 mm: 1 Cái<br />\n62. Bát tròn kích thước Ø 160 x 65 mm: 1 Cái<br />\n63. Hộp hấp tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 nắp hộp đục lỗ: 2 Cái<br />\n64. Khay lưới tiệt trùng và bảo quản dụng cụ phẫu thuật cỡ 1/1 không có nắp: 2 Cái</p>",
    "images": [
      {
        "id": 900,
        "src": "/images/products/Surtex-Set.jpg",
        "alt": "Bộ dụng cụ đại phẫu (64 chi tiết)"
      }
    ],
    "categories": [
      {
        "id": 124,
        "name": "Dụng cụ phẫu thuật",
        "slug": "dung-cu-phau-thuat-surtex"
      },
      {
        "id": 130,
        "name": "Phẫu thuật tổng quát",
        "slug": "surtex_general-vn"
      }
    ],
    "attributes": [
      {
        "name": "Hãng sản xuất",
        "options": [
          "Surtex Instruments Ltd."
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Vương quốc Anh"
        ]
      }
    ],
    "manufacturer": "Surtex Instruments Ltd.",
    "origin": "Vương quốc Anh",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 873,
    "name": "Cell Fusion C Expert Time Reverse Lifting Cream",
    "slug": "cell-fusion-c-expert-time-reverse-lifting-cream",
    "sku": "HSI-873",
    "short_description": "Đơn giá: 1.650.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO CMS, TRF – Time Reverse Factor (Collagen Sinh Học, + Peptide Thực Vật), Oliosome & MF Technology, Chiết Xuất Caffeine, Hạt Nho & Vitamin C Hướng dẫn sử dụng Sau các bước làm sạch, toner & tinh chất, lấy một lượng vừa đủ thoa lên 5 điểm, massage theo chiều cấu tạo da & vỗ nhẹ để dưỡng chất thấm sâu vào da",
    "description": "<p>Kem dưỡng chuyên sâu ứng dụng công nghệ NEO-CMS™ cùng phức hợp TRF giúp kích thích tái tạo collagen và hyaluronic, củng cố hàng rào bảo vệ và cải thiện các dấu hiệu lão hóa hiệu quả. Nhờ công nghệ vận chuyển Oliosome &amp; MF, dưỡng chất được đưa sâu vào hạ bì kết hợp cùng Argireline, AdeCósine và Resveratrol giúp vô hiệu hóa gốc tự do, cấp ẩm bền bỉ mà hoàn toàn không gây nhờn rít. Sản phẩm mang lại làn da săn chắc, mềm mại và tràn đầy sức sống.</p>",
    "images": [
      {
        "id": 885,
        "src": "/images/products/Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-4.png",
        "alt": "Cell Fusion C Expert Time Reverse Lifting Cream"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.650.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO CMS, TRF – Time Reverse Factor (Collagen Sinh Học, + Peptide Thực Vật), Oliosome & MF Technology, Chiết Xuất Caffeine, Hạt Nho & Vitamin C"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước làm sạch, toner & tinh chất, lấy một lượng vừa đủ thoa lên 5 điểm, massage theo chiều cấu tạo da & vỗ nhẹ để dưỡng chất thấm sâu vào da"
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 871,
    "name": "Cell Fusion C Expert Time Reverse Concentrate Essence",
    "slug": "cell-fusion-c-expert-time-reverse-concentrate-essence",
    "sku": "HSI-871",
    "short_description": "Đơn giá: 1.075.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO CMS, TRF – Time Reverse Factor (Collagen Sinh Học, + Peptide Thực Vật), Ceramine Nhẹ, Chiết xuất Selaginella & Quả Sung, Tổ Hợp Chống Oxy Hóa từ Glutathione, CoQ10 & Alpha Lipoic Acid. Hướng dẫn sử dụng Sau các bước làm sạch, cho một lượng vừa đủ cho vào miếng cotton và nhẹ nhàng xoay theo chiều cấu tạo da, từ trong ra ngoài từ dưới lên trên, sau đó vỗ nhẹ cho sản phẩm thẩm thấu.",
    "description": "<p>Tinh chất cô đặc ứng dụng công nghệ độc quyền NEO-CMS™ giúp hoạt chất thẩm thấu sâu, củng cố hàng rào bảo vệ và duy trì độ ẩm tối ưu. Sản phẩm chứa phức hợp TRF (gồm collagen tương tự da người và peptide thực vật) giúp thúc đẩy sản sinh collagen và hyaluronic tự nhiên, cải thiện độ đàn hồi, làm mờ nếp nhăn và khắc phục tình trạng khô ráp. Nhờ công nghệ vận chuyển Oliosome &amp; MF kết hợp chiết xuất ceramide nhẹ, Selaginella Lepidophylla và quả sung, tinh chất mang lại khả năng chống oxy hóa, làm dịu và nuôi dưỡng làn da căng mịn, tươi sáng rõ rệt.</p>",
    "images": [
      {
        "id": 869,
        "src": "/images/products/Tach-Nen-Time-Reverse-Concentrate-Essence-130ml-1.png",
        "alt": "Cell Fusion C Expert Time Reverse Concentrate Essence"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.075.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO CMS, TRF – Time Reverse Factor (Collagen Sinh Học, + Peptide Thực Vật), Ceramine Nhẹ, Chiết xuất Selaginella & Quả Sung, Tổ Hợp Chống Oxy Hóa từ Glutathione, CoQ10 & Alpha Lipoic Acid."
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước làm sạch, cho một lượng vừa đủ cho vào miếng cotton và nhẹ nhàng xoay theo chiều cấu tạo da, từ trong ra ngoài từ dưới lên trên, sau đó vỗ nhẹ cho sản phẩm thẩm thấu."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 868,
    "name": "Cell Fusion C Expert Whitecure Vita.CEB12 Cream",
    "slug": "cell-fusion-c-expert-whitecure-vita-ceb12-cream",
    "sku": "HSI-868",
    "short_description": "Đơn giá: 1.680.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Phức Hợp Vita.CEB12, Chiết Xuất Pancratium Maritimum, Phức Hợp Chống Oxy Hóa (Glutathione, Alpha Lipoic Acid, Coenzyme Q10, Super Antioxidant Network), Chiết Xuất Thực Vật (Hoa Thủy Tiên Biển & Hoa Bông Tuyết) Hướng dẫn sử dụng Sau bước sử dụng tinh chất, dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da.",
    "description": "<p><span class=\"\">Kem dưỡng trắng chuyên sâu ứng dụng công nghệ độc quyền NEO-CMS™ giúp hoạt chất thẩm thấu sâu,</span><span class=\"\"> tối ưu hóa khả năng phục hồi và củng cố hàng rào bảo vệ da.</span><span class=\"\"> Sản phẩm sở hữu phức hợp Vita.</span><span class=\"\">CEB12 kết hợp Glutathione và Alpha Lipoic Acid,</span><span class=\"\"> giúp ức chế tăng sắc tố và kích thích tái tạo da khỏe mạnh.</span><span class=\"\"> Trong đó,</span><span class=\"\"> Glutathione mang lại hiệu quả làm sáng vượt trội cùng Coenzyme Q10 và chiết xuất hoa thủy tiên biển giúp chặn đứng vận chuyển melanin,</span><span class=\"\"> làm mờ đốm nâu từ gốc.</span><span class=\"\"> Ngoài ra,</span><span class=\"\"> kem còn cấp ẩm,</span><span class=\"\"> chống lão hóa,</span><span class=\"\"> mang lại làn da mềm mịn,</span> săn chắc và sáng khỏe bền vững từ bên trong.</p>",
    "images": [
      {
        "id": 870,
        "src": "/images/products/Tach-Nen-Vita.CEB12-Cream-50ml-1-scaled.png",
        "alt": "Cell Fusion C Expert Whitecure Vita.CEB12 Cream"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.680.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Phức Hợp Vita.CEB12, Chiết Xuất Pancratium Maritimum, Phức Hợp Chống Oxy Hóa (Glutathione, Alpha Lipoic Acid, Coenzyme Q10, Super Antioxidant Network), Chiết Xuất Thực Vật (Hoa Thủy Tiên Biển & Hoa Bông Tuyết)"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước sử dụng tinh chất, dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": true
  },
  {
    "id": 865,
    "name": "Cell Fusion C Expert Whitecure Vita.CEB12 Effector",
    "slug": "cell-fusion-c-expert-whitecure-vita-ceb12-effector",
    "sku": "HSI-865",
    "short_description": "Đơn giá: 1.680.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Phức Hợp Vita.CEB12: Super Antioxidant Network, Bông Tuyết, Chiết Xuất Từ Rễ Cây Brassica Rapa Hướng dẫn sử dụng Sau bước làm sạch và nước cân bằng (toner), dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da.",
    "description": "<div id=\"model-response-message-contentr_d0913355c5516448\" class=\"markdown markdown-main-panel md-content enable-luminous-fast-follows enable-updated-hr-color\" dir=\"ltr\" aria-live=\"polite\">\n<div>Tinh chất dưỡng trắng chuyên sâu ứng dụng phức hợp độc quyền Vita.CEB12 mang lại tác động kép giúp kiểm soát melanin từ gốc lẫn bề mặt, làm sáng đều màu da, xóa mờ thâm nám và vết thâm sau mụn. Sản phẩm kết hợp hệ thống Super Antioxidant Network cùng chiết xuất hoa bông tuyết và rễ cây Brassica rapa để vô hiệu hóa gốc tự do, ngăn ngừa tăng sắc tố và củng cố hàng rào chống lão hóa bền vững. Đây là giải pháp toàn diện giúp phục hồi làn da không đều màu, thâm sạm lâu năm hoặc tổn thương sau mụn mà không chỉ trắng ảo trên bề mặt.</div>\n</div>",
    "images": [
      {
        "id": 866,
        "src": "/images/products/Tach-Nen-Vita.CEB12-Effector-50ml-1-scaled.png",
        "alt": "Cell Fusion C Expert Whitecure Vita.CEB12 Effector"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.680.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Phức Hợp Vita.CEB12: Super Antioxidant Network, Bông Tuyết, Chiết Xuất Từ Rễ Cây Brassica Rapa"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước làm sạch và nước cân bằng (toner), dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 863,
    "name": "Cell Fusion C Expert Purifying Cleansing Gel",
    "slug": "cell-fusion-c-expert-purifying-cleansing-gel",
    "sku": "HSI-863",
    "short_description": "Đơn giá: 915.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính – NEO-CMS™: Công nghệ độc quyền hỗ trợ hấp thụ dưỡng chất tốt hơn, tăng cường hàng rào bảo vệ và duy trì độ ẩm cho da, tạo nền da cân bằng và trông rạng rỡ hơn. – AC.Treacalm Complex™: Cân bằng lượng dầu trên da, giảm các dấu hiệu viêm và bít tắc lỗ chân lông. – Tinh Dầu Trà: Làm sạch da, hỗ trợ làm thoáng lỗ chân lông – mang lại cảm giác tươi mới và dễ chịu cho làn da dầu mụn. – D-Panthenol: Giúp làm dịu da đang nhạy cảm, bổ sung độ ẩm và cải thiện tình trạng bề mặt da, mang lại cảm giác êm dịu sau mỗi lần rửa mặt. Hướng dẫn sử dụng Sau các bước tẩy trang, lấy một lượng vừa đủ vào lòng bàn tay, tạo bọt và rửa mặt một cách nhẹ nhàng, sau đó rửa sạch lại bằng nước.",
    "description": "<p>Cell Fusion C Expert Purifying Cleansing Gel là dòng gel rửa mặt lý tưởng cho da dầu mụn, nhạy cảm hoặc đang phục hồi. Sản phẩm loại bỏ sạch sâu bã nhờn và bụi bẩn nhưng vẫn giữ nguyên độ ẩm tự nhiên, không gây khô căng. Nhờ bảng thành phần dịu nhẹ giúp xoa dịu và giảm kích ứng, sản phẩm này được các clinic Hàn Quốc tin dùng hàng đầu để nuôi dưỡng làn da khỏe mạnh mỗi ngày.</p>",
    "images": [
      {
        "id": 864,
        "src": "/images/products/Tach-Nen-Purifying-Cleansing-Gel-200ml.png",
        "alt": "Cell Fusion C Expert Purifying Cleansing Gel"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "915.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "– NEO-CMS™: Công nghệ độc quyền hỗ trợ hấp thụ dưỡng chất tốt hơn, tăng cường hàng rào bảo vệ và duy trì độ ẩm cho da, tạo nền da cân bằng và trông rạng rỡ hơn. – AC.Treacalm Complex™: Cân bằng lượng dầu trên da, giảm các dấu hiệu viêm và bít tắc lỗ chân lông. – Tinh Dầu Trà: Làm sạch da, hỗ trợ làm thoáng lỗ chân lông – mang lại cảm giác tươi mới và dễ chịu cho làn da dầu mụn. – D-Panthenol: Giúp làm dịu da đang nhạy cảm, bổ sung độ ẩm và cải thiện tình trạng bề mặt da, mang lại cảm giác êm dịu sau mỗi lần rửa mặt."
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước tẩy trang, lấy một lượng vừa đủ vào lòng bàn tay, tạo bọt và rửa mặt một cách nhẹ nhàng, sau đó rửa sạch lại bằng nước."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 860,
    "name": "Cell Fusion C Expert Barriederm Intensive Cream",
    "slug": "cell-fusion-c-expert-barriederm-intensive-cream",
    "sku": "HSI-860",
    "short_description": "Đơn giá: 1.075.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Nhục Đậu Khấu, Eco Green Ceramide, Glycerin, HA, Ceramine Nhẹ, Chiết Xuất Selaginella Lepidophylla, Chiết Xuất Quả Sung Hướng dẫn sử dụng Sau các bước làm sạch da (mặt hoặc cơ thể), dùng 1 lượng vừa đủ thoa lên bề mặt da/ cơ thể và massage nhẹ nhàng giúp sản phẩm thẩm thấu. Có thể dùng thường xuyên tại vùng da bị khô, bong tróc nghiêm trọng kéo dài.",
    "description": "<p>Kem dưỡng Cell Fusion C Expert Barriederm Intensive Cream cung cấp độ ẩm chuyên sâu, chống lão hóa và tạo lớp màng chắn ngăn ngừa mất nước, phục hồi hàng rào bảo vệ da. Sản phẩm giúp kiểm soát tác nhân gây viêm, giảm ngứa và xoa dịu căng thẳng cho da. Công thức phù hợp với mọi loại da, đặc biệt là da khô và thiếu nước.</p>",
    "images": [
      {
        "id": 862,
        "src": "/images/products/Tach-Nen-Intensive-Cream-100ml.png",
        "alt": "Cell Fusion C Expert Barriederm Intensive Cream"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.075.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Nhục Đậu Khấu, Eco Green Ceramide, Glycerin, HA, Ceramine Nhẹ, Chiết Xuất Selaginella Lepidophylla, Chiết Xuất Quả Sung"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước làm sạch da (mặt hoặc cơ thể), dùng 1 lượng vừa đủ thoa lên bề mặt da/ cơ thể và massage nhẹ nhàng giúp sản phẩm thẩm thấu. Có thể dùng thường xuyên tại vùng da bị khô, bong tróc nghiêm trọng kéo dài."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 857,
    "name": "Cell Fusion C Expert Barriederm Intensive Lotion",
    "slug": "cell-fusion-c-expert-barriederm-intensive-lotion",
    "sku": "HSI-857",
    "short_description": "Đơn giá: 1.075.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Nhục Đậu Khấu, Eco Green Ceramide, Glycerin, HA, Ceramine Nhẹ, Chiết Xuất Selaginella Lepidophylla, Chiết Xuất Quả Sung Hướng dẫn sử dụng Sau các bước làm sạch da (mặt hoặc cơ thể), dùng 1 lượng vừa đủ thoa lên bề mặt da/ cơ thể và massage nhẹ nhàng giúp sản phẩm thẩm thấu. Có thể dùng thường xuyên tại vùng da bị khô, bong tróc nghiêm trọng kéo dài.",
    "description": "<p>Được định hình là dòng tinh chất phục hồi cao cấp, Cell Fusion C Expert Dermagenis pH Biome Serum đem đến giải pháp tái sinh toàn diện cho những làn da đang chịu tổn thương. Sản phẩm ứng dụng bộ đôi phức hợp hiện đại pHarrier™ cùng NECTARBIOME để thiết lập lại độ pH sinh lý và củng cố vững chắc màng chắn bảo vệ tự nhiên. Bên cạnh đó, sự pha trộn hoàn hảo của Ectoin, Renewome và Peptide Complex còn giúp bơm nước tầng sâu, xoa dịu các vùng da viêm sưng, kích thích hệ vi sinh có lợi phát triển và thúc đẩy quá trình tái tạo tế bào — trả lại cho bạn bề mặt da khỏe khoắn, căng mọng đầy sức sống từ gốc.</p>",
    "images": [
      {
        "id": 858,
        "src": "/images/products/Tach-Nen-Intensive-Lotion-200ml.png",
        "alt": "Cell Fusion C Expert Barriederm Intensive Lotion"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.075.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Nhục Đậu Khấu, Eco Green Ceramide, Glycerin, HA, Ceramine Nhẹ, Chiết Xuất Selaginella Lepidophylla, Chiết Xuất Quả Sung"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước làm sạch da (mặt hoặc cơ thể), dùng 1 lượng vừa đủ thoa lên bề mặt da/ cơ thể và massage nhẹ nhàng giúp sản phẩm thẩm thấu. Có thể dùng thường xuyên tại vùng da bị khô, bong tróc nghiêm trọng kéo dài."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 855,
    "name": "Cell Fusion C Expert Timereverse Cica Soothing Ampoule",
    "slug": "cell-fusion-c-expert-timereverse-cica-soothing-ampoule",
    "sku": "HSI-855",
    "short_description": "Đơn giá: 1.465.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Chiết Xuất Tràm Trà, Chiết Xuất Rau Má, Gluconolactone (10%) Hướng dẫn sử dụng Sau bước làm sạch và toner dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da đề dưỡng chất thấm sâu vào da.",
    "description": "<p data-path-to-node=\"3\">Cell Fusion C Expert Time Reverse Cica Soothing Ampoule là dòng tinh chất cô đặc chuyên sâu thuộc phân khúc dược mỹ phẩm cao cấp đến từ Hàn Quốc. Sản phẩm ra đời nhằm giải quyết bài toán khó cho làn da vừa có dấu hiệu lão hóa lại vừa nhạy cảm, dễ mẩn đỏ hoặc tổn thương, mang đến tác động kép: vừa trẻ hóa bề mặt vừa xoa dịu làn da tức thì.</p>\n<p data-path-to-node=\"4\"><b data-path-to-node=\"4\" data-index-in-node=\"0\">Điểm nổi bật về công dụng:</b></p>\n<ul data-path-to-node=\"5\">\n<li>\n<p data-path-to-node=\"5,0,0\">Khả năng kháng khuẩn tối ưu, chặn đứng nguy cơ tái phát mụn.</p>\n</li>\n<li>\n<p data-path-to-node=\"5,1,0\">Trấn tĩnh các vùng da đang bị viêm sưng và kích ứng.</p>\n</li>\n<li>\n<p data-path-to-node=\"5,2,0\">Kiểm soát tiết dầu, cân bằng độ ẩm và hỗ trợ ngăn ngừa mụn mới hình thành.</p>\n</li>\n<li>\n<p data-path-to-node=\"5,3,0\">Hạn chế tối đa sự hình thành sẹo thâm sau khi nặn mụn.</p>\n</li>\n</ul>",
    "images": [
      {
        "id": 856,
        "src": "/images/products/Tach-Nen-Cica-Soothing-Ampoule-100ml-scaled.png",
        "alt": "Cell Fusion C Expert Timereverse Cica Soothing Ampoule"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "1.465.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Chiết Xuất Tràm Trà, Chiết Xuất Rau Má, Gluconolactone (10%)"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước làm sạch và toner dùng một lượng vừa đủ vỗ nhẹ lên da và massage theo chiều cấu tạo da đề dưỡng chất thấm sâu vào da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 853,
    "name": "Cell Fusion C Expert Dermagenis pH Biome Serum",
    "slug": "dermagenis-ph-biome-serum",
    "sku": "HSI-853",
    "short_description": "Đơn giá: 865.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính pHarrier, Nectarbiome, Ectoin, Renewome, Peptide Complex. Hướng dẫn sử dụng Sau bước làm sạch và cân bằng, dùng một lượng vừa đủ chấm 5 điểm trên mặt và thoa nhẹ nhàng theo chiều cấu tạo da.",
    "description": "<p>Cell Fusion C Expert Dermagenis pH Biome Serum là tinh chất phục hồi chuyên sâu giúp tái thiết làn da tổn thương, cân bằng pH tự nhiên và tăng cường hàng rào bảo vệ da nhờ phức hợp pHarrier™ và NECTARBIOME; kết hợp Ectoin, Renewome và Peptide Complex giúp cấp ẩm, hỗ trợ giảm viêm, nuôi dưỡng vi sinh có lợi và thúc đẩy tái tạo da – cho làn da khỏe mạnh, ẩm mượt và rạng rỡ ngay từ bên trong.</p>",
    "images": [
      {
        "id": 854,
        "src": "/images/products/Tach-Nen-Biome-Serum-50ml-scaled.png",
        "alt": "Cell Fusion C Expert Dermagenis pH Biome Serum"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "865.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "pHarrier, Nectarbiome, Ectoin, Renewome, Peptide Complex."
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước làm sạch và cân bằng, dùng một lượng vừa đủ chấm 5 điểm trên mặt và thoa nhẹ nhàng theo chiều cấu tạo da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 851,
    "name": "Cell Fusion C Expert Toning Peel Program",
    "slug": "cell-fusion-c-expert-toning-peel-program",
    "sku": "HSI-851",
    "short_description": "Đơn giá: 3.145.000Đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính – Glycerin Glucoside (6%): Kích hoạt kênh dẫn nước tự nhiên trên da, tăng khả năng cấp ẩm sâu đến từng tế bào. – Gluconolactone (PHA): Hoạt chất peeling chính với cấu trúc phân tử lớn, giúp loại bỏ tế bào chết một cách êm dịu, hạn chế kích ứng và phù hợp cả với làn da nhạy cảm. – Lactic Acid (AHA): AHA tự nhiên với phân tử lớn, cực an toàn, giúp cấp ẩm và làm sạch lớp sừng một cách nhẹ nhàng. – Hydrogen Water: Chống oxy hóa mạnh mẽ, giúp trung hòa gốc tự do, giảm kích ứng và tăng cường cấp ẩm. – Pollustop: Tạo lớp màng bảo vệ giúp da chống lại bụi mịn và các yếu tố ô nhiễm từ môi trường.. – Salmon Complex 53% (DNA & Trứng cá hồi): Cung cấp dưỡng chất cho làn da trông săn chắc, ẩm mượt và tươi tắn hơn. – 7 loại Peptide: Hỗ trợ cải thiện độ đàn hồi, giảm bề mặt khô ráp và tăng cảm giác căng khỏe cho da. Hướng dẫn sử dụng Bước 1: Sử dụng dung dịch làm mềm tết bào chết và cấp nước Cell Fusion C Expert Toning Peel Booster Sau khi rửa mặt, nhấn 2-3 lần Toning Peel Booster ra bông cotton, thoa đều nhẹ nhàng lên mặt theo chiều cấu tạo da, đặc biệt vùng da khô Bước 2: Peel dịu nhe, làm sáng và đều màu da Cell Fusion C Expert Toning Peel Reactivator sau peel Đổ toàn bộ dung dịch ra bát thủy tinh, dùng cọ thoa đều lên mặt theo chiều cấu tạo da, tránh vùng mắt và môi. Bước 3: Sử dụng mặt nạ bọt khí Hydro Cell Fusion C Expert Toning Peel Reactivator sau Peel Nhấn 3-4 lần Toning Peel Reactivator vào chén thủy tinh, dùng cọ chuyên dụng thoa đều lên toàn bộ khuôn mặt. Khi các bọt khí li ti xuất hiện và bắt đầu vỡ nhẹ trên da. Dùng bông mềm hoặc khăn ấm lau sạch. Bước 4: Kết thúc bước chăm da Thấm Toning Peel Booster ra bông lau nhẹ theo chiều cấu tạo da. Lấy một lượng vừa đủ Salmon Repair Ampoule thoa nhẹ nhàng cho thẩm thấu. Sau đó đắp mặt nạ để làm dịu da.",
    "description": "<div>Peel da từng được xem là liệu trình chỉ có thể thực hiện tại các cơ sở thẩm mỹ chuyên sâu. Tuy nhiên, với nhịp sống bận rộn và nhu cầu chăm sóc da tại nhà ngày càng tăng, giải pháp peel da an toàn – hiệu quả – tiện lợi đã trở thành lựa chọn của phụ nữ hiện đại.</div>\n<div></div>\n<div>Toning Peel Program &#8211; Dược mỹ phẩm cao cấp từ Cell Fusion C Expert là minh chứng hoàn hảo cho điều đó. Không cần gây tê, không bong tróc mạnh, không đau rát – chỉ là một quy trình đơn giản, nhẹ nhàng, nhưng đủ sức đánh thức làn da sau mỗi liệu trình.</div>\n<div></div>\n<div>&#8211; Ứng dụng công nghệ NEO-CMS™ độc quyền: Phục hồi hàng rào bảo vệ, tăng khả năng hấp thụ dưỡng chất</div>\n<div>&#8211; Kết hợp PHA, Hydrogen Water, Chiết xuất Vỏ Liễu Trắng: Làm sạch sâu, loại bỏ tế bào cũ mà không gây kích ứng</div>\n<div>&#8211; Niacinamide &amp; Panthenol: Làm dịu, làm sáng, tăng sức đề kháng cho da</div>\n<div>&#8211; Pollustop®: Tạo lớp màng bảo vệ da khỏi ô nhiễm và tác nhân xấu từ môi trường</div>\n<div></div>\n<div>Toning Peel Program không chỉ giúp tái thiết bề mặt da, mà còn giữ lại vẻ trong trẻo, rạng rỡ ban đầu của làn da Việt.</div>\n<div>Làn da đẹp không đến từ sự &#8220;chống chịu&#8221; – mà đến từ sự nuôi dưỡng từ bên trong!</div>",
    "images": [
      {
        "id": 852,
        "src": "/images/products/Tach-Nen-Toning-Peel-Set-5-Week-2-scaled.png",
        "alt": "Cell Fusion C Expert Toning Peel Program"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "3.145.000Đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "– Glycerin Glucoside (6%): Kích hoạt kênh dẫn nước tự nhiên trên da, tăng khả năng cấp ẩm sâu đến từng tế bào. – Gluconolactone (PHA): Hoạt chất peeling chính với cấu trúc phân tử lớn, giúp loại bỏ tế bào chết một cách êm dịu, hạn chế kích ứng và phù hợp cả với làn da nhạy cảm. – Lactic Acid (AHA): AHA tự nhiên với phân tử lớn, cực an toàn, giúp cấp ẩm và làm sạch lớp sừng một cách nhẹ nhàng. – Hydrogen Water: Chống oxy hóa mạnh mẽ, giúp trung hòa gốc tự do, giảm kích ứng và tăng cường cấp ẩm. – Pollustop: Tạo lớp màng bảo vệ giúp da chống lại bụi mịn và các yếu tố ô nhiễm từ môi trường.. – Salmon Complex 53% (DNA & Trứng cá hồi): Cung cấp dưỡng chất cho làn da trông săn chắc, ẩm mượt và tươi tắn hơn. – 7 loại Peptide: Hỗ trợ cải thiện độ đàn hồi, giảm bề mặt khô ráp và tăng cảm giác căng khỏe cho da."
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Bước 1: Sử dụng dung dịch làm mềm tết bào chết và cấp nước Cell Fusion C Expert Toning Peel Booster Sau khi rửa mặt, nhấn 2-3 lần Toning Peel Booster ra bông cotton, thoa đều nhẹ nhàng lên mặt theo chiều cấu tạo da, đặc biệt vùng da khô Bước 2: Peel dịu nhe, làm sáng và đều màu da Cell Fusion C Expert Toning Peel Reactivator sau peel Đổ toàn bộ dung dịch ra bát thủy tinh, dùng cọ thoa đều lên mặt theo chiều cấu tạo da, tránh vùng mắt và môi. Bước 3: Sử dụng mặt nạ bọt khí Hydro Cell Fusion C Expert Toning Peel Reactivator sau Peel Nhấn 3-4 lần Toning Peel Reactivator vào chén thủy tinh, dùng cọ chuyên dụng thoa đều lên toàn bộ khuôn mặt. Khi các bọt khí li ti xuất hiện và bắt đầu vỡ nhẹ trên da. Dùng bông mềm hoặc khăn ấm lau sạch. Bước 4: Kết thúc bước chăm da Thấm Toning Peel Booster ra bông lau nhẹ theo chiều cấu tạo da. Lấy một lượng vừa đủ Salmon Repair Ampoule thoa nhẹ nhàng cho thẩm thấu. Sau đó đắp mặt nạ để làm dịu da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 849,
    "name": "Cell Fusion C Expert Dermagenis pH Biome Gel Cleanser",
    "slug": "dermagenis-ph-biome-gel-cleanser",
    "sku": "HSI-849",
    "short_description": "Đơn giá: 730.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính pHarrier, Nectarbiome, Ectoin, Allantoin & Panthenol (Vitamin B5) Hướng dẫn sử dụng Sau bước tẩy trang, lấy 1 lượng vừa đủ vào lòng bàn tay, tạo bọt và rửa mặt một cách nhẹ nhàng, sau đó rửa sạch bằng nước và tiếp tục các bước dưỡng da theo quy trình.",
    "description": "<p>Cell Fusion C Expert Dermagenis pH Biome Gel Cleanser &#8211; Khi làn da yếu cần một khởi đầu nhẹ nhàng nhưng hiệu quả, sữa rửa mặt pH thấp này chính là lựa chọn an tâm để tái thiết làn da ngay từ bước làm sạch. Nhờ công nghệ pHarrier™ và NectarBiome, sản phẩm giúp cân bằng pH tự nhiên, hỗ trợ củng cố hàng rào bảo vệ da mà không làm mất độ ẩm, điều mà da yếu, dễ kích ứng luôn cần. Cảm giác mềm mại, sạch dịu sau mỗi lần rửa không chỉ mang lại sự dễ chịu, mà còn giúp bạn an tâm rằng da đang được chăm sóc đúng cách, nhẹ nhàng nhưng hiệu quả.</p>",
    "images": [
      {
        "id": 850,
        "src": "/images/products/Tach-Nen-Biome-Gel-Cleanser-210ml-1.png",
        "alt": "Cell Fusion C Expert Dermagenis pH Biome Gel Cleanser"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "730.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "pHarrier, Nectarbiome, Ectoin, Allantoin & Panthenol (Vitamin B5)"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước tẩy trang, lấy 1 lượng vừa đủ vào lòng bàn tay, tạo bọt và rửa mặt một cách nhẹ nhàng, sau đó rửa sạch bằng nước và tiếp tục các bước dưỡng da theo quy trình."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 844,
    "name": "Cell Fusion C Expert Rejuve Sunscreen 100 SPF50+/ PA++++",
    "slug": "cell-fusion-c-expert-rejuve-sunscreen-100-spf50-pa",
    "sku": "HSI-844",
    "short_description": "Đơn giá: 975.000đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính NEO-CMS, Zinc Oxide, Titanium Oxide, EGF & Syn-Akepeptide & Palmitoylpeptide Hướng dẫn sử dụng Sau các bước chăm sóc da, lấy một lượng vừa đủ vỗ nhẹ đều lên da, không thoa và chà xát mạnh. Vỗ nhẹ mang lại hiệu quả bảo vệ da cao hơn. Sử dụng kem chống nắng 30 phút khi tiếp xúc với ánh nắng, nên dùng bổ sung sau mỗi 2 tiếng.",
    "description": "<p>Rejuve Sunscreen 100 SPF50+/ PA++++ là sự kết hợp hoàn hảo giữa kem dưỡng ẩm và màng lọc chống nắng thế hệ mới. Sản phẩm không chỉ tạo lớp khiên vững chắc ngăn chặn tác hại từ tia UV mà còn hỗ trợ phục hồi, mang lại sức sống tươi trẻ cho làn da. Bên cạnh đó, công thức tiên tiến còn giúp ức chế hình thành nám sạm, tăng độ săn chắc, đẩy lùi lão hóa và nâng tông da tự nhiên, rạng rỡ.</p>",
    "images": [
      {
        "id": 847,
        "src": "/images/products/Tach-Nen-Rejuve-Sunscreen-100-50ml-1.png",
        "alt": "Cell Fusion C Expert Rejuve Sunscreen 100 SPF50+/ PA++++"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "975.000đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "NEO-CMS, Zinc Oxide, Titanium Oxide, EGF & Syn-Akepeptide & Palmitoylpeptide"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau các bước chăm sóc da, lấy một lượng vừa đủ vỗ nhẹ đều lên da, không thoa và chà xát mạnh. Vỗ nhẹ mang lại hiệu quả bảo vệ da cao hơn. Sử dụng kem chống nắng 30 phút khi tiếp xúc với ánh nắng, nên dùng bổ sung sau mỗi 2 tiếng."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 842,
    "name": "Barriederm Mild Care Suncream SPF 50+/ PA++++",
    "slug": "barriederm-mild-care-suncream-spf-50-pa",
    "sku": "HSI-842",
    "short_description": "Đơn giá: 770.000Đ Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính Zinc Oxide, Chuỗi Ceramide Dài, Panthenol Hướng dẫn sử dụng Ở bước cuối của chu trình dưỡng da, lấy một lượng vừa phải dùng tay tán và vỗ nhẹ vào da giúp sản phẩm phát huy tối đa công dụng; tránh miết mạnh hay chà xát để lớp màng bảo vệ không bị tổn hại. Hãy thoa kem trước khi ra ngoài khoảng 30 phút và dặm lại định kỳ sau mỗi 2 tiếng nhằm duy trì hiệu quả bảo vệ da tối ưu trước ánh nắng cũng như các tác nhân ô nhiễm. Khuyến cáo: Sản phẩm chỉ dùng ngoài da, tuyệt đối không để dính trực tiếp vào mắt. Nếu xuất hiện bất kỳ biểu hiện kích ứng nào, cần ngưng dùng sản phẩm ngay lập tức.",
    "description": "<p>Kem chống nắng Cell Fusion C Expert Barriederm Mild Care SPF 50+/PA++++ sở hữu màng lọc 100% khoáng chất (vật lý), mang lại khả năng bảo vệ tối ưu cho làn da trước các tác nhân gây hại như tia UVA, UVB cùng ánh sáng xanh. Nhờ bảng thành phần lành tính, sản phẩm đặc biệt thân thiện với mọi thành viên trong nhà, kể cả phụ nữ mang thai hay làn da mỏng manh của trẻ nhỏ. Không dừng lại ở công dụng chống nắng, kem còn hỗ trợ cấp nước, nuôi dưỡng bề mặt da mềm mại và củng cố vững chắc lớp màng bảo vệ tự nhiên.</p>",
    "images": [
      {
        "id": 886,
        "src": "/images/products/Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-5.png",
        "alt": "Barriederm Mild Care Suncream SPF 50+/ PA++++"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "770.000Đ"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "Zinc Oxide, Chuỗi Ceramide Dài, Panthenol"
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Ở bước cuối của chu trình dưỡng da, lấy một lượng vừa phải dùng tay tán và vỗ nhẹ vào da giúp sản phẩm phát huy tối đa công dụng; tránh miết mạnh hay chà xát để lớp màng bảo vệ không bị tổn hại. Hãy thoa kem trước khi ra ngoài khoảng 30 phút và dặm lại định kỳ sau mỗi 2 tiếng nhằm duy trì hiệu quả bảo vệ da tối ưu trước ánh nắng cũng như các tác nhân ô nhiễm. Khuyến cáo: Sản phẩm chỉ dùng ngoài da, tuyệt đối không để dính trực tiếp vào mắt. Nếu xuất hiện bất kỳ biểu hiện kích ứng nào, cần ngưng dùng sản phẩm ngay lập tức."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 827,
    "name": "Cell Fusion C Low Ph pHarrier Mask",
    "slug": "cell-fusion-c-expert-low-ph-pharrier-mask",
    "sku": "HSI-827",
    "short_description": "Đơn giá: 550.000Đ/ hộp Làn da phù hợp Mọi loại da Hãng sản xuất Cell Fusion C Expert Xuất xứ Hàn Quốc Thành phần chính – Triple Moisturising (Betaine, Ectoin, Glyceryl Glucoside): Cấp ẩm vào trong các tế bào da ở dưới biểu bì, giữ cho da luôn ngậm nước và căng mướt. – pHarrier™: Cải thiện độ pH của da & hình thành hàng rào axit yếu. Hướng dẫn sử dụng Sau bước làm sạch và cân bằng da, lấy mặt nạ đắp đều lên khuôn mặt và căn chỉnh cho ôm khít. Thư giãn từ 20 đến 30 phút rồi gỡ bỏ, sau đó vỗ nhẹ hoặc massage để tinh chất thẩm thấu hoàn toàn vào da.",
    "description": "<p>Cell Fusion C Low pH pHarrier Mask giúp da trở nên mịn màng. Với thành phần độc quyền pHarrier của Cell Fusion C giúp duy trì độ pH từ 4,5-5,5 từ đó hỗ trợ tăng cường hàng rào bảo vệ da và giúp da khoẻ hơn mỗi ngày.</p>",
    "images": [
      {
        "id": 828,
        "src": "/images/products/Tach-nen-Low-Mask-27g-scaled.png",
        "alt": "Cell Fusion C Low Ph pHarrier Mask"
      }
    ],
    "categories": [
      {
        "id": 123,
        "name": "Dược Mỹ Phẩm",
        "slug": "duoc-my-pham"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "550.000Đ/ hộp"
        ]
      },
      {
        "name": "Làn da phù hợp",
        "options": [
          "Mọi loại da"
        ]
      },
      {
        "name": "Hãng sản xuất",
        "options": [
          "Cell Fusion C Expert"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Hàn Quốc"
        ]
      },
      {
        "name": "Thành phần chính",
        "options": [
          "– Triple Moisturising (Betaine, Ectoin, Glyceryl Glucoside): Cấp ẩm vào trong các tế bào da ở dưới biểu bì, giữ cho da luôn ngậm nước và căng mướt. – pHarrier™: Cải thiện độ pH của da & hình thành hàng rào axit yếu."
        ]
      },
      {
        "name": "Hướng dẫn sử dụng",
        "options": [
          "Sau bước làm sạch và cân bằng da, lấy mặt nạ đắp đều lên khuôn mặt và căn chỉnh cho ôm khít. Thư giãn từ 20 đến 30 phút rồi gỡ bỏ, sau đó vỗ nhẹ hoặc massage để tinh chất thẩm thấu hoàn toàn vào da."
        ]
      }
    ],
    "manufacturer": "Cell Fusion C Expert",
    "origin": "Hàn Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 824,
    "name": "Translumina Vivo Isar Stent",
    "slug": "translumina-vivo-isar-stent",
    "sku": "VIVO-ISAR",
    "short_description": "Sản phẩm y tế chính hãng HSI Corp.",
    "description": "<h3>Đơn giá: <strong>Liên hệ</strong></h3>\n<table style=\"width: 100%;border-collapse: collapse;margin: 10px 0;font-size: 14px\">\n<tbody>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Model</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Hãng sản xuất</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Xuất xứ</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Công suất</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Công nghệ</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n</tbody>\n</table>",
    "images": [
      {
        "id": 825,
        "src": "/images/products/stents-drug-eluting.webp",
        "alt": "Translumina Vivo Isar Stent"
      }
    ],
    "categories": [
      {
        "id": 122,
        "name": "Tim mạch",
        "slug": "tim-mach"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 822,
    "name": "Nit-Occlud ® Lê VSD",
    "slug": "nit-occlud-le-vsd",
    "sku": "NIT-OCCLUD",
    "short_description": "Sản phẩm y tế chính hãng HSI Corp.",
    "description": "<h3>Đơn giá: <strong>Liên hệ</strong></h3>\n<table style=\"width: 100%;border-collapse: collapse;margin: 10px 0;font-size: 14px\">\n<tbody>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Model</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Hãng sản xuất</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Xuất xứ</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Công suất</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n<tr>\n<td style=\"padding: 7px 10px;background: #faf2f2;border: 1px solid #f0dada;font-weight: bold;color: #c8102e;width: 38%\">Công nghệ</td>\n<td style=\"padding: 7px 10px;border: 1px solid #f0dada\"></td>\n</tr>\n</tbody>\n</table>",
    "images": [
      {
        "id": 823,
        "src": "/images/products/csm_nit-occlud-le-vsd_39de571f74.jpg",
        "alt": "Nit-Occlud ® Lê VSD"
      }
    ],
    "categories": [
      {
        "id": 122,
        "name": "Tim mạch",
        "slug": "tim-mach"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 813,
    "name": "IMAGINA Video Processor (EPK-i5500c)",
    "slug": "imagina-video-processor-epk-i5500c",
    "sku": "EPK-i5500c",
    "short_description": "Cung cấp hình ảnh chất lượng Full HD (1920&#215;1080) Màn hình điều khiển cảm ứng Công nghệ đèn LED kết hợp cùng cảm biến CMOS cho hình ảnh chất lượng cao Công ...",
    "description": "<p>Cung cấp hình ảnh chất lượng Full HD (1920&#215;1080)<br />\nMàn hình điều khiển cảm ứng<br />\nCông nghệ đèn LED kết hợp cùng cảm biến CMOS cho hình ảnh chất lượng cao<br />\nCông nghệ nội soi nhuộm màu i-scan mang lại lợi ích lâm sàng trong phát hiện, chẩn đoán và can thiệp các tổn thương ung thư sớm<br />\nCó kết nối DICOM cho phép truyền hình ảnh đến máy tính qua hệ thống mạng<br />\nTích hợp chức năng ghi video, hình ảnh để xem lại ngay trên máy nội soi cũng như lưu trữ lên thiết bị nhớ ngoài USB<br />\nCó khả năng lưu trữ lên đến 1000 thủ thuật</p>",
    "images": [
      {
        "id": 814,
        "src": "/images/products/5500-1-scaled.jpg",
        "alt": "IMAGINA Video Processor (EPK-i5500c)"
      }
    ],
    "categories": [
      {
        "id": 78,
        "name": "Nội soi can thiệp tiêu hóa",
        "slug": "noi-soi-can-thiep-tieu-hoa"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 811,
    "name": "Bộ xử lý hình ảnh nội soi 4K (EPK-i8020c)",
    "slug": "bo-xu-ly-hinh-anh-noi-soi-4k-epk-i8020c",
    "sku": "EPK-i8020c",
    "short_description": "Chất lượng hình ảnh nội soi lên đến 4K (3840&#215;2160) Giao diện màn hình cảm ứng, trực quan, với menu có thể tùy chỉnh được cho việc tối ưu hóa quy trình, ghi...",
    "description": "<p>Chất lượng hình ảnh nội soi lên đến 4K (3840&#215;2160)<br />\nGiao diện màn hình cảm ứng, trực quan, với menu có thể tùy chỉnh được cho việc tối ưu hóa quy trình, ghi thông tin bệnh nhân, thu thập hình ảnh nội soi<br />\nCông nghệ chiếu sáng LED với 5 thành phần đơn sắc, cho phép nội soi nhuộm màu đa chế độ và nội soi ánh sáng trắng<br />\nTương thích với các dây soi sử dụng cảm biến CCD và CMOS<br />\nCông nghệ nội soi nhuộm màu i-scan và OE mang lại lợi ích lâm sàng trong phát hiện, chẩn đoán và can thiệp các tổn thương ung thư sớm<br />\nHệ thống tích hợp sẵn DICOM<br />\nTích hợp chức năng ghi video, hình ảnh để xem lại ngay trên máy nội soi cũng như lưu trữ lên thiết bị nhớ ngoài USB</p>",
    "images": [
      {
        "id": 812,
        "src": "/images/products/8020-1.png",
        "alt": "Bộ xử lý hình ảnh nội soi 4K (EPK-i8020c)"
      }
    ],
    "categories": [
      {
        "id": 78,
        "name": "Nội soi can thiệp tiêu hóa",
        "slug": "noi-soi-can-thiep-tieu-hoa"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 794,
    "name": "Giải pháp thay khớp nhân tạo",
    "slug": "giai-phap-thay-khop-nhan-tao",
    "sku": "HSI-794",
    "short_description": "Thông tin sản phẩm đang được cập nhật!...",
    "description": "<p>Thông tin sản phẩm đang được cập nhật!</p>",
    "images": [
      {
        "id": 882,
        "src": "/images/products/Do-va-Vang-Hien-dai-Nghe-thuat-Ca-nhan-hoa-Sticker-hinh-vuong-1.png",
        "alt": "Giải pháp thay khớp nhân tạo"
      }
    ],
    "categories": [
      {
        "id": 68,
        "name": "Chấn thương chỉnh hình",
        "slug": "chan-thuong-chinh-hinh"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 782,
    "name": "Dây dẫn hướng sử dụng một lần",
    "slug": "day-dan-huong-su-dung-mot-lan-anrei",
    "sku": "GW-SxxxxG",
    "short_description": "Hãng sản xuất: Anrei Medical (HZ) Co.,Ltd Xuất xứ: Trung Quốc",
    "description": "<p><span style=\"font-family: arial, helvetica, sans-serif\">Dây dẫn hướng sử dụng trong nội soi. Bề mặt nhẵn mịn và có hai màu kết hợp để có thể dễ dàng quan sát.</span></p>\n<p><span style=\"font-family: arial, helvetica, sans-serif\">Thiết kế đầu cản quang, có thể nhìn thấy dưới tia X, có 5 kiểu thiết kế: một đầu thẳng, một đầu gập, hai đầu gập, hai đầu thẳng, hai đầu gập &#8211; thẳng.</span></p>\n<p><span style=\"font-family: arial, helvetica, sans-serif\">Đường kính 0,018 inch/0,021 inch/0,025 inch/0,035 inch/0,038 inch.</span></p>\n<p><span style=\"font-family: arial, helvetica, sans-serif\">Chiều dài dây dẫn 260cm/450cm/500cm.</span></p>",
    "images": [
      {
        "id": 783,
        "src": "/images/products/16848056156926ioac9.jpeg",
        "alt": "Dây dẫn hướng sử dụng một lần"
      }
    ],
    "categories": [
      {
        "id": 84,
        "name": "Dụng cụ can thiệp ERCP",
        "slug": "dung-cu-can-thiep-ercp"
      },
      {
        "id": 78,
        "name": "Nội soi can thiệp tiêu hóa",
        "slug": "noi-soi-can-thiep-tieu-hoa"
      }
    ],
    "attributes": [
      {
        "name": "Hãng sản xuất",
        "options": [
          "Anrei Medical (HZ) Co.,Ltd"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Trung Quốc"
        ]
      }
    ],
    "manufacturer": "Anrei Medical (HZ) Co.,Ltd",
    "origin": "Trung Quốc",
    "warranty": "12 - 24 tháng",
    "featured": false
  },
  {
    "id": 663,
    "name": "Giải pháp Đinh-Nẹp-Vít kết hợp xương",
    "slug": "giai-phap-dinh-nep-vit-ket-hop-xuong",
    "sku": "SP1",
    "short_description": "Mô tả sản phẩm 1 (Proximal humerus plate) Tên: Nẹp khóa đầu trên xương cánh tay Chất liệu: Titanium Sử dụng với vít có đường kính 3,5mm Mô tả sản phẩm 2 (One-th...",
    "description": "<h3>Mô tả sản phẩm 1 (Proximal humerus plate)</h3>\n<ul>\n<li>Tên: Nẹp khóa đầu trên xương cánh tay</li>\n<li>Chất liệu: Titanium</li>\n<li>Sử dụng với vít có đường kính 3,5mm</li>\n</ul>\n<h3>Mô tả sản phẩm 2 (One-third tubular plate)</h3>\n<ul>\n<li>Tên: Nẹp khóa lòng máng 1/3</li>\n<li>Chất liệu: Titanium</li>\n<li>Sử dụng với vít có đường kính 3,5mm</li>\n</ul>",
    "images": [
      {
        "id": 764,
        "src": "/images/products/Group-1597883390.png",
        "alt": "Giải pháp Đinh-Nẹp-Vít kết hợp xương"
      }
    ],
    "categories": [
      {
        "id": 68,
        "name": "Chấn thương chỉnh hình",
        "slug": "chan-thuong-chinh-hinh"
      }
    ],
    "attributes": [
      {
        "name": "Đơn giá tham khảo",
        "options": [
          "Liên hệ"
        ]
      },
      {
        "name": "Xuất xứ",
        "options": [
          "Công suất Công nghệ"
        ]
      }
    ],
    "manufacturer": "HSI Corp Phân Phối",
    "origin": "Công suất Công nghệ",
    "warranty": "12 - 24 tháng",
    "featured": false
  }
];
