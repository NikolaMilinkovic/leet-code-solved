const hasCycle = (head) => {
  if(!head || !head.next) return false;
  let slow = head;
  let fast = head;

  while(slow.next !== null){
      slow = slow.next;
      if(fast.next === null || fast.next.next === null) return false
      fast = fast.next.next;
      if(slow === fast){
          return true;
      }
  }
  return false
};