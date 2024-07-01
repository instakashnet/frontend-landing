"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AdsModalProps } from "./AdsModal.interfaces";
import IKIcon from "@/assets/logo-dark.svg";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";

function AdsModal({ image, notice, show = false, delay = 100 }: AdsModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setIsModalOpen(true);
      }, delay);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show, delay]);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        className={cn("border-none", notice ? "bg-primary" : "p-0")}
        closeIcon={
          <DialogClose className='text-white absolute right-4 top-4 rounded-sm'>
            <X className='h-5 w-5' />
            <span className='sr-only'>Close</span>
          </DialogClose>
        }
      >
        {notice ? (
          <>
            <Image src={IKIcon} alt='instakash' width={160} height={100} />
            <div className='flex-1 bg-white w-full min-h-fit mb-6 px-4 py-6 rounded-lg text-primary text-center mt-3'>
              <h3 className='text-3xl font-semibold uppercase mb-6'>¡Importante!</h3>
              <PortableText value={notice} />
            </div>
          </>
        ) : (
          <Image src={image} alt='Anuncio Instakash' layout='responsive' width={1200} height={630} />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default AdsModal;
