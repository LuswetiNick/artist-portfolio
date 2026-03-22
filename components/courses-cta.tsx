import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const CoursesCTA = () => {
  return (
    <div className="relative mx-auto mt-24 flex w-full max-w-3xl flex-col justify-between gap-y-6 rounded-4xl border bg-card px-4 py-10 shadow-sm">
      <div className="space-y-2">
        <h2 className="text-center font-semibold text-lg tracking-tight md:text-2xl">
          Interested in learning the craft?
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button asChild className="shadow">
          <Link href="/courses">
            Learn More <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CoursesCTA;
