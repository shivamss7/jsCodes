// josephus problem  with k= 2 (not using recursion) 
// killing starts with 2 and gap of 1,(K-1).
function josephusRecursion(n, k) {
	if (n == 1)
    	return 1; 
  	else
    	return (josephusRecursion(n - 1, k) + k-1) % n + 1; 
}

function josephusProblem(num) {
	if(num == 1)
		return 1;
	
	var value;
	for(var i = num; i >= Math.sqrt(num); i--) {
	//finding power of two immediately less than N, say M. 
		if((Math.log(i)/Math.log(2)) % 1 == 0) { 
			value = i;
			break;
		}
	}
	return (2* (num-value) + 1); // using formula (2 * (N - M) + 1)
}

//josephus problem stating from 1st position and gap of one
function josephus(num) {
	var value;
	for(var i = num; i >= Math.sqrt(num); i--) {
	//finding power of two immediately less than N, say M. 
		if((Math.log(i)/Math.log(2)) % 1 == 0) { 
			value = i;
			break;
		}
	}
	if(num%2 == 0)
		return value;
	else
		return (num-value) * 2;
}

//17 means array = [1,2,3....17];
var val = 90;
console.log(josephusRecursion(val,2));
console.log(josephusProblem(val));
console.log(josephus(11));