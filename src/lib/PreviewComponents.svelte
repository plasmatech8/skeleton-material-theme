<script>
	import { ProgressBar, SlideToggle } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';
</script>

<!-- Buttons -->
<div class="grid grid-cols-3 gap-4">
	<button class="btn variant-filled-primary" use:ripple>primary</button>
	<button class="btn variant-filled-secondary" use:ripple>secondary</button>
	<button class="btn variant-filled-tertiary" use:ripple>tertiary</button>
	<button class="btn variant-filled-success" use:ripple>success</button>
	<button class="btn variant-filled-warning" use:ripple>warning</button>
	<button class="btn variant-filled-error" use:ripple>error</button>
</div>
<hr class="opacity-50" />
<!-- Progress Bars -->
<div class="grid grid-cols-1 gap-4">
	<ProgressBar meter="bg-primary-500" track="bg-primary-500/20" value={66} max={100} />
	<ProgressBar meter="bg-secondary-500" track="bg-secondary-500/20" value={50} max={100} />
	<ProgressBar meter="bg-tertiary-500" track="bg-tertiary-500/20" max={100} />
</div>
<hr class="opacity-50" />
<!-- Badges -->
<div class="grid grid-cols-4 gap-4 place-items-center">
	<span class="badge variant-filled-surface">surface</span>
	<span class="badge variant-filled-primary">primary</span>
	<span class="badge variant-filled-secondary">secondary</span>
	<span class="badge variant-filled-tertiary">tertiary</span>
	<span class="badge badge-glass">glass</span>
	<span class="badge variant-filled-success">success</span>
	<span class="badge variant-filled-warning">warning</span>
	<span class="badge variant-filled-error">error</span>
</div>
<hr class="opacity-50" />
<!-- Slide Toggles -->
<div class="grid grid-cols-4 gap-4 place-items-center">
	<SlideToggle name="exampleSliderThree" checked />
	<SlideToggle name="exampleSliderOne" active="bg-primary-500" checked />
	<SlideToggle name="exampleSliderTwo" active="bg-secondary-500" checked />
	<SlideToggle name="exampleSliderFour" active="bg-tertiary-500" checked />
</div>
