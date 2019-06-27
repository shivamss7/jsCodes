//You are given a binary string(i.e. with characters 0 and 1) S consisting of characters S1, S2, …, SN.
//In a single operation, you can choose two indices L and R such that 1 ≤ L ≤ R ≤ N and flip the characters
//SL, SL+1, …, SR. By flipping, we mean change character 0 to 1 and vice-versa.

//Your aim is to perform ATMOST one operation such that in final string number of 1s is maximised. 
//If you don’t want to perform the operation, return an empty array. Else, return an array consisting
//of two elements denoting L and R. If there are multiple solutions, return the lexicographically
//smallest pair of L and R.

function main(A) {
	var val, storage = [], max = 0;
	A = A.split("");
	
	if(A.length == 0)
		return [];
	
	for(var i = 0; i < A.length - 1; i++) {
		var dup = Array.from(A);// or A.slice() to clone an array
		for(var j = i; j < A.length; j++) { 
			dup[j] = flip(dup[j]);
			storage.push({L:i+1, R: j+1, val: countOnes(dup.join(""))});
		}
	}

	for(var val of storage) {
		if(val.val > max)
			max = val.val;
	}

	for(var val of storage) {
		if(val.val == max)
			return [val.L, val.R];
	}
}

function flip(val) {
	if(val == '0')
		return '1';
	else if(val == '1')
		return '0';
}

function countOnes(str) {
	var arr = str.split("");
	if(arr.length) {
		return arr.reduce(function(acc, val) {
			if(parseInt(val) == 1)
				acc = parseInt(acc) + 1;
			return acc;
		});
	}
	else
		return 0;
}	


console.log(main("010001"));