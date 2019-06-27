//function returns indices of two numbers whose addition results to target
//also index 1 < index 2

function twoSum(arr, target) {
    var map1 = {},
        map2 = {};
    // starting from right to left to get min index of a particular number
    // left to right gives max index of a particular number    
    for (var i = arr.length -1; i >= 0 ; i--)
        map1[arr[i]] = i;
   //console.log(map1);

    for (var i = 0; i < arr.length; i++) {
        var x = map1[target - arr[i]];
        if (x!=null &&  x < i)
            map2[i] = x;
    }
    //console.log(map2);

    var arr2 = Object.keys(map2);
    if(arr2.length == 0)
        return [];

    return [map2[arr2[0]] + 1, parseInt(arr2[0]) + 1];
}

function twoSum2(arr, target) {
    var map = {};

    for(var i = 0; i < arr.length; i++) {
        if(map[target - arr[i]])
            return [ map[target - arr[i]] + 1, i + 1 ];
        if(!map[arr[i]])
            map[arr[i]] =  i;
    }
    return [];
}


var arr = [ 4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8 ];
var target = -3;
var arr2 = twoSum2(arr, target);
console.log(arr2);