function test(A){
   
    A.sort(function(a,b) {return a.length - b.length});
    var str = '', word = A.shift();
    for(var i = 0; i < word.length; i++) {
        str = str + word[i];
        for(var j = 0; j < A.length; j++) {
            var temp = A[j].substring(0, i+1);
            if(str != temp) {
                str = str.substring(0, str.length - 1);
                return str;
            }           
        }
    }

    return str;
}

var str = [ "abcd", "abcd", 'abc'];
console.log(test(str));