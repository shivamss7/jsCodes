function isBalaced(data) {
	var arr = [];
	var stack = [], stack2 = [];
	var opening = ['{', '[', '('];
	var closing = ['}', ']', ')'];

	for(let i in data) {

		while(stack2.length > 0 && opening.indexOf(data[i]) > -1)
			arr.push(stack2.pop());

		if(opening.indexOf(data[i]) > -1)
			stack.push(data[i]);
		else {
			if(stack.length > 0 && stack.pop() == opening[closing.indexOf(data[i])])
				stack2.push("True");
			else
				stack2.push("False");
		}		
	}
	while(stack2.length > 0)
			arr.push(stack2.pop());
	console.log(arr);
}

var arr = ['{', '}', '{', '(', '[', ')', ')', '}', '{', '}', '{', ')', '[', '(', ')', ']'];
isBalaced(arr);