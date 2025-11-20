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
    <section
      className="overflow-hidden bg-muted px-4 py-12 sm:px-6 sm:py-16 md:py-20"
      id="showcase"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-2xl sm:text-3xl md:text-4xl">
          The Art
        </h2>
        <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary sm:mb-12 md:mb-16" />
        <div className="mb-8 space-y-4 text-center text-sm sm:text-base">
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
                <div className="w-full">
                  <div className="relative aspect-video overflow-hidden rounded-lg border shadow-md">
                    <Image
                      alt={isPot ? `Pot ${item._id}` : item.title || category}
                      className="object-cover"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
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
                <div className="w-full">
                  <div className="mb-8 flex items-center justify-between px-3 md:mb-0 md:flex-col md:items-start md:px-14">
                    <h2 className="font-bold text-2xl tracking-tight sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
                      {category}
                    </h2>
                    <div className="sm:mb-8">
                      <Link
                        className={buttonVariants({
                          variant: "default",
                          size: "lg",
                        })}
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
                  className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 pt-8 pb-8 sm:gap-8 sm:pt-12 sm:pb-12 md:gap-12 md:pt-16 md:pb-16 lg:grid-cols-2 lg:pt-24 lg:pb-24"
                  key={category}
                >
                  {/* On mobile, always show text first, then image. On lg+, alternate based on reversed */}
                  <div className="lg:hidden">
                    {textBlock}
                    {imageContent}
                  </div>
                  <div className="hidden lg:contents">
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
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
