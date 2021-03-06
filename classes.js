class Materializer {
	target
	activated = false
	
	constructor(name) {
		this.target = name
	}

	activate() {
		this.activated = true	
	}

	materialize() {
		if (this.activated) {
			return this.target
		} else {
			return undefined
		}
	}
}

