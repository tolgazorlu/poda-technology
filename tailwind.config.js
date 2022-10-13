module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      animation: {
        shake1: "shake1 3s infinite ease-in-out",
        shake2: "shake2 3s infinite ease-in-out"
      },
      keyframes: {
        shake1: {
          "0%": {           
            top: "-20px"
          },
          "50%": {
            top: "20px"
          },
          "100%": {
            top: "-20px"
          }
        },
        shake2: {
          "0%": {           
            top: "20px"
          },
          "50%": {
            top: "-20px"
          },
          "100%": {
            top: "20px"
          }
        }
      }
    },
  },
  plugins: [],
}