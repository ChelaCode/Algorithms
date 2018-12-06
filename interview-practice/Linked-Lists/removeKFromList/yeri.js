function removeKFromList(l, k) {
 let node = new ListNode();
 node.next = l;
 let current = node;
 while (current.next) {
  if (current.next.value === k) {
   current.next = current.next.next;
  } else {
   current = current.next;
  }
 }
  return node.next; 
}
