import { writeFile } from 'fs/promises';
import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import { Glyphs } from '../data';

const PORT = 5713;
// const StartValue = 0;

const vite = await (await createServer()).listen(PORT);

const browser = await puppeteer.launch({
	headless: true,
	defaultViewport: {
		width: 320,
		height: 480
	}
});

const page = await browser.newPage();

for (const glyph of Glyphs) {
	// if (parseInt(glyph.id) < StartValue) continue;

	await page.goto(`http://localhost:${PORT}/svg?id=${glyph.id}`);
	const ts = Date.now();
	while (Date.now() - ts < 100) {}
	await writeFile(
		`imgs/${glyph.id}.svg`,
		(await page.evaluate(() => {
			return window.document.querySelector('svg')?.outerHTML;
		}))!
	);
}

await vite.close();
