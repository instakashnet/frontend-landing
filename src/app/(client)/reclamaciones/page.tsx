import InternalHeader from "@/components/molecules/InternalHeader/Internalheader";
import ReclamacionesForm from "./components/ReclamacionesForm/ReclamacionesForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/reclamaciones"),
  title: "Libro de Reclamaciones",
  description:
    "Gestionamos tus reclamos para poder procesarlos de forma inmediata. Atendemos cada caso según su prioridad y a la breveddad.",
  alternates: {
    canonical: "/reclamaciones"
  },
  openGraph: {
    title: "Libro de Reclamaciones",
    description:
      "Gestionamos tus reclamos para poder procesarlos de forma inmediata. Atendemos cada caso según su prioridad y a la breveddad.",
    type: "website",
    url: "https://instakash.net/reclamaciones",
    siteName: "Instakash"
  }
};

function ReclamacionesPage() {
  return (
    <>
      <main className='h-full'>
        <InternalHeader title='Libro de reclamaciones' />
        <div className='container py-20'>
          <p className='text-center mb-12'>
            Gestionamos tus reclamos para poder procesarlos de forma inmediata. Sabemos{" "}
            <b className='text-primary'>
              lo importante que es tu tiempo y tu dinero por lo que atendemos cada caso según su prioridad y a la brevedad.
            </b>
            Cambiamos la forma de operar y te damos la garantía de seguridad más alta.
          </p>
          <ReclamacionesForm />
        </div>
      </main>
    </>
  );
}

export default ReclamacionesPage;
