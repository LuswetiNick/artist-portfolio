import Link from "next/link";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { recentBlogPostsQuery } from "@/sanity/lib/queries";
import { BlogPostCard } from "./blog-post-card";
import { buttonVariants } from "./ui/button";

const Blogs = async () => {
  const { data: recentPosts } = await sanityFetch({
    query: recentBlogPostsQuery,
    params: { limit: 3 },
  });

  // Filter out posts with missing required fields
  const validPosts = (recentPosts || []).filter(
    (post) => post?.slug?.current && post?.title
  );

  return (
    <section className="bg-muted px-6 py-20" id="blog">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          Latest from the Blog
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        {validPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {validPosts
              .filter((post) => {
                const hasSlug = post.slug?.current;
                return hasSlug && post.title;
              })
              .map((post) => {
                const slug = post.slug?.current;
                if (!slug) {
                  return null;
                }
                return <BlogPostCard key={slug} post={post as any} />;
              })}
          </div>
        )}
        <div className="mt-12 text-center">
          <Link
            className={cn(buttonVariants({ variant: "default" }))}
            href="/blog"
          >
            View More Posts
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
