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


class QueueNode {
  constructor(value=null, next=null) {
    this.value = value;
    this.next = next;
  };
};

let a = new Queue();
a.enqueue(1)
a.enqueue(2)
a.enqueue(3)
a.enqueue(4)