class linkedList {
	constructor(value) {
		this.head = null;
		this.length = 0;
		this.addToHead(value);
	}
	addToHead(value) {
		const newNode = {value};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	removeFromHead() {
		if(this.length === 0)
			return undefined;
		
		const value = this.head.value;
		this.head = this.head.next;
		this.length--;
		return value; 
	}
	findVal(val) {
		let thisNode = this.head;
		while(thisNode) {
			if(thisNode.value == val) {
				console.log('Value found = ' + val );
				return;
			}
			else
				thisNode = thisNode.next;
		}
	}
}

const list = new linkedList("hello").addToHead("hello second").addToHead("hello third");
console.log(list);
//console.log(list.removeFromHead());
//console.log(list);
list.findVal("hello second");