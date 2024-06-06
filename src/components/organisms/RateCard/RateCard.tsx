"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card/Card";
import { cn } from "@/lib/utils";
import { BadgeDollarSignIcon } from "lucide-react";

function RateCard({ className }: { className?: string }) {
  const openLink = () => {
    window.open("https://wa.link/9l4sps", "_blank");
  };

  return (
    <Card className={cn("mt-4 w-full max-w-md lg:max-w-xs border border-primary/30", className)}>
      <div className='flex items-center gap-1 text-primary'>
        <p className='font-semibold text-lg'>¡Mejora tu tipo de cambio!</p>
        <BadgeDollarSignIcon size={24} />
      </div>
      <p className='text-sm font-medium mt-2 mb-6'>
        <b>¿Deseas cambiar 3mil dólares o más?</b> <br />
        <br /> Contáctanos y mejoraremos tu tipo de cambio al momento.
      </p>
      <Button type='button' variant='outline' className='font-semibold w-full border-primary mt-2 border-2 text-primary' onClick={openLink}>
        Contactar un asesor
      </Button>
    </Card>
  );
}

export default RateCard;
