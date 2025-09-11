<script lang="ts">
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import FatVerbStore from '$lib/stores/FatVerbs.svelte';
	import Icon from '$lib/components/Icon.svelte';
	let scale = $state(1);
	$effect(() => {
		const interval = setInterval(() => FatVerbStore.setNextVerb(), 1500);
		return () => clearInterval(interval);
	});
	$effect(() => {
		if (innerWidth.current && innerHeight.current) {
			scale =
				innerWidth.current > innerHeight.current
					? (innerWidth.current * 2.5) / innerHeight.current
					: (innerHeight.current * 1.5) / innerWidth.current;
		}
	});
</script>

<div class="absolute grid h-screen w-screen place-content-center border-8 md:border-0">
	<div class="flex flex-col gap-8" style={`transform: scale(${scale || 0});`}>
		{#if FatVerbStore.current}
			<Icon ctx={`fat-${FatVerbStore.current}`} size="100%" />
		{/if}
	</div>
</div>
