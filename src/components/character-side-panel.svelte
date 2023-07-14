<script lang="ts">
	import { page } from '$app/stores';
	import { characterStore, statsStore } from '../stores';

	import { levelsOptions } from '../constants/characters';
	import { ARMOR_DEFAULTS, BODY_ARMOR, HEADGEAR, WEAPONS, WEAPON_TYPES } from '../constants/gear';

	import Select from './common/controlled-select.svelte';
	import DamagePane from './damage-pane.svelte';
	import { SPELLS } from '../constants/spells';

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

	$: spells = Object.entries(SPELLS)
		.filter(([_key, { jobs }]) =>
			[characterData.job1, characterData.job2].some((job) => jobs.includes(job))
		)
		.map(([key, _value]) => ({ label: key, value: key }));

	$: head = Object.entries(HEADGEAR)
		.filter(([_key, { jobs, type }]) =>
			[characterData.job1, characterData.job2].some((job) =>
				(jobs || ARMOR_DEFAULTS[type].jobs).includes(job)
			)
		)
		.map(([key, _value]) => ({ label: key, value: key }));
	$: body = Object.entries(BODY_ARMOR)
		.filter(([_key, { jobs, type }]) =>
			[characterData.job1, characterData.job2].some((job) =>
				(jobs || ARMOR_DEFAULTS[type].jobs).includes(job)
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
			value={characterData.level}
		/>
		<span>{Math.round(characterStats.hp)} HP / {Math.round(characterStats.mp)} MP</span>
		<Select
			options={weapons}
			label="Weapon"
			callback={(event) => characterStore.updateWeapon(character, event.target.value)}
			value={characterData.weapon}
		/>
		<Select
			options={spells}
			label="Selected spell"
			callback={(event) => characterStore.updateSpell(character, event.target.value)}
			value={characterData.spell}
		/>
		<Select
			options={head}
			label="Headgear"
			callback={(event) => characterStore.updateHead(character, event.target.value)}
			value={characterData.head}
		/>
		<Select
			options={body}
			label="Body armor"
			callback={(event) => characterStore.updateBody(character, event.target.value)}
			value={characterData.body}
		/>
		<DamagePane />
	</div>
</div>
