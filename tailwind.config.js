/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f7f7f7',
				accent: '#e4e7eb',
				primary: '#00aeee',
				secondary: '#212931',
			},
		},
	},
	plugins: [],
}
