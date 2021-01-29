const _getNext = (pat)=>{
  const next = [0];
  for (let i = 1; i < pat.length - 1; ++i) {
    if (pat[i] === pat[next[i - 1]]) {
      next[i] = next[i - 1] + 1;
    } else {
      next[i] = 0 + (pat[i] === pat[0]);
    }
  }
  next.unshift(-1);
  return next;
};
const kmp = (txt, pat)=>{
  const next = _getNext(pat);
  console.log(next);
  let j;
  let i;
  for ( i = 0, j = 0; i < txt.length && j < pat.length; ++i) {
    while (j !== -1 && pat[j] !== txt[i]) {
      j = next[j];
    }
    ++j;
  }
  if (j === pat.length) {
    return i - pat.length;
  } else {
    return -1;
  }
};
export default kmp;
