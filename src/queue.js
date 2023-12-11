const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (!currentNode.next) {
          currentNode.next = new ListNode(value);
          return;
        }
        currentNode = currentNode.next;
      }
      const newHead = new ListNode(value)
      this.head.next = newHead;
    }
  }

  dequeue() {
    if (this.head) {
      const newHead = this.head;
      this.head = newHead.next;
      return newHead.value;
    } else {

    }
    return null;
  }
}

module.exports = {
  Queue,
};

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue()

console.log(queue.getUnderlyingList());
