export function setThemeColour(cols = ['default']) {
	const size = cols.length;
	return () => {
		return size !== 1 ? cols[Math.floor(Math.random() * size)] : 'default';
	};
}
export function generateCircles({ orient, width, height, maxR = 40, minR = 20, spacing = 4 }) {
	let circles = [];

	const minRadius = minR;
	const maxRadius = maxR;
	const minSpacing = spacing; // Minimum spacing between circles

	// Helper function to check if a circle placement is valid
	const isValidPlacement = (x, y, radius) => {
		// Check boundaries
		if (x - radius < 0 || x + radius > width || y - radius < 0 || y + radius > height) {
			return false;
		}

		// Check overlap with existing circles
		for (let circle of circles) {
			const distance = Math.sqrt((x - circle.x) ** 2 + (y - circle.y) ** 2);
			const minDistance = radius + circle.radius + minSpacing;
			if (distance < minDistance) {
				return false;
			}
		}
		return true;
	};

	// Start with larger circles and work down to smaller ones
	const radiusSteps = [
		{ min: 40, max: maxRadius, attempts: 1 },
		{ min: 40, max: maxRadius, attempts: 100 },
		{ min: 25, max: 45, attempts: 300 },
		{ min: 15, max: 30, attempts: 500 },
		{ min: minRadius, max: 20, attempts: 3000 }
	];

	for (let step of radiusSteps) {
		let stepAttempts = 0;

		// ensure draw empty center
		if (step.attempts === 1) {
			let radius = orient === 'LANDSCAPE' ? width : height;
			circles.push({
				x: width / 2,
				y: height / 2,
				radius: radius / 4,
				show: false
			});
		}

		while (stepAttempts < step.attempts) {
			const radius = Math.random() * (step.max - step.min) + step.min;
			const x = Math.random() * (width - radius * 2) + radius;
			const y = Math.random() * (height - radius * 2) + radius;

			if (isValidPlacement(x, y, radius)) {
				circles.push({
					x: x,
					y: y,
					radius: radius,
					show: true
				});
			}
			stepAttempts++;
		}
	}
	return circles;
}
