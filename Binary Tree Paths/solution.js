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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const set = new Set();
    const recur = (root, path) => {
        if (!root) return set;
        const newPath = path ? `${path}->${root.val}` : `${root.val}`;
        if (!root.left && !root.right && !set.has(path)) set.add(newPath);
        recur(root.left, newPath);
        recur(root.right, newPath);
        return set;
    }

    recur(root, '')
    return [...set]
};
