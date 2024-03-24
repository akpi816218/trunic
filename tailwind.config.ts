import { Config } from 'tailwindcss';

export const config: Config = {
	content: ['src/**/*.{html,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'bounce-fast': 'bounce 0.5s infinite'
			},
			borderRadius: {
				huge: '2rem',
				giga: '3rem'
			}
		}
	},
	plugins: []
};

export default config;
