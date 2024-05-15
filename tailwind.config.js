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
          dark: '#363636',
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
