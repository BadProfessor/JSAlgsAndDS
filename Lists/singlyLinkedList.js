// defining a class
// defining a head, tail, lenght
const singlyLinkedList = {
  // start
  head: null,
  // addition
  tail: null,
  // total
  length: 0,

  // push method
  push(val) {
    // defining new nodes
    const newNode = node(val);

    //if it is an empty list
    if (!this.head) {
      // define the head and the tail in the new node
      this.head = newNode;
      this.tail = this.head;
      // otherwise take the new property and push as the node
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment the length
    this.length++;
    // return the object
    return this;
  },

  pop() {
    if (!this.head) {
      return undefined;
    }

    // create our current and previous nodes for traversing.
    // initially they are set to the same (head) node.
    let curr = this.head;
    let prev = curr;

    // while the next prop of our curr is not null, traverse our list
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    // perform the pop
    prev.next = null;
    this.tail = prev;

    // decrement length and check if head needs to be reset to null
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  },

  shift() {
    if (!this.head) {
      return undefined;
    }

    let headNode = this.head;
    this.head = headNode.next;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return headNode;
  },

  unshift(val) {
    let newNode = node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  },

  get(index) {
    //
    if (index < 0 || index >= this.length) {
      return null;
    }

    // start at 0
    let counter = 0;
    let currentNode = this.head;
    // while counter is not equal to index
    while (counter != index) {
      // we change the counter to next
      currentNode = currentNode.next;
      // increment with ++
      counter++;
    }

    return currentNode;
  },

  // set accepts position and a value
  set(index, val) {
    // return the found node and update the value
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  },

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index == 0) {
      return !!this.unshift(val); // double bang here simply coerces result to bool
    }

    if (index == this.length) {
      // push the vals
      return !!this.push(val);
    }

    let newNode = node(val);
    let prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  },

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index == 0) {
      return this.shift();
    }

    if (index == this.length - 1) {
      return this.pop();
    }

    let prevNode = this.get(index - 1);
    let nodeRemoved = prevNode.next;
    prevNode.next = nodeRemoved.next;
    this.length--;
    return nodeRemoved.val;
  },

  reverse() {
    // swap head and tail
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next;
    let i = 0;

    // loop through and perform the link swapping
    for (i; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return this;
  },

  getState() {
    return {
      head: this.head,
      tail: this.tail,
      length: this.length
    };
  }
};

function node(val) {
  return {
    val,
    next: null
  };
}

singlyLinkedList.push(10);
singlyLinkedList.push(5);
singlyLinkedList.push(13);
singlyLinkedList.push(900);
singlyLinkedList.push(33);

console.log(singlyLinkedList.getState());

singlyLinkedList.pop();
console.log(singlyLinkedList.getState());

console.log(singlyLinkedList.shift());
console.log(singlyLinkedList.getState());

singlyLinkedList.unshift(25);
console.log(singlyLinkedList.getState());

console.log(singlyLinkedList.get(3));

singlyLinkedList.set(0, 1);
console.log(singlyLinkedList.getState());

singlyLinkedList.insert(1, 22);
console.log(singlyLinkedList.getState());

singlyLinkedList.remove(1);
console.log(singlyLinkedList.getState());

singlyLinkedList.reverse();
console.log(singlyLinkedList.getState());
