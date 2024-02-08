import AdsBanner from "@/components/atoms/AdsBanner/AdsBanner";
import WorkingBanks from "@/components/molecules/workingBanks/WorkingBanks";
import AppDownload from "@/components/templates/AppDownload/AppDownload";
import Benefits from "@/components/templates/Benefits/Benefits";
import KashSection from "@/components/templates/KashSection/KashSection";
import CalculatorBanner from "@/components/templates/calculatorBanner/CalculatorBanner";
import StepsSection from "@/components/templates/stepsSection/StepsSection";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { getBannersQuery } from "../../../sanity/utils/getBanners";
import { Metadata } from "next";
import AdsModal from "@/components/organisms/AdsModal/AdsModal";
import { getPopupQuery } from "../../../sanity/utils/getPopup";
import { Popup } from "@/models/Popup.model";

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

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getBanners() {
  try {
    const banners = await getBannersQuery();
    return banners;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(message);
  }
}

async function getPopup() {
  try {
    const popup = await getPopupQuery();
    return popup;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error(message);
  }
}

export default async function Home() {
  const banners = await getBanners();
  const popup: Popup = await getPopup();

  return (
    <main className='h-full'>
      <CalculatorBanner />
      <WorkingBanks />
      <section className='mt-8 max-w-[100rem] mx-auto'>
        <AdsBanner banners={banners} />
      </section>
      <StepsSection />
      <Benefits />
      <KashSection />
      <AppDownload />
      {popup && <AdsModal image={popup.image} show={popup.show} />}
    </main>
  );
}
