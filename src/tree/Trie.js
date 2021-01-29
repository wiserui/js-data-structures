const TrieNode = function(val) {
  this.val = val;
  this.children = [];
  this.count = 0;
};
const Trie = (()=>{
  return function() {
    const _root = new TrieNode();
    const add = (word)=>{
      const helper = (node, pos)=>{
        if (pos >= word.length) {
          ++node.count;
          return;
        }
        const char = word[pos];
        if (node.children[char]===undefined) {
          node.children[char] = new TrieNode(char);
        }
        helper(node.children[char], pos + 1);
      };
      helper(_root, 0);
    };
    const startsWith = (prefix) =>{
      const helper = (node, pos)=>{
        if (pos >= prefix.length) {
          return true;
        }
        const char = prefix[pos];
        console.log(node, char);
        if (node.children[char]===undefined) {
          return false;
        }
        return helper(node.children[char], pos + 1);
      };
      return helper(_root, 0);
    };
    const search = (word)=>{
      const helper = (node, pos)=>{
        if (pos >= word.length) {
          return node.count > 0;
        }
        const char = word[pos];
        if (node.children[char]===undefined) {
          return false;
        }
        return helper(node.children[char], pos + 1);
      };
      return helper(_root, 0);
    };

    if (!(this instanceof Trie)) {
      return new Trie();
    }
    this.add = add;
    this.toString = ()=>_root;
    this.startsWith = startsWith;
    this.search = search;
  };
})();
export default Trie;
