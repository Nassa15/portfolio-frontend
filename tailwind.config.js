/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      ssm:'375px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {
      colors: {
        primary: '#1D4ED8',    // exemple: bleu
        secondary: '#9333EA',  // violet
        accent: '#F59E0B',     // orange
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
