import Tree from "./tree_class";
import prettyPrint from "./prettyPrint";


export default function driver() {
  let a = new Tree([25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90])
  // let a = new Tree([7, 8, 16, 24, 25])
  
  prettyPrint(a.root)
  
  a.delete(25)
  a.delete(31)
  a.delete(35)
  a.delete(50)
  a.insert(45)
  prettyPrint(a.root)
}