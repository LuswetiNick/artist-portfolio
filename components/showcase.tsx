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
            Mosaic making is the wellspring of Githaka Karuri’s creative
            expression. His work moves fluidly across scale and surface, taking
            form as interior and exterior wall murals, hanging panels, floors,
            swimming pools, furniture, sculptures, vessels, and mosaics woven
            into natural building designs.
          </p>
          <p>
            Working primarily with recycled and reclaimed materials—granite,
            marble, ceramic tile, glass, stone, and other found media—each piece
            is an act of renewal, giving continuity to matter and meaning.
          </p>
          <p>
            His practice is rooted in the understanding that he is nature, and
            that art is culture. Every mosaic becomes a story—spoken through
            symbolism, flowing lines, colour, mood, and movement—carrying
            memory, place, and intention. The pages that follow offer a
            selection from this ongoing mosaic journey.
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
                  <div className="relative aspect-video overflow-hidden rounded-md border shadow-md sm:rounded-lg">
                    <Image
                      alt={isPot ? `Pot ${item._id}` : item.title || category}
                      className="object-cover"
                      fill
                      priority={idx === 0}
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
                  <div className="mb-4 flex items-center justify-between gap-3 px-2 sm:mb-6 sm:px-3 md:mb-0 md:flex-col md:items-start md:px-14">
                    <h2 className="font-bold text-xl tracking-tight sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
                      {category}
                    </h2>
                    <div className="shrink-0 md:mb-8">
                      <Link
                        className={buttonVariants({
                          variant: "default",
                          size: "default",
                          className: "text-sm sm:text-base md:text-lg",
                        })}
                        href={`/artwork?category=${encodeURIComponent(category)}`}
                      >
                        View all
                      </Link>
                    </div>
                  </div>
                </div>
              );

              return (
                <section
                  className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 px-2 pt-6 pb-6 sm:gap-6 sm:px-4 sm:pt-8 sm:pb-8 md:gap-8 md:pt-12 md:pb-12 lg:grid-cols-2 lg:gap-12 lg:px-4 lg:pt-16 lg:pb-16 xl:pt-24 xl:pb-24"
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
