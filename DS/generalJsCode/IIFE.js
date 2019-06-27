var result = (function() {

	var sum = function(a,b) {
		return a+b;
	}

	var diff = function(a,b) {
		return a-b;
	}

	return {
		sum: sum,
		diff: diff
	}
})();

console.log(result.sum(30, 40));

