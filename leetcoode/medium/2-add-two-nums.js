// from https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let output = new ListNode(l1.val + l2.val);
    let tail = output;
    let carry = 0;
    
    if(output.val > 9) {
        output.val -= 10;
        carry = 1;
    }
    
    l1 = l1.next; l2 = l2.next;
    
    while(l1 || l2) {
        tail.next = new ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry);
        carry = 0;
        tail = tail.next;
        if(tail.val > 9) {
            tail.val -= 10;
            carry = 1;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if(carry) {
        tail.next = new ListNode(1);
    }
    
    return output;
};
