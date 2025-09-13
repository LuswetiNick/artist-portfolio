import { ArrowLeft, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/showcase-data";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);
  if (!product) {
    notFound();
  }
  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>
        </div>
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    alt={product.title}
                    className="h-full w-full object-cover"
                    height={1000}
                    src={product.imageUrl}
                    width={1000}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-balance font-bold text-3xl md:text-4xl">
                        {product.title}
                      </h1>
                      <p className="mt-2 text-lg text-muted-foreground">
                        {product.year}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        product.type === "original" ? "default" : "secondary"
                      }
                    >
                      {product.type === "original"
                        ? "Original Artwork"
                        : "High-Quality Print"}
                    </Badge>
                  </div>

                  <p className="text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Purchase */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="ml-2 text-lg text-muted-foreground">
                        KES {product.price.toLocaleString()}
                      </span>
                    </div>
                    <Badge
                      className="border-green-600 text-green-600"
                      variant="outline"
                    >
                      {product.available ? "Available" : "Sold Out"}
                    </Badge>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      className="flex-1"
                      disabled={!product.available}
                      size="lg"
                    >
                      <MessageCircle className="size-4" />
                      Inquire About This Piece
                    </Button>
                  </div>

                  <p className="text-center text-muted-foreground text-sm">
                    Send us a message via WhatsApp to discuss pricing,
                    availability, and shipping options
                  </p>
                </div>

                <Separator />

                {/* Specifications */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Medium:</span>
                      <p className="font-medium">{product.medium}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{product.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year:</span>
                      <p className="font-medium">{product.year}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <p className="font-medium capitalize">{product.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
