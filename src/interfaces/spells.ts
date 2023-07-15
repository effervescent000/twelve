export interface SpellSchool {
	key: string;
	jobs: string[];
}

export interface Spell {
	jobs: string[];
	power: number;
	element?: string;
}
