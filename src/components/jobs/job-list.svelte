<script lang="ts">
	import { JOBS } from '../../constants/jobs';

	// PROPS
	export let callback: (job: string) => void;

	// STATE

	// LOGIC
</script>

{#each JOBS as job}
	<div>
		<button on:click={() => callback(job)}>{job}</button>
	</div>
{/each}
