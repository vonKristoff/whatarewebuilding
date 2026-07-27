<script lang="ts">
	
</script>

<main>

	<section class="flex flex-col bg-amber-200 px-8 py-32 items-center">
		<article class="max-w-[60ch] flex flex-col gap-4">



			<h3><span class="text-3xl bg-amber-300">Are you thinking of integrating with an LLM chatbot for your business?</span></h3>

			<img src="/chatbot.svg" alt="llm integration diagram"/>
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
<a class="mt-16" href="/">Back to home page</a>
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
