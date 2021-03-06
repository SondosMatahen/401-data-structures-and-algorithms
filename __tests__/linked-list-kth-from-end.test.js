'use strict';

const LinkedList = require('../codechallenges/linedList-3/linked-list-kth-from-end');

//CC07 functionalities
describe('\nUnit Test 1: k is greater than the length of the linked list\n', () => {
  it('LinkedList kthFromEnd() method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(4)).toEqual('Exception');
  });
});

describe('\nUnit Test 2: k and the length of the list are the same\n', () => {
  it('LinkedList kthFromEnd() method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(3)).toEqual(list.head.value);
  });
});

describe('\nUnit Test 3: k is not a positive integer\n', () => {
  it('LinkedList kthFromEnd() method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(-2.5)).toEqual('Invalid Input!\nK Must Be A Positive Integer.');
  });
});

describe('\nUnit Test 4: the linked list is of a size 1\n', () => {
  it('LinkedList kthFromEnd() method', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.kthFromEnd(0)).toEqual(list.head.value);
    expect(list.kthFromEnd(1)).toEqual('Exception');
  });
});

describe('\nUnit Test 5: “Happy Path” where k is not at the end, but somewhere in the middle of the linked list\n', () => {
  it('LinkedList kthFromEnd() method', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(2)).toEqual(list.head.next.value);
  });
});



//prev functionalities
describe('Functionality # 1: Can successfully instantiate an empty linked list', () => {
  it('LinkedList constructor() -- an empty list will have a head of value NULL', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
});

describe('Functionality # 2: Can properly insert into the linked list', () => {
  it('LinkedList insert() method -- inserting a vlaue into an empty list will insert a Node with that value into the list', () => {
    let list = new LinkedList();
    const newNode = 'new Node';
    list.insert(newNode);
    expect(list.head.value).toEqual(newNode);
    expect(list.head.next).toBeNull();
  });
});

describe('Functionality # 3: The head property will properly point to the first node in the linked list', () => {
  it('LinkedList insert() method -- the value of the head property will be equal to the value of the last Node added which is the first one in the list', () => {
    let list = new LinkedList();
    const fistNode = 'first Node';
    const secondNode = 'second Node';
    const thirdNode = 'third Node';
    list.insert(thirdNode); list.insert(secondNode); list.insert(fistNode);
    expect(list.head.value).toEqual(fistNode);
  });
});

describe('Functionality # 4: Can properly insert multiple nodes into the linked list', () => {
  it('LinkedList insert() method -- each time a new Node is inserted it will be added and linked to the list', () => {
    let list = new LinkedList();
    const fistNode = 'first Node';
    list.insert(fistNode);
    expect(list.head.value).toEqual(fistNode);
    expect(list.head.next).toBeNull();
    const secondNode = 'second Node';
    list.insert(secondNode);
    expect(list.head.value).toEqual(secondNode);
    expect(list.head.next.value).toEqual(fistNode);
    const thirdNode = 'third Node';
    list.insert(thirdNode);
    expect(list.head.value).toEqual(thirdNode);
    expect(list.head.next.value).toEqual(secondNode);
  });
});

describe('Functionality # 5: Will return true when finding a value within the linked list that exists', () => {
  it('LinkedList inludes() method -- will tranverse the list searcing for a given value and returns true if the value exists in the list', () => {
    let list = new LinkedList();
    const fistNode = 5;
    const secondNode = 10;
    const thirdNode = 15;
    list.insert(thirdNode); list.insert(secondNode); list.insert(fistNode);
    expect(list.includes(10)).toEqual(true);
  });
});

describe('Functionality # 6: Will return false when searching for a value in the linked list that does not exist', () => {
  it('LinkedList inludes() method -- will tranverse the list searcing for a given value and returns false if the value does not exist in the list', () => {
    let list = new LinkedList();
    const fistNode = 5;
    const secondNode = 10;
    const thirdNode = 15;
    list.insert(thirdNode); list.insert(secondNode); list.insert(fistNode);
    expect(list.includes(20)).toEqual(false);
  });
});
describe('Functionality # 7: Can properly return a collection of all the values that exist in the linked list', () => {
  it('LinkedList toString() method -- will convert the list into a formatted string and returns the string which contains all the values in the list', () => {
    let list = new LinkedList();
    const fistNode = 5;
    const secondNode = 10;
    const thirdNode = 15;
    list.insert(thirdNode); list.insert(secondNode); list.insert(fistNode);
    expect(list.toString()).toEqual(expect.any(String));
    expect(list.toString()).toMatch('"{ 5 } -> { 10 } -> { 15 } -> NULL"');
  });
});
