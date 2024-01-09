const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};


class Node  {
  constructor (data, leftNode=null, rightNode=null) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
  }
}

class Tree {
  constructor (arr) {
    this.arr = arr;
    this.root = buildTree(arr);

    this.insert = (value) => {
      // console.log(this.root.data)
      if (this.root==null) { this.root=buildTree([value]); return; };
      let tempNode = this.root;
      let isPlaced = false;
      while(!isPlaced) {
        if (value==tempNode.data) { console.log(`Value "${value}" already in Tree`); return; };
        if (value<tempNode.data) {
          console.log(`the value ${value} is smaller than ${tempNode.data}, so moving left.`);
          if (tempNode.left) {
            tempNode=tempNode.left;
          } else {
            tempNode.left=new Node(value);
            break;
          };
        } else {
          console.log(`the value ${value} is bigger than ${tempNode.data}, so moving  right.`);
          if (tempNode.right) {
            tempNode=tempNode.right;
          } else {
            tempNode.right=new Node(value);
            break;
          };
          // tempNode.right ? tempNode=tempNode.right : tempNode.right=new Node(value);
        };
      }; 
      prettyPrint(this.root)     
    };


    this.delete = (value) => {
      console.log(`Delete value: ${value}`);
    }
  }

 
}

function buildTree(arr) {
  if (arr.length <1) return null;
  if (arr.length==1) return new Node(arr[0]);
  // remove duplicate values
  let setOfArr = new Set(arr);
  arr = Array.from(setOfArr);

  // sort the array
  arr.sort((a, b) => a - b);
  
  // find the center value and set as root value
  let rootIdx = Math.floor(arr.length/2);
  let rootValue = arr[rootIdx];

  // split the arr in left and right halves
  let leftArr = arr.slice(0, rootIdx)
  let rightArr = arr.slice(rootIdx+1)

  // create left and right subtrees
  let leftSubTree = buildTree(leftArr);
  let rightSubTree = buildTree(rightArr);

  // initialize the rootNode
  let rootNode = new Node(rootValue, leftSubTree, rightSubTree);
  
  return rootNode;
}



let a = new Tree([]) //[1, 2, 3, 4, 5, 6,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
a.insert(5);
a.insert(9);
a.insert(1); 

prettyPrint(a.root)
console.log(a.root)
