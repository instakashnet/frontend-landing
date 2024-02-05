import { cn } from "@/lib/utils";
import styles from "./AboutUsBanner.module.css";

function AboutUsBanner() {
  return (
    <section className={cn("w-full min-h-[70vh] grid place-content-center", styles.AboutUsBg)}>
      <div className='container text-center'>
        <div className='max-w-[60rem]'>
          <h2 className='text-2xl font-bold text-center mb-6 text-white'>Somos la Fintech del futuro</h2>
          <h1 className='text-3xl lg:text-5xl xl:text-6xl font-bold lg:!leading-[4.5rem] text-white'>
            Buscamos que tu experiencia en cambiar dinero sea rápida, segura y placentera.
          </h1>
        </div>
      </div>
    </section>
  );
}

export default AboutUsBanner;
