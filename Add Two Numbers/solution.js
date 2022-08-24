/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let i = 0;
    let res = new ListNode(0);
    let newNode = res
    
    while(l1||l2||i){
        let sum = (l1?l1.val:0) + (l2?l2.val:0) + i
        
        i = Math.floor(sum / 10)
        sum %= 10
        
        newNode.next = new ListNode(sum)
        
        l1 = l1? l1.next : null;
        l2 = l2? l2.next : null;
        
        newNode = newNode.next
    }
    
    return res.next
};
