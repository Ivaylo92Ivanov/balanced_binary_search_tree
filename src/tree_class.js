import prettyPrint from "./prettyPrint";
import buildTree from "./buildTree";
import Node from "./node_class";
import Stack from "./stack";
import Queue from "./queue";

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
    this.delete = (value) => {
      console.log(`Delete value: ${value}`)
      if (this.root==null) { console.log("No such value found"); return; };
      prettyPrint(this.root)

    };


    this.preOrder = (callback=null, node=this.root) => {
      let nodeValuesArr = [];
      function recursiveIterator(callback, node) {
        if (node==null) return;
        callback ? callback(node) : nodeValuesArr.push(node.data);
        recursiveIterator(callback, node.left);
        recursiveIterator(callback, node.right);
      };
      recursiveIterator(callback, node);
      if (!callback) console.log(nodeValuesArr);
    };   

    this.postOrder = (callback=null, node=this.root) => {
      let nodeStack = new Stack();
      function recursiveIterator(node) {
        if (node==null) return;       
        nodeStack.push(node);
        recursiveIterator(node.right);
        recursiveIterator(node.left);
        
      };
      recursiveIterator(node);

      let nodeValuesArr = [];
      while(nodeStack.length>0) {
        let tempNode = nodeStack.pop();
        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);
      };

      if(!callback) console.log(nodeValuesArr);
    };

    this.inOrder = (callback=null, node=this.root) => {
      let nodeValuesArr = [];
      let nodeQueue = new Queue();
      function recursiveIterator(node) {
        if(node==null) return;
        recursiveIterator(node.left); 
        nodeQueue.enqueue(node);
        recursiveIterator(node.right); 
      }
      recursiveIterator(node);
  
      while (!nodeQueue.isEmpty()) {
        let tempNode = nodeQueue.dequeue().value ;
        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data)
      };

      if (!callback) console.log(nodeValuesArr);
    };

  };
};
