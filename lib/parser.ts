import { Glyphs } from '../data';
import { GlyphData, NumString } from './types';

export function parseCodes(unicode: string): GlyphData[][] {
	return unicode.split(' ').map(w => w.split('').map(c => unicodeToGlyph(c)));
}

export function unicodeToGlyph(unicode: string): GlyphData {
	let glyph = Glyphs.find(glyph => glyph.unicode === unicode);
	if (!glyph) throw new Error(`Glyph not found for unicode ${unicode}`);
	return glyph;
}

export function parsePhonetic(phonetic: string): GlyphData[][] {
	return phonetic
		.split(' // ')
		.map(w => w.split(' / ').map(c => phoneticToGlyph(c)));
}

export function phoneticToGlyph(phonetic: string): GlyphData {
	let glyph = Glyphs.find(glyph => glyph.phonetic === phonetic);
	if (!glyph) throw new Error(`Glyph not found for phonetic ${phonetic}`);
	return glyph;
}
