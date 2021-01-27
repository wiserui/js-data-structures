const quickSort = (arr) => {
  const helper = (left, right) => {
    if (left > right) return;
    let l = left;
    let r = right;
    while (l < r) {
      while (l < r && arr[r] >= arr[left]) --r;
      while (l < r && arr[l] <= arr[left]) ++l;
      [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    [arr[l], arr[left]] = [arr[left], arr[l]];
    helper(left, l - 1);
    helper(l + 1, right);
  };
  helper(0, arr.length - 1);
};
export default quickSort;
