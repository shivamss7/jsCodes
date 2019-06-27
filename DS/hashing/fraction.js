// limitation cannot be done for larger numbers
// partially correct
function fraction(a, b) {
	var val = (a/b).toString(),
		val = Number.parseFloat(val).toFixed(20),
 		num = val.split("."),
 		frac = num[1];
	var map = {}, result,flag = 0; console.log(val);

	if(frac == undefined)
		return num[0];

	for(var i = 0; i <= frac.length/2; i++) { 
		if(flag == 1)
			break;

		if(!map[frac.substr(0, i+1)])
			map[frac.substr(0, i+1)] = i+1;
		
		for(var j = i + 1; j < frac.length; j++) {
				if(map[frac.substr(i + 1 , j)]) {
					var result = result(num[0], frac.substr(i + 1, j));
					flag = 1;
					break;
			}
		}
	}

	if(flag == 0)
		result = val;
	return result;

	function result(one, two) {
	return one + ".(" + two + ")";
	}

};

//remainder is always different unless the number repeats itself
//very important method, uses mathametical approach to find the answer.
function fraction2(A, B) {
	var signAB;
    if(B == 0)
    return "Invalid Format";
    
    var sign = function(x) {
        x = +x;//convert to a number
        if(x === 0 || isNaN(x))
            return Number(x);
        return x > 0 ? 1 : -1 ;
    }

    if((sign(A) == -1 && sign(B) != -1) || (sign(B) == -1 && sign(A) != -1))
        signAB = "-";

    A = (sign(A) === -1) ? A * -1 : A;
    B = (sign(B) === -1) ? B * -1 : B;

    var result = Math.floor(A/B),
        remainderMap = {},
        remainder = A % B;

    if(remainder != 0) {
        result = result + ".";
        remainderMap[remainder] = result.length - 1;
    }  

    while(remainder != 0) {
        remainder = remainder * 10;
        var quot = Math.floor(remainder/B);
        remainder = remainder % B;

        if(remainderMap[remainder] != undefined) {
            var repeatIndex = remainderMap[remainder] + 1;
            result = result + quot;
            var repeat = result.substring(repeatIndex);
            result = result.substring(0, repeatIndex);
            result += "(" + repeat + ")";
            remainder = 0;
        }
        else {
            result = result + quot;
            remainderMap[remainder] = result.length - 1;
        }
    }
    
    if(signAB && result != "0")
        result = signAB + result;

    return result;
}



var a = -1, b = -2147483648,
	c = 21, d = 18;
var result = fraction2(c,d);
console.log(result);