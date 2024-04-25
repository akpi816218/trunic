import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { GlyphData, GlyphKey, type Word } from '../../../lib/types';
import GlyphInput from './GlyphInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Word({
	data,
	index,
	color = '#000000',
	update,
	del
}: {
	data: Word;
	index: number;
	color?: string;
	update: (index: number, data: Word) => void;
	del: (index: number) => void;
}) {
	return (
		<span>
			{...data
				.map((glyph, i) => (
					<GlyphInput
						index={
							{
								indexW: index,
								indexG: i
							} satisfies GlyphKey
						}
						data={glyph}
						color={color}
						update={onChange}
						del={onDel}
					/>
				))
				.concat(
					<div className="flex flex-col items-center">
						<FontAwesomeIcon icon={faPlus} />
					</div>
				)}
		</span>
	);

	function onChange(key: GlyphKey, glyph: GlyphData) {
		const newWord = [...data];
		newWord[index] = glyph;
		update(key.indexW, newWord);
	}

	function onDel(key: GlyphKey) {
		const newWord = [...data];
		newWord.splice(key.indexG, 1);
		if (newWord.length === 0) del(index);
		else update(key.indexW, newWord);
	}
}
