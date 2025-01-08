/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontFamily: {
        sans: "Roboto Mono, monospace",
      },
      height: {
        screen: "100dvh",
        // dynamic viewport height unit
      },
    },
  },
  plugins: [],
};
