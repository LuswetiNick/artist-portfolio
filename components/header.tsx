import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const TopMenu = [
  { name: "About", href: "#about" },
  { name: "Showcase", href: "#showcase" },
  { name: "Blog", href: "#blog" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl">
      <div className="w-full px-4 py-2">
        <nav className="hidden justify-between md:flex">
          <div className="relative flex items-center gap-3">
            <Image
              alt="Portrait of the artist"
              height={56}
              src="/images/new-logo.jpeg"
              width={56}
            />
            <span className="font-semibold text-lg">Afrika Mosaics</span>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-4">
              {TopMenu.map((item) => (
                <Link
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    navigationMenuTriggerStyle
                  )}
                  href={item.href}
                  key={item.name}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
        </nav>
        {/* mobile menu */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between">
            <div className="relative flex items-center gap-3">
              <Image
                alt="Portrait of the artist"
                height={56}
                src="/images/new-logo.jpeg"
                width={56}
              />
              <span className="font-semibold text-lg">Afrika Mosaics</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto pt-0 pb-5" side="bottom">
                <SheetHeader className="pb-0">
                  <SheetTitle>
                    <div className="flex items-center gap-3">
                      <Image
                        alt="Portrait of the artist"
                        height={56}
                        src="/images/new-logo.jpeg"
                        width={56}
                      />
                      <span className="font-semibold text-lg">
                        Afrika Mosaics
                      </span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-0 flex flex-col gap-0 px-4">
                  {TopMenu.map((item) => (
                    <Link
                      className="py-2 font-semibold text-lg"
                      href={item.href}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
