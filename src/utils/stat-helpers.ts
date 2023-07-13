import type { Character, StatGrowthChart } from '../interfaces/characters';

export const deriveStats = (
	characterData: Character,
	statGrowth: StatGrowthChart,
	statKey: string
) => {
	const statIndex = Math.floor(characterData.level / 10);
	const statLowerBound = statGrowth[statKey][statIndex];
	const statModulo = characterData.level % 10;
	const statDiff = statGrowth[statKey][statIndex + 1] - statLowerBound;
	const stat = statLowerBound + statDiff * (statModulo / 10);
	return stat;
};
