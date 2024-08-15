import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: {
          50: "hsl(0, 0, 55%)",
          100: "hsl(0, 0, 41%)",
        },
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
        alata: ["Alata", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('/images/mobile/image-hero.jpg')",
        "hero-desktop": "url('/images/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
