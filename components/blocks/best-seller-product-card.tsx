import Image from "next/image";
import React from "react";

const BestSellerProductCard = ({ image }: { image: string }) => {
  return (
    <div className="max-w-60 mx-auto">
      <div className="relative bg-white h-72">
        <Image className="object-contain" src={image} alt="product" fill />
      </div>
      <div className="p-6 space-y-2.5">
        <h5 className="text-base font-bold">Graphic Design</h5>
        <p className="text-sm text-neutral-500 font-bold">English Department</p>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-[#BDBDBD]">$16.48</span>
          <span className="text-base font-bold text-[#23856D]">$6.48</span>
        </div>
      </div>
    </div>
  );
};

export default BestSellerProductCard;
