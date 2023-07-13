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

export interface ArmorDefault {
	key: string;
	jobs: string[];
}

export interface Armor {
	type: string;
	defense?: number;
	magickResist?: number;
	hp?: number;
	mp?: number;
	strength?: number;
	magick?: number;
	vitality?: number;
	speed?: number;
	jobs?: string[];
}
