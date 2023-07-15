import type { Character, CharacterStats } from './characters';

export interface SpellType {
	key: string; // damage or healing
	formula: ({
		power,
		characterStats,
		targetDefense,
		characterData
	}: {
		power: number;
		characterStats: CharacterStats;
		targetDefense: number;
		characterData: Character;
	}) => number;
}

export interface Spell {
	type: 'damage' | 'healing';
	jobs: string[];
	power: number;
	element?: string;
}
