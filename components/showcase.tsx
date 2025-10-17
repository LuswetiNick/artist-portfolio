"use client";
import Image from "next/image";
import Link from "next/link";
import {
  type Product,
  productData,
  type ShowcaseProduct,
} from "@/data/showcase-data";
import { ImageModal } from "./image-modal";
import { buttonVariants } from "./ui/button";

const Showcase = () => {
  // Build a map of category -> first item in that category
  const categoryEntries = Array.from(
    productData
      .reduce(
        (map, item) =>
          map.has(item.category) ? map : map.set(item.category, item),
        new Map<string, ShowcaseProduct>()
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
          {categoryEntries.map(([category, item], idx) => {
            const isPot = category === "Pots";
            const isProduct = (i: ShowcaseProduct): i is Product =>
              "title" in i;
            const reversed = idx % 2 === 1; // alternate layout per row

            const framedImage = (
              <div>
                <div className="relative aspect-video overflow-hidden border">
                  {/* Category label over image */}
                  {/* <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center p-3">
                    <span className="rounded-full bg-black/60 px-4 py-1 font-semibold text-sm text-white backdrop-blur">
                      {category}
                    </span>
                  </div> */}
                  <Image
                    alt={
                      isPot
                        ? `Pot ${item.id}`
                        : isProduct(item)
                          ? item.title
                          : `${category}`
                    }
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 800px, 100vw"
                    src={item.image}
                  />
                </div>
              </div>
            );

            const imageContent = isPot ? (
              <ImageModal alt={`Pot ${item.id}`} src={item.image}>
                {framedImage}
              </ImageModal>
            ) : isProduct(item) ? (
              <Link href={`/artwork/${item.id}`}>{framedImage}</Link>
            ) : (
              framedImage
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
