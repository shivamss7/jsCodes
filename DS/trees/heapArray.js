// min heap
function heapifyMin(arr, i, n) {
	var left = Number.parseInt((2 * i) + 1),
		right = Number.parseInt((2 * i) + 2),
		least = i;

	if(left < n && arr[left] < arr[i])
		least = left;

	if(right < n && arr[right] < arr[least])
		least = right;

	if(least != i) {
		let temp = arr[least];
		arr[least] = arr[i];
		arr[i] = temp;
		heapifyMin(arr, least, n);
	}
}

//max heap
function heapifyMax(arr, i, n) {
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
		heapifyMax(arr, largest, n);
	}
}

var array = [35, 33, 42, 10, 14, 19, 27, 44, 26, 31];
var n = array.length;
for(let i = n/2 - 1; i >= 0; i--) {
	heapifyMin(array, i, n);
}
console.log(array);