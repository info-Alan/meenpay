/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#051614', // Deepest abyss teal
          900: '#071E1C', // Dark ocean green (Hero & accents)
          850: '#0A2624',
          800: '#0F3330', // Deep teal surface
          700: '#154844',
          600: '#1D635E', // Mid sea teal
          500: '#2A857E',
          400: '#43AAA2', // Soft sea foam
          300: '#75CBC4',
          200: '#AEE4DF',
          100: '#DDF5F3',
          50: '#F0FAF9',
        },
        ivory: {
          900: '#141716', // Dark charcoal text
          800: '#222826',
          700: '#3D4644', // Body text
          600: '#5E6B68',
          500: '#849390', // Muted neutral
          400: '#B0BCBA',
          300: '#D5DDDC',
          200: '#E8EDEC',
          100: '#F2F5F4',
          50: '#FBFBF9',  // Warm off-white / ivory background
        },
        meen: {
          950: '#0F0926',
          900: '#1D1248',
          800: '#321D7A',
          700: '#4627A5',
          600: '#5A2FD8', // Primary MeenPay Purple (from logo)
          500: '#6E42EC',
          400: '#8E67F3',
          300: '#B497F7',
          200: '#D7C7FB',
          100: '#EFEAFC',
          50: '#F8F6FE',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
