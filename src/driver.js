import Tree from "./tree_class";
import prettyPrint from "./prettyPrint";


export default function driver() {
  let a = new Tree([25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90])
  // let a = new Tree([])
  prettyPrint(a.root)
  
  console.log(a.find(90));


  // function log(num) {
  //   console.log(num)
  // }
  
  // console.log('InOrder:')
  // a.inOrder(log)
  // a.inOrder()

  // console.log('postOrder:')
  // a.postOrder(log);
  // a.postOrder();

  // console.log('preOrder:')
  // a.preOrder(log);
  // a.preOrder();
  
  // console.log('levelOrder:')
  // a.levelOrder(log);
  // a.levelOrder();
}