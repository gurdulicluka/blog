/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      danley: ["danley", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
