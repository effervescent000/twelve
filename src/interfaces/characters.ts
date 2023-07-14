export interface Character {
	job1: string;
	job2: string;
	licenses: string[];
	level: number;
	weapon?: string;
	spell?: string;
	offHand?: string;
	head?: string;
	body?: string;
}

export interface StatGrowthChart extends Record<string, number[]> {
	hp: number[];
	mp: number[];
	strength: number[];
	magick: number[];
	vitality: number[];
	speed: number[];
}

export interface CharacterStats {
	hp: number;
	mp: number;
	strength: number;
	magick: number;
	vitality: number;
	speed: number;
}
