// https://www.interviewcake.com/question/python/nth-fibonacci

function fib(n) {
	var counter = 2,
	    currentPosition = 0,
	    nextPosition = 1;
	if(n === 1) return currentPosition;
	if(n === 2) return nextPosition;

	while(counter < n) {
		var newNum = currentPosition + nextPosition;
		currentPosition = nextPosition;
		nextPosition = newNum;
		counter++;
	}
	return nextPosition;
}


console.log(fib(17));
