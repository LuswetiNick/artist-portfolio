import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/showcase-data";

const Showcase = () => {
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((item) => (
            <Link href={`/artwork/${item.id}`} key={item.id}>
              <div
                className="group relative transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                key={item.title}
              >
                <Image
                  alt={item.title}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  height={500}
                  src={item.image}
                  width={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-ojuju font-semibold text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Showcase;
