"use client";
import React from "react";
import Image from "next/image";
import BestsellerProductSection from "./bestseller-product-section";
import useGetProducts from "@/hooks/use-get-products";

const FurnitureSection1 = () => {
  const { products, loading, error } = useGetProducts();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative  min-h-[649px]">
            <Image fill src="/assets/furniture-1.jpg" alt="furniture" />
            <div className="px-12 py-6  z-20  relative space-y-1.5">
              <h6 className="text-sm font-bold">FURNITURE</h6>
              <h2 className="text-neutral-500 font-bold">
                {products.total || 0} Items
              </h2>
            </div>
          </div>
          <div className="md:col-span-2">
            <BestsellerProductSection
              loading={loading}
              error={error}
              products={products?.products || []}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection1;
