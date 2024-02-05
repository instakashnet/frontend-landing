import CompanyValues from "@/components/organisms/CompanyValues/CompanyValues";
import Counters from "@/components/organisms/Counters/Counters";
import AboutUsTemplate from "@/components/templates/AboutUsTemplate/AboutUsTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/nosotros"),
  title: "Conoce Instakash",
  description: "Conoce la razones de por qué escoger a Instakash para realizar tus cambio de dólares a soles",
  alternates: {
    canonical: "/nosotros"
  },
  openGraph: {
    title: "Conoce Instakash",
    description: "Conoce la razones de por qué escoger a Instakash para realizar tus cambio de dólares a soles",
    type: "website",
    url: "https://instakash.net/nosotros",
    siteName: "Instakash"
  }
};

function NosotrosPage() {
  return (
    <main className='h-full'>
      <AboutUsTemplate />
      <Counters />
      <CompanyValues />
      <section className='container flex flex-col items-center justify-center gap-10 py-20 mt-[-2rem]'>
        <h2 className='text-4xl max-w-xl mx-auto text-primary font-bold'>Crea una historia con nosotros</h2>
        <a
          className='text-white bg-primary p-3 px-6 font-semibold rounded-sm cursor-pointer'
          href='https://app.instakash.net'
          target='_blank'
          rel='noreferrer'
        >
          Registrate y cambia
        </a>
      </section>
    </main>
  );
}

export default NosotrosPage;
