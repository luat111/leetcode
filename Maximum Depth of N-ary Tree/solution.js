/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0;

  const recursion = (node, count = 0) => {
    if (!node || node.val === null || node.val === undefined) return;

    count += 1;
    max = Math.max(count, max);

    const childLength = node.children.length;
    if (childLength <= 0) return;

    for (let i = 0; i < childLength; i++) {
      recursion(node.children[i], count)
    }
  }

  recursion(root)

  return max
    
};
