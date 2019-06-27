var result = function(arr, target) {
    var map1 = new Map(),
        map2 = new Map();
    for (var i = arr.length -1; i >= 0 ; i--)
        map1.set(arr[i], i);
   // console.log(map1);

    for (var i = 0; i < arr.length; i++) {
        let x = map1.get(target - arr[i]);
        if (x!=null && parseInt(x) < i)
            map2.set(i, parseInt(x));
    }

    var iterator = map2.keys();
    var arr2 = [];
    //use this
    for(var k of iterator)
    	arr2.push(k);
    //or this 
    //map2.forEach(function(value, key) {
    // 	arr2.push(key);
    // });
   // console.log(map2);
   if(arr2.length == 0)
   	return [];
    
    for(var i = 0; i < arr2.length; i++) {
    	if(arr2[i] == arr2[i+1]) {
    		if(map2.get(arr2[i]) < map2.get(arr2[i+1]))
    			return [map2.get(arr2[i]) + 1, arr2[i] + 1];
    	}
    	else
    		return [map2.get(arr2[i]) + 1, arr2[i] + 1];
    }
}

var arr = [ 4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8 ];
var target = -3;
console.log(result(arr, target));