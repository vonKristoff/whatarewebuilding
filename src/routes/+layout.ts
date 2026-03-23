import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: 'wahatarewebuilding | a web design company',
		titleTemplate: '%s | Meta Tags',
		description: 'Build it | Make it | Keep it | Send it LOCAL ...Design and Development for Business and Personal projects. Lets do websites and tech infrastructure together.',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_GB',
			title: 'Walthamstow! Whatarewebuilding?',
			description: 'Build it | Make it | Keep it | Send it LOCAL ...Design and Development for Business and Personal projects. Lets do websites and tech infrastructure together.',
			siteName: 'Whatarewebuilding',
			images: [
				{
					url: 'https://threejjjs-cdn.s3.eu-west-2.amazonaws.com/whatarewebuilding/wawb-wide.jpg',
					alt: 'Og Image Alt',
					width: 744,
					height: 386,
					secureUrl: 'https://threejjjs-cdn.s3.eu-west-2.amazonaws.com/whatarewebuilding/wawb-wide.jpg',
					type: 'image/jpeg'
				}
			]
		}
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags
	};
};
