class Node {
    constructor(element) {
        this.prev = null;
        this.element = element;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addElement(element) {
        var node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            current = this.head;
            while (current.next)
                current = current.next;
            current.next = node;
            node.prev = current;
            this.tail = node;
        }
        this.length++;
    }

    addFirst(element) {
        var node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            current = this.head;
            current.prev = node;
            node.next = current;
            this.head = node;
        }
        this.length++;
    }

    addAfter(location, element) {
        var node = new Node(element);
        let current;

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            current = this.head;
            while (current) {
                if (current.element == location) {
                    let t = current.next;
                    t.prev = node;
                    current.next = node;
                    node.prev = current;
                    node.next = t;
                }
                current = current.next;
            }
        }
        this.length++;
    }

    deleteFirst() {
        var current = this.head;
        if (this.head == null)
            return undefined;
        else {
            let value = current.element;
            current = current.next;
            current.prev = (current.prev).prev;
            this.head = current;
            this.length--;
            return value;
        }
    }

    deleteLast() {
        var current = this.head;
        if (this.head == null)
            return undefined;
        else {
            while ((current.next).next)
                current = current.next;
            let value = (current.next).element;
            this.tail = current;
            current.next = (current.next).next;
            this.length--;
            return value;
        }
    }

    deleteVal(element) {
        var current = this.head;
        if (current.element == element) {
        	this.deleteFirst(element);
        }
        else {
            while (current) {
                if ((current.next).element == element) {
                    let value = (current.next).element;
                    ((current.next).next).prev = current;
                    current.next = (current.next).next;
                    this.length--;
                    return value;
                }
                current = current.next;
            }
        }
    }

    findVal(value) {
        var current = this.head;
        if (current == null)
            return undefined;
        else {
            while (current) {
                if (current.element == value)
                    return value;
                current = current.next;
            }
        }
    }

    printList() {
        var current = this.head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }

    printListReverse() {
        var current = this.tail;
        while (current) {
            console.log(current.element);
            current = current.prev;
        }
    }


    isEmpty() {
        if (this.length == 0)
            return true;
        else
            return false;
    }

}

var list = new DoubleList();
list.addElement(5);
list.addElement(8);
list.addFirst(22);
list.addAfter(5, 11);
list.delete();
list.printList();
//list.printListReverse();
//console.log(list);