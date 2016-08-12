var isPrime = function(num){
	if(num % 2 === 0 && num !== 2) return false
	for(var i = 2; i < Math.floor(num/2); i++){
		if(num % i === 0){
			return false
		}
	}
	return true
}

var number = isPrime(2);
console.log(number);
