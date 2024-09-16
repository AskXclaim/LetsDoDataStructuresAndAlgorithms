import {HashTable, Interview, Nemo} from "./Lessons";

// const largeCollection= new Array(1000).fill("none");
// const started = performance.now();
// const result = Nemo.IsNemoPresent(largeCollection);
// const ended= performance.now();
// console.log(`It took ${ended-started} mill seconds`);

// const arrayOne: number[] = [1, 2, 3];
// const arrayTwo: number[] = [1, 2, 3,4];
// const mergedArray = Interview.MergeArray(arrayOne, arrayTwo);
// console.log(mergedArray);

const hashTable = new HashTable(2);
 hashTable.set('grapes', 10000);
 hashTable.set('pawpaw', 45);
 hashTable.set('Pineapples', 100);
 console.log(hashTable.getHashTable());
 const result= hashTable.get('grapes');
 console.log(result);
 hashTable.set("",0);
 
 
