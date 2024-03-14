import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <Card className="flex h-full max-w-[160px] flex-col justify-around sm:max-w-none">
        <CardHeader className="flex items-center justify-center p-1">
          <Image
            src={urlForImage(product.images)}
            width={200}
            height={200}
            alt={product.name}
            loading="lazy"
            className="rounded-md object-cover"
          />
        </CardHeader>
        <CardContent className="p-2 pt-0">
          <CardTitle className="line-clamp-2 text-sm font-medium leading-tight sm:max-w-[180px] sm:text-base sm:leading-tight">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm">
            {product.category.name}
          </CardDescription>
        </CardContent>
        <CardFooter className="w-full p-2 pt-0">
          <p className="font-medium text-primary">₹ {product.price}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}