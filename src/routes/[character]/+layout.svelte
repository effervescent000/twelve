<script lang="ts">
	import { page } from '$app/stores';

	import CharacterSidePanel from '../../components/character-side-panel.svelte';

	// PROPS

	// STATE

	// LOGIC
	const { character } = $page.params;
</script>

<div class="flex">
	<slot />
	<CharacterSidePanel {character} />
</div>
