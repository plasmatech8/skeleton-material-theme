<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { ripple } from 'svelte-ripple-action';
	const modalStore = getModalStore();

	function openAlertModal() {
		modalStore.trigger({
			type: 'alert',
			title: 'Example Alert',
			body: 'This is an example modal.',
			image: 'https://i.imgur.com/WOgTG96.gif'
		});
	}

	function openConfirmModal() {
		modalStore.trigger({
			type: 'confirm',
			title: 'Please Confirm',
			response: (r: boolean) => console.log('response:', r)
		});
	}

	function openPromptModal() {
		modalStore.trigger({
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: 'Skeleton',
			valueAttr: { type: 'text', minlength: 3, maxlength: 10, required: true },
			response: (r: string) => console.log('response:', r)
		});
	}
</script>

<div class="container mx-auto p-6 flex flex-col gap-8">
	<h1 class="h1">Modals</h1>
	<section class="card p-8 space-y-8 col-span-2 lg:col-span-1">
		<h3 class="h3">Default Modals</h3>
		<div>
			<button on:click={openAlertModal} class="btn variant-filled-primary" use:ripple>
				Alert!
			</button>
		</div>
		<div>
			<button on:click={openConfirmModal} class="btn variant-filled-secondary" use:ripple>
				Confirm?
			</button>
		</div>

		<div>
			<button on:click={openPromptModal} class="btn variant-filled-tertiary" use:ripple>
				Prompt!?
			</button>
		</div>
	</section>
</div>
