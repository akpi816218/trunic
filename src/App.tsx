import { useState } from 'react';
import {
	phoneticFromUnicode,
	renderGlyphsFromPhonetic,
	renderGlyphsFromUnicode,
	unicodeFromPhonetic
} from '../lib/renderer';
import RootLayout from './_components/_layout/RootLayout';
import { Divider, Input, Spacer, Tab, Tabs } from '@nextui-org/react';
import GlyphInput from './_components/GlyphInput/GlyphInput';
import { Glyphs } from '../data';
import { GlyphData } from '../lib/types';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
	const [inputUnicode, setInputUnicode] = useState<string>('');
	const [inputPhonetic, setInputPhonetic] = useState<string>('');
	const [inputGlyph, setInputGlyph] = useState<Partial<GlyphData> | undefined>(
		Glyphs.find(g => g.phonetic === 'h-aɪ')!
	);

	return (
		<RootLayout>
			<main className="dark:bg-black dark:text-white min-h-screen p-16 lg:p-32 flex flex-col items-stretch justify-normal">
				<Toaster position="top-right" />
				<Tabs size="lg">
					<Tab title="Unicode" key="u">
						<div>
							<Input
								label="Unicode input"
								placeholder="ᘇཏ ᘇཏ"
								value={inputUnicode}
								onValueChange={setInputUnicode}
							/>
							<Divider className="h-1 my-8" />
							<p className="flex flex-row *:max-h-8 lg:*:max-h-16 text-xl">
								{U2G(inputUnicode)}
							</p>
							<Spacer y={2} />
							<p
								className="text-xl"
								onClick={() =>
									toast.promise(
										window.navigator.clipboard.writeText(
											U2P(inputUnicode) ?? ''
										),
										{
											loading: 'Copying...',
											success: 'Copied!',
											error: 'Failed to copy'
										}
									)
								}
							>
								{U2P(inputUnicode)}
							</p>
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
							<p className="flex flex-row *:max-h-24 lg:*:max-h-32 text-xl">
								{P2G(inputPhonetic)}
							</p>
							<Spacer y={2} />
							<p
								className="text-xl"
								onClick={() =>
									toast.promise(
										window.navigator.clipboard.writeText(
											P2U(inputPhonetic) ?? ''
										),
										{
											loading: 'Copying...',
											success: 'Copied!',
											error: 'Failed to copy'
										}
									)
								}
							>
								{P2U(inputPhonetic)}
							</p>
						</div>
					</Tab>
					<Tab
						/**
						isDisabled
					*/ title="Glyph"
						key="g"
					>
						<div>
							<GlyphInput
								index={null}
								data={inputGlyph}
								update={(_, data) => {
									setInputGlyph(data);
									console.log(data);
								}}
							/>
							<Divider className="h-1 my-8" />
							<p
								className="text-xl"
								onClick={() =>
									inputGlyph?.phonetic &&
									toast.promise(
										window.navigator.clipboard.writeText(inputGlyph.phonetic),
										{
											loading: 'Copying...',
											success: 'Copied!',
											error: 'Failed to copy'
										}
									)
								}
							>
								{inputGlyph?.phonetic}
							</p>
							<Spacer y={2} />
							<p
								className="text-xl"
								onClick={() =>
									inputGlyph?.unicode &&
									toast.promise(
										window.navigator.clipboard.writeText(inputGlyph.unicode),
										{
											loading: 'Copying...',
											success: 'Copied!',
											error: 'Failed to copy'
										}
									)
								}
							>
								{inputGlyph?.unicode}
							</p>
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
