function factors(A){
  var arr = [];
  for(var i = 1; i <= Math.floor(Math.sqrt(A)); i++) {
    if(A%i == 0) {
      arr.push(i);
    if(i != Math.sqrt(A))
      arr.push(Math.floor(A/i));
    } 
  }
  return arr.sort(function(a,b) { return a-b;});
}

console.log(factors(12));