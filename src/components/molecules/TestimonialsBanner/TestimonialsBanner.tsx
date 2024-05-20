"use client";

import { Card, CardContent } from "@/components/ui/card/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import InstakashIcon from "@/assets/icons/icon-light.svg";
import Autoplay from "embla-carousel-autoplay";

export default function TestimonialsBanner() {
  return (
    <Carousel
      className='w-full max-w-4xl mx-auto relative'
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnFocusIn: true,
          stopOnInteraction: true
        })
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card variant='outline'>
                <CardContent className='flex flex-col lg:flex-row items-center gap-6 py-6'>
                  <div className='w-36 h-36 bg-primary/20 flex flex-col items-center justify-center rounded-full'>
                    <Image src={InstakashIcon} alt='Instakash empresas' className='w-16 h-14' />
                    <span className='text-primary italic font-[500]'>Empresa</span>
                  </div>
                  <div className='flex flex-1 flex-col gap-y-4'>
                    <h3 className='text-2xl text-left font-semibold leading-none tracking-tight'>Carlos Mendoza - Importaciones Mendoza</h3>
                    <p className='text-sm text-muted-foreground leading-6'>
                      En Instakash encontré la solución perfecta para mi negocio de importación. Realizó el cambio de dólares a soles de
                      manera increíblemente rápida y segura. Ahora puedo pagar a mis proveedores internacionales sin complicaciones.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden lg:flex' />
      <CarouselNext className='hidden lg:flex ' />
    </Carousel>
  );
}
