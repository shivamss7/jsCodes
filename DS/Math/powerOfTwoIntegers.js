//Given a positive integer which fits in a 32 bit signed integer,
//find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.

function power(A) {
	if(A == 1) return 1;
	    
        for(var x = 2; x <= Math.sqrt(A); x++) {
            var y = 2;
            var p = Math.pow(x,y);
            
            while(p <= A && p > 0) {
                if(p == A)
                    return true;
                y++;
                p = Math.pow(x,y);
            }
        }
        return false;
}

function powerOfTwo(A) {
    return (Math.log(A)/Math.log(2) % 1 == 0);
}

console.log(power(8));
console.log(powerOfTwo(16));