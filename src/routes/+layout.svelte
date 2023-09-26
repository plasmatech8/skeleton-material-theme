<script lang="ts">
	import { base } from '$app/paths';
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import '@fortawesome/fontawesome-free/js/all.min.js';
	import {
		AppShell,
		Drawer,
		Modal,
		Toast,
		initializeStores,
		storePopup
	} from '@skeletonlabs/skeleton';
	import 'svelte-ripple-action/ripple.css';
	import '../app.postcss';
	import HeaderContents from './HeaderContents.svelte';
	import SidebarContents from './SidebarContents.svelte';

	// Skeleton Stores
	initializeStores();

	// Floating UI for Popups
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<svelte:head>
	<title>Skeleton Material Theme</title>
</svelte:head>

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

<Modal />

<Toast />
