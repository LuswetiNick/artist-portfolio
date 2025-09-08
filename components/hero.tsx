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
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
      </div>
      <Header />
      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-4 font-bold text-4xl text-white tracking-tight md:text-6xl lg:text-7xl">
          <span className="block transform transition-transform duration-300 hover:translate-y-[-5px]">
            Creative
          </span>
          <span className="block transform transition-transform delay-100 duration-300 hover:translate-y-[-5px]">
            Passionate
          </span>
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-primary border-b-[30px]" />
            <span className="relative block transform transition-transform delay-200 duration-300 hover:translate-y-[-5px]">
              Artistic
            </span>
          </div>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-white/90 text-xl">
          Bringing imagination to life through color, texture, and form
        </p>
        <Button className="transform font-medium text-white transition-all duration-300 hover:scale-105">
          Explore My Work
        </Button>
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
