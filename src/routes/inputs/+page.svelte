<script lang="ts">
	import { InputChip, SlideToggle, Step, Stepper } from '@skeletonlabs/skeleton';

	let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];

	let locked = true;
</script>

<div class="container mx-auto p-6 flex flex-col gap-8 mb-40">
	<h1 class="h1">Inputs</h1>
	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Basic Fields</h3>

		<label class="label">
			<span>Input</span>
			<input class="input" type="text" placeholder="Input" />
		</label>

		<label class="label">
			<span>Select</span>
			<select class="select">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
				<option value="5">Option 5</option>
			</select>
		</label>

		<label class="label">
			<span>Textarea</span>
			<textarea
				class="textarea"
				rows="4"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
		</label>

		<label class="label">
			<span>Upload</span>
			<input class="input" type="file" placeholder="Input" />
		</label>

		<div class="space-y-2">
			<p>Checkboxes:</p>
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" checked />
				<p>Option 1</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Option 2</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Option 3</p>
			</label>
		</div>

		<div class="space-y-2">
			<p>Radio buttons:</p>
			<label class="flex items-center space-x-2">
				<input class="radio" type="radio" checked name="radio-direct" value="1" />
				<p>Option 1</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="radio" type="radio" name="radio-direct" value="2" />
				<p>Option 2</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="radio" type="radio" name="radio-direct" value="3" />
				<p>Option 3</p>
			</label>
		</div>

		<div class="space-y-2">
			<p>Range sliders:</p>

			<input type="range" class="accent-primary-500 dark:accent-primary-400" value="75" max="100" />
			<input type="range" class="accent-surface-700 dark:accent-surface-300" value="75" max="100" />
		</div>
	</section>

	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Disabled/Read-only</h3>
		<label class="label">
			<span>Disabled</span>
			<input class="input" type="text" placeholder="Input" disabled />
		</label>

		<label class="label">
			<span>Read-only</span>
			<input class="input" type="text" placeholder="Input" readonly />
		</label>
	</section>

	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Validation Colors</h3>
		<div class="flex gap-4">
			<input class="input input-success" placeholder="success" />
			<input class="input input-warning" placeholder="warning" />
			<input class="input input-error" placeholder="error" />
		</div>
	</section>

	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Material (Filled-Underline) Variant</h3>
		<div class="flex gap-4">
			<input class="input variant-form-material input-success" placeholder="success" />
			<input class="input variant-form-material input-warning" placeholder="warning" />
			<input class="input variant-form-material input-error" placeholder="error" />
		</div>
	</section>

	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Input Chips</h3>
		<div class="flex flex-col gap-4">
			<InputChip bind:value={list} name="chips" placeholder="Enter any value..." />
		</div>
	</section>

	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Stepper Form</h3>

		<Stepper>
			<Step>
				<svelte:fragment slot="header">Get Started!</svelte:fragment>
				<div class="min-h-[10rem]">
					<p>
						This example Stepper will teach you how to use this component. Tap <u>next</u> to proceed
						to the next step.
					</p>
				</div>
			</Step>
			<Step>
				<svelte:fragment slot="header">Going Back.</svelte:fragment>
				<div class="min-h-[10rem]">
					<p>
						The current step progress will be tracked at the top. Tap <u>back</u> to return to the previous
						step.
					</p>
				</div>
			</Step>
			<Step {locked}>
				<svelte:fragment slot="header">A Locked Step.</svelte:fragment>
				<div class="min-h-[10rem]">
					<p>
						This Step component uses the <code class="code">locked</code> property to prevent progress.
						This is ideal for multi-step forms, such as registration. For now we'll simulate a successful
						validation condition using the toggle below.
					</p>
					<aside class="alert variant-ghost-warning">
						<div class="alert-message">
							<p>This step is <u>{locked ? 'Locked' : 'Unlocked'}</u></p>
						</div>
						<div class="alert-actions">
							<SlideToggle name="locked-state" bind:checked={locked} active="bg-warning-500" />
						</div>
					</aside>
				</div>
			</Step>
			<Step>
				<svelte:fragment slot="header">Long Form Content.</svelte:fragment>
				<div class="min-h-[10rem]">
					<p>The steps will expand to fit content of any length.</p>
					<p>
						<!-- cspell:disable -->
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro vero,
						saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
						corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
						vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
						corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
						vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
						corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
						vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
						corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel expedita porro
						vero, saepe dicta repellendus facilis ab accusamus unde, tempora ut nobis eum. Veniam, architecto
						corrupti.
						<!-- cspell:enable -->
					</p>
				</div>
			</Step>
			<Step>
				<svelte:fragment slot="header">Almost Done.</svelte:fragment>
				<div class="min-h-[10rem]">
					<p>
						A Complete button will appear on the last step. When the step is unlocked and the button
						pressed, an <code class="code">on:complete</code> event will be fired. You can use this trigger
						to submit form data to a server.
					</p>
				</div>
			</Step>
		</Stepper>

		<div class="text-surface-500-400-token flex flex-col gap-2">
			<p>
				Note: The ripple effect cannot be added to the buttons in this pre-built components because
				there is no access to the button elements.
			</p>
			<p>To add a ripple effect, <code>use:ripple</code> needs to be added to the DOM element.</p>
		</div>
	</section>
</div>
