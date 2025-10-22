"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface ImageModalProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const ImageModal = ({ src, alt, children }: ImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="w-full max-w-4xl border-none bg-black p-2"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">{alt}</DialogTitle>
        </DialogHeader>
        <div className="relative flex h-[80vh] w-full items-center justify-center">
          <Image
            alt={alt}
            className="max-h-full max-w-full object-contain"
            fill
            src={src}
            style={{ objectFit: "contain" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
