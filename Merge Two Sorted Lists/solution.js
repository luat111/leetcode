/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let l1 = list1 ? list1.val : 0;
    let l2 = list2 ? list2.val : 0;
    let res = new ListNode(l1 >= l2 ? l1 : l2);
    let newList = res;
    
    if(!list1 && !list2) return null
    
    while(list1 || list2){
        if(!list1 || !list2){
            if(list1){
                newList.next = list1 ;   
                list1 = list1.next;
            } else {
                newList.next = list2 ;    
                list2 = list2.next;
            }        
        }else{
            if(list1.val < list2.val){
                newList.next = list1 ;   
                list1 = list1.next;
            } else {
                newList.next = list2 ;    
                list2 = list2.next;
            } 
        }        
        newList = newList.next
    }
    
    return res.next;
};
