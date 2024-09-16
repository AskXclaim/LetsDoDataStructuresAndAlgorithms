import {LinkedList} from "./Lessons";

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

const myLinkedList = new LinkedList(10);
let result = myLinkedList.append(5);
myLinkedList.append(16);
console.log(result);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(result);


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



 
 
