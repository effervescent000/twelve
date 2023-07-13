export interface WeaponDefault {
	key: string;
	ct: number;
	comboRate?: number;
	jobs: string[];
	magick?: number;
	critRate?: number;
}

export interface Weapon {
	type: string;
	attack: number;
	speed?: number;
	ct?: number;
	comboRate?: number;
	jobs?: string[];
	magick?: number;
	mp?: number;
	critRate?: number;
}
