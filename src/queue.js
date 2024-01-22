class QueueNode {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  };
};

export default class Queue {
  constructor () {
    this.head = null;
    this.length = 0;

    this.enqueue = (value) => {
      if (!this.head) {
        this.head = new QueueNode(value);
      } else {
        let tempNode = this.head;
        while(tempNode.next) { tempNode=tempNode.next; }
        tempNode.next = new QueueNode(value);
      };
      this.length++;
    };

    this.dequeue = () => {
      if (this.length==0) return undefined;
      let dequeuedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return dequeuedNode;
    };

    this.peek = () => {
      return this.head
    };

    this.isEmpty = () => {
      return this.length==0 ? true : false;
    };
  };
};

