<script lang="ts">
	import { page } from '$app/stores';
	import JobSelection from '../../components/jobs/job-selection.svelte';

	// PROPS

	// STATE

	// LOGIC
	const { character } = $page.params;
</script>

<JobSelection {character} />
