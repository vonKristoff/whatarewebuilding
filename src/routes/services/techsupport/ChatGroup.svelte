<script lang="ts">
	import ChatMessage from './ChatMessage.svelte';

	interface Message {
		handle: string;
		bg: string;
		side?: 'left' | 'right';
		text: string;
	}

	interface Props {
		title: string;
		messages: Message[];
		level?: number;
	}
	let { title, messages, level = 2 }: Props = $props();
	let isOpen = $state(false);

	const titleClass = $derived('text-3xl');
</script>

<div class="flex flex-col gap-3">
	<button
		type="button"
		aria-expanded={isOpen}
		onclick={() => (isOpen = !isOpen)}
		class="cursor-pointer my-4 flex w-full items-center justify-between gap-4 text-left font-bold font-secondary"
	>
		<span class={`bg-amber-300 ${titleClass}`}>{title}</span>
		<span class={`${titleClass} flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-black bg-amber-300`}>
			{isOpen ? '−' : '+'}
		</span>
	</button>

	{#if isOpen}
		<div class="flex flex-col gap-3 *:text-lg">
			{#each messages as m, i (m.handle)}
				<div class="msg-in" style={`animation-delay: ${i * 160}ms`}>
					<ChatMessage handle={m.handle} bg={m.bg} side={m.side}>{m.text}</ChatMessage>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.msg-in {
		animation: msgIn 0.45s ease-out both;
	}
	@keyframes msgIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
