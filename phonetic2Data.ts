import { Glyphs } from './data';

const input = 'h-aɪ';
console.log(Glyphs.find(glyph => glyph.phonetic === input));
