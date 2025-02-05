/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(circle, rgba(0,0,0,0.1) 2px, transparent 40px, transparent 80px)",
      },
    },
  },
  plugins: [],
};
