function palidrome(A){
    A = A.replace(/\W/g, "").toLowerCase();
    for(var i = 0, j = A.length - 1; i < A.length/2; i++, j--)
        if(A[i] != A[j])
            return false;
    return true;
}

var str = "race a ecar";
console.log(palidrome(str));