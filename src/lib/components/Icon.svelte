<script lang="ts">
	interface Props {
		ctx?: string;
		size?: string;
		weight?: string;
		colour?: string;
		src?: string;
		stroke?: string;
	}
	const {
		ctx,
		weight = '2',
		size = '1em',
		colour = 'currentColor',
		src = 'sprites',
		stroke = 'none'
	}: Props = $props();
	let href = $state('');
	$effect(() => {
		href = `/${src}.svg#icon-${ctx}`;
	});
</script>

<svg
	width={`${size}`}
	height={`${size}`}
	fill={colour}
	stroke-width={weight}
	{stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<use {href}></use>
</svg>
