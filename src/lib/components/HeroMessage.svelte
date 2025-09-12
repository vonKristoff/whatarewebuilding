<script lang="ts">
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import FatVerbStore from '$lib/stores/FatVerbs.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Global from '$lib/stores/Global.svelte';
	import { onMount } from 'svelte';
	let padding = 56;
	let dim = $state(0);
	$effect(() => {
		const interval = setInterval(() => FatVerbStore.setNextVerb(), 1500);
		return () => clearInterval(interval);
	});
	$effect(() => {
		if (!Global.isMobile) {
			dim = Global.layout === 'LANDSCAPE' ? innerHeight.current : innerWidth.current;
		}
	});
	onMount(() => {
		// only run once
		if (Global.isMobile) dim = innerWidth?.current || 0;
	});
	let size = $derived(dim - padding < 0 ? 0 : dim - padding);
</script>

{#each FatVerbStore.verbs as fv}
	<div
		class:active={FatVerbStore.current === fv}
		class="absolute grid hidden h-[100dvh] w-screen place-content-center"
	>
		<div
			class:shift-left={fv === 'keep'}
			class="flex flex-col gap-8 overflow-hidden"
			style={`transform: scale(${1 || 0});`}
		>
			<!-- <Icon ctx={`fat-${FatVerbStore.current}`} size="100%" /> -->
			<!-- <Icon ctx={`fat-${fv}`} size={`${scale * max}em`} /> -->
			<Icon ctx={`fat-${fv}`} size={`${size}px`} />
		</div>
	</div>
{/each}

<style>
	.active {
		display: grid;
	}
	.shift-left {
		margin-left: 2em;
	}
</style>
