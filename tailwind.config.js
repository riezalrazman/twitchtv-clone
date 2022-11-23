/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: "500px",
      // => @media( min-width: 640px) {...}

      sm: "640px",
      // => @media( min-width: 640px) {...}
      md: "768px",
      // => @media (min-width: 768px) {...}
      lg: "1028px",
      // => @media (min-width: 1028px) {...}
      xl: "1280px",
      // => @media (min-width: 1280px) {...}

      "2xl": "1600px",
      // => @media (min-width: 1280px) {...}

      "3xl": "1800px",
      // => @media (min-width: 1280px) {...}
      "4xl": "2000px",
      // => @media (min-width: 1280px) {...}
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};