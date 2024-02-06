import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { openSans, poppins } from "@/utils/fonts";
import Header from "@/components/molecules/header/Header";
import Footer from "@/components/molecules/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import FacebookPixelEvents from "@/components/utils/FacebookPixelEvents";

const GAT_MANAGER_ID = process.env.NEXT_PUBLIC_TAG_MANAGER_ID ?? "";
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID_MAIN ?? "";

export const metadata: Metadata = {
  title: {
    default: "Instakash Casa de Cambio Online | Cambia Dólares a Soles",
    template: "%s | Casa de Cambio Online"
  },
  description:
    "Cambia dólares a Soles en la casa de cambio online que tiene el mejor tipo de cambio. Instakash es regulada por la SBS Cambia Seguro, Cambia aquí.",
  authors: [{ name: "Instakash" }],
  keywords: ["casa de cambio", "dólares a soles", "mejor tipo de cambio", "cambio seguro", "casa de cambio online", "instakash"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es_PE'>
      <body className={cn("min-h-screen font-body antialiased", `${poppins.variable} ${openSans.variable}`)}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
      <GoogleTagManager gtmId={GAT_MANAGER_ID} />
      <FacebookPixelEvents pixelId={FACEBOOK_PIXEL_ID} />
    </html>
  );
}
