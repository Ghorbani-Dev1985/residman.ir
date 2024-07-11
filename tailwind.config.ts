import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '0.625rem',
        }
},
colors:{
  primary: {
    50:  "#F3E8F8",
    100: "#E5CDEF",
    200: "#CA9BDF",
    300: "#B069CE",
    400: "#933CB9",
    500: "#6D2C88",
    600: "#56236C",
    700: "#401A51",
    800: "#2B1136",
    900: "#15091B",
    950: "#0C050F",
    DEFAULT: "#6d2c88",
     },
     secondary: {
      50:  "#FDECF2",
      100: "#FCD5E3",
      200: "#F8AAC7",
      300: "#F580AB",
      400: "#F1558E",
      500: "#EE2C72",
      600: "#D01157",
      700: "#9C0D41",
      800: "#68082B",
      900: "#340416",
      950: "#1C020C",
      DEFAULT: '#ee2c72',
     },
     success: 'rgb(0 , 192 , 115)',
     warning: 'rgb(255 , 153 , 0)',
     error:   'rgb(255,71 , 87)',
     info: '#0ea5e9',
 },
 fontFamily: {
  shabnam: ["var(--font-shabnam-FD)"],
},
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      scrollbar: ["light"],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
export default config;
