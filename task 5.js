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

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = { value: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { value: arr[i], next: null };
    current = current.next;
  }
  return head;
}

function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

const head = arrayToLinkedList([1, 2, 4, 5]);
const newHead = insertInSortedLinkedList(head, 3);
console.log(linkedListToArray(newHead));
