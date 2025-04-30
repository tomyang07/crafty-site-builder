
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const ProductsPage = () => {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const filteredProducts = categoryFilter 
    ? products.filter(product => product.category === categoryFilter)
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom py-12">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          
          {/* Category filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter(null)}
                className={`px-4 py-1 rounded-full text-sm ${
                  categoryFilter === null
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-1 rounded-full text-sm ${
                    categoryFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
