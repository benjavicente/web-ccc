<script lang="ts">
	export let metadata: Metadata;
	export let content: string;
</script>

<svelte:head>
	<title>{metadata.title}</title>
</svelte:head>

<div class="prose">
	{@html content}
</div>
