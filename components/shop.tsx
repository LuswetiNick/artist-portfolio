import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";

const shopData = [
  {
    title: "Serene Waters",
    price: "KES 35000",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "Original Painting",
  },
  {
    title: "Crimson Skies",
    price: "KES 12500",
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "Limited Print",
  },
  {
    title: "Abstract Dreams",
    price: "KES 45000",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "Original Painting",
  },
  {
    title: "Urban Reflections",
    price: "KES 9500",
    image:
      "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    type: "Art Print",
  },
];

const Shop = () => {
  return (
    <section className="px-6 py-20" id="shop">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          Shop My Artwork
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Take home a piece of my artistic vision. From original canvas works to
          limited edition prints and merchandise.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {shopData.map((item) => (
            <div
              className="group overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              key={item.title}
            >
              <div className="relative overflow-hidden">
                <Image
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  height={500}
                  src={item.image}
                  width={500}
                />
                <Badge
                  className="absolute top-3 right-3 px-3 py-1 text-sm backdrop-blur-sm"
                  variant="default"
                >
                  {item.price}
                </Badge>
              </div>
              <div className="p-5">
                <div className="mb-1 text-muted-foreground text-sm">
                  {item.type}
                </div>
                <h3 className="mb-3 font-semibold text-lg">{item.title}</h3>
                <Button className="w-full" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            className={cn(buttonVariants({ variant: "default" }))}
            href="/shop"
          >
            View All Items
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Shop;
