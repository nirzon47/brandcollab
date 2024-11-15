/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f4f3f3',
				accent: '#e4e7eb',
				primary: '#00aeee',
				secondary: '#212931',
			},
			fontFamily: {
				sans: ['Noto Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
