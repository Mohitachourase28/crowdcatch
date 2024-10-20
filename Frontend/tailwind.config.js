/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': '1024px', // Define custom breakpoint for laptops
      },
      spacing: {
        '1196': '1196px',
        '461': '461px',
        '269': '269px',
        '379': '379px',
        '631.08': '631.08px',
        '125.20': '125.20px',
        '40': '40px',
      },
      fontSize: {
        '104px': '104px',
        '72px': '72px',
      },
    },
  },
  plugins: [],
}
