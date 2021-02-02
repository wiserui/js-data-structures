const MinPQ = (() => {
  return function() {
    const arr = [undefined];
    const __left = (i) => i * 2;
    const __right = (i) => i * 2 + 1;
    const __parent = (i) => i >>> 1;
    const __exch = (i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const __less = (i, j) => arr[i] - arr[j] < 0;
    const __len = () => arr.length;
    const __skin = (i) => {
      let oldest;
      while (__left(i)<__len()) {
        oldest = __left(i);
        if (__right(i)<__len() && __less(__right(i), oldest)) {
          oldest = __right(i);
        }
        if (__less(i, oldest)) {
          return;
        }
        __exch(oldest, i);
        i = oldest;
      }
    };
    const __swim = (i) => {
      while (i>1) {
        if (__less(__parent(i), i)) {
          return;
        }
        __exch(__parent(i), i);
        i = __parent(i);
      }
    };
    const add = (val) => {
      const last = __len();
      arr.push(val);
      __swim(last);
    };
    const getMin = () => arr[1];
    const delMin = () => {
      const last = __len() - 1;
      const result = arr[1];
      __exch(1, last);
      arr.splice(last, 1);
      __skin(1);
      return result;
    };
    if (!(this instanceof MinPQ)) {
      return new MinPQ();
    }
    this.getMin = getMin;
    this.delMin = delMin;
    this.add = add;
    this.size = () => __len() - 1;
  };
})();
export default MinPQ;
