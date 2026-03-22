import Link  from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          
          <div className="relative">
            <Image
              alt="Portrait of the artist"
              height={96}
              src="/images/logo.png"
              width={96}
            />
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://linktr.ee/kai.retusforests"
           
              className="text-sm tracking-wide text-gray-500 transition-all duration-300 hover:text-foreground dark:text-gray-400"
            >
              Kai.retu's Forests
            </Link>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()}.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

