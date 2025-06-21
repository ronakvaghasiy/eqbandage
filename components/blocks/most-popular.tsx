import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const MostPopular = ({
  image,
  title,
  sales,
  showColors,
}: {
  image: string;
  title: string;
  sales?: number;
  showColors?: boolean;
}) => {
  return (
    <div className="py-20 flex flex-col items-center justify-center gap-5 px-6 bg-zinc-50">
      <h3 className="text-2xl font-bold">MOST POPULAR</h3>
      <p className="text-center text-neutral-500 lg:px-10">
        We focus on ergonomics and meeting you where you work. It&apos;s only a
        keystroke away.
      </p>
      <div className="my-9 h-64 bg-white w-full relative">
        <Image
          src={image}
          alt="most popular"
          className="object-contain bg-white"
          fill
        />
      </div>
      <p className="text-sm font-bold">{title}</p>
      {sales && (
        <div className="flex items-center gap-2">
          <DownloadIcon className="size-4" />
          <span className="text-sm font-bold text-neutral-500">
            {sales} sales
          </span>
        </div>
      )}
      <div className="flex justify-center items-center gap-2">
        <span className="text-base font-bold text-[#BDBDBD]">$16.48</span>
        <span className="text-base font-bold text-[#23856D]">$6.48</span>
      </div>
      {showColors && (
        <div className="flex items-center gap-2">
          {["primary", "chart-2", "chart-3", "foreground"].map(
            (className, index) => (
              <div
                key={`color-${index}`}
                className={`w-4 h-4 bg-${className} rounded-full`}
              ></div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MostPopular;
