function spiral(A){
        var m = A.length;
        var n = A[0].length;
        var mul = m * n;
        var arr = [];
        var i = 0, k = 0, l = 0, dir = 0, j;
        

        while(arr.length < mul) {
            if(dir == 0) { 
                for(j = k; j < n - k ; j++)
                    arr.push(A[i][j]);
                k++;
                j--;//console.log(arr);
            }
            else if(dir == 1) {
                for(i = l + 1; i < m - l; i++)
                    arr.push(A[i][j]);
                i--;
            }            
            else if(dir == 2) {
                for(j = n - k - 1; j >=l; j--)
                    arr.push(A[i][j]);
                l++;
                j++;
            }
            else if(dir == 3) {
                for(i = m - l - 1; i >=k; i--)
                    arr.push(A[i][j]);
                 i++;
            }
            dir = (dir + 1) % 4;
	}
    return arr;
};

function spiral2(A) {
    var m = A.length,
        n = A[0].length,
        arr = [],
        top = left = dir = 0,
        bottom = m - 1,
        right = n - 1;

    while(left <= right && top <= bottom) {
        if(dir == 0) {
            for(var i = left; i <= right; i++)
                arr.push(A[top][i]);
            top++;
        }
        else if(dir == 1) {
            for(var j = top; j <= bottom; j++)
                arr.push(A[j][right]);
            right--;
        }
        else if(dir == 2) {
            for(i = right; i >= left; i--)
                arr.push(A[bottom][i]);
            bottom--;
        }
        else if(dir == 3) {
            for(j = bottom; j >= top; j--)
                arr.push(A[j][left]);
            left++;
        }
        dir = (dir+1)%4; 
    }
    return arr; 
}

var A = [
  [133, 241, 22, 258, 187, 150, 79, 207, 196, 401, 366, 335, 198],
  [401, 55, 260, 363, 14, 318, 178, 296, 333, 296, 45, 37, 10],
  [112, 374, 79, 12, 97, 39, 310, 223, 139, 91, 171, 95, 126]
]
var arr = spiral(A);
console.log(arr);