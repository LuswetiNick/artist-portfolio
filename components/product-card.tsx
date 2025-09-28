"use client";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/showcase-data";
import { WhatsappDialog } from "./responsive-dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ProductCardProps {
  product: Product;
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

          {/* {product.price && (
            <div className="absolute top-3 right-3">
              <Badge variant="destructive">
                KES {product.price.toLocaleString()}
              </Badge>
            </div>
          )} */}
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="space-y-2">
          <Link href={`/artwork/${product.id}`}>
            <h3 className="font-semibold text-lg leading-tight transition-colors group-hover:text-primary">
              {product.title}
            </h3>
          </Link>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* <WhatsappDialog product={product}>
            <Button disabled={!product.available} variant="outline">
              <MessageCircle className="size-4" />
              {product.available ? "Inquire" : "Sold Out"}
            </Button>
          </WhatsappDialog> */}
        </div>
      </div>
    </Card>
  );
}
