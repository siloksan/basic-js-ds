const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null;
  }
  push(element) {
    if (!this.head) {
      this.head = { element, next: null };
    } else {
      const newHead = { element, next: null };
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  pop() {
    if (!this.head) return;
    else {
      const deleteElement = this.head.element;
      this.head = this.head.next;
      return deleteElement;
    }
  }

  peek() {
    return this.head ? this.head.element : undefined;
  }
}

module.exports = {
  Stack,
};