const insertionSort = (arr, start = 1) => {
  for (let i = start; i < arr.length; ++i) {
    for (let j = i; j--; ) {
      if (arr[j + 1] >= arr[j]) break;
      else [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
};
export default insertionSort;
