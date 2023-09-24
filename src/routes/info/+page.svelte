<script lang="ts">
	import { marked } from 'marked';
	import info from './info.md?raw';
</script>

<div class="container mx-auto p-10 flex flex-col gap-8">
	<section class="prose">
		{@html marked(info, { gfm: true })}
	</section>
</div>
