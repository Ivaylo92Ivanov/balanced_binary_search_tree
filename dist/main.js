/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildTree.js":
/*!**************************!*\
  !*** ./src/buildTree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildTree)\n/* harmony export */ });\n/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_class */ \"./src/node_class.js\");\n\n\nfunction buildTree(arr) {\n  if (arr.length <1) return null;\n  if (arr.length==1) return new _node_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"](arr[0]);\n\n  // remove duplicate values\n  let setOfArr = new Set(arr);\n  arr = Array.from(setOfArr);\n\n  // sort the array\n  arr.sort((a, b) => a - b);\n  \n  // find the center value and set as root value\n  let rootIdx = Math.floor(arr.length/2);\n  let rootValue = arr[rootIdx];\n\n  // split the arr in left and right halves\n  let leftArr = arr.slice(0, rootIdx);\n  let rightArr = arr.slice(rootIdx+1);\n\n  // create left and right subtrees\n  let leftSubTree = buildTree(leftArr);\n  let rightSubTree = buildTree(rightArr);\n\n  // initialize the rootNode\n  let rootNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rootValue, leftSubTree, rightSubTree);\n  \n  return rootNode;\n};\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/buildTree.js?");

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ driver)\n/* harmony export */ });\n/* harmony import */ var _tree_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_class */ \"./src/tree_class.js\");\n/* harmony import */ var _prettyPrint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettyPrint */ \"./src/prettyPrint.js\");\n\n\n\n\nfunction driver() {\n  let a = new _tree_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90])\n  // let a = new Tree([7, 8, 16, 24, 25])\n  \n  ;(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a.root)\n  \n  a.delete(25)\n  a.delete(31)\n  a.delete(35)\n  a.delete(50)\n  a.insert(45)\n  ;(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a.root)\n}\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/driver.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ \"./src/driver.js\");\n\n// import Node from \"./node_class\";\n// import Tree from \"./tree_class\";\n// import prettyPrint from \"./prettyPrint\";\n\n\n(0,_driver__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/index.js?");

/***/ }),

/***/ "./src/node_class.js":
/*!***************************!*\
  !*** ./src/node_class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Node)\n/* harmony export */ });\nclass Node  {\n  constructor (data, leftNode=null, rightNode=null) {\n    this.data = data;\n    this.left = leftNode;\n    this.right = rightNode;\n    this.hasChildren = () => { return ((this.left==null && this.right==null) ? false : true) };\n  };\n};\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/node_class.js?");

/***/ }),

/***/ "./src/prettyPrint.js":
/*!****************************!*\
  !*** ./src/prettyPrint.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\nfunction prettyPrint(node, prefix = \"\", isLeft = true) {\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  };\n};\n\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/prettyPrint.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Queue)\n/* harmony export */ });\nclass Queue {\n  constructor () {\n    this.head = null;\n    this.length = 0;\n\n    this.enqueue = (value) => {\n      if (!this.head) {\n        this.head = new QueueNode(value);\n      } else {\n        let tempNode = this.head;\n        while(tempNode.next) { tempNode=tempNode.next; }\n        tempNode.next = new QueueNode(value);\n      };\n      this.length++;\n    };\n\n    this.dequeue = () => {\n      if (this.length==0) return undefined;\n      let dequeuedNode = this.head;\n      this.head = this.head.next;\n      this.length--;\n      return dequeuedNode;\n    };\n\n    this.peek = () => {\n      return this.head\n    };\n\n    this.isEmpty = () => {\n      return this.length==0 ? true : false;\n    };\n  };\n};\n\n\nclass QueueNode {\n  constructor(value=null, next=null) {\n    this.value = value;\n    this.next = next;\n  };\n};\n\nlet a = new Queue();\na.enqueue(1)\na.enqueue(2)\na.enqueue(3)\na.enqueue(4)\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/queue.js?");

/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Stack)\n/* harmony export */ });\nclass StackNode {\n  constructor (value=null, next=null) {\n      this.value = value;\n      this.next = next;\n  }\n}\n\nclass Stack {\n  constructor () {\n      this.top = new StackNode;\n      this.length = 0;     \n      \n      this.push = (value) => {\n        this.top = new StackNode(value, this.top);\n        this.length++;\n        return;\n      }\n\n      this.pop = () => {\n        if (this.length==0) { return undefined };\n        let poppedNode = this.top.value;\n        this.top = this.top.next;\n        this.length--;\n        return poppedNode;\n        \n      };\n  };\n};\n\n\n// testcode\n// let stack = new Stack()\n// stack.push(1)\n// stack.push(2)\n// stack.push(3)\n// stack.push(4)\n// stack.push(5)\n\n\n\n\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/stack.js?");

/***/ }),

/***/ "./src/tree_class.js":
/*!***************************!*\
  !*** ./src/tree_class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _prettyPrint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyPrint */ \"./src/prettyPrint.js\");\n/* harmony import */ var _buildTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildTree */ \"./src/buildTree.js\");\n/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_class */ \"./src/node_class.js\");\n/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stack */ \"./src/stack.js\");\n/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queue */ \"./src/queue.js\");\n\n\n\n\n\n\nclass Tree {\n  constructor (arr) {\n    this.arr = arr;\n    this.root = (0,_buildTree__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr);\n\n    this.insert = (value) => {\n      if (this.root==null) { this.root=(0,_buildTree__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([value]); return; };\n      let tempNode = this.root;\n      let isPlaced = false;\n      while(!isPlaced) { \n        if (value==tempNode.data) { console.log(`Value \"${value}\" already in Tree`); return; };\n        if (value<tempNode.data) {\n          if (tempNode.left) {\n            tempNode=tempNode.left;\n          } else {\n            tempNode.left=new _node_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](value);\n            isPlaced=true;\n          };\n        } else {\n          if (tempNode.right) {\n            tempNode=tempNode.right;\n          } else {\n            tempNode.right=new _node_class__WEBPACK_IMPORTED_MODULE_2__[\"default\"](value);\n            isPlaced=true;\n          };\n        };\n      }; \n    };\n\n    // still to implement delete function\n    this.delete = (value) => {\n      if (this.find(value) == undefined) { console.log(\"No such value in tree\"); return; };\n      console.log(`to delete ${value}`)\n      // declaring self, so we can access 'this.root' by calling 'self.root' from inside the function scope\n      let self = this; \n      let prevNode = null;\n      function traverseTree(rootNode, value) {\n        if (rootNode==null) return;\n\n        if (value<rootNode.data && rootNode.left) {\n          prevNode=rootNode;\n          traverseTree(rootNode.left, value);\n        } else if (value>rootNode.data && rootNode.right) {\n          prevNode=rootNode;\n          traverseTree(rootNode.right, value);\n        } else if(rootNode.data==value) {\n          // removing root if there are no children\n          if (!rootNode.hasChildren() && prevNode==null) {\n            self.root=null;\n            return;\n          } else if (!rootNode.hasChildren() && prevNode!=null) {\n            // remove a leaf node\n            if(prevNode.left==rootNode) prevNode.left=null;\n            if(prevNode.right==rootNode) prevNode.right=null;\n            return;\n          } else if (!rootNode.left || !rootNode.right) {\n            //remove a node with one child\n            !rootNode.left ? prevNode.right = rootNode.right : prevNode.left = rootNode.left;\n            return;\n          } else {\n            // remove a node with two children\n            prevNode=rootNode;\n            // go right from the 'to be deleted node' and find the most leftside node\n            let tempNode = rootNode.right;\n            while(tempNode.left!=null) { \n              prevNode = tempNode;\n              tempNode = tempNode.left;\n            };\n            // if the most leftside node is an immediate child of 'to be deleted node'\n            if(rootNode!=prevNode) {\n              tempNode.right ? prevNode.left = tempNode.right : prevNode.left=null;\n              //swap rootNode and tempNode values\n              let newRootData = tempNode.data;\n              let newTempData = rootNode.data;\n              rootNode.data  = newRootData;\n              tempNode.data = newTempData;\n            } else {\n              if(tempNode.right) {\n                rootNode.data = tempNode.data;\n                rootNode.right = tempNode.right;\n              } else {\n                console.log('here')\n                rootNode.data = tempNode.data;\n                rootNode.right = null;\n              };\n            };\n            return;\n          };\n        };\n      };\n\n    traverseTree(this.root, value)\n    ;(0,_prettyPrint__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.root)\n  };\n\n    //accepts a value and returns the node with the given value\n    this.find = (value) => {\n      let resultNode = undefined;\n\n      function recursiveSearch(value, node) {\n        if(node==null) return;\n        if(node.data==value) {\n          resultNode = node;\n          return;\n        } else {\n          recursiveSearch(value, node.left);\n          recursiveSearch(value, node.right);\n        };\n      };\n\n      recursiveSearch(value, this.root);\n      return resultNode;\n    };\n\n    this.levelOrder = (callback=null, node=this.root) => {\n      if (!node) {\n        if (callback) {\n          return;\n        } else {\n          console.log([]); \n          return;\n        };\n      };\n\n      let nodesArr = [node];\n      let nodeValuesArr = [node.data];\n      let nodeQueue = new _queue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n      function levelOrderRecIterator(node) {\n        if (node==null) return;\n        if (node.left) nodeQueue.enqueue(node.left);\n        if (node.right) nodeQueue.enqueue(node.right);\n        while (!nodeQueue.isEmpty()) {\n          let tempNode = nodeQueue.dequeue().value;\n          nodesArr.push(tempNode);\n          nodeValuesArr.push(tempNode.data);\n          levelOrderRecIterator(tempNode);\n        };\n      };\n      \n      levelOrderRecIterator(node);\n      callback ? nodesArr.forEach((node) => callback(node)) : console.log(nodeValuesArr);\n    };\n\n    this.preOrder = (callback=null, node=this.root) => {\n      let nodeValuesArr = [];\n\n      function preOrderRecIterator(callback, node) {\n        if (node==null) return;\n        callback ? callback(node) : nodeValuesArr.push(node.data);\n        preOrderRecIterator(callback, node.left);\n        preOrderRecIterator(callback, node.right);\n      };\n\n      preOrderRecIterator(callback, node);\n      if (!callback) console.log(nodeValuesArr);\n    };   \n\n    this.postOrder = (callback=null, node=this.root) => {\n      let nodeStack = new _stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n      function postOrderRecIterator(node) {\n        if (node==null) return;       \n        nodeStack.push(node);\n        postOrderRecIterator(node.right);\n        postOrderRecIterator(node.left);\n      };\n      \n      postOrderRecIterator(node);\n      let nodeValuesArr = [];\n      while(nodeStack.length>0) {\n        let tempNode = nodeStack.pop();\n        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);\n      };\n\n      if(!callback) console.log(nodeValuesArr);\n    };\n\n    this.inOrder = (callback=null, node=this.root) => {\n      let nodeQueue = new _queue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n\n      function inOrderRecIterator(node) {\n        if(node==null) return;\n        inOrderRecIterator(node.left); \n        nodeQueue.enqueue(node);\n        inOrderRecIterator(node.right); \n      };\n\n      inOrderRecIterator(node);\n      let nodeValuesArr = [];\n      while (!nodeQueue.isEmpty()) {\n        let tempNode = nodeQueue.dequeue().value;\n        callback ? callback(tempNode) : nodeValuesArr.push(tempNode.data);\n      };\n\n      if (!callback) console.log(nodeValuesArr);\n    };\n\n  };\n};\n\n\n//# sourceURL=webpack://balanced_binary_search_tree/./src/tree_class.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;