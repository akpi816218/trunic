import { useState } from 'react';
import {
	phoneticFromUnicode,
	renderGlyphsFromPhonetic,
	renderGlyphsFromUnicode,
	unicodeFromPhonetic
} from '../lib/renderer';
import RootLayout from './_components/_layout/RootLayout';
import { Divider, Input, Tab, Tabs } from '@nextui-org/react';
import GlyphInputRow from './_components/GlyphInput/Sentence';

export default function App() {
	const [inputUnicode, setInputUnicode] = useState<string>('');
	const [inputPhonetic, setInputPhonetic] = useState<string>('');

	return (
		<RootLayout>
			<main className="dark:bg-black dark:text-white min-h-screen p-16 lg:p-32 flex flex-col items-stretch justify-normal">
				<Tabs
					size="lg"
					classNames={
						{
							// base: 'self-center'
						}
					}
				>
					<Tab title="Unicode" key="u">
						<div>
							<Input
								label="Unicode input"
								placeholder="ᘇཏ ᘇཏ"
								value={inputUnicode}
								onValueChange={setInputUnicode}
							/>
							<Divider className="h-1 my-8" />
							<p className="flex flex-row *:max-h-8 lg:*:max-h-16">
								{U2G(inputUnicode)}
							</p>
							<p>{U2P(inputUnicode)}</p>
						</div>
					</Tab>
					<Tab title="Phonetic" key="p">
						<div>
							<Input
								label="Phonetic input"
								placeholder="ᘇཏ / ᘇཏ"
								value={inputPhonetic}
								onValueChange={setInputPhonetic}
							/>
							<Divider className="h-1 my-8" />
							<p className="flex flex-row *:max-h-8 lg:*:max-h-16">
								{P2G(inputPhonetic)}
							</p>
							<p>{P2U(inputPhonetic)}</p>
						</div>
					</Tab>
					<Tab title="Glyph" key="g">
						<div>
							<GlyphInputRow />
						</div>
					</Tab>
				</Tabs>
			</main>
		</RootLayout>
	);

	function U2G(s: string) {
		try {
			return renderGlyphsFromUnicode(s) ?? '';
		} catch {}
	}

	function U2P(s: string) {
		try {
			return phoneticFromUnicode(s) ?? '';
		} catch {}
	}

	function P2G(s: string) {
		try {
			return renderGlyphsFromPhonetic(s) ?? '';
		} catch {}
	}

	function P2U(s: string) {
		try {
			return unicodeFromPhonetic(s) ?? '';
		} catch {}
	}
}
