//function that distribute equal weights to the ships
//given N = number of ships and W = Current Weight on each ship
function ships(N,W) {
	var sum = 0;
	for(var i = 0; i < W.length; i++)
		sum+= W[i];
	if(sum % N != 0)
		return -1;
	else {
		var avg = sum/N;
		var array = W.sort(function(a,b) { return a-b });
		var i = 0; j = W.length - 1;
		while(i < j) {
			if(W[i] < avg && W[j] > avg) {
				W[i]+= 1;
				W[j]-= 1;
			}
			else {
				if(W[i] == avg)
					i++;
				if(W[j] == avg)
					j--;
			}
		}
		console.log(W);
	}
}
var ship = 5, arr = [3,1,4,1,6];
ships(ship,arr);