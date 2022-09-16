/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    const recur = (current, prev) => {
        if(!current) return head;
        
        if(current.val === val) {
           if(!prev) {
               let temp = current.next;
               head = temp;
               current.next = null;
               
               return recur(temp);
           } else {
               prev.next = current.next;
               current.next = null;
               
               return recur(prev.next, prev);
           }
        }
        
        return recur(current.next, current);
        
    }
    head = recur(head);
    if(!head || head.val === val) return null;
    return head
};
