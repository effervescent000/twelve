<script lang="ts">
	import { page } from '$app/stores';
	import { characterStore } from '../../stores';

	import JobList from './job-list.svelte';

	// PROPS

	// STATE

	// LOGIC
	$: character = $page.params.character;

	const job1Callback = (job: string) => characterStore.updateJob1(character, job);
	const job2Callback = (job: string) => characterStore.updateJob2(character, job);
</script>

<div class="flex gap-4">
	<div>
		Job 1:
		<JobList callback={job1Callback} />
	</div>
	<div>
		Job 2:
		<JobList callback={job2Callback} />
	</div>
</div>
