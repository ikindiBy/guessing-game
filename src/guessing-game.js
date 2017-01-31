class GuessingGame {
  constructor(_number) {
	this.number = _number;
	this.min = 0;
	this.max = 0;
	this.win = false;
	this.guessNumb = 0;
    }

    setRange(min, max) {
		this.min = min;
		this.max = max;
		if (this.number != this.min && this.number != this.max){
		this.guessNumb = this.guess();
		this.lower();
		this.greater();
		}
		else console.log(" Number is " + this.max + " or "+ this.min);
    }

    guess() {
    		var searchNum = Math.ceil((this.max - this.min)/2);
    		console.log(" Searching number is?:  " + (searchNum + this.min));
    	return searchNum + this.min;
    }

    lower() {
    		console.log(" start __L");
    		var pointMax = this.guessNumb;
    	
		if(pointMax == this.number && !this.win){
		 console.log("You've guessed! __L " + pointMax );
		 this.win = true;
		}
		 else if (this.number < pointMax){
		 	this.max = pointMax;
			this.setRange(this.min, this.max );
		}
    }

    greater() {
    	console.log(" start __G");
		var pointMin = this.guessNumb;
    	
		if(pointMin == this.number && !this.win){
		 console.log("You've guessed! __G " +pointMin );
		 this.win = true;
		}
		 else if (this.number > pointMin){
		 	this.min = pointMin;
			this.setRange(this.min, this.max);
		}
    }
}

module.exports = GuessingGame;
