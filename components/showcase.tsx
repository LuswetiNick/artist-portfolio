import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { artworksQuery, featuredPotsQuery } from "@/sanity/lib/queries";
import { ImageModal } from "./image-modal";
import { buttonVariants } from "./ui/button";

interface ShowcaseItem {
  _id: string;
  category: string;
  image: string;
  title?: string;
}

const Showcase = async () => {
  // Fetch artworks and pots from Sanity
  const { data: artworks } = await sanityFetch({ query: artworksQuery });
  const { data: pots } = await sanityFetch({ query: featuredPotsQuery });

  // Build a combined array with category and image data
  const allItems: ShowcaseItem[] = [
    ...(artworks || [])
      .filter((item) => item.category && item.image)
      .map((item) => ({
        _id: item._id,
        category: item.category || "Uncategorized",
        image: item.image ? urlFor(item.image).width(1200).url() || "" : "",
        title: item.title || undefined,
      })),
    ...(pots || [])
      .filter((item) => item.image)
      .map((item) => {
        const imageUrl = item.image ? urlFor(item.image).width(1200).url() : "";
        
        return {
          _id: item._id,
          category: "Pots",
          image: imageUrl || "",
        };
      }),
  ];

  // Build a map of category -> first item in that category
  const categoryEntries = Array.from(
    allItems
      .reduce(
        (map, item) =>
          map.has(item.category) ? map : map.set(item.category, item),
        new Map<string, ShowcaseItem>()
      )
      .entries()
  );

  return (
    <section className="bg-muted px-6 py-20" id="showcase">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
          The Art
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="mb-8 text-center">
          <p>
            Mosaic making is what gets my creative juices really flowing. The
            mosaics are created on all manner of suitable surfaces and in
            different scales and sizes. They include wall murals for exteriors
            and interiors, wall panels for hanging, floors, swimming pools,
            furniture, sculptures and flower pots.
          </p>
          <p>
            They are mostly made of recycled materials such as granite, marble,
            ceramic tiles, glass, stone and any other suitable media. My art is
            inspired by my interconnectedness with nature as well as culture.
            Each piece is a storytelling in terms of subject matter, symbolism,
            line flows, color, mood and movement.
          </p>
        </div>

        <div className="flex w-full flex-col">
          {categoryEntries
            .filter(([, item]) => item.image) // Filter out items without images
            .map(([category, item], idx) => {
              const isPot = category === "Pots";
              const reversed = idx % 2 === 1; // alternate layout per row

              const framedImage = (
                <div>
                  <div className="relative aspect-video overflow-hidden border">
                    <Image
                      alt={isPot ? `Pot ${item._id}` : item.title || category}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      src={item.image}
                    />
                  </div>
                </div>
              );

              const imageContent = isPot ? (
                <ImageModal alt={`Pot ${item._id}`} src={item.image}>
                  {framedImage}
                </ImageModal>
              ) : (
                <Link
                  href={`/artwork?category=${encodeURIComponent(category)}`}
                >
                  {framedImage}
                </Link>
              );

              const textBlock = (
                <div>
                  <div className="mb-8 px-3 md:mb-0 md:px-14">
                    <h2 className="mb-6 font-bold text-3xl tracking-tight sm:text-5xl">
                      {category}
                    </h2>
                    <div className="mb-8 space-y-4">
                      <Link
                        className={buttonVariants({ variant: "default" })}
                        href={`/artwork?category=${encodeURIComponent(category)}`}
                      >
                        View all {category}
                      </Link>
                    </div>
                  </div>
                </div>
              );

              return (
                <section
                  className="container mx-auto grid grid-cols-1 items-center gap-12 pt-16 pb-16 md:pt-24 md:pb-24 lg:grid-cols-2"
                  key={category}
                >
                  {reversed ? (
                    <>
                      {imageContent}
                      {textBlock}
                    </>
                  ) : (
                    <>
                      {textBlock}
                      {imageContent}
                    </>
                  )}
                </section>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
