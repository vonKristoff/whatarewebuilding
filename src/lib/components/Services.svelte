	<script>
        import FactsCard from "./FactsCard.svelte";
    </script>
    <section class="flex flex-col bg-amber-200 px-8 py-32">
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
	</section>