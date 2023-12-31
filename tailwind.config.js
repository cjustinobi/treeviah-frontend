/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // content: [
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",

  //   Or if using `src` directory:
  //   "./src/**/*.{js,ts,jsx,tsx,mdx}",
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#800080",
        primarylight:"#952495",
        "primary-light": "#952B95",
        white: "#FFFFFF",
        gray: "#1D1D1D",
        gray1: "#D2D2D2",
        "gray-light": "#C0C0C0",
        "bg-light": "#D5AAD5",
        yellow1: "#FFEE00",
        orange1: "#FFA500",
        rose1: "#FD6088",
        brown: "#CD7F32",
        teal1: "#009688",
        electricblue: "#007BFF",
        green1: "#018101",
        blue1: "#0A5AA4",
        
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],

      },
      keyframes: {
        fadein: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      }
    },
  },
  plugins: [],
};
