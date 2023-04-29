/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          primary: "#10B981",
          "base-100": "#F9FAFB",
          neutral: "#171717",
        },
      },
      {
        dark: {
          primary: "#047857",
          "base-100": "#1F2937",
          neutral: "#171717",
        },
      },
    ],
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          100: { opacity: "100" },
        },
      },
      animation: {
        fadeIn: "fadeIn 250ms ease-in 1",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
