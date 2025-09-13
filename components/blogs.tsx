import Link from "next/link";
import { getRecentPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";
import { BlogPostCard } from "./blog-post-card";
import { buttonVariants } from "./ui/button";

const Blogs = () => {
  const recentPosts = getRecentPosts();
  return (
    <section className="bg-muted px-6 py-20" id="blog">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          Latest from the Blog
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        {recentPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
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
