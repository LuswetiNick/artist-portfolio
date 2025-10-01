import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/showcase-data";
import { ImageModal } from "./ImageModal";

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
            <Link href="/artwork">
              <ArrowLeft className="h-4 w-4" />
              Back to artwork
            </Link>
          </Button>
        </div>
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="space-y-4">
                <ImageModal alt={product.title} src={product.image} />
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-balance font-bold font-ojuju text-3xl md:text-4xl">
                        {product.title}
                      </h1>
                      <p className="mt-2 text-lg text-muted-foreground">
                        {product.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price and Purchase */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge
                      className="border-green-600 text-green-600"
                      variant="outline"
                    >
                      {product.available ? "Available" : "Sold Out"}
                    </Badge>
                  </div>

                  {/* <div className="flex gap-4">
										<Button
											className="flex-1"
											disabled={!product.available}
											size="lg"
										>
											<MessageCircle className="size-4" />
											Inquire About This Piece
										</Button>
									</div> */}
                </div>

                <Separator />

                {/* Specifications */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl">Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Materials:</span>
                      <p className="font-medium">{product.materials}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{product.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year:</span>
                      <p className="font-medium">{product.year}</p>
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
