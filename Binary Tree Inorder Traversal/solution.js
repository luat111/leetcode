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
 var inorderTraversal = function(root) {
    if (!root) return [];

    const recur = (_root) => {
        if (!_root) return [];
        let temp = [_root.val !== undefined ? _root.val : _root]
        temp = recur(_root.left).concat(temp)
        temp = temp.concat(recur(_root.right))
        return temp;
    }

    return recur(root)
};