/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/fonts/*",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: [
      {
        mcapp: {
          primary: "#075985",
          "primary-content": "#F9F6EE",
          secondary: "#398AB9",
          "secondary-content": "#FAF9F6",
          accent: "#c5ad53",
          "accent-content": "#cecece",
          neutral: "#dadada",
          "neutral-content": "#222222",
          "base-100": "#222222",
          "base-200": "#333333",
          "base-300": "#444444",
          "base-content": "#FAF9F6",
          info: "#DF892B",
          success: "#22c55e",
          warning: "#f96954",
          error: "#ef4444",
        },
      },
    ],
  },
  modules: {
    textSizes: ["responsive", "hover", "focus"],
  },
};
