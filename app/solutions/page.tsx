import React from 'react';
import SolutionsView from '@/components/solutions/SolutionsView';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Giải Pháp Đầu Tư Tổng Thể | HSI Corp',
  description:
    'Tư vấn giải pháp tài chính, cho thuê thiết bị y tế, bán thiết bị trả chậm, đối tác công tư PPP, cung cấp thiết bị kỹ thuật cao và hợp tác xây dựng quản lý bệnh viện.',
};

export default function SolutionsPage() {
  return <SolutionsView />;
}
