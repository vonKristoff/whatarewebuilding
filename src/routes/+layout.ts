import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const baseMetaTags = Object.freeze({
		title: 'wahatarewebuilding | a web design company',
		titleTemplate: '%s | Meta Tags',
		description: 'Build it | Make it | Keep it | Send it LOCAL',
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_GB',
			title: 'Walthamstow! Whatarewebuilding?',
			description: 'Build it | Make it | Keep it | Send it LOCAL',
			siteName: 'Whatarewebuilding',
			images: [
				{
					url: 'https://threejjjs-cdn.s3.eu-west-2.amazonaws.com/whatarewebuilding/wawb.jpg',
					alt: 'Og Image Alt',
					width: 800,
					height: 600,
					secureUrl: 'https://threejjjs-cdn.s3.eu-west-2.amazonaws.com/whatarewebuilding/wawb.jpg',
					type: 'image/jpeg'
				}
			]
		}
	}) satisfies MetaTagsProps;

	return {
		baseMetaTags
	};
};
