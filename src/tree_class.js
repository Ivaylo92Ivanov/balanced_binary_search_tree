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
      prettyPrint(this.root);
    };

    this.delete = (value) => {
      if (this.find(value) == undefined) { console.log("No such value in tree"); return; };
      console.log(`to delete ${value}`)
      // declaring self, so we can access 'this.root' by calling 'self.root' from inside the function scope
      let self = this; 
      let prevNode = null;
      function traverseTree(rootNode, value) {
        if (rootNode==null) return;

        if (value<rootNode.data && rootNode.left) {
          prevNode=rootNode;
          traverseTree(rootNode.left, value);
        } else if (value>rootNode.data && rootNode.right) {
          prevNode=rootNode;
          traverseTree(rootNode.right, value);
        } else if(rootNode.data==value) {
          // removing root if there are no children
          if (!rootNode.hasChildren() && prevNode==null) {
            self.root=null;
            return;
          } else if (!rootNode.hasChildren() && prevNode!=null) {
            // remove a leaf node
            if(prevNode.left==rootNode) prevNode.left=null;
            if(prevNode.right==rootNode) prevNode.right=null;
            return;
          } else if (!rootNode.left || !rootNode.right) {
            //remove a node with one child
            !rootNode.left ? prevNode.right = rootNode.right : prevNode.left = rootNode.left;
            return;
          } else {
            // remove a node with two children
            prevNode=rootNode;
            // go right from the 'to be deleted node' and find the most leftside node
            let tempNode = rootNode.right;
            while(tempNode.left!=null) { 
              prevNode = tempNode;
              tempNode = tempNode.left;
            };
            // if the most leftside node is an immediate child of 'to be deleted node'
            if(rootNode!=prevNode) {
              tempNode.right ? prevNode.left = tempNode.right : prevNode.left=null;
              //swap rootNode and tempNode values
              let newRootData = tempNode.data;
              let newTempData = rootNode.data;
              rootNode.data  = newRootData;
              tempNode.data = newTempData;
            } else {
              if(tempNode.right) {
                rootNode.data = tempNode.data;
                rootNode.right = tempNode.right;
              } else {
                console.log('here')
                rootNode.data = tempNode.data;
                rootNode.right = null;
              };
            };
            return;
          };
        };
      };

    traverseTree(this.root, value)
    prettyPrint(this.root)
  };

    //accepts a value and returns the node with the given value
    this.find = (value) => {
      let resultNode = undefined;

      function recursiveSearch(value, node) {
        if(node==null) return;
        if(node.data==value) {
          resultNode = node;
          return;
        } else {
          recursiveSearch(value, node.left);
          recursiveSearch(value, node.right);
        };
      };

      recursiveSearch(value, this.root);
      return resultNode;
    };

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
