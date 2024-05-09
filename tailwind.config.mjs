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
  plugins: [require("@tailwindcss/typography"),  require("daisyui")],
  daisyui: {
    themes: [
      {
        mcapp: {
          "primary": "#1C658C",
		  "primary-content": "#cecece",
          "secondary": "#398AB9",
		  "secondary-content": "#C7C8CC",
          "accent": "#D8D2CB",
		  "accent-content": "#cecece",
          "neutral": "#cecece",
		  "neutral-content": "#252525",
      "base": "#BDCDD6",
		  "base-content": "#cecece",
      "background": "#C7C8CC",
      "black": "#252525",
      "white": "#f8f8f8",
          "info": "#8b5cf6",
		  "info-content": "#cecece",
          "success": "#22c55e",
		  "success-content": "#cecece",
          "warning": "#eab308",
		  "warning-content": "#cecece",
          "error": "#ef4444",
		  "error-content": "#cecece",
        },
      },
    ],
  },
  modules: {
    textSizes: ["responsive", "hover", "focus"],
  },
};
