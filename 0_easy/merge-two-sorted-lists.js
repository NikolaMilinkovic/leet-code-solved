// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

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
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// Build linked lists for testing
function getLinkedList(list){
  let head = undefined;
  let current_node;

  for(const value of list){
    if(head === undefined){
      head = new ListNode(value, null);
      current_node = head;
    } else {
      const new_node = new ListNode(value, null)
      current_node.next = new_node;
      current_node = new_node;
    }
  }

  return head;
}


var mergeTwoLists = function(ll1, ll2) {
let list1 = getLinkedList(ll1);
let list2 = getLinkedList(ll2);
let dummy = new ListNode();
let current = dummy;


  while(list1 !== null && list2 !== null){
    if(list1.val <= list2.val){
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if(list1 !== null){
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
};

// ===================== [ SOME BETTER SOLUTIONS ] =====================
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if(list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
  }
};