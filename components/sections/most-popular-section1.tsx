import Image from "next/image";
import React from "react";
import MostPopular from "../blocks/most-popular";

const MostPopularSection1 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3">
          <div className="relative md:col-span-2 min-h-[649px]">
            <Image
              src="/assets/most-popular-1.jpg"
              alt="most popular"
              className="object-cover"
              fill
            />
          </div>
          <MostPopular
            image="/assets/most-popular-item.jpg"
            title="Easy to use"
          />
        </div>
        <div className="pt-7 flex-col lg:flex-row flex items-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={`most-popular-${index}`}
              className="p-6 flex items-center gap-5"
            >
              <h2 className="text-4xl font-bold text-destructive">
                {index + 1}.
              </h2>
              <div className="space-y-1">
                <h6 className="text-sm font-bold">Easy to use</h6>
                <p className="text-xs font-normal text-neutral-500">
                  Things on a very small that you have any direct
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularSection1;
