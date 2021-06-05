const mergeSort = require("./algorithms/MergeSort");
const KaratsubaMultiply = require("./algorithms/KaratsubaMultiply");

// Testing Merge Sort
const array = [23, 52, 1, 3, 7, 9, 4, 6, 94, 12, 35, 87];

console.log(`unsorted => ${array.join(",")}`);
console.log(`sorted   => ${mergeSort(array).join(",")}`);

//  Testing KaratsubaMultiply
const x = 3141592653589793238462643383279502884197169399375105820974944592;
const y = 2718281828459045235360287471352662497757247093699959574966967627;
console.time("default");
console.log(`default multipy   => ${x * y}`);
console.timeEnd("default");

console.time("Karatsuba");
console.log(`KaratsubaMultiply => ${KaratsubaMultiply(x, y)}`);
console.timeEnd("Karatsuba");
