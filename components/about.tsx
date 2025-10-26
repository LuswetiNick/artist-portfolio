import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { aboutQuery } from "@/sanity/lib/queries";
import { Mail, Twitter, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
    <section className="px-6 py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
          The Artist
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              alt={imageAlt}
              className="h-full w-full transform rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              height={500}
              src={imageUrl}
              width={500}
            />
            <div className="-bottom-6 -right-6 -z-10 absolute h-32 w-32 rounded-full bg-primary-100" />
            <div className="-top-6 -left-6 -z-10 absolute h-24 w-24 rounded-full bg-primary-200" />
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-2xl">
              Hi, I'm{" "}
              <span className="text-primary">
                {about.fullname || "the artist"}
              </span>
            </h3>
              {/* Availability Badge */}
            {about.availability && (
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
            )}
            {about.bio && (
              <div className="mb-6 text-base leading-relaxed">
                <PortableText value={about.bio} />
              </div>
            )}

          

            {/* Contact & Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              {about.email && (
                <Link
                  href={`mailto:${about.email}`}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-gray-700 transition-all hover:bg-primary hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm sm:text-base">
                    {about.email}
                  </span>
                </Link>
              )}

              {/* Social Links */}
              {about.socialLinks?.twitter && (
                <Link
                  href={about.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary hover:text-white"
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              )}
              {about.socialLinks?.instagram && (
                <Link
                  href={about.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-all hover:bg-primary hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
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
