class GuessingGame {
    constructor() {
	   this.min = 0;
	   this.max = 0;
    }

    setRange(min, max) {
		this.min = min;
		this.max = max;
    }

    guess() {
    	let searchNum = Math.ceil((this.max - this.min)/2);
    	return searchNum + this.min;
    }

    lower() {
		this.max = this.guess();
		this.setRange(this.min, this.max );
    }

    greater() {
		this.min =  this.guess();
		this.setRange(this.min, this.max);
    }
}

module.exports = GuessingGame;
