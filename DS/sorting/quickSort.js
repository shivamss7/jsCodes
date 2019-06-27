function quickSort(left, right, arr) {
	if(left < right) {
		var pi = partition(left, right, arr);
		quickSort(left, pi - 1, arr);
		quickSort(pi + 1, right, arr);
	}
}

function partition(left, right, arr) {
	var pivot = arr[right],
		i = left - 1;

		for(let j = left; j < right; j++) {
			if(arr[j] <= pivot) {
				i++;
				let t = arr[j];
				arr[j] = arr[i];
				arr[i] = t;
			}
		}
		i++;
		arr[right] = arr[i];
		arr[i] = pivot;
		console.log(arr);
		return i; 
}

var arr = [10,70,90,80,50,60];
quickSort(0, arr.length - 1, arr);
console.log(arr);