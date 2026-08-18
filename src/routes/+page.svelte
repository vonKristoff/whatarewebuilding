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
	<section class="flex flex-col bg-amber-200 px-8 py-32 gap-16">
		<header class="flex flex-col items-center gap-4">
			<h3 class="text-4xl">🔥 Been on the Trailblazers programme?</h3>
			<p class="text-2xl">You have a website, or you may not even know where to start</p>
			<p>What's next - does any of the following fit your feeling?</p>
		</header>
		<div class="card grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
			<FactsCard
				title="Starting from scratch?"
				description="No idea what to do next"
				cta={{url:"/trailblazers/start-here", label:"Help me make a plan"}}
			></FactsCard>
			<FactsCard
				title="You have a site, but..."
				description="How do I get upload it / capture customers?"
				cta={{url:"/trailblazers/going-live", label:"Get me live!"}}
			></FactsCard>
			<FactsCard
				title="Want to talk about what's possible?"
				description="Do you want to take it further - like take payments..."
				cta={{url:"/trailblazers/consultation", label:"Let's explore the options"}}
			></FactsCard>
		</div>
	</section>
	<section class="flex flex-col md:flex-row bg-amber-300 px-8 py-32 items-center justify-around gap-4">
	<div class="max-w-2xl flex flex-col gap-12">
        <div class="flex flex-col gap-4">
           	<div class="flex flex-row gap-4 text-4xl min-w-0 flex-1">
          		<span class="flex-0">🛠️</span>
          		<p class="font-tertiary text-4xl flex-1 min-w-0 wrap-break-word">Do you need general Tech Support at home - fixing any IT related problem?</p>
           	</div>
           	<a href="/services/techsupport" aria-label="Read more about tech support" class="self-end text-center rounded-lg border-3 px-8 italic py-2 bg-amber-200 flex-0 whitespace-nowrap w-fit text-base md:text-inherit">Read more</a>
        </div>
        <div class="flex flex-col gap-4">
           	<div class="flex flex-row gap-4 text-4xl min-w-0 flex-1">
          		<span class="flex-0">🤖</span>
          		<p class="font-tertiary text-4xl flex-1 min-w-0 wrap-break-word">Want to know more about what integrating an AI Chatbot into your site?</p>
           	</div>
           	<a href="/services/chatbot" aria-label="Read more about AI chatbot integration" class="self-end text-center rounded-lg border-3 px-8 italic py-2 bg-amber-200 flex-0 whitespace-nowrap w-fit text-base md:text-inherit">Read more</a>
    	</div>
	</div>
</section>
	<section class="grid place-content-center gap-8 bg-amber-400 px-8 py-32">
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
			<p class="pt-16">
				Ps. to see any example works - look <a
					href="https://threejjjs.xyz"
					aria-label="example works">here</a
				> at what's been done by the team.
			</p>
		</div>
	</section>
</main>

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
	:global(h4) {
		background: var(--color-amber-100);
		color: var(--col-black);
		padding: 0.625rem 1rem;
		border-radius: 1.125rem;
		border-bottom-right-radius: 0.25rem;
		display: inline-block;
		position: relative;
		max-width: 80%;
		margin-left: auto;
		margin-right: 0;
		border-bottom-right-radius: 0;
		border: 0.125rem solid var(--col-black);

	}
</style>
