var result = function(A) {
	var arr = A;
	
	for(var z in arr) {
		
		var flag = 0,
			ini = arr[z].toString(),
			iniLength = ini.length,
			map = {};
		    for(var i = 0; i < iniLength; i++) {
					var result = 1;
					for(var j = i; j < iniLength; j++) {
						result = result * parseInt(ini[j]);
						if(map[result]) {
							console.log('the Number ' + ini + " is not colorful");
							flag++;
							return;
						}
					map[result] = 1;
				}
		}
		if(flag == 0) 
		console.log('The Number ' + ini + ' is colorful');
	}
};

var arr = [23];
result(arr);