import "./globals.css";
import { Epilogue } from "next/font/google";

<<<<<<< HEAD
import { register } from "swiper/element/bundle";
=======
>>>>>>> 745e455c300219704c2a8ce865bb4152ae1b815e
const EpilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
<<<<<<< HEAD
=======

import "./globals.css";
>>>>>>> 745e455c300219704c2a8ce865bb4152ae1b815e

export default function RootLayout({ children }) {
  register();
  return (
    <html lang="en">
      <body className={EpilogueFont.className}>{children}</body>
    </html>
  );
}
