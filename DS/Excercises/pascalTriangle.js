function abc(A){

		if(A == 0)
			return [];

        if(A == 1)
            return [[1]];
        
        var arr = new Array([1]);
        for(var i = 0; i < A - 1; i++) {
            var temp = arr[i];
            arr2 = [1];
            for(var j = 1; j < temp.length; j++)
            	arr2.push(temp[j] + temp[j-1]);
            arr2.push(1);
            arr.push(arr2);
        }
        return arr;
    }

console.log(abc(10));