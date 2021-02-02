const MaxPQ = (() => {
  return function() {
    const arr = [undefined];
    const __left = (i) => i * 2;
    const __right = (i) => i * 2 + 1;
    const __parent = (i) => i >>> 1;
    const __exch = (i, j) => {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
    const __less = (i, j) => arr[i] - arr[j] < 0;
    const __size = () => arr.length;
    const __skin = (i) => {
      let oldest;
      while (__left(i) < __size()) {
        oldest = __left(i);
        if (__right(i) < __size() && __less(oldest, __right(i))) {
          oldest = __right(i);
        }
        if (__less(oldest, i)) {
          return;
        }
        __exch(i, oldest);
        i = oldest;
      }
    };
    const __swim = (i) => {
      while (i > 1) {
        if (__less(i, __parent(i))) {
          return;
        }
        __exch(__parent(i), i);
        i = __parent(i);
      }
    };
    const add = (val) => {
      const last = __size();
      arr.push(val);
      __swim(last);
    };
    const getMax = () => arr[1];
    const delMax = () => {
      const last = __size() - 1;
      const result = arr[1];
      __exch(1, last);
      arr.splice(last, 1);
      __skin(1);
      return result;
    };
    if (!(this instanceof MaxPQ)) {
      return new MaxPQ();
    }
    this.getMax = getMax;
    this.delMax = delMax;
    this.add = add;
  };
})();
export default MaxPQ;
