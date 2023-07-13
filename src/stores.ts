import { writable } from 'svelte/store';
import { CHARACTERS } from './constants/characters';
import type { Character } from './interfaces/characters';

const makeCharacterStore = () => {
	const { subscribe, update } = writable<Record<string, Character>>(
		CHARACTERS.reduce(
			(acc, cur) => ({ ...acc, [cur]: { job1: null, job2: null, licenses: [], level: 1 } }),
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

	return { subscribe, updateJob1, updateJob2, toggleLicense, updateLevel };
};

export const characterStore = makeCharacterStore();
