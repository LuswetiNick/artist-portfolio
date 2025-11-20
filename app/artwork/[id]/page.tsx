import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/seo";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { artworksQuery } from "@/sanity/lib/queries";
import { ImageModal } from "./ImageModal";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const { data: artworks } = await sanityFetch({ query: artworksQuery });
  const product = artworks?.find((item) => item._id === id);
  if (!product) {
    return { title: "Artwork not found" } as Metadata;
  }
  const imageUrl = product.image
    ? urlFor(product.image).width(1200).url()
    : undefined;
  return buildMetadata({
    title: product.title || undefined,
    description: product.description || undefined,
    pathname: `/artwork/${product._id}`,
    image: imageUrl,
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Fetch all artworks from Sanity
  const { data: artworks } = await sanityFetch({ query: artworksQuery });

  // Try to find the artwork by _id
  const product = artworks?.find((item) => item._id === id);

  if (!product) {
    notFound();
  }

  const fullProduct = product;

  // Check if image exists
  if (!fullProduct.image) {
    notFound();
  }

  const imageUrl = urlFor(fullProduct.image).width(1200).url();

  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link
              href={`/artwork?category=${encodeURIComponent(fullProduct.category || "")}`}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {fullProduct.category}
            </Link>
          </Button>
        </div>
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="space-y-4">
                <ImageModal alt={fullProduct.title || "Artwork"} src={imageUrl}>
                  <div className="cursor-pointer">
                    <Image
                      alt={fullProduct.title || "Artwork"}
                      className="w-full rounded-lg object-cover"
                      height={500}
                      src={imageUrl}
                      style={{ aspectRatio: "1/1" }}
                      width={500}
                    />
                  </div>
                </ImageModal>
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-balance font-bold font-ojuju text-3xl md:text-4xl">
                        {fullProduct.title}
                      </h1>
                      <p className="mt-2 text-lg text-muted-foreground">
                        {fullProduct.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    {fullProduct.description}
                  </p>
                </div>

                {/* Price and Purchase */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge
                      className="border-green-600 text-green-600"
                      variant="outline"
                    >
                      {fullProduct.available ? "Available" : "Sold Out"}
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
                      <p className="font-medium">{fullProduct.materials}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <p className="font-medium">{fullProduct.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year:</span>
                      <p className="font-medium">{fullProduct.year}</p>
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
