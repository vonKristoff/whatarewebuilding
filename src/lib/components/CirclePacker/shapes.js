function shape(i, w, h) {
	return {
		w,
		h,
		href: `/shapes.svg#icon-${i}`,
		ratio: w / h
	};
}

export default [
	shape('hand-1', 184, 231),
	// shape('hand-2', 225, 251),
	// shape('hand-3', 266, 178),
	// shape('hand-4', 302, 248),
	shape(1, 150, 127),
	shape(2, 155, 252),
	// shape(3, 234, 201),
	// shape(4, 132, 184),
	// shape(5, 131, 145),
	shape(6, 129, 148),
	// shape(7, 210, 222),
	// shape(8, 150, 140),
	shape(9, 183, 170),
	// shape(10, 282, 310),
	// shape(11, 157, 171),
	// shape(12, 153, 178),
	// shape(13, 264, 313),
	shape(14, 183, 170),
	shape(15, 126, 297),
	shape(16, 120, 180),
	shape(17, 208, 135)
	// shape(18, 213, 239),
	// shape(19, 216, 270),
	// shape(20, 202, 187),
	// shape(21, 171, 172),
	// shape(22, 148, 159)
	// shape(23, 288, 205)
];
