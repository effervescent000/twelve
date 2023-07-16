import type { Character, CharacterStats } from '../interfaces/characters';
import type { Spell, SpellType } from '../interfaces/spells';

import { JOBS } from './jobs';

const RANDOMNESS_MOD = 1.0625;

const spellDamageFormula = ({
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

const spellHealingFormula = ({
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
	power *
	RANDOMNESS_MOD *
	(2 + (characterStats.magick * (+characterData.level + characterStats.magick)) / 256);

const ELEMENTS = {
	dark: 'dark',
	fire: 'fire',
	ice: 'ice',
	thunder: 'thunder',
	water: 'water',
	wind: 'wind'
};

const DAMAGE = 'damage';
const HEALING = 'healing';

export const SPELL_TYPES: Record<string, SpellType> = {
	damage: {
		key: DAMAGE,
		formula: spellDamageFormula
	},
	healing: {
		key: HEALING,
		formula: spellHealingFormula
	}
};

export const SPELLS: Record<string, Spell> = {
	aero: {
		type: DAMAGE,
		element: ELEMENTS.wind,
		jobs: [JOBS.blackMage, JOBS.redMage],
		power: 51
	},
	aqua: {
		type: DAMAGE,
		power: 37,
		jobs: [JOBS.blackMage, JOBS.redMage],
		element: ELEMENTS.water
	},
	bio: {
		type: DAMAGE,
		power: 87,
		jobs: [JOBS.blackMage]
	},
	cure: {
		type: HEALING,
		power: 20,
		jobs: [JOBS.whiteMage]
	},
	dark: {
		type: DAMAGE,
		power: 46,
		jobs: [JOBS.redMage],
		element: ELEMENTS.dark
	},
	fire: {
		type: DAMAGE,
		power: 22,
		jobs: [JOBS.blackMage],
		element: ELEMENTS.fire
	},
	fira: {
		type: DAMAGE,
		power: 67,
		// type: SPELL_SCHOOLS.black.key
		jobs: [JOBS.blackMage, JOBS.redMage, JOBS.uhlan],
		element: ELEMENTS.fire
	}
};
