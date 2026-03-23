<script lang="ts">
	import CirclePack from '$lib/components/CirclePacker';
	import Browser from '$lib/components/Browser.svelte';
	import HeroMessage from '$lib/components/HeroMessage.svelte';
	import FatVerbCycle from '$lib/components/FatVerbCycle.svelte';
	import FactsCard from '$lib/components/FactsCard.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const EMAIL = 'hello@whatarewebuilding.xyz';
	let copy = $state(false);
	async function copyToClipboard() {
		copy = true;
		await navigator.clipboard.writeText(EMAIL);
		setTimeout(() => (copy = false), 3000);
	}
</script>

<main>
	<FatVerbCycle />
	<CirclePack />
	<Browser />
	<section class="grid place-content-center gap-4 bg-amber-300 px-8 py-32">
		<h3 class="text-4xl md:text-6xl">💸 "Squarespace was cheap, right."</h3>
		<div class="flex items-center justify-end gap-4">
			<span class="w-8 rounded-md border-2"></span>
			<p class="text-2xl">
				do <span class="italic">you</span> remember how many of <span class="italic">your</span>
				<strong>hours</strong> went into it 😬
			</p>
		</div>
	</section>
	<section class="flex flex-col bg-amber-200 px-8 py-32">
		<div class="card grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
			<FactsCard
				title="Local startups"
				description="Have you thought about"
				bullets={['Google Business', 'Nicer Email', 'Your own cloud', 'Better messaging apps']}
			></FactsCard>
			<FactsCard
				title="Keeping it personal?"
				description="Often, one page will do it"
				bullets={[
					'Use Video',
					'Be proud of your message',
					'Your vibe, your website',
					'Fast | Simple | To the point'
				]}
			></FactsCard>
			<FactsCard
				title="Wanting to talk tech?"
				description="Maybe it is already out there"
				bullets={['QR codes', 'Using AI', 'Self Hosting', 'IFTTT Automation']}
			></FactsCard>
		</div>
	</section>
	<section class=" grid place-content-center gap-8 bg-amber-300 px-8 py-32">
		<div class="flex flex-col gap-4 font-tertiary text-6xl">
			<span>KEEP IT LOCAL</span>
			<span>STOP THE VALLEY</span>
			<span>EMBRACE THE MARSHES</span>
		</div>
		<p class="text-2xl">Let's share the economy and make it together</p>
		<div class="relative">
			<span>Want to talk?</span>
			<span>Get in touch 👀</span>
			{#if copy}
				<div
					data-message
					class="flex w-full items-center justify-center gap-4 rounded-md border-2 bg-amber-200 px-4 py-2"
				>
					<Icon ctx="clipboard" size="1.5em" stroke="black" colour="transparent" />
					<span>Email copied to clipboard</span>
					<span class="text-emerald-700">✓</span>
				</div>
			{/if}
			<button
				class:disable={copy}
				aria-label="copy email to clipboard"
				onclick={copyToClipboard}
				class="flex w-full items-center justify-center rounded-md border-2 bg-amber-200 px-4 py-2 hover:bg-amber-500"
			>
				<strong>hello﹫whatarewebuilding.xyz</strong>
			</button>
			<div class="text-right font-tertiary">
				<span>Let's build websites!</span>
			</div>
		</div>
	</section>
</main>
<footer class="bg-amber-200 px-8 py-16">
	<div class="flex items-center justify-between gap-2">
		<Icon src="shapes" ctx="hand-1" size="5em" />
		<span class="">&copy; {new Date().getFullYear()} whatarewebuilding. All rights reserved.</span>
		<aside class="text-text-200 text-wash-300 flex flex-col justify-end text-right text-sm">
			<span>Built by</span>
			<a href="https://threejjjs.xyz">
				<h5 class="m-0 text-right font-tertiary text-xl md:text-3xl">
					three<span class="opacity-55">jjj</span>s
					<br />
				</h5>
			</a>
			<span class="text-xs">Interactive Tech</span>
		</aside>
		<!-- <p>
			built by
			<a aria-label="three jays interactive tech" href="https://threejjjs.xyz">threejjjs</a>
		</p> -->
	</div>
</footer>

<style>
	main {
		width: 100%;
		overflow-x: hidden;
	}
	a {
		text-decoration: underline;
	}
	button {
		transition: all 0.3s;
		cursor: pointer;
		&.disable {
			opacity: 0;
		}
	}
	:global([data-message]) {
		transition: all 0.3s;
		position: absolute;
		transform: translateY(-2em);
		@starting-style {
			transform: translateY(0);
		}
	}
</style>
