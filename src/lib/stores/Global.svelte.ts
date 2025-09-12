import { innerWidth, innerHeight } from 'svelte/reactivity/window';
class Global {
	#isMobile: boolean;
	#layout: 'LANDSCAPE' | 'PORTRAIT';
	#maxLength: number;
	constructor() {
		this.#isMobile = true;
		this.#layout = $derived(innerWidth?.current >= innerHeight.current ? 'LANDSCAPE' : 'PORTRAIT');
		this.#maxLength = $derived(
			this.layout === 'LANDSCAPE' ? innerHeight.current || 0 : innerWidth?.current || 0
		);
	}
	get layout() {
		return this.#layout;
	}
	get maxDimension() {
		return this.#maxLength;
	}
	set isMobile(v: boolean) {
		this.#isMobile = v;
	}
	get isMobile() {
		return this.#isMobile;
	}
}

export default new Global();
