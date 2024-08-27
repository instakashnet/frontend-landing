import BenefitsSection from "@/components/templates/BenefitsSection/BenefitsSection";
import InternalHeader from "@/components/molecules/InternalHeader/Internalheader";
import { Metadata } from "next";
import { getBenefits } from "@/services/ads";

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

export const revalidate = 0;

export default async function BeneficiosPage() {
  const benefits = await getBenefits();

  return (
    <main className='h-full'>
      <InternalHeader title='Nuestros beneficios' />
      <BenefitsSection benefits={benefits} />
    </main>
  );
}
