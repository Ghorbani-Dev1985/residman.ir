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
    DEFAULT: "#feca03",
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
