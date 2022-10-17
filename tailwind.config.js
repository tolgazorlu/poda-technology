module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: "#19a9e9",
        darkBlue: "#0f172a",
        pink: "#a35687",
      },
      fontFamily: {
        burtons: "burtons",
        poppins: "Poppins"
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