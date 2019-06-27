// print anti diagonals of an n * n matrix
//eg: [ [1,2],  => [ [1], [2,3], [4] ]
//      [3,4] ]     
function test(A) {
	var array = [];
	for(var i = 0; i < A.length; i++) {
		for(var j = 0; j < A.length; j++) {
			if(array[i+j])
				array[i+j].push(A[i][j]);
			else
				array.push([A[i][j]]);
		}
	}	
	return array;
}

var arr = [
  			[1, 2, 3],
  			[4, 5, 6],
  			[7, 8, 9],
		];

var arr2 = [
			[1,2],
			[3,4]
		];

console.log(test(arr));
