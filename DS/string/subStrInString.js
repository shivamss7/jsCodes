//program that finds occurence of a substring which when concatenated n times makes the string
// eg : 'ab' when concatenated 3 times makes 'ababab'
function occurence(A) {
	var str = '';
	for(var i = 0; i < A.length/2; i++) {
		str = str + A[i];
		var exp = new RegExp(str, 'g');
		var count = A.match(exp); console.log(count);
		if(A.length/str.length == count.length)
			return count[0];
	}
}

var A = 'ababab;';
var B = 'aabbaabbaabb';
var C = 'aaaaaaaa';

console.log(occurence(B));
console.log(occurence(C));