import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import CoursesTabs from "./courses-tabs";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Courses & Residency",
    description:
      "Afrika Mosaics educational programmes and eco-lodge art residency — learn mosaic craft, regenerative material practice, and place-based creativity with Githaka Karuri.",
    pathname: "/courses",
  });
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mt-6 space-y-4 text-center">
          <p className="font-medium text-primary text-sm uppercase tracking-widest">
            Afrika Mosaics
          </p>
          <h1 className="text-balance font-bold font-ojuju text-4xl md:text-5xl">
            Courses & Residency
          </h1>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </div>

        <CoursesTabs />
      </div>
    </div>
  );
}
