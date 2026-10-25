import React from 'react';
import { getProducts, getProductCategories } from '@/lib/api/products';
import { getPosts } from '@/lib/api/wordpress';
import HomeView from '@/components/home/HomeView';

export default async function Home() {
  const [products, categories, posts] = await Promise.all([
    getProducts({ perPage: 6 }),
    getProductCategories(),
    getPosts(3),
  ]);

  return <HomeView products={products} categories={categories} posts={posts} />;
}
