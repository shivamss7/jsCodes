// minimum steps in infinte grid
// given sequences of x and y coordinates in array A and B find number of mimimum steps to reach all points
// say you want to go from (0,0) to (1,2) so first step will be (1,1) then (1,2).
function minSteps(A, B) {
	if(A.length == 1 || B.length == 1)
		return 0;

	var x = A[0], y = B[0], steps = 0;
	for(i = 1; i < A.length; i++) {
		while(x != A[i] || y != B[i]) {
			if(x < A[i] && y < B[i]) {
				x+= 1; y+= 1;
			}
			else if(x > A[i] && y > B[i]) {
				x-= 1; y-= 1;
			}
			else if(x < A[i] && y > B[i]) {
				x+= 1; y-= 1;
			}
			else if(x > A[i] && y < B[i]) {
				x-= 1; y+= 1;
			}
			else if(x < A[i])
				x+= 1;
			else if(x > A[i])
				x-= 1;
			else if(y < B[i])
				y+= 1;
			else if(y > B[i])
				y-= 1;
			steps++; 
		}
	}
	return steps;
}

//Note that what only matters is X = abs(A-C) and Y = abs(B-D).
//In other words, the total number of steps would correspond to max(X, Y).
function minSteps2(A, B) {
	if(A.length == 1 || B.length == 1)
		return 0;

	var x = A[0], y = B[0], steps = 0;
	for(var i = 1; i < A.length; i++) {
		steps = steps + Math.max(Math.abs(A[i] - x), Math.abs(B[i] -y));
		x = A[i], y = B[i];
	}
	return steps;
}

A = [ 4, 8, 10];
B = [ 4, -15, 20];
console.log('Number of steps: ' + minSteps(A, B));