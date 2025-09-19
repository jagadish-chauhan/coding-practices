/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @see https://leetcode.com/problems/add-two-numbers
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const headNode = new ListNode(0);
    let p = l1, q = l2, charNode = headNode, carry = 0, sum = 0;

    while (p !== null || q !== null || carry > 0) {

        sum = carry;
        if (p !== null) {
            sum += p.val;
            p = p.next;
        }
        if (q !== null) {
            sum += q.val;
            q = q.next;
        }
        charNode.next = new ListNode(sum % 10);
        charNode = charNode.next;
        carry = (sum - charNode.val) / 10;
    }

    return headNode.next;

};


class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}