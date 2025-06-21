import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type OfferCardProps = {
  category: string;
  title: string;
  link: string;
  href: string;
  image: string;
};

const OfferCard = ({ category, title, link, href, image }: OfferCardProps) => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <CardContent className="p-0 h-60 flex items-center relative">
        <div className="transform p-6 transition-transform duration-500 group-hover:-translate-y-4 z-20">
          <p className="text-sm font-normal">{category}</p>
          <h3 className="text-2xl max-w-16 font-bold leading-tight mt-4">
            {title}
          </h3>
          <Link
            href={href}
            className="text-sm mt-6 inline-block border-b-2 border-transparent hover:border-primary transition-all"
          >
            {link}
          </Link>
        </div>
        <Image
          fill
          src={image}
          alt={title}
          className="object-contain ml-20 absolute z-10"
        />
      </CardContent>
    </Card>
  );
};

export default OfferCard;
