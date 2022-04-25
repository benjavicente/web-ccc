<script lang="ts">
	import '../app.css';
	import { Popover, PopoverButton, PopoverPanel, Transition } from '@rgossiaux/svelte-headlessui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Menu as MenuIcon, X as XIcon, Users, Chat, DocumentText } from '@steeze-ui/heroicons';
	import { base } from '$app/paths';

	const links = [
		{ name: 'Grupos', href: `${base}/grupos`, icon: Users, color: '#68f3b5' },
		{ name: 'Canales', href: `${base}/canales`, icon: Chat, color: '#7fa0fa' },
		{ name: 'Guías', href: `${base}/guias`, icon: DocumentText, color: '#f25b7a' }
	];
</script>

<Popover let:open as="div" class="bg-zinc-800 sticky top-0 shadow-md">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<!-- izquierda -->
			<a class="text-white font-bold text-2xl" href="{base}/">
				<div class="sm:hidden" aria-hidden="true">CCC</div>
				<div class="hidden sm:inline" aria-hidden="true">Capítulo de Ciencias de la Computación</div>
			</a>
			<!-- derecha -->
			<div class="gap-4 hidden md:flex">
				{#each links as { color, href, icon, name }}
					<a {href} class="flex gap-2">
						<Icon src={icon} class="block h-6 w-6" theme="solid" style="fill: {color}" />
						<span class="text-white">{name}</span>
					</a>
				{/each}
			</div>
			<!-- popover -->
			<PopoverButton
				class="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				<span class="sr-only">Abrir menú</span>
				{#if open}
					<Icon src={XIcon} class="block h-6 w-6" aria-hidden="true" />
				{:else}
					<Icon src={MenuIcon} class="block h-6 w-6" aria-hidden="true" />
				{/if}
			</PopoverButton>
		</div>
	</div>
	<Transition
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<PopoverPanel
			as="div"
			class="flex flex-col gap-2 bg-zinc-300 absolute shadow-2xl inset-x-0 top-16 z-20 p-2 origin-top-right md:hidden"
		>
			{#each links as { color, href, icon, name }}
				<a {href} class="flex gap-2 bg-zinc-100 rounded items-center overflow-hidden">
					<div style:background={color} class="p-4">
						<Icon src={icon} class="block h-6 w-6" theme="solid" />
					</div>
					<span class="font-bold">{name}</span>
				</a>
			{/each}
		</PopoverPanel>
	</Transition>
</Popover>
