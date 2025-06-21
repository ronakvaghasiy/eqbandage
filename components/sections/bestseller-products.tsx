import React from "react";
import BestSellerProductCard from "../blocks/best-seller-product-card";
import RedditIcon from "@/public/assets/reddit.svg";
import HooliIcon from "@/public/assets/hooli.svg";
import LyftIcon from "@/public/assets/lyft.svg";
import BrandsIcon from "@/public/assets/brands.svg";
import StripeIcon from "@/public/assets/stripe.svg";
import AmazonIcon from "@/public/assets/aws.svg";
import Image from "next/image";

const BestSellerProducts = () => {
  return (
    <section className="py-12 bg-zinc-50">
      <div className="container mx-auto px-10">
        <div>
          <h3 className="text-2xl font-bold">Best Seller Products</h3>
          <div className="h-px my-6 w-full bg-gray-200"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <BestSellerProductCard
                key={index}
                image={`/assets/best-seller-${index + 1}.jpg`}
              />
            ))}
          </div>
        </div>
        <div className="pt-24 flex items-center justify-between">
          <div className="relative w-36 h-8 max-h-[72px]">
            <Image
              fill
              src={HooliIcon}
              alt="hooli"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
          <div className="relative w-36 h-14 max-h-[72px]">
            <Image
              fill
              src={LyftIcon}
              alt="lyft"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
          <div className="relative w-36 h-18 max-h-[72px]">
            <Image
              fill
              src={BrandsIcon}
              alt="brands"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
          <div className="relative w-36 h-10 max-h-[72px]">
            <Image
              fill
              src={StripeIcon}
              alt="stripe"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
          <div className="relative w-36 h-16 max-h-[72px]">
            <Image
              fill
              src={AmazonIcon}
              alt="amazon"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
          <div className="relative w-36 h-18 max-h-[72px]">
            <Image
              fill
              src={RedditIcon}
              alt="reddit"
              className="transition-all cursor-pointer duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerProducts;
