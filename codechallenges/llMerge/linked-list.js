'use strict';

//Node Class
class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//////////////////////////////////////////////////////////////

//LinkedList Class
class LinkedList {

  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    //if the linked list is empty, add this node to the head
    if (this.head === null) {
      this.head = node;
    }
    //if the linked list is not empty and already have linked Nodes:
    //(1) let the next of this node to point at the head of the list, so that this node now is linked to the list before the head and points to the list, i.e. : {node} -> Head -> {value 1} -> {value 2} -> ...
    //(2) now let the head point to this node so it becomes the head of the list and first node of the list, i.e. : Head -> {node} -> {value 1} -> {value 2} -> ...
    else {
      //(1)//
      node.next = this.head;
      //(2)//
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    }
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      else { currentNode = currentNode.next; }
    }
    return 'Exception';
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;
      }
      currentNode = currentNode.next;
    }
    return 'Exception';
  }

  includes(value) {
    //start from the head and move through the linked list, as long as the current Node != Null compare its value with the given value, if they're equal return `true` if not move to the next Node and so on..
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    //start from the head and move through the linked list, as long as the current Node != Null take its value and put it in a formatted string then move to the next node and add its value to the same string and so on, after that return the stringified string with a "NULL" added at the end
    let currentNode = this.head;
    let nodeString = '';
    while (currentNode) {
      nodeString += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    return JSON.stringify(nodeString + 'NULL');  //note that if the list is empty it will return only "NULL"
  }
}

module.exports = LinkedList;
