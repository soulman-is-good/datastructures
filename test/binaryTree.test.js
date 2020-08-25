const { assert } = require('chai');
const { BinaryTree } = require('../lib/binaryTree');

describe('BinaryTree', () => {
  it('should create binary tree', () => {
    const tree = new BinaryTree();

    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(5);

    assert.isFalse(tree.isEmpty);
    assert.equal(tree.height, 3);
    assert.equal(tree.left.data, 2);
    assert.equal(tree.right.data, 3);
    assert.equal(tree.left.left.data, 4);
    assert.equal(tree.left.right.data, 5);
  });
});
