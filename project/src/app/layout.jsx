import "./globals.css";
import { Epilogue } from "next/font/google";
import { allenoire } from "@/utils/fonts-loader";
import { dillan } from "@/utils/fonts-loader";

import { register } from "swiper/element/bundle";
const EpilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
export const metadata = {
  title: "SOUND TRACK of life",
  description: "If your life were a movie, what genre would it belong to?",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  register();
  return (
    <html lang="en">
      <body
        className={`${EpilogueFont.className} ${dillan.variable} ${allenoire.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
