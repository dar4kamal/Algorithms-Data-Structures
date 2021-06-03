const mergeSort = require("./algorithms/MergeSort");

// Testing Merge Sort
const array = [23, 52, 1, 3, 7, 9, 4, 6, 94, 12, 35, 87];

console.log(`unsorted => ${array.join(",")}`);
console.log(`sorted   => ${mergeSort(array).join(",")}`);
