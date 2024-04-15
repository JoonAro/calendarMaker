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
        "formText": "rgb(107 114 128)",
      },
      fontFamily: {
        sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
        body: ['Nunito Sans'],
      },
    },

  },
  plugins: [],
}

