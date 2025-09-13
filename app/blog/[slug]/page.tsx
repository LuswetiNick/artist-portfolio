import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              {post.title}
            </h1>
            <p className="text-pretty text-muted-foreground text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                {formattedDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                {post.readTime} min read
              </div>
            </div>
            <div>
              <Button size="icon" variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              alt={post.title}
              className="h-full w-full object-cover"
              height={500}
              src={post.imageUrl}
              width={500}
            />
          </div>
        </header>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </section>
  );
}
