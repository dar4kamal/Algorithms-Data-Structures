const _mergeSort = (right, left) => {
  /**
   * Merge Sort Sub Routine for Merging two arrays in a sorted one
   */
  let output = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (right[j] > left[i]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    output.push(left[i++]);
  }
  while (j < right.length) {
    output.push(right[j++]);
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

  const right = mergeSort(arr.slice(0, n / 2));
  const left = mergeSort(arr.slice(n / 2));
  return _mergeSort(right, left);
};

module.exports = mergeSort;
