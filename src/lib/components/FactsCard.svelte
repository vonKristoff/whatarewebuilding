<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		bullets?: string[];
		description?: string;
		index?: string;
		children?: Snippet;
		footer?: string;
	}
	let { title, bullets, description, index, children, footer }: Props = $props();
</script>

<div class="flex flex-col items-center gap-8 overflow-clip rounded-xl border-4 bg-amber-300 p-8">
	{#if index}
		<div class="circ grid h-12 w-12 place-content-center rounded-[50%] border-4">
			<span class="font-tertiary text-xl">{index}</span>
		</div>
	{/if}
	{#if title || description}
		<div class="flex flex-col self-center">
			{#if title}
				<span class="font-tertiary text-4xl">{title}</span>
			{/if}
			{#if description}
				<p>{description}</p>
			{/if}
		</div>
	{/if}
	{#if bullets}
		<ul
			class="flex grow-1 flex-col justify-center gap-2 font-secondary text-2xl md:text-lg lg:ml-8 lg:text-2xl"
		>
			{#each bullets as fact}
				<li class="list-disc"><span>{fact}</span></li>
			{/each}
		</ul>
	{/if}
	<div class="flex grow-1">
		{@render children?.()}
	</div>
	{#if footer}
		<div class="align-self-end w-full border-l-4 py-4 pl-8 text-accent">
			<span>{footer}</span>
		</div>
	{/if}
</div>
