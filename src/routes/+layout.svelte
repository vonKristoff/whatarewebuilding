<script lang="ts">
	import '../app.css';
	// import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import Global from '$lib/stores/Global.svelte';
	import { MetaTags, deepMerge } from 'svelte-meta-tags';
	let { data, children } = $props();
	// let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));
	Global.isMobile = data.isMobile;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<MetaTags {...data.baseMetaTags} />

{@render children?.()}
