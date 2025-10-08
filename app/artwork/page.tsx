import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { productData } from "@/data/showcase-data";
import type { Product } from "@/data/showcase-data";

export default function Artwork() {
  // Filter out Pots since they don't have detail pages
  const fullProducts = productData.filter((product): product is Product => 'title' in product);
  
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>
        <div className="space-y-4 text-center">
          <h1 className="text-balance font-bold text-4xl md:text-5xl">
            The Art
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />

          {fullProducts.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {fullProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>No artwork found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
