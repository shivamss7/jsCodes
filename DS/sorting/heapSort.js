
function heapify(arr, i, n) {
	var left = Number.parseInt((2 * i) + 1),
		right = Number.parseInt((2 * i) + 2),
		largest = i;

	if(left < n && arr[left] > arr[i])
		largest = left;

	if(right < n && arr[right] > arr[largest])
		largest = right;

	if(largest != i) {
		let temp = arr[largest];
		arr[largest] = arr[i];
		arr[i] = temp;
		heapify(arr, largest, n);
	}
}

var array = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
var n = array.length;
for(let i = n/2 - 1; i >= 0; i--) {
	heapify(array, i, n);
}

for(let j = array.length - 1; j >= 0; j--) {
	let temp = array[0];
		array[0] = array[j];
		array[j] = temp;
		heapify(array, 0, j);
}
console.log(array);