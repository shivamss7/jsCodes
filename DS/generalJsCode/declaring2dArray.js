function method1(n) {
	var A = []
    for(var i = 0; i < n; i++) {
        A[i] = new Array(n); // or simply []
        //this for loop can be neglected but values will not be initialized thens
        for(var j = 0; j < n; j++)
            A[i][j] = 0;
    }
    return A;
}

function method2(n) {
	return Array(n).fill().map(() => Array(n).fill(0));
}


var m1 = method1(3);
var m2 = method2(3);
console.log(m1);

