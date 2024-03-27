import { createRoot } from 'react-dom/client';
import Rune from './_components/Rune';
import { GlyphData } from '../lib/types';
import map from '../data/dataMap.json';

const id = new URLSearchParams(window.location.search).get('id');
if (!id)
	window.location.search = `id=${encodeURIComponent(window.prompt('id') ?? '')}`;
else
	createRoot(document.body).render(
		<p>{<Rune data={map.find(v => v.id === id)!} />}</p>
	);
