class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const sortArray = [...new Set(array)].sort((a, b) => a - b)
    this.root = this.buildTree(sortArray);
  }

  buildTree(array) {
    if (array.length === 0) return null; // if array is empty, return null
    if (array[0] > array[array.length - 1]) return null;

    const mid = Math.floor(array.length / 2); // establish middle
    const root = new Node(array[mid]); // use middle data to create new node

    root.left = this.buildTree(array.slice(0, mid)); // recursive call, create left node if exists
    root.right = this.buildTree(array.slice(mid + 1)); // recursive call, create right node if exists

    return root; // level 0 root node
  }

  insert(value) {
    // insert given value
    const node = this.root
    if (this.root === null) {
        this.root = new Node(value)
        return;
    } else {
        const searchTree = function(node) {
            if (value < node.data) {
                if (node.left === null) {
                    node.left = new Node(value)
                } else if (node.left != null) {
                    return searchTree(node.left)
                }
            } else if (value > node.data) {
                if (node.right === null) {
                    node.right = new Node(value)
                } else if (node.right != null) {
                    return searchTree(node.right)
                }
            } else {
                return null
            }
        }
        return searchTree(node);
    }
  }

  deleteItem(value) {
    // delete given value
    const removeNode = function(node, value) {
        if (node === null) {
            return null
        }
        if (value === node.data) {
            // no children
            if (node.left === null && node.right === null) {
                return null
            }
            // no left child
            if (node.left === null) {
                return node.right
            }
            // no right child
            if (node.right === null) {
                return node.left
            }

            // if two chicldren (last option)
            // go down the right side, then keep going left til null
            let tempNode = node.right
            while (node.left != null) {
                tempNode = node.left
            }
            // replacing the node to remove, with the next appropriate node
            node.data = tempNode.data
            node.right = removeNode(node.right, tempNode.data)
            return node
        } else if (value < node.data) {
            node.left = removeNode(node.left, value)
            return node
        } else if (value > node.data) {
            node.right = removeNode(node.right, value)
            return node
        }
    }
    this.root = removeNode(this.root, value)
  }

  find(value) {
    // return node with given value
    let currentNode = this.root
    while (value != currentNode.data) {
        // if current node is greater than, keep moving left
        if (value < currentNode.data) {
            currentNode = currentNode.left
        // if current node is less than, keep moving right
        } else if (value > currentNode.data) {
            currentNode = currentNode.right
        }
        // if null, return null
        if (currentNode === null) {
            return null
        }
    }
    return currentNode
  }

  levelOrderForEach(callback) {
    if (!callback) {
        throw new Error('Callback is required!')
    }
    
    const queue = [this.root];
    while (queue.length > 0) {
        const current = queue.shift()
        callback(current)
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
  }

  inOrderForEach(callback, node = this.root) {
    if (!callback) {
        throw new Error('Callback is required!')
    }    
    if (node === null) return;
    this.inOrderForEach(callback, node.left);
    callback(node);
    this.inOrderForEach(callback, node.right);  
  }


  preOrderForEach(callback, node = this.root) {
    if (!callback) {
        throw new Error('Callback is required!')
    }    
    if (node === null) return;
    
    callback(node);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);  
  }

  postOrderForEach(callback, node = this.root) {
    if (!callback) {
        throw new Error('Callback is required!')
    }    
    if (node === null) return;
    
    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);  
    callback(node);
  }

  height(node) {
    // return height of node containing the given value
    // return null if value not found
    if (node === null) {
        return -1
    }
    const left = this.height(node.left)
    const right = this.height(node.right)
    return 1 + Math.max(left, right)
  }

  depth(value, node = this.root, currentDepth = 0) {
    if (node === null) return null
    if (node.data === value) return currentDepth
    // keep going left/right and add current depth until node.data === value
    if (value < node.data) return this.depth(value, node.left, currentDepth + 1) 
    return this.depth(value, node.right, currentDepth + 1)
  }

  isBalanced(node) {
    // check if tree is balanced
    const leftHeight = this.height(this.root.left)
    const rightHeight = this.height(this.root.right)

    // if left is larger or less than right by 1 or less, return true
    if (Math.abs(leftHeight - rightHeight) <= 1) return true
    // if not, return false
    return false
  }

  rebalance() {
    // rebalance an unbalanced tree
    const nodes = []
    this.inOrderForEach((node) => nodes.push(node.data))
    this.root = this.buildTree(nodes)
  }
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(testArray);
prettyPrint(tree.root);
// console.dir(tree, { depth: null });
console.log(tree.insert(20))
console.log(tree.insert(9))
console.log(tree.insert(100))
console.log(tree.insert(6))
prettyPrint(tree.root);
console.log(tree.deleteItem(20))
console.log(tree.deleteItem(100))
prettyPrint(tree.root);
console.log(tree.find(23))
console.log(tree.find(324))
console.log(tree.levelOrderForEach(node => console.log(node.data)))
console.log(tree.inOrderForEach(node => console.log(node.data)))
console.log(tree.preOrderForEach(node => console.log(node.data)))
console.log(tree.postOrderForEach(node => console.log(node.data)))
console.log(tree.height(tree.find(8)))
console.log(`depth is: ${tree.depth(324)}`)
prettyPrint(tree.root);
console.log(tree.isBalanced())
console.log(tree.rebalance())
prettyPrint(tree.root);


