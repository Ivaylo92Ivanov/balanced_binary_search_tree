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
      prettyPrint(this.root);

    };

    //accepts a value and returns the node with the given value
    this.find = (value) => {
      let tempNode = this.root;
      let resultNode = undefined;
      function findRec(value, node) {
        if(node==null) return;
        if(node.data==value) {
          resultNode = node;
        } else {
          findRec(value, node.left);
          findRec(value, node.right);
        };
      };
      findRec(value, tempNode);

      return resultNode;

    }

    this.levelOrder = (callback=null, node=this.root) => {
      if (!node) {
        if (callback) {
          return;
        } else {
          console.log([]); 
          return;
        };
      };

      let nodesArr = [node];
      let nodeValuesArr = [node.data];
      let nodeQueue = new Queue();

      function levelOrderRecIterator(node) {
        if (node==null) return;
        if (node.left) nodeQueue.enqueue(node.left);
        if (node.right) nodeQueue.enqueue(node.right);
        while (!nodeQueue.isEmpty()) {
          let tempNode = nodeQueue.dequeue().value;
          nodesArr.push(tempNode);
          nodeValuesArr.push(tempNode.data);
          levelOrderRecIterator(tempNode);
        };
      };
      
      levelOrderRecIterator(node);
      callback ? nodesArr.forEach((node) => callback(node)) : console.log(nodeValuesArr);
    };

    this.preOrder = (callback=null, node=this.root) => {
      let nodeValuesArr = [];

      function preOrderRecIterator(callback, node) {
        if (node==null) return;
        callback ? callback(node) : nodeValuesArr.push(node.data);
        preOrderRecIterator(callback, node.left);
        preOrderRecIterator(callback, node.right);
      };

      preOrderRecIterator(callback, node);
      if (!callback) console.log(nodeValuesArr);
    };   

    this.postOrder = (callback=null, node=this.root) => {
      let nodeStack = new Stack();

      function postOrderRecIterator(node) {
        if (node==null) return;       
        nodeStack.push(node);
        postOrderRecIterator(node.right);
        postOrderRecIterator(node.left);
      };
      
      postOrderRecIterator(node);
      let nodeValuesArr = [];
      while(nodeStack.length>0) {
        let tempNode = nodeStack.pop();
        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);
      };

      if(!callback) console.log(nodeValuesArr);
    };

    this.inOrder = (callback=null, node=this.root) => {
      let nodeQueue = new Queue();

      function inOrderRecIterator(node) {
        if(node==null) return;
        inOrderRecIterator(node.left); 
        nodeQueue.enqueue(node);
        inOrderRecIterator(node.right); 
      };

      inOrderRecIterator(node);
      let nodeValuesArr = [];
      while (!nodeQueue.isEmpty()) {
        let tempNode = nodeQueue.dequeue().value;
        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);
      };

      if (!callback) console.log(nodeValuesArr);
    };

  };
};
