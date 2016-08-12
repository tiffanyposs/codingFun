function test(x1, v1, x2, v2) {

	if(x1 > 10000 || x1 > 10000) return "NO";
	if(x1 === x2) return "YES";

	var step1 = x1 + v1;
	var step2 = x2 + v2;

	return test(step1, v1, step2, v2);

}

// console.log(test(0, 3, 4, 2));



// function test2(x1, v1, x2, v2) {

// 	while(x1 <= 10000 || x2 <= 10000) {
// 		if(x1 === x2) return "YES";
// 		x1+=v1;
// 		x2+=v2;
// 	}
// 	return "NO";

// }


function test2(x1, v1, x2, v2) {

	while(x1 <= 10000 || x2 <= 10000) {
		if(x1 === x2) {
			console.log("YES");
			break;
		}
		x1+=v1;
		x2+=v2;
	}
	console.log("NO");

}

console.log(test2(0, 3, 4, 2))