import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostBySlugQuery } from "@/sanity/lib/queries";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Fetch blog post from Sanity by slug
  const { data: post } = await sanityFetch({
    query: blogPostBySlugQuery,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  // Get image URL if featured image exists
  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage).width(1200).height(675).url()
    : null;

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Button asChild variant="ghost">
          <Link href="/blog">
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
      <article className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <header className="mb-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-balance font-bold text-3xl leading-tight md:text-4xl lg:text-5xl">
              {post.title || "Untitled"}
            </h1>
            {post.excerpt && (
              <p className="text-pretty text-muted-foreground text-xl leading-relaxed">
                {post.excerpt}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                {formattedDate}
              </div>
            </div>
          </div>
          {imageUrl && (
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
              <Image
                alt={post.title || "Blog post image"}
                className="h-full w-full object-cover"
                height={500}
                src={imageUrl}
                width={500}
              />
            </div>
          )}
        </header>
        {post.body && (
          <div className="prose dark:prose-invert max-w-none">
            <PortableText value={post.body} />
          </div>
        )}
      </article>
    </section>
  );
}
