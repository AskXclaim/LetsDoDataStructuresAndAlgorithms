// import {LinkedList} from "./Lessons";
// import {DoublyLinkedList} from "./Lessons";

import {BubbleSort, SelectionSort} from "./Lessons";
// const largeCollection= new Array(1000).fill("none");
// const started = performance.now();
// const result = Nemo.IsNemoPresent(largeCollection);
// const ended= performance.now();
// console.log(`It took ${ended-started} mill seconds`);

// const arrayOne: number[] = [1, 2, 3];
// const arrayTwo: number[] = [1, 2, 3,4];
// const mergedArray = Interview.MergeArray(arrayOne, arrayTwo);
// console.log(mergedArray);

// const hashTable = new HashTable(2);
//  hashTable.set('grapes', 10000);
//  hashTable.set('pawpaw', 45);
//  hashTable.set('Pineapples', 100);
//  console.log(hashTable.getHashTable());
//  const result= hashTable.get('grapes');
//  console.log(result);
//  hashTable.set("",0);

// const myLinkedList = new LinkedList(10);
// let result = myLinkedList.append(5);
// myLinkedList.append(16);
// console.log(result);
// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
// console.log(result);


// const myDoublyLinkedList = new DoublyLinkedList(10);
// // console.log(myDoublyLinkedList);
// let result = myDoublyLinkedList.append(5);
// myDoublyLinkedList.append(16); 
// // console.log(result);
// myDoublyLinkedList.prepend(1);
// myDoublyLinkedList.insert(2, 99);
// myDoublyLinkedList.insert(20, 88);
// myDoublyLinkedList.remove(2);
// console.log(result);

// const myStack = new Stack();
// myStack.push(1);
// let result: any = myStack.push(2);
// console.log(result);
// result = myStack.peek();
// console.log(result);
// result = myStack.push(3);
// console.log(result);
//  myStack.pop();
//  myStack.pop();
//  myStack.pop();

// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// let result: any = myQueue.enqueue(3);
// console.log(result);
// result = myQueue.peek();
// console.log(result);
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

// const binaryTree = new BinarySearchTree();
// let result = binaryTree.insert(9);
// binaryTree.insert(4);
// binaryTree.insert(6);
// binaryTree.insert(20);
// binaryTree.insert(170);
// binaryTree.insert(15);
// binaryTree.insert(1);
// binaryTree.insert(170);
// console.log(result);
//
// const lookUpResult = binaryTree.lookup(20);
//
// console.log(lookUpResult);
//
// JSON.stringify(binaryTree.traverse(binaryTree.root!));
// console.log(JSON.stringify(binaryTree.traverse(binaryTree.root!)));

// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');
//
// myGraph.showConnections(); 

// const factorial = findFactorialIteratively(5);
// const recursivelyGottenFactorial = findFactorialRecursively(5);
//
// console.log(factorial);
// console.log(recursivelyGottenFactorial);

// const iterativelyValue = getValueOfFibonacciIndexIteratively(5);
// const recursivelyValue = getValueOfFibonacciIndexRecursively(1);
//
// console.log(iterativelyValue);
// console.log(recursivelyValue);

// const  bubbleSortResult = BubbleSort.sort([6,5,3,1,8,7,2,4]);
// console.log(bubbleSortResult);

const selectionSortResult = SelectionSort.sort([6, 5, 3, 1, 8, 7, 2, 4]);
console.log(selectionSortResult);