/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#0bb04b", /* green accent */
          600: "#08963f"
        }
      },
      borderRadius: {
        'xl-2': '1rem'
      }
    },
  },
  plugins: [],
}
