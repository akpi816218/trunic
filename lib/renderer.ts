import Rune from '@/_components/Rune';
import { GlyphData } from './types';
import { parseCodes, parsePhonetic } from './parser';
import { ReactNode } from 'react';
import { SpaceGlyph } from '../data';

export function renderGlyphsFromData(codes: GlyphData[][]): ReactNode[] {
	return codes
		.map(word => word.map(data => Rune({ data, key: data.id }) as ReactNode))
		.map(v =>
			v.concat(
				Rune({
					data: SpaceGlyph,
					key: ' '
				})
			)
		);
}

export function phoneticFromData(codes: GlyphData[][]): string {
	return codes
		.map(word => word.map(data => data.phonetic).join(' / '))
		.join(' // ');
}

export function unicodeFromPhonetic(str: string) {
	return parsePhonetic(str)
		.map(word => word.map(data => data.unicode).join(''))
		.join(' ');
}

export function renderGlyphsFromPhonetic(str: string) {
	return renderGlyphsFromData(parsePhonetic(str));
}

export function renderGlyphsFromUnicode(str: string) {
	return renderGlyphsFromData(parseCodes(str));
}

export function phoneticFromUnicode(str: string) {
	return phoneticFromData(parseCodes(str));
}
