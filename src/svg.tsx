import { createRoot } from 'react-dom/client';
import Rune from './_components/Rune';
import { GlyphData } from '../lib/types';

const data = new URLSearchParams(window.location.search).get('data');
if (!data)
	window.location.search = `data=${encodeURIComponent(window.prompt('data') ?? '')}`;
else
	createRoot(document.body).render(
		<p>{<Rune data={JSON.parse(decodeURIComponent(data)) as GlyphData} />}</p>
	);
