var sodoku = [
	["003", "020", "600"],
	["900", "305", "001"],
	["001", "806", "400"],
	["008", "102", "900"],
	["700", "000", "008"],
	["006", "708", "200"],
	["002", "609", "500"],
	["800", "203", "009"],
	["005", "010", "300"]
  ]

var getBlock = function(num){

	var indexMap = {
		1 : 1,
		2 : 2,
		3 : 3,
		4 : 1,
		5 : 2,
		6 : 3,
		7 : 1,
		8 : 2,
		9 : 3
	}
	var block = [];
	if(num <= 3){
		block.push(sodoku[0][indexMap[num]], sodoku[1][indexMap[num]], sodoku[2][indexMap[num]])
	}else if(num > 3 && num <= 6){
		block.push(sodoku[3][indexMap[num]], sodoku[4][indexMap[num]], sodoku[5][indexMap[num]])
	}else{
		block.push(sodoku[6][indexMap[num]], sodoku[7][indexMap[num]], sodoku[8][indexMap[num]])
	}
	return block

}

var getRow = function(num){
	var row = sodoku[num].join('');
	return row;
}

var getColumn = function(num){
	var nums = [];
	sodoku.forEach(function(row){
		var columnNum = row.join('')[num];
		nums.push(columnNum);
	});
	return nums
}

var block = getBlock(1);
var row = getRow(1);
var column = getColumn(1);

console.log(block, row, column)