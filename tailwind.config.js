/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': "#1597E4",
        "danger": "#D86161",
        "font-white": "#FAFAFA",
        "light-gray": "#E6E6E6",
        "gray": "#7A7A7A",
        "black": "#212121",

      },
    },
  },
  plugins: [],
}

