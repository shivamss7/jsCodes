function mergeSort(left, right, arr) {
	if(right > left) {
		var mid = parseInt((right + left - 1)/2);

		mergeSort(left, mid, arr);
		mergeSort(mid + 1, right, arr);
		merge(left, mid, right, arr);
	}
}

function merge(left, mid, right, arr) {
	var n1 = mid - left + 1,
		n2 = right - mid,
		arr1 = [],
		arr2 = [];

		for(let i = 0; i < n1; i++) {
			arr1[i] = arr[left + i];
		}

		for(let j = 0; j < n2; j++) {
			arr2[j] = arr[mid + 1 + j];
		}
	
		let i = 0,
			j = 0,
			k = left;

		while(i < n1 && j < n2) {
			if(arr1[i] <= arr2[j]) {
				arr[k] = arr1[i];
				i++;
			}
			else {
				arr[k] = arr2[j];
				j++;
			}
			k++;
		}

		while(i < n1) {
			arr[k] = arr1[i];
			i++;
			k++;
		}

		while(j < n2) {
			arr[k] = arr2[j];
			j++;
			k++;
		}

}

var arr = [1,20,3,4,5,6,7,8,9,10];
mergeSort(0, arr.length - 1, arr);
console.log(arr);
