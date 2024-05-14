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

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let ll_1 = l1,
      ll_2 = l2,
      num1 = 0,
      num2 = 0,
      extra = 0,
      // Pravimo novi Linked List sa dummy vrednoscu kao head
      ll_3 = new ListNode(0),
      // Pamtimo Linked List head kako bi zadrzali pointer na head
      head = ll_3;

  while(ll_1 || ll_2){
    num1 = ll_1 ? ll_1.val : 0;
    num2 = ll_2 ? ll_2.val : 0;

    if(num1 + num2 + extra > 9){
      ll_3.next = new ListNode(num1 + num2 + extra - 10);
      ll_3 = ll_3.next;
      extra = 1;
    } else {
      ll_3.next = new ListNode(num1 + num2 + extra);
      ll_3 = ll_3.next;
      extra = 0;
    }

    if(ll_1) ll_1 = ll_1.next;
    if(ll_2) ll_2 = ll_2.next;
  }

  if(extra) ll_3.next = new ListNode(extra);

  // Saljemo .next kako bi preskocili dummy vrednost (0)
  return head.next;
};