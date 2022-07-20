/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'transparency': "linear-gradient(rgba(0, 0, 0, .80), rgba(0, 0, 0, 0.80)100%), url(https://c.tenor.com/IvyuPtEfzhoAAAAM/matrix.gif);",
      }
    },
  },
  plugins: [],
};
