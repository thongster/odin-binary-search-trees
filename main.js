class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null; // if array is empty, return null
    if (array[0] > array[array.length - 1]) return null;

    const mid = Math.floor(array.length / 2);
    console.log(mid);
    const root = new Node(array[mid]);

    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root; // level 0 root node
  }

  insert(value) {
    // insert given value
  }

  deleteItem(value) {
    // delete given value
  }

  find(value) {
    // return node with given value
  }

  levelOrderForEach(callback) {
    // Write a levelOrderForEach(callback) function that accepts a callback function as its parameter.
    // levelOrderForEach should traverse the tree in breadth-first level order and
    // call the callback on each node as it traverses,
    // passing the whole node as an argument, similarly to how Array.prototype.forEach might work for arrays.
    // levelOrderForEach may be implemented using either iteration or recursion (try implementing both!).
    // If no callback function is provided, throw an Error reporting that a callback is required.
  }

  inOrderForEach(callback) {}

  preOrderForEach(callback) {}

  postOrderForEach(callback) {}

  height(value) {
    // return height of node containing the given value
    // return null if value not found
  }

  depth(value) {
    // return depth of node containing the given value
    // return null if value not found
  }

  isBalanced() {
    // check if tree is balanced
  }

  rebalance() {
    // rebalance an unbalanced tree
  }
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new Tree(testArray).buildTree(testArray);
console.dir(tree, { depth: null });
