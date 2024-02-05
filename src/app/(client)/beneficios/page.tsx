import BenefitsSection from "@/components/templates/BenefitsSection/BenefitsSection";
import InternalHeader from "@/components/molecules/InternalHeader/Internalheader";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/beneficios"),
  title: "Beneficios de cambiar en Instakash",
  description: "Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles. ¡Enterate Aquí!",
  alternates: {
    canonical: "/beneficios"
  },
  openGraph: {
    title: "Beneficios de cambiar en Instakash",
    description: "Aprovecha los cupones, sorteos y más beneficios que te da Instakash por cambia dólares a Soles",
    type: "website",
    url: "https://instakash.net/beneficios",
    siteName: "Instakash"
  }
};

function BeneficiosPage() {
  return (
    <main className='h-full'>
      <InternalHeader title='Nuestros beneficios' />
      <BenefitsSection />
    </main>
  );
}

export default BeneficiosPage;
