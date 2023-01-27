class DoublyLinkedListNode {
  data: number
  next: DoublyLinkedListNode | null
  prev: DoublyLinkedListNode | null

  constructor(nodeData: number) {
    this.data = nodeData
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  head: DoublyLinkedListNode | null
  tail: DoublyLinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(nodeData: number): void {
    let node = new DoublyLinkedListNode(nodeData)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail!.next = node
      node.prev = this.tail
    }

    this.tail = node
  }
}

function printDoublyLinkedList(node: DoublyLinkedListNode | null, sep: string, ws: WriteStream): void {
  while (node != null) {
    ws.write(String(node.data))

    node = node.next

    if (node != null) {
      ws.write(sep)
    }
  }
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     number data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */
const updateRefs = (
  refToUpdate: DoublyLinkedListNode,
  newNextRef: DoublyLinkedListNode | null,
): DoublyLinkedListNode => {
  if (!refToUpdate.next) {
    refToUpdate.next = newNextRef
    refToUpdate.prev = null
    return refToUpdate
  } else {
    const head = updateRefs(refToUpdate.next, refToUpdate)
    const auxNext = refToUpdate.next
    refToUpdate.next = newNextRef
    refToUpdate.prev = auxNext
    return head
  }
}
function reverse(llist: DoublyLinkedListNode): DoublyLinkedListNode {
  // Write your code here
  const head = updateRefs(llist, null)
  return head
}
