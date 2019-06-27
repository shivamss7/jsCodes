//reverse an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var j = arr.length - 1 ;
 for(let i = 0; i < arr.length/2; i++, j--) {
 	var temp = arr[i];
 	arr[i] = arr[j];
 	arr[j] = temp;
 }
 console.log(arr);

var arr2 = arr.