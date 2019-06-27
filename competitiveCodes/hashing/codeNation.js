var result = function(arr, num) {
	
	var map = new Map();
	for(var i of arr)
		map.set(i,i);
	var pair = 0;
	for(var i = 0; i < arr.length -1; i++) {
		for(j = i + 1; j < arr.length; j++) {
			var x = num / (arr[i] * arr[j]);
			if(map.get(x))
				pair = pair + 1;
		}
	}

	return pair;
};

var arr = [3,3,2,18,1,1,9];
var num = 18;
console.log(result(arr, num));