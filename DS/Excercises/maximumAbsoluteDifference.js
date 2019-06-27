//You are given an array of N integers, A1, A2 ,…, AN. Return maximum value of f(i, j) for all 1 ≤ i, j ≤ N.
//f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.
function abs(A) {
		var arr = [], arr2 = [];
        for(var i = 0; i < A.length; i++) {
            arr.push(A[i] + i);
            arr2.push(A[i] - i);
            }
       console.log(arr2);
       arr2.sort();
       console.log(arr2);
        var val1 = Math.max(...arr) - Math.min(...arr);
        var val2 = Math.max(...arr2) - Math.min(...arr2);
        return Math.max(val1,val2);
}

console.log(abs([ -70, -64, -6, -56, 64, 61, -57, 16, 48, -98 ]));