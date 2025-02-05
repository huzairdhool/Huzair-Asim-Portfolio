module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        circularLight: 'repeating-linear-gradient(rgba(0, 0, 0, 0.04) 2px, #f5f5f5 100px)',
      },
    },
  },
  plugins: [],
}
