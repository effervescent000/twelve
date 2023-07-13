<script lang="ts">
	import '../app.css';

	import CharacterCard from '../components/characters/character-card.svelte';

	// PROPS

	// STATE

	// LOGIC
	const characters = ['vaan', 'balthier', 'fran', 'basch', 'ashe', 'penelo'];
</script>

<div class="flex gap-5">
	{#each characters as char}
		<CharacterCard name={char} />
	{/each}
</div>
<slot />
