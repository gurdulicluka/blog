/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366f1",
          "primary-content": "#F8FAFC",
          "primary-focus": "#3730a3",
          "base-100": "#F8FAFC",
          "base-200": "#E2E8F0",
          "base-300": "#F8FAFC",
          "base-content": "#1F2937",
        },
      },
      {
        dark: {
          primary: "#312e81",
          "primary-content": "#F8FAFC",
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
