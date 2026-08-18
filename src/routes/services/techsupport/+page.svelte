<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import ChatGroup from './ChatGroup.svelte';

	const EMAIL = 'jc@techsup.uk';
	const PHONE = '07773800950';
	const issues = [
		'Complicated forms',
		'Email apps',
		'Stuck in Portals',
		'Sign ups',
		'Word',
		'Google Docs',
		'Printers',
		'USA or B',
		'Wifi issues',
		'WPS?',
		'Home network',
	];
	let copy = $state(false);
	async function copyToClipboard() {
		copy = true;
		await navigator.clipboard.writeText(EMAIL);
		setTimeout(() => (copy = false), 3000);
	}

	type Side = 'left' | 'right';
	interface GroupMessage {
		handle: string;
		bg: string;
		side?: Side;
		text: string;
	}
	interface Group {
		level: number;
		title: string;
		messages: GroupMessage[];
	}

	const groups: Group[] = [
		{
			level: 2,
			title: 'FRUSTRATED!? CONFUSED? AT WITS END?',
			messages: [
				{ handle: '@rainy-monday', bg: 'bg-rose-200!', text: 'The internets not working.' },
				{ handle: '@paper-jams', bg: 'bg-red-200!', side: 'right', text: "Why isn't my printer, printing?" },
				{ handle: '@who-am-i-now', bg: 'bg-indigo-200!', text: 'So my Apple ID is my Gmail, but the password isnt the Gmail password?!' },
				{ handle: '@up-in-the-sky', bg: 'bg-sky-200!', side: 'right', text: "What's this cloud? What happened to the Internet!?" },
				{ handle: '@old-soul', bg: 'bg-teal-200!', text: 'Why do I use Safari to Google?' },
				{ handle: '@snap-happy', bg: 'bg-amber-200!', side: 'right', text: 'What do you mean I cannot send my photo because it is too big.' },
				{ handle: '@everything-moves', bg: 'bg-purple-200!', text: "My email app is broken and has changed and I can't get it back." }
			]
		},
		{
			level: 2,
			title: 'NORTON ANTIVIRUS IS KILLING ME',
			messages: [
				{ handle: '@vanishing-act', bg: 'bg-red-200!', side: 'right', text: 'I opened the attachment and now I cannot find it.' },
				{ handle: '@hoarder-heart', bg: 'bg-fuchsia-200!', text: 'Why is EVERYTHING on my desktop and why cannot I find anything?' },
				{ handle: '@car-park-drama', bg: 'bg-lime-200!', side: 'right', text: "Why doesn't the Mipermit parking work?" }
			]
		},
		{
			level: 3,
			title: 'Feeling PASSWORDLESS?',
			messages: [
				{ handle: '@locked-out-again', bg: 'bg-cyan-200!', text: "I'm now logged out." },
				{ handle: '@can-i-write-it-down', bg: 'bg-blue-200!', side: 'right', text: 'Do i really need a secure password - i cannot remember anything. What are special characters anyway.' },
				{ handle: '@one-more-account', bg: 'bg-orange-200!', text: "Please don't make me sign up to ANOTHER account!" }
			]
		},
		{
			level: 3,
			title: 'Is it ... YOU?',
			messages: [
				{ handle: '@butter-toast', bg: 'bg-yellow-200!', side: 'right', text: 'Do I have to swipe butter to the left on my toast if I enjoy it?' },
				{ handle: '@beyond-the-grave', bg: 'bg-slate-200!', text: 'Is this a real message from gran or a scam? - She died 8 years ago... it that what people mean by being Ghosted?' },
				{ handle: '@digital-pockets', bg: 'bg-emerald-200!', side: 'right', text: 'Why are they telling me to empty my CASH? they surely mean my wallet - but they insist my browser has it - I swear I use biometrics on my Banking app.' },
				{ handle: '@pet-detective', bg: 'bg-violet-200!', text: 'Now they ask whether my first pet went to the same school as my brother.' },
				{ handle: '@end-of-an-era', bg: 'bg-sky-200!', side: 'right', text: 'My hotmail email is going to be SHUTDOWN - what do I do?' }
			]
		}
	];
</script>

<main>
	<section class="flex flex-col bg-amber-200 px-8 py-32 items-center">
		<article class="w-full max-w-3xl flex flex-col gap-4 ">
			<header class="flex flex-col gap-4 mb-12">
				<h1 class="self-center max-w-[60ch]"><span class="text-3xl md:text-5xl font-tertiary">Fix all kinds of IT problems</span></h1>
				<!-- <p class="self-center text-xl max-w-[60ch] my-8">Message and get a quote – hourly rates available</p> -->
				<p class="self-center text-xl max-w-[60ch] my-8">We are all fed up with tech, and it's simply getting in the way of how simple things used to be.</p>
				<div class="flex flex-wrap gap-2 mb-8">
					{#each issues as issue (issue)}
						<span class="rounded-full border-2 border-black bg-amber-300 px-4 py-1 font-secondary text-sm">
							{issue}
						</span>
					{/each}
				</div>
				<section class="self-center max-w-[60ch] flex flex-col gap-4">

				<p class="">
					<strong>I can help you</strong> sort it out, or explain it, or
					help you organise this nonsense.
				</p>
				<p class="self-center max-w-[60ch]">
					Maybe it just needs fixing and I know (most of the time)
					where to whack it in order for it to start working again. Sometimes it just takes someone
					being patient and showing you one thing. <strong>No one else in your family is going to listen</strong>.
				</p>
				</section>


			</header>

			{#each groups as group, i (group.title)}
				<ChatGroup title={group.title} level={group.level} messages={group.messages} />
			{/each}

			<!-- <p class="self-center max-w-[60ch] bg-amber-300 border-l-2 p-4 text-xl">Actually, for heavens sake, just someone do it before I lose my mind marbles.</p> -->

			<section class="self-center max-w-[60ch] flex flex-col gap-4 my-12">
			<h2 class="font-tertiary font-bold my-4"><span class="text-3xl ">Sounds like you could do with some support, some TECHSUPPORT!</span></h2>

			<p class="">What's the proof? I have to do this for everyone in my family. I also happen to be a software engineer of 20 years.</p>
			<p class="">I began my career making systems for people to enter passwords.</p>
			<p class="">I am ending my career having to remember those passwords for them instead.</p>
			<p class="">I too have gone mad. Together we can fix it. It's out last chance anyway before AI takes over. (Actually, that isn't going to happen because it is a massive lie that it is actually intelligent).</p>
			<h3 class=" font-tertiary font-bold my-4"><span class="text-2xl bg-amber-300">I also can help with AI | Homelabs | Decentralisation (not paying the man) | all kinds of tech related hubris.</span></h3>
			<p class=" text-xl italic ">Happy to talk about that over a cuppa tea as well.</p>
				<p data-chat class="self-center max-w-[60ch] bg-amber-300 border-l-2 p-4">I'm a local dad, and my name is <strong>JC</strong>.</p>
			</section>
			<div class="flex flex-col gap-4 mt-8">
				<p class="self-center text-xl max-w-[60ch]">Anyway - really good hourly rates starting at <strong>£25 per hour</strong>.</p>
				<p class="self-center max-w-[60ch]">Don't drive yourself round the bend - get a professional to sort it out.</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href={`https://wa.me/${PHONE.replace(/^0/, '44')}`}
						class="flex flex-1 items-center justify-center gap-2 rounded-lg border-3 bg-amber-300 px-8 py-2 text-center font-secondary text-xl"
					>
						<Icon ctx="phone" size="1.4em" stroke="black" colour="transparent" />
						DM me on <strong>WhatsApp</strong>
					</a>
					<div class="relative flex flex-1 flex-col">
						{#if copy}
							<div
								data-message
								class="flex w-full items-center justify-center gap-4 rounded-md border-2 bg-amber-300 px-4 py-2"
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
							class="flex w-full items-center justify-center rounded-lg border-3 bg-amber-300 px-8 py-2 text-xl hover:bg-amber-500"
						>
							Email me at <strong class="ml-2">{EMAIL}</strong>
						</button>
					</div>
				</div>
			</div>
		</article>
		<a class="mt-16 underline" href="/">Back to home page</a>
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
</style>
