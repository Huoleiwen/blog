export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const array = arr.slice();
  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

// worst O(n^2)
// best O(n Log(n))
// average O(n log(n))
