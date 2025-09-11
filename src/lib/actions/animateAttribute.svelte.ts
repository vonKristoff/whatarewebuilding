export default (node, props) => {
	let interval = null;
	function startInterval({ speed = 100, target, method }) {
		if (null !== interval) clearInterval(interval);
		interval = setInterval(() => {
			const val = method();
			node.setAttribute(target, val);
			node.dispatchEvent(new CustomEvent('updated', { detail: { value: val } }));
		}, speed);
	}
	startInterval(props);
	return {
		update(newProps) {
			console.log(newProps);
			startInterval(newProps);
		},
		testMethod() {
			return interval;
		},
		destroy() {
			if (null !== interval) clearInterval(interval);
			interval = null;
		}
	};
};
