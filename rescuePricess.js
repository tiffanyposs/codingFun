// https://www.hackerrank.com/challenges/saveprincess

var grid = ["p", "-", "-",  "-", "m", "-", "-", "-", "-"];
var gridSize = 3;

function displayPathtoPrincess(dimension, grid) {
	var indexOfPrincess = grid.indexOf("p"),
		indexOfMe = grid.indexOf("m"),
	    hDirection = (indexOfPrincess % dimension === 0) ? "LEFT" : "RIGHT", 
	    vDirection = (indexOfPrincess < indexOfMe) ? "UP" : "DOWN",
	    moves = Math.floor(dimension / 2);

	for(var j = 0; j < moves; j++) {
		console.log(vDirection);
	}
	for(var i = 0; i < moves; i++) {
		console.log(hDirection);
	}

}

displayPathtoPrincess(gridSize, grid);

