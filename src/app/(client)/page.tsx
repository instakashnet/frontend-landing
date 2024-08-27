import AdsBanner from "@/components/atoms/AdsBanner/AdsBanner";
import WorkingBanks from "@/components/molecules/workingBanks/WorkingBanks";
import AppDownload from "@/components/templates/AppDownload/AppDownload";
import Benefits from "@/components/templates/Benefits/Benefits";
import KashSection from "@/components/templates/KashSection/KashSection";
import CalculatorBanner from "@/components/templates/calculatorBanner/CalculatorBanner";
import StepsSection from "@/components/templates/stepsSection/StepsSection";
import { Metadata } from "next";
import AdsModal from "@/components/organisms/AdsModal/AdsModal";
import { getBanners, getPopup } from "@/services/ads";
import { getRates } from "@/services/exchange/getRates";
import Callout from "@/components/atoms/Callout/Callout";

export const metadata: Metadata = {
  metadataBase: new URL("https://instakash.net"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Instakash Casa de Cambio Online | Cambia Dólares a Soles",
    description: "Instakash es la casa de cambio online con el mejor tipo de cambio de dólares a soles.",
    type: "website",
    url: "https://instakash.net/",
    siteName: "Instakash"
  }
};

export const revalidate = 0;

export default async function Home() {
  const bannersResponse = getBanners();
  const popupResponse = getPopup();
  const ratesResponse = getRates();

  const [banners, popup, rates] = await Promise.all([bannersResponse, popupResponse, ratesResponse]);

  return (
    <main className='h-full'>
      <Callout>
        <p className='hidden lg:block'>
          <a
            href='https://whatsapp.com/channel/0029VaaTM6472WTwVLuGFm3V'
            target='_blank'
            rel='norefferer'
            className='cursor-pointer block w-full'
          >
            <span className='mr-2'>¿Eres una empresa?</span>
            <span className='font-semibold'>Únete a nuestro canal de whatsapp y conoce nuestras promociones en tiempo real.</span>
          </a>
        </p>
        <p className='block lg:hidden font-semibold'>¡Únete a nuestro canal de whatsapp para empresas y benefíciate!</p>
      </Callout>
      <CalculatorBanner rates={rates} />
      <WorkingBanks />
      <section className='mt-8 max-w-[100rem] mx-auto'>
        <AdsBanner banners={banners} />
      </section>
      <StepsSection />
      <Benefits />
      <KashSection />
      <AppDownload />
      {popup && <AdsModal image={popup.image} notice={popup.hasNotice ? popup.notice : undefined} show={popup.show} delay={1200} />}
    </main>
  );
}
