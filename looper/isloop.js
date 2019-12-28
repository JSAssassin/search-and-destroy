'use strict';

//Complete this algo

const isLoop = linkedlist => {
  let arr = [];
  let currentNode = linkedlist.head;
  while (currentNode) {
    if (!arr.includes(currentNode.value)) {
      arr.push(currentNode.value);
    } else {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
