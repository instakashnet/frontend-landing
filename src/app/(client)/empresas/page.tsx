import CompaniesActions from "@/components/organisms/CompaniesActions/CompaniesActions";
import CompaniesBanner from "@/components/organisms/CompaniesBanner/CompaniesBanner";
import CompanyCounters from "@/components/organisms/CompanyCounters/CompanyCounters";
import styles from "./Empresas.module.css";
import CompanySecurity from "@/components/organisms/CompanySecurity/CompanySecurity";
import ContactUs from "./components/ContactUs/ContactUs";
import CompanyTestimonials from "./components/Testimonials/Testimonials";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net/empresas"),
  title: "Empresas",
  description:
    "Conoce los términos y condiciones de uso de la plataforma de Instakash. Asegúrate de leerlos detenidamente antes de utilizar nuestros servicios.",
  alternates: {
    canonical: "/empresas"
  },
  openGraph: {
    title: "Empresas",
    description:
      "Conoce los términos y condiciones de uso de la plataforma de Instakash. Asegúrate de leerlos detenidamente antes de utilizar nuestros servicios.",
    type: "website",
    url: "https://instakash.net/empresas",
    siteName: "Instakash"
  }
};

function CompanyPage() {
  return (
    <main className='h-full'>
      <CompaniesBanner />
      <div className={styles.SectionBg}>
        <CompanyCounters />
        <CompaniesActions />
      </div>
      <CompanySecurity />
      <div className={cn("pb-20", styles.TestimonialsBg)}>
        <ContactUs />
        <CompanyTestimonials />
      </div>
    </main>
  );
}

export default CompanyPage;
