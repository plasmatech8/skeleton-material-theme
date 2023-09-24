<script lang="ts">
	import { page } from '$app/stores';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';
	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/preview', text: 'Preview' },
		{ href: '/buttons', text: 'Buttons' },
		{ href: '/modals', text: 'Modals' }
	];

	const drawerStore = getDrawerStore();
</script>

<div class="bg-surface-50-900-token h-full border-surface-200-700-token border-r overflow-y-auto">
	<div class="flex flex-col gap-2 p-2">
		{#each links as { href, text }}
			<a
				{href}
				class="btn hover:variant-soft-primary"
				class:variant-soft-primary={$page.route.id === href}
				on:click={() => drawerStore.close()}
				use:ripple
			>
				{text}
			</a>
		{/each}
	</div>
</div>
