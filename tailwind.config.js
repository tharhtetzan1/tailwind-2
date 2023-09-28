/** @type {import('tailwindcss').Config} */
export default {
  content: ["**.html",],
  theme: {
    extend: {
      display: ['group-focus'],
      colors: {
        'primary': {
          100: "#d3e0fb",
          200: "#a8c1f7",
          300: "#7ca1f3",
          400: "#5182ef",
          500: "#2563eb",
          600: "#1e4fbc",
          700: "#163b8d",
          800: "#0f285e",
          900: "#07142f"
        },
        'secondary': {
          100: "#d8f7ff",
          200: "#b1efff",
          300: "#8be6fe",
          400: "#64defe",
          500: "#3dd6fe",
          600: "#31abcb",
          700: "#258098",
          800: "#185666",
          900: "#0c2b33"
        },

      }


    },
  },
  plugins: [],
}

