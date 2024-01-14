import prettyPrint from "./prettyPrint";
import buildTree from "./buildTree";
import Node from "./node_class";
import Stack from "./stack";

export default class Tree {
  constructor (arr) {
    this.arr = arr;
    this.root = buildTree(arr);

    this.insert = (value) => {
      if (this.root==null) { this.root=buildTree([value]); return; };
      let tempNode = this.root;
      let isPlaced = false;
      while(!isPlaced) { 
        if (value==tempNode.data) { console.log(`Value "${value}" already in Tree`); return; };
        if (value<tempNode.data) {
          if (tempNode.left) {
            tempNode=tempNode.left;
          } else {
            tempNode.left=new Node(value);
            isPlaced=true;
          };
        } else {
          if (tempNode.right) {
            tempNode=tempNode.right;
          } else {
            tempNode.right=new Node(value);
            isPlaced=true;
          };
        };
      }; 
    };
    
    // still to implement delete function
    // at moment using to test pre/post/in Order traversals
    this.delete = (value) => {
      console.log(`Delete value: ${value}`)
      if (this.root==null) { console.log("No such value found"); return; };
      prettyPrint(this.root)

      // testing pre/post/in Order functions
      function logs(value) { console.log(`callback ${value.data}`) };
      this.postOrderTraversal(this.root, logs);
      this.postOrderTraversal(this.root);

    };

    this.preOrderTraversal = (node, callback=null) => {
      let nodeValuesArr = [];
      function recursiveIterator(node, callback) {
        if (node==null) return;
        callback ? callback(node) : nodeValuesArr.push(node.data);
        recursiveIterator(node.left, callback);
        recursiveIterator(node.right, callback);
      };
      recursiveIterator(node, callback);
      if (!callback) console.log(nodeValuesArr);
    };   


    this.postOrderTraversal = (node, callback=null) => {
      let orderStack = new Stack();
      function recursiveIterator(node) {
        if (node==null) return;       
        orderStack.push(node);
        recursiveIterator(node.right);
        recursiveIterator(node.left);
        
      };
      recursiveIterator(node);

      let nodeValuesArr = [];
      while(orderStack.length>0) {
        let tempNode = orderStack.pop();
        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);
      }
      if (!callback) console.log(nodeValuesArr);
    };

    // to implement
    this.inOrderTraversal = (node, callback=null) => {
      let nodeValuesArr = [];


      if (!callback) console.log(nodeValuesArr);
    };

  };
};
