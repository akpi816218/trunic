import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	root: 'src',
	appType: 'mpa',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(join(__dirname, 'src', 'index.html')),
				svg: resolve(join(__dirname, 'src', 'svg.html'))
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(join(__dirname, 'src'))
		}
	},
	publicDir: 'public'
});
