<script>
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';

	const drawerStore = getDrawerStore();
</script>

<AppBar
	class="border-b border-surface-200-700-token"
	gridColumns="grid-cols-3"
	slotLead="place-self-start"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<button class="mr-4 text-xl lg:hidden" on:click={() => drawerStore.open()}>🍔</button>
	</svelte:fragment>

	<a href="/" class="text-xl font-bold whitespace-nowrap">
		<span class="gradient-heading">Skeleton</span> Material Theme
	</a>

	<svelte:fragment slot="trail">
		<LightSwitch />
		<a
			class="btn btn-sm variant-outline-surface"
			href="https://github.com/plasmatech8/skeleton-material-theme"
			target="_blank"
			rel="noreferrer"
			use:ripple
		>
			GitHub
		</a>
	</svelte:fragment>
</AppBar>
