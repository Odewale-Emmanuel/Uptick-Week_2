// `5. Insert a Node in a Sorted Linked List
// Given a sorted linked list, insert a new node with a given value into the correct sorted position in the list.Example

//     Input: head = [1, 2, 4, 5], value = 3
//     Output: [1, 2, 3, 4, 5]`

function insertInSortedLinkedList(head, value) {
  const newNode = { value: value, next: null };

  if (!head || head.value >= value) {
    newNode.next = head;
    return newNode;
  }

  let current = head;

  while (current.next && current.next.value < value) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;

  return head;
}
