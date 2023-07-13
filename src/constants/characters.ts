export const CHARACTERS = ['vaan', 'balthier', 'fran', 'basch', 'ashe', 'penelo'];

const levels = Array.from({ length: 99 }, (x, i) => `${i + 1}`);
export const levelsOptions = levels.map((level) => ({ label: level, value: level }));

export const STATS = {
	vaan: {
		hp: [83, 297, 689, 1194, 1672, 2437, 3112, 3493, 3933, 4535, 5215],
		mp: [32, 80, 153.5, 229.5, 323, 403, 476.5, 530, 584, 617, 629.5],
		strength: [23, 28, 34, 39, 45, 51, 56, 62, 68, 73, 78],
		magick: [22, 27, 32, 37, 42, 48, 53, 58, 63, 69, 73],
		vitality: [24, 27, 31, 35, 39, 42, 46, 50, 54, 57, 61],
		speed: [24, 25, 26, 28, 29, 31, 32, 33, 35, 36, 37]
	}
};
