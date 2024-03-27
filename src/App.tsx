import { useState } from 'react';
import { renderGlyphsFromUnicode } from '../lib/renderer';
import RootLayout from './_components/RootLayout';
import { Divider, Input } from '@nextui-org/react';

export default function App() {
	const [input, setInput] = useState<string>('');

	return (
		<RootLayout>
			<main className="p-16 lg:p-32 flex flex-col items-stretch justify-normal">
				<Input
					label="Unicode input"
					placeholder="ᘇཏ ᘇཏ"
					value={input}
					onValueChange={setInput}
				/>
				<Divider className="h-1 my-8" />
				<p className="flex flex-row *:max-h-8 lg:*:max-h-16">{render(input)}</p>
			</main>
		</RootLayout>
	);

	function render(s: string) {
		try {
			return renderGlyphsFromUnicode(s) ?? '';
		} catch {}
	}
}
