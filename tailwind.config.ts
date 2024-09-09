import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue': '#407AEA',
        'purple-dark': '#1513A0',
        'purple-blue': '#605DEC',
        'purple-light': '#BCBAF7',
        'purple-extra-light':'#E9E8FC',
        'purple-white':'#F6F6FE',
        'purple-grey': '#52527A20',
        'purple-white-light': '#FAFAFE',
        'deep-green': '#007B65',
        'turquoise': '#5CD6C0',
        'red': '#EB5757',
        'red-light': '#FDEFEF',
        'pink-gradient': 'linear-gradient(180deg, rgba(235,86,140,1) 0%, rgba(237,94,118,1) 100%)',
        'purple-blue-gradient': 'linear-gradient(180deg, rgba(96,93,236,1) 0%, rgba(42,38,217,1) 100%)',
        'turquoise-gradient': 'linear-gradient(180deg, rgba(92,214,192,1) 0%, rgba(34,195,166,1) 100%)',
        grey : {
          900: '#27273F',
          800: '#36374A',
          700: '#52556F',
          600: '#6E7491',
          500: '#657491',
          400: '#7C8DB0',
          300: '#A1B0CC',
          200: '#CBD4E6',
          100: '#FAFAFA'
        }
      },
      fontSize: {
        'xs': ['12px', {
          fontWeight: '400',
        }],
        'sm': ['14px', {
          fontWeight: '400',
        }],
        'base': ['16px', {
          fontWeight: '400',
        }],
        'lg': ['18px', {
          fontWeight: '400',
        }],
        'xl': ['24px', {
          fontWeight: '800',
        }],
        'header': ['18px', {
          fontWeight: '700',
        }],
        'h1': ['36px', {
          fontWeight: '600',
        }],
        'h2': ['32px', {
          fontWeight: '600',
        }],
        'h3': ['24px', {
          fontWeight: '600',
        }],
        'h4': ['18px', {
          fontWeight: '600',
        }],
        'h5': ['16px', {
          fontWeight: '600',
        }],
        'h6': ['14px', {
          fontWeight: '600',
        }],
      },
    },
  },
  plugins: [],
};
export default config;
