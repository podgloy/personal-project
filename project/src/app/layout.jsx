import "./globals.css";
import { Epilogue } from "next/font/google";
import { allenoire } from "@/utils/fonts-loader";
import { dillan } from "@/utils/fonts-loader";
import { DM_Serif_Display } from "next/font/google";
import { Archivo_Black } from "next/font/google";
import { Reenie_Beanie } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import { chillax } from "@/utils/fonts-loader";

import { register } from "swiper/element/bundle";
const EpilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
const DM_Serif_DisplayFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const Archivo_BlackFont = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
});
const Reenie_BeanieF = Reenie_Beanie({
  subsets: ["latin"],
  weight: ["400"],
});
const Dancing_ScriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["500"],
});
export const metadata = {
  title: "SOUNDTRACK of life",
  description: "If your life were a movie, what would your soundtrack be?",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  register();
  return (
    <html lang="en">
      <body
        className={`${EpilogueFont.className} ${DM_Serif_DisplayFont.className} ${Archivo_BlackFont.className} ${dillan.variable} ${allenoire.variable} ${Dancing_ScriptFont.variable} ${chillax.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
