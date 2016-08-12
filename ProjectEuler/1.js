var multipleThreeFive = function(max){
	var total = 0;
    for(var i = 1; i < max; i++){
    	if(i % 3 === 0 || i % 5 === 0) total+=i;
    }
    return total
}

multipleThreeFive(1000)