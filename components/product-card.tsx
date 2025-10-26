"use client";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Card } from "./ui/card";

interface SanityArtwork {
  _id: string;
  title: string;
  description: string;
  image: any; // Sanity image object
}

interface ProductCardProps {
  product: SanityArtwork;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.image
    ? urlFor(product.image).width(800).height(600).url()
    : "/placeholder.svg";

  return (
    <Card className="group cursor-pointer overflow-hidden p-0 transition-all duration-300 hover:shadow-lg">
      <Link href={`/artwork/${product._id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            height={500}
            src={imageUrl}
            width={500}
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="space-y-4">
          <Link href={`/artwork/${product._id}`}>
            <h3 className="font-ojuju font-semibold text-lg leading-tight transition-colors group-hover:text-primary">
              {product.title}
            </h3>
          </Link>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {product.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
