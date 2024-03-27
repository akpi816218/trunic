import { nextui } from '@nextui-org/react';
import { Config } from 'tailwindcss';

export const config: Config = {
	content: [
		'./src/**/*.{html,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
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
	plugins: [nextui()]
};

export default config;
