/**
 * @interface CharacterData
 * @description Represents a serialized character in the TUNIC language
 */
export interface CharacterData {
	/**
	 * @property {string} id The unique identifier for the character
	 */
	id: string;

	/**
	 * @property {string} phonetic The phonetic representation of the character
	 */
	phonetic: string;

	/**
	 * {boolean} Wether the character is a vowel or not
	 */
	vowel: boolean;

	/**
	 * {boolean} Wether the character is a consonant or not
	 */
	consonant: boolean;

	/**
	 * The enabled segments for the character
	 */
	segments: {
		/**
		 * @property {boolean} segments.a Wether the character has the "a" segment
		 */
		a: boolean;

		/**
		 * @property {boolean} segments.b Wether the character has the "b" segment
		 */
		b: boolean;

		/**
		 * @property {boolean} segments.c Wether the character has the "c" segment
		 */
		c: boolean;

		/**
		 * @property {boolean} segments.d Wether the character has the "d" segment
		 */
		d: boolean;

		/**
		 * @property {boolean} segments.e Wether the character has the "e" segment
		 */
		e: boolean;

		/**
		 * @property {boolean} segments.f Wether the character has the "f" segment
		 */
		f: boolean;

		/**
		 * @property {boolean} segments.g Wether the character has the "g" segment
		 */
		g: boolean;

		/**
		 * @property {boolean} segments.h Wether the character has the "h" segment
		 */
		h: boolean;

		/**
		 * @property {boolean} segments.i Wether the character has the "i" segment
		 */
		i: boolean;

		/**
		 * @property {boolean} segments.j Wether the character has the "j" segment
		 */
		j: boolean;

		/**
		 * @property {boolean} segments.k Wether the character has the "k" segment
		 */
		k: boolean;

		/**
		 * @property {boolean} segments.l Wether the character has the "l" segment
		 */
		l: boolean;
	};
}

/**
 * Represents a word in the TRUNIC language, made of subcharacters
 */
export type Word = CharacterData[];

export interface GlyphData extends CharacterData {
	/**
	 * @property {boolean} segments.inverted Wether the character has the top segment
	 */
	inverted: boolean;

	/**
	 * @property {string} unicode The unicode representation of the character
	 */
	unicode: string;
}

/**
 * Represents a number as a string
 */
export type NumString = string;
