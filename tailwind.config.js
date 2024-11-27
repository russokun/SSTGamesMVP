/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2a4365',
          dark: '#102a43',
        },
        secondary: {
          DEFAULT: '#38a169',
          light: '#48bb78',
          dark: '#2f855a',
        },
        accent: {
          DEFAULT: '#ed8936',
          light: '#f6ad55',
          dark: '#dd6b20',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}