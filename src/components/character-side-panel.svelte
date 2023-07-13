<script lang="ts">
	import { page } from '$app/stores';
	import { characterStore, statsStore } from '../stores';

	import { levelsOptions } from '../constants/characters';
	import { WEAPONS, WEAPON_TYPES } from '../constants/gear';

	import Select from './common/controlled-select.svelte';

	// PROPS

	// STATE

	// LOGIC
	$: character = $page.params.character;
	$: characterData = $characterStore[character];
	$: characterStats = $statsStore[character];

	$: weapons = Object.entries(WEAPONS)
		.filter(([_key, { jobs, type }]) =>
			[characterData.job1, characterData.job2].some((job) =>
				(jobs || WEAPON_TYPES[type].jobs).includes(job)
			)
		)
		.map(([key, _value]) => ({ label: key, value: key }));
</script>

<div>
	<div>
		{character}
		{characterData.job1} / {characterData.job2}
		<Select
			options={levelsOptions}
			label="Level"
			callback={(event) => characterStore.updateLevel(character, event.target.value)}
			value={$characterStore[character].level}
		/>
		<span>{Math.round(characterStats.hp)} HP / {Math.round(characterStats.mp)} MP</span>
		<Select options={weapons} label="Weapon" callback={() => {}} />
	</div>
</div>
