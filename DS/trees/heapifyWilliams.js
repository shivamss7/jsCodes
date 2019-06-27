// min heap
function heapifyMin(arr, i) {
	if(i > 0) {
		var child = i,
		parent = Number.parseInt((i - 1)/2);
		//console.log(parent, i);
		if(arr[child] < arr[parent]) {
			let temp = arr[child];
			arr[child] = arr[parent];
			arr[parent] = temp;
			heapifyMin(arr, parent);
		}
	}
}

//max heap
function heapifyMax(arr, i) {
	if(i > 0) {
		var child = i,
		parent = Number.parseInt((i - 1)/2);
		//console.log(arr);
		if(arr[child] > arr[parent]) {
			let temp = arr[child];
			arr[child] = arr[parent];
			arr[parent] = temp;
			heapifyMax(arr, parent);
		}
	}
}

var array = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
var n = array.length;
for(let i = 1; i < array.length; i++) {
	heapifyMax(array, i);
}
console.log(array);