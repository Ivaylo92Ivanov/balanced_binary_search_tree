import Node from "./node_class";

export default function buildTree(arr) {
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
  let leftArr = arr.slice(0, rootIdx);
  let rightArr = arr.slice(rootIdx+1);

  // create left and right subtrees
  let leftSubTree = buildTree(leftArr);
  let rightSubTree = buildTree(rightArr);

  // initialize the rootNode
  let rootNode = new Node(rootValue, leftSubTree, rightSubTree);
  
  return rootNode;
};