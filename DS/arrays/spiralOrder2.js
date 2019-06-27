function spiral2(A) {
    var n = A;
    A = [];
    // var A = Array(n).fill().map(()=>Array(n).fill(0));
    for(var i = 0; i < n; i++) { 
        A[i] = new Array(n);
    }
    var count = 1;
    
    var m = A.length,
        n = A[0].length,
        arr = [],
        top = left = dir = 0,
        bottom = m - 1,
        right = n - 1;

    while(left <= right && top <= bottom) {
        if(dir == 0) {
            for(var i = left; i <= right; i++, count++)
                A[top][i] = count;
            top++;
        }
        else if(dir == 1) {
            for(var j = top; j <= bottom; j++, count++)
                A[j][right] = count;
            right--;
        }
        else if(dir == 2) {
            for(i = right; i >= left; i--, count++)
                A[bottom][i] = count;
            bottom--;
        }
        else if(dir == 3) {
            for(j = bottom; j >= top; j--, count++)
                A[j][left] = count;
            left++;
        }
        dir = (dir+1)%4; 
    }
    return A;
}

console.log(spiral2(80));
