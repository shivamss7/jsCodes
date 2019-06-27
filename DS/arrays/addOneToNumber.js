//given a number in array format add 1 to the number and again return the number in array format.
//example number '123' = [1, 2, 3] and returned array is [1, 2, 4]
function plusOne(A){
       var carry = 1;

       for(var i = A.length - 1; i >= 0; i--) {
       		carry = carry + A[i];
       		A[i] = carry % 10;
       		carry = parseInt(carry / 10);
       }

       if(carry)
       	A.unshift(1);
       else {
       	if(A[++i] == 0) {
       		while(A[i] == 0)
       			i++;
       		A = A.slice(i);
       	}
       }

       return A;
    }

function plusOneAnother(A) {
      var carry = 0;

      for(var i = A.length - 1; i >= 0; i--) {
            if(A[i] == 9) {
                  A[i] = 0;
                  carry = 1;
                  if(i == 0) {
                        var newArr = [carry];
                        return newArr.concat(A);
                  }
            }
            else {
                  if(carry != 0) {
                        A[i] = A[i] + carry;
                        A = cleanArr(A);
                        return A;
                  }
                  else {
                        A[i] = A[i] + 1;
                        if(A[0] == 0)
                              A = cleanArr(A);
                        return A;
                  }
            }
      }

      function cleanArr(A) {
            var counter = 0;

            while(A[counter] == 0)
                  counter++;

            return A.slice(counter);
      }
}
var re = plusOneAnother([ 0, 3, 7, 6, 4, 0, 5, 5, 5 ]);
console.log(re);