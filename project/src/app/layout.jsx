import { Epilogue } from "next/font/google";

const EpilogueFont = Epilogue({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={EpilogueFont.className}>{children}</body>
    </html>
  );
}
