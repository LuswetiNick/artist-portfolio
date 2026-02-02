import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-12">
        <h2 className="mb-8 text-center font-bold font-ojuju text-2xl uppercase sm:text-3xl md:text-4xl">
          KAI.RETU'S FORESTS
        </h2>
        <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary sm:mb-12" />
        <div className="relative z-10 grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <div className="max-w-2xl space-y-6">
              <p className="border-l pl-6 font-light text-lg leading-relaxed">
                <span className="font-normal text-primary">Afrika Mosaics</span>{" "}
                is a constituent of Kai.retu’s Forests, a regenerative culture
                initiative addressing the global metacrisis by reconnecting
                people, land, and ancestral wisdom. Grounded in{" "}
                <span className="text-muted-foreground italic">kairetu</span>,
                the Gikūyū expression of feminine life force and continuity, it
                weaves art, technology, and indigenous practice into living
                systems of renewal.
              </p>

              <p className="pl-6 font-normal text-lg leading-relaxed">
                Through regenerative food systems, biophilic design, indigenous
                learning and living art, Kai.retu’s Forests fosters resilient
                ecosystems and cultures rooted in care, balance, and
                regeneration.
              </p>
            </div>

            <div className="gap-4 pt-2">
              <Link
                className={buttonVariants({
                  variant: "default",
                  className: "w-full md:w-fit",
                })}
                href="#showcase"
              >
                Explore The Practice
                <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="group relative lg:col-span-5">
            <div className="-top-12 -right-12 absolute z-0 h-24 w-24 rounded-full border border-white/5" />
            <div className="-bottom-8 -left-8 absolute z-0 h-16 w-16 rounded-full border border-white/5" />

            <div className="relative aspect-[4/5] transform overflow-hidden rounded-2xl border border-white/10 bg-stone-900 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />

              <Image
                alt=""
                className="h-full w-full object-cover object-center contrast-[1.05] saturate-[1.1] filter"
                fill
                src="/images/WhatsApp Image 2026-02-02 at 21.19.30.jpeg"
              />

              <div className="absolute bottom-6 left-6 z-20 max-w-[240px] rounded-xl border border-white/10 bg-stone-900/40 px-4 py-3 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div>
                    <h3 className="font-medium text-sm text-white tracking-tight">
                      Art weaving into nature.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="-inset-1 -z-10 absolute rounded-2xl bg-gradient-to-tr from-orange-500/20 to-green-500/20 opacity-50 blur-2xl transition-opacity duration-700 group-hover:opacity-75" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
