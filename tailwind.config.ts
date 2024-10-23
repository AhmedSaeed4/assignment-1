import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-25%)', opacity: '0' }, 
          '100%': { transform: 'translateY(0)', opacity: '1' },  
        },
        slideright: {
          '0%': { transform: 'translatex(-25%)', opacity: '0' },
          '100%': { transform: 'translatex(0)', opacity: '1' },  
        },
        slideleft: {
          '0%': { transform: 'translatex(25%)', opacity: '0' }, 
          '100%': { transform: 'translatex(0)', opacity: '1' }, 
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-out',
        slideDown: 'slideDown 1s ease-out',
        slideright: 'slideright 1s ease-out',
        slideleft: 'slideleft 1.1s ease-out'
      },
      
      backgroundImage:{
        bannerImg:"url('/comp 10.png')"
      },
      
      colors: { 
        ryzen: {
          900: "#D4CBBF",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;
