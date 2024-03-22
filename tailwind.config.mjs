/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/fonts/*',],
	theme: {
		extend: {
			
		},
		fontFamily: {
			sans: ['Rubik', 'sans-serif'],
		},
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui")],
	daisyui: {
		themes: ["business",]
	},
	modules: {
		textSizes: ["responsive", "hover", "focus"],
	}
}