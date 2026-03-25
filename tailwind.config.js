/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ifood: {
          brand: '#EB0033',
          primary: '#141414',
          secondary: '#666666',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#EBEBEB',
        },
      },
    },
  },
  plugins: [],
}
