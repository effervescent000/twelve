import type { Character, CharacterStats } from '../interfaces/characters';
import type { Armor, ArmorDefault, Weapon, WeaponDefault } from '../interfaces/gear';

import { JOBS } from './jobs';

const RANDOMNESS_MOD = 1.0625;

const strengthFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(attackPower * RANDOMNESS_MOD - targetDefense) *
	((1 + characterStats.strength) * ((+characterData.level + characterStats.strength) / 256));

const magickFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(attackPower * RANDOMNESS_MOD - targetDefense) *
	(1 + (characterStats.strength * (+characterData.level + characterStats.magick)) / 256);

const vitalityFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(attackPower * 0.55555 - targetDefense) *
	(1 + (characterStats.strength * (+characterData.level + characterStats.vitality)) / 128);

const speedFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(attackPower * RANDOMNESS_MOD - targetDefense) *
	(1 + (characterStats.strength * (+characterData.level + characterStats.speed)) / 218);

const gunFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) => (attackPower * RANDOMNESS_MOD) ^ 2;

const maceFormula = ({
	attackPower,
	characterStats,
	targetDefense,
	characterData
}: {
	attackPower: number;
	characterStats: CharacterStats;
	targetDefense: number;
	characterData: Character;
}) =>
	(attackPower * RANDOMNESS_MOD - targetDefense) *
	(1 + (characterStats.magick * (+characterData.level + characterStats.magick)) / 256);

const MELEE = 'melee';
const RANGED = 'ranged';

export const WEAPON_TYPES: Record<string, WeaponDefault> = {
	sword: {
		key: 'sword',
		ct: 32,
		comboRate: 5,
		jobs: [JOBS.knight],
		damageFormula: strengthFormula,
		range: MELEE
	},
	dagger: {
		key: 'dagger',
		ct: 21,
		comboRate: 12,
		jobs: [JOBS.shikari],
		damageFormula: speedFormula,
		range: MELEE
	},
	axe: {
		key: 'axe',
		ct: 29,
		comboRate: 6,
		jobs: [JOBS.foebreaker],
		damageFormula: vitalityFormula,
		range: MELEE
	},
	hammer: {
		key: 'hammer',
		ct: 32,
		comboRate: 8,
		jobs: [JOBS.foebreaker],
		damageFormula: vitalityFormula,
		range: MELEE
	},
	mace: {
		key: 'mace',
		ct: 30,
		comboRate: 5,
		jobs: [JOBS.redMage],
		damageFormula: maceFormula,
		range: MELEE
	},
	greatsword: {
		key: 'greatsword',
		ct: 35,
		comboRate: 8,
		jobs: [JOBS.knight],
		damageFormula: strengthFormula,
		range: MELEE
	},
	katana: {
		key: 'katana',
		ct: 31,
		comboRate: 20,
		jobs: [JOBS.bushi],
		damageFormula: magickFormula,
		range: MELEE
	},
	spear: {
		key: 'spear',
		ct: 28,
		comboRate: 4,
		jobs: [JOBS.uhlan],
		damageFormula: strengthFormula,
		range: MELEE
	},
	// TECHNICALLY pole uses a different formula from the standard strength one but I don't feel like
	// making this more complicated than it already is
	pole: {
		key: 'pole',
		ct: 25,
		comboRate: 15,
		jobs: [JOBS.monk],
		damageFormula: strengthFormula,
		range: MELEE
	},
	rod: {
		key: 'rod',
		ct: 33,
		comboRate: 0,
		jobs: [JOBS.whiteMage],
		magick: 2,
		damageFormula: magickFormula,
		range: MELEE
	},
	staff: {
		key: 'staff',
		ct: 34,
		comboRate: 0,
		jobs: [JOBS.blackMage],
		damageFormula: magickFormula,
		range: MELEE
	},
	bow: {
		key: 'bow',
		ct: 36,
		critRate: 5,
		jobs: [JOBS.archer],
		damageFormula: speedFormula,
		range: RANGED
	},
	crossBow: {
		key: 'crossBow',
		ct: 24,
		critRate: 7,
		jobs: [JOBS.timeMage],
		damageFormula: strengthFormula,
		range: RANGED
	},
	gun: {
		key: 'gun',
		ct: 50,
		critRate: 5,
		jobs: [JOBS.machinist],
		damageFormula: gunFormula,
		range: RANGED
	}
};

export const WEAPONS: Record<string, Weapon> = {
	aevisKiller: {
		type: WEAPON_TYPES.bow.key,
		attack: 25
	},
	ancientSword: {
		type: WEAPON_TYPES.sword.key,
		attack: 35
	},
	battleBamboo: {
		type: WEAPON_TYPES.pole.key,
		attack: 34
	},
	bhuj: {
		type: WEAPON_TYPES.mace.key,
		attack: 34
	},
	broadaxe: {
		type: WEAPON_TYPES.axe.key,
		attack: 36
	},
	bronzeMace: {
		type: WEAPON_TYPES.mace.key,
		attack: 24
	},
	chopper: {
		type: WEAPON_TYPES.dagger.key,
		attack: 40
	},
	claymore: {
		type: WEAPON_TYPES.greatsword.key,
		attack: 83
	},
	cypressPole: {
		type: WEAPON_TYPES.pole.key,
		attack: 22
	},
	gaiaRod: {
		type: WEAPON_TYPES.rod.key,
		attack: 43
	},
	ironHammer: {
		type: WEAPON_TYPES.hammer.key,
		attack: 24
	},
	ironPole: {
		type: WEAPON_TYPES.pole.key,
		attack: 46
	},
	mace: {
		type: WEAPON_TYPES.mace.key,
		attack: 17
	},
	miter: {
		type: WEAPON_TYPES.mace.key,
		attack: 42
	},
	osafune: {
		type: WEAPON_TYPES.katana.key,
		attack: 26
	},
	partisan: {
		type: WEAPON_TYPES.spear.key,
		attack: 34
	},
	paraminaCrossbow: {
		type: WEAPON_TYPES.crossBow.key,
		attack: 42
	},
	rod: {
		type: WEAPON_TYPES.rod.key,
		attack: 16,
		magick: 2
	},
	serpentRod: {
		type: WEAPON_TYPES.rod.key,
		attack: 25,
		magick: 2
	},
	silverBow: {
		type: WEAPON_TYPES.bow.key,
		attack: 19
	},
	sledgehammer: {
		type: WEAPON_TYPES.hammer.key,
		attack: 66
	},
	stormStaff: {
		type: WEAPON_TYPES.staff.key,
		attack: 36,
		magick: 4
	},
	vega: {
		type: WEAPON_TYPES.gun.key,
		attack: 13
	},
	warHammer: {
		type: WEAPON_TYPES.hammer.key,
		attack: 42
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
	balaclava: {
		type: ARMOR_DEFAULTS.light.key,
		magickResist: 12,
		hp: 90,
		strength: 1
	},
	cottonCap: {
		type: ARMOR_DEFAULTS.mystic.key,
		magickResist: 4,
		mp: 5,
		magick: 2
	},
	headgear: {
		type: ARMOR_DEFAULTS.light.key,
		magickResist: 5,
		hp: 20
	},
	headguard: {
		type: ARMOR_DEFAULTS.light.key,
		magickResist: 6,
		hp: 30
	},
	lambentHat: {
		type: ARMOR_DEFAULTS.mystic.key,
		magickResist: 15,
		mp: 36,
		magick: 4,
		speed: 3
	},
	pointyHat: {
		type: ARMOR_DEFAULTS.mystic.key,
		magickResist: 6,
		mp: 16,
		magick: 2
	},
	sallet: {
		type: ARMOR_DEFAULTS.heavy.key,
		magickResist: 7,
		strength: 3
	}
};

export const BODY_ARMOR: Record<string, Armor> = {
	bronzeChestplate: {
		type: ARMOR_DEFAULTS.light.key,
		defense: 8,
		hp: 40
	},
	chainmail: {
		type: ARMOR_DEFAULTS.heavy.key,
		defense: 17,
		strength: 3
	},
	kilimweaveShirt: {
		type: ARMOR_DEFAULTS.mystic.key,
		defense: 8,
		mp: 16,
		magick: 3
	},
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
