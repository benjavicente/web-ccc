<script lang="ts">
	import { base } from '$app/paths';

	export let posts: { slug: string; metadata: Metadata }[] = [];
</script>

<ul class="flex flex-col gap-2">
	{#each posts as { slug, metadata }}
		<a class="bg-zinc-200 p-4 block rounded hover:underline hover:bg-zinc-300" href="{base}/guias/{slug}">
			{metadata.title}
		</a>
	{/each}
</ul>
