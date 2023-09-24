<script lang="ts">
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { AppShell, Drawer, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import 'svelte-ripple-action/ripple.css';
	import '../app.postcss';
	import HeaderContents from './HeaderContents.svelte';
	import SidebarContents from './SidebarContents.svelte';

	// Skeleton Stores
	initializeStores();

	// Floating UI for Popups
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden lg:block w-64 h-full">
			<SidebarContents />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="header">
		<HeaderContents />
	</svelte:fragment>
	<slot />
</AppShell>

<Drawer>
	<SidebarContents />
</Drawer>
