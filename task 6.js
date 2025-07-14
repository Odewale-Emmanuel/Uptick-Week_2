// 6. Reverse a Linked List

//     Given the head of a singly linked list, reverse the list and return the new head.Example
//     Input: head = [1, 2, 3, 4, 5]
//     Output: [5, 4, 3, 2, 1]

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

const head = {
  value: 1,
  next: {
    value: 2,
    next: { value: 3, next: { value: 4, next: { value: 5, next: null } } },
  },
};
const reversedList = reverseLinkedList(head);
console.log(linkedListToArray(reversedList));
