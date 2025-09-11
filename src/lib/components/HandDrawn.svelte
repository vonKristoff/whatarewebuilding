<script>
	import { innerWidth, innerHeight } from 'svelte/reactivity/window';
	import SvgFilter from '$lib/components/SvgFilter.svelte';
	import VerbStore from '$lib/stores/Verbs.svelte';
	let scale = $state(1);
	$effect(() => {
		const interval = setInterval(() => VerbStore.setNextVerb(), 1500);
		return () => clearInterval(interval);
	});
	$effect(() => {
		scale = (innerWidth.current * 2.5) / innerHeight.current;
	});
</script>

<div class="flex flex-col gap-8" style={`transform: scale(${scale});`}>
	<SvgFilter src="lets" w="12em" colour="cornflowerblue" />
	<div class="flex">
		<div class="relative">
			<div class="absolute top-[-3em] left-[-7em]">
				<SvgFilter src="blink" w="25em" colour="yellow" />
			</div>
			<SvgFilter
				src={VerbStore?.current?.val || ''}
				w={VerbStore?.current?.w || '13em'}
				colour="tomato"
			/>
		</div>
		<SvgFilter src="it" w="13em" colour="cornflowerblue" />
	</div>
	<SvgFilter src="local" w="14em" colour="cornflowerblue" />
</div>
