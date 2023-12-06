const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let currentNode = l;
  if (currentNode.value === k && currentNode.next === null) {
    l = null;
  }
  let prevNode = null;
  let nextNode = currentNode.next;
  while (currentNode) {
    while (currentNode && currentNode.value === k) {
      if (nextNode !== null) {
        currentNode.value = nextNode.value;
        currentNode.next = nextNode.next;
        nextNode = currentNode.next;
      } else {
        prevNode.next = null;
        currentNode = nextNode;
      }
    }
    prevNode = currentNode;
    currentNode = nextNode;
    if (currentNode !== null) {
      nextNode = currentNode.next;
    }
  }
  return l;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

module.exports = {
  removeKFromList,
};

// let list = convertArrayToList([3, 2]);
// console.log("1) list [3, 2], expected [2]:", removeKFromList(list, 3));
// list = convertArrayToList([3, 3, 2]);
// console.log("2) list [3, 3, 2], expected [2]:", removeKFromList(list, 3));
// list = convertArrayToList([2, 3]);
// console.log("3) list [2, 3], expected [2]:", removeKFromList(list, 3));
// list = convertArrayToList([2, 3, 3]);
// console.log("4) list [2, 3, 3], expected [2]:", removeKFromList(list, 3));
// list = convertArrayToList([2, 3, 1]);
// console.log("5) list [2, 3, 1], expected [2, 1]:", removeKFromList(list, 3));