import { Open_Sans, Poppins } from "next/font/google";

export const poppins = Poppins({ weight: ["400", "300", "500", "700", "900"], subsets: ["latin"], variable: "--font-heading" });
export const openSans = Open_Sans({ weight: ["400", "300", "500", "700"], subsets: ["latin"], variable: "--font-body" });
