import { Glyphs } from '../data';
import { PartialGlyphData, SegmentData } from './types';

export function isVowel(segments: SegmentData): boolean {
	return segments.a || segments.b || segments.c || segments.d || segments.e;
}

export function isConsonant(segments: SegmentData): boolean {
	return (
		segments.f ||
		segments.g ||
		segments.h ||
		segments.i ||
		segments.j ||
		segments.k ||
		segments.l
	);
}

export function getFullGlyph(glyph: PartialGlyphData) {
	return (
		Glyphs.find(g =>
			Object.keys(glyph.segments).every(
				k =>
					glyph.segments[k as keyof SegmentData] ===
					g.segments[k as keyof SegmentData]
			)
		) ?? glyph
	);
}
