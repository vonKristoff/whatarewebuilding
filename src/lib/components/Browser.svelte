<script lang="ts">
	import Icon from './Icon.svelte';
	import TypeWriter from './TypeWriter.svelte';
	const products = [
		'Your Portfolio',
		'A Business landing page',
		'Web payments',
		'Your Startup',
		'A private server',
		'Shared documents',
		'Video streaming',
		'Automation with other services',
		'Chatbots',
		'Shopify integration',
		'Automation with AI',
		'Controlling everything from a spreadsheet'
	];
</script>

<div class="grid h-screen w-screen place-content-center gap-8 bg-amber-200 px-8 md:gap-24">
	<div class="heading opacity-50">
		<div class="flex flex-col items-center justify-center text-lg md:flex-row">
			<Icon src="shapes" ctx="pigeon" size="2em" />
			<span>your local <strong>Web Development</strong> service says</span>
		</div>
	</div>
	<div class="browser-wrap md:auto min-w-full rounded-2xl border-4 bg-amber-300">
		<div class="toolbar flex items-center justify-between gap-4 px-8 py-4">
			<div class="dots flex gap-2">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
			<div
				class="flex max-w-fit justify-between gap-4 overflow-hidden rounded-md border-4 bg-amber-200 p-2 md:gap-12 md:px-4"
			>
				<div class="hidden sm:block">
					<Icon ctx="search" size="1.5em" colour="none" stroke="black" />
				</div>
				<div class="flex items-center gap-2">
					<span class="hidden text-sm md:block">https://</span>
					<span class="font-bold">walthamstow.whatarewebuilding.xyz</span>
				</div>
				<span class="hidden md:block"></span>
			</div>
			<span class="hidden md:block"></span>
		</div>
		<div class="content grid h-full place-content-center px-8">
			<div class="flex flex-col items-center gap-12">
				<div class="op flex flex-col items-center">
					<h3 class="font-secondary text-4xl font-bold sm:text-5xl md:text-6xl">Walthamstow</h3>
					<p class="font-secondary text-lg italic sm:text-xl md:text-3xl">
						What are we building today?
					</p>
				</div>
				<span class="font-tertiary text-3xl sm:text-4xl md:text-6xl">
					<TypeWriter texts={products} />
				</span>
			</div>
		</div>
	</div>
</div>

<style>
	.dot {
		width: 1em;
		height: 1em;
		background-color: black;
		border-radius: 50%;
	}
	.browser-wrap {
		height: min-content;
		min-width: 70vw;
		width: 100%;
		.content {
			min-height: 50vh;
		}
	}
	.use-gradient {
		background: linear-gradient(rgba(229, 233, 240, 50%), #ffd230) no-repeat;
	}
</style>
