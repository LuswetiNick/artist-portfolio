import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { Card } from "./ui/card";

interface SanityBlogPost {
  _id: string;
  title: string | null;
  slug: { current: string } | null;
  excerpt: string | null;
  publishedAt: string;
  featuredImage?: any;
  body?: any[];
}

interface BlogPostCardProps {
  post: SanityBlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  // Handle null values
  const hasRequiredFields = post.title && post.slug?.current;
  if (!hasRequiredFields) {
    return null;
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get image URL
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(800).height(600).url()
    : "/placeholder.svg";

  return (
    <Card className="group relative transform overflow-hidden p-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          alt={post.title!}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          height={500}
          src={imageUrl}
          width={500}
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <Link
            className="font-semibold text-xl transition-colors group-hover:text-primary"
            href={`/blog/${post.slug!.current}`}
          >
            {post.title}
          </Link>
        </div>
        <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
          {post.excerpt || ""}
        </p>
        <div className="flex items-center justify-between text-muted-foreground text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </div>
        </div>
      </div>
    </Card>
  );
}
