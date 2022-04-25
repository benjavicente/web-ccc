<script lang="ts">
	export let posts: { slug: string; metadata: Metadata }[] = [];
</script>

<ul class="flex flex-col gap-2">
	{#each posts as { slug, metadata }}
		<a class="bg-zinc-200 p-4 block rounded hover:underline hover:bg-zinc-300" href="/guias/{slug}">{metadata.title}</a>
	{/each}
</ul>
