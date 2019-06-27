class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addElement(element) {
        var node = new Node(element);
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

    addFirst(element) {
        var node = new Node(element);
        if (this.head == null)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    addAfter(location, element) {
        var node = new Node(element);
        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;
            while (current) {
                if (current.element == location) {
                    let t = current.next;
                    current.next = node;
                    node.next = t;
                }
                current = current.next;
            }
        }
        this.length++;
    }

    deleteLast() {
        var current = this.head;
        if (current == null)
            return undefined;
        else {
            while ((current.next).next)
                current = current.next;
            let value = (current.next).element;
            current.next = (current.next).next;
            this.length--;
            return value;
        }
    }

    deleteFirst() {
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

    deleteVal(element) {
        var current = this.head;
        if (current.element == element)
            this.deleteFirst(element);
        else {
            while (current) {
                if ((current.next).element == element) {
                    let value = (current.next).element;
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

    isEmpty() {
        if (this.length == 0)
            return true;
        else
            return false;
    }
}

var list = new LinkedList();
list.addElement(5);
list.addElement(8);
list.addFirst(22);
list.addAfter(5, 11);
list.printList();
console.log(list.isEmpty());
list.addAfter(8, 20);
list.printList();