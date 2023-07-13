<script lang="ts">
	import { characterStore } from '../stores';

	import { levelsOptions } from '../constants/characters';

	import Select from './common/controlled-select.svelte';

	// PROPS
	export let character: string;

	// STATE

	// LOGIC
	$: characterData = $characterStore[character];
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
		<!-- character health and mana go here -->
	</div>
</div>
