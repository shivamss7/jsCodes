class Node {
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    addToTree(element) {
        var node = new Node(element);
        if (this.root == null)
            this.root = node;
        else
            this.insert(this.root, node);
        this.length++;
    }

    insert(roots, node) {
        if (node.element < roots.element) {
            if (roots.left == null)
                roots.left = node;
            else
                this.insert(roots.left, node);
        } else if (node.element > roots.element) {
            if (roots.right == null)
                roots.right = node;
            else
                this.insert(roots.right, node);
        }
    }

    search(node, key) {
        if (node == null)
            return null;
        else if (key < node.element)
            return this.search(node.left, key);
        else if (key > node.element)
            return this.search(node.right, key);
        else
            return node;
    }

    //one more method in geeks for geeks
    remove(node, key) {
        if (node == null)
            return null;
        var newNode = this.predeccesor(node, key);
        //for root value
        if (newNode == null) {
        	var aux = this.findMin(node.right);
        	node.element = aux.element;
        	this.remove(node.right, aux.element);
        } else
            this.removeNode(newNode[0], key, newNode[1]);
    }

    removeNode(node, key, branch) {
            if ((node[branch]).left == null && (node[branch]).right == null)
                node[branch] = null;
            else if ((node[branch]).left == null)
                node[branch] = (node[branch]).right;
            else if ((node[branch]).right == null)
                node[branch] = (node[branch]).left;
            else {
                var aux = this.findMin((node[branch]).right);
                (node[branch]).element = aux.element;
                this.removeNode(node[branch], aux.element, 'right');
            }
    }

    predeccesor(node, key) {
        if (node.element == key)
            return null;
        else
            return this.predeccesorNode(node, key);
    }

    predeccesorNode(node, key) {
        if ((node.left) != null && (node.left).element == key)
            return [node, "left"];
        else if ((node.right) != null && (node.right).element == key)
            return [node, "right"];
        else if (key < node.element)
            return this.predeccesor(node.left, key);
        else if (key > node.element)
            return this.predeccesor(node.right, key);
    }


    findMin(node) {
        if (node.left == null)
            return node;
        else
            return this.findMin(node.left);
    }

    getRoot() {
        return this.root;
    }

    getHeight(node) {
        if (node == null) 
            return 0; 
        else { 
            var lHeight = this.getHeight(node.left); 
            var rHeight = this.getHeight(node.right); 
  
            if (lHeight > rHeight) 
                return(lHeight+1); 
            else return(rHeight+1); 
        }
    }

    inOrder(node) {
        if (node != null) {
            this.inOrder(node.left);
            console.log(node.element);
            this.inOrder(node.right);
        }
    }

    preOrder(node) {
        if (node != null) {
            console.log(node.element);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.element);
        }
    }
leverOrder(node, height) {
        for(var i = 0; i < height; i++)
           this.printLevelOrder(node, i);
    }

    printLevelOrder(node, level) {
        if(node == null) 
            return;
        if(level == 1)
            console.log(node.element);
        else {
            this.printLevelOrder(node.left, level - 1);
            this.printLevelOrder(node.right, level - 1);
        }
    }
}

var BST = new binaryTree();

BST.addToTree(15);
BST.addToTree(25);
BST.addToTree(10);
BST.addToTree(7);
BST.addToTree(22);
BST.addToTree(17);
BST.addToTree(13);
BST.addToTree(5);
BST.addToTree(9);
BST.addToTree(27);
BST.addToTree(30);

var roots = BST.getRoot();
// BST.preOrder(roots);
// console.log();
// BST.remove(roots, 10);
// //console.log(BST.predeccesor(roots, 25));
// // console.log(BST.findMin(roots));
// BST.inOrder(roots);
var height = BST.getHeight(roots);
BST.leverOrder(roots, height);