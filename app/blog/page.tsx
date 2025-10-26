import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { blogPostsQuery } from "@/sanity/lib/queries";

export default async function BlogPage() {
  // Fetch blog posts from Sanity
  const { data: blogPosts } = await sanityFetch({ query: blogPostsQuery });

  // Filter out posts with missing required fields
  const validPosts = (blogPosts || []).filter(
    (post) => post?.slug?.current && post?.title
  );

  return (
    <section className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>
        <div className="space-y-4 text-center">
          <h1 className="text-balance font-bold text-4xl md:text-5xl">
            Thoughts & Insights
          </h1>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Follow my creative journey, artistic process, and thoughts on
            contemporary art and life as an artist.
          </p>
        </div>

        {validPosts.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {validPosts.map((post) => {
              if (!(post.slug && post.title)) return null;
              return (
                <BlogPostCard key={post.slug.current} post={post as any} />
              );
            })}
          </div>
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>
    </section>
  );
}
