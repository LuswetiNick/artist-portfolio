import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { Card } from "./ui/card";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Card className="group relative transform overflow-hidden p-0 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          height={500}
          src={post.imageUrl}
          width={500}
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <Link
            className="font-semibold text-xl transition-colors group-hover:text-primary"
            href={`/blog/${post.slug}`}
          >
            {post.title}
          </Link>
        </div>
        <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-muted-foreground text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime} min
          </div>
        </div>
      </div>
    </Card>
  );
}
