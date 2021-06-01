```
const array = [23, 52, 1, 3, 7, 9, 4, 6, 94, 12, 35, 87];
const defaultSort = (arr) => arr.sort((a, b) => a - b);
const mergeArrays = (right, left) => {
  const output = new Array();
  let i = 0;
  let j = 0;
  while (j < left.length && i < right.length) {
    if (right[i] > left[j]) {
      output[k] = left[j];
      j++;
      console.log(output);
      console.log({ item: arr[0], n, list: arr });
      console.log({ right: arr.slice(0, n / 2), left: arr.slice(n / 2) });
    } else {
      output[k] = right[i];
      i++;
      console.log(output);
      console.log({ item: arr[0], n, list: arr });
      console.log({ right: arr.slice(0, n / 2), left: arr.slice(n / 2) });
    }
  }
  return output;
};
const mergeSort = (arr) => {
  /**
   * Merge Sort algorithm
   * @param arr array of unsorted numbers
   * Algorithm:
   * keep an array of size n empty for output
   * loop through 1 => n where n is number of items in the array
   * split array into two halfs
   * keep index of the two separate lists i,j
   * compare each item of the two arrays
   * put the lower one in the k index of the output array
   * push index of the lower item
   * keep going until i,j reaches last items
   */
  const n = arr.length;
  if (n == 1) return arr;

  let output = [];
  const right = mergeSort(arr.slice(0, n / 2));
  const left = mergeSort(arr.slice(n / 2));

  console.log({ item: arr[0], n, list: arr });
  console.log({ right: arr.slice(0, n / 2), left: arr.slice(n / 2) });
};

const merge = mergeSort(array);
const sorted = defaultSort(array);
console.log(sorted.length);
console.log(merge.length);
console.log(sorted);
console.log(merge);

```;
