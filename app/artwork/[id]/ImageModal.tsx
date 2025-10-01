"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ImageModalProps {
  src: string;
  alt: string;
}

export function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image */}
      <div
        className="aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-muted transition-opacity hover:opacity-90"
        onClick={() => setIsOpen(true)}
      >
        <Image
          alt={alt}
          className="h-full w-full object-cover"
          height={1000}
          src={src}
          width={1000}
        />
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <Button
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
            size="icon"
            variant="ghost"
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Full Size Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={alt}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              height={2000}
              quality={100}
              src={src}
              width={2000}
            />
          </div>
        </div>
      )}
    </>
  );
}
