/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors : {
        "btnColor" : "#E76F51"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

