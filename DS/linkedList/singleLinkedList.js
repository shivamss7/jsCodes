class linkedList {
	constructor(value) {
		this.head = {
			value : value,
			next : null
		};
		this.length = 1;
	}
}

var list = new linkedList('Hello');
console.log(list);