import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImageModal } from "@/components/image-modal";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/showcase-data";
import { productData } from "@/data/showcase-data";

export default function Artwork({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;

  const fullProducts = productData.filter(
    (product): product is Product => "title" in product
  );

  const title = category ? category : "The Art";

  const filteredFullProducts = category
    ? fullProducts.filter((p) => p.category === category)
    : fullProducts;

  const potProducts =
    category === "Pots"
      ? productData.filter((p) => p.category === "Pots" && !("title" in p))
      : [];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost">
          <Link href="/#showcase">
            <ArrowLeft className="size-4" />
            Back to The Art
          </Link>
        </Button>
        <div className="space-y-4 text-center">
          <h1 className="text-balance font-bold font-ojuju text-4xl md:text-5xl">
            {title}
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />

          {/* Render pot products differently since they don't have detail pages */}
          {category === "Pots" ? (
            potProducts.length > 0 ? (
              <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {potProducts.map((item) => (
                  <ImageModal
                    alt={`Pot ${item.id}`}
                    key={item.id}
                    src={item.image}
                  >
                    <div className="group relative transform cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                      <Image
                        alt={`Pot ${item.id}`}
                        className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        height={500}
                        src={item.image}
                        width={500}
                      />
                    </div>
                  </ImageModal>
                ))}
              </div>
            ) : (
              <p>No pots found.</p>
            )
          ) : filteredFullProducts.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredFullProducts.map((product) => (
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
