/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head){
  let listData = [];
  let node = head;

  while(node !== null){
      listData.unshift(node);
      node = node.next;
  }

  for (let i = 0; i < listData.length - 1; i++) {
      listData[i].next = listData[i + 1];
  }

  if (listData.length > 0) {
      listData[listData.length - 1].next = null;
      head = listData[0];
  }

  return head; 
}

function reverseList(head){
  if(head === null || head.next === null) return head;

  let rest = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return rest;
}