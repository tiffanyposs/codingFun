// https://www.interviewcake.com/question/python/inflight-entertainment

function flightTime(flightLength, movieLengths) {
	var exactTime = false;
	for(var i = 0; i < movieLengths.length; i++) {
		for(var x = i+1; x < movieLengths.length; x++) {
           if(movieLengths[i] + movieLengths[x] === flightLength) exactTime = true;
	    }
	}
	return exactTime;
}


var movieTimes = [103, 200, 106, 203, 107, 120, 123, 210, 104, 141, 181, 201];

var flightDuration = 400;


console.log(flightTime(flightDuration, movieTimes));