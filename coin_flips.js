function getRandomInt(min, max) {
	// Return a random integer between min (included) and max (excluded)
	return Math.floor(Math.random() * (max - min)) + min;
}

function average(group){
	// Return the average of an array of numbers.
	var sum = group.reduce(function(a, b){ return a + b; });
	var avg = sum / group.length;
	return avg;
}

function attempt_sequence(series_length){

	// Simulate a series of coin flips. The number of flips in the series is given by series_length.
	// First coin flip must be heads (0), second must be tails (1) and so forth.
	// If a flip is out of sequence, the series must start over (the last coin flip does not count as the first flip in a new series).
	// Return the total number of flips it took to complete a successful series.

	var position = 0; // Where we are in the sequence (0-indexed)
	var count = 0; // Total number of coin flips simulated
	var flip; // Current flip result (heads or tails)

	for(var i=0; true; i++){ // Continue flipping coints as long as it takes

		flip = getRandomInt(0,2); // Perform a coin flip.
		count++;

		if(flip%2!==position%2){ // Parity of the flip does not match where we are in the sequence--we must start over
			position = 0;
		}else{ // So far so good: continue
			position++;
		}

		if(position===series_length){ // We've reached the end of the series successfully.
			return count;
		}
	}
}

var attempts = [];

// Simulate many attempts to approximate the number of flips in the average attempt.
for(var i = 0; i<4000000; i++){
	attempts.push(attempt_sequence(10));
}

// Show the average number of coin flips across all simulated attempts
console.log(average(attempts));