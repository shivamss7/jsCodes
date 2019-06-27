var result = function(A) {
	var arr = A;
	
	for(var z in arr) {
		
		var flag = 0,
			ini = arr[z].toString(),
			iniLength = ini.length,
			map = new Map();
		outside: for(var i = 0; i < iniLength; i++) {
					 for(var j = 0, k = iniLength - i; k <= iniLength; j++, k++ ) {
						var x = ini.slice(j, k);
						//console.log(x);
        				var y = x.length,
        					result = 1;
						for(var l = 0; l < y; l++) {
								result = result * parseInt(x[l]);
								//console.log(result);
								}
						if(map.get(result) == result) {
							console.log('The number ' + ini +' is not colorful');
							flag++;
							break outside;
						}
						map.set(result, result);	
					}
				}
		if(flag == 0) 
			console.log('The Number ' + ini + ' is colorful');
	}
};

var arr = [3234, 123, 23, 3457];
result(arr);