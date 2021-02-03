const countSort = (arr) => {
  if (arr.length < 2) {
    return [...arr];
  }
  const frequency = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    frequency[arr[i]] = frequency[arr[i]] ?? 0;
    ++frequency[arr[i]];
  }
  const result = [];
  for (let i = min; i <= max; ++i) {
    for (let j = frequency[i]; j--; ) {
      result.push(i);
    }
  }
  return result;
};
export default countSort;
