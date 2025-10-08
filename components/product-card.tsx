"use client";
import Image from "next/image";
import Link from "next/link";
import type { Product, ShowcaseProduct } from "@/data/showcase-data";
import { Card } from "./ui/card";

interface ProductCardProps {
  product: Product; // Only accept full Product, not PotProduct
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden p-0 transition-all duration-300 hover:shadow-lg">
      <Link href={`/artwork/${product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            height={500}
            src={product.image || "/placeholder.svg"}
            width={500}
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="space-y-4">
          <Link className="text-left" href={`/artwork/${product.id}`}>
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
