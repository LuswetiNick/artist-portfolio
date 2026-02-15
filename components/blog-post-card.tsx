import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import type { Slug } from "@/sanity/types";
import { Card } from "./ui/card";

interface SanityBlogPost {
  _id: string;
  title: string | null;
  slug: Slug | null;
  excerpt: string | null;
  publishedAt: string | null;
  featuredImage?: any;
  body?: any[];
  author?: string | null;
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

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-KE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No date";

  // Get image URL
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(800).height(600).url()
    : "/placeholder.svg";

  return (
    <Link href={`/blog/${post.slug?.current || ""}`}>
      <Card className="group relative transform cursor-pointer overflow-hidden p-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            alt={post.title || "Blog post"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            height={500}
            src={imageUrl}
            width={500}
          />
        </div>
        <div className="space-y-4 p-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-xl transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </div>
          <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
            {post.excerpt || ""}
          </p>
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </div>

            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Githaka Karuri
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
