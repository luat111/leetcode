/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const arr = [];

    const recur = (node) => {
        if (!node) return;
        arr.push(node.val);
        return recur(node.next)
    }

    if (!head.next) return true;

    recur(head);
    if (arr.join() === arr.reverse().join()) return true;
    return false;
};
