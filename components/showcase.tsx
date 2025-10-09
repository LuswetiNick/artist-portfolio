"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  type Product,
  productData,
  type ShowcaseProduct,
} from "@/data/showcase-data";
import { Button } from "./ui/button";
import { ImageModal } from "./image-modal";

const categories = ["All", "Wall panels", "Murals", "Pots"] as const;
type Category = (typeof categories)[number];

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts =
    activeCategory === "All"
      ? productData
      : productData.filter((product) => product.category === activeCategory);
  return (
    <section className="bg-muted px-6 py-20" id="showcase">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
          The Art
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="mb-8 text-center">
          {" "}
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
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              className={`font-medium text-sm transition-all duration-200 sm:text-base ${
                activeCategory === category
                  ? "scale-105 bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border-border bg-card hover:border-primary/50 hover:bg-secondary"
              }
              `}
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
            >
              {category}
              <span
                className={`rounded-md px-2 py-0.5 text-xs ${
                  activeCategory === category
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }
              `}
              >
                {category === "All"
                  ? productData.length
                  : productData.filter((p) => p.category === category).length}
              </span>
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => {
            const isPot = item.category === "Pots";
            // Type guard to check if item is a Product (has title)
            const isProduct = (item: ShowcaseProduct): item is Product =>
              "title" in item;

            const content = (
              <div
                className={`group relative transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
                  isPot
                    ? "cursor-pointer hover:scale-[1.02] hover:shadow-xl"
                    : "cursor-pointer hover:scale-[1.02] hover:shadow-xl"
                }`}
                key={item.id}
              >
                <Image
                  alt={
                    isPot
                      ? `Pot ${item.id}`
                      : isProduct(item)
                        ? item.title
                        : `Artwork ${item.id}`
                  }
                  className={`h-80 w-full object-cover ${
                    isPot
                      ? "transition-transform duration-700 group-hover:scale-110"
                      : "transition-transform duration-700 group-hover:scale-110"
                  }`}
                  height={500}
                  src={item.image}
                  width={500}
                />
                {!isPot && isProduct(item) && (
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="font-ojuju font-semibold text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>
                )}
              </div>
            );

            return isPot ? (
              <ImageModal
                key={item.id}
                src={item.image}
                alt={`Pot ${item.id}`}
              >
                {content}
              </ImageModal>
            ) : (
              <Link href={`/artwork/${item.id}`} key={item.id}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
