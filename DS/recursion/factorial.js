function factorial(num) {
	if(num > 1) 
		return num * factorial(num - 1);
	else
		return 1;
}

var x = 5;
console.log("factorial of " + x +" is " + factorial(x));