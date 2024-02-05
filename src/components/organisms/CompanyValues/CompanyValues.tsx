"use client";

import ValueItem from "@/components/atoms/ValueItem/ValueItem";
import { BrainIcon, ClockIcon, PiggyBankIcon, ShieldCheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./CompanyValues.module.css";

function CompanyValues() {
  return (
    <section className={cn("pt-40 pb-20 min-h-[50vh] w-full", styles.CompanyValuesBg)}>
      <div className='container'>
        <header className='text-center'>
          <h2 className='font-semibold text-secondary text-lg'>¿Por qué elegírnos?</h2>
          <h3 className='text-4xl max-w-xl mx-auto lg:text-5xl text-primary font-bold mt-6'>
            Estas son las razones que consideramos más importantes
          </h3>
        </header>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20'>
          <ValueItem
            Icon={PiggyBankIcon}
            title='Ahorro'
            description='Porque valoramos tu dinero, por eso te ofrecemos una de las mejores tasas de cambio del Perú, para que ahorres en tus cambios.'
          />
          <ValueItem
            Icon={ShieldCheckIcon}
            title='Seguridad'
            description='Porque estamos conscientes de que mereces lo mejor, por eso nuestra plataforma es 100% amigable, sencilla y de confianza.'
          />
          <ValueItem
            Icon={ClockIcon}
            title='Rapidez'
            description='Porque nos importa tu tiempo, por eso nuestro equipo siempre trabaja para recibas tus cambios en minutos.'
          />
          <ValueItem
            Icon={BrainIcon}
            title='Innovación'
            description='Porque queremos que te sientas apoyado financieramente, por eso brindamos soluciones financieras innovadoras y revolucionaras.'
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyValues;
