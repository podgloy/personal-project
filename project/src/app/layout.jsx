import "./globals.css";
import { Epilogue } from "next/font/google";

import { register } from "swiper/element/bundle";
const EpilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export default function RootLayout({ children }) {
  register();
  return (
    <html lang="en">
      <body className={EpilogueFont.className}>{children}</body>
    </html>
  );
}
