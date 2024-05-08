import { useState } from 'react';
import { Sentence, Word } from '../../../lib/types';
import WordComponent from './Word';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import { SpaceGlyph } from '../../../data';

export default function SentenceComponent({
	data = [[SpaceGlyph]],
	color = '#000000',
	update
}: {
	data?: Sentence;
	color?: string;
	update?: (data: Sentence) => void;
}) {
	const [sentence, setSentence] = useState(data);

	return (
		<div>
			{...sentence
				.map((word, i) => (
					<WordComponent
						index={i}
						data={word}
						color={color}
						update={onChange}
						del={onDel}
					/>
				))
				.concat(
					<div className="flex flex-col items-center hover:scale-110">
						<FontAwesomeIcon icon={faPlusCircle} />
					</div>
				)}
		</div>
	);

	function onChange(index: number, word: Word) {
		const newSentence = [...sentence];
		newSentence[index] = word;
		update && update(newSentence);
	}

	function onDel(index: number) {
		const newSentence = [...sentence];
		newSentence.splice(index, 1);
	}
}
