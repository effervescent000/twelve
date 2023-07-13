<script lang="ts">
	import { characterStore } from '../stores';

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
		<!-- level select goes here -->
		<!-- character health and mana go here -->
	</div>
</div>
