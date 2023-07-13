<script lang="ts">
	import '../app.css';

	import { CHARACTERS } from '../constants/characters';

	import CharacterCard from '../components/character-card.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

<div class="flex gap-5">
	{#each CHARACTERS as char}
		<CharacterCard name={char} />
	{/each}
</div>
<slot />
