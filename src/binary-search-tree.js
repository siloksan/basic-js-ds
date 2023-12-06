const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.binaryTree = null;
  }

  root() {
    return this.binaryTree;
  }

  add(data) {
    const node = new Node(data);
    if (this.binaryTree === null) {
      this.binaryTree = node;
      return;
    }

    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    // go through all the nodes
    while (currentNodeData !== null) {
      if (data < currentNodeData) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        }
        currentNodeData = currentNode.left.data;
        currentNode = currentNode.left;
      } else if (data > currentNodeData) {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNodeData = currentNode.right.data;
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (this.binaryTree === null || data === undefined) {
      return false;
    }

    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    while (currentNodeData !== null) {
      if (data === currentNodeData) {
        return true;
      }
      if (data < currentNodeData) {
        if (currentNode.left === null) {
          return false;
        }
        currentNodeData = currentNode.left.data;
        currentNode = currentNode.left;
      } else if (data > currentNodeData) {
        if (currentNode.right === null) {
          return false;
        }
        currentNodeData = currentNode.right.data;
        currentNode = currentNode.right;
      }
    }
  }

  find(data) {
    if (this.binaryTree === null || data === undefined) {
      return null;
    }

    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    while (currentNodeData !== null) {
      if (data === currentNodeData) {
        return currentNode;
      }
      if (data < currentNodeData) {
        if (currentNode.left === null) {
          return null;
        }
        currentNodeData = currentNode.left.data;
        currentNode = currentNode.left;
      } else if (data > currentNodeData) {
        if (currentNode.right === null) {
          return null;
        }
        currentNodeData = currentNode.right.data;
        currentNode = currentNode.right;
      }
    }
  }

  remove(data) {
    if (this.binaryTree === null || data === undefined) {
      return;
    }

    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    let prevNode = this.binaryTree;

    while (currentNodeData !== null) {
      if (
        data === currentNodeData &&
        currentNode.right === null &&
        currentNode.left === null
      ) {
        prevNode.data > data ? (prevNode.left = null) : (prevNode.right = null);
        return;
      }
      if (data === currentNodeData && currentNode.left === null) {
        prevNode.right = currentNode.right;
        return;
      }
      if (data === currentNodeData && currentNode.right === null) {
        prevNode.right = currentNode.left;
        return;
      }
      if (data === currentNodeData) {
        // ---------search_max_left--------
        let toBeDeleted = currentNode;
        currentNode = toBeDeleted.left;
        currentNodeData = currentNode.data;
        if (currentNode.right === null) {
          toBeDeleted.data = currentNode.data;
          toBeDeleted.left = currentNode.left;
          return;
        }
        while (currentNodeData !== null) {
          prevNode = currentNode;
          currentNode = currentNode.right;
          currentNodeData = currentNode.data;
          if (currentNode.right === null) {
            toBeDeleted.data = currentNode.data;
            if (currentNode.left !== null) {
              currentNode.data = currentNode.left.data;
              currentNode.right = currentNode.left.right;
              currentNode.left = currentNode.left.left;
            }
            prevNode.right = null;
            return;
          }
        }
        //----------------------------
      }
      if (data < currentNodeData) {
        if (currentNode.left === null) {
          return;
        }
        prevNode = currentNode;
        currentNodeData = currentNode.left.data;
        currentNode = currentNode.left;
      } else if (data > currentNodeData) {
        if (currentNode.right === null) {
          return null;
        }
        prevNode = currentNode;
        currentNodeData = currentNode.right.data;
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    if (this.binaryTree === null) {
      return null;
    }
    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    while (currentNodeData !== null) {
      if (currentNode.left === null) {
        return currentNode.data;
      }
      currentNode = currentNode.left;
      currentNodeData = currentNode.data;
    }
  }

  max() {
    if (this.binaryTree === null) {
      return null;
    }
    let currentNode = this.binaryTree;
    let currentNodeData = currentNode.data;
    while (currentNodeData !== null) {
      if (currentNode.right === null) {
        return currentNode.data;
      }
      currentNode = currentNode.right;
      currentNodeData = currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};

// const tree = new BinarySearchTree();

// tree.add(10);
// tree.add(2);
// tree.add(20);
// tree.add(1);
// tree.add(15);
// tree.add(13);
// tree.add(11);
// tree.add(14);
// tree.add(18);
// tree.add(16);
// tree.add(17);
// tree.add(19);
// tree.add(30);
// tree.add(25);
// tree.add(35);
// tree.add(3);
// tree.add(0);
// console.log("tree.has(20): ", tree.has(20));
// tree.remove(20);
// // console.log("tree.min(): ", tree.min());
// // console.log("tree.max(): ", tree.max());
// console.log("tree.has(20) after remove: ", tree.has(20));

// console.log("tree.root().data: ", tree.root().data);
// console.log("tree.root().data: ", tree.root());
