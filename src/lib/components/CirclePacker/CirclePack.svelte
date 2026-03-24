<script>
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import { generateCircles, setThemeColour } from './utils';
	import { onMount } from 'svelte';
	import Global from '$lib/stores/Global.svelte';
	import shapes from './shapes';
	let packer;
	let debug = false;
	let ratio = $state(0);
	let base = $state([]);
	let circles = $state([]);

	const useThemeColour = setThemeColour(['default', 'yellow', 'yellow', 'grey']);

	$effect(() => {
		ratio =
			Global.layout === 'LANDSCAPE'
				? innerWidth.current / innerHeight.current
				: innerHeight.current / innerWidth.current;
	});

	$effect(() => {
		if (!Global.isMobile) {
			base = generateCircles({
				orient: Global.layout,
				width: innerWidth.current,
				height: innerHeight.current,
				maxR: 80,
				minR: 60
			});
		}
	});

	$effect(() => {
		circles = base.map((circle) => {
			const ri = Math.floor(Math.random() * shapes.length);
			return {
				...circle,
				...shapes[ri],
				theme: useThemeColour()
			};
		});
	});
	onMount(() => {
		// only run once
		if (Global.isMobile) {
			base = generateCircles({
				orient: Global.layout,
				width: innerWidth.current,
				height: innerHeight.current,
				maxR: 80,
				minR: 60
			});
			circles = base.map((circle) => {
				const ri = Math.floor(Math.random() * shapes.length);
				return {
					...circle,
					...shapes[ri],
					theme: useThemeColour()
				};
			});
		}
	});
	function getScaleX(tile) {
		return Global.layout === 'LANDSCAPE'
			? tile.x - tile.radius * ratio
			: tile.x - tile.radius / ratio;
	}
	function getScale(tile) {
		let r = Global.layout === 'LANDSCAPE' ? Math.min(ratio, 1.7) : Math.max(ratio, 1.2);
		return Math.max((tile.radius / 252) * (r - 1), 0.08);
	}
</script>

<div class="h-[100dvh] overflow-hidden">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		bind:this={packer}
		viewBox={`0 0 ${innerWidth?.current || 0} ${innerHeight?.current || 0}`}
	>
		{#if circles.length}
			{#each circles as tile}
				{#if debug}
					<circle fill="transparent" stroke="red" cx={tile.x} cy={tile.y} r={tile.radius}></circle>
				{/if}
				{#if tile.show}
					<g
						class="target"
						data-colour={tile.theme}
						transform-origin="center center"
						transform={`translate(${getScaleX(tile)},${tile.y - tile.radius})`}
						width={`${tile.radius}px`}
						height={`${tile.radius}px`}
					>
						<!-- <g transform={`scale(${(tile.radius / 235) * (154 / 230)})`}> -->
						<g transform={`scale(${getScale(tile) || 0})`}>
							<g style={`rotate: ${Math.random() * 360}deg`} transform-origin="center center">
								<use href={tile.href}></use>
							</g>
						</g>
					</g>
				{/if}
			{/each}
		{/if}
	</svg>
</div>

<style>
	:global(.target path) {
		stroke: var(--color-black);
	}
	:global(.target[data-colour='blue']) {
		fill: cornflowerblue;
		/* fill: rgb(225, 181, 5); */
	}
	:global(.target[data-colour='red']) {
		fill: tomato;
		/* fill: rgb(203, 182, 63); */
	}
	:global(.target[data-colour='yellow']) {
		fill: rgb(255, 228, 78);
	}
	:global(.target[data-colour='default']) {
		fill: #e8e8e8cf;
	}
	:global(.target[data-colour='grey']) {
		fill: #adadadc5;
	}
</style>
