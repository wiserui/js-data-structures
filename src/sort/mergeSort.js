const mergeSort = (arr)=>{
  const helper = (left, right)=>{
    if (left === right) {
      return;
    }
    const mid = ((right - left)>>>1) + left;
    helper(left, mid);
    helper(mid + 1, right);
    let i = 0;
    const t = [];
    let p1 = left;
    let p2 = mid + 1;
    while (p1<=mid || p2 <=right) {
      t[i++] = p2>right || p1<=mid && arr[p1]<arr[p2]?
      arr[p1++]:
      arr[p2++];
    }
    for (i = 0; i<t.length; ++i) {
      arr[left + i] = t[i];
    }
  };
  helper(0, arr.length-1);
};
export default mergeSort;
