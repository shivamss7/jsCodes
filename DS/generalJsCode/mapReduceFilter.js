var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 44, 55, 66, 77];

//arr.map() method
var map = arr.map(x => x * 2);

//arr.reduce() method
var reduce = arr.reduce((acc, cur) => acc * cur); 

//arr.filter() method
var filter = arr.filter(val => val > 10);


console.log(reduce);