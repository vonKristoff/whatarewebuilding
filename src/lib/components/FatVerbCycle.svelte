<script lang="ts">
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import FatVerbStore from '$lib/stores/FatVerbs.svelte';
	import Global from '$lib/stores/Global.svelte';
	import { onMount } from 'svelte';
	import rawBase from '$lib/assets/wawb-base.svg?raw';
	import rawMake from '$lib/assets/wawb-make.svg?raw';
	import rawKeep from '$lib/assets/wawb-keep.svg?raw';
	import rawBuild from '$lib/assets/wawb-build.svg?raw';
	import rawShip from '$lib/assets/wawb-ship.svg?raw';
	import rawCreate from '$lib/assets/wawb-create.svg?raw';

	function animatePaths(node: HTMLElement) {
		const paths = node.querySelectorAll('path');
		paths.forEach((path) => {
			const length = path.getTotalLength();
			path.style.strokeDasharray = `0 ${length}`;
		});

		paths.forEach((path) => {
			const length = path.getTotalLength();
			path.style.transition = 'stroke-dasharray 1.3s ease-out';
			path.style.strokeDasharray = `${length / 2} ${length / 2}`;
		});
	}

	let padding = 56;
	let strokeWidth = 20;
	let dim = $state(0);
	let drawKey = $state(0);

	const VERB_SVGS: Record<string, string> = {
		make: rawMake,
		keep: rawKeep,
		build: rawBuild,
		ship: rawShip,
		create: rawCreate
	};

	$effect(() => {
		const interval = setInterval(() => FatVerbStore.setNextVerb(), 3500);
		return () => clearInterval(interval);
	});

	$effect(() => {
		if (!Global.isMobile) {
			dim = Global.layout === 'LANDSCAPE' ? innerHeight.current : innerWidth.current;
		}
	});

	onMount(() => {
		if (Global.isMobile) dim = innerWidth?.current || 0;
	});

	let size = $derived(dim - padding < 0 ? 0 : dim - padding);

	let previousVerb = $state<string | null>(null);
	$effect(() => {
		const current = FatVerbStore.current;
		if (current && current !== previousVerb) {
			previousVerb = current;
			drawKey++;
		}
	});
</script>

<div class="absolute inset-0 grid place-content-center">
	<div
		class="relative"
		style={`--stroke-width: ${strokeWidth}px; width: ${size}px; height: ${size}px;`}
	>
		<div class="base-svg absolute inset-0">
			{@html rawBase}
		</div>

		{#key drawKey}
			<div class="verb-svg absolute inset-0" use:animatePaths>
				{@html VERB_SVGS[FatVerbStore.current]}
			</div>
		{/key}
	</div>
</div>

<style>
	.base-svg :global(svg) {
		width: 100%;
		height: 100%;
	}

	.base-svg :global(path) {
		stroke: #4f3866;
		stroke-width: 10px;
	}

	.verb-svg :global(svg) {
		width: 100%;
		height: 100%;
	}

	.verb-svg :global(path) {
		stroke: #4f3866;
		stroke-width: var(--stroke-width);
		stroke-linecap: round;
		stroke-linejoin: round;
		fill: none !important;
	}
</style>
