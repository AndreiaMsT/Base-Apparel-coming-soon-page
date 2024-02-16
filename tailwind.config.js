/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          desaturated: "hsl(0, 36%, 70%)",
          soft: "hsl(0, 93%, 68%)",
          gray: "hsl(0, 6%, 24%)",
        },
        white: "hsl(0, 0%, 100%)",
        pink: {
          200: "hsl(0, 100%, 98%)",
          300: "hsl(0, 80%, 86%)",
          500: "hsl(0, 74%, 74%)",
        },
      },
    },
  },
  plugins: [],
};
