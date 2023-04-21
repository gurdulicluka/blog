/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        md: "2rem",
        "2xl": "4rem",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      danley: ["danley", "sans-serif"],
    },
  },
  plugins: [],
};
