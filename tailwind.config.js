/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: {
          "1": "#4F52A6",
          "2": "#18234D",
          "light": "#E5E5F2",
          "pale-dark": "#525D7B"
        },
        rarity: {
          "3": "#9FE8FF",
          "4": "#C4ADFF",
          "5": "#EEEE99",
        }
  
      },
      fontFamily: {
        montserrat: ['Monterrat', 'sans-serif']
      },
      backgroundImage: {
        "rarity-6": "linear-gradient(120deg,#fbffca,#baffbf,#a7efff,#ffabff)"
      }
    },
  },
  plugins: [],
}
