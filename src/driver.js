import Tree from "./tree_class";
import prettyPrint from "./prettyPrint";

// Write a driver script that does the following:
export default function driver() {

  // 1. Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
  let numberOfInitialValues = Math.floor(Math.random() * 20) + 10;
  let initialValuesSet = new Set();
  while( initialValuesSet.size<numberOfInitialValues ) { initialValuesSet.add(Math.floor(Math.random() * 99) +1) };
  let initialArr = Array.from(initialValuesSet);
  let tree = new Tree(initialArr);
  prettyPrint(tree.root);

  // 2. Confirm that the tree is balanced by calling isBalanced.
  console.log('Tree is balanced: ' + tree.isBalanced());

  // 3. Print out all elements in level, pre, post, and in order.
  console.log('Level Order: ' + tree.levelOrder());
  console.log('Pre Order: '+ tree.preOrder());
  console.log('Post Order: ' + tree.postOrder());
  console.log('In order: ' + tree.inOrder());

  // 4. Unbalance the tree by adding several numbers > 100.
  let numberOfExtraValues = Math.floor((Math.random() * 10) + 5);
  let extraValuesSet = new Set();
  while(extraValuesSet.size<numberOfExtraValues) (extraValuesSet.add((Math.floor(Math.random() * 100) +100)));
  let extraArr = Array.from(extraValuesSet);
  extraArr.forEach( (value) => tree.insert(value) );
  prettyPrint(tree.root);
  
  // 5. Confirm that the tree is unbalanced by calling isBalanced.
  console.log('Tree is balanced: ' + tree.isBalanced()); 

  // 6. Balance the tree by calling rebalance.
  tree.rebalance();
  prettyPrint(tree.root);

  // 7. Confirm that the tree is balanced by calling isBalanced.
  console.log('Tree is balanced: ' + tree.isBalanced()); 

  // 8. Print out all elements in level, pre, post, and in order.
  console.log('Level Order: ' + tree.levelOrder());
  console.log('Pre Order: '+ tree.preOrder());
  console.log('Post Order: ' + tree.postOrder());
  console.log('In order: ' + tree.inOrder());

};