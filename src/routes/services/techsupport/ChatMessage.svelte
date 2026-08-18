<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		handle: string;
		bg: string;
		side?: 'left' | 'right';
		children?: Snippet;
	}
	let { handle, bg, side = 'left', children }: Props = $props();
</script>

<div class={`flex flex-col gap-1 ${side === 'right' ? 'items-end' : 'items-start'}`}>
	<div data-chat={side} class={bg}>
		{@render children?.()}
	</div>
	<span class="px-1 text-xs font-bold text-black/60">{handle}</span>
</div>