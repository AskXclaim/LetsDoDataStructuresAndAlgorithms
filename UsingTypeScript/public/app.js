import { Nemo } from "./Lessons";
const largeCollection = new Array(1000).fill("none");
const started = performance.now();
const result = Nemo.IsNemoPresent(largeCollection);
const ended = performance.now();
console.log(`It took ${ended - started} mill seconds`);
