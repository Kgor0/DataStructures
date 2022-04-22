/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right;
        }
        // node has no right child
        if (node.right == null) {
          return node.left;
        }
        // node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let Q = [];
    if (this.root != null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}
function run() {
const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());

  console.log("levelOrder: " + bst.levelOrder());
  console.log("Find Member: " + bst.find(22));
  console.log("Find Min: " + bst.findMin());
  console.log("Find Max: " + bst.findMax());
  console.log("Remove Member: " + bst.remove(20))
}


function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getmin = getmin;
  this.getmax = getmax;
  this.find = find;
  this.remove = remove;
  this.removeNode = removeNode;
  this.getSmallest = getSmallest;
  this.show = show;
}

function show() {
  return this.data;
}
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
      this.root = n;
  }
  else {
      var current = this.root;
      var parent;
      while (true) {
          parent = current;
          if (data < current.data) {
              current = current.left;
              if (current == null) {
                  parent.left = n;
                  break;
              }
          }
          else {
              current = current.right;
              if (current == null) {
                  parent.right = n;
                  break;
              }
          }
      }
  }
}

function inOrder(node) {
  if (!(node == null)) {
      inOrder(node.left);
      console.log(node.show() + " ");
      inOrder(node.right);
  }
}

function preOrder(node) {
  if (!(node == null)) {
      console.log(node.show() + " ");
      preOrder(node.left);
      preOrder(node.right);
  }
}

function postOrder(node) {
  if (!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show() + " ");
  }
}

function getmin() {
  var current = this.root;
  console.log("debug: " + current.data);
  while (!(current.left == null)) {
      current = current.left;
  }
  return current.data;
}

function getmax() {
  var current = this.root;
  while (!(current.right == null)) {
      current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while (current.data != data) {
      if (data < current.data) {
          current = current.left;
      }
      else {
          current = current.right;
      }
      if (current == null) {
          return null;
      }
  }
  return current;
}

function getSmallest(node) {
  if (node.left == null) {
      return node;
  }
  else {
      return getSmallest(node.left);
  }
}

function remove(data) {
  root = removeNode(this.root, data);
}

function removeNode(node, data) {
  if (node == null) {
      return null;
  }
  if (data == node.data) {
      // node has no children
      if (node.left == null && node.right == null) {
          return null;
      }
      // node has no left child
      if (node.left == null) {
          return node.right;
      }
      // node has no right child
      if (node.right == null) {
          return node.left;
      }
      // node has two children
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
  }
  else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
  }
  else {
      node.right = removeNode(node.right, data);
      return node;
  }
}


function run() {
  var nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(16);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(22);
  /*print("Inorder traversal: ");
  inOrder(nums.root);
  print("\n");
  print("Preorder traversal: ");
  preOrder(nums.root);
  print("\n");
  print("Postorder traversal: ");
  postOrder(nums.root);
  print("\n");
  var min = nums.getmin();
  print("The minimum value of the BST is: " + min);
  var max = nums.getmax();
  print("The maximum value of the BST is: " + max);
  inOrder(nums.root);
  print("\n");
  putstr("Enter a value to search for: ");
  var value = parseInt(readline());
  var found = nums.find(value);
  if (found != null) {
     print("Found " + value + " in the BST.");
  }
  else {
     print(value + " was not found in the BST.");
  }*/
  inOrder(nums.root);
  console.log("\n");
  var num = parseInt(prompt("Enter a number."));
  nums.remove(num);
  console.log(nums.show());
  inOrder(nums.root);

}