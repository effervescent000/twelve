import type { Character, StatGrowthChart } from '../interfaces/characters';

import { BODY_ARMOR, HEADGEAR } from '../constants/gear';

export const deriveStats = (
	characterData: Character,
	statGrowth: StatGrowthChart,
	statKey: string
) => {
	const statIndex = Math.floor(characterData.level / 10);
	const statLowerBound = statGrowth[statKey][statIndex];
	const statModulo = characterData.level % 10;
	const statDiff = statGrowth[statKey][statIndex + 1] - statLowerBound;
	const baseStat = statLowerBound + statDiff * (statModulo / 10);

	let modifiedStat = baseStat;

	if (characterData.head) modifiedStat += HEADGEAR[characterData.head].hp || 0;
	if (characterData.body) modifiedStat += BODY_ARMOR[characterData.body].hp || 0;

	return modifiedStat;
};
