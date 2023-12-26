/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        customPink: "#fb2e86",
        customBlue: "#0d0e43",
      },
    },
  },
  plugins: [],
};
