class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class circularLinkedList {
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
            while (current.next && current.next != this.head)
                current = current.next;
            current.next = node;
            node.next = this.head;
        }
        this.length++;
    }

    addFirst(element) {
        var node = new Node(element);
        let last = this.head;
        if (this.head == null)
            this.head = node;
        else {
            while (last.next != this.head)
                last = last.next;
            node.next = this.head;
            this.head = node;
            last.next = this.head;
        }
        this.length++;
    }

    addAfter(location, element) {
        var node = new Node(element);
        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;
            do{
                    if (current.element == location) {
                        let t = current.next;
                        current.next = node;
                        node.next = t;
                    }
                    current = current.next;
                }while(current != this.head);
            }
            this.length++;
        }


    deleteLast() {
        var current = this.head;
        if (current == null)
            return undefined;
        else {
            while ((current.next).next != this.head)
                current = current.next;
            let value = (current.next).element;
            current.next = (current.next).next;
            this.length--;
            return value;
        }
    }

    deleteFirst() {
        var current = this.head;
        let last = current.next;
        if (current == null)
            return undefined;
        else {
            while ((last.next) != this.head)
                last = last.next;
            let value = current.element;
            this.head = current.next;
            last.next = this.head;
            this.length--;
            return value;
        }
    }

    deleteVal(element) {
        var current = this.head;
        if (current.element == element)
            this.deleteFirst(element);
        else {
            do{
                if ((current.next).element == element) {
                    let value = (current.next).element;
                    current.next = (current.next).next;
                    this.length--;
                    return value;
                }
                current = current.next;
            }while (current != this.head);
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
        while (current.next != this.head) {
            console.log(current.element);
            current = current.next;
        }
        console.log(current.element);
    }

    isEmpty() {
        if (this.length == 0)
            return true;
        else
            return false;
    }
}

var list = new circularLinkedList();
list.addElement(5);
list.addElement(8);
list.addElement(9);
list.addElement(10);
list.addElement(11);
list.addFirst(22);
list.addAfter(9, 30);
list.printList();
console.log();

list.deleteVal(11);
// list.printList();
// console.log(list.isEmpty());
// console.log(list.addAt(8, 20));
list.printList();