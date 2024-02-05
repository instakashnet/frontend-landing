import InternalHeader from "@/components/molecules/InternalHeader/Internalheader";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection";
import { Button } from "@/components/ui/button/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/faq"),
  title: "Preguntas y respuestas sobre Instakash",
  description: "Enterate de Tipo de Cambio Actual. Conoce la evolución del dólar en Perú en Instakash Casa de cambio Online",
  alternates: {
    canonical: "/faq"
  },
  openGraph: {
    title: "Preguntas y respuestas sobre Instakash",
    description: "Enterate de Tipo de Cambio Actual. Conoce la evolución del dólar en Perú en Instakash Casa de cambio Online",
    type: "website",
    url: "https://instakash.net/faq",
    siteName: "Instakash"
  }
};

function PreguntasFrecuentesPage() {
  return (
    <main className='h-full'>
      <InternalHeader title='Preguntas frecuentes' />
      <CategoriesSection />
      <section className='container text-center pt-10 pb-40'>
        <header className='mx-auto max-w-2xl'>
          <h2 className='text-xl font-bold text-secondary'>Déjanos ayudarte</h2>
          <h3 className='text-3xl lg:text-5xl font-bold lg:leading-[4rem] text-primary'>¿No encontraste lo que buscabas?</h3>
          <Button size='lg' className='mt-6'>
            Contáctanos
          </Button>
        </header>
      </section>
    </main>
  );
}

export default PreguntasFrecuentesPage;
