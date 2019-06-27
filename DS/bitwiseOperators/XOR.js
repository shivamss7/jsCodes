// Program using bitwise XOR operator to find a number which only has one occurence
// in an array having entries twice
// Trick : bitwise XOR of two numbers return zero.
//eg: 12 ^ 12 = 0; 12 ^ 13 ^ 12 = 13
function test(A) {
    var a = 0;
    for(var i = 0; i < A.length; i++)
        a = a ^ A[i];
    return a;
}

var arr = [12, 3, 4, 5, 5, 4, 12];
console.log(test(arr));