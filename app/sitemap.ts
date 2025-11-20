import { siteConfig } from "@/lib/siteConfig";
import { sanityFetch } from "@/sanity/lib/live";
import { artworksQuery, blogPostsQuery } from "@/sanity/lib/queries";

const trailingSlashRegex = /\/$/;

export default async function sitemap() {
  const base = siteConfig.url.replace(trailingSlashRegex, "");

  // static pages
  const staticPages = ["", "/artwork", "/blog", "/contact"];

  const staticEntries = staticPages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString(),
  }));

  // dynamic: artworks (use _id)
  const { data: artworks } = await sanityFetch({ query: artworksQuery });
  const artworkEntries = (artworks || []).map((a: any) => ({
    url: `${base}/artwork/${a._id}`,
    lastModified: a._updatedAt ?? a._createdAt ?? new Date().toISOString(),
  }));

  // dynamic: blog posts (use slug)
  const { data: posts } = await sanityFetch({ query: blogPostsQuery });
  const postEntries = (posts || [])
    .filter((p: any) => p.slug?.current)
    .map((p: any) => ({
      url: `${base}/blog/${p.slug.current}`,
      lastModified:
        p._updatedAt ??
        p._createdAt ??
        p.publishedAt ??
        new Date().toISOString(),
    }));

  return [...staticEntries, ...artworkEntries, ...postEntries];
}
