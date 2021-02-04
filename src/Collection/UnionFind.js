const UnionFind = (() => {
  return function(n) {
    const __find = (x) => {
      while (__parent[x] !== x) {
        x = __parent[x];
      }
      return x;
    };
    const union = (p, q) => {
      const rootP = __find(p);
      const rootQ = __find(q);
      if (rootP === undefined || rootQ === undefined || rootP === rootQ) {
        return;
      }
      --__count;
      if (__size[rootP] < __size[rootQ]) {
        __parent[rootP] = rootQ;
        __size[rootQ] += __size[rootP];
      } else {
        __parent[rootQ] = rootP;
        __size[rootP] += __size[rootQ];
      }
    };
    const isConnected = (p, q) => __find(p) === __find(q);
    if (!(this instanceof UnionFind)) {
      return new UnionFind(n);
    }
    let __count = n;
    const __parent = [...new Array(n).keys()];
    const __size = new Array(n).fill(1);
    this.union = union;
    this.isConnected = isConnected;
    this.getCount = () => __count;
  };
})();
export default UnionFind;
