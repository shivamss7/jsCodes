var result = function(arr, target) {
    var map1 = {},
        map2 = {};
    for (var i = arr.length -1; i >= 0 ; i--)
        map1[arr[i]] =  i;
   console.log(typeof arr[1]);

    for (var i = 0; i < arr.length; i++) {
        let x = map1[target - arr[i]];
        if (x!=null &&  x <= i)
          return [x + 1,i + 1];
    

    //console.log(map2);
   //  var arr2 = Object.keys(map2);
   // //console.log(arr2);
   // if(arr2.length == 0)
   //  return [];
    
   //      if(parseInt(arr2[i]) == parseInt(arr2[i+1])) {
   //          if(map2[arr2[i]] < map2[arr2[i+1]])
   //              return [map2[arr2[i]] + 1, parseInt(arr2[i]) + 1];
   //      }
   //      else
   //          return [map2[arr2[i]] + 1, parseInt(arr2[i]) + 1];
    }
    return [];
}

var arr = [ 7, 2, -5, 10, -3, 4, 9, 1, -6, -10 ];
var target = 2;
var arr2 = result(arr, target);
for(var i in arr2)
console.log(arr2[i]);