import type { Character, CharacterStats } from '../interfaces/characters';
import type { Spell, SpellSchool } from '../interfaces/spells';
import { JOBS } from './jobs';

// export const SPELL_SCHOOLS: Record<string, SpellSchool> = {
// 	white: {
// 		jobs: [JOBS.whiteMage],
// 		key: 'white'
// 	},
// 	black: {
// 		jobs: [JOBS.blackMage],
// 		key: 'black'
// 	}
// };

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

export const SPELLS: Record<string, Spell> = {
	fira: {
		power: 67,
		// type: SPELL_SCHOOLS.black.key
		jobs: [JOBS.blackMage, JOBS.redMage, JOBS.uhlan]
	},
	bio: {
		power: 87,
		jobs: [JOBS.blackMage]
	}
};
