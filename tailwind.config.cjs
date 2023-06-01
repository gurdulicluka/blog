/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6366f1",
          "primary-content": "#F8FAFC",
          "primary-focus": "#3730a3",
          "base-100": "#F8FAFC",
          "base-200": "#e5e7eb",
          "base-300": "#F8FAFC",
          "base-content": "#1F2937",
          neutral: "#F8FAFC",
          accent: "#6366f1",
        },
      },
      {
        dark: {
          primary: "#3730a3",
          "primary-content": "#F8FAFC",
          "primary-focus": "#312e81",
          "base-100": "#262626",
          "base-200": "#404040",
          "base-300": "#171717",
          "base-content": "#F9FAFB",
          neutral: "#404040",
          accent: "#818cf8",
        },
      },
    ],
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        xl: "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
