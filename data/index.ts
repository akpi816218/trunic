import { CharacterData, GlyphData } from '../lib/types';
import MappedGlyphData from './dataMap.json';

export const Chars: CharacterData[] = [
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
		}
	},
	{
		id: 'ae',
		phonetic: 'eɪ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: false,
			c: false,
			d: true,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'uh',
		phonetic: 'ɘ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: false,
			c: false,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'ah',
		phonetic: 'ɒ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: false,
			c: true,
			d: true,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'a',
		phonetic: 'æ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: false,
			c: true,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'oi',
		phonetic: 'ɔɪ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: true,
			c: false,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'oo',
		phonetic: 'uː',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: true,
			c: true,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'u',
		phonetic: 'ʊ',
		vowel: true,
		consonant: false,
		segments: {
			a: false,
			b: true,
			c: true,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'ow',
		phonetic: 'aʊ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'oh',
		phonetic: 'oʊ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: true,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'or',
		phonetic: 'ʊɘˈ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: false,
			c: true,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'air',
		phonetic: 'eɘˈ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: false,
			c: true,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'ear',
		phonetic: 'ɪɘˈ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: false,
			c: true,
			d: true,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'i',
		phonetic: 'ɪ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: false,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'are',
		phonetic: 'aː',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: false,
			d: true,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'eh',
		phonetic: 'ɛ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: true,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'er',
		phonetic: 'ɜːˈ',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: true,
			d: false,
			e: true,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'ee',
		phonetic: 'iː',
		vowel: true,
		consonant: false,
		segments: {
			a: true,
			b: true,
			c: true,
			d: true,
			e: false,
			f: false,
			g: false,
			h: false,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'ng',
		phonetic: 'ŋ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: true,
			h: true,
			i: true,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'th-2',
		phonetic: 'ð',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: true,
			h: true,
			i: false,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'th-1',
		phonetic: 'θ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: true,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'sh',
		phonetic: 'ʃ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: true,
			h: true,
			i: true,
			j: false,
			k: true,
			l: true
		}
	},
	{
		id: 'ch',
		phonetic: 'tʃ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: true,
			j: false,
			k: false,
			l: true
		}
	},
	{
		id: 'j',
		phonetic: 'dʒ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: false,
			h: true,
			i: false,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'zh',
		phonetic: 'ʒ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: true,
			i: true,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'z',
		phonetic: 'z',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: true,
			h: false,
			i: true,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'h',
		phonetic: 'h',
		vowel: false,
		consonant: true,
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
		}
	},
	{
		id: 's',
		phonetic: 's',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: true,
			i: false,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'r',
		phonetic: 'ɹ',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: false,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'k',
		phonetic: 'k',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: false,
			i: false,
			j: true,
			k: true,
			l: true
		}
	},
	{
		id: 'y',
		phonetic: 'j',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: true,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'l',
		phonetic: 'l',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: false,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'd',
		phonetic: 'd',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: true,
			i: false,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'b',
		phonetic: 'b',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: false,
			i: false,
			j: true,
			k: false,
			l: true
		}
	},
	{
		id: 'f',
		phonetic: 'f',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: true,
			i: false,
			j: false,
			k: true,
			l: true
		}
	},
	{
		id: 'v',
		phonetic: 'v',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: true,
			h: false,
			i: true,
			j: false,
			k: false,
			l: true
		}
	},
	{
		id: 'g',
		phonetic: 'g',
		vowel: false,
		consonant: true,
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
			j: false,
			k: true,
			l: true
		}
	},
	{
		id: 't',
		phonetic: 't',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: true,
			j: false,
			k: true,
			l: true
		}
	},
	{
		id: 'p',
		phonetic: 'p',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: true,
			h: false,
			i: false,
			j: false,
			k: true,
			l: true
		}
	},
	{
		id: 'm',
		phonetic: 'm',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: true,
			i: false,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'n',
		phonetic: 'n',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: true,
			g: false,
			h: true,
			i: true,
			j: false,
			k: false,
			l: false
		}
	},
	{
		id: 'w',
		phonetic: 'w',
		vowel: false,
		consonant: true,
		segments: {
			a: false,
			b: false,
			c: false,
			d: false,
			e: false,
			f: false,
			g: false,
			h: false,
			i: true,
			j: false,
			k: true,
			l: false
		}
	}
];

export const Vowels = Chars.filter(v => v.vowel);

export const Consonants = Chars.filter(v => v.consonant);

export const SpaceGlyph: GlyphData = {
	consonant: false,
	vowel: false,
	id: ' ',
	phonetic: ' ',
	inverted: false,
	unicode: ' ',
	segments: {
		a: false,
		b: false,
		c: false,
		d: false,
		e: false,
		f: false,
		g: false,
		h: false,
		i: false,
		j: false,
		k: false,
		l: false
	}
};

export const Unicodes = `Ꭰ
Ꭱ
Ꮀ
Ꮐ
Ꮠ
Ꮰ
Ꭲ
Ꮁ
Ꮑ
Ꮡ
Ꮱ
Ꭳ
Ꭴ
Ꭵ
Ꭶ
Ꭷ
Ꭸ
Ꭹ
Ꭺ
Ꭻ
Ꭼ
Ꭽ
Ꭾ
Ꭿ
Ꮂ
Ꮃ
Ꮄ
Ꮅ
Ꮆ
Ꮇ
Ꮈ
Ꮉ
Ꮊ
Ꮋ
Ꮌ
Ꮍ
Ꮎ
Ꮏ
Ꮒ
Ꮓ
Ꮔ
Ꮕ
Ꮖ
Ꮗ
Ꮘ
Ꮙ
Ꮚ
Ꮛ
Ꮜ
Ꮝ
Ꮞ
Ꮟ
Ꮢ
Ꮣ
Ꮤ
Ꮥ
Ꮦ
Ꮧ
Ꮨ
Ꮩ
Ꮪ
Ꮫ
Ꮬ
Ꮭ
Ꮮ
Ꮯ
Ꮲ
Ꮳ
Ꮴ
Ꮵ
Ꮶ
Ꮷ
Ꮸ
Ꮹ
Ꮺ
Ꮻ
Ꮼ
Ꮽ
Ꮾ
Ꮿ
Ᏸ
Ᏹ
Ᏺ
Ᏻ
Ᏼ
Ᏽ
ᏸ
ᏹ
ᏺ
ᏻ
ᏼ
ᏽ
ༀ
༁
༂
༃
༄
༅
༆
༇
༈
༉
༊
་
༌
།
༎
༏
༐
༑
༒
༓
༔
༕
༖
༗
༘
༙
༚
༛
༜
༝
༞
༟
༠
༡
༢
༣
༤
༥
༦
༧
༨
༩
༪
༫
༬
༭
༮
༯
༰
༱
༲
༳
༴
༵
༶
༷
༸
༹
༺
༻
༼
༽
༾
༿
ཀ
ཁ
ག
གྷ
ང
ཅ
ཆ
ཇ
ཉ
ཊ
ཋ
ཌ
ཌྷ
ཎ
ཏ
ཐ
ད
དྷ
ན
པ
ཕ
བ
བྷ
མ
ཙ
ཚ
ཛ
ཛྷ
ཝ
ཞ
ཟ
འ
ཡ
ར
ལ
ཤ
ཥ
ས
ཧ
ཨ
ཀྵ
ཪ
ཫ
ཬ
ཱ
ི
ཱི
ུ
ཱུ
ྲྀ
ཷ
ླྀ
ཹ
ེ
ཻ
ོ
ཽ
ཾ
ཿ
ྀ
ཱྀ
ྂ
ྃ
྄
྅
྆
྇
ྈ
ྉ
ྊ
ྋ
ྌ
ྍ
ྎ
ྏ
ྐ
ྑ
ྒ
ྒྷ
ྔ
ྕ
ྖ
ྗ
ྙ
ྚ
ྛ
ྜ
ྜྷ
ྞ
ྟ
ྠ
ྡ
ྡྷ
ྣ
ྤ
ྥ
ྦ
ྦྷ
ྨ
ྩ
ྪ
ྫ
ྫྷ
ྭ
ྮ
ྯ
ྰ
ྱ
ྲ
ླ
ྴ
ྵ
ྶ
ྷ
ྸ
ྐྵ
ྺ
ྻ
ྼ
྾
྿
࿀
࿁
࿂
࿃
࿄
࿅
࿆
࿇
࿈
࿉
࿊
࿋
࿌
࿎
࿏
࿐
࿑
࿒
࿓
࿔
࿕
࿖
࿗
࿘
࿙
࿚
ꡀ
ꡁ
ꡂ
ꡃ
ꡄ
ꡅ
ꡆ
ꡇ
ꡈ
ꡉ
ꡊ
ꡋ
ꡌ
ꡍ
ꡎ
ꡏ
ꡐ
ꡑ
ꡒ
ꡓ
ꡔ
ꡕ
ꡖ
ꡗ
ꡘ
ꡙ
ꡚ
ꡛ
ꡜ
ꡝ
ꡞ
ꡟ
ꡠ
ꡡ
ꡢ
ꡣ
ꡤ
ꡥ
ꡦ
ꡧ
ꡨ
ꡩ
ꡪ
ꡫ
ꡬ
ꡭ
ꡮ
ꡯ
ァ
ア
ィ
イ
ゥ
ウ
ェ
エ
ォ
オ
カ
ガ
キ
ギ
ク
グ
ケ
ゲ
コ
ゴ
サ
ザ
シ
ジ
ス
ズ
セ
ゼ
ソ
ゾ
タ
ダ
チ
ヂ
ッ
ツ
ヅ
テ
デ
ト
ド
ナ
ニ
ヌ
ネ
ノ
ハ
゠
バ
パ
ヒ
ビ
ピ
フ
ブ
プ
ヘ
ベ
ペ
ホ
ボ
ポ
マ
ミ
ム
メ
モ
ャ
ヤ
ュ
ユ
ョ
ヨ
ラ
リ
ル
レ
ロ
ヮ
ワ
ヰ
ヱ
ヲ
ン
ヴ
ヵ
ヶ
ヷ
ヸ
ヹ
ヺ
・
ー
ヽ
ヾ
ヿ
ㇰ
ㇱ
ㇲ
ㇳ
ㇴ
ㇵ
ㇶ
ㇷ
ㇸ
ㇹ
ㇺ
ㇻ
ㇼ
ㇽ
ㇾ
ㇿ
ᄀ
ᄁ
ᄐ
ᄠ
ᄰ
ᅀ
ᅐ
ᅠ
ᅰ
ᆀ
ᆐ
ᆠ
ᆰ
ᇀ
ᇐ
ᇠ
ᇰ
ᄂ
ᄑ
ᄡ
ᄱ
ᅁ
ᅑ
ᅡ
ᅱ
ᆁ
ᆑ
ᆡ
ᆱ
ᇁ
ᇑ
ᇡ
ᇱ
ᄃ
ᄒ
ᄢ
ᄲ
ᅂ
ᅒ
ᅢ
ᅲ
ᆂ
ᆒ
ᆢ
ᆲ
ᇂ
ᇒ
ᇢ
ᇲ
ᄄ
ᄓ
ᄣ
ᄳ
ᅃ
ᅓ
ᅣ
ᅳ
ᆃ
ᆓ
ᆣ
ᆳ
ᇃ
ᇓ
ᇣ
ᇳ
ᄅ
ᄔ
ᄤ
ᄴ
ᅄ
ᅔ
ᅤ
ᅴ
ᆄ
ᆔ
ᆤ
ᆴ
ᇄ
ᇔ
ᇤ
ᇴ
ᄆ
ᄕ
ᄥ
ᄵ
ᅅ
ᅕ
ᅥ
ᅵ
ᆅ
ᆕ
ᆥ
ᆵ
ᇅ
ᇕ
ᇥ
ᇵ
ᄇ
ᄖ
ᄦ
ᄶ
ᅆ
ᅖ
ᅦ
ᅶ
ᆆ
ᆖ
ᆦ
ᆶ
ᇆ
ᇖ
ᇦ
ᇶ
ᄈ
ᄗ
ᄧ
ᄷ
ᅇ
ᅗ
ᅧ
ᅷ
ᆇ
ᆗ
ᆧ
ᆷ
ᇇ
ᇗ
ᇧ
ᇷ
ᄉ
ᄘ
ᄨ
ᄸ
ᅈ
ᅘ
ᅨ
ᅸ
ᆈ
ᆘ
ᆨ
ᆸ
ᇈ
ᇘ
ᇨ
ᇸ
ᄊ
ᄙ
ᄩ
ᄹ
ᅉ
ᅙ
ᅩ
ᅹ
ᆉ
ᆙ
ᆩ
ᆹ
ᇉ
ᇙ
ᇩ
ᇹ
ᄋ
ᄚ
ᄪ
ᄺ
ᅊ
ᅚ
ᅪ
ᅺ
ᆊ
ᆚ
ᆪ
ᆺ
ᇊ
ᇚ
ᇪ
ᇺ
ᄌ
ᄛ
ᄫ
ᄻ
ᅋ
ᅛ
ᅫ
ᅻ
ᆋ
ᆛ
ᆫ
ᆻ
ᇋ
ᇛ
ᇫ
ᇻ
ᄍ
ᄜ
ᄬ
ᄼ
ᅌ
ᅜ
ᅬ
ᅼ
ᆌ
ᆜ
ᆬ
ᆼ
ᇌ
ᇜ
ᇬ
ᇼ
ᄎ
ᄝ
ᄭ
ᄽ
ᅍ
ᅝ
ᅭ
ᅽ
ᆍ
ᆝ
ᆭ
ᆽ
ᇍ
ᇝ
ᇭ
ᇽ
ᄏ
ᄞ
ᄮ
ᄾ
ᅎ
ᅞ
ᅮ
ᅾ
ᆎ
ᆞ
ᆮ
ᆾ
ᇎ
ᇞ
ᇮ
ᇾ
ᄟ
ᄯ
ᄿ
ᅏ
ᅟ
ᅯ
ᅿ
ᆏ
ᆟ
ᆯ
ᆿ
ᇏ
ᇟ
ᇯ
ᇿ
㌀
㌁
㌐
㌠
㌰
㍀
㍐
㍠
㍰
㎀
㎐
㎠
㎰
㏀
㏐
㏠
㏰
㌂
㌑
㌡
㌱
㍁
㍑
㍡
㍱
㎁
㎑
㎡
㎱
㏁
㏑
㏡
㏱
㌃
㌒
㌢
㌲
㍂
㍒
㍢
㍲
㎂
㎒
㎢
㎲
㏂
㏒
㏢
㏲
㌄
㌓
㌣
㌳
㍃
㍓
㍣
㍳
㎃
㎓
㎣
㎳
㏃
㏓
㏣
㏳
㌅
㌔
㌤
㌴
㍄
㍔
㍤
㍴
㎄
㎔
㎤
㎴
㏄
㏔
㏤
㏴
㌆
㌕
㌥
㌵
㍅
㍕
㍥
㍵
㎅
㎕
㎥
㎵
㏅
㏕
㏥
㏵
㌇
㌖
㌦
㌶
㍆
㍖
㍦
㍶
㎆
㎖
㎦
㎶
㏆
㏖
㏦
㏶
㌈
㌗
㌧
㌷
㍇
㍗
㍧
㍷
㎇
㎗
㎧
㎷
㏇
㏗
㏧
㏷
㌉
㌘
㌨
㌸
㍈
㍘
㍨
㍸
㎈
㎘
㎨
㎸
㏈
㏘
㏨
㏸
㌊
㌙
㌩
㌹
㍉
㍙
㍩
㍹
㎉
㎙
㎩
㎹
㏉
㏙
㏩
㏹
㌋
㌚
㌪
㌺
㍊
㍚
㍪
㍺
㎊
㎚
㎪
㎺
㏊
㏚
㏪
㏺
㌌
㌛
㌫
㌻
㍋
㍛
㍫
㍻
㎋
㎛
㎫
㎻
㏋
㏛
㏫
㏻
㌍
㌜
㌬
㌼
㍌
㍜
㍬
㍼
㎌
㎜
㎬
㎼
㏌
㏜
㏬
㏼
㌎
㌝
㌭
㌽
㍍
㍝
㍭
㍽
㎍
㎝
㎭
㎽
㏍
㏝
㏭
㏽
㌏
㌞
㌮
㌾
㍎
㍞
㍮
㍾
㎎
㎞
㎮
㎾
㏎
㏞
㏮
㏾
㌟
㌯
㌿
㍏
㍟
㍯
㍿
㎏
㎟
㎯
㎿
㏏
㏟
㏯
㏿
Ⴀ
Ⴁ
Ⴐ
Ⴠ
ა
რ
ჰ
Ⴂ
Ⴑ
Ⴡ
ბ
ს
ჱ
Ⴃ
Ⴒ
Ⴢ
გ
ტ
ჲ
Ⴄ
Ⴓ
Ⴣ
დ
უ
ჳ
Ⴅ
Ⴔ
Ⴤ
ე
ფ
ჴ
Ⴆ
Ⴕ
Ⴥ
ვ
ქ
ჵ
Ⴇ
Ⴖ
ზ
ღ
ჶ
Ⴈ
Ⴗ
Ⴧ
თ
ყ
ჷ
Ⴉ
Ⴘ
ი
შ
ჸ
Ⴊ
Ⴙ
კ
ჩ
ჹ
Ⴋ
Ⴚ
ლ
ც
ჺ
Ⴌ
Ⴛ
მ
ძ
჻
Ⴍ
Ⴜ
ნ
წ
ჼ
Ⴎ
Ⴝ
Ⴭ
ო
ჭ
ჽ
Ⴏ
Ⴞ
პ
ხ
ჾ
Ⴟ
ჟ
ჯ
ჿ
Ა
Ბ
Რ
Ჰ
Გ
Ს
Ჱ
Დ
Ტ
Ჲ
Ე
Უ
Ჳ
Ვ
Ფ
Ჴ
Ზ
Ქ
Ჵ
Თ
Ღ
Ჶ
Ი
Ყ
Ჷ
Კ
Შ
Ჸ
Ლ
Ჩ
Ჹ
Მ
Ც
Ჺ
Ნ
Ძ
Ო
Წ
Პ
Ჭ
Ჽ
Ჟ
Ხ
Ჾ
Ჯ
Ჿ
ⴀ
ⴁ
ⴐ
ⴠ
ⴂ
ⴑ
ⴡ
ⴃ
ⴒ
ⴢ
ⴄ
ⴓ
ⴣ
ⴅ
ⴔ
ⴤ
ⴆ
ⴕ
ⴥ
ⴇ
ⴖ
ⴈ
ⴗ
ⴧ
ⴉ
ⴘ
ⴊ
ⴙ
ⴋ
ⴚ
ⴌ
ⴛ
ⴍ
ⴜ
ⴎ
ⴝ
ⴭ
ⴏ
ⴞ
ⴟ
ꡞ
ꡟ
ꡠ
ꡡ
᐀
ᐁ
ᐐ
ᐠ
ᐰ
ᑀ
ᑐ
ᑠ
ᑰ
ᒀ
ᒐ
ᒠ
ᒰ
ᓀ
ᓐ
ᓠ
ᓰ
ᔀ
ᔐ
ᔠ
ᔰ
ᕀ
ᕐ
ᕠ
ᕰ
ᖀ
ᖐ
ᖠ
ᖰ
ᗀ
ᗐ
ᗠ
ᗰ
ᘀ
ᘐ
ᘠ
ᘰ
ᙀ
ᙐ
ᙠ
ᙰ
ᐂ
ᐑ
ᐡ
ᐱ
ᑁ
ᑑ
ᑡ
ᑱ
ᒁ
ᒑ
ᒡ
ᒱ
ᓁ
ᓑ
ᓡ
ᓱ
ᔁ
ᔑ
ᔡ
ᔱ
ᕁ
ᕑ
ᕡ
ᕱ
ᖁ
ᖑ
ᖡ
ᖱ
ᗁ
ᗑ
ᗡ
ᗱ
ᘁ
ᘑ
ᘡ
ᘱ
ᙁ
ᙑ
ᙡ
ᙱ
ᐃ
ᐒ
ᐢ
ᐲ
ᑂ
ᑒ
ᑢ
ᑲ
ᒂ
ᒒ
ᒢ
ᒲ
ᓂ
ᓒ
ᓢ
ᓲ
ᔂ
ᔒ
ᔢ
ᔲ
ᕂ
ᕒ
ᕢ
ᕲ
ᖂ
ᖒ
ᖢ
ᖲ
ᗂ
ᗒ
ᗢ
ᗲ
ᘂ
ᘒ
ᘢ
ᘲ
ᙂ
ᙒ
ᙢ
ᙲ
ᐄ
ᐓ
ᐣ
ᐳ
ᑃ
ᑓ
ᑣ
ᑳ
ᒃ
ᒓ
ᒣ
ᒳ
ᓃ
ᓓ
ᓣ
ᓳ
ᔃ
ᔓ
ᔣ
ᔳ
ᕃ
ᕓ
ᕣ
ᕳ
ᖃ
ᖓ
ᖣ
ᖳ
ᗃ
ᗓ
ᗣ
ᗳ
ᘃ
ᘓ
ᘣ
ᘳ
ᙃ
ᙓ
ᙣ
ᙳ
ᐅ
ᐔ
ᐤ
ᐴ
ᑄ
ᑔ
ᑤ
ᑴ
ᒄ
ᒔ
ᒤ
ᒴ
ᓄ
ᓔ
ᓤ
ᓴ
ᔄ
ᔔ
ᔤ
ᔴ
ᕄ
ᕔ
ᕤ
ᕴ
ᖄ
ᖔ
ᖤ
ᖴ
ᗄ
ᗔ
ᗤ
ᗴ
ᘄ
ᘔ
ᘤ
ᘴ
ᙄ
ᙔ
ᙤ
ᙴ
ᐆ
ᐕ
ᐥ
ᐵ
ᑅ
ᑕ
ᑥ
ᑵ
ᒅ
ᒕ
ᒥ
ᒵ
ᓅ
ᓕ
ᓥ
ᓵ
ᔅ
ᔕ
ᔥ
ᔵ
ᕅ
ᕕ
ᕥ
ᕵ
ᖅ
ᖕ
ᖥ
ᖵ
ᗅ
ᗕ
ᗥ
ᗵ
ᘅ
ᘕ
ᘥ
ᘵ
ᙅ
ᙕ
ᙥ
ᙵ
ᐇ
ᐖ
ᐦ
ᐶ
ᑆ
ᑖ
ᑦ
ᑶ
ᒆ
ᒖ
ᒦ
ᒶ
ᓆ
ᓖ
ᓦ
ᓶ
ᔆ
ᔖ
ᔦ
ᔶ
ᕆ
ᕖ
ᕦ
ᕶ
ᖆ
ᖖ
ᖦ
ᖶ
ᗆ
ᗖ
ᗦ
ᗶ
ᘆ
ᘖ
ᘦ
ᘶ
ᙆ
ᙖ
ᙦ
ᙶ
ᐈ
ᐗ
ᐧ
ᐷ
ᑇ
ᑗ
ᑧ
ᑷ
ᒇ
ᒗ
ᒧ
ᒷ
ᓇ
ᓗ
ᓧ
ᓷ
ᔇ
ᔗ
ᔧ
ᔷ
ᕇ
ᕗ
ᕧ
ᕷ
ᖇ
ᖗ
ᖧ
ᖷ
ᗇ
ᗗ
ᗧ
ᗷ
ᘇ
ᘗ
ᘧ
ᘷ
ᙇ
ᙗ
ᙧ
ᙷ
ᐉ
ᐘ
ᐨ
ᐸ
ᑈ
ᑘ
ᑨ
ᑸ
ᒈ
ᒘ
ᒨ
ᒸ
ᓈ
ᓘ
ᓨ
ᓸ
ᔈ
ᔘ
ᔨ
ᔸ
ᕈ
ᕘ
ᕨ
ᕸ
ᖈ
ᖘ
ᖨ
ᖸ
ᗈ
ᗘ
ᗨ
ᗸ
ᘈ
ᘘ
ᘨ
ᘸ
ᙈ
ᙘ
ᙨ
ᙸ
ᐊ
ᐙ
ᐩ
ᐹ
ᑉ
ᑙ
ᑩ
ᑹ
ᒉ
ᒙ
ᒩ
ᒹ
ᓉ
ᓙ
ᓩ
ᓹ
ᔉ
ᔙ
ᔩ
ᔹ
ᕉ
ᕙ
ᕩ
ᕹ
ᖉ
ᖙ
ᖩ
ᖹ
ᗉ
ᗙ
ᗩ
ᗹ
ᘉ
ᘙ
ᘩ
ᘹ
ᙉ
ᙙ
ᙩ
ᙹ
ᐋ
ᐚ
ᐪ
ᐺ
ᑊ
ᑚ
ᑪ
ᑺ
ᒊ
ᒚ
ᒪ
ᒺ
ᓊ
ᓚ
ᓪ
ᓺ
ᔊ
ᔚ
ᔪ
ᔺ
ᕊ
ᕚ
ᕪ
ᕺ
ᖊ
ᖚ
ᖪ
ᖺ
ᗊ
ᗚ
ᗪ
ᗺ
ᘊ
ᘚ
ᘪ
ᘺ
ᙊ
ᙚ
ᙪ
ᙺ
ᐌ
ᐛ
ᐫ
ᐻ
ᑋ
ᑛ
ᑫ
ᑻ
ᒋ
ᒛ
ᒫ
ᒻ
ᓋ
ᓛ
ᓫ
ᓻ
ᔋ
ᔛ
ᔫ
ᔻ
ᕋ
ᕛ
ᕫ
ᕻ
ᖋ
ᖛ
ᖫ
ᖻ
ᗋ
ᗛ
ᗫ
ᗻ
ᘋ
ᘛ
ᘫ
ᘻ
ᙋ
ᙛ
ᙫ
ᙻ
ᐍ
ᐜ
ᐬ
ᐼ
ᑌ
ᑜ
ᑬ
ᑼ
ᒌ
ᒜ
ᒬ
ᒼ
ᓌ
ᓜ
ᓬ
ᓼ
ᔌ
ᔜ
ᔬ
ᔼ
ᕌ
ᕜ
ᕬ
ᕼ
ᖌ
ᖜ
ᖬ
ᖼ
ᗌ
ᗜ
ᗬ
ᗼ
ᘌ
ᘜ
ᘬ
ᘼ
ᙌ
ᙜ
ᙬ
ᙼ
ᐎ
ᐝ
ᐭ
ᐽ
ᑍ
ᑝ
ᑭ
ᑽ
ᒍ
ᒝ
ᒭ
ᒽ
ᓍ
ᓝ
ᓭ
ᓽ
ᔍ
ᔝ
ᔭ
ᔽ
ᕍ
ᕝ
ᕭ
ᕽ
ᖍ
ᖝ
ᖭ
ᖽ
ᗍ
ᗝ
ᗭ
ᗽ
ᘍ
ᘝ
ᘭ
ᘽ
ᙍ
ᙝ
᙭
ᙽ
ᐏ
ᐞ
ᐮ
ᐾ
ᑎ
ᑞ
ᑮ
ᑾ
ᒎ
ᒞ
ᒮ
ᒾ
ᓎ
ᓞ
ᓮ
ᓾ
ᔎ
ᔞ
ᔮ
ᔾ
ᕎ
ᕞ
ᕮ
ᕾ
ᖎ
ᖞ
ᖮ
ᖾ
ᗎ
ᗞ
ᗮ
ᗾ
ᘎ
ᘞ
ᘮ
ᘾ
ᙎ
ᙞ
᙮
ᙾ
ᐟ
ᐯ
ᐿ
ᑏ
ᑟ
ᑯ
ᑿ
ᒏ
ᒟ
ᒯ
ᒿ
ᓏ
ᓟ
ᓯ
ᓿ
ᔏ
ᔟ
ᔯ
ᔿ
ᕏ
ᕟ
ᕯ
ᕿ
ᖏ
ᖟ
ᖯ
ᖿ
ᗏ
ᗟ
ᗯ
ᗿ
ᘏ
ᘟ
ᘯ
ᘿ
ᙏ
ᙟ
ᙯ
ᙿ
᠁
᠂
᠐
ᠠ
ᠰ
ᡀ
ᡐ
ᡠ
ᡰ
ᢀ
ᢐ
᠃
᠑
ᠡ
ᠱ
ᡁ
ᡑ
ᡡ
ᡱ
ᢁ
ᢑ
᠄
᠒
ᠢ
ᠲ
ᡂ
ᡒ
ᡢ
ᡲ
ᢂ
ᢒ
᠅
᠓
ᠣ
ᠳ
ᡃ
ᡓ
ᡣ
ᡳ
ᢃ
ᢓ
᠆
᠔
ᠤ
ᠴ
ᡄ
ᡔ
ᡤ
ᡴ
ᢄ
ᢔ
᠇
᠕
ᠥ
ᠵ
ᡅ
ᡕ
ᡥ
ᡵ
ᢅ
ᢕ
᠈
᠖
ᠦ
ᠶ
ᡆ
ᡖ
ᡦ
ᡶ
ᢆ
ᢖ
᠉
᠗
ᠧ
ᠷ
ᡇ
ᡗ
ᡧ
ᡷ
ᢇ
ᢗ
᠊
᠘
ᠨ
ᠸ
ᡈ
ᡘ
ᡨ
ᢈ
ᢘ
᠙
ᠩ
ᠹ
ᡉ
ᡙ
ᡩ
ᢉ
ᢙ
ႌ
ᠪ
ᠺ
ᡊ
ᡚ
ᡪ
ᢊ
ᢚ
ᠫ
ᢥ
ᢦ
ᢧ
ሴ`
	.split('')
	.filter(v => v !== '\n');

export const Glyphs: GlyphData[] = MappedGlyphData;
