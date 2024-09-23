/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#f5f5f5",
        blue: "#a7c7e7",
        green: "#b8e4c9",
        orange: "#ffd1a9",
        gray: "#d9d9d9"
      },
      fontFamily: {
        'poppins': ['Poppins_400Regular', 'sans-serif']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #B8E4C9 0%, #A7C7E7 49%, #FFD1A9 94%)',
      },
    },
  },
  plugins: []
}

