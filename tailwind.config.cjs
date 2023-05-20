/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366f1",
          "base-100": "#F8FAFC",
          "base-200": "#E2E8F0",
          "base-300": "#F8FAFC",
          "base-content": "#1F2937",
        },
      },
      {
        dark: {
          primary: "#312e81",
          "base-100": "#262626",
          "base-200": "#404040",
          "base-300": "#171717",
          "base-content": "#F9FAFB",
        },
      },
    ],
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        xl: "2rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
