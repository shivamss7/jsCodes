// prints whatever is enumerable like index in this case
function forIn(arr) {
    for (var i in arr) {
        process.stdout.write(i); // console.log with line breaks for each element
    }
}

// prints value of whatever is iterable like value of array in this case
function forOf(arr) {
	for(let i of arr) {
		console.log(i);
	}
}

var arr = [10,20,30,40,50];
var forin = forIn(arr);
console.log(); // prints a line break
var forof = forOf(arr);