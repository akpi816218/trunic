import { writeFile } from 'fs/promises';
import { Consonants, Unicodes, Vowels } from '../data';
import { GlyphData } from '../lib/types';

const shuffledUnicodes = shuffle(Unicodes);

const allPossibleGlyphs: GlyphData[] = [];
for (const consonant of Consonants)
	for (const vowel of Vowels)
		for (const bool of [true, false])
			allPossibleGlyphs.push({
				consonant: consonant.consonant || vowel.consonant,
				vowel: consonant.vowel || vowel.vowel,
				id: allPossibleGlyphs.length.toString(),
				phonetic: bool
					? `${vowel.phonetic}-${consonant.phonetic}`
					: `${consonant.phonetic}-${vowel.phonetic}`,
				segments: {
					a: consonant.segments.a || vowel.segments.a,
					b: consonant.segments.b || vowel.segments.b,
					c: consonant.segments.c || vowel.segments.c,
					d: consonant.segments.d || vowel.segments.d,
					e: consonant.segments.e || vowel.segments.e,
					f: consonant.segments.f || vowel.segments.f,
					g: consonant.segments.g || vowel.segments.g,
					h: consonant.segments.h || vowel.segments.h,
					i: consonant.segments.i || vowel.segments.i,
					j: consonant.segments.j || vowel.segments.j,
					k: consonant.segments.k || vowel.segments.k,
					l: consonant.segments.l || vowel.segments.l
				},
				inverted: bool,
				unicode: shuffledUnicodes[allPossibleGlyphs.length]
			});
for (const consonant of Consonants)
	allPossibleGlyphs.push({
		consonant: consonant.consonant,
		vowel: consonant.vowel,
		id: allPossibleGlyphs.length.toString(),
		phonetic: consonant.phonetic,
		segments: {
			a: consonant.segments.a,
			b: consonant.segments.b,
			c: consonant.segments.c,
			d: consonant.segments.d,
			e: consonant.segments.e,
			f: consonant.segments.f,
			g: consonant.segments.g,
			h: consonant.segments.h,
			i: consonant.segments.i,
			j: consonant.segments.j,
			k: consonant.segments.k,
			l: consonant.segments.l
		},
		inverted: false,
		unicode: shuffledUnicodes[allPossibleGlyphs.length]
	});
for (const vowel of Vowels)
	allPossibleGlyphs.push({
		consonant: vowel.consonant,
		vowel: vowel.vowel,
		id: allPossibleGlyphs.length.toString(),
		phonetic: vowel.phonetic,
		segments: {
			a: vowel.segments.a,
			b: vowel.segments.b,
			c: vowel.segments.c,
			d: vowel.segments.d,
			e: vowel.segments.e,
			f: vowel.segments.f,
			g: vowel.segments.g,
			h: vowel.segments.h,
			i: vowel.segments.i,
			j: vowel.segments.j,
			k: vowel.segments.k,
			l: vowel.segments.l
		},
		inverted: false,
		unicode: shuffledUnicodes[allPossibleGlyphs.length]
	});

await writeFile(
	'dataMap.json',
	JSON.stringify(
		allPossibleGlyphs.map((g, i) => ({ ...g, unicode: shuffledUnicodes[i] }))
	)
);

/**
 * Shuffle an array
 * @param {T[]} array The array to shuffle
 * @returns {T[]} The shuffled array
 */
function shuffle<T>(array: T[]): T[] {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex]
		];
	}

	return array;
}
