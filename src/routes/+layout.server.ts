export async function load({ request }) {
	let ua = request.headers.get('user-agent');
	let isIOS = /iPad|iPhone|iPod/.test(ua);
	let isMobile = /Mobi|Android/i.test(ua);
	return {
		isIOS,
		isMobile
	};
}
