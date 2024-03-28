/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainBackground": "#67595E",
        "smallBackground": "#EED6D3",
        "accentColor": "#E8B4B8",
        "whiteReplacement": "#FDFBFA",
        "fontDark": "#272144",
      },
    },
  },
  plugins: [],
}

