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
      <DialogContent className="max-w-4xl w-full p-2  border-none" showCloseButton={true}>
        <DialogHeader>
          <DialogTitle className="sr-only">{alt}</DialogTitle>
        </DialogHeader>
        <div className="relative w-full h-[80vh] flex items-center justify-center">
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