// program that calculates number of moves required for a knight(Ghoda) in a chess
// game of dimention n*n to reach the destinated coordinate

function moves(n, startX, startY, endX, endY) {
	var x = [2, 2, -2, -2, 1, 1, -1, -1],
		y = [-1, 1, 1, -1, 2, -2, 2, -2];

	var queue = [],
		flag = 0;

	var visited = Array(n).fill().map(() => Array(n).fill(0));

	queue.push([startX, startY, 0]);
	visited[startX][startY] = 1;


	while(queue.length) { //console.log(queue);
		var arr = queue.shift();

		if(arr[0] == endX && arr[1] == endY) {
			flag = 1;
			return arr[2];
		}

		for(let i = 0; i < 8; i++) {
			var posX = arr[0] + x[i];
			var posY = arr[1] + y[i];

			if(isInside(posX, posY, n) && !visited[posX][posY]){
				visited[posX][posY] = 1;
				queue.push([posX, posY, arr[2] + 1]);
			}
		}
	}
	if(flag == 0)
		return -1;
}

function isInside(x, y, n) {
	if(x < n && y < n && x >= 0 && y >= 0)
		return true;
	else
		return false;
}

var dimention = 10,
	xStart = 0,
	yStart = 0,
	xEnd = 0,
	yEnd = 2;

var mov = moves(dimention, xStart, yStart, xEnd, yEnd);
console.log("Number of moves required from (" + xStart + "," + yStart +
 ") to (" + xEnd + "," + yEnd + ") is: " + mov);