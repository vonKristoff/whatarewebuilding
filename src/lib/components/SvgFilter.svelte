<script lang="ts">
	import animateAttribute from '$lib/actions/animateAttribute.svelte';
	interface Props {
		w: string;
		h?: string;
		colour?: string;
		src: string;
	}
	let { w, h = 'auto', colour = 'inherit', src }: Props = $props();
	let tick = $state(0);
</script>

<svg
	class={`${Date.now() + Math.round(Math.random() * (tick * 1000))}`}
	style={`fill: ${colour}; width: ${w}; height:${h};`}
	viewBox="0 0 100 50"
>
	<filter id="squiggly" width="200%" height="200%">
		<feTurbulence
			id={`${Math.round(Math.random() * Date.now())}`}
			use:animateAttribute={{
				target: 'baseFrequency',
				method: () => Math.random() * 0.05
			}}
			on:updated={() => tick++}
			baseFrequency="0.02"
			numOctaves="5"
			result="noise"
			seed="1"
			><animate
				attributeName="numOctaves"
				values="1;1"
				dur="1s"
				repeatCount="indefinite"
			/></feTurbulence
		>
		<feDisplacementMap
			use:animateAttribute={{
				target: 'scale',
				method: () => Math.ceil(Math.random() * 4)
			}}
			in="SourceGraphic"
			in2="noise"
			scale="6"
		/>
	</filter>
	<use href={`/sprites.svg#icon-${src}`} filter="url(#squiggly)"></use>
</svg>
