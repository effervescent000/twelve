import type { Character, CharacterStats } from '../interfaces/characters';
import type { Spell } from '../interfaces/spells';

import { JOBS } from './jobs';

const RANDOMNESS_MOD = 1.0625;

export const spellDamageFormula = ({
	power,
	characterStats,
	targetDefense,
	characterData
}: {
	power: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(power * RANDOMNESS_MOD - targetDefense) *
	(2 + (characterStats.magick * (+characterData.level + characterStats.magick)) / 256);

const ELEMENTS = {
	dark: 'dark',
	fire: 'fire'
};

export const SPELLS: Record<string, Spell> = {
	bio: {
		power: 87,
		jobs: [JOBS.blackMage]
	},
	dark: {
		power: 46,
		jobs: [JOBS.redMage],
		element: ELEMENTS.dark
	},
	fira: {
		power: 67,
		// type: SPELL_SCHOOLS.black.key
		jobs: [JOBS.blackMage, JOBS.redMage, JOBS.uhlan],
		element: ELEMENTS.fire
	}
};
