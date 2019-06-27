// You can add elements to a tree in a sequential way using queue that stores addresses

class Node {
	constructor(element) {
		this.data = element;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}


class queueNode {
	constructor(root) {
		this.element = root;
		this.next = null;
	}
}


class Queue {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	addElement(element) {
        var node = new queueNode(element);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.length++;
    }

    pop() {
        var current = this.head;
        if (current == null)
            return undefined;
        else {
            let value = current.element;
            this.head = current.next;
            this.length--;
            return value;
        }
    }

    addFirst(element) {
        var node = new queueNode(element);
        if (this.head == null)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
}


class Tree {
	constructor() {
		this.root = null;
		this.length = 0;
		this.queue = new Queue();
	}

	addtree(data) {
		let node = new Node(data);
		if(this.root == null) {
			this.root = node;
		}
		else {
			this.queue.addElement(node);
			this.insert(this.root, node);
		}	
		this.length++;
	}

	insert(roots, node) {
		if(roots != null) {
			if(roots.left == null && roots.right == null) {
					roots.left = node;
					roots.left.parent = roots;
			}
			else if(roots.left != null && roots.right == null) {
					roots.right = node;
					roots.right.parent = roots;
			}
			else {
				let pop = this.queue.pop();
				if(pop.left == null && pop.right == null)
					this.queue.addFirst(pop);
				this.insert(pop, node);
			}
		
		}	
	}

	getRoot() {
        return this.root;
    }	

    printQueue() {
    	console.log(this.queue);
    }
}

var tree = new Tree();
tree.addtree(50);
tree.addtree(20);
tree.addtree(80);
tree.addtree(30);
tree.addtree(10);
tree.addtree(5);
tree.addtree(90);
tree.addtree(100);
console.log(tree.getRoot());
