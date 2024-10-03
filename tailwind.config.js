/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-input": "#BDBDBD",
        "gray-text": "#757575",
        "gray-login-button": "#2F3538"
      },
      fontFamily: {
        'login-label-input': ['"Zen Kaku Gothic Antique"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

