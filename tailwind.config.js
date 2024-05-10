/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: {
          light: "#67595E",
          dark: '##FDFBFA',
        },
        smallBackground: {
          light: '#EED6D3',
          dark: '#272144',
        },
        accentColor: {
          light: '#E8B4B8',
          dark: '#FDFBFA',
        },
        whiteReplacement: {
          light: '#272144',
          dark: '#FDFBFA',
        },
        fontDark: {
          light: '#272144',
          dark: '#FDFBFA',
        },
        formText: 'rgb(107 114 128)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'ui-sans-serif', 'system-ui'],
        body: ['Nunito Sans'],
      },
    },
  },
  plugins: [],
}

/* "mainBackground": "#67595E",
  "smallBackground": "#EED6D3",
    "accentColor": "#E8B4B8",
      "whiteReplacement": "#FDFBFA",
        "fontDark": "#272144",
          "formText": "rgb(107 114 128)", */