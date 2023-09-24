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

<div class="container mx-auto p-10">
	<section class="flex flex-col gap-6">
		<h1 class="h1">Modal examples</h1>
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
