/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    const map = new Map();

  const recur = (root) => {
    if (!root || root.val === undefined) return null;

    map.set(root.val, map.get(root.val) + 1 || 1);

    recur(root.left);
    recur(root.right);
  }

  recur(root);

  let max = 0;
  let arr = [];
  map.forEach((value, key) => {
    if (value === max) arr.push(key)
    if (value > max) { arr = [key]; max = value }
  })

  return arr;
};
