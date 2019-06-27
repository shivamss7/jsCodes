function pascal(A) {
	var array = [[1]];

	for(var i = 0; i < A; i++) {
		var arr = [1];
		var prevArr = array[i];
		for(j = 1; j < array[i].length; j++) 
			arr.push(prevArr[j] + prevArr[j-1]);
	
		arr.push(1);
		array.push(arr);
	} 

	return array;
}
console.log(pascal(0));