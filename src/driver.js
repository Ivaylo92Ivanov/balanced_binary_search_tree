import Tree from "./tree_class";
import prettyPrint from "./prettyPrint";


export default function driver() {
  let a = new Tree([25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]) // [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
  

  // a.insert(50);
  // a.insert(70);
  // a.insert(30); 
  // a.insert(40); 
  // a.insert(60); 
  // a.insert(20); 
  // a.insert(80); 

  // a.insert(75); 
  // a.insert(85); 
  // a.insert(15);
  // a.insert(25);
  // a.insert(35);
  // a.insert(45);
  // a.insert(55);
  // a.insert(65);
  a.delete(20)
  // console.log('InOrder:')
  // a.inOrder()
  // console.log('postOrder:')
  // a.postOrder();
  // console.log('preOrder:')
  // a.preOrder();
  console.log('levelOrder:')
  a.levelOrder();
}