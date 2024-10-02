/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary--color": "#E0E0E0",
      "secondary--color": "#00FFFF",
      "element--primary": "#1E1E1E",
      "element--secondary": "#424242",
      "element--third": "#757575"

    },
    extend: {},
  },
  plugins: [],
}

