function test(A) {
	var counter = 0, start = 0, end = 0, sum = 0, max = -1, point = 0, length = 0;
	A.push(-1);
	for(var i = 0; i < A.length; i++) {
		if(A[i] >= 0) {
			sum = sum + A[i];
			counter++;
		}
		else {
			if(max < sum) {
				max = sum;
				start = point;
				end = i - 1;
				length = counter;
			}
			else if(max == sum && counter > length) {
				start = point;
				end = i - 1;
				length = counter;
			}
			sum = 0;
			counter = 0;
			point = i + 1;
		}
	}

	return A.slice(start, end + 1);
}
var a = [ 137806862, -982906996, -511702305, -1937477084 ];
var b = [-1, -1, -1, -1, -1];
var c = [0, 0, -1, 0];
console.log(test(c));