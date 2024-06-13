/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'logo-color' : '#F6CF83',
        'my-color': '#444A6B',
        'dark-color' : '#2D3146',
      },
    },
  },
  plugins: [],
}