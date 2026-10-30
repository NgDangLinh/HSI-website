import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ConsultationProvider } from "@/components/common/ConsultationProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hsicorp.com.vn'),
  title: "HSI Corp | Giải Pháp Đầu Tư & Phân Phối Thiết Bị Y Tế Toàn Diện",
  description:
    "Cổng thông tin & giới thiệu thiết bị y tế công nghệ cao HSI Corp. Chuyên tư vấn giải pháp tài chính y tế, xã hội hóa bệnh viện và cung ứng trang thiết bị y sinh chính hãng trên toàn quốc.",
  keywords: [
    "HSI Corp",
    "thiết bị y tế",
    "xã hội hóa y tế",
    "nội soi can thiệp",
    "dụng cụ ERCP",
    "chấn thương chỉnh hình",
    "đầu tư y tế",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-[#006543] selection:text-white">
        <LanguageProvider>
          <ConsultationProvider>
            <Header />
            <div className="flex-1 flex flex-col">{children}</div>
            <Footer />
          </ConsultationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
