import Image from "next/image";
import React from "react";
import MostPopular from "../blocks/most-popular";

const MostPopularSection2 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3">
          <MostPopular
            image="/assets/most-popular-item-2.jpg"
            title="English Department"
            sales={15}
            showColors
          />

          <div className="relative md:col-span-2 min-h-[649px]">
            <Image
              src="/assets/most-popular-2.jpg"
              alt="most popular"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopularSection2;
