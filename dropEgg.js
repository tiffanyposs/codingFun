// https://www.interviewcake.com/question/python/two-egg-problem
function dropEgg() {
	var floors = 100;
	var breakFloor = Math.ceil(Math.random()*100);

	var breakLevel = 0;
    for(var i = 10; i <= floors; i+=10) {
    	if(i === breakFloor) {
    		return i;
    	}
    	else if(i > breakFloor) {
    		breakLevel = i - 10;
    		i = floors+1;
    	}
    }

    for(var x = breakLevel; x <= floors; x+=2) {
    	if(x === breakFloor) {
    		return x;
    	}
    	else if(x > breakFloor) {
    		return (x-1)
    	}
    }
}

dropEgg();

