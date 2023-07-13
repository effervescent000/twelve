<script lang="ts">
	import { characterStore } from '../../stores';

	// PROPS
	export let character: string;

	import JobList from './job-list.svelte';

	// STATE

	// LOGIC
	const job1Callback = (job: string) => characterStore.updateJob1(character, job);
	const job2Callback = (job: string) => characterStore.updateJob2(character, job);
</script>

<div class="flex">
	<div>
		Job 1:
		<JobList callback={job1Callback} />
	</div>
	<div>
		Job 2:
		<JobList callback={job2Callback} />
	</div>
</div>
