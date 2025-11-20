import { PortableText } from "@portabletext/react";
import { Instagram, Mail, Twitter } from "lucide-react";
import Image from "next/image";
// import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { aboutQuery } from "@/sanity/lib/queries";

const About = async () => {
  const { data: about } = await sanityFetch({ query: aboutQuery });

  // Fallback to static image if no Sanity image
  const imageUrl = about?.profileImage
    ? urlFor(about.profileImage).width(500).height(500).url()
    : "/images/about.jpg";

  const imageAlt = about?.profileImage?.alt || "Portrait of the artist";

  // If no about data, show placeholder or return null
  if (!about) {
    return (
      <section className="px-6 py-20" id="about">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
            The Artist
          </h2>
          <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
          <p className="text-center text-gray-500">
            About information coming soon...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:py-20"
      id="about"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-2xl sm:text-3xl md:text-4xl">
          The Artist
        </h2>
        <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary sm:mb-12 lg:mb-16" />
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-2 lg:gap-12">
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <Image
              alt={imageAlt}
              className="h-full w-full transform rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              height={500}
              src={imageUrl}
              width={500}
            />
            <div className="-bottom-4 -right-4 -z-10 sm:-bottom-6 sm:-right-6 absolute h-24 w-24 rounded-full bg-primary-100 sm:h-32 sm:w-32" />
            <div className="-left-4 -top-4 -z-10 sm:-left-6 sm:-top-6 absolute h-20 w-20 rounded-full bg-primary-200 sm:h-24 sm:w-24" />
          </div>
          <div className="mx-auto w-full max-w-4xl text-center md:text-left">
            <h3 className="mb-3 font-semibold text-xl sm:mb-4 sm:text-2xl">
              Hi, I'm{" "}
              <span className="text-primary">
                {about.fullname || "the artist"}
              </span>
            </h3>
            {/* Availability Badge */}
            {/* {about.availability && (
              <div className="mb-6">
                <Badge
                  variant={
                    about.availability === "available"
                      ? "default"
                      : about.availability === "open"
                        ? "secondary"
                        : "outline"
                  }
                  className="text-sm"
                >
                  {about.availability === "available" && "✓ Available for hire"}
                  {about.availability === "open" && "Open to opportunities"}
                  {about.availability === "unavailable" && "Not looking"}
                </Badge>
              </div>
            )} */}
            {about.bio && (
              <div className="mb-4 text-sm leading-relaxed sm:mb-6 sm:text-base">
                <PortableText value={about.bio} />
              </div>
            )}

            {/* Contact & Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:justify-start">
              {about.email && (
                <Link
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-gray-700 text-xs transition-all hover:bg-primary hover:text-white sm:px-4 sm:text-sm md:text-base"
                  href={`mailto:${about.email}`}
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="max-w-[150px] truncate sm:max-w-none">
                    {about.email}
                  </span>
                </Link>
              )}

              {/* Social Links */}
              {about.socialLinks?.twitter && (
                <Link
                  aria-label="Twitter/X"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary hover:text-white sm:h-10 sm:w-10"
                  href={about.socialLinks.twitter}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              )}
              {about.socialLinks?.instagram && (
                <Link
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary hover:text-white sm:h-10 sm:w-10"
                  href={about.socialLinks.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
