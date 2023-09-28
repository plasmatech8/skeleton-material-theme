<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';
	import pkg from '../../package.json?raw';

	const links = [
		{ href: `${base}/`, text: 'Home', icon: 'fas fa-house' },
		{ href: `${base}/preview`, text: 'Preview', icon: 'fas fa-eye' },
		{ href: `${base}/buttons`, text: 'Buttons', icon: 'fas fa-arrow-pointer' },
		{ href: `${base}/inputs`, text: 'Inputs', icon: 'fas fa-keyboard' },
		{ href: `${base}/modals`, text: 'Modals', icon: 'fas fa-message' },
		{ href: `${base}/toasts`, text: 'Toasts', icon: 'fas fa-bell' }
	];

	const drawerStore = getDrawerStore();
</script>

<div class="bg-surface-50-900-token h-full border-surface-200-700-token border-r overflow-y-auto">
	<div class="flex flex-col gap-2 p-2 h-full">
		{#each links as { href, text, icon }}
			<a
				{href}
				class="btn hover:variant-soft-primary"
				class:variant-soft-primary={base + $page.route.id === href}
				on:click={() => drawerStore.close()}
				use:ripple
			>
				<i class="{icon} mr-2" />
				{text}
			</a>
		{/each}
		<hr />
		<a
			href="{base}/info"
			class="btn hover:variant-soft-secondary"
			class:variant-soft-secondary={$page.route.id === '/info'}
			on:click={() => drawerStore.close()}
			use:ripple
		>
			Info
		</a>
		<div class="flex-1" />
		<div class="text-center text-surface-300-600-token">{JSON.parse(pkg).version}</div>
	</div>
</div>
