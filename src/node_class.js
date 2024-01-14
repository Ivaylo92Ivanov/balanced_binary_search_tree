export default class Node  {
  constructor (data, leftNode=null, rightNode=null) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
    this.hasChildren = () => { return ((this.left==null && this.right==null) ? true : false) }
  };
};