import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'header-bg': "url('https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fblueprint.png?alt=media&token=560889e4-4e54-4e83-af75-2fbdb8613558')",
      },
      fontFamily: {
        bankgothic: ['var(--font-bankgothic-md-bt)']
      },
      screens: {
        'xsm': '512px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        maxHeight: {
          '128': '32rem',
        }
      }
    },
   
  },
  plugins: [],
};
export default config;
