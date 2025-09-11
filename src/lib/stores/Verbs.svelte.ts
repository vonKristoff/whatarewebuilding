interface Verb {
	val: string;
	w: string;
}
const VERBS = [
	{ val: 'build', w: '13em' },
	{ val: 'send', w: '13em' },
	{ val: 'make', w: '13em' }
];

class VerbStore {
	#current = $state<Verb | null>(null);

	constructor() {
		this.setNextVerb();
	}

	randomVerb() {
		let r = Math.floor(Math.random() * VERBS.length);
		return VERBS[r];
	}
	setNextVerb() {
		this.#current = this.randomVerb();
	}

	get current(): Verb | null {
		return this.#current;
	}
}

export default new VerbStore();
