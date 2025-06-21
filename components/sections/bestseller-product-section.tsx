"use client";

import React, { useState, useMemo, useEffect } from "react";
import ProductCard from "./product-card";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { Product } from "@/hooks/use-get-products";
import ProductCardSkeleton from "./product-card-skeleton";

const BestsellerProductSection = ({
  products,
  loading,
  error,
}: {
  products: Product[];
  loading: boolean;
  error: Error | null;
}) => {
  const groupedProducts = useMemo(() => {
    if (!products) return {};
    return products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as Record<string, Product[]>);
  }, [products]);

  const categories = useMemo(
    () => Object.keys(groupedProducts),
    [groupedProducts]
  );

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const productsInCategory = groupedProducts[selectedCategory] || [];
  const totalPages = Math.ceil(productsInCategory.length / 6);
  const paginatedProducts = productsInCategory.slice(
    currentPage * 6,
    (currentPage + 1) * 6
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) {
    return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 text-center text-red-500">
          Error: {error.message}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-1 justify-between">
          <h5 className="text-base font-bold text-gray-800 dark:text-white">
            BESTSELLER PRODUCTS
          </h5>
          <div className="flex items-center flex-wrap">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-5 py-2.5 text-sm font-bold cursor-pointer transition-colors capitalize ${
                  selectedCategory === category
                    ? "text-primary"
                    : "text-neutral-500 hover:text-primary"
                }`}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="flex font-normal items-center gap-4">
            <ChevronLeftCircle
              onClick={handlePrevPage}
              className={`size-12 stroke-1 cursor-pointer ${
                currentPage === 0
                  ? "text-neutral-300 pointer-events-none"
                  : "text-neutral-500 hover:text-primary"
              }`}
            />
            <ChevronRightCircle
              onClick={handleNextPage}
              className={`size-12 stroke-1 cursor-pointer ${
                currentPage >= totalPages - 1
                  ? "text-neutral-300 pointer-events-none"
                  : "text-neutral-500 hover:text-primary"
              }`}
            />
          </div>
        </div>
        <div className="h-px bg-zinc-200 my-2.5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  department={product.category}
                  image={product.thumbnail}
                  discountedPrice={product.price}
                  originalPrice={
                    product.price / (1 - product.discountPercentage / 100)
                  }
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellerProductSection;
