import type { Armor, ArmorDefault, Weapon, WeaponDefault } from '../interfaces/gear';

import { JOBS } from './jobs';

export const WEAPON_TYPES: Record<string, WeaponDefault> = {
	sword: { key: 'sword', ct: 32, comboRate: 5, jobs: [JOBS.knight] },
	dagger: { key: 'dagger', ct: 21, comboRate: 12, jobs: [JOBS.shikari] },
	axe: { key: 'axe', ct: 29, comboRate: 6, jobs: [JOBS.foebreaker] },
	hammer: { key: 'hammer', ct: 32, comboRate: 8, jobs: [JOBS.foebreaker] },
	mace: { key: 'mace', ct: 30, comboRate: 5, jobs: [JOBS.redMage] },
	greatsword: { key: 'greatsword', ct: 35, comboRate: 8, jobs: [JOBS.knight] },
	katana: { key: 'katana', ct: 31, comboRate: 20, jobs: [JOBS.bushi] },
	spear: { key: 'spear', ct: 28, comboRate: 4, jobs: [JOBS.uhlan] },
	pole: { key: 'pole', ct: 25, comboRate: 15, jobs: [JOBS.monk] },
	rod: { key: 'rod', ct: 33, comboRate: 0, jobs: [JOBS.whiteMage], magick: 2 },
	staff: { key: 'staff', ct: 34, comboRate: 0, jobs: [JOBS.blackMage] },
	bow: { key: 'bow', ct: 36, critRate: 5, jobs: [JOBS.archer] },
	crossBow: { key: 'crossBow', ct: 24, critRate: 7, jobs: [JOBS.timeMage] },
	gun: { key: 'gun', ct: 50, critRate: 5, jobs: [JOBS.machinist] }
};

export const WEAPONS: Record<string, Weapon> = {
	ancientSword: {
		type: WEAPON_TYPES.sword.key,
		attack: 35
	},
	chopper: {
		type: WEAPON_TYPES.dagger.key,
		attack: 40
	},
	broadaxe: {
		type: WEAPON_TYPES.axe.key,
		attack: 36
	},
	sledgehammer: {
		type: WEAPON_TYPES.hammer.key,
		attack: 66
	},
	miter: {
		type: WEAPON_TYPES.mace.key,
		attack: 42
	},
	claymore: {
		type: WEAPON_TYPES.greatsword.key,
		attack: 83
	},
	osafune: {
		type: WEAPON_TYPES.katana.key,
		attack: 26
	},
	partisan: {
		type: WEAPON_TYPES.spear.key,
		attack: 34
	},
	ironPole: {
		type: WEAPON_TYPES.pole.key,
		attack: 46
	},
	gaiaRod: {
		type: WEAPON_TYPES.rod.key,
		attack: 43
	},
	stormStaff: {
		type: WEAPON_TYPES.staff.key,
		attack: 36,
		magick: 4
	},
	aevisKiller: {
		type: WEAPON_TYPES.bow.key,
		attack: 25
	},
	paraminaCrossbow: {
		type: WEAPON_TYPES.crossBow.key,
		attack: 42
	},
	vega: {
		type: WEAPON_TYPES.gun.key,
		attack: 13
	}
};

export const ARMOR_DEFAULTS: Record<string, ArmorDefault> = {
	light: {
		key: 'light',
		jobs: [JOBS.archer, JOBS.machinist, JOBS.monk, JOBS.shikari]
	},
	heavy: {
		key: 'heavy',
		jobs: [JOBS.timeMage, JOBS.uhlan, JOBS.foebreaker, JOBS.knight]
	},
	mystic: {
		key: 'mystic',
		jobs: [JOBS.blackMage, JOBS.bushi, JOBS.redMage, JOBS.whiteMage]
	}
};

export const HEADGEAR: Record<string, Armor> = {
	headgear: {
		type: ARMOR_DEFAULTS.light.key,
		magickResist: 5,
		hp: 20
	},
	sallet: {
		type: ARMOR_DEFAULTS.heavy.key,
		magickResist: 7,
		strength: 3
	},
	pointyHat: {
		type: ARMOR_DEFAULTS.mystic.key,
		magickResist: 6,
		mp: 16,
		magick: 2
	}
};

export const BODY_ARMOR: Record<string, Armor> = {
	leatherBreastplate: {
		type: ARMOR_DEFAULTS.light.key,
		defense: 6,
		hp: 30
	},
	scaleArmor: {
		type: ARMOR_DEFAULTS.heavy.key,
		defense: 9,
		strength: 3,
		speed: 3
	},
	silkenShirt: {
		type: ARMOR_DEFAULTS.mystic.key,
		defense: 6,
		mp: 8,
		magick: 2
	}
};
