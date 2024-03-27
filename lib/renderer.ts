import Rune from '@/_components/Rune';
import { GlyphData } from './types';
import { parseCodes } from './parser';
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

export function renderGlyphsFromUnicode(str: string) {
	return renderGlyphsFromData(parseCodes(str));
}
