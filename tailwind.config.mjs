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
      // {
      //   mcappold: {
      //     primary: "#075985",
      //     "primary-content": "#F9F6EE",
      //     secondary: "#0891b2",
      //     "secondary-content": "#C7C8CC",
      //     accent: "#c5ad53",
      //     "accent-content": "#cecece",
      //     neutral: "#cecece",
      //     "neutral-content": "#222222",
      //     base: "#BDCDD6",
      //     "base-content": "#cecece",
      //     black: "#222222",
      //     white: "#f8f8f8",
      //     info: "#8b5cf6",
      //     "info-content": "#cecece",
      //     success: "#22c55e",
      //     "success-content": "#cecece",
      //     warning: "#eab308",
      //     "warning-content": "#cecece",
      //     error: "#ef4444",
      //     "error-content": "#cecece",
      //   },
      // },
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
