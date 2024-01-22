class StackNode {
  constructor (value=null, next=null) {
      this.value = value;
      this.next = next;
  }
}

export default class Stack {
  constructor () {
      this.top = new StackNode;
      this.length = 0;     
      
      this.push = (value) => {
        this.top = new StackNode(value, this.top);
        this.length++;
        return;
      }

      this.pop = () => {
        if (this.length==0) { return undefined };
        let poppedNode = this.top.value;
        this.top = this.top.next;
        this.length--;
        return poppedNode;
        
      };
  };
};
