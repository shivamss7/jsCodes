//given a 10 * N grid where N is number of columns where each column is filled with height
//stored in an array B, eg B = [5,4,3,2,1]. Also, there are number of guns stored in variable 
//num_guns and has particular structure containing 1. Start index 2. End Index 3. NUmber of 
//rounds. Now we need to fire the beam on the last row from starting index to ending index.
//Find minimum number of beams to clear all heights else return -1.

function initializeGrid(N) {
	return Array(10).fill().map(()=>Array(5).fill(0));
}

function formGrid(N, B, emptyGrid) {
	var emptyGrid = initializeGrid(N);
	var beam = 0;
	for(let j = 0; j < N; j++) {
		let i = 10 - 1;
		for(let k = 0; k < B[j]; k++, i--)
			emptyGrid[i][j] = 1;
	}
	return emptyGrid;
}

function check(grid) {
	//check wether each element in a grid is 0
	return grid.every( (value)=> value.every( (currentVal)=> currentVal == 0));
}

function beam(N, B, num_guns, guns) {
	
	var grid = formGrid(N, B),
		beam = 0;
	console.log("Given grid: \n");
	grid.forEach((x)=> console.log("\t" + x.join(" ")));

	for(let n = 0; n < num_guns; n++) {
		for(let r = 0; r < guns[n].rounds; r++) {
			for(let i = guns[n].start; i <= guns[n].end; i++){
				grid[9][i] = 0;
				if(B[i] > 0)
					B[i]--;
			} 
			grid = formGrid(N, B);
			beam++;
			console.log("\nGrid after beam " + beam + " is: \n ");
			grid.forEach((x)=> console.log("\t" + x.join(" ")));
			//chech grid for all zero values or check B array to have all 0 values
			if(/*check(grid)*/ B.every( x => x == 0))
				return beam;
		}
	}
	return -1;
}


function start() {
	var height = [5, 4, 3, 4, 2],
		n = 5,
		num_guns = 4;
		guns = [{rounds: 2, start: 0, end: 4},
				{rounds: 1, start: 1, end: 3},
				{rounds: 2, start: 0, end: 3},
				{rounds: 1, start: 0, end: 1}];

	return beam(n, height, num_guns, guns);
}

console.log(start());


