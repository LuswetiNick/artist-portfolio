import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { productData } from "@/data/showcase-data";

export default function Shop() {
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
            Art Shop
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Discover and inquire about original paintings and high-quality
            prints. Contact us directly via WhatsApp for personalized
            assistance.
          </p>

          {productData.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {productData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
