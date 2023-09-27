<script lang="ts">
	import { ripple } from '$lib/svelte-ripple-action';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	function triggerToast(variant: string) {
		toastStore.trigger({
			message: `You just clicked on the <b>${variant}</b> toast button!`,
			background: `variant-${variant}`,
			action: {
				label: 'button',
				response: () =>
					toastStore.trigger({
						message: 'Congratulations! You clicked a button!',
						background: 'variant-filled'
					})
			}
		});
	}
</script>

<div class="container mx-auto p-6 flex flex-col gap-8">
	<h1 class="h1">Toasts</h1>
	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Toasts</h3>
		{#each ['filled', 'ringed', 'soft', 'ghost'] as style}
			<div class="flex gap-5">
				{#each ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error'] as color}
					<button
						on:click={() => triggerToast(`${style}-${color}`)}
						class="btn variant-{style}-{color}"
						use:ripple
					>
						{color[0].toUpperCase() + color.slice(1)}
					</button>
				{/each}
			</div>
		{/each}
	</section>
</div>
