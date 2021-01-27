const bucketSort = (arr, sort)=>{
  const min = Math.min(...arr);
  const d = Math.max(...arr) - min;
  const len = arr.length;
  const bucket = [];
  for (let i = 0; i<len; ++i) {
    bucket.push([]);
  }
  for (let i = 0; i<len; ++i) {
    const index = ((arr[i]-min) * (len-1)/d)|0;
    bucket[index].push(arr[i]);
  }
  for (let i = 0; i<bucket.length; ++i) {
    sort(bucket[i]);
  }
  const ans = [];
  for (let i = 0; i<bucket.length; ++i) {
    for (let j = 0; j<bucket[i].length; ++j) {
      ans.push(bucket[i][j]);
    }
  }
  return ans;
}
;
export default bucketSort
;
