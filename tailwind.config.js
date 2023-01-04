/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    //"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#35126c",
        midLight: "#ffdfff",
        lightest: "#ffeaff",
      },
      backgroundImage: {
        bgGradient:
          "linear-gradient(to bottom, #5e16a2, #5f16a3, #6116a3, #6217a4, #6317a4, #6718a4, #6a19a5, #6e1aa5, #741ca5, #7a1ea5, #8021a6, #8523a6);",
      },
      boxShadow: {
        baseShadow:
          "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      },
      screens: {
        //min ettol a hosszusagtol apply
        minW300px: "300px",
        minW1000px: "1000px",
        minW1800px: "1800px",
      },
      keyframes: {
        show: {
          "0%": { opacity: "0", transform: "translateX(5%)" },
          "20%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        show: "show 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
