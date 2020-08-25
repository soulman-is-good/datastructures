class BinaryTree {
  constructor(array, rootIndex) {
    this._tree = array || [];
    this._root = rootIndex || 0;
  }

  add(item) {
    this._tree.push(item);
  }

  get left() {
    const idx = 2 * this._root + 1;

    if (typeof this._tree[idx] === 'undefined') {
      return null;
    }

    return new BinaryTree(this._tree, idx);
  }

  get right() {
    const idx = 2 * this._root + 2;

    if (typeof this._tree[idx] === 'undefined') {
      return null;
    }

    return new BinaryTree(this._tree, idx);
  }

  get data() {
    return this._tree[this._root];
  }

  get isEmpty() {
    return this._tree.length === 0;
  }

  get height() {
    return Math.ceil(Math.log2(this._tree.length - this._root + 1));
  }
}

module.exports = { BinaryTree };
