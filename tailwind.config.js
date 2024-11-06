/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/assets",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
        Sora: "Sora"
      },
      backgroundImage: {
        'shadow': "url('https://i.ibb.co.com/fXB4hqB/bg-shadow.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

