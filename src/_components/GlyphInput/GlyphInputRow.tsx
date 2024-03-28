import { useState } from 'react';
import { Sentence } from '../../../lib/types';
import GlyphInput from './GlyphInput';
import { getGlyphInputKey } from './functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faArrowsLeftRightToLine } from '@fortawesome/free-solid-svg-icons';

export default function GlyphInputRow(props: {
	initialValue?: Sentence;
	onValueChange?: (newValue: Sentence) => void;
}) {
	const [value, setValue] = useState<Sentence>(props.initialValue ?? []);

	return (
		<div className="flex flex-row">
			{value.map((word, indexW) =>
				word.map((glyph, indexG) => (
					<GlyphInput
						key={getGlyphInputKey(indexW, indexG)}
						data={glyph}
						update={(key, data) => {
							const newValue = value.map((word, iW) =>
								iW === indexW
									? word.map((glyph, iG) => (iG === indexG ? data : glyph))
									: word
							);
							setValue(newValue);
							if (props.onValueChange) props.onValueChange(newValue);
						}}
						del={key => {
							const newValue = value
								.map((word, i) =>
									i === indexW ? word.filter((_, i) => i !== indexG) : word
								)
								.filter(word => word.length > 0);
							setValue(newValue);
							if (props.onValueChange) props.onValueChange(newValue);
						}}
					/>
				))
			)}

			<div className="flex flex-col items-center justify-center gap-8">
				{/* Add new glyph to word */}
				<FontAwesomeIcon
					icon={faPlus}
					className="p-2 rounded-full hover:bg-neutral-200"
					onClick={() => {
						const newValue = value.map((word, i) =>
							i === value.length - 1 ? [...word] : word
						);
						setValue(newValue);
						if (props.onValueChange) props.onValueChange(newValue);
					}}
				/>
				{/* Add new word with empty glyph */}
				<FontAwesomeIcon
					icon={faArrowsLeftRightToLine}
					className="p-2 rounded-full hover:bg-neutral-200"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
}
