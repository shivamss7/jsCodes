// one way to delete a node from list on which we have pointer temp
// is to copy the value of next node and then free the next node
temp.value = (temp.next).value;
temp.next = (temp.next).next;