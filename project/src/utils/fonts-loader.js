import localFont from "next/font/local";

export const dillan = localFont({
  variable: "--font-dillan",
  src: [
    {
      path: "../../public/font/made_dillan/MADE_Dillan.otf",
      weight: "100", // Range of weights for variable fonts
      style: "normal",
      preload: true, // Preload the font for better performance
      variable: true, // Indicate that this is a variable font
    },
  ],
});

export const allenoire = localFont({
  variable: "--font-allenoire",
  src: [
    {
      path: "../../public/font/allenoire/Allenoire_Font.otf",
      weight: "400",
      style: "normal",
      preload: true,
      variable: true,
    },
  ],
});

export const astralaga = localFont({
  variable: "--font-astralaga",
  src: [
    {
      path: "../../public/font/astralaga/Astralaga_Font.ttf",
      weight: "400",
      style: "normal",
      preload: true,
      variable: true,
    },
  ],
});

export const chillax = localFont({
  variable: "--font-chillax",
  src: [
    {
      path: "../../public/font/chillax/Chillax_Font.otf",
      weight: "400",
      style: "normal",
      preload: true,
      variable: true,
    },
  ],
});