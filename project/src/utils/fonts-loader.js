import localFont from "next/font/local";

// export const covered = localFont({
//   variable: "--font-covered",
//   src: [
//     {
//       path: "../../public/font/Covered_By_Your_Grace/CoveredByYourGrace-Regular.ttf",
//       weight: "400", // Range of weights for variable fonts
//       style: "normal",
//       preload: true, // Preload the font for better performance
//       variable: true, // Indicate that this is a variable font
//     },
//   ],
// });


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