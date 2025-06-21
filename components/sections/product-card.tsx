import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type ProductCardProps = {
  image: string;
  title: string;
  department: string;
  originalPrice: number;
  discountedPrice: number;
};

const ProductCard = ({
  image,
  title,
  department,
  originalPrice,
  discountedPrice,
}: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-none border-0 text-center">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={200}
          height={162}
          className="object-cover mx-auto"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-base font-bold">{title}</CardTitle>
        <CardDescription className="text-sm font-bold text-neutral-500 mt-2">
          {department}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-2">
        <span className="text-base font-bold text-neutral-400">
          ${originalPrice.toFixed(2)}
        </span>
        <span className="text-base font-bold text-[#23856D]">
          ${discountedPrice.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
