import Tree from "./tree_class";
import prettyPrint from "./prettyPrint";


export default function driver() {
  let a = new Tree([]) //[1, 2, 3, 4, 5, 6,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
  a.insert(50);
  a.insert(70);
  a.insert(30); 
  a.insert(40); 
  a.insert(60); 
  a.insert(20); 
  a.insert(80); 

  a.delete(20) // test
  
}