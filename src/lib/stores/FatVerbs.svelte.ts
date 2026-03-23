const FATVERBS = ['make', 'keep', 'create', 'build', 'ship'] as const;
type Verb = (typeof FATVERBS)[number];
class FatVerbStore {
	#current = $state<Verb | null>(null);
	#count = $state(0);

	constructor() {
		this.setNextVerb();
	}

	randomVerb() {
		let r = Math.floor(Math.random() * FATVERBS.length);
		return FATVERBS[r];
	}
	setNextVerb() {
		// this.#current = this.randomVerb();
		this.#count = this.#count < FATVERBS.length - 1 ? this.#count + 1 : 0;
		this.#current = FATVERBS[this.#count];
	}

	get current(): Verb | null {
		return this.#current;
	}
	get verbs() {
		return FATVERBS;
	}
}

export default new FatVerbStore();
