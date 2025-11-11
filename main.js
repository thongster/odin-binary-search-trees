class Node {
  constructor(array, left = null, right = null) {
    this.array = array;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    return; // level 0 root node
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
