import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const ProductCardSkeleton = () => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-none border-0 text-center">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-[162px]" />
      </CardHeader>
      <CardContent className="p-6 space-y-2">
        <Skeleton className="h-4 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </CardContent>
      <CardFooter className="flex justify-center items-center gap-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
