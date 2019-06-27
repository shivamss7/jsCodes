// compares first two numbers here a = 30 & b = 50 and compares them
// if value returned is -ve then swap else no swapping
function compare(a, b) {
	console.log(a, b);
	return a - b;
}

var arr = [50, 30, 2, 67, 89];
arr = arr.sort(compare);
console.log(arr);