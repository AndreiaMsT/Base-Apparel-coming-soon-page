/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
    
      md: "547px",
     
      lg: "768px",

      xl: "1024px",

      "2xl": "1680px",
    
    },
    extend: {
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: {
        firstGradient:
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        secondGradient:
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        errorIcon: "url('./images/icon-error.svg')",
        patternDesktop: "url('./images/bg-pattern-desktop.svg')",
      },
      lineHeight: {
        heading: "0.75",
      },
      letterSpacing: {
        heading: "1.5rem",
      },
      backgroundPosition: {
        invalid: "center right 8rem",
        invalidMobile: "center right 5rem",
      },
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
