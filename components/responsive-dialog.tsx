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

interface Product {
  title: string;
  image: string;
}

interface WhatsappDialogProps {
  product: Product;
  children: React.ReactNode;
}

export const WhatsappDialog = ({ product, children }: WhatsappDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Inquire about artwork</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3 rounded-md bg-muted p-3">
          <Image
            alt={product.title}
            className="h-16 w-16 rounded object-cover"
            height={50}
            src={product.image}
            width={50}
          />
        </div>
        <div>form</div>
      </DialogContent>
    </Dialog>
  );
};
