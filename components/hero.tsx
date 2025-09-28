import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Artist at work"
          className="h-full w-full object-cover opacity-80"
          fill
          src="/images/IMG-20250925-WA0017.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>
      <Header />
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-4 font-bold text-4xl text-white tracking-tight md:text-6xl lg:text-7xl">
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-primary border-b-[30px]" />
            <span className="relative block transform transition-transform delay-200 duration-300 hover:translate-y-[-5px]">
              Afrika Mosaics
            </span>
          </div>
        </h1>
        {/* <Button className="transform font-medium text-white transition-all duration-300 hover:scale-105">
          Explore My Work
        </Button> */}
      </div>
      <div className="-translate-x-1/2 absolute bottom-10 left-1/2 transform animate-bounce">
        <Link className="text-white" href="#about">
          <ChevronDown />
        </Link>
      </div>
    </div>
  );
};
export default Hero;
