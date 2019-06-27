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


class Heap {
	constructor() {
		this.root = null;
		this.length = 0;
		this.queue = new Queue();
		this.queueMain = new Queue();
	}

	addheap(data) {
		let node = new Node(data);
		if(this.root == null) {
			this.root = node;
			this.queueMain.addElement(node);
		}
		else {
			this.queue.addElement(node);
			this.queueMain.addElement(node);
			this.insert(this.root, node);
		}	
		this.length++;
	}

	insert(roots, node) {
		if(roots != null) {
			if(roots.left == null && roots.right == null) {
					roots.left = node;
					roots.left.parent = roots;
					this.heapifyUp(roots.left);
			}
			else if(roots.left != null && roots.right == null) {
					roots.right = node;
					roots.right.parent = roots;
					this.heapifyUp(roots.right);
			}
			else {
				let pop = this.queue.pop();
				if(pop.left == null && pop.right == null)
					this.queue.addFirst(pop);
				this.insert(pop, node);
			}
		}	
	}

	heapifyUp(roots) {
		if(roots.parent != null && roots.data > roots.parent.data) {
			let temp = roots.data;
			roots.data = roots.parent.data;
			roots.parent.data = temp;
			this.heapifyUp(roots.parent);
		}
	}

	heapifyDown(roots) {
		 if(roots) {
			 var largest = roots;

			if(roots.left != null && roots.left.data > largest.data) 
				largest = roots.left;
			

			if(roots.right != null && roots.right.data > largest.data)
				largest = roots.right;
		
			if(largest != roots) {
				let temp = roots.data;
				roots.data = largest.data;
				largest.data = temp;
				this.heapifyDown(largest);
			}
		}
	}

	getRoot() {
        return this.root;
    }	

    getMainQueue() {
    	return this.queueMain;
    }

    heapSort(roots) {
		var queue = this.getMainQueue();
		var arr = [];
		//console.log(queue.length);
		for(let i = 0; i < queue.length - 1; i++) {
			let current = queue.head;
			let max = roots.data;
			arr.push(max);

			while(current.next.next) 
				current = current.next;

			let temp = current.next.element;
			let parent = temp.parent;
			//console.log(parent);
			//nullifying queue and heap links
			roots.data = temp.data;
			if(parent.left.data == temp.data)
				parent.left = null;
			else
				parent.right = null;
			current.next = null;
			this.heapifyDown(roots);
		}
		arr.push(roots.data);
		return arr;
	}

}

var heap = new Heap();
heap.addheap(35);
heap.addheap(33);
heap.addheap(42);
heap.addheap(10);
heap.addheap(14);
heap.addheap(19);
heap.addheap(27);
heap.addheap(44);
heap.addheap(26);
heap.addheap(31);
//console.log(heap);

var main = heap.getRoot();
var arr = heap.heapSort(main);
console.log(arr.reverse());

