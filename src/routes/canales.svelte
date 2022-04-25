<script lang="ts" context="module">
	type Links = {
		group: string;
		links: {
			name: string;
			href: string;
		}[];
	};
</script>

<script lang="ts">
	export let allLinks: Links[];
</script>

<main class="py-4 px-6 md:px-12">
	{#each allLinks as { group, links }}
		<div class="mb-6">
			<h2 class="font-bold text-xl mb-2">{group}</h2>
			<ul class="flex flex-col gap-2">
				{#each links as { name, href }}
					<li><a {href} class="bg-zinc-200 p-4 block rounded hover:underline hover:bg-zinc-300">{name}</a></li>
				{/each}
			</ul>
		</div>
	{/each}
</main>
