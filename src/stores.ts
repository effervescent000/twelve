import { derived, writable } from 'svelte/store';
import { CHARACTERS, STATS } from './constants/characters';
import type { Character, CharacterStats } from './interfaces/characters';
import { deriveStats } from './utils/stat-helpers';

const makeCharacterStore = () => {
	const { subscribe, update } = writable<Record<string, Character>>(
		CHARACTERS.reduce(
			(acc, cur) => ({ ...acc, [cur]: { job1: null, job2: null, licenses: [], level: '1' } }),
			{}
		)
	);

	const updateJob1 = (char: string, job: string) =>
		update((old) => ({ ...old, [char]: { ...old[char], job1: job } }));
	const updateJob2 = (char: string, job: string) =>
		update((old) => ({ ...old, [char]: { ...old[char], job2: job } }));
	const toggleLicense = (char: string, license: string) =>
		update((old) => {
			if (old[char].licenses.includes(license)) {
				return { ...old, [char]: { ...old[char], licenses: [...old[char].licenses, license] } };
			} else {
				return {
					...old,
					[char]: { ...old[char], licenses: old[char].licenses.filter((lic) => lic !== license) }
				};
			}
		});
	const updateLevel = (char: string, level: number) =>
		update((old) => ({ ...old, [char]: { ...old[char], level } }));
	const updateWeapon = (char: string, weapon: string) =>
		update((old) => ({ ...old, [char]: { ...old[char], weapon } }));
	const updateHead = (char: string, head: string) =>
		update((old) => ({ ...old, [char]: { ...old[char], head } }));
	const updateBody = (char: string, body: string) =>
		update((old) => ({ ...old, [char]: { ...old[char], body } }));

	return {
		subscribe,
		updateJob1,
		updateJob2,
		toggleLicense,
		updateLevel,
		updateWeapon,
		updateHead,
		updateBody
	};
};

export const characterStore = makeCharacterStore();

export const statsStore = derived(characterStore, ($characterStore) => {
	const stats: Record<string, CharacterStats> = {};
	Object.entries($characterStore).forEach(([character, characterData]) => {
		stats[character] = {
			hp: deriveStats(characterData, STATS[character], 'hp'),
			mp: deriveStats(characterData, STATS[character], 'mp'),
			strength: deriveStats(characterData, STATS[character], 'strength'),
			magick: deriveStats(characterData, STATS[character], 'magick'),
			vitality: deriveStats(characterData, STATS[character], 'vitality'),
			speed: deriveStats(characterData, STATS[character], 'speed')
		};
	});
	return stats;
});
