<script lang="ts">
	import { ProgressBar, SlideToggle } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';
</script>

<div class="container mx-auto p-6 flex flex-col gap-8 mb-20">
	<section class="mb-2">
		<h1 class="h1 mb-5">Buttons</h1>
	</section>
	<section class="card p-4 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Filled</h3>
		<div class="grid grid-cols-3 gap-4">
			<button class="btn variant-filled-primary" use:ripple>primary</button>
			<button class="btn variant-filled-secondary" use:ripple>secondary</button>
			<button class="btn variant-filled-tertiary" use:ripple>tertiary</button>
			<button class="btn variant-filled-success" use:ripple>success</button>
			<button class="btn variant-filled-warning" use:ripple>warning</button>
			<button class="btn variant-filled-error" use:ripple>error</button>
			<button class="btn variant-filled-surface" use:ripple>surface</button>
			<button class="btn variant-filled" use:ripple>(N/A)</button>
		</div>
		<hr class="opacity-50" />
		<h3 class="h3">Ringed</h3>
		<div class="grid grid-cols-3 gap-4">
			<button class="btn variant-ringed-primary" use:ripple>primary</button>
			<button class="btn variant-ringed-secondary" use:ripple>secondary</button>
			<button class="btn variant-ringed-tertiary" use:ripple>tertiary</button>
			<button class="btn variant-ringed-success" use:ripple>success</button>
			<button class="btn variant-ringed-warning" use:ripple>warning</button>
			<button class="btn variant-ringed-error" use:ripple>error</button>
			<button class="btn variant-ringed-surface" use:ripple>surface</button>
			<button class="btn variant-ringed" use:ripple>(N/A)</button>
		</div>
		<hr class="opacity-50" />

		<h3 class="h3">Soft</h3>
		<div class="grid grid-cols-3 gap-4">
			<button class="btn variant-soft-primary" use:ripple>primary</button>
			<button class="btn variant-soft-secondary" use:ripple>secondary</button>
			<button class="btn variant-soft-tertiary" use:ripple>tertiary</button>
			<button class="btn variant-soft-success" use:ripple>success</button>
			<button class="btn variant-soft-warning" use:ripple>warning</button>
			<button class="btn variant-soft-error" use:ripple>error</button>
			<button class="btn variant-soft-surface" use:ripple>error</button>
			<button class="btn variant-soft" use:ripple>(N/A)</button>
		</div>
		<hr class="opacity-50" />
		<h3 class="h3">Ghost</h3>
		<div class="grid grid-cols-3 gap-4">
			<button class="btn variant-ghost-primary" use:ripple>primary</button>
			<button class="btn variant-ghost-secondary" use:ripple>secondary</button>
			<button class="btn variant-ghost-tertiary" use:ripple>tertiary</button>
			<button class="btn variant-ghost-success" use:ripple>success</button>
			<button class="btn variant-ghost-warning" use:ripple>warning</button>
			<button class="btn variant-ghost-error" use:ripple>error</button>
			<button class="btn variant-ghost-surface" use:ripple>error</button>
			<button class="btn variant-ghost" use:ripple>(N/A)</button>
		</div>
		<hr class="opacity-50" />
		<h3 class="h3">Glass</h3>
		<div class="grid grid-cols-3 gap-4">
			<button class="btn variant-glass-primary" use:ripple>primary</button>
			<button class="btn variant-glass-secondary" use:ripple>secondary</button>
			<button class="btn variant-glass-tertiary" use:ripple>tertiary</button>
			<button class="btn variant-glass-success" use:ripple>success</button>
			<button class="btn variant-glass-warning" use:ripple>warning</button>
			<button class="btn variant-glass-error" use:ripple>error</button>
			<button class="btn variant-glass-surface" use:ripple>error</button>
			<button class="btn variant-glass" use:ripple>(N/A)</button>
		</div>
	</section>
	<section class="card p-4 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Icon</h3>
		<div class="flex gap-5 flex-wrap">
			<div>
				<button type="button" class="btn-icon btn-icon-sm variant-filled" use:ripple>(icon)</button>
				<button type="button" class="btn-icon variant-filled" use:ripple>(icon)</button>
				<button type="button" class="btn-icon btn-icon-lg variant-filled" use:ripple>(icon)</button>
				<button type="button" class="btn-icon btn-icon-xl variant-filled" use:ripple>(icon)</button>
			</div>
			<div>
				<button type="button" class="btn-icon btn-icon-sm variant-filled-primary" use:ripple>
					(icon)
				</button>
				<button type="button" class="btn-icon variant-filled-primary" use:ripple>(icon)</button>
				<button type="button" class="btn-icon btn-icon-lg variant-filled-primary" use:ripple>
					(icon)
				</button>
				<button type="button" class="btn-icon btn-icon-xl variant-filled-primary" use:ripple>
					(icon)
				</button>
			</div>
			<div>
				<button type="button" class="btn-icon btn-icon-sm variant-soft-secondary" use:ripple>
					(icon)
				</button>
				<button type="button" class="btn-icon variant-soft-secondary" use:ripple>(icon)</button>
				<button type="button" class="btn-icon btn-icon-lg variant-soft-secondary" use:ripple>
					(icon)
				</button>
				<button type="button" class="btn-icon btn-icon-xl variant-soft-secondary" use:ripple>
					(icon)
				</button>
			</div>
		</div>
	</section>
	<section class="card p-4 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Groups</h3>
		<div class="flex gap-5 flex-wrap">
			<div class="btn-group variant-filled">
				<button use:ripple>Months</button>
				<button use:ripple>Days</button>
				<button use:ripple>Years</button>
			</div>
			<div class="btn-group variant-filled-primary">
				<button use:ripple>Months</button>
				<button use:ripple>Days</button>
				<button use:ripple>Years</button>
			</div>

			<div class="btn-group variant-soft-secondary">
				<button use:ripple>Months</button>
				<button use:ripple>Days</button>
				<button use:ripple>Years</button>
			</div>
		</div>
	</section>
</div>
