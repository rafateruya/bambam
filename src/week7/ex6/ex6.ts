class SinglyLinkedListNode {
  data: number
  next: SinglyLinkedListNode | null

  constructor(nodeData: number) {
    this.data = nodeData
    this.next = null
  }
}

class SinglyLinkedList {
  head: SinglyLinkedListNode | null
  tail: SinglyLinkedListNode | null

  constructor() {
    this.head = null
    this.tail = null
  }

  insertNode(nodeData: number): void {
    const node = new SinglyLinkedListNode(nodeData)

    if (this.head == null) {
      this.head = node
    } else {
      this.tail!.next = node
    }

    this.tail = node
  }
}

function printSinglyLinkedList(node: SinglyLinkedListNode | null, sep: string, ws: WriteStream): void {
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
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     number data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

const updateNextRef = (
  refToUpdate: SinglyLinkedListNode,
  newNextRef: SinglyLinkedListNode | null,
): SinglyLinkedListNode => {
  if (!refToUpdate.next) {
    refToUpdate.next = newNextRef
    return refToUpdate
  } else {
    const head = updateNextRef(refToUpdate.next, refToUpdate)
    refToUpdate.next = newNextRef
    return head
  }
}

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
  // Write your code here
  const head = updateNextRef(llist, null)
  return head
}
