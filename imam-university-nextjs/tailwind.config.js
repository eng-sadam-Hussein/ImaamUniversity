/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        imam: {
          50: "#f2f8fc",
          100: "#e3f1f9",
          200: "#c7e3f3",
          300: "#9ccfea",
          400: "#67b5dd",
          500: "#3d99ce",
          600: "#2d7eb4",
          700: "#286795",
          800: "#28577a",
          900: "#244966",
          950: "#132b3f"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(19, 43, 63, 0.10)",
        card: "0 12px 35px rgba(19, 43, 63, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: [],
};
