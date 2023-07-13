<script lang="ts">
	// PROPS
	export let options: { label: string; value: string | number }[];
	export let label = '';
	export let callback = (_event: any) => {};
	export let value: string | number;

	// STATE

	// LOGIC
</script>

<div>
	{label}
	<select on:change={callback} {value}>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
