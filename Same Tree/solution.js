/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    const recur = (_root) => {
         if (!_root) return [null];
         let temp = [_root.val]
         temp = [recur(_root.left), 'left'].concat(temp)
         temp = temp.concat([recur(_root.right), 'right'])
         return temp;
     }
     return recur(p).join() === recur(q).join()
 };