import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageModal } from "@/components/image-modal";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { artworksQuery, potsQuery } from "@/sanity/lib/queries";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const category = params?.category;
  const title = category ? category : "The Art";
  return buildMetadata({
    title,
    description: `Explore ${title} - original artwork and contemporary pieces.`,
    pathname: category
      ? `/artwork?category=${encodeURIComponent(category)}`
      : "/artwork",
  });
}

export default async function Artwork({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params?.category;

  // Fetch artworks and pots from Sanity
  const { data: artworks } = await sanityFetch({ query: artworksQuery });
  const { data: pots } = await sanityFetch({ query: potsQuery });

  const title = category ? category : "The Art";

  // Filter artworks by category if specified
  const filteredArtworks = category
    ? artworks?.filter((p) => p.category === category) || []
    : artworks || [];

  const potProducts =
    category === "Pots" ? (pots || []).filter((p) => p?.image?.asset) : [];

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
                {potProducts.map((item) => {
                  if (!item.image) return null;
                  const imageUrl = urlFor(item.image).width(800).url();
                  if (!imageUrl) return null;
                  return (
                    <ImageModal
                      alt={`Pot ${item._id}`}
                      key={item._id}
                      src={imageUrl}
                    >
                      <div className="group relative transform cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                        <Image
                          alt={`Pot ${item._id}`}
                          className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          height={500}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          src={imageUrl}
                          width={500}
                        />
                      </div>
                    </ImageModal>
                  );
                })}
              </div>
            ) : (
              <p>No pots found.</p>
            )
          ) : filteredArtworks.length > 0 ? (
            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredArtworks.map((product) => (
                <ProductCard key={product._id} product={product} />
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
