<script lang="ts">
	import {
		AppBar,
		LightSwitch,
		getDrawerStore,
		popup,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';

	const drawerStore = getDrawerStore();

	let menuPopupSettings: PopupSettings = {
		event: 'click',
		target: 'menuPopup',
		middleware: {
			offset: 20
		}
	};
</script>

<AppBar
	class="border-b border-surface-200-700-token !py-0 h-16 justify-center"
	gridColumns="grid-cols-3"
	slotLead="place-self-start"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<button
			class="mr-4 text-xl lg:hidden btn-icon hover:variant-soft"
			on:click={() => drawerStore.open()}
			use:ripple
		>
			<i class="fa-solid fa-bars" />
		</button>
		<svg
			class="fill-token -scale-x-[100%] h-9"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 200 200"
		>
			<path
				fill-rule="evenodd"
				d="M98.77 50.95c25.1 0 46.54 8.7 61.86 23a41.34 41.34 0 0 0 5.19-1.93c4.35-2.02 10.06-6.17 17.13-12.43-1.15 10.91-2.38 18.93-3.7 24.04-.7 2.75-1.8 6.08-3.3 10a80.04 80.04 0 0 1 8.42 23.33c6.04 30.3-4.3 43.7-28.33 51.18.18.9.32 1.87.42 2.9.86 8.87-3.62 23.19-9 23.19-3.54 0-5.84-4.93-8.3-12.13-.78 8.34-4.58 17.9-8.98 17.9-4.73 0-7.25-8.84-10.93-20.13a214 214 0 0 1-.64 2.93l-.16.71-.16.71-.17.71c-1.84 7.58-4.46 15.07-8.5 15.07-5.06 0-2.29-15.9-10.8-22.63-43.14 2.36-79.43-13.6-79.43-59.62 0-8.48 2-16.76 5.69-24.45a93.72 93.72 0 0 1-1.77-3.68c-2.87-6.32-6.3-15.88-10.31-28.7 10.26 7.66 18.12 12.22 23.6 13.68.5.14 1.02.26 1.57.36 14.36-14.44 35.88-24.01 60.6-24.01Zm-9.99 62.3c-14.57 0-26.39 11.45-26.39 25.58 0 14.14 11.82 25.6 26.39 25.6s26.39-11.46 26.39-25.6c0-13.99-11.58-25.35-25.95-25.58Zm37.45 31.95c-4.4 0-6.73 9.4-6.73 13.62 0 3.3 1.1 5.12 2.9 5.45 4.39.4 3.05-5.97 5.23-5.97 1.06 0 2.2 1.35 3.34 2.73l.34.42c1.25 1.52 2.5 2.93 3.64 2.49 2.7-1.61 1.67-5.12.74-7.88-3.3-6.96-5.05-10.86-9.46-10.86Zm-36.85-28.45c12.57 0 22.76 9.78 22.76 21.85 0 12.07-10.2 21.85-22.76 21.85-.77 0-1.53-.04-2.29-.11 11.5-1.1 20.46-10.42 20.46-21.74 0-11.32-8.97-20.63-20.46-21.74.76-.07 1.52-.1 2.3-.1Zm65.54-5c-10.04 0-18.18 10.06-18.18 22.47 0 12.4 8.14 22.47 18.18 22.47s18.18-10.06 18.18-22.47c0-12.41-8.14-22.48-18.18-22.48Zm.6 3.62c8.38 0 15.16 8.4 15.16 18.74 0 10.35-6.78 18.74-15.16 18.74-.77 0-1.54-.07-2.28-.21 7.3-1.36 12.89-9.14 12.89-18.53 0-9.4-5.6-17.17-12.89-18.53.74-.14 1.5-.2 2.28-.2Zm3.34-72.27.12.07c.58.38.75 1.16.37 1.74l-2.99 4.6c-.35.55-1.05.73-1.61.44l-.12-.07a1.26 1.26 0 0 1-.37-1.74l2.98-4.6a1.26 1.26 0 0 1 1.62-.44ZM39.66 42l.08.1 2.76 3.93a1.26 1.26 0 0 1-2.06 1.45l-2.76-3.94A1.26 1.26 0 0 1 39.66 42Zm63.28-42 2.85 24.13 10.62-11.94.28 29.72-2.1-.47a77.8 77.8 0 0 0-16.72-2.04c-4.96 0-9.61.67-13.96 2l-2.34.73L83.5 4.96l9.72 18.37L102.94 0Zm-1.87 13.39-7.5 17.96-7.3-13.8-1.03 19.93.22-.06a51.56 51.56 0 0 1 12.1-1.45h.31c4.58 0 9.58.54 15 1.61l.35.07-.15-16.54-9.79 11-2.21-18.72Zm38.86 19.23c.67.2 1.05.89.86 1.56l-.38 1.32c-.17.62-.8 1-1.42.89l-.13-.03a1.26 1.26 0 0 1-.86-1.56l.38-1.32c.19-.66.88-1.05 1.55-.86ZM63.95 31.1l.05.12.7 2.17a1.26 1.26 0 0 1-2.34.9l-.04-.12-.71-2.17a1.26 1.26 0 0 1 2.34-.9Z"
			/>
		</svg>
	</svelte:fragment>

	<a href="/" class="text-xl font-bold whitespace-nowrap">
		<span class="gradient-heading">Skeleton</span> Material
		<span class="hidden sm:inline">Theme</span>
	</a>

	<svelte:fragment slot="trail">
		<LightSwitch />
		<a
			class="btn btn-sm variant-outline-surface hidden sm:block"
			href="https://github.com/plasmatech8/skeleton-material-theme"
			target="_blank"
			rel="noreferrer"
			use:ripple
		>
			GitHub
		</a>
		<button class="btn-icon hover:variant-soft" use:ripple use:popup={menuPopupSettings}>
			<i class="fa-solid fa-ellipsis-vertical text-lg" />
		</button>
	</svelte:fragment>
</AppBar>

<nav class="list-nav card p-1 w-60 shadow-xl" data-popup={menuPopupSettings.target}>
	<ul>
		<li class="">
			<div class="focus:outline-none !px-6 !py-3 flex gap-5 items-center">
				<i class="fas fa-user" />
				<div>Hello User!</div>
			</div>
		</li>
		<hr />
		<li>
			<a href="#profile" class="focus:outline-none" use:ripple>
				<span class="badge bg-primary-500 aspect-square">
					<i class="fa-solid fa-cube text-white" />
				</span>
				<span class="flex-auto">Profile</span>
			</a>
		</li>
		<li>
			<a href="#settings" class="focus:outline-none" use:ripple>
				<span class="badge bg-primary-500 aspect-square">
					<i class="fa-solid fa-gear text-white" />
				</span>
				<span class="flex-auto">Settings</span>
			</a>
		</li>
		<li>
			<a
				href="https://github.com/plasmatech8/skeleton-material-theme"
				target="_blank"
				class="focus:outline-none"
				use:ripple
			>
				<span class="badge bg-primary-500 aspect-square">
					<i class="fa-brands fa-github text-white" />
				</span>
				<span class="flex-auto">GitHub Repository</span>
			</a>
		</li>
		<hr />
		<li>
			<button
				class="focus:outline-none w-full text-left"
				on:click={() => alert('You just signed out of a website that you cannot sign in to...')}
				use:ripple
			>
				<span class="badge bg-primary-500 aspect-square">
					<i class="fa-solid fa-right-from-bracket text-white" />
				</span>
				<span class="flex-auto">Sign Out</span>
			</button>
		</li>
	</ul>
</nav>
