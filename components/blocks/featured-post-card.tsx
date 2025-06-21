import { AlarmClockIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import ChartIcon from "@/public/assets/chart.svg";
const FeaturedPostCard = ({ image }: { image: string }) => {
  return (
    <div className="shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-72">
        <Image src={image} alt="featured post" className="object-cover" fill />
      </div>
      <div className="p-6 space-y-2.5">
        <div className="flex text-xs font-normal items-center gap-4">
          <p className="text-primary">Google</p>
          <p className="text-neutral-500">Trending</p>
          <p className="text-neutral-500">New</p>
        </div>
        <h4 className="text-xl font-normal">
          Loudest à la Madison #1 (L&apos;integral)
        </h4>
        <p className="text-sm text-neutral-500">
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </p>
        <div className="py-4 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-1.5">
            <AlarmClockIcon className="size-4 text-primary" />
            <p className="text-xs text-neutral-500">22 April 2021</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Image src={ChartIcon} alt="chart" className="size-4" />
            <p className="text-xs text-neutral-500">22 April 2021</p>
          </div>
        </div>
        <div className="flex items-center gap-1 group cursor-pointer">
          <h6 className="text-sm font-normal">Learn More</h6>
          <ChevronRightIcon className="size-5  text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostCard;
