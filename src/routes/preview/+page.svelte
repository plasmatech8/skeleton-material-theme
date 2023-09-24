<script lang="ts">
	import HomeHeroComponents from '$lib/HomeHeroComponents.svelte';
	import PreviewComponents from '$lib/PreviewComponents.svelte';
</script>

<div class="container mx-auto p-6 flex flex-col gap-8 mb-40">
	<section class="mb-10">
		<h1 class="h1 mb-5">Preview</h1>
		<p>Here is some preview UI that I stole from the docs:</p>
	</section>
	<section class="card p-4 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3" data-toc-ignore>Preview</h3>
		<PreviewComponents />
	</section>
	<div class="mx-auto">
		<section
			class="card bg-gradient-to-tr from-surface-100 dark:from-surface-900 to-primary-100 dark:to-primary-800 p-4 space-y-8 max-w-7xl"
		>
			<div class="w-[700px] max-w-7xl mx-auto p-4 py-16 md:py-24"><HomeHeroComponents /></div>
		</section>
	</div>
</div>
