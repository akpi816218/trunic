import { GlyphData } from '../lib/types';
import RootLayout from './_components/RootLayout';
import Rune from './_components/Rune';

export default function App() {
	const Chars: GlyphData[] = [
		{
			consonant: true,
			vowel: false,
			id: '872',
			phonetic: 'h',
			segments: {
				a: false,
				b: false,
				c: false,
				d: false,
				e: false,
				f: true,
				g: true,
				h: false,
				i: false,
				j: true,
				k: false,
				l: true
			},
			inverted: false
		},
		{
			id: 'ai',
			phonetic: 'aɪ',
			vowel: true,
			consonant: false,
			segments: {
				a: false,
				b: false,
				c: false,
				d: false,
				e: true,
				f: false,
				g: false,
				h: false,
				i: false,
				j: false,
				k: false,
				l: false
			},
			inverted: false
		}
	];

	return (
		<RootLayout>
			<div className="flex flex-row">
				{Chars.map(char => (
					<Rune key={char.id} data={char} />
				))}
			</div>
		</RootLayout>
	);
}
