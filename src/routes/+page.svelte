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
	<section class="flex flex-col bg-amber-200 px-8 py-32 items-center">
		<article class="max-w-[60ch] flex flex-col gap-4">
			
			
			
			<h3><span class="text-3xl bg-amber-300">Are you thinking of integrating with an LLM chatbot for your business?</span></h3>
			
			<img src="/chatbot.svg" />
<h4 class="font-bold my-4 text-right">Before the how - lets go over the what it can do:</h4>

<ul class="flex flex-col list-disc *:ml-4 *:pl-4 *:text-lg gap-2">
	<li>Respond using knowledge from your company data</li>
	<li>Get your customers to the right page</li>
	<li>Facilitate FAQ's better than any search</li>
	<li>Communicate with other internal services - such as filling out forms</li>
	<li>Retain chat history and provide data insights</li>
	<li>Open up new ways for clients to use your existing site</li>
</ul>

<h4 class="font-bold my-4 text-right">What about costs, security and privacy?</h4>

<p class="my-4"><span class="text-xl italic bg-amber-300">I am glad you asked - when done right - AI can feel useful and not invasive nor destructive.</span></p>

<ul class="flex flex-col list-disc *:ml-4 *:pl-4 *:text-lg gap-2">

	<li>Your data only, private to your base system - no uploads to OpenAI / Anthropic etc</li>
	<li>LLM's are cheaper than ever when you know which one to choose (more on that below)</li>
	<li>We use the LLM only to process the natural language by the customer and the language for the response - which is the token cost - The internal Agent on the host does its thing on the private server infrastructure, separate from any prying eyes</li>
</ul>

<aside class="flex flex-col gap-2 my-4">
<p>You see, you don't need a smart AI model to attempt to solve any of our problems or understand the works of Shakespear - all it needs to do (which all it does do, in fact) is figure out basic language. The real data output in terms of real world responses is YOUR data - which is on YOUR server. The dumb LLM just figures out how to connect it based on the clients request!</p>

<p>Google has single handedly been reducing models capacity, like an episode of Silicon Valley with <a href="https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/">TurboQuant</a> compression, in order to bring computation right down in order to run on a mobile device and still be effective. </p>
	
<p>This is the smoke and mirrors where the big Tech companies are misleading us - we dont need their trained models - all we need is a place to utilse language as an interface, and which runs at a fraction of the cost. </p>
</aside>
<p class="my-4"><span class="text-xl italic bg-amber-300">Yet, I digress; you can chat to me all about that IRL.</span></p>

<h4 class="font-bold my-4 text-right">So how do we engineer your chatbot?</h4>

<ul class="flex flex-col list-disc *:ml-4 *:pl-4 *:text-lg gap-2">
<li>Private server infrastructure hosting</li>
<li>Private Docs (owned by you)</li>
<li>Run a workflow automation platform that combines AI capabilities (via your Agent) with business process automation</li>
<li>Deploy your Agent - a configurable <span class="italic">'personality'</span> with rulesets that understand how to access your Docs.</li>
<li>Create a self contained chatbot web component that can be dropped into your existing website.</li>
</ul>
</article>
	</section>
	<!-- <section class="flex flex-col bg-amber-200 px-8 py-32">
		<div class="card grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-8">
			<FactsCard
				title="Local startups"
				description="Have you thought about"
				bullets={[
					'Google Business',
					'Nicer Email',
					'Your own cloud infra',
					'Shopify API',
					'Private LLM',
					'Automation with AI'
				]}
			></FactsCard>
			<FactsCard
				title="Keeping it personal?"
				description="Often, one page will do it"
				bullets={[
					'Use Video',
					'Tie all your socials together',
					'Your vibe, your website',
					'Fast | Simple | To the point',
					'EASY PEASY FORMS'
				]}
			></FactsCard>
			<FactsCard
				title="Wanting to talk tech?"
				description="Maybe it is already out there"
				bullets={['QR codes', 'Using AI', 'Self Hosting', 'IFTTT Automation', 'Chatbots']}
			></FactsCard>
		</div>
	</section> -->
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
			<p class="pt-16">
				Ps. to see any example works - look <a
					href="https://threejjjs.xyz"
					aria-label="example works">here</a
				> at what's been done by the team.
			</p>
		</div>
	</section>
</main>
<footer class="bg-amber-200 px-8 py-16">
	<div class="flex items-center justify-between gap-2">
		<Icon src="shapes" ctx="hand-1" size="5em" />
		<span class="">&copy; {new Date().getFullYear()} whatarewebuilding. All rights reserved.</span>
		<aside class="text-text-200 text-wash-300 flex flex-col justify-end text-right text-sm">
			<span>Built by humans</span>
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
