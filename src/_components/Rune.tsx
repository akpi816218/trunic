import { GlyphData } from '../../lib/types';

export default function Rune(props: { color?: string; data: GlyphData }) {
	const { color = '#000000', data } = props;
	const weight = 24;
	return (
		<svg
			version="1.1"
			viewBox="320 120 320 480"
			fill="none"
			stroke="none"
			strokeLinecap="square"
			strokeMiterlimit="10"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
		>
			<clipPath id="p.0">
				<path d="m0 0l960.0 0l0 720.0l-960.0 0l0 -720.0z" clipRule="nonzero" />
			</clipPath>
			<g clipPath="url(#p.0)">
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m0 0l960.0 0l0 720.0l-960.0 0z"
					fillRule="evenodd"
				/> */}
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m458.3937 592.80316l0 0c0 -11.932861 9.673462 -21.606323 21.606293 -21.606323l0 0c5.7303467 0 11.225983 2.2763672 15.277954 6.328369c4.0519714 4.051941 6.3283386 9.547607 6.3283386 15.277954l0 0c0 11.9328 -9.673462 21.606262 -21.606293 21.606262l0 0c-11.932831 0 -21.606293 -9.673462 -21.606293 -21.606262z"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.inverted)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m458.3937 592.80316l0 0c0 -11.932861 9.673462 -21.606323 21.606293 -21.606323l0 0c5.7303467 0 11.225983 2.2763672 15.277954 6.328369c4.0519714 4.051941 6.3283386 9.547607 6.3283386 15.277954l0 0c0 11.9328 -9.673462 21.606262 -21.606293 21.606262l0 0c-11.932831 0 -21.606293 -9.673462 -21.606293 -21.606262z"
					fillRule="evenodd"
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m479.3697 429.12314l115.18109 67.212616"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.f)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m479.3697 429.12314l115.18109 67.212616"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m496.40906 425.20026l-10.393677 -6.0l0 0c-5.7402954 -3.3136902 -13.080017 -1.3465881 -16.393707 4.3937073c-3.3137207 5.7402954 -1.3465881 13.079987 4.3937073 16.393707l10.393677 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.f ? 1 : 0}
				/>
				<path
					fill={color}
					d="m590.261 480.04645l10.393677 6.0l0 0c5.7402954 3.3137207 7.7073975 10.653412 4.3936768 16.393707c-3.3136597 5.7402954 -10.653381 7.7073975 -16.393677 4.3937073l-10.393677 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.f ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.0 429.12314l-115.18109 67.212616"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.h)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.0 429.12314l-115.18109 67.212616"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m462.96063 425.20026l10.393707 -6.0l0 0c5.740265 -3.3136902 13.079987 -1.3465881 16.393677 4.3937073c3.3137207 5.7402954 1.3465881 13.079987 -4.3936768 16.393707l-10.393707 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.h ? 1 : 0}
				/>
				<path
					fill={color}
					d="m369.10873 480.04645l-10.393707 6.0l0 0c-5.740265 3.3137207 -7.7073975 10.653412 -4.3936768 16.393707c3.3136902 5.7402954 10.653412 7.7073975 16.393677 4.3937073l10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.h ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.0 564.5413l-115.18109 -67.212585"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.b)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.0 564.5413l-115.18109 -67.212585"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m462.96063 568.46423l10.393707 6.0l0 0c5.740265 3.3137207 13.079987 1.3465576 16.393677 -4.393738c3.3137207 -5.7402344 1.3465881 -13.079956 -4.3936768 -16.393677l-10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.b ? 1 : 0}
				/>
				<path
					fill={color}
					d="m369.10873 513.61804l-10.393707 -6.0l0 0c-5.740265 -3.3137207 -7.7073975 -10.653442 -4.3936768 -16.393707c3.3136902 -5.7402954 10.653412 -7.707428 16.393677 -4.3937073l10.393707 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.b ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m364.9239 430.43307l-0.03149414 68.75589"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.c)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m364.9239 430.43307l-0.03149414 68.75589"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m376.80307 485.04727l0 12.0l0 0c0 6.627411 -5.372589 12.0 -12.0 12.0c-6.627411 0 -12.0 -5.372589 -12.0 -12.0l0 -12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.c ? 1 : 0}
				/>
				<path
					fill={color}
					d="m352.91068 441.5703l0 -12.0l0 0c0 -6.627411 5.372589 -12.0 12.0 -12.0c6.627411 0 12.0 5.372589 12.0 12.0l0 12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.c ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m479.30746 564.5413l115.18112 -67.212585"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.a)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m479.30746 564.5413l115.18112 -67.212585"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m496.34683 568.46423l-10.393707 6.0l0 0c-5.740265 3.3137207 -13.079987 1.3465576 -16.393707 -4.393738c-3.3136902 -5.7402344 -1.3465576 -13.079956 4.3937073 -16.393677l10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.a ? 1 : 0}
				/>
				<path
					fill={color}
					d="m590.1987 513.61804l10.393677 -6.0l0 0c5.7402954 -3.3137207 7.7073975 -10.653442 4.393738 -16.393707c-3.3137207 -5.7402954 -10.653442 -7.707428 -16.393738 -4.3937073l-10.393677 6.0z"
					fillOpacity={data.segments.a ? 1 : 0}
					fillRule="evenodd"
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.06693 430.431l-0.03149414 134.3937"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.g)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.06693 430.431l-0.03149414 134.3937"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m491.9461 551.84344l0 12.0l0 0c0 6.6274414 -5.372589 12.0 -12.0 12.0c-6.627411 0 -12.0 -5.3725586 -12.0 -12.0l0 -12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.g ? 1 : 0}
				/>
				<path
					fill={color}
					d="m468.0537 441.56824l0 -12.0l0 0c0 -6.627411 5.372589 -12.0 12.0 -12.0c6.6274414 0 12.0 5.372589 12.0 12.0l0 12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.g ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m479.3697 165.12315l115.18109 67.2126"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.e)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m479.3697 165.12315l115.18109 67.2126"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m496.40906 161.20026l-10.393677 -6.0l0 0c-5.7402954 -3.3137054 -13.080017 -1.3465729 -16.393707 4.3937073c-3.3137207 5.74028 -1.3465881 13.079987 4.3937073 16.393692l10.393677 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.e ? 1 : 0}
				/>
				<path
					fill={color}
					d="m590.261 216.04646l10.393677 6.0l0 0c5.7402954 3.3137054 7.7073975 10.653412 4.3936768 16.393692c-3.3136597 5.74028 -10.653381 7.7074127 -16.393677 4.3937073l-10.393677 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.e ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m479.30746 300.54132l115.18112 -67.212585"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.k)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m479.30746 300.54132l115.18112 -67.212585"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m496.34683 304.46423l-10.393707 6.0l0 0c-5.740265 3.3136902 -13.079987 1.3465576 -16.393707 -4.3937073c-3.3136902 -5.7402954 -1.3465576 -13.079987 4.3937073 -16.393707l10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.k ? 1 : 0}
				/>
				<path
					fill={color}
					d="m590.1987 249.61803l10.393677 -6.0l0 0c5.7402954 -3.3137054 7.7073975 -10.653412 4.393738 -16.393707c-3.3137207 -5.74028 -10.653442 -7.7073975 -16.393738 -4.393692l-10.393677 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.k ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.0656 300.46457l-0.03149414 68.75589"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.l)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.0656 300.46457l-0.03149414 68.75589"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m468.0524 311.6018l0 -12.0l0 0c0 -6.627411 5.372589 -12.0 12.0 -12.0c6.6274414 0 12.0 5.372589 12.0 12.0l0 12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.l ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.06693 166.43102l-0.03149414 134.39369"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.j)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.06693 166.43102l-0.03149414 134.39369"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m491.9461 287.84348l0 12.0l0 0c0 6.627411 -5.372589 12.0 -12.0 12.0c-6.627411 0 -12.0 -5.372589 -12.0 -12.0l0 -12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.j ? 1 : 0}
				/>
				<path
					fill={color}
					d="m468.0537 177.56824l0 -12.0l0 0c0 -6.627411 5.372589 -12.0 12.0 -12.0c6.6274414 0 12.0 5.372589 12.0 12.0l0 12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.j ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.0 165.12315l-115.18109 67.2126"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.d)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.0 165.12315l-115.18109 67.2126"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m462.96063 161.20026l10.393707 -6.0l0 0c5.740265 -3.3137054 13.079987 -1.3465729 16.393677 4.3937073c3.3137207 5.74028 1.3465881 13.079987 -4.3936768 16.393692l-10.393707 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.d ? 1 : 0}
				/>
				<path
					fill={color}
					d="m369.10873 216.04646l-10.393707 6.0l0 0c-5.740265 3.3137054 -7.7073975 10.653412 -4.3936768 16.393692c3.3136902 5.74028 10.653412 7.7074127 16.393677 4.3937073l10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.d ? 1 : 0}
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m480.0 300.54132l-115.18109 -67.212585"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.i)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m480.0 300.54132l-115.18109 -67.212585"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m462.96063 304.46423l10.393707 6.0l0 0c5.740265 3.3136902 13.079987 1.3465576 16.393677 -4.3937073c3.3137207 -5.7402954 1.3465881 -13.079987 -4.3936768 -16.393707l-10.393707 -6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.i ? 1 : 0}
				/>
				<path
					fill={color}
					d="m369.10873 249.61803l-10.393707 -6.0l0 0c-5.740265 -3.3137054 -7.7073975 -10.653412 -4.3936768 -16.393707c3.3136902 -5.74028 10.653412 -7.7073975 16.393677 -4.393692l10.393707 6.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.i ? 1 : 0}
				/>
				<path
					fill={color}
					fillOpacity={0}
					d="m594.746 360.0132l-230.3937 -0.03149414"
					fillRule="evenodd"
				/>
				<path
					stroke={color}
					strokeWidth={24}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m594.746 360.0132l-230.3937 -0.03149414"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m376.9693 372.0l-12.0 0l0 0c-6.627411 0 -12.0 -5.372589 -12.0 -12.0c0 -6.627411 5.372589 -12.0 12.0 -12.0l12.0 0z"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m583.60876 348.0l12.0 0l0 0c6.6273804 0 12.0 5.372589 12.0 12.0c0 6.627411 -5.3726196 12.0 -12.0 12.0l-12.0 0z"
					fillRule="evenodd"
				/>
				{/* <path
					fill={color}
					fillOpacity={0}
					d="m364.9252 239.61511l-0.03149414 122.86615"
					fillRule="evenodd"
				/> */}
				<path
					stroke={color}
					strokeWidth={on(data.segments.c)}
					strokeLinejoin="round"
					strokeLinecap="butt"
					d="m364.9252 239.61511l-0.03149414 122.86615"
					fillRule="evenodd"
				/>
				<path
					fill={color}
					d="m376.80438 247.80896l0 -12.0l0 0c0 -6.627411 -5.372589 -12.0 -12.0 -12.0c-6.627411 0 -12.0 5.372589 -12.0 12.0l0 12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.c ? 1 : 0}
				/>
				<path
					fill={color}
					d="m352.912 347.2865l0 12.0l0 0c0 6.627411 5.372589 12.0 12.0 12.0c6.627411 0 12.0 -5.372589 12.0 -12.0l0 -12.0z"
					fillRule="evenodd"
					fillOpacity={data.segments.c ? 1 : 0}
				/>
			</g>
		</svg>
	);

	function on(bool: boolean) {
		return bool ? weight : 0;
	}
}